import {
  ChannelStatus,
  ChannelType,
  ContentType,
  CreateBotVersionCommand,
  CreateIntentVersionCommand,
  CreateSlotTypeVersionCommand,
  DeleteBotAliasCommand,
  DeleteBotChannelAssociationCommand,
  DeleteBotCommand,
  DeleteBotVersionCommand,
  DeleteIntentCommand,
  DeleteIntentVersionCommand,
  DeleteSlotTypeCommand,
  DeleteSlotTypeVersionCommand,
  DeleteUtterancesCommand,
  Destination,
  ExportStatus,
  ExportType,
  FulfillmentActivityType,
  GetBotAliasCommand,
  GetBotAliasesCommand,
  GetBotChannelAssociationCommand,
  GetBotChannelAssociationsCommand,
  GetBotCommand,
  GetBotVersionsCommand,
  GetBotsCommand,
  GetBuiltinIntentCommand,
  GetBuiltinIntentsCommand,
  GetBuiltinSlotTypesCommand,
  GetExportCommand,
  GetImportCommand,
  GetIntentCommand,
  GetIntentVersionsCommand,
  GetIntentsCommand,
  GetMigrationCommand,
  GetMigrationsCommand,
  GetSlotTypeCommand,
  GetSlotTypeVersionsCommand,
  GetSlotTypesCommand,
  GetUtterancesViewCommand,
  ImportStatus,
  LexModelBuildingService,
  LexModelBuildingServiceClient,
  LexModelBuildingServiceServiceException,
  ListTagsForResourceCommand,
  Locale,
  LogType,
  MergeStrategy,
  MigrationAlertType,
  MigrationSortAttribute,
  MigrationStatus,
  MigrationStrategy,
  ObfuscationSetting,
  ProcessBehavior,
  PutBotAliasCommand,
  PutBotCommand,
  PutIntentCommand,
  PutSlotTypeCommand,
  ResourceType,
  SlotConstraint,
  SlotValueSelectionStrategy,
  SortOrder,
  StartImportCommand,
  StartMigrationCommand,
  Status,
  StatusType,
  TagResourceCommand,
  UntagResourceCommand,
  paginateGetBotAliases,
  paginateGetBotChannelAssociations,
  paginateGetBotVersions,
  paginateGetBots,
  paginateGetBuiltinIntents,
  paginateGetBuiltinSlotTypes,
  paginateGetIntentVersions,
  paginateGetIntents,
  paginateGetMigrations,
  paginateGetSlotTypeVersions,
  paginateGetSlotTypes,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LexModelBuildingServiceClient === "function")
assert(typeof LexModelBuildingService === "function")
// commands
assert(typeof CreateBotVersionCommand === "function")
assert(typeof CreateIntentVersionCommand === "function")
assert(typeof CreateSlotTypeVersionCommand === "function")
assert(typeof DeleteBotCommand === "function")
assert(typeof DeleteBotAliasCommand === "function")
assert(typeof DeleteBotChannelAssociationCommand === "function")
assert(typeof DeleteBotVersionCommand === "function")
assert(typeof DeleteIntentCommand === "function")
assert(typeof DeleteIntentVersionCommand === "function")
assert(typeof DeleteSlotTypeCommand === "function")
assert(typeof DeleteSlotTypeVersionCommand === "function")
assert(typeof DeleteUtterancesCommand === "function")
assert(typeof GetBotCommand === "function")
assert(typeof GetBotAliasCommand === "function")
assert(typeof GetBotAliasesCommand === "function")
assert(typeof GetBotChannelAssociationCommand === "function")
assert(typeof GetBotChannelAssociationsCommand === "function")
assert(typeof GetBotsCommand === "function")
assert(typeof GetBotVersionsCommand === "function")
assert(typeof GetBuiltinIntentCommand === "function")
assert(typeof GetBuiltinIntentsCommand === "function")
assert(typeof GetBuiltinSlotTypesCommand === "function")
assert(typeof GetExportCommand === "function")
assert(typeof GetImportCommand === "function")
assert(typeof GetIntentCommand === "function")
assert(typeof GetIntentsCommand === "function")
assert(typeof GetIntentVersionsCommand === "function")
assert(typeof GetMigrationCommand === "function")
assert(typeof GetMigrationsCommand === "function")
assert(typeof GetSlotTypeCommand === "function")
assert(typeof GetSlotTypesCommand === "function")
assert(typeof GetSlotTypeVersionsCommand === "function")
assert(typeof GetUtterancesViewCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutBotCommand === "function")
assert(typeof PutBotAliasCommand === "function")
assert(typeof PutIntentCommand === "function")
assert(typeof PutSlotTypeCommand === "function")
assert(typeof StartImportCommand === "function")
assert(typeof StartMigrationCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
// enums
assert(typeof ChannelStatus === "object");
assert(typeof ChannelType === "object");
assert(typeof ContentType === "object");
assert(typeof Destination === "object");
assert(typeof ExportStatus === "object");
assert(typeof ExportType === "object");
assert(typeof FulfillmentActivityType === "object");
assert(typeof ImportStatus === "object");
assert(typeof Locale === "object");
assert(typeof LogType === "object");
assert(typeof MergeStrategy === "object");
assert(typeof MigrationAlertType === "object");
assert(typeof MigrationSortAttribute === "object");
assert(typeof MigrationStatus === "object");
assert(typeof MigrationStrategy === "object");
assert(typeof ObfuscationSetting === "object");
assert(typeof ProcessBehavior === "object");
assert(typeof ResourceType === "object");
assert(typeof SlotConstraint === "object");
assert(typeof SlotValueSelectionStrategy === "object");
assert(typeof SortOrder === "object");
assert(typeof Status === "object");
assert(typeof StatusType === "object");
// errors
assert(LexModelBuildingServiceServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetBotAliases === "function")
assert(typeof paginateGetBotChannelAssociations === "function")
assert(typeof paginateGetBotVersions === "function")
assert(typeof paginateGetBots === "function")
assert(typeof paginateGetBuiltinIntents === "function")
assert(typeof paginateGetBuiltinSlotTypes === "function")
assert(typeof paginateGetIntentVersions === "function")
assert(typeof paginateGetIntents === "function")
assert(typeof paginateGetMigrations === "function")
assert(typeof paginateGetSlotTypeVersions === "function")
assert(typeof paginateGetSlotTypes === "function")
console.log(`LexModelBuildingService index test passed.`);
