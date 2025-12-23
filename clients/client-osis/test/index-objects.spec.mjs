import {
  AccessDeniedException,
  AccessDeniedException$,
  BufferOptions$,
  ChangeProgressStage$,
  ChangeProgressStageStatuses,
  ChangeProgressStatus$,
  ChangeProgressStatuses,
  CloudWatchLogDestination$,
  ConflictException,
  ConflictException$,
  CreatePipeline$,
  CreatePipelineCommand,
  CreatePipelineEndpoint$,
  CreatePipelineEndpointCommand,
  CreatePipelineEndpointRequest$,
  CreatePipelineEndpointResponse$,
  CreatePipelineRequest$,
  CreatePipelineResponse$,
  DeletePipeline$,
  DeletePipelineCommand,
  DeletePipelineEndpoint$,
  DeletePipelineEndpointCommand,
  DeletePipelineEndpointRequest$,
  DeletePipelineEndpointResponse$,
  DeletePipelineRequest$,
  DeletePipelineResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DisabledOperationException,
  DisabledOperationException$,
  EncryptionAtRestOptions$,
  GetPipeline$,
  GetPipelineBlueprint$,
  GetPipelineBlueprintCommand,
  GetPipelineBlueprintRequest$,
  GetPipelineBlueprintResponse$,
  GetPipelineChangeProgress$,
  GetPipelineChangeProgressCommand,
  GetPipelineChangeProgressRequest$,
  GetPipelineChangeProgressResponse$,
  GetPipelineCommand,
  GetPipelineRequest$,
  GetPipelineResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  InternalException,
  InternalException$,
  InvalidPaginationTokenException,
  InvalidPaginationTokenException$,
  LimitExceededException,
  LimitExceededException$,
  ListPipelineBlueprints$,
  ListPipelineBlueprintsCommand,
  ListPipelineBlueprintsRequest$,
  ListPipelineBlueprintsResponse$,
  ListPipelineEndpointConnections$,
  ListPipelineEndpointConnectionsCommand,
  ListPipelineEndpointConnectionsRequest$,
  ListPipelineEndpointConnectionsResponse$,
  ListPipelineEndpoints$,
  ListPipelineEndpointsCommand,
  ListPipelineEndpointsRequest$,
  ListPipelineEndpointsResponse$,
  ListPipelines$,
  ListPipelinesCommand,
  ListPipelinesRequest$,
  ListPipelinesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LogPublishingOptions$,
  OSIS,
  OSISClient,
  OSISServiceException,
  paginateListPipelineEndpointConnections,
  paginateListPipelineEndpoints,
  paginateListPipelines,
  Pipeline$,
  PipelineBlueprint$,
  PipelineBlueprintSummary$,
  PipelineDestination$,
  PipelineEndpoint$,
  PipelineEndpointConnection$,
  PipelineEndpointStatus,
  PipelineEndpointVpcOptions$,
  PipelineStatus,
  PipelineStatusReason$,
  PipelineSummary$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RevokePipelineEndpointConnections$,
  RevokePipelineEndpointConnectionsCommand,
  RevokePipelineEndpointConnectionsRequest$,
  RevokePipelineEndpointConnectionsResponse$,
  ServiceVpcEndpoint$,
  StartPipeline$,
  StartPipelineCommand,
  StartPipelineRequest$,
  StartPipelineResponse$,
  StopPipeline$,
  StopPipelineCommand,
  StopPipelineRequest$,
  StopPipelineResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdatePipeline$,
  UpdatePipelineCommand,
  UpdatePipelineRequest$,
  UpdatePipelineResponse$,
  ValidatePipeline$,
  ValidatePipelineCommand,
  ValidatePipelineRequest$,
  ValidatePipelineResponse$,
  ValidationException,
  ValidationException$,
  ValidationMessage$,
  VpcAttachmentOptions$,
  VpcEndpoint$,
  VpcEndpointManagement,
  VpcEndpointServiceName,
  VpcOptions$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OSISClient === "function");
assert(typeof OSIS === "function");
// commands
assert(typeof CreatePipelineCommand === "function");
assert(typeof CreatePipeline$ === "object");
assert(typeof CreatePipelineEndpointCommand === "function");
assert(typeof CreatePipelineEndpoint$ === "object");
assert(typeof DeletePipelineCommand === "function");
assert(typeof DeletePipeline$ === "object");
assert(typeof DeletePipelineEndpointCommand === "function");
assert(typeof DeletePipelineEndpoint$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof GetPipelineCommand === "function");
assert(typeof GetPipeline$ === "object");
assert(typeof GetPipelineBlueprintCommand === "function");
assert(typeof GetPipelineBlueprint$ === "object");
assert(typeof GetPipelineChangeProgressCommand === "function");
assert(typeof GetPipelineChangeProgress$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ListPipelineBlueprintsCommand === "function");
assert(typeof ListPipelineBlueprints$ === "object");
assert(typeof ListPipelineEndpointConnectionsCommand === "function");
assert(typeof ListPipelineEndpointConnections$ === "object");
assert(typeof ListPipelineEndpointsCommand === "function");
assert(typeof ListPipelineEndpoints$ === "object");
assert(typeof ListPipelinesCommand === "function");
assert(typeof ListPipelines$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RevokePipelineEndpointConnectionsCommand === "function");
assert(typeof RevokePipelineEndpointConnections$ === "object");
assert(typeof StartPipelineCommand === "function");
assert(typeof StartPipeline$ === "object");
assert(typeof StopPipelineCommand === "function");
assert(typeof StopPipeline$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdatePipelineCommand === "function");
assert(typeof UpdatePipeline$ === "object");
assert(typeof ValidatePipelineCommand === "function");
assert(typeof ValidatePipeline$ === "object");
// structural schemas
assert(typeof BufferOptions$ === "object");
assert(typeof ChangeProgressStage$ === "object");
assert(typeof ChangeProgressStatus$ === "object");
assert(typeof CloudWatchLogDestination$ === "object");
assert(typeof CreatePipelineEndpointRequest$ === "object");
assert(typeof CreatePipelineEndpointResponse$ === "object");
assert(typeof CreatePipelineRequest$ === "object");
assert(typeof CreatePipelineResponse$ === "object");
assert(typeof DeletePipelineEndpointRequest$ === "object");
assert(typeof DeletePipelineEndpointResponse$ === "object");
assert(typeof DeletePipelineRequest$ === "object");
assert(typeof DeletePipelineResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof EncryptionAtRestOptions$ === "object");
assert(typeof GetPipelineBlueprintRequest$ === "object");
assert(typeof GetPipelineBlueprintResponse$ === "object");
assert(typeof GetPipelineChangeProgressRequest$ === "object");
assert(typeof GetPipelineChangeProgressResponse$ === "object");
assert(typeof GetPipelineRequest$ === "object");
assert(typeof GetPipelineResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof ListPipelineBlueprintsRequest$ === "object");
assert(typeof ListPipelineBlueprintsResponse$ === "object");
assert(typeof ListPipelineEndpointConnectionsRequest$ === "object");
assert(typeof ListPipelineEndpointConnectionsResponse$ === "object");
assert(typeof ListPipelineEndpointsRequest$ === "object");
assert(typeof ListPipelineEndpointsResponse$ === "object");
assert(typeof ListPipelinesRequest$ === "object");
assert(typeof ListPipelinesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LogPublishingOptions$ === "object");
assert(typeof Pipeline$ === "object");
assert(typeof PipelineBlueprint$ === "object");
assert(typeof PipelineBlueprintSummary$ === "object");
assert(typeof PipelineDestination$ === "object");
assert(typeof PipelineEndpoint$ === "object");
assert(typeof PipelineEndpointConnection$ === "object");
assert(typeof PipelineEndpointVpcOptions$ === "object");
assert(typeof PipelineStatusReason$ === "object");
assert(typeof PipelineSummary$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof RevokePipelineEndpointConnectionsRequest$ === "object");
assert(typeof RevokePipelineEndpointConnectionsResponse$ === "object");
assert(typeof ServiceVpcEndpoint$ === "object");
assert(typeof StartPipelineRequest$ === "object");
assert(typeof StartPipelineResponse$ === "object");
assert(typeof StopPipelineRequest$ === "object");
assert(typeof StopPipelineResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdatePipelineRequest$ === "object");
assert(typeof UpdatePipelineResponse$ === "object");
assert(typeof ValidatePipelineRequest$ === "object");
assert(typeof ValidatePipelineResponse$ === "object");
assert(typeof ValidationMessage$ === "object");
assert(typeof VpcAttachmentOptions$ === "object");
assert(typeof VpcEndpoint$ === "object");
assert(typeof VpcOptions$ === "object");
// enums
assert(typeof ChangeProgressStageStatuses === "object");
assert(typeof ChangeProgressStatuses === "object");
assert(typeof PipelineEndpointStatus === "object");
assert(typeof PipelineStatus === "object");
assert(typeof VpcEndpointManagement === "object");
assert(typeof VpcEndpointServiceName === "object");
// errors
assert(AccessDeniedException.prototype instanceof OSISServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof OSISServiceException);
assert(typeof ConflictException$ === "object");
assert(DisabledOperationException.prototype instanceof OSISServiceException);
assert(typeof DisabledOperationException$ === "object");
assert(InternalException.prototype instanceof OSISServiceException);
assert(typeof InternalException$ === "object");
assert(InvalidPaginationTokenException.prototype instanceof OSISServiceException);
assert(typeof InvalidPaginationTokenException$ === "object");
assert(LimitExceededException.prototype instanceof OSISServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof OSISServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof OSISServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof OSISServiceException);
assert(typeof ValidationException$ === "object");
assert(OSISServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListPipelineEndpointConnections === "function");
assert(typeof paginateListPipelineEndpoints === "function");
assert(typeof paginateListPipelines === "function");
console.log(`OSIS index test passed.`);
