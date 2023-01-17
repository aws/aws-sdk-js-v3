/**
 * Implementation of SDK core logic that resolves the auth scheme, resolves the identity
 * and invokes the signer. This is a generic class that is configured at code generation
 * with service-specific authentication options.
 */
class AuthenticationMiddleware implements MiddlewareStage {
    private final MiddlewareStage nextMiddleware;
    private final AuthSchemeResolverAdapter authSchemeResolverAdapter;
    private final Map<String, HttpAuthScheme<?>> authSchemes;

    private AuthenticationMiddleware(MiddlewareStage nextMiddleware,
                                     AuthSchemeResolverAdapter authSchemeResolverAdapter,
                                     List<HttpAuthScheme<?>> authSchemes) {
        this.nextMiddleware = nextMiddleware;
        this.authSchemeResolverAdapter = authSchemeResolverAdapter;
        this.authSchemes = authSchemes.stream().collect(toMap(HttpAuthScheme::schemeId, s -> s));
    }

    @Override
    public CompletableFuture<ResponseContext> execute(RequestContext requestContext) {
        // Get the list of schemes to use for this request.
        List<HttpAuthOption> potentialAuthParameters =
            authSchemeResolverAdapter.resolveAuthSchemes(requestContext);

        // Find the first scheme that is supported by the SDK.
        HttpAuthOption schemeOption =
            potentialAuthParameters.stream()
                                   .filter(param -> authSchemes.containsKey(param.schemeId()))
                                   .findFirst()
                                   .orElseThrow(IllegalStateException::new);

        HttpAuthScheme<?> authScheme = authSchemes.get(schemeOption.schemeId());
        return execute(requestContext, schemeOption, authScheme);
    }

    private <T extends Identity>
        CompletableFuture<ResponseContext> execute(RequestContext requestContext,
                                                   HttpAuthOption schemeOption,
                                                   HttpAuthScheme<T> authScheme) {

        // Resolve the customer's identity
        CompletableFuture<T> identityFuture =
            authScheme.identityResolver(requestContext.identityConfiguration())
                      .getIdentity(schemeOption.identityProperties());

        return identityFuture.thenCompose(identity -> {
            // Sign the request using the identity.
            HttpRequest signedRequest =
                authScheme.signer().sign(requestContext.getHttpRequest(),
                                         identity,
                                         schemeOption.signerProperties());

            // Pass the signed request off to the next middleware stage.
            requestContext.setSignedHttpRequest(signedRequest);
            return nextMiddleware.execute(requestContext);
        });
    }
}

/**
 * Java-specific generic interface that makes it possible for AuthenticationMiddleware to
 * be agnostic of service. This would be defined in the same module as AuthenticationMiddleware
 * and implementations would be code generated for each service (see S3AuthSchemeResolverAdapter
 * below for an example).
 *
 * This interface is specific to the Java SDK and would not be visible to service teams.
 */
interface AuthSchemeResolverAdapter {
    List<HttpAuthOption> resolveAuthSchemes(RequestContext requestContext);
}

/**
 * Code-generated s3-specific implementation of AuthSchemeResolverAdapter, for example.
 */
class S3AuthSchemeResolverAdapter implements AuthSchemeResolverAdapter {
    private final S3AuthSchemeResolver authSchemeResolver = S3AuthSchemeResolver.create();

    @Override
    public List<HttpAuthOption> resolveAuthSchemes(RequestContext requestContext) {
        S3AuthSchemeParameters params =
            S3AuthSchemeParameters.builder()
                                  .serviceId("s3")
                                  .bucket(requestContext.request().parameter("bucket"))
                                  .build();
        return authSchemeResolver.resolveAuthScheme(params);
    }
}
