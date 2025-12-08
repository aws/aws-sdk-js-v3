import {
  AccessDeniedException,
  ControlBehavior,
  ControlCatalog,
  ControlCatalogClient,
  ControlCatalogServiceException,
  ControlRelationType,
  ControlScope,
  ControlSeverity,
  GetControlCommand,
  InternalServerException,
  ListCommonControlsCommand,
  ListControlMappingsCommand,
  ListControlsCommand,
  ListDomainsCommand,
  ListObjectivesCommand,
  MappingType,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
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
assert(typeof ListCommonControlsCommand === "function");
assert(typeof ListControlMappingsCommand === "function");
assert(typeof ListControlsCommand === "function");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListObjectivesCommand === "function");
// enums
assert(typeof ControlBehavior === "object");
assert(typeof ControlRelationType === "object");
assert(typeof ControlScope === "object");
assert(typeof ControlSeverity === "object");
assert(typeof MappingType === "object");
// errors
assert(AccessDeniedException.prototype instanceof ControlCatalogServiceException);
assert(InternalServerException.prototype instanceof ControlCatalogServiceException);
assert(ResourceNotFoundException.prototype instanceof ControlCatalogServiceException);
assert(ThrottlingException.prototype instanceof ControlCatalogServiceException);
assert(ValidationException.prototype instanceof ControlCatalogServiceException);
assert(ControlCatalogServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCommonControls === "function");
assert(typeof paginateListControlMappings === "function");
assert(typeof paginateListControls === "function");
assert(typeof paginateListDomains === "function");
assert(typeof paginateListObjectives === "function");
console.log(`ControlCatalog index test passed.`);
