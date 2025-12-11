import {
  AccessDeniedException,
  ChangeProgressStageStatuses,
  ChangeProgressStatuses,
  ConflictException,
  CreatePipelineCommand,
  CreatePipelineEndpointCommand,
  DeletePipelineCommand,
  DeletePipelineEndpointCommand,
  DeleteResourcePolicyCommand,
  DisabledOperationException,
  GetPipelineBlueprintCommand,
  GetPipelineChangeProgressCommand,
  GetPipelineCommand,
  GetResourcePolicyCommand,
  InternalException,
  InvalidPaginationTokenException,
  LimitExceededException,
  ListPipelineBlueprintsCommand,
  ListPipelineEndpointConnectionsCommand,
  ListPipelineEndpointsCommand,
  ListPipelinesCommand,
  ListTagsForResourceCommand,
  OSIS,
  OSISClient,
  OSISServiceException,
  PipelineEndpointStatus,
  PipelineStatus,
  PutResourcePolicyCommand,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RevokePipelineEndpointConnectionsCommand,
  StartPipelineCommand,
  StopPipelineCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdatePipelineCommand,
  ValidatePipelineCommand,
  ValidationException,
  VpcEndpointManagement,
  VpcEndpointServiceName,
  paginateListPipelineEndpointConnections,
  paginateListPipelineEndpoints,
  paginateListPipelines,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OSISClient === "function");
assert(typeof OSIS === "function");
// commands
assert(typeof CreatePipelineCommand === "function");
assert(typeof CreatePipelineEndpointCommand === "function");
assert(typeof DeletePipelineCommand === "function");
assert(typeof DeletePipelineEndpointCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof GetPipelineCommand === "function");
assert(typeof GetPipelineBlueprintCommand === "function");
assert(typeof GetPipelineChangeProgressCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof ListPipelineBlueprintsCommand === "function");
assert(typeof ListPipelineEndpointConnectionsCommand === "function");
assert(typeof ListPipelineEndpointsCommand === "function");
assert(typeof ListPipelinesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof RevokePipelineEndpointConnectionsCommand === "function");
assert(typeof StartPipelineCommand === "function");
assert(typeof StopPipelineCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdatePipelineCommand === "function");
assert(typeof ValidatePipelineCommand === "function");
// enums
assert(typeof ChangeProgressStageStatuses === "object");
assert(typeof ChangeProgressStatuses === "object");
assert(typeof PipelineEndpointStatus === "object");
assert(typeof PipelineStatus === "object");
assert(typeof VpcEndpointManagement === "object");
assert(typeof VpcEndpointServiceName === "object");
// errors
assert(AccessDeniedException.prototype instanceof OSISServiceException);
assert(ConflictException.prototype instanceof OSISServiceException);
assert(DisabledOperationException.prototype instanceof OSISServiceException);
assert(InternalException.prototype instanceof OSISServiceException);
assert(InvalidPaginationTokenException.prototype instanceof OSISServiceException);
assert(LimitExceededException.prototype instanceof OSISServiceException);
assert(ResourceAlreadyExistsException.prototype instanceof OSISServiceException);
assert(ResourceNotFoundException.prototype instanceof OSISServiceException);
assert(ValidationException.prototype instanceof OSISServiceException);
assert(OSISServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListPipelineEndpointConnections === "function");
assert(typeof paginateListPipelineEndpoints === "function");
assert(typeof paginateListPipelines === "function");
console.log(`OSIS index test passed.`);
