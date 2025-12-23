import {
  AccessDeniedException,
  AccessDeniedException$,
  AppIntegrations,
  AppIntegrationsClient,
  AppIntegrationsServiceException,
  ApplicationAssociationSummary$,
  ApplicationConfig$,
  ApplicationSourceConfig$,
  ApplicationSummary$,
  ApplicationType,
  ContactHandling$,
  ContactHandlingScope,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateDataIntegration$,
  CreateDataIntegrationAssociation$,
  CreateDataIntegrationAssociationCommand,
  CreateDataIntegrationAssociationRequest$,
  CreateDataIntegrationAssociationResponse$,
  CreateDataIntegrationCommand,
  CreateDataIntegrationRequest$,
  CreateDataIntegrationResponse$,
  CreateEventIntegration$,
  CreateEventIntegrationCommand,
  CreateEventIntegrationRequest$,
  CreateEventIntegrationResponse$,
  DataIntegrationAssociationSummary$,
  DataIntegrationSummary$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  DeleteDataIntegration$,
  DeleteDataIntegrationCommand,
  DeleteDataIntegrationRequest$,
  DeleteDataIntegrationResponse$,
  DeleteEventIntegration$,
  DeleteEventIntegrationCommand,
  DeleteEventIntegrationRequest$,
  DeleteEventIntegrationResponse$,
  DuplicateResourceException,
  DuplicateResourceException$,
  EventFilter$,
  EventIntegration$,
  EventIntegrationAssociation$,
  ExecutionConfiguration$,
  ExecutionMode,
  ExecutionStatus,
  ExternalUrlConfig$,
  FileConfiguration$,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationRequest$,
  GetApplicationResponse$,
  GetDataIntegration$,
  GetDataIntegrationCommand,
  GetDataIntegrationRequest$,
  GetDataIntegrationResponse$,
  GetEventIntegration$,
  GetEventIntegrationCommand,
  GetEventIntegrationRequest$,
  GetEventIntegrationResponse$,
  IframeConfig$,
  InternalServiceError,
  InternalServiceError$,
  InvalidRequestException,
  InvalidRequestException$,
  LastExecutionStatus$,
  ListApplicationAssociations$,
  ListApplicationAssociationsCommand,
  ListApplicationAssociationsRequest$,
  ListApplicationAssociationsResponse$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListDataIntegrationAssociations$,
  ListDataIntegrationAssociationsCommand,
  ListDataIntegrationAssociationsRequest$,
  ListDataIntegrationAssociationsResponse$,
  ListDataIntegrations$,
  ListDataIntegrationsCommand,
  ListDataIntegrationsRequest$,
  ListDataIntegrationsResponse$,
  ListEventIntegrationAssociations$,
  ListEventIntegrationAssociationsCommand,
  ListEventIntegrationAssociationsRequest$,
  ListEventIntegrationAssociationsResponse$,
  ListEventIntegrations$,
  ListEventIntegrationsCommand,
  ListEventIntegrationsRequest$,
  ListEventIntegrationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  OnDemandConfiguration$,
  paginateListApplicationAssociations,
  paginateListApplications,
  paginateListDataIntegrationAssociations,
  paginateListDataIntegrations,
  paginateListEventIntegrationAssociations,
  paginateListEventIntegrations,
  Publication$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceQuotaExceededException,
  ResourceQuotaExceededException$,
  ScheduleConfiguration$,
  Subscription$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UnsupportedOperationException,
  UnsupportedOperationException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
  UpdateDataIntegration$,
  UpdateDataIntegrationAssociation$,
  UpdateDataIntegrationAssociationCommand,
  UpdateDataIntegrationAssociationRequest$,
  UpdateDataIntegrationAssociationResponse$,
  UpdateDataIntegrationCommand,
  UpdateDataIntegrationRequest$,
  UpdateDataIntegrationResponse$,
  UpdateEventIntegration$,
  UpdateEventIntegrationCommand,
  UpdateEventIntegrationRequest$,
  UpdateEventIntegrationResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppIntegrationsClient === "function");
assert(typeof AppIntegrations === "function");
// commands
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateDataIntegrationCommand === "function");
assert(typeof CreateDataIntegration$ === "object");
assert(typeof CreateDataIntegrationAssociationCommand === "function");
assert(typeof CreateDataIntegrationAssociation$ === "object");
assert(typeof CreateEventIntegrationCommand === "function");
assert(typeof CreateEventIntegration$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteDataIntegrationCommand === "function");
assert(typeof DeleteDataIntegration$ === "object");
assert(typeof DeleteEventIntegrationCommand === "function");
assert(typeof DeleteEventIntegration$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetDataIntegrationCommand === "function");
assert(typeof GetDataIntegration$ === "object");
assert(typeof GetEventIntegrationCommand === "function");
assert(typeof GetEventIntegration$ === "object");
assert(typeof ListApplicationAssociationsCommand === "function");
assert(typeof ListApplicationAssociations$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListDataIntegrationAssociationsCommand === "function");
assert(typeof ListDataIntegrationAssociations$ === "object");
assert(typeof ListDataIntegrationsCommand === "function");
assert(typeof ListDataIntegrations$ === "object");
assert(typeof ListEventIntegrationAssociationsCommand === "function");
assert(typeof ListEventIntegrationAssociations$ === "object");
assert(typeof ListEventIntegrationsCommand === "function");
assert(typeof ListEventIntegrations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateDataIntegrationCommand === "function");
assert(typeof UpdateDataIntegration$ === "object");
assert(typeof UpdateDataIntegrationAssociationCommand === "function");
assert(typeof UpdateDataIntegrationAssociation$ === "object");
assert(typeof UpdateEventIntegrationCommand === "function");
assert(typeof UpdateEventIntegration$ === "object");
// structural schemas
assert(typeof ApplicationAssociationSummary$ === "object");
assert(typeof ApplicationConfig$ === "object");
assert(typeof ApplicationSourceConfig$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof ContactHandling$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateDataIntegrationAssociationRequest$ === "object");
assert(typeof CreateDataIntegrationAssociationResponse$ === "object");
assert(typeof CreateDataIntegrationRequest$ === "object");
assert(typeof CreateDataIntegrationResponse$ === "object");
assert(typeof CreateEventIntegrationRequest$ === "object");
assert(typeof CreateEventIntegrationResponse$ === "object");
assert(typeof DataIntegrationAssociationSummary$ === "object");
assert(typeof DataIntegrationSummary$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof DeleteDataIntegrationRequest$ === "object");
assert(typeof DeleteDataIntegrationResponse$ === "object");
assert(typeof DeleteEventIntegrationRequest$ === "object");
assert(typeof DeleteEventIntegrationResponse$ === "object");
assert(typeof EventFilter$ === "object");
assert(typeof EventIntegration$ === "object");
assert(typeof EventIntegrationAssociation$ === "object");
assert(typeof ExecutionConfiguration$ === "object");
assert(typeof ExternalUrlConfig$ === "object");
assert(typeof FileConfiguration$ === "object");
assert(typeof GetApplicationRequest$ === "object");
assert(typeof GetApplicationResponse$ === "object");
assert(typeof GetDataIntegrationRequest$ === "object");
assert(typeof GetDataIntegrationResponse$ === "object");
assert(typeof GetEventIntegrationRequest$ === "object");
assert(typeof GetEventIntegrationResponse$ === "object");
assert(typeof IframeConfig$ === "object");
assert(typeof LastExecutionStatus$ === "object");
assert(typeof ListApplicationAssociationsRequest$ === "object");
assert(typeof ListApplicationAssociationsResponse$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListDataIntegrationAssociationsRequest$ === "object");
assert(typeof ListDataIntegrationAssociationsResponse$ === "object");
assert(typeof ListDataIntegrationsRequest$ === "object");
assert(typeof ListDataIntegrationsResponse$ === "object");
assert(typeof ListEventIntegrationAssociationsRequest$ === "object");
assert(typeof ListEventIntegrationAssociationsResponse$ === "object");
assert(typeof ListEventIntegrationsRequest$ === "object");
assert(typeof ListEventIntegrationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof OnDemandConfiguration$ === "object");
assert(typeof Publication$ === "object");
assert(typeof ScheduleConfiguration$ === "object");
assert(typeof Subscription$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
assert(typeof UpdateDataIntegrationAssociationRequest$ === "object");
assert(typeof UpdateDataIntegrationAssociationResponse$ === "object");
assert(typeof UpdateDataIntegrationRequest$ === "object");
assert(typeof UpdateDataIntegrationResponse$ === "object");
assert(typeof UpdateEventIntegrationRequest$ === "object");
assert(typeof UpdateEventIntegrationResponse$ === "object");
// enums
assert(typeof ApplicationType === "object");
assert(typeof ContactHandlingScope === "object");
assert(typeof ExecutionMode === "object");
assert(typeof ExecutionStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof AppIntegrationsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(DuplicateResourceException.prototype instanceof AppIntegrationsServiceException);
assert(typeof DuplicateResourceException$ === "object");
assert(InternalServiceError.prototype instanceof AppIntegrationsServiceException);
assert(typeof InternalServiceError$ === "object");
assert(InvalidRequestException.prototype instanceof AppIntegrationsServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AppIntegrationsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceQuotaExceededException.prototype instanceof AppIntegrationsServiceException);
assert(typeof ResourceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof AppIntegrationsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnsupportedOperationException.prototype instanceof AppIntegrationsServiceException);
assert(typeof UnsupportedOperationException$ === "object");
assert(AppIntegrationsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplicationAssociations === "function");
assert(typeof paginateListApplications === "function");
assert(typeof paginateListDataIntegrationAssociations === "function");
assert(typeof paginateListDataIntegrations === "function");
assert(typeof paginateListEventIntegrationAssociations === "function");
assert(typeof paginateListEventIntegrations === "function");
console.log(`AppIntegrations index test passed.`);
