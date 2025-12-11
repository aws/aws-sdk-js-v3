import {
  AccessDeniedException,
  CreateOAuth2TokenCommand,
  InternalServerException,
  OAuth2ErrorCode,
  Signin,
  SigninClient,
  SigninServiceException,
  TooManyRequestsError,
  ValidationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SigninClient === "function");
assert(typeof Signin === "function");
// commands
assert(typeof CreateOAuth2TokenCommand === "function");
// enums
assert(typeof OAuth2ErrorCode === "object");
// errors
assert(AccessDeniedException.prototype instanceof SigninServiceException);
assert(InternalServerException.prototype instanceof SigninServiceException);
assert(TooManyRequestsError.prototype instanceof SigninServiceException);
assert(ValidationException.prototype instanceof SigninServiceException);
assert(SigninServiceException.prototype instanceof Error);
console.log(`Signin index test passed.`);
