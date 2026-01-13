import {
  AccessDeniedException,
  AccessDeniedException$,
  BadRequestException,
  BadRequestException$,
  BotAliasMetadata$,
  BotChannelAssociation$,
  BotMetadata$,
  BuiltinIntentMetadata$,
  BuiltinIntentSlot$,
  BuiltinSlotTypeMetadata$,
  ChannelStatus,
  ChannelType,
  CodeHook$,
  ConflictException,
  ConflictException$,
  ContentType,
  ConversationLogsRequest$,
  ConversationLogsResponse$,
  CreateBotVersion$,
  CreateBotVersionCommand,
  CreateBotVersionRequest$,
  CreateBotVersionResponse$,
  CreateIntentVersion$,
  CreateIntentVersionCommand,
  CreateIntentVersionRequest$,
  CreateIntentVersionResponse$,
  CreateSlotTypeVersion$,
  CreateSlotTypeVersionCommand,
  CreateSlotTypeVersionRequest$,
  CreateSlotTypeVersionResponse$,
  DeleteBot$,
  DeleteBotAlias$,
  DeleteBotAliasCommand,
  DeleteBotAliasRequest$,
  DeleteBotChannelAssociation$,
  DeleteBotChannelAssociationCommand,
  DeleteBotChannelAssociationRequest$,
  DeleteBotCommand,
  DeleteBotRequest$,
  DeleteBotVersion$,
  DeleteBotVersionCommand,
  DeleteBotVersionRequest$,
  DeleteIntent$,
  DeleteIntentCommand,
  DeleteIntentRequest$,
  DeleteIntentVersion$,
  DeleteIntentVersionCommand,
  DeleteIntentVersionRequest$,
  DeleteSlotType$,
  DeleteSlotTypeCommand,
  DeleteSlotTypeRequest$,
  DeleteSlotTypeVersion$,
  DeleteSlotTypeVersionCommand,
  DeleteSlotTypeVersionRequest$,
  DeleteUtterances$,
  DeleteUtterancesCommand,
  DeleteUtterancesRequest$,
  Destination,
  EnumerationValue$,
  ExportStatus,
  ExportType,
  FollowUpPrompt$,
  FulfillmentActivity$,
  FulfillmentActivityType,
  GetBot$,
  GetBotAlias$,
  GetBotAliasCommand,
  GetBotAliases$,
  GetBotAliasesCommand,
  GetBotAliasesRequest$,
  GetBotAliasesResponse$,
  GetBotAliasRequest$,
  GetBotAliasResponse$,
  GetBotChannelAssociation$,
  GetBotChannelAssociationCommand,
  GetBotChannelAssociationRequest$,
  GetBotChannelAssociationResponse$,
  GetBotChannelAssociations$,
  GetBotChannelAssociationsCommand,
  GetBotChannelAssociationsRequest$,
  GetBotChannelAssociationsResponse$,
  GetBotCommand,
  GetBotRequest$,
  GetBotResponse$,
  GetBots$,
  GetBotsCommand,
  GetBotsRequest$,
  GetBotsResponse$,
  GetBotVersions$,
  GetBotVersionsCommand,
  GetBotVersionsRequest$,
  GetBotVersionsResponse$,
  GetBuiltinIntent$,
  GetBuiltinIntentCommand,
  GetBuiltinIntentRequest$,
  GetBuiltinIntentResponse$,
  GetBuiltinIntents$,
  GetBuiltinIntentsCommand,
  GetBuiltinIntentsRequest$,
  GetBuiltinIntentsResponse$,
  GetBuiltinSlotTypes$,
  GetBuiltinSlotTypesCommand,
  GetBuiltinSlotTypesRequest$,
  GetBuiltinSlotTypesResponse$,
  GetExport$,
  GetExportCommand,
  GetExportRequest$,
  GetExportResponse$,
  GetImport$,
  GetImportCommand,
  GetImportRequest$,
  GetImportResponse$,
  GetIntent$,
  GetIntentCommand,
  GetIntentRequest$,
  GetIntentResponse$,
  GetIntents$,
  GetIntentsCommand,
  GetIntentsRequest$,
  GetIntentsResponse$,
  GetIntentVersions$,
  GetIntentVersionsCommand,
  GetIntentVersionsRequest$,
  GetIntentVersionsResponse$,
  GetMigration$,
  GetMigrationCommand,
  GetMigrationRequest$,
  GetMigrationResponse$,
  GetMigrations$,
  GetMigrationsCommand,
  GetMigrationsRequest$,
  GetMigrationsResponse$,
  GetSlotType$,
  GetSlotTypeCommand,
  GetSlotTypeRequest$,
  GetSlotTypeResponse$,
  GetSlotTypes$,
  GetSlotTypesCommand,
  GetSlotTypesRequest$,
  GetSlotTypesResponse$,
  GetSlotTypeVersions$,
  GetSlotTypeVersionsCommand,
  GetSlotTypeVersionsRequest$,
  GetSlotTypeVersionsResponse$,
  GetUtterancesView$,
  GetUtterancesViewCommand,
  GetUtterancesViewRequest$,
  GetUtterancesViewResponse$,
  ImportStatus,
  InputContext$,
  Intent$,
  IntentMetadata$,
  InternalFailureException,
  InternalFailureException$,
  KendraConfiguration$,
  LexModelBuildingService,
  LexModelBuildingServiceClient,
  LexModelBuildingServiceServiceException,
  LimitExceededException,
  LimitExceededException$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Locale,
  LogSettingsRequest$,
  LogSettingsResponse$,
  LogType,
  MergeStrategy,
  Message$,
  MigrationAlert$,
  MigrationAlertType,
  MigrationSortAttribute,
  MigrationStatus,
  MigrationStrategy,
  MigrationSummary$,
  NotFoundException,
  NotFoundException$,
  ObfuscationSetting,
  OutputContext$,
  paginateGetBotAliases,
  paginateGetBotChannelAssociations,
  paginateGetBots,
  paginateGetBotVersions,
  paginateGetBuiltinIntents,
  paginateGetBuiltinSlotTypes,
  paginateGetIntents,
  paginateGetIntentVersions,
  paginateGetMigrations,
  paginateGetSlotTypes,
  paginateGetSlotTypeVersions,
  PreconditionFailedException,
  PreconditionFailedException$,
  ProcessBehavior,
  Prompt$,
  PutBot$,
  PutBotAlias$,
  PutBotAliasCommand,
  PutBotAliasRequest$,
  PutBotAliasResponse$,
  PutBotCommand,
  PutBotRequest$,
  PutBotResponse$,
  PutIntent$,
  PutIntentCommand,
  PutIntentRequest$,
  PutIntentResponse$,
  PutSlotType$,
  PutSlotTypeCommand,
  PutSlotTypeRequest$,
  PutSlotTypeResponse$,
  ReferenceType,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceReference$,
  ResourceType,
  Slot$,
  SlotConstraint,
  SlotDefaultValue$,
  SlotDefaultValueSpec$,
  SlotTypeConfiguration$,
  SlotTypeMetadata$,
  SlotTypeRegexConfiguration$,
  SlotValueSelectionStrategy,
  SortOrder,
  StartImport$,
  StartImportCommand,
  StartImportRequest$,
  StartImportResponse$,
  StartMigration$,
  StartMigrationCommand,
  StartMigrationRequest$,
  StartMigrationResponse$,
  Statement$,
  Status,
  StatusType,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UtteranceData$,
  UtteranceList$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LexModelBuildingServiceClient === "function");
assert(typeof LexModelBuildingService === "function");
// commands
assert(typeof CreateBotVersionCommand === "function");
assert(typeof CreateBotVersion$ === "object");
assert(typeof CreateIntentVersionCommand === "function");
assert(typeof CreateIntentVersion$ === "object");
assert(typeof CreateSlotTypeVersionCommand === "function");
assert(typeof CreateSlotTypeVersion$ === "object");
assert(typeof DeleteBotCommand === "function");
assert(typeof DeleteBot$ === "object");
assert(typeof DeleteBotAliasCommand === "function");
assert(typeof DeleteBotAlias$ === "object");
assert(typeof DeleteBotChannelAssociationCommand === "function");
assert(typeof DeleteBotChannelAssociation$ === "object");
assert(typeof DeleteBotVersionCommand === "function");
assert(typeof DeleteBotVersion$ === "object");
assert(typeof DeleteIntentCommand === "function");
assert(typeof DeleteIntent$ === "object");
assert(typeof DeleteIntentVersionCommand === "function");
assert(typeof DeleteIntentVersion$ === "object");
assert(typeof DeleteSlotTypeCommand === "function");
assert(typeof DeleteSlotType$ === "object");
assert(typeof DeleteSlotTypeVersionCommand === "function");
assert(typeof DeleteSlotTypeVersion$ === "object");
assert(typeof DeleteUtterancesCommand === "function");
assert(typeof DeleteUtterances$ === "object");
assert(typeof GetBotCommand === "function");
assert(typeof GetBot$ === "object");
assert(typeof GetBotAliasCommand === "function");
assert(typeof GetBotAlias$ === "object");
assert(typeof GetBotAliasesCommand === "function");
assert(typeof GetBotAliases$ === "object");
assert(typeof GetBotChannelAssociationCommand === "function");
assert(typeof GetBotChannelAssociation$ === "object");
assert(typeof GetBotChannelAssociationsCommand === "function");
assert(typeof GetBotChannelAssociations$ === "object");
assert(typeof GetBotsCommand === "function");
assert(typeof GetBots$ === "object");
assert(typeof GetBotVersionsCommand === "function");
assert(typeof GetBotVersions$ === "object");
assert(typeof GetBuiltinIntentCommand === "function");
assert(typeof GetBuiltinIntent$ === "object");
assert(typeof GetBuiltinIntentsCommand === "function");
assert(typeof GetBuiltinIntents$ === "object");
assert(typeof GetBuiltinSlotTypesCommand === "function");
assert(typeof GetBuiltinSlotTypes$ === "object");
assert(typeof GetExportCommand === "function");
assert(typeof GetExport$ === "object");
assert(typeof GetImportCommand === "function");
assert(typeof GetImport$ === "object");
assert(typeof GetIntentCommand === "function");
assert(typeof GetIntent$ === "object");
assert(typeof GetIntentsCommand === "function");
assert(typeof GetIntents$ === "object");
assert(typeof GetIntentVersionsCommand === "function");
assert(typeof GetIntentVersions$ === "object");
assert(typeof GetMigrationCommand === "function");
assert(typeof GetMigration$ === "object");
assert(typeof GetMigrationsCommand === "function");
assert(typeof GetMigrations$ === "object");
assert(typeof GetSlotTypeCommand === "function");
assert(typeof GetSlotType$ === "object");
assert(typeof GetSlotTypesCommand === "function");
assert(typeof GetSlotTypes$ === "object");
assert(typeof GetSlotTypeVersionsCommand === "function");
assert(typeof GetSlotTypeVersions$ === "object");
assert(typeof GetUtterancesViewCommand === "function");
assert(typeof GetUtterancesView$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutBotCommand === "function");
assert(typeof PutBot$ === "object");
assert(typeof PutBotAliasCommand === "function");
assert(typeof PutBotAlias$ === "object");
assert(typeof PutIntentCommand === "function");
assert(typeof PutIntent$ === "object");
assert(typeof PutSlotTypeCommand === "function");
assert(typeof PutSlotType$ === "object");
assert(typeof StartImportCommand === "function");
assert(typeof StartImport$ === "object");
assert(typeof StartMigrationCommand === "function");
assert(typeof StartMigration$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof BotAliasMetadata$ === "object");
assert(typeof BotChannelAssociation$ === "object");
assert(typeof BotMetadata$ === "object");
assert(typeof BuiltinIntentMetadata$ === "object");
assert(typeof BuiltinIntentSlot$ === "object");
assert(typeof BuiltinSlotTypeMetadata$ === "object");
assert(typeof CodeHook$ === "object");
assert(typeof ConversationLogsRequest$ === "object");
assert(typeof ConversationLogsResponse$ === "object");
assert(typeof CreateBotVersionRequest$ === "object");
assert(typeof CreateBotVersionResponse$ === "object");
assert(typeof CreateIntentVersionRequest$ === "object");
assert(typeof CreateIntentVersionResponse$ === "object");
assert(typeof CreateSlotTypeVersionRequest$ === "object");
assert(typeof CreateSlotTypeVersionResponse$ === "object");
assert(typeof DeleteBotAliasRequest$ === "object");
assert(typeof DeleteBotChannelAssociationRequest$ === "object");
assert(typeof DeleteBotRequest$ === "object");
assert(typeof DeleteBotVersionRequest$ === "object");
assert(typeof DeleteIntentRequest$ === "object");
assert(typeof DeleteIntentVersionRequest$ === "object");
assert(typeof DeleteSlotTypeRequest$ === "object");
assert(typeof DeleteSlotTypeVersionRequest$ === "object");
assert(typeof DeleteUtterancesRequest$ === "object");
assert(typeof EnumerationValue$ === "object");
assert(typeof FollowUpPrompt$ === "object");
assert(typeof FulfillmentActivity$ === "object");
assert(typeof GetBotAliasesRequest$ === "object");
assert(typeof GetBotAliasesResponse$ === "object");
assert(typeof GetBotAliasRequest$ === "object");
assert(typeof GetBotAliasResponse$ === "object");
assert(typeof GetBotChannelAssociationRequest$ === "object");
assert(typeof GetBotChannelAssociationResponse$ === "object");
assert(typeof GetBotChannelAssociationsRequest$ === "object");
assert(typeof GetBotChannelAssociationsResponse$ === "object");
assert(typeof GetBotRequest$ === "object");
assert(typeof GetBotResponse$ === "object");
assert(typeof GetBotsRequest$ === "object");
assert(typeof GetBotsResponse$ === "object");
assert(typeof GetBotVersionsRequest$ === "object");
assert(typeof GetBotVersionsResponse$ === "object");
assert(typeof GetBuiltinIntentRequest$ === "object");
assert(typeof GetBuiltinIntentResponse$ === "object");
assert(typeof GetBuiltinIntentsRequest$ === "object");
assert(typeof GetBuiltinIntentsResponse$ === "object");
assert(typeof GetBuiltinSlotTypesRequest$ === "object");
assert(typeof GetBuiltinSlotTypesResponse$ === "object");
assert(typeof GetExportRequest$ === "object");
assert(typeof GetExportResponse$ === "object");
assert(typeof GetImportRequest$ === "object");
assert(typeof GetImportResponse$ === "object");
assert(typeof GetIntentRequest$ === "object");
assert(typeof GetIntentResponse$ === "object");
assert(typeof GetIntentsRequest$ === "object");
assert(typeof GetIntentsResponse$ === "object");
assert(typeof GetIntentVersionsRequest$ === "object");
assert(typeof GetIntentVersionsResponse$ === "object");
assert(typeof GetMigrationRequest$ === "object");
assert(typeof GetMigrationResponse$ === "object");
assert(typeof GetMigrationsRequest$ === "object");
assert(typeof GetMigrationsResponse$ === "object");
assert(typeof GetSlotTypeRequest$ === "object");
assert(typeof GetSlotTypeResponse$ === "object");
assert(typeof GetSlotTypesRequest$ === "object");
assert(typeof GetSlotTypesResponse$ === "object");
assert(typeof GetSlotTypeVersionsRequest$ === "object");
assert(typeof GetSlotTypeVersionsResponse$ === "object");
assert(typeof GetUtterancesViewRequest$ === "object");
assert(typeof GetUtterancesViewResponse$ === "object");
assert(typeof InputContext$ === "object");
assert(typeof Intent$ === "object");
assert(typeof IntentMetadata$ === "object");
assert(typeof KendraConfiguration$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LogSettingsRequest$ === "object");
assert(typeof LogSettingsResponse$ === "object");
assert(typeof Message$ === "object");
assert(typeof MigrationAlert$ === "object");
assert(typeof MigrationSummary$ === "object");
assert(typeof OutputContext$ === "object");
assert(typeof Prompt$ === "object");
assert(typeof PutBotAliasRequest$ === "object");
assert(typeof PutBotAliasResponse$ === "object");
assert(typeof PutBotRequest$ === "object");
assert(typeof PutBotResponse$ === "object");
assert(typeof PutIntentRequest$ === "object");
assert(typeof PutIntentResponse$ === "object");
assert(typeof PutSlotTypeRequest$ === "object");
assert(typeof PutSlotTypeResponse$ === "object");
assert(typeof ResourceReference$ === "object");
assert(typeof Slot$ === "object");
assert(typeof SlotDefaultValue$ === "object");
assert(typeof SlotDefaultValueSpec$ === "object");
assert(typeof SlotTypeConfiguration$ === "object");
assert(typeof SlotTypeMetadata$ === "object");
assert(typeof SlotTypeRegexConfiguration$ === "object");
assert(typeof StartImportRequest$ === "object");
assert(typeof StartImportResponse$ === "object");
assert(typeof StartMigrationRequest$ === "object");
assert(typeof StartMigrationResponse$ === "object");
assert(typeof Statement$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UtteranceData$ === "object");
assert(typeof UtteranceList$ === "object");
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
assert(typeof ReferenceType === "object");
assert(typeof ResourceType === "object");
assert(typeof SlotConstraint === "object");
assert(typeof SlotValueSelectionStrategy === "object");
assert(typeof SortOrder === "object");
assert(typeof Status === "object");
assert(typeof StatusType === "object");
// errors
assert(AccessDeniedException.prototype instanceof LexModelBuildingServiceServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof LexModelBuildingServiceServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof LexModelBuildingServiceServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalFailureException.prototype instanceof LexModelBuildingServiceServiceException);
assert(typeof InternalFailureException$ === "object");
assert(LimitExceededException.prototype instanceof LexModelBuildingServiceServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotFoundException.prototype instanceof LexModelBuildingServiceServiceException);
assert(typeof NotFoundException$ === "object");
assert(PreconditionFailedException.prototype instanceof LexModelBuildingServiceServiceException);
assert(typeof PreconditionFailedException$ === "object");
assert(ResourceInUseException.prototype instanceof LexModelBuildingServiceServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(LexModelBuildingServiceServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetBotAliases === "function");
assert(typeof paginateGetBotChannelAssociations === "function");
assert(typeof paginateGetBotVersions === "function");
assert(typeof paginateGetBots === "function");
assert(typeof paginateGetBuiltinIntents === "function");
assert(typeof paginateGetBuiltinSlotTypes === "function");
assert(typeof paginateGetIntentVersions === "function");
assert(typeof paginateGetIntents === "function");
assert(typeof paginateGetMigrations === "function");
assert(typeof paginateGetSlotTypeVersions === "function");
assert(typeof paginateGetSlotTypes === "function");
console.log(`LexModelBuildingService index test passed.`);
