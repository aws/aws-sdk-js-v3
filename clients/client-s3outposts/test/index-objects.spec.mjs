import {
  AccessDeniedException,
  AccessDeniedException$,
  ConflictException,
  ConflictException$,
  CreateEndpoint$,
  CreateEndpointCommand,
  CreateEndpointRequest$,
  CreateEndpointResult$,
  DeleteEndpoint$,
  DeleteEndpointCommand,
  DeleteEndpointRequest$,
  Endpoint$,
  EndpointAccessType,
  EndpointStatus,
  FailedReason$,
  InternalServerException,
  InternalServerException$,
  ListEndpoints$,
  ListEndpointsCommand,
  ListEndpointsRequest$,
  ListEndpointsResult$,
  ListOutpostsWithS3$,
  ListOutpostsWithS3Command,
  ListOutpostsWithS3Request$,
  ListOutpostsWithS3Result$,
  ListSharedEndpoints$,
  ListSharedEndpointsCommand,
  ListSharedEndpointsRequest$,
  ListSharedEndpointsResult$,
  NetworkInterface$,
  Outpost$,
  OutpostOfflineException,
  OutpostOfflineException$,
  paginateListEndpoints,
  paginateListOutpostsWithS3,
  paginateListSharedEndpoints,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Outposts,
  S3OutpostsClient,
  S3OutpostsServiceException,
  ThrottlingException,
  ThrottlingException$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof S3OutpostsClient === "function");
assert(typeof S3Outposts === "function");
// commands
assert(typeof CreateEndpointCommand === "function");
assert(typeof CreateEndpoint$ === "object");
assert(typeof DeleteEndpointCommand === "function");
assert(typeof DeleteEndpoint$ === "object");
assert(typeof ListEndpointsCommand === "function");
assert(typeof ListEndpoints$ === "object");
assert(typeof ListOutpostsWithS3Command === "function");
assert(typeof ListOutpostsWithS3$ === "object");
assert(typeof ListSharedEndpointsCommand === "function");
assert(typeof ListSharedEndpoints$ === "object");
// structural schemas
assert(typeof CreateEndpointRequest$ === "object");
assert(typeof CreateEndpointResult$ === "object");
assert(typeof DeleteEndpointRequest$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof FailedReason$ === "object");
assert(typeof ListEndpointsRequest$ === "object");
assert(typeof ListEndpointsResult$ === "object");
assert(typeof ListOutpostsWithS3Request$ === "object");
assert(typeof ListOutpostsWithS3Result$ === "object");
assert(typeof ListSharedEndpointsRequest$ === "object");
assert(typeof ListSharedEndpointsResult$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof Outpost$ === "object");
// enums
assert(typeof EndpointAccessType === "object");
assert(typeof EndpointStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof S3OutpostsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof S3OutpostsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof S3OutpostsServiceException);
assert(typeof InternalServerException$ === "object");
assert(OutpostOfflineException.prototype instanceof S3OutpostsServiceException);
assert(typeof OutpostOfflineException$ === "object");
assert(ResourceNotFoundException.prototype instanceof S3OutpostsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof S3OutpostsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof S3OutpostsServiceException);
assert(typeof ValidationException$ === "object");
assert(S3OutpostsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEndpoints === "function");
assert(typeof paginateListOutpostsWithS3 === "function");
assert(typeof paginateListSharedEndpoints === "function");
console.log(`S3Outposts index test passed.`);
