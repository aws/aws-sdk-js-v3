import {
  AccessDeniedException,
  AddProfilePermissionCommand,
  BadRequestException,
  CancelSigningProfileCommand,
  Category,
  ConflictException,
  DescribeSigningJobCommand,
  EncryptionAlgorithm,
  GetRevocationStatusCommand,
  GetSigningPlatformCommand,
  GetSigningProfileCommand,
  HashAlgorithm,
  ImageFormat,
  InternalServiceErrorException,
  ListProfilePermissionsCommand,
  ListSigningJobsCommand,
  ListSigningPlatformsCommand,
  ListSigningProfilesCommand,
  ListTagsForResourceCommand,
  NotFoundException,
  PutSigningProfileCommand,
  RemoveProfilePermissionCommand,
  ResourceNotFoundException,
  RevokeSignatureCommand,
  RevokeSigningProfileCommand,
  ServiceLimitExceededException,
  SignPayloadCommand,
  Signer,
  SignerClient,
  SignerServiceException,
  SigningProfileStatus,
  SigningStatus,
  StartSigningJobCommand,
  TagResourceCommand,
  ThrottlingException,
  TooManyRequestsException,
  UntagResourceCommand,
  ValidationException,
  ValidityType,
  paginateListSigningJobs,
  paginateListSigningPlatforms,
  paginateListSigningProfiles,
  waitForSuccessfulSigningJob,
  waitUntilSuccessfulSigningJob,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SignerClient === "function");
assert(typeof Signer === "function");
// commands
assert(typeof AddProfilePermissionCommand === "function");
assert(typeof CancelSigningProfileCommand === "function");
assert(typeof DescribeSigningJobCommand === "function");
assert(typeof GetRevocationStatusCommand === "function");
assert(typeof GetSigningPlatformCommand === "function");
assert(typeof GetSigningProfileCommand === "function");
assert(typeof ListProfilePermissionsCommand === "function");
assert(typeof ListSigningJobsCommand === "function");
assert(typeof ListSigningPlatformsCommand === "function");
assert(typeof ListSigningProfilesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutSigningProfileCommand === "function");
assert(typeof RemoveProfilePermissionCommand === "function");
assert(typeof RevokeSignatureCommand === "function");
assert(typeof RevokeSigningProfileCommand === "function");
assert(typeof SignPayloadCommand === "function");
assert(typeof StartSigningJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof Category === "object");
assert(typeof EncryptionAlgorithm === "object");
assert(typeof HashAlgorithm === "object");
assert(typeof ImageFormat === "object");
assert(typeof SigningProfileStatus === "object");
assert(typeof SigningStatus === "object");
assert(typeof ValidityType === "object");
// errors
assert(AccessDeniedException.prototype instanceof SignerServiceException);
assert(BadRequestException.prototype instanceof SignerServiceException);
assert(ConflictException.prototype instanceof SignerServiceException);
assert(InternalServiceErrorException.prototype instanceof SignerServiceException);
assert(NotFoundException.prototype instanceof SignerServiceException);
assert(ResourceNotFoundException.prototype instanceof SignerServiceException);
assert(ServiceLimitExceededException.prototype instanceof SignerServiceException);
assert(ThrottlingException.prototype instanceof SignerServiceException);
assert(TooManyRequestsException.prototype instanceof SignerServiceException);
assert(ValidationException.prototype instanceof SignerServiceException);
assert(SignerServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForSuccessfulSigningJob === "function");
assert(typeof waitUntilSuccessfulSigningJob === "function");
// paginators
assert(typeof paginateListSigningJobs === "function");
assert(typeof paginateListSigningPlatforms === "function");
assert(typeof paginateListSigningProfiles === "function");
console.log(`Signer index test passed.`);
