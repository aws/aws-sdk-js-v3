import {
  AssociateEntityToThing$,
  AssociateEntityToThingCommand,
  AssociateEntityToThingRequest$,
  AssociateEntityToThingResponse$,
  CreateFlowTemplate$,
  CreateFlowTemplateCommand,
  CreateFlowTemplateRequest$,
  CreateFlowTemplateResponse$,
  CreateSystemInstance$,
  CreateSystemInstanceCommand,
  CreateSystemInstanceRequest$,
  CreateSystemInstanceResponse$,
  CreateSystemTemplate$,
  CreateSystemTemplateCommand,
  CreateSystemTemplateRequest$,
  CreateSystemTemplateResponse$,
  DefinitionDocument$,
  DefinitionLanguage,
  DeleteFlowTemplate$,
  DeleteFlowTemplateCommand,
  DeleteFlowTemplateRequest$,
  DeleteFlowTemplateResponse$,
  DeleteNamespace$,
  DeleteNamespaceCommand,
  DeleteNamespaceRequest$,
  DeleteNamespaceResponse$,
  DeleteSystemInstance$,
  DeleteSystemInstanceCommand,
  DeleteSystemInstanceRequest$,
  DeleteSystemInstanceResponse$,
  DeleteSystemTemplate$,
  DeleteSystemTemplateCommand,
  DeleteSystemTemplateRequest$,
  DeleteSystemTemplateResponse$,
  DependencyRevision$,
  DeploySystemInstance$,
  DeploySystemInstanceCommand,
  DeploySystemInstanceRequest$,
  DeploySystemInstanceResponse$,
  DeploymentTarget,
  DeprecateFlowTemplate$,
  DeprecateFlowTemplateCommand,
  DeprecateFlowTemplateRequest$,
  DeprecateFlowTemplateResponse$,
  DeprecateSystemTemplate$,
  DeprecateSystemTemplateCommand,
  DeprecateSystemTemplateRequest$,
  DeprecateSystemTemplateResponse$,
  DescribeNamespace$,
  DescribeNamespaceCommand,
  DescribeNamespaceRequest$,
  DescribeNamespaceResponse$,
  DissociateEntityFromThing$,
  DissociateEntityFromThingCommand,
  DissociateEntityFromThingRequest$,
  DissociateEntityFromThingResponse$,
  EntityDescription$,
  EntityFilter$,
  EntityFilterName,
  EntityType,
  FlowExecutionEventType,
  FlowExecutionMessage$,
  FlowExecutionStatus,
  FlowExecutionSummary$,
  FlowTemplateDescription$,
  FlowTemplateFilter$,
  FlowTemplateFilterName,
  FlowTemplateSummary$,
  GetEntities$,
  GetEntitiesCommand,
  GetEntitiesRequest$,
  GetEntitiesResponse$,
  GetFlowTemplate$,
  GetFlowTemplateCommand,
  GetFlowTemplateRequest$,
  GetFlowTemplateResponse$,
  GetFlowTemplateRevisions$,
  GetFlowTemplateRevisionsCommand,
  GetFlowTemplateRevisionsRequest$,
  GetFlowTemplateRevisionsResponse$,
  GetNamespaceDeletionStatus$,
  GetNamespaceDeletionStatusCommand,
  GetNamespaceDeletionStatusRequest$,
  GetNamespaceDeletionStatusResponse$,
  GetSystemInstance$,
  GetSystemInstanceCommand,
  GetSystemInstanceRequest$,
  GetSystemInstanceResponse$,
  GetSystemTemplate$,
  GetSystemTemplateCommand,
  GetSystemTemplateRequest$,
  GetSystemTemplateResponse$,
  GetSystemTemplateRevisions$,
  GetSystemTemplateRevisionsCommand,
  GetSystemTemplateRevisionsRequest$,
  GetSystemTemplateRevisionsResponse$,
  GetUploadStatus$,
  GetUploadStatusCommand,
  GetUploadStatusRequest$,
  GetUploadStatusResponse$,
  InternalFailureException,
  InternalFailureException$,
  InvalidRequestException,
  InvalidRequestException$,
  IoTThingsGraph,
  IoTThingsGraphClient,
  IoTThingsGraphServiceException,
  LimitExceededException,
  LimitExceededException$,
  ListFlowExecutionMessages$,
  ListFlowExecutionMessagesCommand,
  ListFlowExecutionMessagesRequest$,
  ListFlowExecutionMessagesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MetricsConfiguration$,
  NamespaceDeletionStatus,
  NamespaceDeletionStatusErrorCodes,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SearchEntities$,
  SearchEntitiesCommand,
  SearchEntitiesRequest$,
  SearchEntitiesResponse$,
  SearchFlowExecutions$,
  SearchFlowExecutionsCommand,
  SearchFlowExecutionsRequest$,
  SearchFlowExecutionsResponse$,
  SearchFlowTemplates$,
  SearchFlowTemplatesCommand,
  SearchFlowTemplatesRequest$,
  SearchFlowTemplatesResponse$,
  SearchSystemInstances$,
  SearchSystemInstancesCommand,
  SearchSystemInstancesRequest$,
  SearchSystemInstancesResponse$,
  SearchSystemTemplates$,
  SearchSystemTemplatesCommand,
  SearchSystemTemplatesRequest$,
  SearchSystemTemplatesResponse$,
  SearchThings$,
  SearchThingsCommand,
  SearchThingsRequest$,
  SearchThingsResponse$,
  SystemInstanceDeploymentStatus,
  SystemInstanceDescription$,
  SystemInstanceFilter$,
  SystemInstanceFilterName,
  SystemInstanceSummary$,
  SystemTemplateDescription$,
  SystemTemplateFilter$,
  SystemTemplateFilterName,
  SystemTemplateSummary$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Thing$,
  ThrottlingException,
  ThrottlingException$,
  UndeploySystemInstance$,
  UndeploySystemInstanceCommand,
  UndeploySystemInstanceRequest$,
  UndeploySystemInstanceResponse$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateFlowTemplate$,
  UpdateFlowTemplateCommand,
  UpdateFlowTemplateRequest$,
  UpdateFlowTemplateResponse$,
  UpdateSystemTemplate$,
  UpdateSystemTemplateCommand,
  UpdateSystemTemplateRequest$,
  UpdateSystemTemplateResponse$,
  UploadEntityDefinitions$,
  UploadEntityDefinitionsCommand,
  UploadEntityDefinitionsRequest$,
  UploadEntityDefinitionsResponse$,
  UploadStatus,
  paginateGetFlowTemplateRevisions,
  paginateGetSystemTemplateRevisions,
  paginateListFlowExecutionMessages,
  paginateListTagsForResource,
  paginateSearchEntities,
  paginateSearchFlowExecutions,
  paginateSearchFlowTemplates,
  paginateSearchSystemInstances,
  paginateSearchSystemTemplates,
  paginateSearchThings,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTThingsGraphClient === "function");
assert(typeof IoTThingsGraph === "function");
// commands
assert(typeof AssociateEntityToThingCommand === "function");
assert(typeof AssociateEntityToThing$ === "object");
assert(typeof CreateFlowTemplateCommand === "function");
assert(typeof CreateFlowTemplate$ === "object");
assert(typeof CreateSystemInstanceCommand === "function");
assert(typeof CreateSystemInstance$ === "object");
assert(typeof CreateSystemTemplateCommand === "function");
assert(typeof CreateSystemTemplate$ === "object");
assert(typeof DeleteFlowTemplateCommand === "function");
assert(typeof DeleteFlowTemplate$ === "object");
assert(typeof DeleteNamespaceCommand === "function");
assert(typeof DeleteNamespace$ === "object");
assert(typeof DeleteSystemInstanceCommand === "function");
assert(typeof DeleteSystemInstance$ === "object");
assert(typeof DeleteSystemTemplateCommand === "function");
assert(typeof DeleteSystemTemplate$ === "object");
assert(typeof DeploySystemInstanceCommand === "function");
assert(typeof DeploySystemInstance$ === "object");
assert(typeof DeprecateFlowTemplateCommand === "function");
assert(typeof DeprecateFlowTemplate$ === "object");
assert(typeof DeprecateSystemTemplateCommand === "function");
assert(typeof DeprecateSystemTemplate$ === "object");
assert(typeof DescribeNamespaceCommand === "function");
assert(typeof DescribeNamespace$ === "object");
assert(typeof DissociateEntityFromThingCommand === "function");
assert(typeof DissociateEntityFromThing$ === "object");
assert(typeof GetEntitiesCommand === "function");
assert(typeof GetEntities$ === "object");
assert(typeof GetFlowTemplateCommand === "function");
assert(typeof GetFlowTemplate$ === "object");
assert(typeof GetFlowTemplateRevisionsCommand === "function");
assert(typeof GetFlowTemplateRevisions$ === "object");
assert(typeof GetNamespaceDeletionStatusCommand === "function");
assert(typeof GetNamespaceDeletionStatus$ === "object");
assert(typeof GetSystemInstanceCommand === "function");
assert(typeof GetSystemInstance$ === "object");
assert(typeof GetSystemTemplateCommand === "function");
assert(typeof GetSystemTemplate$ === "object");
assert(typeof GetSystemTemplateRevisionsCommand === "function");
assert(typeof GetSystemTemplateRevisions$ === "object");
assert(typeof GetUploadStatusCommand === "function");
assert(typeof GetUploadStatus$ === "object");
assert(typeof ListFlowExecutionMessagesCommand === "function");
assert(typeof ListFlowExecutionMessages$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof SearchEntitiesCommand === "function");
assert(typeof SearchEntities$ === "object");
assert(typeof SearchFlowExecutionsCommand === "function");
assert(typeof SearchFlowExecutions$ === "object");
assert(typeof SearchFlowTemplatesCommand === "function");
assert(typeof SearchFlowTemplates$ === "object");
assert(typeof SearchSystemInstancesCommand === "function");
assert(typeof SearchSystemInstances$ === "object");
assert(typeof SearchSystemTemplatesCommand === "function");
assert(typeof SearchSystemTemplates$ === "object");
assert(typeof SearchThingsCommand === "function");
assert(typeof SearchThings$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UndeploySystemInstanceCommand === "function");
assert(typeof UndeploySystemInstance$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateFlowTemplateCommand === "function");
assert(typeof UpdateFlowTemplate$ === "object");
assert(typeof UpdateSystemTemplateCommand === "function");
assert(typeof UpdateSystemTemplate$ === "object");
assert(typeof UploadEntityDefinitionsCommand === "function");
assert(typeof UploadEntityDefinitions$ === "object");
// structural schemas
assert(typeof AssociateEntityToThingRequest$ === "object");
assert(typeof AssociateEntityToThingResponse$ === "object");
assert(typeof CreateFlowTemplateRequest$ === "object");
assert(typeof CreateFlowTemplateResponse$ === "object");
assert(typeof CreateSystemInstanceRequest$ === "object");
assert(typeof CreateSystemInstanceResponse$ === "object");
assert(typeof CreateSystemTemplateRequest$ === "object");
assert(typeof CreateSystemTemplateResponse$ === "object");
assert(typeof DefinitionDocument$ === "object");
assert(typeof DeleteFlowTemplateRequest$ === "object");
assert(typeof DeleteFlowTemplateResponse$ === "object");
assert(typeof DeleteNamespaceRequest$ === "object");
assert(typeof DeleteNamespaceResponse$ === "object");
assert(typeof DeleteSystemInstanceRequest$ === "object");
assert(typeof DeleteSystemInstanceResponse$ === "object");
assert(typeof DeleteSystemTemplateRequest$ === "object");
assert(typeof DeleteSystemTemplateResponse$ === "object");
assert(typeof DependencyRevision$ === "object");
assert(typeof DeploySystemInstanceRequest$ === "object");
assert(typeof DeploySystemInstanceResponse$ === "object");
assert(typeof DeprecateFlowTemplateRequest$ === "object");
assert(typeof DeprecateFlowTemplateResponse$ === "object");
assert(typeof DeprecateSystemTemplateRequest$ === "object");
assert(typeof DeprecateSystemTemplateResponse$ === "object");
assert(typeof DescribeNamespaceRequest$ === "object");
assert(typeof DescribeNamespaceResponse$ === "object");
assert(typeof DissociateEntityFromThingRequest$ === "object");
assert(typeof DissociateEntityFromThingResponse$ === "object");
assert(typeof EntityDescription$ === "object");
assert(typeof EntityFilter$ === "object");
assert(typeof FlowExecutionMessage$ === "object");
assert(typeof FlowExecutionSummary$ === "object");
assert(typeof FlowTemplateDescription$ === "object");
assert(typeof FlowTemplateFilter$ === "object");
assert(typeof FlowTemplateSummary$ === "object");
assert(typeof GetEntitiesRequest$ === "object");
assert(typeof GetEntitiesResponse$ === "object");
assert(typeof GetFlowTemplateRequest$ === "object");
assert(typeof GetFlowTemplateResponse$ === "object");
assert(typeof GetFlowTemplateRevisionsRequest$ === "object");
assert(typeof GetFlowTemplateRevisionsResponse$ === "object");
assert(typeof GetNamespaceDeletionStatusRequest$ === "object");
assert(typeof GetNamespaceDeletionStatusResponse$ === "object");
assert(typeof GetSystemInstanceRequest$ === "object");
assert(typeof GetSystemInstanceResponse$ === "object");
assert(typeof GetSystemTemplateRequest$ === "object");
assert(typeof GetSystemTemplateResponse$ === "object");
assert(typeof GetSystemTemplateRevisionsRequest$ === "object");
assert(typeof GetSystemTemplateRevisionsResponse$ === "object");
assert(typeof GetUploadStatusRequest$ === "object");
assert(typeof GetUploadStatusResponse$ === "object");
assert(typeof ListFlowExecutionMessagesRequest$ === "object");
assert(typeof ListFlowExecutionMessagesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MetricsConfiguration$ === "object");
assert(typeof SearchEntitiesRequest$ === "object");
assert(typeof SearchEntitiesResponse$ === "object");
assert(typeof SearchFlowExecutionsRequest$ === "object");
assert(typeof SearchFlowExecutionsResponse$ === "object");
assert(typeof SearchFlowTemplatesRequest$ === "object");
assert(typeof SearchFlowTemplatesResponse$ === "object");
assert(typeof SearchSystemInstancesRequest$ === "object");
assert(typeof SearchSystemInstancesResponse$ === "object");
assert(typeof SearchSystemTemplatesRequest$ === "object");
assert(typeof SearchSystemTemplatesResponse$ === "object");
assert(typeof SearchThingsRequest$ === "object");
assert(typeof SearchThingsResponse$ === "object");
assert(typeof SystemInstanceDescription$ === "object");
assert(typeof SystemInstanceFilter$ === "object");
assert(typeof SystemInstanceSummary$ === "object");
assert(typeof SystemTemplateDescription$ === "object");
assert(typeof SystemTemplateFilter$ === "object");
assert(typeof SystemTemplateSummary$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Thing$ === "object");
assert(typeof UndeploySystemInstanceRequest$ === "object");
assert(typeof UndeploySystemInstanceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateFlowTemplateRequest$ === "object");
assert(typeof UpdateFlowTemplateResponse$ === "object");
assert(typeof UpdateSystemTemplateRequest$ === "object");
assert(typeof UpdateSystemTemplateResponse$ === "object");
assert(typeof UploadEntityDefinitionsRequest$ === "object");
assert(typeof UploadEntityDefinitionsResponse$ === "object");
// enums
assert(typeof DefinitionLanguage === "object");
assert(typeof DeploymentTarget === "object");
assert(typeof EntityFilterName === "object");
assert(typeof EntityType === "object");
assert(typeof FlowExecutionEventType === "object");
assert(typeof FlowExecutionStatus === "object");
assert(typeof FlowTemplateFilterName === "object");
assert(typeof NamespaceDeletionStatus === "object");
assert(typeof NamespaceDeletionStatusErrorCodes === "object");
assert(typeof SystemInstanceDeploymentStatus === "object");
assert(typeof SystemInstanceFilterName === "object");
assert(typeof SystemTemplateFilterName === "object");
assert(typeof UploadStatus === "object");
// errors
assert(InternalFailureException.prototype instanceof IoTThingsGraphServiceException);
assert(typeof InternalFailureException$ === "object");
assert(InvalidRequestException.prototype instanceof IoTThingsGraphServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LimitExceededException.prototype instanceof IoTThingsGraphServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof IoTThingsGraphServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceInUseException.prototype instanceof IoTThingsGraphServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IoTThingsGraphServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof IoTThingsGraphServiceException);
assert(typeof ThrottlingException$ === "object");
assert(IoTThingsGraphServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetFlowTemplateRevisions === "function");
assert(typeof paginateGetSystemTemplateRevisions === "function");
assert(typeof paginateListFlowExecutionMessages === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateSearchEntities === "function");
assert(typeof paginateSearchFlowExecutions === "function");
assert(typeof paginateSearchFlowTemplates === "function");
assert(typeof paginateSearchSystemInstances === "function");
assert(typeof paginateSearchSystemTemplates === "function");
assert(typeof paginateSearchThings === "function");
console.log(`IoTThingsGraph index test passed.`);
