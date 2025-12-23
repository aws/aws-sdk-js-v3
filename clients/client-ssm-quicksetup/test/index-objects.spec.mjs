import {
  AccessDeniedException,
  AccessDeniedException$,
  ConfigurationDefinition$,
  ConfigurationDefinitionInput$,
  ConfigurationDefinitionSummary$,
  ConfigurationManagerSummary$,
  ConfigurationSummary$,
  ConflictException,
  ConflictException$,
  CreateConfigurationManager$,
  CreateConfigurationManagerCommand,
  CreateConfigurationManagerInput$,
  CreateConfigurationManagerOutput$,
  DeleteConfigurationManager$,
  DeleteConfigurationManagerCommand,
  DeleteConfigurationManagerInput$,
  Filter$,
  GetConfiguration$,
  GetConfigurationCommand,
  GetConfigurationInput$,
  GetConfigurationManager$,
  GetConfigurationManagerCommand,
  GetConfigurationManagerInput$,
  GetConfigurationManagerOutput$,
  GetConfigurationOutput$,
  GetServiceSettings$,
  GetServiceSettingsCommand,
  GetServiceSettingsOutput$,
  InternalServerException,
  InternalServerException$,
  ListConfigurationManagers$,
  ListConfigurationManagersCommand,
  ListConfigurationManagersInput$,
  ListConfigurationManagersOutput$,
  ListConfigurations$,
  ListConfigurationsCommand,
  ListConfigurationsInput$,
  ListConfigurationsOutput$,
  ListQuickSetupTypes$,
  ListQuickSetupTypesCommand,
  ListQuickSetupTypesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  paginateListConfigurationManagers,
  paginateListConfigurations,
  QuickSetupTypeOutput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceSettings$,
  SSMQuickSetup,
  SSMQuickSetupClient,
  SSMQuickSetupServiceException,
  Status,
  StatusSummary$,
  StatusType,
  TagEntry$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UpdateConfigurationDefinition$,
  UpdateConfigurationDefinitionCommand,
  UpdateConfigurationDefinitionInput$,
  UpdateConfigurationManager$,
  UpdateConfigurationManagerCommand,
  UpdateConfigurationManagerInput$,
  UpdateServiceSettings$,
  UpdateServiceSettingsCommand,
  UpdateServiceSettingsInput$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSMQuickSetupClient === "function");
assert(typeof SSMQuickSetup === "function");
// commands
assert(typeof CreateConfigurationManagerCommand === "function");
assert(typeof CreateConfigurationManager$ === "object");
assert(typeof DeleteConfigurationManagerCommand === "function");
assert(typeof DeleteConfigurationManager$ === "object");
assert(typeof GetConfigurationCommand === "function");
assert(typeof GetConfiguration$ === "object");
assert(typeof GetConfigurationManagerCommand === "function");
assert(typeof GetConfigurationManager$ === "object");
assert(typeof GetServiceSettingsCommand === "function");
assert(typeof GetServiceSettings$ === "object");
assert(typeof ListConfigurationManagersCommand === "function");
assert(typeof ListConfigurationManagers$ === "object");
assert(typeof ListConfigurationsCommand === "function");
assert(typeof ListConfigurations$ === "object");
assert(typeof ListQuickSetupTypesCommand === "function");
assert(typeof ListQuickSetupTypes$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateConfigurationDefinitionCommand === "function");
assert(typeof UpdateConfigurationDefinition$ === "object");
assert(typeof UpdateConfigurationManagerCommand === "function");
assert(typeof UpdateConfigurationManager$ === "object");
assert(typeof UpdateServiceSettingsCommand === "function");
assert(typeof UpdateServiceSettings$ === "object");
// structural schemas
assert(typeof ConfigurationDefinition$ === "object");
assert(typeof ConfigurationDefinitionInput$ === "object");
assert(typeof ConfigurationDefinitionSummary$ === "object");
assert(typeof ConfigurationManagerSummary$ === "object");
assert(typeof ConfigurationSummary$ === "object");
assert(typeof CreateConfigurationManagerInput$ === "object");
assert(typeof CreateConfigurationManagerOutput$ === "object");
assert(typeof DeleteConfigurationManagerInput$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetConfigurationInput$ === "object");
assert(typeof GetConfigurationManagerInput$ === "object");
assert(typeof GetConfigurationManagerOutput$ === "object");
assert(typeof GetConfigurationOutput$ === "object");
assert(typeof GetServiceSettingsOutput$ === "object");
assert(typeof ListConfigurationManagersInput$ === "object");
assert(typeof ListConfigurationManagersOutput$ === "object");
assert(typeof ListConfigurationsInput$ === "object");
assert(typeof ListConfigurationsOutput$ === "object");
assert(typeof ListQuickSetupTypesOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof QuickSetupTypeOutput$ === "object");
assert(typeof ServiceSettings$ === "object");
assert(typeof StatusSummary$ === "object");
assert(typeof TagEntry$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UpdateConfigurationDefinitionInput$ === "object");
assert(typeof UpdateConfigurationManagerInput$ === "object");
assert(typeof UpdateServiceSettingsInput$ === "object");
// enums
assert(typeof Status === "object");
assert(typeof StatusType === "object");
// errors
assert(AccessDeniedException.prototype instanceof SSMQuickSetupServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SSMQuickSetupServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SSMQuickSetupServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SSMQuickSetupServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof SSMQuickSetupServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SSMQuickSetupServiceException);
assert(typeof ValidationException$ === "object");
assert(SSMQuickSetupServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListConfigurationManagers === "function");
assert(typeof paginateListConfigurations === "function");
console.log(`SSMQuickSetup index test passed.`);
