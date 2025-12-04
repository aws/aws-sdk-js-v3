import {
  AssociateToConfigurationCommand,
  Chatbot,
  ChatbotClient,
  ChatbotServiceException,
  CreateChimeWebhookConfigurationCommand,
  CreateCustomActionCommand,
  CreateMicrosoftTeamsChannelConfigurationCommand,
  CreateSlackChannelConfigurationCommand,
  CustomActionAttachmentCriteriaOperator,
  DeleteChimeWebhookConfigurationCommand,
  DeleteCustomActionCommand,
  DeleteMicrosoftTeamsChannelConfigurationCommand,
  DeleteMicrosoftTeamsConfiguredTeamCommand,
  DeleteMicrosoftTeamsUserIdentityCommand,
  DeleteSlackChannelConfigurationCommand,
  DeleteSlackUserIdentityCommand,
  DeleteSlackWorkspaceAuthorizationCommand,
  DescribeChimeWebhookConfigurationsCommand,
  DescribeSlackChannelConfigurationsCommand,
  DescribeSlackUserIdentitiesCommand,
  DescribeSlackWorkspacesCommand,
  DisassociateFromConfigurationCommand,
  GetAccountPreferencesCommand,
  GetCustomActionCommand,
  GetMicrosoftTeamsChannelConfigurationCommand,
  ListAssociationsCommand,
  ListCustomActionsCommand,
  ListMicrosoftTeamsChannelConfigurationsCommand,
  ListMicrosoftTeamsConfiguredTeamsCommand,
  ListMicrosoftTeamsUserIdentitiesCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccountPreferencesCommand,
  UpdateChimeWebhookConfigurationCommand,
  UpdateCustomActionCommand,
  UpdateMicrosoftTeamsChannelConfigurationCommand,
  UpdateSlackChannelConfigurationCommand,
  paginateDescribeChimeWebhookConfigurations,
  paginateDescribeSlackChannelConfigurations,
  paginateDescribeSlackUserIdentities,
  paginateDescribeSlackWorkspaces,
  paginateListAssociations,
  paginateListCustomActions,
  paginateListMicrosoftTeamsChannelConfigurations,
  paginateListMicrosoftTeamsConfiguredTeams,
  paginateListMicrosoftTeamsUserIdentities,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ChatbotClient === "function");
assert(typeof Chatbot === "function");
// commands
assert(typeof AssociateToConfigurationCommand === "function");
assert(typeof CreateChimeWebhookConfigurationCommand === "function");
assert(typeof CreateCustomActionCommand === "function");
assert(typeof CreateMicrosoftTeamsChannelConfigurationCommand === "function");
assert(typeof CreateSlackChannelConfigurationCommand === "function");
assert(typeof DeleteChimeWebhookConfigurationCommand === "function");
assert(typeof DeleteCustomActionCommand === "function");
assert(typeof DeleteMicrosoftTeamsChannelConfigurationCommand === "function");
assert(typeof DeleteMicrosoftTeamsConfiguredTeamCommand === "function");
assert(typeof DeleteMicrosoftTeamsUserIdentityCommand === "function");
assert(typeof DeleteSlackChannelConfigurationCommand === "function");
assert(typeof DeleteSlackUserIdentityCommand === "function");
assert(typeof DeleteSlackWorkspaceAuthorizationCommand === "function");
assert(typeof DescribeChimeWebhookConfigurationsCommand === "function");
assert(typeof DescribeSlackChannelConfigurationsCommand === "function");
assert(typeof DescribeSlackUserIdentitiesCommand === "function");
assert(typeof DescribeSlackWorkspacesCommand === "function");
assert(typeof DisassociateFromConfigurationCommand === "function");
assert(typeof GetAccountPreferencesCommand === "function");
assert(typeof GetCustomActionCommand === "function");
assert(typeof GetMicrosoftTeamsChannelConfigurationCommand === "function");
assert(typeof ListAssociationsCommand === "function");
assert(typeof ListCustomActionsCommand === "function");
assert(typeof ListMicrosoftTeamsChannelConfigurationsCommand === "function");
assert(typeof ListMicrosoftTeamsConfiguredTeamsCommand === "function");
assert(typeof ListMicrosoftTeamsUserIdentitiesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAccountPreferencesCommand === "function");
assert(typeof UpdateChimeWebhookConfigurationCommand === "function");
assert(typeof UpdateCustomActionCommand === "function");
assert(typeof UpdateMicrosoftTeamsChannelConfigurationCommand === "function");
assert(typeof UpdateSlackChannelConfigurationCommand === "function");
// enums
assert(typeof CustomActionAttachmentCriteriaOperator === "object");
// errors
assert(ChatbotServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeChimeWebhookConfigurations === "function");
assert(typeof paginateDescribeSlackChannelConfigurations === "function");
assert(typeof paginateDescribeSlackUserIdentities === "function");
assert(typeof paginateDescribeSlackWorkspaces === "function");
assert(typeof paginateListAssociations === "function");
assert(typeof paginateListCustomActions === "function");
assert(typeof paginateListMicrosoftTeamsChannelConfigurations === "function");
assert(typeof paginateListMicrosoftTeamsConfiguredTeams === "function");
assert(typeof paginateListMicrosoftTeamsUserIdentities === "function");
console.log(`Chatbot index test passed.`);
