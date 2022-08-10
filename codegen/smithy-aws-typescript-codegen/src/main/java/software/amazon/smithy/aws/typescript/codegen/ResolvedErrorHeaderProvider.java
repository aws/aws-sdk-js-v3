package software.amazon.smithy.aws.typescript.codegen;

import java.util.ServiceLoader;

public class ResolvedErrorHeaderProvider implements ErrorHeaderProvider {
    private static final ErrorHeaderProvider SINGLETON = new ResolvedErrorHeaderProvider();

    final String errorHeader;
    private ResolvedErrorHeaderProvider() {
        final ServiceLoader<ErrorHeaderProvider> loader = ServiceLoader.load(ErrorHeaderProvider.class);
        errorHeader = loader.findFirst().orElse(new AwsSdkErrorHeaderProvider());
    }

    @Override
    public String getErrorHeader() {
        return errorHeader;
    }

    public static ErrorHeaderProvider getSingletonInstance() {
        return SINGLETON;
    }
}