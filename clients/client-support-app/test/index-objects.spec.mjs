import {
  AccessDeniedException,
  AccountType,
  ConflictException,
  CreateSlackChannelConfigurationCommand,
  DeleteAccountAliasCommand,
  DeleteSlackChannelConfigurationCommand,
  DeleteSlackWorkspaceConfigurationCommand,
  GetAccountAliasCommand,
  InternalServerException,
  ListSlackChannelConfigurationsCommand,
  ListSlackWorkspaceConfigurationsCommand,
  NotificationSeverityLevel,
  PutAccountAliasCommand,
  RegisterSlackWorkspaceForOrganizationCommand,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SupportApp,
  SupportAppClient,
  SupportAppServiceException,
  UpdateSlackChannelConfigurationCommand,
  ValidationException,
  paginateListSlackChannelConfigurations,
  paginateListSlackWorkspaceConfigurations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SupportAppClient === "function");
assert(typeof SupportApp === "function");
// commands
assert(typeof CreateSlackChannelConfigurationCommand === "function");
assert(typeof DeleteAccountAliasCommand === "function");
assert(typeof DeleteSlackChannelConfigurationCommand === "function");
assert(typeof DeleteSlackWorkspaceConfigurationCommand === "function");
assert(typeof GetAccountAliasCommand === "function");
assert(typeof ListSlackChannelConfigurationsCommand === "function");
assert(typeof ListSlackWorkspaceConfigurationsCommand === "function");
assert(typeof PutAccountAliasCommand === "function");
assert(typeof RegisterSlackWorkspaceForOrganizationCommand === "function");
assert(typeof UpdateSlackChannelConfigurationCommand === "function");
// enums
assert(typeof AccountType === "object");
assert(typeof NotificationSeverityLevel === "object");
// errors
assert(AccessDeniedException.prototype instanceof SupportAppServiceException);
assert(ConflictException.prototype instanceof SupportAppServiceException);
assert(InternalServerException.prototype instanceof SupportAppServiceException);
assert(ResourceNotFoundException.prototype instanceof SupportAppServiceException);
assert(ServiceQuotaExceededException.prototype instanceof SupportAppServiceException);
assert(ValidationException.prototype instanceof SupportAppServiceException);
assert(SupportAppServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListSlackChannelConfigurations === "function");
assert(typeof paginateListSlackWorkspaceConfigurations === "function");
console.log(`SupportApp index test passed.`);
