import {
  AssociateToConfigurationCommand,
  Chatbot,
  ChatbotClient,
  ChatbotServiceException,
  ConflictException,
  CreateChimeWebhookConfigurationCommand,
  CreateChimeWebhookConfigurationException,
  CreateCustomActionCommand,
  CreateMicrosoftTeamsChannelConfigurationCommand,
  CreateSlackChannelConfigurationCommand,
  CreateSlackChannelConfigurationException,
  CreateTeamsChannelConfigurationException,
  CustomActionAttachmentCriteriaOperator,
  DeleteChimeWebhookConfigurationCommand,
  DeleteChimeWebhookConfigurationException,
  DeleteCustomActionCommand,
  DeleteMicrosoftTeamsChannelConfigurationCommand,
  DeleteMicrosoftTeamsConfiguredTeamCommand,
  DeleteMicrosoftTeamsUserIdentityCommand,
  DeleteMicrosoftTeamsUserIdentityException,
  DeleteSlackChannelConfigurationCommand,
  DeleteSlackChannelConfigurationException,
  DeleteSlackUserIdentityCommand,
  DeleteSlackUserIdentityException,
  DeleteSlackWorkspaceAuthorizationCommand,
  DeleteSlackWorkspaceAuthorizationFault,
  DeleteTeamsChannelConfigurationException,
  DeleteTeamsConfiguredTeamException,
  DescribeChimeWebhookConfigurationsCommand,
  DescribeChimeWebhookConfigurationsException,
  DescribeSlackChannelConfigurationsCommand,
  DescribeSlackChannelConfigurationsException,
  DescribeSlackUserIdentitiesCommand,
  DescribeSlackUserIdentitiesException,
  DescribeSlackWorkspacesCommand,
  DescribeSlackWorkspacesException,
  DisassociateFromConfigurationCommand,
  GetAccountPreferencesCommand,
  GetAccountPreferencesException,
  GetCustomActionCommand,
  GetMicrosoftTeamsChannelConfigurationCommand,
  GetTeamsChannelConfigurationException,
  InternalServiceError,
  InvalidParameterException,
  InvalidRequestException,
  LimitExceededException,
  ListAssociationsCommand,
  ListCustomActionsCommand,
  ListMicrosoftTeamsChannelConfigurationsCommand,
  ListMicrosoftTeamsConfiguredTeamsCommand,
  ListMicrosoftTeamsConfiguredTeamsException,
  ListMicrosoftTeamsUserIdentitiesCommand,
  ListMicrosoftTeamsUserIdentitiesException,
  ListTagsForResourceCommand,
  ListTeamsChannelConfigurationsException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  TagResourceCommand,
  TooManyTagsException,
  UnauthorizedException,
  UntagResourceCommand,
  UpdateAccountPreferencesCommand,
  UpdateAccountPreferencesException,
  UpdateChimeWebhookConfigurationCommand,
  UpdateChimeWebhookConfigurationException,
  UpdateCustomActionCommand,
  UpdateMicrosoftTeamsChannelConfigurationCommand,
  UpdateSlackChannelConfigurationCommand,
  UpdateSlackChannelConfigurationException,
  UpdateTeamsChannelConfigurationException,
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
assert(ConflictException.prototype instanceof ChatbotServiceException);
assert(CreateChimeWebhookConfigurationException.prototype instanceof ChatbotServiceException);
assert(CreateSlackChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(CreateTeamsChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(DeleteChimeWebhookConfigurationException.prototype instanceof ChatbotServiceException);
assert(DeleteMicrosoftTeamsUserIdentityException.prototype instanceof ChatbotServiceException);
assert(DeleteSlackChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(DeleteSlackUserIdentityException.prototype instanceof ChatbotServiceException);
assert(DeleteSlackWorkspaceAuthorizationFault.prototype instanceof ChatbotServiceException);
assert(DeleteTeamsChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(DeleteTeamsConfiguredTeamException.prototype instanceof ChatbotServiceException);
assert(DescribeChimeWebhookConfigurationsException.prototype instanceof ChatbotServiceException);
assert(DescribeSlackChannelConfigurationsException.prototype instanceof ChatbotServiceException);
assert(DescribeSlackUserIdentitiesException.prototype instanceof ChatbotServiceException);
assert(DescribeSlackWorkspacesException.prototype instanceof ChatbotServiceException);
assert(GetAccountPreferencesException.prototype instanceof ChatbotServiceException);
assert(GetTeamsChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(InternalServiceError.prototype instanceof ChatbotServiceException);
assert(InvalidParameterException.prototype instanceof ChatbotServiceException);
assert(InvalidRequestException.prototype instanceof ChatbotServiceException);
assert(LimitExceededException.prototype instanceof ChatbotServiceException);
assert(ListMicrosoftTeamsConfiguredTeamsException.prototype instanceof ChatbotServiceException);
assert(ListMicrosoftTeamsUserIdentitiesException.prototype instanceof ChatbotServiceException);
assert(ListTeamsChannelConfigurationsException.prototype instanceof ChatbotServiceException);
assert(ResourceNotFoundException.prototype instanceof ChatbotServiceException);
assert(ServiceUnavailableException.prototype instanceof ChatbotServiceException);
assert(TooManyTagsException.prototype instanceof ChatbotServiceException);
assert(UnauthorizedException.prototype instanceof ChatbotServiceException);
assert(UpdateAccountPreferencesException.prototype instanceof ChatbotServiceException);
assert(UpdateChimeWebhookConfigurationException.prototype instanceof ChatbotServiceException);
assert(UpdateSlackChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(UpdateTeamsChannelConfigurationException.prototype instanceof ChatbotServiceException);
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
