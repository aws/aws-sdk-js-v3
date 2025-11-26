import {
  AccessStatus,
  AccountContactType,
  AggregationDuration,
  AggregationEventType,
  AssociateChannelCommand,
  AssociateManagedNotificationAccountContactCommand,
  AssociateManagedNotificationAdditionalChannelCommand,
  AssociateOrganizationalUnitCommand,
  ChannelAssociationOverrideOption,
  ChannelType,
  CreateEventRuleCommand,
  CreateNotificationConfigurationCommand,
  DeleteEventRuleCommand,
  DeleteNotificationConfigurationCommand,
  DeregisterNotificationHubCommand,
  DisableNotificationsAccessForOrganizationCommand,
  DisassociateChannelCommand,
  DisassociateManagedNotificationAccountContactCommand,
  DisassociateManagedNotificationAdditionalChannelCommand,
  DisassociateOrganizationalUnitCommand,
  EnableNotificationsAccessForOrganizationCommand,
  EventRuleStatus,
  EventStatus,
  GetEventRuleCommand,
  GetManagedNotificationChildEventCommand,
  GetManagedNotificationConfigurationCommand,
  GetManagedNotificationEventCommand,
  GetNotificationConfigurationCommand,
  GetNotificationEventCommand,
  GetNotificationsAccessForOrganizationCommand,
  ListChannelsCommand,
  ListEventRulesCommand,
  ListManagedNotificationChannelAssociationsCommand,
  ListManagedNotificationChildEventsCommand,
  ListManagedNotificationConfigurationsCommand,
  ListManagedNotificationEventsCommand,
  ListMemberAccountsCommand,
  ListNotificationConfigurationsCommand,
  ListNotificationEventsCommand,
  ListNotificationHubsCommand,
  ListOrganizationalUnitsCommand,
  ListTagsForResourceCommand,
  LocaleCode,
  MediaElementType,
  MemberAccountNotificationConfigurationStatus,
  NotificationConfigurationStatus,
  NotificationConfigurationSubtype,
  NotificationHubStatus,
  NotificationType,
  Notifications,
  NotificationsClient,
  NotificationsServiceException,
  RegisterNotificationHubCommand,
  SchemaVersion,
  TagResourceCommand,
  TextPartType,
  UntagResourceCommand,
  UpdateEventRuleCommand,
  UpdateNotificationConfigurationCommand,
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
assert(typeof NotificationsClient === "function")
assert(typeof Notifications === "function")
// commands
assert(typeof AssociateChannelCommand === "function")
assert(typeof AssociateManagedNotificationAccountContactCommand === "function")
assert(typeof AssociateManagedNotificationAdditionalChannelCommand === "function")
assert(typeof AssociateOrganizationalUnitCommand === "function")
assert(typeof CreateEventRuleCommand === "function")
assert(typeof CreateNotificationConfigurationCommand === "function")
assert(typeof DeleteEventRuleCommand === "function")
assert(typeof DeleteNotificationConfigurationCommand === "function")
assert(typeof DeregisterNotificationHubCommand === "function")
assert(typeof DisableNotificationsAccessForOrganizationCommand === "function")
assert(typeof DisassociateChannelCommand === "function")
assert(typeof DisassociateManagedNotificationAccountContactCommand === "function")
assert(typeof DisassociateManagedNotificationAdditionalChannelCommand === "function")
assert(typeof DisassociateOrganizationalUnitCommand === "function")
assert(typeof EnableNotificationsAccessForOrganizationCommand === "function")
assert(typeof GetEventRuleCommand === "function")
assert(typeof GetManagedNotificationChildEventCommand === "function")
assert(typeof GetManagedNotificationConfigurationCommand === "function")
assert(typeof GetManagedNotificationEventCommand === "function")
assert(typeof GetNotificationConfigurationCommand === "function")
assert(typeof GetNotificationEventCommand === "function")
assert(typeof GetNotificationsAccessForOrganizationCommand === "function")
assert(typeof ListChannelsCommand === "function")
assert(typeof ListEventRulesCommand === "function")
assert(typeof ListManagedNotificationChannelAssociationsCommand === "function")
assert(typeof ListManagedNotificationChildEventsCommand === "function")
assert(typeof ListManagedNotificationConfigurationsCommand === "function")
assert(typeof ListManagedNotificationEventsCommand === "function")
assert(typeof ListMemberAccountsCommand === "function")
assert(typeof ListNotificationConfigurationsCommand === "function")
assert(typeof ListNotificationEventsCommand === "function")
assert(typeof ListNotificationHubsCommand === "function")
assert(typeof ListOrganizationalUnitsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof RegisterNotificationHubCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateEventRuleCommand === "function")
assert(typeof UpdateNotificationConfigurationCommand === "function")
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
// errors
assert(NotificationsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListChannels === "function")
assert(typeof paginateListEventRules === "function")
assert(typeof paginateListManagedNotificationChannelAssociations === "function")
assert(typeof paginateListManagedNotificationChildEvents === "function")
assert(typeof paginateListManagedNotificationConfigurations === "function")
assert(typeof paginateListManagedNotificationEvents === "function")
assert(typeof paginateListMemberAccounts === "function")
assert(typeof paginateListNotificationConfigurations === "function")
assert(typeof paginateListNotificationEvents === "function")
assert(typeof paginateListNotificationHubs === "function")
assert(typeof paginateListOrganizationalUnits === "function")
console.log(`Notifications index test passed.`);
