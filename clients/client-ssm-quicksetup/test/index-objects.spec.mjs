import {
  CreateConfigurationManagerCommand,
  DeleteConfigurationManagerCommand,
  GetConfigurationCommand,
  GetConfigurationManagerCommand,
  GetServiceSettingsCommand,
  ListConfigurationManagersCommand,
  ListConfigurationsCommand,
  ListQuickSetupTypesCommand,
  ListTagsForResourceCommand,
  SSMQuickSetup,
  SSMQuickSetupClient,
  SSMQuickSetupServiceException,
  Status,
  StatusType,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConfigurationDefinitionCommand,
  UpdateConfigurationManagerCommand,
  UpdateServiceSettingsCommand,
  paginateListConfigurationManagers,
  paginateListConfigurations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSMQuickSetupClient === "function")
assert(typeof SSMQuickSetup === "function")
// commands
assert(typeof CreateConfigurationManagerCommand === "function")
assert(typeof DeleteConfigurationManagerCommand === "function")
assert(typeof GetConfigurationCommand === "function")
assert(typeof GetConfigurationManagerCommand === "function")
assert(typeof GetServiceSettingsCommand === "function")
assert(typeof ListConfigurationManagersCommand === "function")
assert(typeof ListConfigurationsCommand === "function")
assert(typeof ListQuickSetupTypesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateConfigurationDefinitionCommand === "function")
assert(typeof UpdateConfigurationManagerCommand === "function")
assert(typeof UpdateServiceSettingsCommand === "function")
// enums
assert(typeof Status === "object");
assert(typeof StatusType === "object");
// errors
assert(SSMQuickSetupServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListConfigurationManagers === "function")
assert(typeof paginateListConfigurations === "function")
console.log(`SSMQuickSetup index test passed.`);
