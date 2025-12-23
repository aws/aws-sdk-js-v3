import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountType,
  ConflictException,
  ConflictException$,
  CreateSlackChannelConfiguration$,
  CreateSlackChannelConfigurationCommand,
  CreateSlackChannelConfigurationRequest$,
  CreateSlackChannelConfigurationResult$,
  DeleteAccountAlias$,
  DeleteAccountAliasCommand,
  DeleteAccountAliasRequest$,
  DeleteAccountAliasResult$,
  DeleteSlackChannelConfiguration$,
  DeleteSlackChannelConfigurationCommand,
  DeleteSlackChannelConfigurationRequest$,
  DeleteSlackChannelConfigurationResult$,
  DeleteSlackWorkspaceConfiguration$,
  DeleteSlackWorkspaceConfigurationCommand,
  DeleteSlackWorkspaceConfigurationRequest$,
  DeleteSlackWorkspaceConfigurationResult$,
  GetAccountAlias$,
  GetAccountAliasCommand,
  GetAccountAliasRequest$,
  GetAccountAliasResult$,
  InternalServerException,
  InternalServerException$,
  ListSlackChannelConfigurations$,
  ListSlackChannelConfigurationsCommand,
  ListSlackChannelConfigurationsRequest$,
  ListSlackChannelConfigurationsResult$,
  ListSlackWorkspaceConfigurations$,
  ListSlackWorkspaceConfigurationsCommand,
  ListSlackWorkspaceConfigurationsRequest$,
  ListSlackWorkspaceConfigurationsResult$,
  NotificationSeverityLevel,
  paginateListSlackChannelConfigurations,
  paginateListSlackWorkspaceConfigurations,
  PutAccountAlias$,
  PutAccountAliasCommand,
  PutAccountAliasRequest$,
  PutAccountAliasResult$,
  RegisterSlackWorkspaceForOrganization$,
  RegisterSlackWorkspaceForOrganizationCommand,
  RegisterSlackWorkspaceForOrganizationRequest$,
  RegisterSlackWorkspaceForOrganizationResult$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SlackChannelConfiguration$,
  SlackWorkspaceConfiguration$,
  SupportApp,
  SupportAppClient,
  SupportAppServiceException,
  UpdateSlackChannelConfiguration$,
  UpdateSlackChannelConfigurationCommand,
  UpdateSlackChannelConfigurationRequest$,
  UpdateSlackChannelConfigurationResult$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SupportAppClient === "function");
assert(typeof SupportApp === "function");
// commands
assert(typeof CreateSlackChannelConfigurationCommand === "function");
assert(typeof CreateSlackChannelConfiguration$ === "object");
assert(typeof DeleteAccountAliasCommand === "function");
assert(typeof DeleteAccountAlias$ === "object");
assert(typeof DeleteSlackChannelConfigurationCommand === "function");
assert(typeof DeleteSlackChannelConfiguration$ === "object");
assert(typeof DeleteSlackWorkspaceConfigurationCommand === "function");
assert(typeof DeleteSlackWorkspaceConfiguration$ === "object");
assert(typeof GetAccountAliasCommand === "function");
assert(typeof GetAccountAlias$ === "object");
assert(typeof ListSlackChannelConfigurationsCommand === "function");
assert(typeof ListSlackChannelConfigurations$ === "object");
assert(typeof ListSlackWorkspaceConfigurationsCommand === "function");
assert(typeof ListSlackWorkspaceConfigurations$ === "object");
assert(typeof PutAccountAliasCommand === "function");
assert(typeof PutAccountAlias$ === "object");
assert(typeof RegisterSlackWorkspaceForOrganizationCommand === "function");
assert(typeof RegisterSlackWorkspaceForOrganization$ === "object");
assert(typeof UpdateSlackChannelConfigurationCommand === "function");
assert(typeof UpdateSlackChannelConfiguration$ === "object");
// structural schemas
assert(typeof CreateSlackChannelConfigurationRequest$ === "object");
assert(typeof CreateSlackChannelConfigurationResult$ === "object");
assert(typeof DeleteAccountAliasRequest$ === "object");
assert(typeof DeleteAccountAliasResult$ === "object");
assert(typeof DeleteSlackChannelConfigurationRequest$ === "object");
assert(typeof DeleteSlackChannelConfigurationResult$ === "object");
assert(typeof DeleteSlackWorkspaceConfigurationRequest$ === "object");
assert(typeof DeleteSlackWorkspaceConfigurationResult$ === "object");
assert(typeof GetAccountAliasRequest$ === "object");
assert(typeof GetAccountAliasResult$ === "object");
assert(typeof ListSlackChannelConfigurationsRequest$ === "object");
assert(typeof ListSlackChannelConfigurationsResult$ === "object");
assert(typeof ListSlackWorkspaceConfigurationsRequest$ === "object");
assert(typeof ListSlackWorkspaceConfigurationsResult$ === "object");
assert(typeof PutAccountAliasRequest$ === "object");
assert(typeof PutAccountAliasResult$ === "object");
assert(typeof RegisterSlackWorkspaceForOrganizationRequest$ === "object");
assert(typeof RegisterSlackWorkspaceForOrganizationResult$ === "object");
assert(typeof SlackChannelConfiguration$ === "object");
assert(typeof SlackWorkspaceConfiguration$ === "object");
assert(typeof UpdateSlackChannelConfigurationRequest$ === "object");
assert(typeof UpdateSlackChannelConfigurationResult$ === "object");
// enums
assert(typeof AccountType === "object");
assert(typeof NotificationSeverityLevel === "object");
// errors
assert(AccessDeniedException.prototype instanceof SupportAppServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SupportAppServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SupportAppServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SupportAppServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SupportAppServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof SupportAppServiceException);
assert(typeof ValidationException$ === "object");
assert(SupportAppServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSlackChannelConfigurations === "function");
assert(typeof paginateListSlackWorkspaceConfigurations === "function");
console.log(`SupportApp index test passed.`);
