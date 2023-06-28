// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateBotVersionCommand,
  CreateBotVersionCommandInput,
  CreateBotVersionCommandOutput,
} from "./commands/CreateBotVersionCommand";
import {
  CreateIntentVersionCommand,
  CreateIntentVersionCommandInput,
  CreateIntentVersionCommandOutput,
} from "./commands/CreateIntentVersionCommand";
import {
  CreateSlotTypeVersionCommand,
  CreateSlotTypeVersionCommandInput,
  CreateSlotTypeVersionCommandOutput,
} from "./commands/CreateSlotTypeVersionCommand";
import {
  DeleteBotAliasCommand,
  DeleteBotAliasCommandInput,
  DeleteBotAliasCommandOutput,
} from "./commands/DeleteBotAliasCommand";
import {
  DeleteBotChannelAssociationCommand,
  DeleteBotChannelAssociationCommandInput,
  DeleteBotChannelAssociationCommandOutput,
} from "./commands/DeleteBotChannelAssociationCommand";
import { DeleteBotCommand, DeleteBotCommandInput, DeleteBotCommandOutput } from "./commands/DeleteBotCommand";
import {
  DeleteBotVersionCommand,
  DeleteBotVersionCommandInput,
  DeleteBotVersionCommandOutput,
} from "./commands/DeleteBotVersionCommand";
import {
  DeleteIntentCommand,
  DeleteIntentCommandInput,
  DeleteIntentCommandOutput,
} from "./commands/DeleteIntentCommand";
import {
  DeleteIntentVersionCommand,
  DeleteIntentVersionCommandInput,
  DeleteIntentVersionCommandOutput,
} from "./commands/DeleteIntentVersionCommand";
import {
  DeleteSlotTypeCommand,
  DeleteSlotTypeCommandInput,
  DeleteSlotTypeCommandOutput,
} from "./commands/DeleteSlotTypeCommand";
import {
  DeleteSlotTypeVersionCommand,
  DeleteSlotTypeVersionCommandInput,
  DeleteSlotTypeVersionCommandOutput,
} from "./commands/DeleteSlotTypeVersionCommand";
import {
  DeleteUtterancesCommand,
  DeleteUtterancesCommandInput,
  DeleteUtterancesCommandOutput,
} from "./commands/DeleteUtterancesCommand";
import { GetBotAliasCommand, GetBotAliasCommandInput, GetBotAliasCommandOutput } from "./commands/GetBotAliasCommand";
import {
  GetBotAliasesCommand,
  GetBotAliasesCommandInput,
  GetBotAliasesCommandOutput,
} from "./commands/GetBotAliasesCommand";
import {
  GetBotChannelAssociationCommand,
  GetBotChannelAssociationCommandInput,
  GetBotChannelAssociationCommandOutput,
} from "./commands/GetBotChannelAssociationCommand";
import {
  GetBotChannelAssociationsCommand,
  GetBotChannelAssociationsCommandInput,
  GetBotChannelAssociationsCommandOutput,
} from "./commands/GetBotChannelAssociationsCommand";
import { GetBotCommand, GetBotCommandInput, GetBotCommandOutput } from "./commands/GetBotCommand";
import { GetBotsCommand, GetBotsCommandInput, GetBotsCommandOutput } from "./commands/GetBotsCommand";
import {
  GetBotVersionsCommand,
  GetBotVersionsCommandInput,
  GetBotVersionsCommandOutput,
} from "./commands/GetBotVersionsCommand";
import {
  GetBuiltinIntentCommand,
  GetBuiltinIntentCommandInput,
  GetBuiltinIntentCommandOutput,
} from "./commands/GetBuiltinIntentCommand";
import {
  GetBuiltinIntentsCommand,
  GetBuiltinIntentsCommandInput,
  GetBuiltinIntentsCommandOutput,
} from "./commands/GetBuiltinIntentsCommand";
import {
  GetBuiltinSlotTypesCommand,
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput,
} from "./commands/GetBuiltinSlotTypesCommand";
import { GetExportCommand, GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand";
import { GetImportCommand, GetImportCommandInput, GetImportCommandOutput } from "./commands/GetImportCommand";
import { GetIntentCommand, GetIntentCommandInput, GetIntentCommandOutput } from "./commands/GetIntentCommand";
import { GetIntentsCommand, GetIntentsCommandInput, GetIntentsCommandOutput } from "./commands/GetIntentsCommand";
import {
  GetIntentVersionsCommand,
  GetIntentVersionsCommandInput,
  GetIntentVersionsCommandOutput,
} from "./commands/GetIntentVersionsCommand";
import {
  GetMigrationCommand,
  GetMigrationCommandInput,
  GetMigrationCommandOutput,
} from "./commands/GetMigrationCommand";
import {
  GetMigrationsCommand,
  GetMigrationsCommandInput,
  GetMigrationsCommandOutput,
} from "./commands/GetMigrationsCommand";
import { GetSlotTypeCommand, GetSlotTypeCommandInput, GetSlotTypeCommandOutput } from "./commands/GetSlotTypeCommand";
import {
  GetSlotTypesCommand,
  GetSlotTypesCommandInput,
  GetSlotTypesCommandOutput,
} from "./commands/GetSlotTypesCommand";
import {
  GetSlotTypeVersionsCommand,
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput,
} from "./commands/GetSlotTypeVersionsCommand";
import {
  GetUtterancesViewCommand,
  GetUtterancesViewCommandInput,
  GetUtterancesViewCommandOutput,
} from "./commands/GetUtterancesViewCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutBotAliasCommand, PutBotAliasCommandInput, PutBotAliasCommandOutput } from "./commands/PutBotAliasCommand";
import { PutBotCommand, PutBotCommandInput, PutBotCommandOutput } from "./commands/PutBotCommand";
import { PutIntentCommand, PutIntentCommandInput, PutIntentCommandOutput } from "./commands/PutIntentCommand";
import { PutSlotTypeCommand, PutSlotTypeCommandInput, PutSlotTypeCommandOutput } from "./commands/PutSlotTypeCommand";
import { StartImportCommand, StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import {
  StartMigrationCommand,
  StartMigrationCommandInput,
  StartMigrationCommandOutput,
} from "./commands/StartMigrationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { LexModelBuildingServiceClient, LexModelBuildingServiceClientConfig } from "./LexModelBuildingServiceClient";

const commands = {
  CreateBotVersionCommand,
  CreateIntentVersionCommand,
  CreateSlotTypeVersionCommand,
  DeleteBotCommand,
  DeleteBotAliasCommand,
  DeleteBotChannelAssociationCommand,
  DeleteBotVersionCommand,
  DeleteIntentCommand,
  DeleteIntentVersionCommand,
  DeleteSlotTypeCommand,
  DeleteSlotTypeVersionCommand,
  DeleteUtterancesCommand,
  GetBotCommand,
  GetBotAliasCommand,
  GetBotAliasesCommand,
  GetBotChannelAssociationCommand,
  GetBotChannelAssociationsCommand,
  GetBotsCommand,
  GetBotVersionsCommand,
  GetBuiltinIntentCommand,
  GetBuiltinIntentsCommand,
  GetBuiltinSlotTypesCommand,
  GetExportCommand,
  GetImportCommand,
  GetIntentCommand,
  GetIntentsCommand,
  GetIntentVersionsCommand,
  GetMigrationCommand,
  GetMigrationsCommand,
  GetSlotTypeCommand,
  GetSlotTypesCommand,
  GetSlotTypeVersionsCommand,
  GetUtterancesViewCommand,
  ListTagsForResourceCommand,
  PutBotCommand,
  PutBotAliasCommand,
  PutIntentCommand,
  PutSlotTypeCommand,
  StartImportCommand,
  StartMigrationCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface LexModelBuildingService {
  /**
   * @see {@link CreateBotVersionCommand}
   */
  createBotVersion(
    args: CreateBotVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBotVersionCommandOutput>;
  createBotVersion(
    args: CreateBotVersionCommandInput,
    cb: (err: any, data?: CreateBotVersionCommandOutput) => void
  ): void;
  createBotVersion(
    args: CreateBotVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIntentVersionCommand}
   */
  createIntentVersion(
    args: CreateIntentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntentVersionCommandOutput>;
  createIntentVersion(
    args: CreateIntentVersionCommandInput,
    cb: (err: any, data?: CreateIntentVersionCommandOutput) => void
  ): void;
  createIntentVersion(
    args: CreateIntentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSlotTypeVersionCommand}
   */
  createSlotTypeVersion(
    args: CreateSlotTypeVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSlotTypeVersionCommandOutput>;
  createSlotTypeVersion(
    args: CreateSlotTypeVersionCommandInput,
    cb: (err: any, data?: CreateSlotTypeVersionCommandOutput) => void
  ): void;
  createSlotTypeVersion(
    args: CreateSlotTypeVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSlotTypeVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotCommand}
   */
  deleteBot(args: DeleteBotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBotCommandOutput>;
  deleteBot(args: DeleteBotCommandInput, cb: (err: any, data?: DeleteBotCommandOutput) => void): void;
  deleteBot(
    args: DeleteBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotAliasCommand}
   */
  deleteBotAlias(
    args: DeleteBotAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBotAliasCommandOutput>;
  deleteBotAlias(args: DeleteBotAliasCommandInput, cb: (err: any, data?: DeleteBotAliasCommandOutput) => void): void;
  deleteBotAlias(
    args: DeleteBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotChannelAssociationCommand}
   */
  deleteBotChannelAssociation(
    args: DeleteBotChannelAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBotChannelAssociationCommandOutput>;
  deleteBotChannelAssociation(
    args: DeleteBotChannelAssociationCommandInput,
    cb: (err: any, data?: DeleteBotChannelAssociationCommandOutput) => void
  ): void;
  deleteBotChannelAssociation(
    args: DeleteBotChannelAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotChannelAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBotVersionCommand}
   */
  deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBotVersionCommandOutput>;
  deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    cb: (err: any, data?: DeleteBotVersionCommandOutput) => void
  ): void;
  deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntentCommand}
   */
  deleteIntent(args: DeleteIntentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIntentCommandOutput>;
  deleteIntent(args: DeleteIntentCommandInput, cb: (err: any, data?: DeleteIntentCommandOutput) => void): void;
  deleteIntent(
    args: DeleteIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIntentVersionCommand}
   */
  deleteIntentVersion(
    args: DeleteIntentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntentVersionCommandOutput>;
  deleteIntentVersion(
    args: DeleteIntentVersionCommandInput,
    cb: (err: any, data?: DeleteIntentVersionCommandOutput) => void
  ): void;
  deleteIntentVersion(
    args: DeleteIntentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntentVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSlotTypeCommand}
   */
  deleteSlotType(
    args: DeleteSlotTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSlotTypeCommandOutput>;
  deleteSlotType(args: DeleteSlotTypeCommandInput, cb: (err: any, data?: DeleteSlotTypeCommandOutput) => void): void;
  deleteSlotType(
    args: DeleteSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlotTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSlotTypeVersionCommand}
   */
  deleteSlotTypeVersion(
    args: DeleteSlotTypeVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSlotTypeVersionCommandOutput>;
  deleteSlotTypeVersion(
    args: DeleteSlotTypeVersionCommandInput,
    cb: (err: any, data?: DeleteSlotTypeVersionCommandOutput) => void
  ): void;
  deleteSlotTypeVersion(
    args: DeleteSlotTypeVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlotTypeVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUtterancesCommand}
   */
  deleteUtterances(
    args: DeleteUtterancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUtterancesCommandOutput>;
  deleteUtterances(
    args: DeleteUtterancesCommandInput,
    cb: (err: any, data?: DeleteUtterancesCommandOutput) => void
  ): void;
  deleteUtterances(
    args: DeleteUtterancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUtterancesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBotCommand}
   */
  getBot(args: GetBotCommandInput, options?: __HttpHandlerOptions): Promise<GetBotCommandOutput>;
  getBot(args: GetBotCommandInput, cb: (err: any, data?: GetBotCommandOutput) => void): void;
  getBot(
    args: GetBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBotAliasCommand}
   */
  getBotAlias(args: GetBotAliasCommandInput, options?: __HttpHandlerOptions): Promise<GetBotAliasCommandOutput>;
  getBotAlias(args: GetBotAliasCommandInput, cb: (err: any, data?: GetBotAliasCommandOutput) => void): void;
  getBotAlias(
    args: GetBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBotAliasesCommand}
   */
  getBotAliases(args: GetBotAliasesCommandInput, options?: __HttpHandlerOptions): Promise<GetBotAliasesCommandOutput>;
  getBotAliases(args: GetBotAliasesCommandInput, cb: (err: any, data?: GetBotAliasesCommandOutput) => void): void;
  getBotAliases(
    args: GetBotAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBotChannelAssociationCommand}
   */
  getBotChannelAssociation(
    args: GetBotChannelAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBotChannelAssociationCommandOutput>;
  getBotChannelAssociation(
    args: GetBotChannelAssociationCommandInput,
    cb: (err: any, data?: GetBotChannelAssociationCommandOutput) => void
  ): void;
  getBotChannelAssociation(
    args: GetBotChannelAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotChannelAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBotChannelAssociationsCommand}
   */
  getBotChannelAssociations(
    args: GetBotChannelAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBotChannelAssociationsCommandOutput>;
  getBotChannelAssociations(
    args: GetBotChannelAssociationsCommandInput,
    cb: (err: any, data?: GetBotChannelAssociationsCommandOutput) => void
  ): void;
  getBotChannelAssociations(
    args: GetBotChannelAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotChannelAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBotsCommand}
   */
  getBots(args: GetBotsCommandInput, options?: __HttpHandlerOptions): Promise<GetBotsCommandOutput>;
  getBots(args: GetBotsCommandInput, cb: (err: any, data?: GetBotsCommandOutput) => void): void;
  getBots(
    args: GetBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBotVersionsCommand}
   */
  getBotVersions(
    args: GetBotVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBotVersionsCommandOutput>;
  getBotVersions(args: GetBotVersionsCommandInput, cb: (err: any, data?: GetBotVersionsCommandOutput) => void): void;
  getBotVersions(
    args: GetBotVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBuiltinIntentCommand}
   */
  getBuiltinIntent(
    args: GetBuiltinIntentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBuiltinIntentCommandOutput>;
  getBuiltinIntent(
    args: GetBuiltinIntentCommandInput,
    cb: (err: any, data?: GetBuiltinIntentCommandOutput) => void
  ): void;
  getBuiltinIntent(
    args: GetBuiltinIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBuiltinIntentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBuiltinIntentsCommand}
   */
  getBuiltinIntents(
    args: GetBuiltinIntentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBuiltinIntentsCommandOutput>;
  getBuiltinIntents(
    args: GetBuiltinIntentsCommandInput,
    cb: (err: any, data?: GetBuiltinIntentsCommandOutput) => void
  ): void;
  getBuiltinIntents(
    args: GetBuiltinIntentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBuiltinIntentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBuiltinSlotTypesCommand}
   */
  getBuiltinSlotTypes(
    args: GetBuiltinSlotTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBuiltinSlotTypesCommandOutput>;
  getBuiltinSlotTypes(
    args: GetBuiltinSlotTypesCommandInput,
    cb: (err: any, data?: GetBuiltinSlotTypesCommandOutput) => void
  ): void;
  getBuiltinSlotTypes(
    args: GetBuiltinSlotTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBuiltinSlotTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetExportCommand}
   */
  getExport(args: GetExportCommandInput, options?: __HttpHandlerOptions): Promise<GetExportCommandOutput>;
  getExport(args: GetExportCommandInput, cb: (err: any, data?: GetExportCommandOutput) => void): void;
  getExport(
    args: GetExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImportCommand}
   */
  getImport(args: GetImportCommandInput, options?: __HttpHandlerOptions): Promise<GetImportCommandOutput>;
  getImport(args: GetImportCommandInput, cb: (err: any, data?: GetImportCommandOutput) => void): void;
  getImport(
    args: GetImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntentCommand}
   */
  getIntent(args: GetIntentCommandInput, options?: __HttpHandlerOptions): Promise<GetIntentCommandOutput>;
  getIntent(args: GetIntentCommandInput, cb: (err: any, data?: GetIntentCommandOutput) => void): void;
  getIntent(
    args: GetIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntentsCommand}
   */
  getIntents(args: GetIntentsCommandInput, options?: __HttpHandlerOptions): Promise<GetIntentsCommandOutput>;
  getIntents(args: GetIntentsCommandInput, cb: (err: any, data?: GetIntentsCommandOutput) => void): void;
  getIntents(
    args: GetIntentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIntentVersionsCommand}
   */
  getIntentVersions(
    args: GetIntentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntentVersionsCommandOutput>;
  getIntentVersions(
    args: GetIntentVersionsCommandInput,
    cb: (err: any, data?: GetIntentVersionsCommandOutput) => void
  ): void;
  getIntentVersions(
    args: GetIntentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntentVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMigrationCommand}
   */
  getMigration(args: GetMigrationCommandInput, options?: __HttpHandlerOptions): Promise<GetMigrationCommandOutput>;
  getMigration(args: GetMigrationCommandInput, cb: (err: any, data?: GetMigrationCommandOutput) => void): void;
  getMigration(
    args: GetMigrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMigrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMigrationsCommand}
   */
  getMigrations(args: GetMigrationsCommandInput, options?: __HttpHandlerOptions): Promise<GetMigrationsCommandOutput>;
  getMigrations(args: GetMigrationsCommandInput, cb: (err: any, data?: GetMigrationsCommandOutput) => void): void;
  getMigrations(
    args: GetMigrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMigrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSlotTypeCommand}
   */
  getSlotType(args: GetSlotTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetSlotTypeCommandOutput>;
  getSlotType(args: GetSlotTypeCommandInput, cb: (err: any, data?: GetSlotTypeCommandOutput) => void): void;
  getSlotType(
    args: GetSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSlotTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSlotTypesCommand}
   */
  getSlotTypes(args: GetSlotTypesCommandInput, options?: __HttpHandlerOptions): Promise<GetSlotTypesCommandOutput>;
  getSlotTypes(args: GetSlotTypesCommandInput, cb: (err: any, data?: GetSlotTypesCommandOutput) => void): void;
  getSlotTypes(
    args: GetSlotTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSlotTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSlotTypeVersionsCommand}
   */
  getSlotTypeVersions(
    args: GetSlotTypeVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSlotTypeVersionsCommandOutput>;
  getSlotTypeVersions(
    args: GetSlotTypeVersionsCommandInput,
    cb: (err: any, data?: GetSlotTypeVersionsCommandOutput) => void
  ): void;
  getSlotTypeVersions(
    args: GetSlotTypeVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSlotTypeVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUtterancesViewCommand}
   */
  getUtterancesView(
    args: GetUtterancesViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUtterancesViewCommandOutput>;
  getUtterancesView(
    args: GetUtterancesViewCommandInput,
    cb: (err: any, data?: GetUtterancesViewCommandOutput) => void
  ): void;
  getUtterancesView(
    args: GetUtterancesViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUtterancesViewCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBotCommand}
   */
  putBot(args: PutBotCommandInput, options?: __HttpHandlerOptions): Promise<PutBotCommandOutput>;
  putBot(args: PutBotCommandInput, cb: (err: any, data?: PutBotCommandOutput) => void): void;
  putBot(
    args: PutBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBotCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBotAliasCommand}
   */
  putBotAlias(args: PutBotAliasCommandInput, options?: __HttpHandlerOptions): Promise<PutBotAliasCommandOutput>;
  putBotAlias(args: PutBotAliasCommandInput, cb: (err: any, data?: PutBotAliasCommandOutput) => void): void;
  putBotAlias(
    args: PutBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBotAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link PutIntentCommand}
   */
  putIntent(args: PutIntentCommandInput, options?: __HttpHandlerOptions): Promise<PutIntentCommandOutput>;
  putIntent(args: PutIntentCommandInput, cb: (err: any, data?: PutIntentCommandOutput) => void): void;
  putIntent(
    args: PutIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntentCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSlotTypeCommand}
   */
  putSlotType(args: PutSlotTypeCommandInput, options?: __HttpHandlerOptions): Promise<PutSlotTypeCommandOutput>;
  putSlotType(args: PutSlotTypeCommandInput, cb: (err: any, data?: PutSlotTypeCommandOutput) => void): void;
  putSlotType(
    args: PutSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSlotTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImportCommand}
   */
  startImport(args: StartImportCommandInput, options?: __HttpHandlerOptions): Promise<StartImportCommandOutput>;
  startImport(args: StartImportCommandInput, cb: (err: any, data?: StartImportCommandOutput) => void): void;
  startImport(
    args: StartImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMigrationCommand}
   */
  startMigration(
    args: StartMigrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMigrationCommandOutput>;
  startMigration(args: StartMigrationCommandInput, cb: (err: any, data?: StartMigrationCommandOutput) => void): void;
  startMigration(
    args: StartMigrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMigrationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Lex Build-Time Actions</fullname>
 *          <p> Amazon Lex is an AWS service for building conversational voice and text
 *       interfaces. Use these actions to create, update, and delete conversational
 *       bots for new and existing client applications. </p>
 */
export class LexModelBuildingService extends LexModelBuildingServiceClient implements LexModelBuildingService {}
createAggregatedClient(commands, LexModelBuildingService);
