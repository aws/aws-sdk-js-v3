import {
  AccessDeniedException,
  AccessDeniedException$,
  AddProfilePermission$,
  AddProfilePermissionCommand,
  AddProfilePermissionRequest$,
  AddProfilePermissionResponse$,
  BadRequestException,
  BadRequestException$,
  CancelSigningProfile$,
  CancelSigningProfileCommand,
  CancelSigningProfileRequest$,
  Category,
  ConflictException,
  ConflictException$,
  DescribeSigningJob$,
  DescribeSigningJobCommand,
  DescribeSigningJobRequest$,
  DescribeSigningJobResponse$,
  Destination$,
  EncryptionAlgorithm,
  EncryptionAlgorithmOptions$,
  GetRevocationStatus$,
  GetRevocationStatusCommand,
  GetRevocationStatusRequest$,
  GetRevocationStatusResponse$,
  GetSigningPlatform$,
  GetSigningPlatformCommand,
  GetSigningPlatformRequest$,
  GetSigningPlatformResponse$,
  GetSigningProfile$,
  GetSigningProfileCommand,
  GetSigningProfileRequest$,
  GetSigningProfileResponse$,
  HashAlgorithm,
  HashAlgorithmOptions$,
  ImageFormat,
  InternalServiceErrorException,
  InternalServiceErrorException$,
  ListProfilePermissions$,
  ListProfilePermissionsCommand,
  ListProfilePermissionsRequest$,
  ListProfilePermissionsResponse$,
  ListSigningJobs$,
  ListSigningJobsCommand,
  ListSigningJobsRequest$,
  ListSigningJobsResponse$,
  ListSigningPlatforms$,
  ListSigningPlatformsCommand,
  ListSigningPlatformsRequest$,
  ListSigningPlatformsResponse$,
  ListSigningProfiles$,
  ListSigningProfilesCommand,
  ListSigningProfilesRequest$,
  ListSigningProfilesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NotFoundException,
  NotFoundException$,
  Permission$,
  PutSigningProfile$,
  PutSigningProfileCommand,
  PutSigningProfileRequest$,
  PutSigningProfileResponse$,
  RemoveProfilePermission$,
  RemoveProfilePermissionCommand,
  RemoveProfilePermissionRequest$,
  RemoveProfilePermissionResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RevokeSignature$,
  RevokeSignatureCommand,
  RevokeSignatureRequest$,
  RevokeSigningProfile$,
  RevokeSigningProfileCommand,
  RevokeSigningProfileRequest$,
  S3Destination$,
  S3SignedObject$,
  S3Source$,
  ServiceLimitExceededException,
  ServiceLimitExceededException$,
  SignPayload$,
  SignPayloadCommand,
  SignPayloadRequest$,
  SignPayloadResponse$,
  SignatureValidityPeriod$,
  SignedObject$,
  Signer,
  SignerClient,
  SignerServiceException,
  SigningConfiguration$,
  SigningConfigurationOverrides$,
  SigningImageFormat$,
  SigningJob$,
  SigningJobRevocationRecord$,
  SigningMaterial$,
  SigningPlatform$,
  SigningPlatformOverrides$,
  SigningProfile$,
  SigningProfileRevocationRecord$,
  SigningProfileStatus,
  SigningStatus,
  Source$,
  StartSigningJob$,
  StartSigningJobCommand,
  StartSigningJobRequest$,
  StartSigningJobResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
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
assert(typeof AddProfilePermission$ === "object");
assert(typeof CancelSigningProfileCommand === "function");
assert(typeof CancelSigningProfile$ === "object");
assert(typeof DescribeSigningJobCommand === "function");
assert(typeof DescribeSigningJob$ === "object");
assert(typeof GetRevocationStatusCommand === "function");
assert(typeof GetRevocationStatus$ === "object");
assert(typeof GetSigningPlatformCommand === "function");
assert(typeof GetSigningPlatform$ === "object");
assert(typeof GetSigningProfileCommand === "function");
assert(typeof GetSigningProfile$ === "object");
assert(typeof ListProfilePermissionsCommand === "function");
assert(typeof ListProfilePermissions$ === "object");
assert(typeof ListSigningJobsCommand === "function");
assert(typeof ListSigningJobs$ === "object");
assert(typeof ListSigningPlatformsCommand === "function");
assert(typeof ListSigningPlatforms$ === "object");
assert(typeof ListSigningProfilesCommand === "function");
assert(typeof ListSigningProfiles$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutSigningProfileCommand === "function");
assert(typeof PutSigningProfile$ === "object");
assert(typeof RemoveProfilePermissionCommand === "function");
assert(typeof RemoveProfilePermission$ === "object");
assert(typeof RevokeSignatureCommand === "function");
assert(typeof RevokeSignature$ === "object");
assert(typeof RevokeSigningProfileCommand === "function");
assert(typeof RevokeSigningProfile$ === "object");
assert(typeof SignPayloadCommand === "function");
assert(typeof SignPayload$ === "object");
assert(typeof StartSigningJobCommand === "function");
assert(typeof StartSigningJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AddProfilePermissionRequest$ === "object");
assert(typeof AddProfilePermissionResponse$ === "object");
assert(typeof CancelSigningProfileRequest$ === "object");
assert(typeof DescribeSigningJobRequest$ === "object");
assert(typeof DescribeSigningJobResponse$ === "object");
assert(typeof Destination$ === "object");
assert(typeof EncryptionAlgorithmOptions$ === "object");
assert(typeof GetRevocationStatusRequest$ === "object");
assert(typeof GetRevocationStatusResponse$ === "object");
assert(typeof GetSigningPlatformRequest$ === "object");
assert(typeof GetSigningPlatformResponse$ === "object");
assert(typeof GetSigningProfileRequest$ === "object");
assert(typeof GetSigningProfileResponse$ === "object");
assert(typeof HashAlgorithmOptions$ === "object");
assert(typeof ListProfilePermissionsRequest$ === "object");
assert(typeof ListProfilePermissionsResponse$ === "object");
assert(typeof ListSigningJobsRequest$ === "object");
assert(typeof ListSigningJobsResponse$ === "object");
assert(typeof ListSigningPlatformsRequest$ === "object");
assert(typeof ListSigningPlatformsResponse$ === "object");
assert(typeof ListSigningProfilesRequest$ === "object");
assert(typeof ListSigningProfilesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Permission$ === "object");
assert(typeof PutSigningProfileRequest$ === "object");
assert(typeof PutSigningProfileResponse$ === "object");
assert(typeof RemoveProfilePermissionRequest$ === "object");
assert(typeof RemoveProfilePermissionResponse$ === "object");
assert(typeof RevokeSignatureRequest$ === "object");
assert(typeof RevokeSigningProfileRequest$ === "object");
assert(typeof S3Destination$ === "object");
assert(typeof S3SignedObject$ === "object");
assert(typeof S3Source$ === "object");
assert(typeof SignatureValidityPeriod$ === "object");
assert(typeof SignedObject$ === "object");
assert(typeof SigningConfiguration$ === "object");
assert(typeof SigningConfigurationOverrides$ === "object");
assert(typeof SigningImageFormat$ === "object");
assert(typeof SigningJob$ === "object");
assert(typeof SigningJobRevocationRecord$ === "object");
assert(typeof SigningMaterial$ === "object");
assert(typeof SigningPlatform$ === "object");
assert(typeof SigningPlatformOverrides$ === "object");
assert(typeof SigningProfile$ === "object");
assert(typeof SigningProfileRevocationRecord$ === "object");
assert(typeof SignPayloadRequest$ === "object");
assert(typeof SignPayloadResponse$ === "object");
assert(typeof Source$ === "object");
assert(typeof StartSigningJobRequest$ === "object");
assert(typeof StartSigningJobResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof SignerServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof SignerServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServiceErrorException.prototype instanceof SignerServiceException);
assert(typeof InternalServiceErrorException$ === "object");
assert(NotFoundException.prototype instanceof SignerServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SignerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceLimitExceededException.prototype instanceof SignerServiceException);
assert(typeof ServiceLimitExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SignerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyRequestsException.prototype instanceof SignerServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(ValidationException.prototype instanceof SignerServiceException);
assert(typeof ValidationException$ === "object");
assert(SignerServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForSuccessfulSigningJob === "function");
assert(typeof waitUntilSuccessfulSigningJob === "function");
// paginators
assert(typeof paginateListSigningJobs === "function");
assert(typeof paginateListSigningPlatforms === "function");
assert(typeof paginateListSigningProfiles === "function");
console.log(`Signer index test passed.`);
