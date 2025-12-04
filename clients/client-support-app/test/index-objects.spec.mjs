import {
  AccountType,
  CreateSlackChannelConfigurationCommand,
  DeleteAccountAliasCommand,
  DeleteSlackChannelConfigurationCommand,
  DeleteSlackWorkspaceConfigurationCommand,
  GetAccountAliasCommand,
  ListSlackChannelConfigurationsCommand,
  ListSlackWorkspaceConfigurationsCommand,
  NotificationSeverityLevel,
  PutAccountAliasCommand,
  RegisterSlackWorkspaceForOrganizationCommand,
  SupportApp,
  SupportAppClient,
  SupportAppServiceException,
  UpdateSlackChannelConfigurationCommand,
  paginateListSlackChannelConfigurations,
  paginateListSlackWorkspaceConfigurations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SupportAppClient === "function")
assert(typeof SupportApp === "function")
// commands
assert(typeof CreateSlackChannelConfigurationCommand === "function")
assert(typeof DeleteAccountAliasCommand === "function")
assert(typeof DeleteSlackChannelConfigurationCommand === "function")
assert(typeof DeleteSlackWorkspaceConfigurationCommand === "function")
assert(typeof GetAccountAliasCommand === "function")
assert(typeof ListSlackChannelConfigurationsCommand === "function")
assert(typeof ListSlackWorkspaceConfigurationsCommand === "function")
assert(typeof PutAccountAliasCommand === "function")
assert(typeof RegisterSlackWorkspaceForOrganizationCommand === "function")
assert(typeof UpdateSlackChannelConfigurationCommand === "function")
// enums
assert(typeof AccountType === "object");
assert(typeof NotificationSeverityLevel === "object");
// errors
assert(SupportAppServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListSlackChannelConfigurations === "function")
assert(typeof paginateListSlackWorkspaceConfigurations === "function")
console.log(`SupportApp index test passed.`);
