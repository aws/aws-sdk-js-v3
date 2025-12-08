import {
  AccessDeniedException,
  AccessDeniedExceptionReason,
  AuthorizationPendingException,
  CreateTokenCommand,
  CreateTokenWithIAMCommand,
  ExpiredTokenException,
  InternalServerException,
  InvalidClientException,
  InvalidClientMetadataException,
  InvalidGrantException,
  InvalidRedirectUriException,
  InvalidRequestException,
  InvalidRequestExceptionReason,
  InvalidRequestRegionException,
  InvalidScopeException,
  RegisterClientCommand,
  SSOOIDC,
  SSOOIDCClient,
  SSOOIDCServiceException,
  SlowDownException,
  StartDeviceAuthorizationCommand,
  UnauthorizedClientException,
  UnsupportedGrantTypeException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSOOIDCClient === "function");
assert(typeof SSOOIDC === "function");
// commands
assert(typeof CreateTokenCommand === "function");
assert(typeof CreateTokenWithIAMCommand === "function");
assert(typeof RegisterClientCommand === "function");
assert(typeof StartDeviceAuthorizationCommand === "function");
// enums
assert(typeof AccessDeniedExceptionReason === "object");
assert(typeof InvalidRequestExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof SSOOIDCServiceException);
assert(AuthorizationPendingException.prototype instanceof SSOOIDCServiceException);
assert(ExpiredTokenException.prototype instanceof SSOOIDCServiceException);
assert(InternalServerException.prototype instanceof SSOOIDCServiceException);
assert(InvalidClientException.prototype instanceof SSOOIDCServiceException);
assert(InvalidClientMetadataException.prototype instanceof SSOOIDCServiceException);
assert(InvalidGrantException.prototype instanceof SSOOIDCServiceException);
assert(InvalidRedirectUriException.prototype instanceof SSOOIDCServiceException);
assert(InvalidRequestException.prototype instanceof SSOOIDCServiceException);
assert(InvalidRequestRegionException.prototype instanceof SSOOIDCServiceException);
assert(InvalidScopeException.prototype instanceof SSOOIDCServiceException);
assert(SlowDownException.prototype instanceof SSOOIDCServiceException);
assert(UnauthorizedClientException.prototype instanceof SSOOIDCServiceException);
assert(UnsupportedGrantTypeException.prototype instanceof SSOOIDCServiceException);
assert(SSOOIDCServiceException.prototype instanceof Error);
console.log(`SSOOIDC index test passed.`);
