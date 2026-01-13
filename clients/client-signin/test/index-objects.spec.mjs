import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessToken$,
  CreateOAuth2Token$,
  CreateOAuth2TokenCommand,
  CreateOAuth2TokenRequest$,
  CreateOAuth2TokenRequestBody$,
  CreateOAuth2TokenResponse$,
  CreateOAuth2TokenResponseBody$,
  InternalServerException,
  InternalServerException$,
  OAuth2ErrorCode,
  Signin,
  SigninClient,
  SigninServiceException,
  TooManyRequestsError,
  TooManyRequestsError$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SigninClient === "function");
assert(typeof Signin === "function");
// commands
assert(typeof CreateOAuth2TokenCommand === "function");
assert(typeof CreateOAuth2Token$ === "object");
// structural schemas
assert(typeof AccessToken$ === "object");
assert(typeof CreateOAuth2TokenRequest$ === "object");
assert(typeof CreateOAuth2TokenRequestBody$ === "object");
assert(typeof CreateOAuth2TokenResponse$ === "object");
assert(typeof CreateOAuth2TokenResponseBody$ === "object");
// enums
assert(typeof OAuth2ErrorCode === "object");
// errors
assert(AccessDeniedException.prototype instanceof SigninServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof SigninServiceException);
assert(typeof InternalServerException$ === "object");
assert(TooManyRequestsError.prototype instanceof SigninServiceException);
assert(typeof TooManyRequestsError$ === "object");
assert(ValidationException.prototype instanceof SigninServiceException);
assert(typeof ValidationException$ === "object");
assert(SigninServiceException.prototype instanceof Error);
console.log(`Signin index test passed.`);
