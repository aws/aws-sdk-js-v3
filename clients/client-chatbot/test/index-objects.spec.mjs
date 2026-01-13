import {
  AccountPreferences$,
  AssociateToConfiguration$,
  AssociateToConfigurationCommand,
  AssociateToConfigurationRequest$,
  AssociateToConfigurationResult$,
  AssociationListing$,
  Chatbot,
  ChatbotClient,
  ChatbotServiceException,
  ChimeWebhookConfiguration$,
  ConfiguredTeam$,
  ConflictException,
  ConflictException$,
  CreateChimeWebhookConfiguration$,
  CreateChimeWebhookConfigurationCommand,
  CreateChimeWebhookConfigurationException,
  CreateChimeWebhookConfigurationException$,
  CreateChimeWebhookConfigurationRequest$,
  CreateChimeWebhookConfigurationResult$,
  CreateCustomAction$,
  CreateCustomActionCommand,
  CreateCustomActionRequest$,
  CreateCustomActionResult$,
  CreateMicrosoftTeamsChannelConfiguration$,
  CreateMicrosoftTeamsChannelConfigurationCommand,
  CreateSlackChannelConfiguration$,
  CreateSlackChannelConfigurationCommand,
  CreateSlackChannelConfigurationException,
  CreateSlackChannelConfigurationException$,
  CreateSlackChannelConfigurationRequest$,
  CreateSlackChannelConfigurationResult$,
  CreateTeamsChannelConfigurationException,
  CreateTeamsChannelConfigurationException$,
  CreateTeamsChannelConfigurationRequest$,
  CreateTeamsChannelConfigurationResult$,
  CustomAction$,
  CustomActionAttachment$,
  CustomActionAttachmentCriteria$,
  CustomActionAttachmentCriteriaOperator,
  CustomActionDefinition$,
  DeleteChimeWebhookConfiguration$,
  DeleteChimeWebhookConfigurationCommand,
  DeleteChimeWebhookConfigurationException,
  DeleteChimeWebhookConfigurationException$,
  DeleteChimeWebhookConfigurationRequest$,
  DeleteChimeWebhookConfigurationResult$,
  DeleteCustomAction$,
  DeleteCustomActionCommand,
  DeleteCustomActionRequest$,
  DeleteCustomActionResult$,
  DeleteMicrosoftTeamsChannelConfiguration$,
  DeleteMicrosoftTeamsChannelConfigurationCommand,
  DeleteMicrosoftTeamsConfiguredTeam$,
  DeleteMicrosoftTeamsConfiguredTeamCommand,
  DeleteMicrosoftTeamsUserIdentity$,
  DeleteMicrosoftTeamsUserIdentityCommand,
  DeleteMicrosoftTeamsUserIdentityException,
  DeleteMicrosoftTeamsUserIdentityException$,
  DeleteMicrosoftTeamsUserIdentityRequest$,
  DeleteMicrosoftTeamsUserIdentityResult$,
  DeleteSlackChannelConfiguration$,
  DeleteSlackChannelConfigurationCommand,
  DeleteSlackChannelConfigurationException,
  DeleteSlackChannelConfigurationException$,
  DeleteSlackChannelConfigurationRequest$,
  DeleteSlackChannelConfigurationResult$,
  DeleteSlackUserIdentity$,
  DeleteSlackUserIdentityCommand,
  DeleteSlackUserIdentityException,
  DeleteSlackUserIdentityException$,
  DeleteSlackUserIdentityRequest$,
  DeleteSlackUserIdentityResult$,
  DeleteSlackWorkspaceAuthorization$,
  DeleteSlackWorkspaceAuthorizationCommand,
  DeleteSlackWorkspaceAuthorizationFault,
  DeleteSlackWorkspaceAuthorizationFault$,
  DeleteSlackWorkspaceAuthorizationRequest$,
  DeleteSlackWorkspaceAuthorizationResult$,
  DeleteTeamsChannelConfigurationException,
  DeleteTeamsChannelConfigurationException$,
  DeleteTeamsChannelConfigurationRequest$,
  DeleteTeamsChannelConfigurationResult$,
  DeleteTeamsConfiguredTeamException,
  DeleteTeamsConfiguredTeamException$,
  DeleteTeamsConfiguredTeamRequest$,
  DeleteTeamsConfiguredTeamResult$,
  DescribeChimeWebhookConfigurations$,
  DescribeChimeWebhookConfigurationsCommand,
  DescribeChimeWebhookConfigurationsException,
  DescribeChimeWebhookConfigurationsException$,
  DescribeChimeWebhookConfigurationsRequest$,
  DescribeChimeWebhookConfigurationsResult$,
  DescribeSlackChannelConfigurations$,
  DescribeSlackChannelConfigurationsCommand,
  DescribeSlackChannelConfigurationsException,
  DescribeSlackChannelConfigurationsException$,
  DescribeSlackChannelConfigurationsRequest$,
  DescribeSlackChannelConfigurationsResult$,
  DescribeSlackUserIdentities$,
  DescribeSlackUserIdentitiesCommand,
  DescribeSlackUserIdentitiesException,
  DescribeSlackUserIdentitiesException$,
  DescribeSlackUserIdentitiesRequest$,
  DescribeSlackUserIdentitiesResult$,
  DescribeSlackWorkspaces$,
  DescribeSlackWorkspacesCommand,
  DescribeSlackWorkspacesException,
  DescribeSlackWorkspacesException$,
  DescribeSlackWorkspacesRequest$,
  DescribeSlackWorkspacesResult$,
  DisassociateFromConfiguration$,
  DisassociateFromConfigurationCommand,
  DisassociateFromConfigurationRequest$,
  DisassociateFromConfigurationResult$,
  GetAccountPreferences$,
  GetAccountPreferencesCommand,
  GetAccountPreferencesException,
  GetAccountPreferencesException$,
  GetAccountPreferencesRequest$,
  GetAccountPreferencesResult$,
  GetCustomAction$,
  GetCustomActionCommand,
  GetCustomActionRequest$,
  GetCustomActionResult$,
  GetMicrosoftTeamsChannelConfiguration$,
  GetMicrosoftTeamsChannelConfigurationCommand,
  GetTeamsChannelConfigurationException,
  GetTeamsChannelConfigurationException$,
  GetTeamsChannelConfigurationRequest$,
  GetTeamsChannelConfigurationResult$,
  InternalServiceError,
  InternalServiceError$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidRequestException,
  InvalidRequestException$,
  LimitExceededException,
  LimitExceededException$,
  ListAssociations$,
  ListAssociationsCommand,
  ListAssociationsRequest$,
  ListAssociationsResult$,
  ListCustomActions$,
  ListCustomActionsCommand,
  ListCustomActionsRequest$,
  ListCustomActionsResult$,
  ListMicrosoftTeamsChannelConfigurations$,
  ListMicrosoftTeamsChannelConfigurationsCommand,
  ListMicrosoftTeamsConfiguredTeams$,
  ListMicrosoftTeamsConfiguredTeamsCommand,
  ListMicrosoftTeamsConfiguredTeamsException,
  ListMicrosoftTeamsConfiguredTeamsException$,
  ListMicrosoftTeamsConfiguredTeamsRequest$,
  ListMicrosoftTeamsConfiguredTeamsResult$,
  ListMicrosoftTeamsUserIdentities$,
  ListMicrosoftTeamsUserIdentitiesCommand,
  ListMicrosoftTeamsUserIdentitiesException,
  ListMicrosoftTeamsUserIdentitiesException$,
  ListMicrosoftTeamsUserIdentitiesRequest$,
  ListMicrosoftTeamsUserIdentitiesResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTeamsChannelConfigurationsException,
  ListTeamsChannelConfigurationsException$,
  ListTeamsChannelConfigurationsRequest$,
  ListTeamsChannelConfigurationsResult$,
  paginateDescribeChimeWebhookConfigurations,
  paginateDescribeSlackChannelConfigurations,
  paginateDescribeSlackUserIdentities,
  paginateDescribeSlackWorkspaces,
  paginateListAssociations,
  paginateListCustomActions,
  paginateListMicrosoftTeamsChannelConfigurations,
  paginateListMicrosoftTeamsConfiguredTeams,
  paginateListMicrosoftTeamsUserIdentities,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SlackChannelConfiguration$,
  SlackUserIdentity$,
  SlackWorkspace$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TeamsChannelConfiguration$,
  TeamsUserIdentity$,
  TooManyTagsException,
  TooManyTagsException$,
  UnauthorizedException,
  UnauthorizedException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAccountPreferences$,
  UpdateAccountPreferencesCommand,
  UpdateAccountPreferencesException,
  UpdateAccountPreferencesException$,
  UpdateAccountPreferencesRequest$,
  UpdateAccountPreferencesResult$,
  UpdateChimeWebhookConfiguration$,
  UpdateChimeWebhookConfigurationCommand,
  UpdateChimeWebhookConfigurationException,
  UpdateChimeWebhookConfigurationException$,
  UpdateChimeWebhookConfigurationRequest$,
  UpdateChimeWebhookConfigurationResult$,
  UpdateCustomAction$,
  UpdateCustomActionCommand,
  UpdateCustomActionRequest$,
  UpdateCustomActionResult$,
  UpdateMicrosoftTeamsChannelConfiguration$,
  UpdateMicrosoftTeamsChannelConfigurationCommand,
  UpdateSlackChannelConfiguration$,
  UpdateSlackChannelConfigurationCommand,
  UpdateSlackChannelConfigurationException,
  UpdateSlackChannelConfigurationException$,
  UpdateSlackChannelConfigurationRequest$,
  UpdateSlackChannelConfigurationResult$,
  UpdateTeamsChannelConfigurationException,
  UpdateTeamsChannelConfigurationException$,
  UpdateTeamsChannelConfigurationRequest$,
  UpdateTeamsChannelConfigurationResult$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ChatbotClient === "function");
assert(typeof Chatbot === "function");
// commands
assert(typeof AssociateToConfigurationCommand === "function");
assert(typeof AssociateToConfiguration$ === "object");
assert(typeof CreateChimeWebhookConfigurationCommand === "function");
assert(typeof CreateChimeWebhookConfiguration$ === "object");
assert(typeof CreateCustomActionCommand === "function");
assert(typeof CreateCustomAction$ === "object");
assert(typeof CreateMicrosoftTeamsChannelConfigurationCommand === "function");
assert(typeof CreateMicrosoftTeamsChannelConfiguration$ === "object");
assert(typeof CreateSlackChannelConfigurationCommand === "function");
assert(typeof CreateSlackChannelConfiguration$ === "object");
assert(typeof DeleteChimeWebhookConfigurationCommand === "function");
assert(typeof DeleteChimeWebhookConfiguration$ === "object");
assert(typeof DeleteCustomActionCommand === "function");
assert(typeof DeleteCustomAction$ === "object");
assert(typeof DeleteMicrosoftTeamsChannelConfigurationCommand === "function");
assert(typeof DeleteMicrosoftTeamsChannelConfiguration$ === "object");
assert(typeof DeleteMicrosoftTeamsConfiguredTeamCommand === "function");
assert(typeof DeleteMicrosoftTeamsConfiguredTeam$ === "object");
assert(typeof DeleteMicrosoftTeamsUserIdentityCommand === "function");
assert(typeof DeleteMicrosoftTeamsUserIdentity$ === "object");
assert(typeof DeleteSlackChannelConfigurationCommand === "function");
assert(typeof DeleteSlackChannelConfiguration$ === "object");
assert(typeof DeleteSlackUserIdentityCommand === "function");
assert(typeof DeleteSlackUserIdentity$ === "object");
assert(typeof DeleteSlackWorkspaceAuthorizationCommand === "function");
assert(typeof DeleteSlackWorkspaceAuthorization$ === "object");
assert(typeof DescribeChimeWebhookConfigurationsCommand === "function");
assert(typeof DescribeChimeWebhookConfigurations$ === "object");
assert(typeof DescribeSlackChannelConfigurationsCommand === "function");
assert(typeof DescribeSlackChannelConfigurations$ === "object");
assert(typeof DescribeSlackUserIdentitiesCommand === "function");
assert(typeof DescribeSlackUserIdentities$ === "object");
assert(typeof DescribeSlackWorkspacesCommand === "function");
assert(typeof DescribeSlackWorkspaces$ === "object");
assert(typeof DisassociateFromConfigurationCommand === "function");
assert(typeof DisassociateFromConfiguration$ === "object");
assert(typeof GetAccountPreferencesCommand === "function");
assert(typeof GetAccountPreferences$ === "object");
assert(typeof GetCustomActionCommand === "function");
assert(typeof GetCustomAction$ === "object");
assert(typeof GetMicrosoftTeamsChannelConfigurationCommand === "function");
assert(typeof GetMicrosoftTeamsChannelConfiguration$ === "object");
assert(typeof ListAssociationsCommand === "function");
assert(typeof ListAssociations$ === "object");
assert(typeof ListCustomActionsCommand === "function");
assert(typeof ListCustomActions$ === "object");
assert(typeof ListMicrosoftTeamsChannelConfigurationsCommand === "function");
assert(typeof ListMicrosoftTeamsChannelConfigurations$ === "object");
assert(typeof ListMicrosoftTeamsConfiguredTeamsCommand === "function");
assert(typeof ListMicrosoftTeamsConfiguredTeams$ === "object");
assert(typeof ListMicrosoftTeamsUserIdentitiesCommand === "function");
assert(typeof ListMicrosoftTeamsUserIdentities$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAccountPreferencesCommand === "function");
assert(typeof UpdateAccountPreferences$ === "object");
assert(typeof UpdateChimeWebhookConfigurationCommand === "function");
assert(typeof UpdateChimeWebhookConfiguration$ === "object");
assert(typeof UpdateCustomActionCommand === "function");
assert(typeof UpdateCustomAction$ === "object");
assert(typeof UpdateMicrosoftTeamsChannelConfigurationCommand === "function");
assert(typeof UpdateMicrosoftTeamsChannelConfiguration$ === "object");
assert(typeof UpdateSlackChannelConfigurationCommand === "function");
assert(typeof UpdateSlackChannelConfiguration$ === "object");
// structural schemas
assert(typeof AccountPreferences$ === "object");
assert(typeof AssociateToConfigurationRequest$ === "object");
assert(typeof AssociateToConfigurationResult$ === "object");
assert(typeof AssociationListing$ === "object");
assert(typeof ChimeWebhookConfiguration$ === "object");
assert(typeof ConfiguredTeam$ === "object");
assert(typeof CreateChimeWebhookConfigurationRequest$ === "object");
assert(typeof CreateChimeWebhookConfigurationResult$ === "object");
assert(typeof CreateCustomActionRequest$ === "object");
assert(typeof CreateCustomActionResult$ === "object");
assert(typeof CreateSlackChannelConfigurationRequest$ === "object");
assert(typeof CreateSlackChannelConfigurationResult$ === "object");
assert(typeof CreateTeamsChannelConfigurationRequest$ === "object");
assert(typeof CreateTeamsChannelConfigurationResult$ === "object");
assert(typeof CustomAction$ === "object");
assert(typeof CustomActionAttachment$ === "object");
assert(typeof CustomActionAttachmentCriteria$ === "object");
assert(typeof CustomActionDefinition$ === "object");
assert(typeof DeleteChimeWebhookConfigurationRequest$ === "object");
assert(typeof DeleteChimeWebhookConfigurationResult$ === "object");
assert(typeof DeleteCustomActionRequest$ === "object");
assert(typeof DeleteCustomActionResult$ === "object");
assert(typeof DeleteMicrosoftTeamsUserIdentityRequest$ === "object");
assert(typeof DeleteMicrosoftTeamsUserIdentityResult$ === "object");
assert(typeof DeleteSlackChannelConfigurationRequest$ === "object");
assert(typeof DeleteSlackChannelConfigurationResult$ === "object");
assert(typeof DeleteSlackUserIdentityRequest$ === "object");
assert(typeof DeleteSlackUserIdentityResult$ === "object");
assert(typeof DeleteSlackWorkspaceAuthorizationRequest$ === "object");
assert(typeof DeleteSlackWorkspaceAuthorizationResult$ === "object");
assert(typeof DeleteTeamsChannelConfigurationRequest$ === "object");
assert(typeof DeleteTeamsChannelConfigurationResult$ === "object");
assert(typeof DeleteTeamsConfiguredTeamRequest$ === "object");
assert(typeof DeleteTeamsConfiguredTeamResult$ === "object");
assert(typeof DescribeChimeWebhookConfigurationsRequest$ === "object");
assert(typeof DescribeChimeWebhookConfigurationsResult$ === "object");
assert(typeof DescribeSlackChannelConfigurationsRequest$ === "object");
assert(typeof DescribeSlackChannelConfigurationsResult$ === "object");
assert(typeof DescribeSlackUserIdentitiesRequest$ === "object");
assert(typeof DescribeSlackUserIdentitiesResult$ === "object");
assert(typeof DescribeSlackWorkspacesRequest$ === "object");
assert(typeof DescribeSlackWorkspacesResult$ === "object");
assert(typeof DisassociateFromConfigurationRequest$ === "object");
assert(typeof DisassociateFromConfigurationResult$ === "object");
assert(typeof GetAccountPreferencesRequest$ === "object");
assert(typeof GetAccountPreferencesResult$ === "object");
assert(typeof GetCustomActionRequest$ === "object");
assert(typeof GetCustomActionResult$ === "object");
assert(typeof GetTeamsChannelConfigurationRequest$ === "object");
assert(typeof GetTeamsChannelConfigurationResult$ === "object");
assert(typeof ListAssociationsRequest$ === "object");
assert(typeof ListAssociationsResult$ === "object");
assert(typeof ListCustomActionsRequest$ === "object");
assert(typeof ListCustomActionsResult$ === "object");
assert(typeof ListMicrosoftTeamsConfiguredTeamsRequest$ === "object");
assert(typeof ListMicrosoftTeamsConfiguredTeamsResult$ === "object");
assert(typeof ListMicrosoftTeamsUserIdentitiesRequest$ === "object");
assert(typeof ListMicrosoftTeamsUserIdentitiesResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTeamsChannelConfigurationsRequest$ === "object");
assert(typeof ListTeamsChannelConfigurationsResult$ === "object");
assert(typeof SlackChannelConfiguration$ === "object");
assert(typeof SlackUserIdentity$ === "object");
assert(typeof SlackWorkspace$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TeamsChannelConfiguration$ === "object");
assert(typeof TeamsUserIdentity$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAccountPreferencesRequest$ === "object");
assert(typeof UpdateAccountPreferencesResult$ === "object");
assert(typeof UpdateChimeWebhookConfigurationRequest$ === "object");
assert(typeof UpdateChimeWebhookConfigurationResult$ === "object");
assert(typeof UpdateCustomActionRequest$ === "object");
assert(typeof UpdateCustomActionResult$ === "object");
assert(typeof UpdateSlackChannelConfigurationRequest$ === "object");
assert(typeof UpdateSlackChannelConfigurationResult$ === "object");
assert(typeof UpdateTeamsChannelConfigurationRequest$ === "object");
assert(typeof UpdateTeamsChannelConfigurationResult$ === "object");
// enums
assert(typeof CustomActionAttachmentCriteriaOperator === "object");
// errors
assert(ConflictException.prototype instanceof ChatbotServiceException);
assert(typeof ConflictException$ === "object");
assert(CreateChimeWebhookConfigurationException.prototype instanceof ChatbotServiceException);
assert(typeof CreateChimeWebhookConfigurationException$ === "object");
assert(CreateSlackChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(typeof CreateSlackChannelConfigurationException$ === "object");
assert(CreateTeamsChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(typeof CreateTeamsChannelConfigurationException$ === "object");
assert(DeleteChimeWebhookConfigurationException.prototype instanceof ChatbotServiceException);
assert(typeof DeleteChimeWebhookConfigurationException$ === "object");
assert(DeleteMicrosoftTeamsUserIdentityException.prototype instanceof ChatbotServiceException);
assert(typeof DeleteMicrosoftTeamsUserIdentityException$ === "object");
assert(DeleteSlackChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(typeof DeleteSlackChannelConfigurationException$ === "object");
assert(DeleteSlackUserIdentityException.prototype instanceof ChatbotServiceException);
assert(typeof DeleteSlackUserIdentityException$ === "object");
assert(DeleteSlackWorkspaceAuthorizationFault.prototype instanceof ChatbotServiceException);
assert(typeof DeleteSlackWorkspaceAuthorizationFault$ === "object");
assert(DeleteTeamsChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(typeof DeleteTeamsChannelConfigurationException$ === "object");
assert(DeleteTeamsConfiguredTeamException.prototype instanceof ChatbotServiceException);
assert(typeof DeleteTeamsConfiguredTeamException$ === "object");
assert(DescribeChimeWebhookConfigurationsException.prototype instanceof ChatbotServiceException);
assert(typeof DescribeChimeWebhookConfigurationsException$ === "object");
assert(DescribeSlackChannelConfigurationsException.prototype instanceof ChatbotServiceException);
assert(typeof DescribeSlackChannelConfigurationsException$ === "object");
assert(DescribeSlackUserIdentitiesException.prototype instanceof ChatbotServiceException);
assert(typeof DescribeSlackUserIdentitiesException$ === "object");
assert(DescribeSlackWorkspacesException.prototype instanceof ChatbotServiceException);
assert(typeof DescribeSlackWorkspacesException$ === "object");
assert(GetAccountPreferencesException.prototype instanceof ChatbotServiceException);
assert(typeof GetAccountPreferencesException$ === "object");
assert(GetTeamsChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(typeof GetTeamsChannelConfigurationException$ === "object");
assert(InternalServiceError.prototype instanceof ChatbotServiceException);
assert(typeof InternalServiceError$ === "object");
assert(InvalidParameterException.prototype instanceof ChatbotServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidRequestException.prototype instanceof ChatbotServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LimitExceededException.prototype instanceof ChatbotServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ListMicrosoftTeamsConfiguredTeamsException.prototype instanceof ChatbotServiceException);
assert(typeof ListMicrosoftTeamsConfiguredTeamsException$ === "object");
assert(ListMicrosoftTeamsUserIdentitiesException.prototype instanceof ChatbotServiceException);
assert(typeof ListMicrosoftTeamsUserIdentitiesException$ === "object");
assert(ListTeamsChannelConfigurationsException.prototype instanceof ChatbotServiceException);
assert(typeof ListTeamsChannelConfigurationsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ChatbotServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof ChatbotServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TooManyTagsException.prototype instanceof ChatbotServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnauthorizedException.prototype instanceof ChatbotServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(UpdateAccountPreferencesException.prototype instanceof ChatbotServiceException);
assert(typeof UpdateAccountPreferencesException$ === "object");
assert(UpdateChimeWebhookConfigurationException.prototype instanceof ChatbotServiceException);
assert(typeof UpdateChimeWebhookConfigurationException$ === "object");
assert(UpdateSlackChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(typeof UpdateSlackChannelConfigurationException$ === "object");
assert(UpdateTeamsChannelConfigurationException.prototype instanceof ChatbotServiceException);
assert(typeof UpdateTeamsChannelConfigurationException$ === "object");
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
