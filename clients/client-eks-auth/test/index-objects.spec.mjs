import {
  AccessDeniedException,
  AccessDeniedException$,
  AssumedRoleUser$,
  AssumeRoleForPodIdentity$,
  AssumeRoleForPodIdentityCommand,
  AssumeRoleForPodIdentityRequest$,
  AssumeRoleForPodIdentityResponse$,
  Credentials$,
  EKSAuth,
  EKSAuthClient,
  EKSAuthServiceException,
  ExpiredTokenException,
  ExpiredTokenException$,
  InternalServerException,
  InternalServerException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidTokenException,
  InvalidTokenException$,
  PodIdentityAssociation$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  Subject$,
  ThrottlingException,
  ThrottlingException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EKSAuthClient === "function");
assert(typeof EKSAuth === "function");
// commands
assert(typeof AssumeRoleForPodIdentityCommand === "function");
assert(typeof AssumeRoleForPodIdentity$ === "object");
// structural schemas
assert(typeof AssumedRoleUser$ === "object");
assert(typeof AssumeRoleForPodIdentityRequest$ === "object");
assert(typeof AssumeRoleForPodIdentityResponse$ === "object");
assert(typeof Credentials$ === "object");
assert(typeof PodIdentityAssociation$ === "object");
assert(typeof Subject$ === "object");
// errors
assert(AccessDeniedException.prototype instanceof EKSAuthServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ExpiredTokenException.prototype instanceof EKSAuthServiceException);
assert(typeof ExpiredTokenException$ === "object");
assert(InternalServerException.prototype instanceof EKSAuthServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidParameterException.prototype instanceof EKSAuthServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidRequestException.prototype instanceof EKSAuthServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(InvalidTokenException.prototype instanceof EKSAuthServiceException);
assert(typeof InvalidTokenException$ === "object");
assert(ResourceNotFoundException.prototype instanceof EKSAuthServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof EKSAuthServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof EKSAuthServiceException);
assert(typeof ThrottlingException$ === "object");
assert(EKSAuthServiceException.prototype instanceof Error);
console.log(`EKSAuth index test passed.`);
