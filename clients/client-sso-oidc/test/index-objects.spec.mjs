import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionReason,
  AuthorizationPendingException,
  AuthorizationPendingException$,
  AwsAdditionalDetails$,
  CreateToken$,
  CreateTokenCommand,
  CreateTokenRequest$,
  CreateTokenResponse$,
  CreateTokenWithIAM$,
  CreateTokenWithIAMCommand,
  CreateTokenWithIAMRequest$,
  CreateTokenWithIAMResponse$,
  ExpiredTokenException,
  ExpiredTokenException$,
  InternalServerException,
  InternalServerException$,
  InvalidClientException,
  InvalidClientException$,
  InvalidClientMetadataException,
  InvalidClientMetadataException$,
  InvalidGrantException,
  InvalidGrantException$,
  InvalidRedirectUriException,
  InvalidRedirectUriException$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidRequestExceptionReason,
  InvalidRequestRegionException,
  InvalidRequestRegionException$,
  InvalidScopeException,
  InvalidScopeException$,
  RegisterClient$,
  RegisterClientCommand,
  RegisterClientRequest$,
  RegisterClientResponse$,
  SSOOIDC,
  SSOOIDCClient,
  SSOOIDCServiceException,
  SlowDownException,
  SlowDownException$,
  StartDeviceAuthorization$,
  StartDeviceAuthorizationCommand,
  StartDeviceAuthorizationRequest$,
  StartDeviceAuthorizationResponse$,
  UnauthorizedClientException,
  UnauthorizedClientException$,
  UnsupportedGrantTypeException,
  UnsupportedGrantTypeException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSOOIDCClient === "function");
assert(typeof SSOOIDC === "function");
// commands
assert(typeof CreateTokenCommand === "function");
assert(typeof CreateToken$ === "object");
assert(typeof CreateTokenWithIAMCommand === "function");
assert(typeof CreateTokenWithIAM$ === "object");
assert(typeof RegisterClientCommand === "function");
assert(typeof RegisterClient$ === "object");
assert(typeof StartDeviceAuthorizationCommand === "function");
assert(typeof StartDeviceAuthorization$ === "object");
// structural schemas
assert(typeof AwsAdditionalDetails$ === "object");
assert(typeof CreateTokenRequest$ === "object");
assert(typeof CreateTokenResponse$ === "object");
assert(typeof CreateTokenWithIAMRequest$ === "object");
assert(typeof CreateTokenWithIAMResponse$ === "object");
assert(typeof RegisterClientRequest$ === "object");
assert(typeof RegisterClientResponse$ === "object");
assert(typeof StartDeviceAuthorizationRequest$ === "object");
assert(typeof StartDeviceAuthorizationResponse$ === "object");
// enums
assert(typeof AccessDeniedExceptionReason === "object");
assert(typeof InvalidRequestExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof SSOOIDCServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(AuthorizationPendingException.prototype instanceof SSOOIDCServiceException);
assert(typeof AuthorizationPendingException$ === "object");
assert(ExpiredTokenException.prototype instanceof SSOOIDCServiceException);
assert(typeof ExpiredTokenException$ === "object");
assert(InternalServerException.prototype instanceof SSOOIDCServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidClientException.prototype instanceof SSOOIDCServiceException);
assert(typeof InvalidClientException$ === "object");
assert(InvalidClientMetadataException.prototype instanceof SSOOIDCServiceException);
assert(typeof InvalidClientMetadataException$ === "object");
assert(InvalidGrantException.prototype instanceof SSOOIDCServiceException);
assert(typeof InvalidGrantException$ === "object");
assert(InvalidRedirectUriException.prototype instanceof SSOOIDCServiceException);
assert(typeof InvalidRedirectUriException$ === "object");
assert(InvalidRequestException.prototype instanceof SSOOIDCServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(InvalidRequestRegionException.prototype instanceof SSOOIDCServiceException);
assert(typeof InvalidRequestRegionException$ === "object");
assert(InvalidScopeException.prototype instanceof SSOOIDCServiceException);
assert(typeof InvalidScopeException$ === "object");
assert(SlowDownException.prototype instanceof SSOOIDCServiceException);
assert(typeof SlowDownException$ === "object");
assert(UnauthorizedClientException.prototype instanceof SSOOIDCServiceException);
assert(typeof UnauthorizedClientException$ === "object");
assert(UnsupportedGrantTypeException.prototype instanceof SSOOIDCServiceException);
assert(typeof UnsupportedGrantTypeException$ === "object");
assert(SSOOIDCServiceException.prototype instanceof Error);
console.log(`SSOOIDC index test passed.`);
