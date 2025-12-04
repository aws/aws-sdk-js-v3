import {
  AssociateEntityToThingCommand,
  CreateFlowTemplateCommand,
  CreateSystemInstanceCommand,
  CreateSystemTemplateCommand,
  DefinitionLanguage,
  DeleteFlowTemplateCommand,
  DeleteNamespaceCommand,
  DeleteSystemInstanceCommand,
  DeleteSystemTemplateCommand,
  DeploySystemInstanceCommand,
  DeploymentTarget,
  DeprecateFlowTemplateCommand,
  DeprecateSystemTemplateCommand,
  DescribeNamespaceCommand,
  DissociateEntityFromThingCommand,
  EntityFilterName,
  EntityType,
  FlowExecutionEventType,
  FlowExecutionStatus,
  FlowTemplateFilterName,
  GetEntitiesCommand,
  GetFlowTemplateCommand,
  GetFlowTemplateRevisionsCommand,
  GetNamespaceDeletionStatusCommand,
  GetSystemInstanceCommand,
  GetSystemTemplateCommand,
  GetSystemTemplateRevisionsCommand,
  GetUploadStatusCommand,
  IoTThingsGraph,
  IoTThingsGraphClient,
  IoTThingsGraphServiceException,
  ListFlowExecutionMessagesCommand,
  ListTagsForResourceCommand,
  NamespaceDeletionStatus,
  NamespaceDeletionStatusErrorCodes,
  SearchEntitiesCommand,
  SearchFlowExecutionsCommand,
  SearchFlowTemplatesCommand,
  SearchSystemInstancesCommand,
  SearchSystemTemplatesCommand,
  SearchThingsCommand,
  SystemInstanceDeploymentStatus,
  SystemInstanceFilterName,
  SystemTemplateFilterName,
  TagResourceCommand,
  UndeploySystemInstanceCommand,
  UntagResourceCommand,
  UpdateFlowTemplateCommand,
  UpdateSystemTemplateCommand,
  UploadEntityDefinitionsCommand,
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
assert(typeof IoTThingsGraphClient === "function")
assert(typeof IoTThingsGraph === "function")
// commands
assert(typeof AssociateEntityToThingCommand === "function")
assert(typeof CreateFlowTemplateCommand === "function")
assert(typeof CreateSystemInstanceCommand === "function")
assert(typeof CreateSystemTemplateCommand === "function")
assert(typeof DeleteFlowTemplateCommand === "function")
assert(typeof DeleteNamespaceCommand === "function")
assert(typeof DeleteSystemInstanceCommand === "function")
assert(typeof DeleteSystemTemplateCommand === "function")
assert(typeof DeploySystemInstanceCommand === "function")
assert(typeof DeprecateFlowTemplateCommand === "function")
assert(typeof DeprecateSystemTemplateCommand === "function")
assert(typeof DescribeNamespaceCommand === "function")
assert(typeof DissociateEntityFromThingCommand === "function")
assert(typeof GetEntitiesCommand === "function")
assert(typeof GetFlowTemplateCommand === "function")
assert(typeof GetFlowTemplateRevisionsCommand === "function")
assert(typeof GetNamespaceDeletionStatusCommand === "function")
assert(typeof GetSystemInstanceCommand === "function")
assert(typeof GetSystemTemplateCommand === "function")
assert(typeof GetSystemTemplateRevisionsCommand === "function")
assert(typeof GetUploadStatusCommand === "function")
assert(typeof ListFlowExecutionMessagesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof SearchEntitiesCommand === "function")
assert(typeof SearchFlowExecutionsCommand === "function")
assert(typeof SearchFlowTemplatesCommand === "function")
assert(typeof SearchSystemInstancesCommand === "function")
assert(typeof SearchSystemTemplatesCommand === "function")
assert(typeof SearchThingsCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UndeploySystemInstanceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateFlowTemplateCommand === "function")
assert(typeof UpdateSystemTemplateCommand === "function")
assert(typeof UploadEntityDefinitionsCommand === "function")
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
assert(IoTThingsGraphServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetFlowTemplateRevisions === "function")
assert(typeof paginateGetSystemTemplateRevisions === "function")
assert(typeof paginateListFlowExecutionMessages === "function")
assert(typeof paginateListTagsForResource === "function")
assert(typeof paginateSearchEntities === "function")
assert(typeof paginateSearchFlowExecutions === "function")
assert(typeof paginateSearchFlowTemplates === "function")
assert(typeof paginateSearchSystemInstances === "function")
assert(typeof paginateSearchSystemTemplates === "function")
assert(typeof paginateSearchThings === "function")
console.log(`IoTThingsGraph index test passed.`);
