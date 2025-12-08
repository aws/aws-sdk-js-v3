import {
  AccessDeniedException,
  ConflictException,
  CreateEndpointCommand,
  DeleteEndpointCommand,
  EndpointAccessType,
  EndpointStatus,
  InternalServerException,
  ListEndpointsCommand,
  ListOutpostsWithS3Command,
  ListSharedEndpointsCommand,
  OutpostOfflineException,
  ResourceNotFoundException,
  S3Outposts,
  S3OutpostsClient,
  S3OutpostsServiceException,
  ThrottlingException,
  ValidationException,
  paginateListEndpoints,
  paginateListOutpostsWithS3,
  paginateListSharedEndpoints,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof S3OutpostsClient === "function");
assert(typeof S3Outposts === "function");
// commands
assert(typeof CreateEndpointCommand === "function");
assert(typeof DeleteEndpointCommand === "function");
assert(typeof ListEndpointsCommand === "function");
assert(typeof ListOutpostsWithS3Command === "function");
assert(typeof ListSharedEndpointsCommand === "function");
// enums
assert(typeof EndpointAccessType === "object");
assert(typeof EndpointStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof S3OutpostsServiceException);
assert(ConflictException.prototype instanceof S3OutpostsServiceException);
assert(InternalServerException.prototype instanceof S3OutpostsServiceException);
assert(OutpostOfflineException.prototype instanceof S3OutpostsServiceException);
assert(ResourceNotFoundException.prototype instanceof S3OutpostsServiceException);
assert(ThrottlingException.prototype instanceof S3OutpostsServiceException);
assert(ValidationException.prototype instanceof S3OutpostsServiceException);
assert(S3OutpostsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEndpoints === "function");
assert(typeof paginateListOutpostsWithS3 === "function");
assert(typeof paginateListSharedEndpoints === "function");
console.log(`S3Outposts index test passed.`);
