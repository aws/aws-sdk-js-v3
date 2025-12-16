import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessStatus,
  AccountContactType,
  AggregationDetail$,
  AggregationDuration,
  AggregationEventType,
  AggregationKey$,
  AggregationSummary$,
  AssociateChannel$,
  AssociateChannelCommand,
  AssociateChannelRequest$,
  AssociateChannelResponse$,
  AssociateManagedNotificationAccountContact$,
  AssociateManagedNotificationAccountContactCommand,
  AssociateManagedNotificationAccountContactRequest$,
  AssociateManagedNotificationAccountContactResponse$,
  AssociateManagedNotificationAdditionalChannel$,
  AssociateManagedNotificationAdditionalChannelCommand,
  AssociateManagedNotificationAdditionalChannelRequest$,
  AssociateManagedNotificationAdditionalChannelResponse$,
  AssociateOrganizationalUnit$,
  AssociateOrganizationalUnitCommand,
  AssociateOrganizationalUnitRequest$,
  AssociateOrganizationalUnitResponse$,
  ChannelAssociationOverrideOption,
  ChannelType,
  ConflictException,
  ConflictException$,
  CreateEventRule$,
  CreateEventRuleCommand,
  CreateEventRuleRequest$,
  CreateEventRuleResponse$,
  CreateNotificationConfiguration$,
  CreateNotificationConfigurationCommand,
  CreateNotificationConfigurationRequest$,
  CreateNotificationConfigurationResponse$,
  DeleteEventRule$,
  DeleteEventRuleCommand,
  DeleteEventRuleRequest$,
  DeleteEventRuleResponse$,
  DeleteNotificationConfiguration$,
  DeleteNotificationConfigurationCommand,
  DeleteNotificationConfigurationRequest$,
  DeleteNotificationConfigurationResponse$,
  DeregisterNotificationHub$,
  DeregisterNotificationHubCommand,
  DeregisterNotificationHubRequest$,
  DeregisterNotificationHubResponse$,
  Dimension$,
  DisableNotificationsAccessForOrganization$,
  DisableNotificationsAccessForOrganizationCommand,
  DisableNotificationsAccessForOrganizationRequest$,
  DisableNotificationsAccessForOrganizationResponse$,
  DisassociateChannel$,
  DisassociateChannelCommand,
  DisassociateChannelRequest$,
  DisassociateChannelResponse$,
  DisassociateManagedNotificationAccountContact$,
  DisassociateManagedNotificationAccountContactCommand,
  DisassociateManagedNotificationAccountContactRequest$,
  DisassociateManagedNotificationAccountContactResponse$,
  DisassociateManagedNotificationAdditionalChannel$,
  DisassociateManagedNotificationAdditionalChannelCommand,
  DisassociateManagedNotificationAdditionalChannelRequest$,
  DisassociateManagedNotificationAdditionalChannelResponse$,
  DisassociateOrganizationalUnit$,
  DisassociateOrganizationalUnitCommand,
  DisassociateOrganizationalUnitRequest$,
  DisassociateOrganizationalUnitResponse$,
  EnableNotificationsAccessForOrganization$,
  EnableNotificationsAccessForOrganizationCommand,
  EnableNotificationsAccessForOrganizationRequest$,
  EnableNotificationsAccessForOrganizationResponse$,
  EventRuleStatus,
  EventRuleStatusSummary$,
  EventRuleStructure$,
  EventStatus,
  GetEventRule$,
  GetEventRuleCommand,
  GetEventRuleRequest$,
  GetEventRuleResponse$,
  GetManagedNotificationChildEvent$,
  GetManagedNotificationChildEventCommand,
  GetManagedNotificationChildEventRequest$,
  GetManagedNotificationChildEventResponse$,
  GetManagedNotificationConfiguration$,
  GetManagedNotificationConfigurationCommand,
  GetManagedNotificationConfigurationRequest$,
  GetManagedNotificationConfigurationResponse$,
  GetManagedNotificationEvent$,
  GetManagedNotificationEventCommand,
  GetManagedNotificationEventRequest$,
  GetManagedNotificationEventResponse$,
  GetNotificationConfiguration$,
  GetNotificationConfigurationCommand,
  GetNotificationConfigurationRequest$,
  GetNotificationConfigurationResponse$,
  GetNotificationEvent$,
  GetNotificationEventCommand,
  GetNotificationEventRequest$,
  GetNotificationEventResponse$,
  GetNotificationsAccessForOrganization$,
  GetNotificationsAccessForOrganizationCommand,
  GetNotificationsAccessForOrganizationRequest$,
  GetNotificationsAccessForOrganizationResponse$,
  InternalServerException,
  InternalServerException$,
  ListChannels$,
  ListChannelsCommand,
  ListChannelsRequest$,
  ListChannelsResponse$,
  ListEventRules$,
  ListEventRulesCommand,
  ListEventRulesRequest$,
  ListEventRulesResponse$,
  ListManagedNotificationChannelAssociations$,
  ListManagedNotificationChannelAssociationsCommand,
  ListManagedNotificationChannelAssociationsRequest$,
  ListManagedNotificationChannelAssociationsResponse$,
  ListManagedNotificationChildEvents$,
  ListManagedNotificationChildEventsCommand,
  ListManagedNotificationChildEventsRequest$,
  ListManagedNotificationChildEventsResponse$,
  ListManagedNotificationConfigurations$,
  ListManagedNotificationConfigurationsCommand,
  ListManagedNotificationConfigurationsRequest$,
  ListManagedNotificationConfigurationsResponse$,
  ListManagedNotificationEvents$,
  ListManagedNotificationEventsCommand,
  ListManagedNotificationEventsRequest$,
  ListManagedNotificationEventsResponse$,
  ListMemberAccounts$,
  ListMemberAccountsCommand,
  ListMemberAccountsRequest$,
  ListMemberAccountsResponse$,
  ListNotificationConfigurations$,
  ListNotificationConfigurationsCommand,
  ListNotificationConfigurationsRequest$,
  ListNotificationConfigurationsResponse$,
  ListNotificationEvents$,
  ListNotificationEventsCommand,
  ListNotificationEventsRequest$,
  ListNotificationEventsResponse$,
  ListNotificationHubs$,
  ListNotificationHubsCommand,
  ListNotificationHubsRequest$,
  ListNotificationHubsResponse$,
  ListOrganizationalUnits$,
  ListOrganizationalUnitsCommand,
  ListOrganizationalUnitsRequest$,
  ListOrganizationalUnitsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LocaleCode,
  ManagedNotificationChannelAssociationSummary$,
  ManagedNotificationChildEvent$,
  ManagedNotificationChildEventOverview$,
  ManagedNotificationChildEventSummary$,
  ManagedNotificationConfigurationStructure$,
  ManagedNotificationEvent$,
  ManagedNotificationEventOverview$,
  ManagedNotificationEventSummary$,
  ManagedSourceEventMetadataSummary$,
  MediaElement$,
  MediaElementType,
  MemberAccount$,
  MemberAccountNotificationConfigurationStatus,
  MessageComponents$,
  MessageComponentsSummary$,
  NotificationConfigurationStatus,
  NotificationConfigurationStructure$,
  NotificationConfigurationSubtype,
  NotificationEventOverview$,
  NotificationEventSchema$,
  NotificationEventSummary$,
  NotificationHubOverview$,
  NotificationHubStatus,
  NotificationHubStatusSummary$,
  NotificationType,
  Notifications,
  NotificationsAccessForOrganization$,
  NotificationsClient,
  NotificationsServiceException,
  RegisterNotificationHub$,
  RegisterNotificationHubCommand,
  RegisterNotificationHubRequest$,
  RegisterNotificationHubResponse$,
  Resource$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SchemaVersion,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SourceEventMetadata$,
  SourceEventMetadataSummary$,
  SummarizationDimensionDetail$,
  SummarizationDimensionOverview$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TextPartType,
  TextPartValue$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateEventRule$,
  UpdateEventRuleCommand,
  UpdateEventRuleRequest$,
  UpdateEventRuleResponse$,
  UpdateNotificationConfiguration$,
  UpdateNotificationConfigurationCommand,
  UpdateNotificationConfigurationRequest$,
  UpdateNotificationConfigurationResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  paginateListChannels,
  paginateListEventRules,
  paginateListManagedNotificationChannelAssociations,
  paginateListManagedNotificationChildEvents,
  paginateListManagedNotificationConfigurations,
  paginateListManagedNotificationEvents,
  paginateListMemberAccounts,
  paginateListNotificationConfigurations,
  paginateListNotificationEvents,
  paginateListNotificationHubs,
  paginateListOrganizationalUnits,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NotificationsClient === "function");
assert(typeof Notifications === "function");
// commands
assert(typeof AssociateChannelCommand === "function");
assert(typeof AssociateChannel$ === "object");
assert(typeof AssociateManagedNotificationAccountContactCommand === "function");
assert(typeof AssociateManagedNotificationAccountContact$ === "object");
assert(typeof AssociateManagedNotificationAdditionalChannelCommand === "function");
assert(typeof AssociateManagedNotificationAdditionalChannel$ === "object");
assert(typeof AssociateOrganizationalUnitCommand === "function");
assert(typeof AssociateOrganizationalUnit$ === "object");
assert(typeof CreateEventRuleCommand === "function");
assert(typeof CreateEventRule$ === "object");
assert(typeof CreateNotificationConfigurationCommand === "function");
assert(typeof CreateNotificationConfiguration$ === "object");
assert(typeof DeleteEventRuleCommand === "function");
assert(typeof DeleteEventRule$ === "object");
assert(typeof DeleteNotificationConfigurationCommand === "function");
assert(typeof DeleteNotificationConfiguration$ === "object");
assert(typeof DeregisterNotificationHubCommand === "function");
assert(typeof DeregisterNotificationHub$ === "object");
assert(typeof DisableNotificationsAccessForOrganizationCommand === "function");
assert(typeof DisableNotificationsAccessForOrganization$ === "object");
assert(typeof DisassociateChannelCommand === "function");
assert(typeof DisassociateChannel$ === "object");
assert(typeof DisassociateManagedNotificationAccountContactCommand === "function");
assert(typeof DisassociateManagedNotificationAccountContact$ === "object");
assert(typeof DisassociateManagedNotificationAdditionalChannelCommand === "function");
assert(typeof DisassociateManagedNotificationAdditionalChannel$ === "object");
assert(typeof DisassociateOrganizationalUnitCommand === "function");
assert(typeof DisassociateOrganizationalUnit$ === "object");
assert(typeof EnableNotificationsAccessForOrganizationCommand === "function");
assert(typeof EnableNotificationsAccessForOrganization$ === "object");
assert(typeof GetEventRuleCommand === "function");
assert(typeof GetEventRule$ === "object");
assert(typeof GetManagedNotificationChildEventCommand === "function");
assert(typeof GetManagedNotificationChildEvent$ === "object");
assert(typeof GetManagedNotificationConfigurationCommand === "function");
assert(typeof GetManagedNotificationConfiguration$ === "object");
assert(typeof GetManagedNotificationEventCommand === "function");
assert(typeof GetManagedNotificationEvent$ === "object");
assert(typeof GetNotificationConfigurationCommand === "function");
assert(typeof GetNotificationConfiguration$ === "object");
assert(typeof GetNotificationEventCommand === "function");
assert(typeof GetNotificationEvent$ === "object");
assert(typeof GetNotificationsAccessForOrganizationCommand === "function");
assert(typeof GetNotificationsAccessForOrganization$ === "object");
assert(typeof ListChannelsCommand === "function");
assert(typeof ListChannels$ === "object");
assert(typeof ListEventRulesCommand === "function");
assert(typeof ListEventRules$ === "object");
assert(typeof ListManagedNotificationChannelAssociationsCommand === "function");
assert(typeof ListManagedNotificationChannelAssociations$ === "object");
assert(typeof ListManagedNotificationChildEventsCommand === "function");
assert(typeof ListManagedNotificationChildEvents$ === "object");
assert(typeof ListManagedNotificationConfigurationsCommand === "function");
assert(typeof ListManagedNotificationConfigurations$ === "object");
assert(typeof ListManagedNotificationEventsCommand === "function");
assert(typeof ListManagedNotificationEvents$ === "object");
assert(typeof ListMemberAccountsCommand === "function");
assert(typeof ListMemberAccounts$ === "object");
assert(typeof ListNotificationConfigurationsCommand === "function");
assert(typeof ListNotificationConfigurations$ === "object");
assert(typeof ListNotificationEventsCommand === "function");
assert(typeof ListNotificationEvents$ === "object");
assert(typeof ListNotificationHubsCommand === "function");
assert(typeof ListNotificationHubs$ === "object");
assert(typeof ListOrganizationalUnitsCommand === "function");
assert(typeof ListOrganizationalUnits$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RegisterNotificationHubCommand === "function");
assert(typeof RegisterNotificationHub$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateEventRuleCommand === "function");
assert(typeof UpdateEventRule$ === "object");
assert(typeof UpdateNotificationConfigurationCommand === "function");
assert(typeof UpdateNotificationConfiguration$ === "object");
// structural schemas
assert(typeof AggregationDetail$ === "object");
assert(typeof AggregationKey$ === "object");
assert(typeof AggregationSummary$ === "object");
assert(typeof AssociateChannelRequest$ === "object");
assert(typeof AssociateChannelResponse$ === "object");
assert(typeof AssociateManagedNotificationAccountContactRequest$ === "object");
assert(typeof AssociateManagedNotificationAccountContactResponse$ === "object");
assert(typeof AssociateManagedNotificationAdditionalChannelRequest$ === "object");
assert(typeof AssociateManagedNotificationAdditionalChannelResponse$ === "object");
assert(typeof AssociateOrganizationalUnitRequest$ === "object");
assert(typeof AssociateOrganizationalUnitResponse$ === "object");
assert(typeof CreateEventRuleRequest$ === "object");
assert(typeof CreateEventRuleResponse$ === "object");
assert(typeof CreateNotificationConfigurationRequest$ === "object");
assert(typeof CreateNotificationConfigurationResponse$ === "object");
assert(typeof DeleteEventRuleRequest$ === "object");
assert(typeof DeleteEventRuleResponse$ === "object");
assert(typeof DeleteNotificationConfigurationRequest$ === "object");
assert(typeof DeleteNotificationConfigurationResponse$ === "object");
assert(typeof DeregisterNotificationHubRequest$ === "object");
assert(typeof DeregisterNotificationHubResponse$ === "object");
assert(typeof Dimension$ === "object");
assert(typeof DisableNotificationsAccessForOrganizationRequest$ === "object");
assert(typeof DisableNotificationsAccessForOrganizationResponse$ === "object");
assert(typeof DisassociateChannelRequest$ === "object");
assert(typeof DisassociateChannelResponse$ === "object");
assert(typeof DisassociateManagedNotificationAccountContactRequest$ === "object");
assert(typeof DisassociateManagedNotificationAccountContactResponse$ === "object");
assert(typeof DisassociateManagedNotificationAdditionalChannelRequest$ === "object");
assert(typeof DisassociateManagedNotificationAdditionalChannelResponse$ === "object");
assert(typeof DisassociateOrganizationalUnitRequest$ === "object");
assert(typeof DisassociateOrganizationalUnitResponse$ === "object");
assert(typeof EnableNotificationsAccessForOrganizationRequest$ === "object");
assert(typeof EnableNotificationsAccessForOrganizationResponse$ === "object");
assert(typeof EventRuleStatusSummary$ === "object");
assert(typeof EventRuleStructure$ === "object");
assert(typeof GetEventRuleRequest$ === "object");
assert(typeof GetEventRuleResponse$ === "object");
assert(typeof GetManagedNotificationChildEventRequest$ === "object");
assert(typeof GetManagedNotificationChildEventResponse$ === "object");
assert(typeof GetManagedNotificationConfigurationRequest$ === "object");
assert(typeof GetManagedNotificationConfigurationResponse$ === "object");
assert(typeof GetManagedNotificationEventRequest$ === "object");
assert(typeof GetManagedNotificationEventResponse$ === "object");
assert(typeof GetNotificationConfigurationRequest$ === "object");
assert(typeof GetNotificationConfigurationResponse$ === "object");
assert(typeof GetNotificationEventRequest$ === "object");
assert(typeof GetNotificationEventResponse$ === "object");
assert(typeof GetNotificationsAccessForOrganizationRequest$ === "object");
assert(typeof GetNotificationsAccessForOrganizationResponse$ === "object");
assert(typeof ListChannelsRequest$ === "object");
assert(typeof ListChannelsResponse$ === "object");
assert(typeof ListEventRulesRequest$ === "object");
assert(typeof ListEventRulesResponse$ === "object");
assert(typeof ListManagedNotificationChannelAssociationsRequest$ === "object");
assert(typeof ListManagedNotificationChannelAssociationsResponse$ === "object");
assert(typeof ListManagedNotificationChildEventsRequest$ === "object");
assert(typeof ListManagedNotificationChildEventsResponse$ === "object");
assert(typeof ListManagedNotificationConfigurationsRequest$ === "object");
assert(typeof ListManagedNotificationConfigurationsResponse$ === "object");
assert(typeof ListManagedNotificationEventsRequest$ === "object");
assert(typeof ListManagedNotificationEventsResponse$ === "object");
assert(typeof ListMemberAccountsRequest$ === "object");
assert(typeof ListMemberAccountsResponse$ === "object");
assert(typeof ListNotificationConfigurationsRequest$ === "object");
assert(typeof ListNotificationConfigurationsResponse$ === "object");
assert(typeof ListNotificationEventsRequest$ === "object");
assert(typeof ListNotificationEventsResponse$ === "object");
assert(typeof ListNotificationHubsRequest$ === "object");
assert(typeof ListNotificationHubsResponse$ === "object");
assert(typeof ListOrganizationalUnitsRequest$ === "object");
assert(typeof ListOrganizationalUnitsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ManagedNotificationChannelAssociationSummary$ === "object");
assert(typeof ManagedNotificationChildEvent$ === "object");
assert(typeof ManagedNotificationChildEventOverview$ === "object");
assert(typeof ManagedNotificationChildEventSummary$ === "object");
assert(typeof ManagedNotificationConfigurationStructure$ === "object");
assert(typeof ManagedNotificationEvent$ === "object");
assert(typeof ManagedNotificationEventOverview$ === "object");
assert(typeof ManagedNotificationEventSummary$ === "object");
assert(typeof ManagedSourceEventMetadataSummary$ === "object");
assert(typeof MediaElement$ === "object");
assert(typeof MemberAccount$ === "object");
assert(typeof MessageComponents$ === "object");
assert(typeof MessageComponentsSummary$ === "object");
assert(typeof NotificationConfigurationStructure$ === "object");
assert(typeof NotificationEventOverview$ === "object");
assert(typeof NotificationEventSchema$ === "object");
assert(typeof NotificationEventSummary$ === "object");
assert(typeof NotificationHubOverview$ === "object");
assert(typeof NotificationHubStatusSummary$ === "object");
assert(typeof NotificationsAccessForOrganization$ === "object");
assert(typeof RegisterNotificationHubRequest$ === "object");
assert(typeof RegisterNotificationHubResponse$ === "object");
assert(typeof Resource$ === "object");
assert(typeof SourceEventMetadata$ === "object");
assert(typeof SourceEventMetadataSummary$ === "object");
assert(typeof SummarizationDimensionDetail$ === "object");
assert(typeof SummarizationDimensionOverview$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TextPartValue$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateEventRuleRequest$ === "object");
assert(typeof UpdateEventRuleResponse$ === "object");
assert(typeof UpdateNotificationConfigurationRequest$ === "object");
assert(typeof UpdateNotificationConfigurationResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AccessStatus === "object");
assert(typeof AccountContactType === "object");
assert(typeof AggregationDuration === "object");
assert(typeof AggregationEventType === "object");
assert(typeof ChannelAssociationOverrideOption === "object");
assert(typeof ChannelType === "object");
assert(typeof EventRuleStatus === "object");
assert(typeof EventStatus === "object");
assert(typeof LocaleCode === "object");
assert(typeof MediaElementType === "object");
assert(typeof MemberAccountNotificationConfigurationStatus === "object");
assert(typeof NotificationConfigurationStatus === "object");
assert(typeof NotificationConfigurationSubtype === "object");
assert(typeof NotificationHubStatus === "object");
assert(typeof NotificationType === "object");
assert(typeof SchemaVersion === "object");
assert(typeof TextPartType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof NotificationsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof NotificationsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof NotificationsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof NotificationsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof NotificationsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof NotificationsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof NotificationsServiceException);
assert(typeof ValidationException$ === "object");
assert(NotificationsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChannels === "function");
assert(typeof paginateListEventRules === "function");
assert(typeof paginateListManagedNotificationChannelAssociations === "function");
assert(typeof paginateListManagedNotificationChildEvents === "function");
assert(typeof paginateListManagedNotificationConfigurations === "function");
assert(typeof paginateListManagedNotificationEvents === "function");
assert(typeof paginateListMemberAccounts === "function");
assert(typeof paginateListNotificationConfigurations === "function");
assert(typeof paginateListNotificationEvents === "function");
assert(typeof paginateListNotificationHubs === "function");
assert(typeof paginateListOrganizationalUnits === "function");
console.log(`Notifications index test passed.`);
