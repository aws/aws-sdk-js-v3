import {
  AccessDeniedException,
  AppIntegrations,
  AppIntegrationsClient,
  AppIntegrationsServiceException,
  ApplicationType,
  ContactHandlingScope,
  CreateApplicationCommand,
  CreateDataIntegrationAssociationCommand,
  CreateDataIntegrationCommand,
  CreateEventIntegrationCommand,
  DeleteApplicationCommand,
  DeleteDataIntegrationCommand,
  DeleteEventIntegrationCommand,
  DuplicateResourceException,
  ExecutionMode,
  ExecutionStatus,
  GetApplicationCommand,
  GetDataIntegrationCommand,
  GetEventIntegrationCommand,
  InternalServiceError,
  InvalidRequestException,
  ListApplicationAssociationsCommand,
  ListApplicationsCommand,
  ListDataIntegrationAssociationsCommand,
  ListDataIntegrationsCommand,
  ListEventIntegrationAssociationsCommand,
  ListEventIntegrationsCommand,
  ListTagsForResourceCommand,
  ResourceNotFoundException,
  ResourceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UnsupportedOperationException,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateDataIntegrationAssociationCommand,
  UpdateDataIntegrationCommand,
  UpdateEventIntegrationCommand,
  paginateListApplicationAssociations,
  paginateListApplications,
  paginateListDataIntegrationAssociations,
  paginateListDataIntegrations,
  paginateListEventIntegrationAssociations,
  paginateListEventIntegrations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppIntegrationsClient === "function");
assert(typeof AppIntegrations === "function");
// commands
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateDataIntegrationCommand === "function");
assert(typeof CreateDataIntegrationAssociationCommand === "function");
assert(typeof CreateEventIntegrationCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteDataIntegrationCommand === "function");
assert(typeof DeleteEventIntegrationCommand === "function");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetDataIntegrationCommand === "function");
assert(typeof GetEventIntegrationCommand === "function");
assert(typeof ListApplicationAssociationsCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListDataIntegrationAssociationsCommand === "function");
assert(typeof ListDataIntegrationsCommand === "function");
assert(typeof ListEventIntegrationAssociationsCommand === "function");
assert(typeof ListEventIntegrationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateDataIntegrationCommand === "function");
assert(typeof UpdateDataIntegrationAssociationCommand === "function");
assert(typeof UpdateEventIntegrationCommand === "function");
// enums
assert(typeof ApplicationType === "object");
assert(typeof ContactHandlingScope === "object");
assert(typeof ExecutionMode === "object");
assert(typeof ExecutionStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof AppIntegrationsServiceException);
assert(DuplicateResourceException.prototype instanceof AppIntegrationsServiceException);
assert(InternalServiceError.prototype instanceof AppIntegrationsServiceException);
assert(InvalidRequestException.prototype instanceof AppIntegrationsServiceException);
assert(ResourceNotFoundException.prototype instanceof AppIntegrationsServiceException);
assert(ResourceQuotaExceededException.prototype instanceof AppIntegrationsServiceException);
assert(ThrottlingException.prototype instanceof AppIntegrationsServiceException);
assert(UnsupportedOperationException.prototype instanceof AppIntegrationsServiceException);
assert(AppIntegrationsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplicationAssociations === "function");
assert(typeof paginateListApplications === "function");
assert(typeof paginateListDataIntegrationAssociations === "function");
assert(typeof paginateListDataIntegrations === "function");
assert(typeof paginateListEventIntegrationAssociations === "function");
assert(typeof paginateListEventIntegrations === "function");
console.log(`AppIntegrations index test passed.`);
