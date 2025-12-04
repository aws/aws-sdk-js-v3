import {
  ChangeProgressStageStatuses,
  ChangeProgressStatuses,
  CreatePipelineCommand,
  CreatePipelineEndpointCommand,
  DeletePipelineCommand,
  DeletePipelineEndpointCommand,
  DeleteResourcePolicyCommand,
  GetPipelineBlueprintCommand,
  GetPipelineChangeProgressCommand,
  GetPipelineCommand,
  GetResourcePolicyCommand,
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
  RevokePipelineEndpointConnectionsCommand,
  StartPipelineCommand,
  StopPipelineCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdatePipelineCommand,
  ValidatePipelineCommand,
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
assert(OSISServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListPipelineEndpointConnections === "function");
assert(typeof paginateListPipelineEndpoints === "function");
assert(typeof paginateListPipelines === "function");
console.log(`OSIS index test passed.`);
