import {
  AccessDeniedException,
  AccessDeniedException$,
  AssociatedDomainSummary$,
  AssociatedObjectiveSummary$,
  CommonControlFilter$,
  CommonControlMappingDetails$,
  CommonControlSummary$,
  ControlBehavior,
  ControlCatalog,
  ControlCatalogClient,
  ControlCatalogServiceException,
  ControlFilter$,
  ControlMapping$,
  ControlMappingFilter$,
  ControlParameter$,
  ControlRelationType,
  ControlScope,
  ControlSeverity,
  ControlSummary$,
  DomainResourceFilter$,
  DomainSummary$,
  FrameworkMappingDetails$,
  GetControl$,
  GetControlCommand,
  GetControlRequest$,
  GetControlResponse$,
  ImplementationDetails$,
  ImplementationFilter$,
  ImplementationSummary$,
  InternalServerException,
  InternalServerException$,
  ListCommonControls$,
  ListCommonControlsCommand,
  ListCommonControlsRequest$,
  ListCommonControlsResponse$,
  ListControlMappings$,
  ListControlMappingsCommand,
  ListControlMappingsRequest$,
  ListControlMappingsResponse$,
  ListControls$,
  ListControlsCommand,
  ListControlsRequest$,
  ListControlsResponse$,
  ListDomains$,
  ListDomainsCommand,
  ListDomainsRequest$,
  ListDomainsResponse$,
  ListObjectives$,
  ListObjectivesCommand,
  ListObjectivesRequest$,
  ListObjectivesResponse$,
  Mapping$,
  MappingType,
  ObjectiveFilter$,
  ObjectiveResourceFilter$,
  ObjectiveSummary$,
  RegionConfiguration$,
  RelatedControlMappingDetails$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ThrottlingException,
  ThrottlingException$,
  ValidationException,
  ValidationException$,
  paginateListCommonControls,
  paginateListControlMappings,
  paginateListControls,
  paginateListDomains,
  paginateListObjectives,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ControlCatalogClient === "function");
assert(typeof ControlCatalog === "function");
// commands
assert(typeof GetControlCommand === "function");
assert(typeof GetControl$ === "object");
assert(typeof ListCommonControlsCommand === "function");
assert(typeof ListCommonControls$ === "object");
assert(typeof ListControlMappingsCommand === "function");
assert(typeof ListControlMappings$ === "object");
assert(typeof ListControlsCommand === "function");
assert(typeof ListControls$ === "object");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomains$ === "object");
assert(typeof ListObjectivesCommand === "function");
assert(typeof ListObjectives$ === "object");
// structural schemas
assert(typeof AssociatedDomainSummary$ === "object");
assert(typeof AssociatedObjectiveSummary$ === "object");
assert(typeof CommonControlFilter$ === "object");
assert(typeof CommonControlMappingDetails$ === "object");
assert(typeof CommonControlSummary$ === "object");
assert(typeof ControlFilter$ === "object");
assert(typeof ControlMapping$ === "object");
assert(typeof ControlMappingFilter$ === "object");
assert(typeof ControlParameter$ === "object");
assert(typeof ControlSummary$ === "object");
assert(typeof DomainResourceFilter$ === "object");
assert(typeof DomainSummary$ === "object");
assert(typeof FrameworkMappingDetails$ === "object");
assert(typeof GetControlRequest$ === "object");
assert(typeof GetControlResponse$ === "object");
assert(typeof ImplementationDetails$ === "object");
assert(typeof ImplementationFilter$ === "object");
assert(typeof ImplementationSummary$ === "object");
assert(typeof ListCommonControlsRequest$ === "object");
assert(typeof ListCommonControlsResponse$ === "object");
assert(typeof ListControlMappingsRequest$ === "object");
assert(typeof ListControlMappingsResponse$ === "object");
assert(typeof ListControlsRequest$ === "object");
assert(typeof ListControlsResponse$ === "object");
assert(typeof ListDomainsRequest$ === "object");
assert(typeof ListDomainsResponse$ === "object");
assert(typeof ListObjectivesRequest$ === "object");
assert(typeof ListObjectivesResponse$ === "object");
assert(typeof Mapping$ === "object");
assert(typeof ObjectiveFilter$ === "object");
assert(typeof ObjectiveResourceFilter$ === "object");
assert(typeof ObjectiveSummary$ === "object");
assert(typeof RegionConfiguration$ === "object");
assert(typeof RelatedControlMappingDetails$ === "object");
// enums
assert(typeof ControlBehavior === "object");
assert(typeof ControlRelationType === "object");
assert(typeof ControlScope === "object");
assert(typeof ControlSeverity === "object");
assert(typeof MappingType === "object");
// errors
assert(AccessDeniedException.prototype instanceof ControlCatalogServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof ControlCatalogServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ControlCatalogServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof ControlCatalogServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ControlCatalogServiceException);
assert(typeof ValidationException$ === "object");
assert(ControlCatalogServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCommonControls === "function");
assert(typeof paginateListControlMappings === "function");
assert(typeof paginateListControls === "function");
assert(typeof paginateListDomains === "function");
assert(typeof paginateListObjectives === "function");
console.log(`ControlCatalog index test passed.`);
