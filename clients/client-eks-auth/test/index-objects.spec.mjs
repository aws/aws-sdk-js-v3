import {
  AccessDeniedException,
  AssumeRoleForPodIdentityCommand,
  EKSAuth,
  EKSAuthClient,
  EKSAuthServiceException,
  ExpiredTokenException,
  InternalServerException,
  InvalidParameterException,
  InvalidRequestException,
  InvalidTokenException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  ThrottlingException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EKSAuthClient === "function");
assert(typeof EKSAuth === "function");
// commands
assert(typeof AssumeRoleForPodIdentityCommand === "function");
// errors
assert(AccessDeniedException.prototype instanceof EKSAuthServiceException);
assert(ExpiredTokenException.prototype instanceof EKSAuthServiceException);
assert(InternalServerException.prototype instanceof EKSAuthServiceException);
assert(InvalidParameterException.prototype instanceof EKSAuthServiceException);
assert(InvalidRequestException.prototype instanceof EKSAuthServiceException);
assert(InvalidTokenException.prototype instanceof EKSAuthServiceException);
assert(ResourceNotFoundException.prototype instanceof EKSAuthServiceException);
assert(ServiceUnavailableException.prototype instanceof EKSAuthServiceException);
assert(ThrottlingException.prototype instanceof EKSAuthServiceException);
assert(EKSAuthServiceException.prototype instanceof Error);
console.log(`EKSAuth index test passed.`);
