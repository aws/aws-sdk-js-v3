// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchCreateCustomVocabularyItemCommand,
  BatchCreateCustomVocabularyItemCommandInput,
  BatchCreateCustomVocabularyItemCommandOutput,
} from "./commands/BatchCreateCustomVocabularyItemCommand";
import {
  BatchDeleteCustomVocabularyItemCommand,
  BatchDeleteCustomVocabularyItemCommandInput,
  BatchDeleteCustomVocabularyItemCommandOutput,
} from "./commands/BatchDeleteCustomVocabularyItemCommand";
import {
  BatchUpdateCustomVocabularyItemCommand,
  BatchUpdateCustomVocabularyItemCommandInput,
  BatchUpdateCustomVocabularyItemCommandOutput,
} from "./commands/BatchUpdateCustomVocabularyItemCommand";
import {
  BuildBotLocaleCommand,
  BuildBotLocaleCommandInput,
  BuildBotLocaleCommandOutput,
} from "./commands/BuildBotLocaleCommand";
import {
  CreateBotAliasCommand,
  CreateBotAliasCommandInput,
  CreateBotAliasCommandOutput,
} from "./commands/CreateBotAliasCommand";
import { CreateBotCommand, CreateBotCommandInput, CreateBotCommandOutput } from "./commands/CreateBotCommand";
import {
  CreateBotLocaleCommand,
  CreateBotLocaleCommandInput,
  CreateBotLocaleCommandOutput,
} from "./commands/CreateBotLocaleCommand";
import {
  CreateBotVersionCommand,
  CreateBotVersionCommandInput,
  CreateBotVersionCommandOutput,
} from "./commands/CreateBotVersionCommand";
import {
  CreateExportCommand,
  CreateExportCommandInput,
  CreateExportCommandOutput,
} from "./commands/CreateExportCommand";
import {
  CreateIntentCommand,
  CreateIntentCommandInput,
  CreateIntentCommandOutput,
} from "./commands/CreateIntentCommand";
import {
  CreateResourcePolicyCommand,
  CreateResourcePolicyCommandInput,
  CreateResourcePolicyCommandOutput,
} from "./commands/CreateResourcePolicyCommand";
import {
  CreateResourcePolicyStatementCommand,
  CreateResourcePolicyStatementCommandInput,
  CreateResourcePolicyStatementCommandOutput,
} from "./commands/CreateResourcePolicyStatementCommand";
import { CreateSlotCommand, CreateSlotCommandInput, CreateSlotCommandOutput } from "./commands/CreateSlotCommand";
import {
  CreateSlotTypeCommand,
  CreateSlotTypeCommandInput,
  CreateSlotTypeCommandOutput,
} from "./commands/CreateSlotTypeCommand";
import {
  CreateUploadUrlCommand,
  CreateUploadUrlCommandInput,
  CreateUploadUrlCommandOutput,
} from "./commands/CreateUploadUrlCommand";
import {
  DeleteBotAliasCommand,
  DeleteBotAliasCommandInput,
  DeleteBotAliasCommandOutput,
} from "./commands/DeleteBotAliasCommand";
import { DeleteBotCommand, DeleteBotCommandInput, DeleteBotCommandOutput } from "./commands/DeleteBotCommand";
import {
  DeleteBotLocaleCommand,
  DeleteBotLocaleCommandInput,
  DeleteBotLocaleCommandOutput,
} from "./commands/DeleteBotLocaleCommand";
import {
  DeleteBotVersionCommand,
  DeleteBotVersionCommandInput,
  DeleteBotVersionCommandOutput,
} from "./commands/DeleteBotVersionCommand";
import {
  DeleteCustomVocabularyCommand,
  DeleteCustomVocabularyCommandInput,
  DeleteCustomVocabularyCommandOutput,
} from "./commands/DeleteCustomVocabularyCommand";
import {
  DeleteExportCommand,
  DeleteExportCommandInput,
  DeleteExportCommandOutput,
} from "./commands/DeleteExportCommand";
import {
  DeleteImportCommand,
  DeleteImportCommandInput,
  DeleteImportCommandOutput,
} from "./commands/DeleteImportCommand";
import {
  DeleteIntentCommand,
  DeleteIntentCommandInput,
  DeleteIntentCommandOutput,
} from "./commands/DeleteIntentCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteResourcePolicyStatementCommand,
  DeleteResourcePolicyStatementCommandInput,
  DeleteResourcePolicyStatementCommandOutput,
} from "./commands/DeleteResourcePolicyStatementCommand";
import { DeleteSlotCommand, DeleteSlotCommandInput, DeleteSlotCommandOutput } from "./commands/DeleteSlotCommand";
import {
  DeleteSlotTypeCommand,
  DeleteSlotTypeCommandInput,
  DeleteSlotTypeCommandOutput,
} from "./commands/DeleteSlotTypeCommand";
import {
  DeleteUtterancesCommand,
  DeleteUtterancesCommandInput,
  DeleteUtterancesCommandOutput,
} from "./commands/DeleteUtterancesCommand";
import {
  DescribeBotAliasCommand,
  DescribeBotAliasCommandInput,
  DescribeBotAliasCommandOutput,
} from "./commands/DescribeBotAliasCommand";
import { DescribeBotCommand, DescribeBotCommandInput, DescribeBotCommandOutput } from "./commands/DescribeBotCommand";
import {
  DescribeBotLocaleCommand,
  DescribeBotLocaleCommandInput,
  DescribeBotLocaleCommandOutput,
} from "./commands/DescribeBotLocaleCommand";
import {
  DescribeBotRecommendationCommand,
  DescribeBotRecommendationCommandInput,
  DescribeBotRecommendationCommandOutput,
} from "./commands/DescribeBotRecommendationCommand";
import {
  DescribeBotVersionCommand,
  DescribeBotVersionCommandInput,
  DescribeBotVersionCommandOutput,
} from "./commands/DescribeBotVersionCommand";
import {
  DescribeCustomVocabularyMetadataCommand,
  DescribeCustomVocabularyMetadataCommandInput,
  DescribeCustomVocabularyMetadataCommandOutput,
} from "./commands/DescribeCustomVocabularyMetadataCommand";
import {
  DescribeExportCommand,
  DescribeExportCommandInput,
  DescribeExportCommandOutput,
} from "./commands/DescribeExportCommand";
import {
  DescribeImportCommand,
  DescribeImportCommandInput,
  DescribeImportCommandOutput,
} from "./commands/DescribeImportCommand";
import {
  DescribeIntentCommand,
  DescribeIntentCommandInput,
  DescribeIntentCommandOutput,
} from "./commands/DescribeIntentCommand";
import {
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import {
  DescribeSlotCommand,
  DescribeSlotCommandInput,
  DescribeSlotCommandOutput,
} from "./commands/DescribeSlotCommand";
import {
  DescribeSlotTypeCommand,
  DescribeSlotTypeCommandInput,
  DescribeSlotTypeCommandOutput,
} from "./commands/DescribeSlotTypeCommand";
import {
  ListAggregatedUtterancesCommand,
  ListAggregatedUtterancesCommandInput,
  ListAggregatedUtterancesCommandOutput,
} from "./commands/ListAggregatedUtterancesCommand";
import {
  ListBotAliasesCommand,
  ListBotAliasesCommandInput,
  ListBotAliasesCommandOutput,
} from "./commands/ListBotAliasesCommand";
import {
  ListBotLocalesCommand,
  ListBotLocalesCommandInput,
  ListBotLocalesCommandOutput,
} from "./commands/ListBotLocalesCommand";
import {
  ListBotRecommendationsCommand,
  ListBotRecommendationsCommandInput,
  ListBotRecommendationsCommandOutput,
} from "./commands/ListBotRecommendationsCommand";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
import {
  ListBotVersionsCommand,
  ListBotVersionsCommandInput,
  ListBotVersionsCommandOutput,
} from "./commands/ListBotVersionsCommand";
import {
  ListBuiltInIntentsCommand,
  ListBuiltInIntentsCommandInput,
  ListBuiltInIntentsCommandOutput,
} from "./commands/ListBuiltInIntentsCommand";
import {
  ListBuiltInSlotTypesCommand,
  ListBuiltInSlotTypesCommandInput,
  ListBuiltInSlotTypesCommandOutput,
} from "./commands/ListBuiltInSlotTypesCommand";
import {
  ListCustomVocabularyItemsCommand,
  ListCustomVocabularyItemsCommandInput,
  ListCustomVocabularyItemsCommandOutput,
} from "./commands/ListCustomVocabularyItemsCommand";
import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import { ListIntentsCommand, ListIntentsCommandInput, ListIntentsCommandOutput } from "./commands/ListIntentsCommand";
import {
  ListRecommendedIntentsCommand,
  ListRecommendedIntentsCommandInput,
  ListRecommendedIntentsCommandOutput,
} from "./commands/ListRecommendedIntentsCommand";
import { ListSlotsCommand, ListSlotsCommandInput, ListSlotsCommandOutput } from "./commands/ListSlotsCommand";
import {
  ListSlotTypesCommand,
  ListSlotTypesCommandInput,
  ListSlotTypesCommandOutput,
} from "./commands/ListSlotTypesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  SearchAssociatedTranscriptsCommand,
  SearchAssociatedTranscriptsCommandInput,
  SearchAssociatedTranscriptsCommandOutput,
} from "./commands/SearchAssociatedTranscriptsCommand";
import {
  StartBotRecommendationCommand,
  StartBotRecommendationCommandInput,
  StartBotRecommendationCommandOutput,
} from "./commands/StartBotRecommendationCommand";
import { StartImportCommand, StartImportCommandInput, StartImportCommandOutput } from "./commands/StartImportCommand";
import {
  StopBotRecommendationCommand,
  StopBotRecommendationCommandInput,
  StopBotRecommendationCommandOutput,
} from "./commands/StopBotRecommendationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBotAliasCommand,
  UpdateBotAliasCommandInput,
  UpdateBotAliasCommandOutput,
} from "./commands/UpdateBotAliasCommand";
import { UpdateBotCommand, UpdateBotCommandInput, UpdateBotCommandOutput } from "./commands/UpdateBotCommand";
import {
  UpdateBotLocaleCommand,
  UpdateBotLocaleCommandInput,
  UpdateBotLocaleCommandOutput,
} from "./commands/UpdateBotLocaleCommand";
import {
  UpdateBotRecommendationCommand,
  UpdateBotRecommendationCommandInput,
  UpdateBotRecommendationCommandOutput,
} from "./commands/UpdateBotRecommendationCommand";
import {
  UpdateExportCommand,
  UpdateExportCommandInput,
  UpdateExportCommandOutput,
} from "./commands/UpdateExportCommand";
import {
  UpdateIntentCommand,
  UpdateIntentCommandInput,
  UpdateIntentCommandOutput,
} from "./commands/UpdateIntentCommand";
import {
  UpdateResourcePolicyCommand,
  UpdateResourcePolicyCommandInput,
  UpdateResourcePolicyCommandOutput,
} from "./commands/UpdateResourcePolicyCommand";
import { UpdateSlotCommand, UpdateSlotCommandInput, UpdateSlotCommandOutput } from "./commands/UpdateSlotCommand";
import {
  UpdateSlotTypeCommand,
  UpdateSlotTypeCommandInput,
  UpdateSlotTypeCommandOutput,
} from "./commands/UpdateSlotTypeCommand";
import { LexModelsV2Client } from "./LexModelsV2Client";

/**
 * <p></p>
 */
export class LexModelsV2 extends LexModelsV2Client {
  /**
   * <p>Batch create custom vocabulary item for the specified locale in the
   *          specified bot.</p>
   */
  public batchCreateCustomVocabularyItem(
    args: BatchCreateCustomVocabularyItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateCustomVocabularyItemCommandOutput>;
  public batchCreateCustomVocabularyItem(
    args: BatchCreateCustomVocabularyItemCommandInput,
    cb: (err: any, data?: BatchCreateCustomVocabularyItemCommandOutput) => void
  ): void;
  public batchCreateCustomVocabularyItem(
    args: BatchCreateCustomVocabularyItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateCustomVocabularyItemCommandOutput) => void
  ): void;
  public batchCreateCustomVocabularyItem(
    args: BatchCreateCustomVocabularyItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreateCustomVocabularyItemCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateCustomVocabularyItemCommandOutput) => void
  ): Promise<BatchCreateCustomVocabularyItemCommandOutput> | void {
    const command = new BatchCreateCustomVocabularyItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Batch delete custom vocabulary item for the specified locale in the
   *          specified bot.</p>
   */
  public batchDeleteCustomVocabularyItem(
    args: BatchDeleteCustomVocabularyItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteCustomVocabularyItemCommandOutput>;
  public batchDeleteCustomVocabularyItem(
    args: BatchDeleteCustomVocabularyItemCommandInput,
    cb: (err: any, data?: BatchDeleteCustomVocabularyItemCommandOutput) => void
  ): void;
  public batchDeleteCustomVocabularyItem(
    args: BatchDeleteCustomVocabularyItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteCustomVocabularyItemCommandOutput) => void
  ): void;
  public batchDeleteCustomVocabularyItem(
    args: BatchDeleteCustomVocabularyItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteCustomVocabularyItemCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteCustomVocabularyItemCommandOutput) => void
  ): Promise<BatchDeleteCustomVocabularyItemCommandOutput> | void {
    const command = new BatchDeleteCustomVocabularyItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Batch update custom vocabulary item for the specified locale in the
   *          specified bot.</p>
   */
  public batchUpdateCustomVocabularyItem(
    args: BatchUpdateCustomVocabularyItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateCustomVocabularyItemCommandOutput>;
  public batchUpdateCustomVocabularyItem(
    args: BatchUpdateCustomVocabularyItemCommandInput,
    cb: (err: any, data?: BatchUpdateCustomVocabularyItemCommandOutput) => void
  ): void;
  public batchUpdateCustomVocabularyItem(
    args: BatchUpdateCustomVocabularyItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateCustomVocabularyItemCommandOutput) => void
  ): void;
  public batchUpdateCustomVocabularyItem(
    args: BatchUpdateCustomVocabularyItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpdateCustomVocabularyItemCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdateCustomVocabularyItemCommandOutput) => void
  ): Promise<BatchUpdateCustomVocabularyItemCommandOutput> | void {
    const command = new BatchUpdateCustomVocabularyItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Builds a bot, its intents, and its slot types into a specific
   *          locale. A bot can be built into multiple locales. At runtime the locale
   *          is used to choose a specific build of the bot.</p>
   */
  public buildBotLocale(
    args: BuildBotLocaleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BuildBotLocaleCommandOutput>;
  public buildBotLocale(
    args: BuildBotLocaleCommandInput,
    cb: (err: any, data?: BuildBotLocaleCommandOutput) => void
  ): void;
  public buildBotLocale(
    args: BuildBotLocaleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BuildBotLocaleCommandOutput) => void
  ): void;
  public buildBotLocale(
    args: BuildBotLocaleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BuildBotLocaleCommandOutput) => void),
    cb?: (err: any, data?: BuildBotLocaleCommandOutput) => void
  ): Promise<BuildBotLocaleCommandOutput> | void {
    const command = new BuildBotLocaleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an Amazon Lex conversational bot. </p>
   */
  public createBot(args: CreateBotCommandInput, options?: __HttpHandlerOptions): Promise<CreateBotCommandOutput>;
  public createBot(args: CreateBotCommandInput, cb: (err: any, data?: CreateBotCommandOutput) => void): void;
  public createBot(
    args: CreateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotCommandOutput) => void
  ): void;
  public createBot(
    args: CreateBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBotCommandOutput) => void),
    cb?: (err: any, data?: CreateBotCommandOutput) => void
  ): Promise<CreateBotCommandOutput> | void {
    const command = new CreateBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an alias for the specified version of a bot. Use an alias to
   *          enable you to change the version of a bot without updating applications
   *          that use the bot.</p>
   *          <p>For example, you can create an alias called "PROD" that your
   *          applications use to call the Amazon Lex bot. </p>
   */
  public createBotAlias(
    args: CreateBotAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBotAliasCommandOutput>;
  public createBotAlias(
    args: CreateBotAliasCommandInput,
    cb: (err: any, data?: CreateBotAliasCommandOutput) => void
  ): void;
  public createBotAlias(
    args: CreateBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotAliasCommandOutput) => void
  ): void;
  public createBotAlias(
    args: CreateBotAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBotAliasCommandOutput) => void),
    cb?: (err: any, data?: CreateBotAliasCommandOutput) => void
  ): Promise<CreateBotAliasCommandOutput> | void {
    const command = new CreateBotAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a locale in the bot. The locale contains the intents and
   *          slot types that the bot uses in conversations with users in the
   *          specified language and locale. You must add a locale to a bot before
   *          you can add intents and slot types to the bot.</p>
   */
  public createBotLocale(
    args: CreateBotLocaleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBotLocaleCommandOutput>;
  public createBotLocale(
    args: CreateBotLocaleCommandInput,
    cb: (err: any, data?: CreateBotLocaleCommandOutput) => void
  ): void;
  public createBotLocale(
    args: CreateBotLocaleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotLocaleCommandOutput) => void
  ): void;
  public createBotLocale(
    args: CreateBotLocaleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBotLocaleCommandOutput) => void),
    cb?: (err: any, data?: CreateBotLocaleCommandOutput) => void
  ): Promise<CreateBotLocaleCommandOutput> | void {
    const command = new CreateBotLocaleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new version of the bot based on the <code>DRAFT</code>
   *          version. If the <code>DRAFT</code> version of this resource hasn't
   *          changed since you created the last version, Amazon Lex doesn't create a new
   *          version, it returns the last created version.</p>
   *          <p>When you create the first version of a bot, Amazon Lex sets the version
   *          to 1. Subsequent versions increment by 1.</p>
   */
  public createBotVersion(
    args: CreateBotVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBotVersionCommandOutput>;
  public createBotVersion(
    args: CreateBotVersionCommandInput,
    cb: (err: any, data?: CreateBotVersionCommandOutput) => void
  ): void;
  public createBotVersion(
    args: CreateBotVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBotVersionCommandOutput) => void
  ): void;
  public createBotVersion(
    args: CreateBotVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBotVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateBotVersionCommandOutput) => void
  ): Promise<CreateBotVersionCommandOutput> | void {
    const command = new CreateBotVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a zip archive containing the contents of a bot or a bot
   *          locale. The archive contains a directory structure that contains JSON
   *          files that define the bot.</p>
   *          <p>You can create an archive that contains the complete definition of a
   *          bot, or you can specify that the archive contain only the definition of
   *          a single bot locale.</p>
   *          <p>For more information about exporting bots, and about the structure
   *          of the export archive, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/importing-exporting.html"> Importing and
   *             exporting bots </a>
   *          </p>
   */
  public createExport(
    args: CreateExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExportCommandOutput>;
  public createExport(args: CreateExportCommandInput, cb: (err: any, data?: CreateExportCommandOutput) => void): void;
  public createExport(
    args: CreateExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExportCommandOutput) => void
  ): void;
  public createExport(
    args: CreateExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateExportCommandOutput) => void),
    cb?: (err: any, data?: CreateExportCommandOutput) => void
  ): Promise<CreateExportCommandOutput> | void {
    const command = new CreateExportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an intent.</p>
   *          <p>To define the interaction between the user and your bot, you define
   *          one or more intents. For example, for a pizza ordering bot you would
   *          create an <code>OrderPizza</code> intent.</p>
   *          <p>When you create an intent, you must provide a name. You can
   *          optionally provide the following:</p>
   *          <ul>
   *             <li>
   *                <p>Sample utterances. For example, "I want to order a pizza" and
   *                "Can I order a pizza." You can't provide utterances for built-in
   *                intents.</p>
   *             </li>
   *             <li>
   *                <p>Information to be gathered. You specify slots for the
   *                information that you bot requests from the user. You can specify
   *                standard slot types, such as date and time, or custom slot types
   *                for your application.</p>
   *             </li>
   *             <li>
   *                <p>How the intent is fulfilled. You can provide a Lambda function
   *                or configure the intent to return the intent information to your
   *                client application. If you use a Lambda function, Amazon Lex invokes
   *                the function when all of the intent information is
   *                available.</p>
   *             </li>
   *             <li>
   *                <p>A confirmation prompt to send to the user to confirm an
   *                intent. For example, "Shall I order your pizza?"</p>
   *             </li>
   *             <li>
   *                <p>A conclusion statement to send to the user after the intent is
   *                fulfilled. For example, "I ordered your pizza."</p>
   *             </li>
   *             <li>
   *                <p>A follow-up prompt that asks the user for additional activity.
   *                For example, "Do you want a drink with your pizza?"</p>
   *             </li>
   *          </ul>
   */
  public createIntent(
    args: CreateIntentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntentCommandOutput>;
  public createIntent(args: CreateIntentCommandInput, cb: (err: any, data?: CreateIntentCommandOutput) => void): void;
  public createIntent(
    args: CreateIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntentCommandOutput) => void
  ): void;
  public createIntent(
    args: CreateIntentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIntentCommandOutput) => void),
    cb?: (err: any, data?: CreateIntentCommandOutput) => void
  ): Promise<CreateIntentCommandOutput> | void {
    const command = new CreateIntentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new resource policy with the specified policy
   *          statements.</p>
   */
  public createResourcePolicy(
    args: CreateResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourcePolicyCommandOutput>;
  public createResourcePolicy(
    args: CreateResourcePolicyCommandInput,
    cb: (err: any, data?: CreateResourcePolicyCommandOutput) => void
  ): void;
  public createResourcePolicy(
    args: CreateResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourcePolicyCommandOutput) => void
  ): void;
  public createResourcePolicy(
    args: CreateResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateResourcePolicyCommandOutput) => void
  ): Promise<CreateResourcePolicyCommandOutput> | void {
    const command = new CreateResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a new resource policy statement to a bot or bot alias. If a
   *          resource policy exists, the statement is added to the current resource
   *          policy. If a policy doesn't exist, a new policy is created.</p>
   *          <p>You can't create a resource policy statement that allows
   *          cross-account access.</p>
   */
  public createResourcePolicyStatement(
    args: CreateResourcePolicyStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourcePolicyStatementCommandOutput>;
  public createResourcePolicyStatement(
    args: CreateResourcePolicyStatementCommandInput,
    cb: (err: any, data?: CreateResourcePolicyStatementCommandOutput) => void
  ): void;
  public createResourcePolicyStatement(
    args: CreateResourcePolicyStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourcePolicyStatementCommandOutput) => void
  ): void;
  public createResourcePolicyStatement(
    args: CreateResourcePolicyStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResourcePolicyStatementCommandOutput) => void),
    cb?: (err: any, data?: CreateResourcePolicyStatementCommandOutput) => void
  ): Promise<CreateResourcePolicyStatementCommandOutput> | void {
    const command = new CreateResourcePolicyStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a slot in an intent. A slot is a variable needed to fulfill
   *          an intent. For example, an <code>OrderPizza</code> intent might need
   *          slots for size, crust, and number of pizzas. For each slot, you define
   *          one or more utterances that Amazon Lex uses to elicit a response from the
   *          user. </p>
   */
  public createSlot(args: CreateSlotCommandInput, options?: __HttpHandlerOptions): Promise<CreateSlotCommandOutput>;
  public createSlot(args: CreateSlotCommandInput, cb: (err: any, data?: CreateSlotCommandOutput) => void): void;
  public createSlot(
    args: CreateSlotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSlotCommandOutput) => void
  ): void;
  public createSlot(
    args: CreateSlotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSlotCommandOutput) => void),
    cb?: (err: any, data?: CreateSlotCommandOutput) => void
  ): Promise<CreateSlotCommandOutput> | void {
    const command = new CreateSlotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a custom slot type</p>
   *          <p> To create a custom slot type, specify a name for the slot type and
   *          a set of enumeration values, the values that a slot of this type can
   *          assume. </p>
   */
  public createSlotType(
    args: CreateSlotTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSlotTypeCommandOutput>;
  public createSlotType(
    args: CreateSlotTypeCommandInput,
    cb: (err: any, data?: CreateSlotTypeCommandOutput) => void
  ): void;
  public createSlotType(
    args: CreateSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSlotTypeCommandOutput) => void
  ): void;
  public createSlotType(
    args: CreateSlotTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSlotTypeCommandOutput) => void),
    cb?: (err: any, data?: CreateSlotTypeCommandOutput) => void
  ): Promise<CreateSlotTypeCommandOutput> | void {
    const command = new CreateSlotTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a pre-signed S3 write URL that you use to upload the zip
   *          archive when importing a bot or a bot locale. </p>
   */
  public createUploadUrl(
    args: CreateUploadUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUploadUrlCommandOutput>;
  public createUploadUrl(
    args: CreateUploadUrlCommandInput,
    cb: (err: any, data?: CreateUploadUrlCommandOutput) => void
  ): void;
  public createUploadUrl(
    args: CreateUploadUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUploadUrlCommandOutput) => void
  ): void;
  public createUploadUrl(
    args: CreateUploadUrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUploadUrlCommandOutput) => void),
    cb?: (err: any, data?: CreateUploadUrlCommandOutput) => void
  ): Promise<CreateUploadUrlCommandOutput> | void {
    const command = new CreateUploadUrlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes all versions of a bot, including the <code>Draft</code>
   *          version. To delete a specific version, use the
   *             <code>DeleteBotVersion</code> operation.</p>
   *          <p>When you delete a bot, all of the resources contained in the bot are
   *          also deleted. Deleting a bot removes all locales, intents, slot, and
   *          slot types defined for the bot.</p>
   *          <p>If a bot has an alias, the <code>DeleteBot</code> operation returns
   *          a <code>ResourceInUseException</code> exception. If you want to delete
   *          the bot and the alias, set the <code>skipResourceInUseCheck</code>
   *          parameter to <code>true</code>.</p>
   */
  public deleteBot(args: DeleteBotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBotCommandOutput>;
  public deleteBot(args: DeleteBotCommandInput, cb: (err: any, data?: DeleteBotCommandOutput) => void): void;
  public deleteBot(
    args: DeleteBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotCommandOutput) => void
  ): void;
  public deleteBot(
    args: DeleteBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBotCommandOutput) => void),
    cb?: (err: any, data?: DeleteBotCommandOutput) => void
  ): Promise<DeleteBotCommandOutput> | void {
    const command = new DeleteBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified bot alias.</p>
   */
  public deleteBotAlias(
    args: DeleteBotAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBotAliasCommandOutput>;
  public deleteBotAlias(
    args: DeleteBotAliasCommandInput,
    cb: (err: any, data?: DeleteBotAliasCommandOutput) => void
  ): void;
  public deleteBotAlias(
    args: DeleteBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotAliasCommandOutput) => void
  ): void;
  public deleteBotAlias(
    args: DeleteBotAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBotAliasCommandOutput) => void),
    cb?: (err: any, data?: DeleteBotAliasCommandOutput) => void
  ): Promise<DeleteBotAliasCommandOutput> | void {
    const command = new DeleteBotAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a locale from a bot.</p>
   *          <p>When you delete a locale, all intents, slots, and slot types defined
   *          for the locale are also deleted.</p>
   */
  public deleteBotLocale(
    args: DeleteBotLocaleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBotLocaleCommandOutput>;
  public deleteBotLocale(
    args: DeleteBotLocaleCommandInput,
    cb: (err: any, data?: DeleteBotLocaleCommandOutput) => void
  ): void;
  public deleteBotLocale(
    args: DeleteBotLocaleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotLocaleCommandOutput) => void
  ): void;
  public deleteBotLocale(
    args: DeleteBotLocaleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBotLocaleCommandOutput) => void),
    cb?: (err: any, data?: DeleteBotLocaleCommandOutput) => void
  ): Promise<DeleteBotLocaleCommandOutput> | void {
    const command = new DeleteBotLocaleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a specific version of a bot. To delete all version of a bot,
   *          use the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_DeleteBot.html">DeleteBot</a> operation.</p>
   */
  public deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBotVersionCommandOutput>;
  public deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    cb: (err: any, data?: DeleteBotVersionCommandOutput) => void
  ): void;
  public deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotVersionCommandOutput) => void
  ): void;
  public deleteBotVersion(
    args: DeleteBotVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBotVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteBotVersionCommandOutput) => void
  ): Promise<DeleteBotVersionCommandOutput> | void {
    const command = new DeleteBotVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a custom vocabulary from the specified locale
   *       in the specified bot.</p>
   */
  public deleteCustomVocabulary(
    args: DeleteCustomVocabularyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomVocabularyCommandOutput>;
  public deleteCustomVocabulary(
    args: DeleteCustomVocabularyCommandInput,
    cb: (err: any, data?: DeleteCustomVocabularyCommandOutput) => void
  ): void;
  public deleteCustomVocabulary(
    args: DeleteCustomVocabularyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomVocabularyCommandOutput) => void
  ): void;
  public deleteCustomVocabulary(
    args: DeleteCustomVocabularyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomVocabularyCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomVocabularyCommandOutput) => void
  ): Promise<DeleteCustomVocabularyCommandOutput> | void {
    const command = new DeleteCustomVocabularyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a previous export and the associated files stored in an S3
   *          bucket.</p>
   */
  public deleteExport(
    args: DeleteExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExportCommandOutput>;
  public deleteExport(args: DeleteExportCommandInput, cb: (err: any, data?: DeleteExportCommandOutput) => void): void;
  public deleteExport(
    args: DeleteExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExportCommandOutput) => void
  ): void;
  public deleteExport(
    args: DeleteExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteExportCommandOutput) => void),
    cb?: (err: any, data?: DeleteExportCommandOutput) => void
  ): Promise<DeleteExportCommandOutput> | void {
    const command = new DeleteExportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a previous import and the associated file stored in an S3
   *          bucket.</p>
   */
  public deleteImport(
    args: DeleteImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImportCommandOutput>;
  public deleteImport(args: DeleteImportCommandInput, cb: (err: any, data?: DeleteImportCommandOutput) => void): void;
  public deleteImport(
    args: DeleteImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImportCommandOutput) => void
  ): void;
  public deleteImport(
    args: DeleteImportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteImportCommandOutput) => void),
    cb?: (err: any, data?: DeleteImportCommandOutput) => void
  ): Promise<DeleteImportCommandOutput> | void {
    const command = new DeleteImportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the specified intent.</p>
   *          <p>Deleting an intent also deletes the slots associated with the
   *          intent.</p>
   */
  public deleteIntent(
    args: DeleteIntentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntentCommandOutput>;
  public deleteIntent(args: DeleteIntentCommandInput, cb: (err: any, data?: DeleteIntentCommandOutput) => void): void;
  public deleteIntent(
    args: DeleteIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntentCommandOutput) => void
  ): void;
  public deleteIntent(
    args: DeleteIntentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIntentCommandOutput) => void),
    cb?: (err: any, data?: DeleteIntentCommandOutput) => void
  ): Promise<DeleteIntentCommandOutput> | void {
    const command = new DeleteIntentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes an existing policy from a bot or bot alias. If the resource
   *          doesn't have a policy attached, Amazon Lex returns an exception.</p>
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): Promise<DeleteResourcePolicyCommandOutput> | void {
    const command = new DeleteResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a policy statement from a resource policy. If you delete the
   *          last statement from a policy, the policy is deleted. If you specify a
   *          statement ID that doesn't exist in the policy, or if the bot or bot
   *          alias doesn't have a policy attached, Amazon Lex returns an
   *          exception.</p>
   */
  public deleteResourcePolicyStatement(
    args: DeleteResourcePolicyStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyStatementCommandOutput>;
  public deleteResourcePolicyStatement(
    args: DeleteResourcePolicyStatementCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyStatementCommandOutput) => void
  ): void;
  public deleteResourcePolicyStatement(
    args: DeleteResourcePolicyStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyStatementCommandOutput) => void
  ): void;
  public deleteResourcePolicyStatement(
    args: DeleteResourcePolicyStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePolicyStatementCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePolicyStatementCommandOutput) => void
  ): Promise<DeleteResourcePolicyStatementCommandOutput> | void {
    const command = new DeleteResourcePolicyStatementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified slot from an intent.</p>
   */
  public deleteSlot(args: DeleteSlotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSlotCommandOutput>;
  public deleteSlot(args: DeleteSlotCommandInput, cb: (err: any, data?: DeleteSlotCommandOutput) => void): void;
  public deleteSlot(
    args: DeleteSlotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlotCommandOutput) => void
  ): void;
  public deleteSlot(
    args: DeleteSlotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSlotCommandOutput) => void),
    cb?: (err: any, data?: DeleteSlotCommandOutput) => void
  ): Promise<DeleteSlotCommandOutput> | void {
    const command = new DeleteSlotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a slot type from a bot locale.</p>
   *          <p>If a slot is using the slot type, Amazon Lex throws a
   *             <code>ResourceInUseException</code> exception. To avoid the
   *          exception, set the <code>skipResourceInUseCheck</code> parameter to
   *             <code>true</code>.</p>
   */
  public deleteSlotType(
    args: DeleteSlotTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSlotTypeCommandOutput>;
  public deleteSlotType(
    args: DeleteSlotTypeCommandInput,
    cb: (err: any, data?: DeleteSlotTypeCommandOutput) => void
  ): void;
  public deleteSlotType(
    args: DeleteSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlotTypeCommandOutput) => void
  ): void;
  public deleteSlotType(
    args: DeleteSlotTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSlotTypeCommandOutput) => void),
    cb?: (err: any, data?: DeleteSlotTypeCommandOutput) => void
  ): Promise<DeleteSlotTypeCommandOutput> | void {
    const command = new DeleteSlotTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes stored utterances.</p>
   *          <p>Amazon Lex stores the utterances that users send to your bot. Utterances
   *          are stored for 15 days for use with the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_ListAggregatedUtterances.html">ListAggregatedUtterances</a> operation, and
   *          then stored indefinitely for use in improving the ability of your bot
   *          to respond to user input..</p>
   *          <p>Use the <code>DeleteUtterances</code> operation to manually delete
   *          utterances for a specific session. When you use the
   *             <code>DeleteUtterances</code> operation, utterances stored for
   *          improving your bot's ability to respond to user input are deleted
   *          immediately. Utterances stored for use with the
   *             <code>ListAggregatedUtterances</code> operation are deleted after 15
   *          days.</p>
   */
  public deleteUtterances(
    args: DeleteUtterancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUtterancesCommandOutput>;
  public deleteUtterances(
    args: DeleteUtterancesCommandInput,
    cb: (err: any, data?: DeleteUtterancesCommandOutput) => void
  ): void;
  public deleteUtterances(
    args: DeleteUtterancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUtterancesCommandOutput) => void
  ): void;
  public deleteUtterances(
    args: DeleteUtterancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUtterancesCommandOutput) => void),
    cb?: (err: any, data?: DeleteUtterancesCommandOutput) => void
  ): Promise<DeleteUtterancesCommandOutput> | void {
    const command = new DeleteUtterancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides metadata information about a bot. </p>
   */
  public describeBot(args: DescribeBotCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBotCommandOutput>;
  public describeBot(args: DescribeBotCommandInput, cb: (err: any, data?: DescribeBotCommandOutput) => void): void;
  public describeBot(
    args: DescribeBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBotCommandOutput) => void
  ): void;
  public describeBot(
    args: DescribeBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBotCommandOutput) => void),
    cb?: (err: any, data?: DescribeBotCommandOutput) => void
  ): Promise<DescribeBotCommandOutput> | void {
    const command = new DescribeBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get information about a specific bot alias.</p>
   */
  public describeBotAlias(
    args: DescribeBotAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBotAliasCommandOutput>;
  public describeBotAlias(
    args: DescribeBotAliasCommandInput,
    cb: (err: any, data?: DescribeBotAliasCommandOutput) => void
  ): void;
  public describeBotAlias(
    args: DescribeBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBotAliasCommandOutput) => void
  ): void;
  public describeBotAlias(
    args: DescribeBotAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBotAliasCommandOutput) => void),
    cb?: (err: any, data?: DescribeBotAliasCommandOutput) => void
  ): Promise<DescribeBotAliasCommandOutput> | void {
    const command = new DescribeBotAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the settings that a bot has for a specific locale. </p>
   */
  public describeBotLocale(
    args: DescribeBotLocaleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBotLocaleCommandOutput>;
  public describeBotLocale(
    args: DescribeBotLocaleCommandInput,
    cb: (err: any, data?: DescribeBotLocaleCommandOutput) => void
  ): void;
  public describeBotLocale(
    args: DescribeBotLocaleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBotLocaleCommandOutput) => void
  ): void;
  public describeBotLocale(
    args: DescribeBotLocaleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBotLocaleCommandOutput) => void),
    cb?: (err: any, data?: DescribeBotLocaleCommandOutput) => void
  ): Promise<DescribeBotLocaleCommandOutput> | void {
    const command = new DescribeBotLocaleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides metadata information about a bot recommendation. This
   *          information will enable you to get a description on the request inputs,
   *          to download associated transcripts after processing is complete, and to
   *          download intents and slot-types generated by the bot
   *          recommendation.</p>
   */
  public describeBotRecommendation(
    args: DescribeBotRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBotRecommendationCommandOutput>;
  public describeBotRecommendation(
    args: DescribeBotRecommendationCommandInput,
    cb: (err: any, data?: DescribeBotRecommendationCommandOutput) => void
  ): void;
  public describeBotRecommendation(
    args: DescribeBotRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBotRecommendationCommandOutput) => void
  ): void;
  public describeBotRecommendation(
    args: DescribeBotRecommendationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBotRecommendationCommandOutput) => void),
    cb?: (err: any, data?: DescribeBotRecommendationCommandOutput) => void
  ): Promise<DescribeBotRecommendationCommandOutput> | void {
    const command = new DescribeBotRecommendationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides metadata about a version of a bot.</p>
   */
  public describeBotVersion(
    args: DescribeBotVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBotVersionCommandOutput>;
  public describeBotVersion(
    args: DescribeBotVersionCommandInput,
    cb: (err: any, data?: DescribeBotVersionCommandOutput) => void
  ): void;
  public describeBotVersion(
    args: DescribeBotVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBotVersionCommandOutput) => void
  ): void;
  public describeBotVersion(
    args: DescribeBotVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBotVersionCommandOutput) => void),
    cb?: (err: any, data?: DescribeBotVersionCommandOutput) => void
  ): Promise<DescribeBotVersionCommandOutput> | void {
    const command = new DescribeBotVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides metadata information about a custom vocabulary.</p>
   */
  public describeCustomVocabularyMetadata(
    args: DescribeCustomVocabularyMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomVocabularyMetadataCommandOutput>;
  public describeCustomVocabularyMetadata(
    args: DescribeCustomVocabularyMetadataCommandInput,
    cb: (err: any, data?: DescribeCustomVocabularyMetadataCommandOutput) => void
  ): void;
  public describeCustomVocabularyMetadata(
    args: DescribeCustomVocabularyMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomVocabularyMetadataCommandOutput) => void
  ): void;
  public describeCustomVocabularyMetadata(
    args: DescribeCustomVocabularyMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCustomVocabularyMetadataCommandOutput) => void),
    cb?: (err: any, data?: DescribeCustomVocabularyMetadataCommandOutput) => void
  ): Promise<DescribeCustomVocabularyMetadataCommandOutput> | void {
    const command = new DescribeCustomVocabularyMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a specific export.</p>
   */
  public describeExport(
    args: DescribeExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExportCommandOutput>;
  public describeExport(
    args: DescribeExportCommandInput,
    cb: (err: any, data?: DescribeExportCommandOutput) => void
  ): void;
  public describeExport(
    args: DescribeExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExportCommandOutput) => void
  ): void;
  public describeExport(
    args: DescribeExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExportCommandOutput) => void),
    cb?: (err: any, data?: DescribeExportCommandOutput) => void
  ): Promise<DescribeExportCommandOutput> | void {
    const command = new DescribeExportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a specific import.</p>
   */
  public describeImport(
    args: DescribeImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImportCommandOutput>;
  public describeImport(
    args: DescribeImportCommandInput,
    cb: (err: any, data?: DescribeImportCommandOutput) => void
  ): void;
  public describeImport(
    args: DescribeImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImportCommandOutput) => void
  ): void;
  public describeImport(
    args: DescribeImportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeImportCommandOutput) => void),
    cb?: (err: any, data?: DescribeImportCommandOutput) => void
  ): Promise<DescribeImportCommandOutput> | void {
    const command = new DescribeImportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns metadata about an intent.</p>
   */
  public describeIntent(
    args: DescribeIntentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIntentCommandOutput>;
  public describeIntent(
    args: DescribeIntentCommandInput,
    cb: (err: any, data?: DescribeIntentCommandOutput) => void
  ): void;
  public describeIntent(
    args: DescribeIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIntentCommandOutput) => void
  ): void;
  public describeIntent(
    args: DescribeIntentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIntentCommandOutput) => void),
    cb?: (err: any, data?: DescribeIntentCommandOutput) => void
  ): Promise<DescribeIntentCommandOutput> | void {
    const command = new DescribeIntentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the resource policy and policy revision for a bot or bot
   *          alias.</p>
   */
  public describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePolicyCommandOutput>;
  public describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  public describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  public describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): Promise<DescribeResourcePolicyCommandOutput> | void {
    const command = new DescribeResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets metadata information about a slot.</p>
   */
  public describeSlot(
    args: DescribeSlotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSlotCommandOutput>;
  public describeSlot(args: DescribeSlotCommandInput, cb: (err: any, data?: DescribeSlotCommandOutput) => void): void;
  public describeSlot(
    args: DescribeSlotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSlotCommandOutput) => void
  ): void;
  public describeSlot(
    args: DescribeSlotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSlotCommandOutput) => void),
    cb?: (err: any, data?: DescribeSlotCommandOutput) => void
  ): Promise<DescribeSlotCommandOutput> | void {
    const command = new DescribeSlotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets metadata information about a slot type.</p>
   */
  public describeSlotType(
    args: DescribeSlotTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSlotTypeCommandOutput>;
  public describeSlotType(
    args: DescribeSlotTypeCommandInput,
    cb: (err: any, data?: DescribeSlotTypeCommandOutput) => void
  ): void;
  public describeSlotType(
    args: DescribeSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSlotTypeCommandOutput) => void
  ): void;
  public describeSlotType(
    args: DescribeSlotTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSlotTypeCommandOutput) => void),
    cb?: (err: any, data?: DescribeSlotTypeCommandOutput) => void
  ): Promise<DescribeSlotTypeCommandOutput> | void {
    const command = new DescribeSlotTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides a list of utterances that users have sent to the
   *          bot.</p>
   *          <p>Utterances are aggregated by the text of the utterance. For example,
   *          all instances where customers used the phrase "I want to order pizza"
   *          are aggregated into the same line in the response.</p>
   *          <p>You can see both detected utterances and missed utterances. A
   *          detected utterance is where the bot properly recognized the utterance
   *          and activated the associated intent. A missed utterance was not
   *          recognized by the bot and didn't activate an intent.</p>
   *          <p>Utterances can be aggregated for a bot alias or for a bot version,
   *          but not both at the same time.</p>
   *          <p>Utterances statistics are not generated under the following
   *          conditions:</p>
   *          <ul>
   *             <li>
   *                <p>The <code>childDirected</code> field was set to true when the
   *                bot was created.</p>
   *             </li>
   *             <li>
   *                <p>You are using slot obfuscation with one or more slots.</p>
   *             </li>
   *             <li>
   *                <p>You opted out of participating in improving Amazon Lex.</p>
   *             </li>
   *          </ul>
   */
  public listAggregatedUtterances(
    args: ListAggregatedUtterancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAggregatedUtterancesCommandOutput>;
  public listAggregatedUtterances(
    args: ListAggregatedUtterancesCommandInput,
    cb: (err: any, data?: ListAggregatedUtterancesCommandOutput) => void
  ): void;
  public listAggregatedUtterances(
    args: ListAggregatedUtterancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAggregatedUtterancesCommandOutput) => void
  ): void;
  public listAggregatedUtterances(
    args: ListAggregatedUtterancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAggregatedUtterancesCommandOutput) => void),
    cb?: (err: any, data?: ListAggregatedUtterancesCommandOutput) => void
  ): Promise<ListAggregatedUtterancesCommandOutput> | void {
    const command = new ListAggregatedUtterancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of aliases for the specified bot.</p>
   */
  public listBotAliases(
    args: ListBotAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBotAliasesCommandOutput>;
  public listBotAliases(
    args: ListBotAliasesCommandInput,
    cb: (err: any, data?: ListBotAliasesCommandOutput) => void
  ): void;
  public listBotAliases(
    args: ListBotAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotAliasesCommandOutput) => void
  ): void;
  public listBotAliases(
    args: ListBotAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBotAliasesCommandOutput) => void),
    cb?: (err: any, data?: ListBotAliasesCommandOutput) => void
  ): Promise<ListBotAliasesCommandOutput> | void {
    const command = new ListBotAliasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of locales for the specified bot.</p>
   */
  public listBotLocales(
    args: ListBotLocalesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBotLocalesCommandOutput>;
  public listBotLocales(
    args: ListBotLocalesCommandInput,
    cb: (err: any, data?: ListBotLocalesCommandOutput) => void
  ): void;
  public listBotLocales(
    args: ListBotLocalesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotLocalesCommandOutput) => void
  ): void;
  public listBotLocales(
    args: ListBotLocalesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBotLocalesCommandOutput) => void),
    cb?: (err: any, data?: ListBotLocalesCommandOutput) => void
  ): Promise<ListBotLocalesCommandOutput> | void {
    const command = new ListBotLocalesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get a list of bot recommendations that meet the specified
   *          criteria.</p>
   */
  public listBotRecommendations(
    args: ListBotRecommendationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBotRecommendationsCommandOutput>;
  public listBotRecommendations(
    args: ListBotRecommendationsCommandInput,
    cb: (err: any, data?: ListBotRecommendationsCommandOutput) => void
  ): void;
  public listBotRecommendations(
    args: ListBotRecommendationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotRecommendationsCommandOutput) => void
  ): void;
  public listBotRecommendations(
    args: ListBotRecommendationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBotRecommendationsCommandOutput) => void),
    cb?: (err: any, data?: ListBotRecommendationsCommandOutput) => void
  ): Promise<ListBotRecommendationsCommandOutput> | void {
    const command = new ListBotRecommendationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of available bots.</p>
   */
  public listBots(args: ListBotsCommandInput, options?: __HttpHandlerOptions): Promise<ListBotsCommandOutput>;
  public listBots(args: ListBotsCommandInput, cb: (err: any, data?: ListBotsCommandOutput) => void): void;
  public listBots(
    args: ListBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotsCommandOutput) => void
  ): void;
  public listBots(
    args: ListBotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBotsCommandOutput) => void),
    cb?: (err: any, data?: ListBotsCommandOutput) => void
  ): Promise<ListBotsCommandOutput> | void {
    const command = new ListBotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about all of the versions of a bot.</p>
   *          <p>The <code>ListBotVersions</code> operation returns a summary of each
   *          version of a bot. For example, if a bot has three numbered versions,
   *          the <code>ListBotVersions</code> operation returns for summaries, one
   *          for each numbered version and one for the <code>DRAFT</code>
   *          version.</p>
   *          <p>The <code>ListBotVersions</code> operation always returns at least
   *          one version, the <code>DRAFT</code> version.</p>
   */
  public listBotVersions(
    args: ListBotVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBotVersionsCommandOutput>;
  public listBotVersions(
    args: ListBotVersionsCommandInput,
    cb: (err: any, data?: ListBotVersionsCommandOutput) => void
  ): void;
  public listBotVersions(
    args: ListBotVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBotVersionsCommandOutput) => void
  ): void;
  public listBotVersions(
    args: ListBotVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBotVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListBotVersionsCommandOutput) => void
  ): Promise<ListBotVersionsCommandOutput> | void {
    const command = new ListBotVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of built-in intents provided by Amazon Lex that you can use
   *          in your bot. </p>
   *          <p>To use a built-in intent as a the base for your own intent, include
   *          the built-in intent signature in the <code>parentIntentSignature</code>
   *          parameter when you call the <code>CreateIntent</code> operation. For
   *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateIntent.html">CreateIntent</a>.</p>
   */
  public listBuiltInIntents(
    args: ListBuiltInIntentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuiltInIntentsCommandOutput>;
  public listBuiltInIntents(
    args: ListBuiltInIntentsCommandInput,
    cb: (err: any, data?: ListBuiltInIntentsCommandOutput) => void
  ): void;
  public listBuiltInIntents(
    args: ListBuiltInIntentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuiltInIntentsCommandOutput) => void
  ): void;
  public listBuiltInIntents(
    args: ListBuiltInIntentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBuiltInIntentsCommandOutput) => void),
    cb?: (err: any, data?: ListBuiltInIntentsCommandOutput) => void
  ): Promise<ListBuiltInIntentsCommandOutput> | void {
    const command = new ListBuiltInIntentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of built-in slot types that meet the specified
   *          criteria.</p>
   */
  public listBuiltInSlotTypes(
    args: ListBuiltInSlotTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBuiltInSlotTypesCommandOutput>;
  public listBuiltInSlotTypes(
    args: ListBuiltInSlotTypesCommandInput,
    cb: (err: any, data?: ListBuiltInSlotTypesCommandOutput) => void
  ): void;
  public listBuiltInSlotTypes(
    args: ListBuiltInSlotTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuiltInSlotTypesCommandOutput) => void
  ): void;
  public listBuiltInSlotTypes(
    args: ListBuiltInSlotTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBuiltInSlotTypesCommandOutput) => void),
    cb?: (err: any, data?: ListBuiltInSlotTypesCommandOutput) => void
  ): Promise<ListBuiltInSlotTypesCommandOutput> | void {
    const command = new ListBuiltInSlotTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List custom vocabulary items for the specified locale in the
   *          specified bot.</p>
   */
  public listCustomVocabularyItems(
    args: ListCustomVocabularyItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomVocabularyItemsCommandOutput>;
  public listCustomVocabularyItems(
    args: ListCustomVocabularyItemsCommandInput,
    cb: (err: any, data?: ListCustomVocabularyItemsCommandOutput) => void
  ): void;
  public listCustomVocabularyItems(
    args: ListCustomVocabularyItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomVocabularyItemsCommandOutput) => void
  ): void;
  public listCustomVocabularyItems(
    args: ListCustomVocabularyItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCustomVocabularyItemsCommandOutput) => void),
    cb?: (err: any, data?: ListCustomVocabularyItemsCommandOutput) => void
  ): Promise<ListCustomVocabularyItemsCommandOutput> | void {
    const command = new ListCustomVocabularyItemsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the exports for a bot, bot locale, or custom vocabulary.
   *          Exports are kept in the list for 7 days.</p>
   */
  public listExports(args: ListExportsCommandInput, options?: __HttpHandlerOptions): Promise<ListExportsCommandOutput>;
  public listExports(args: ListExportsCommandInput, cb: (err: any, data?: ListExportsCommandOutput) => void): void;
  public listExports(
    args: ListExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;
  public listExports(
    args: ListExportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExportsCommandOutput) => void),
    cb?: (err: any, data?: ListExportsCommandOutput) => void
  ): Promise<ListExportsCommandOutput> | void {
    const command = new ListExportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the imports for a bot, bot locale, or custom vocabulary.
   *          Imports are kept in the list for 7 days.</p>
   */
  public listImports(args: ListImportsCommandInput, options?: __HttpHandlerOptions): Promise<ListImportsCommandOutput>;
  public listImports(args: ListImportsCommandInput, cb: (err: any, data?: ListImportsCommandOutput) => void): void;
  public listImports(
    args: ListImportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;
  public listImports(
    args: ListImportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListImportsCommandOutput) => void),
    cb?: (err: any, data?: ListImportsCommandOutput) => void
  ): Promise<ListImportsCommandOutput> | void {
    const command = new ListImportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get a list of intents that meet the specified criteria.</p>
   */
  public listIntents(args: ListIntentsCommandInput, options?: __HttpHandlerOptions): Promise<ListIntentsCommandOutput>;
  public listIntents(args: ListIntentsCommandInput, cb: (err: any, data?: ListIntentsCommandOutput) => void): void;
  public listIntents(
    args: ListIntentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIntentsCommandOutput) => void
  ): void;
  public listIntents(
    args: ListIntentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIntentsCommandOutput) => void),
    cb?: (err: any, data?: ListIntentsCommandOutput) => void
  ): Promise<ListIntentsCommandOutput> | void {
    const command = new ListIntentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of recommended intents provided by the bot
   *          recommendation that you can use in your bot. Intents in the
   *          response are ordered by relevance.</p>
   */
  public listRecommendedIntents(
    args: ListRecommendedIntentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecommendedIntentsCommandOutput>;
  public listRecommendedIntents(
    args: ListRecommendedIntentsCommandInput,
    cb: (err: any, data?: ListRecommendedIntentsCommandOutput) => void
  ): void;
  public listRecommendedIntents(
    args: ListRecommendedIntentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecommendedIntentsCommandOutput) => void
  ): void;
  public listRecommendedIntents(
    args: ListRecommendedIntentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecommendedIntentsCommandOutput) => void),
    cb?: (err: any, data?: ListRecommendedIntentsCommandOutput) => void
  ): Promise<ListRecommendedIntentsCommandOutput> | void {
    const command = new ListRecommendedIntentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of slots that match the specified criteria.</p>
   */
  public listSlots(args: ListSlotsCommandInput, options?: __HttpHandlerOptions): Promise<ListSlotsCommandOutput>;
  public listSlots(args: ListSlotsCommandInput, cb: (err: any, data?: ListSlotsCommandOutput) => void): void;
  public listSlots(
    args: ListSlotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSlotsCommandOutput) => void
  ): void;
  public listSlots(
    args: ListSlotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSlotsCommandOutput) => void),
    cb?: (err: any, data?: ListSlotsCommandOutput) => void
  ): Promise<ListSlotsCommandOutput> | void {
    const command = new ListSlotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of slot types that match the specified criteria.</p>
   */
  public listSlotTypes(
    args: ListSlotTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSlotTypesCommandOutput>;
  public listSlotTypes(
    args: ListSlotTypesCommandInput,
    cb: (err: any, data?: ListSlotTypesCommandOutput) => void
  ): void;
  public listSlotTypes(
    args: ListSlotTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSlotTypesCommandOutput) => void
  ): void;
  public listSlotTypes(
    args: ListSlotTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSlotTypesCommandOutput) => void),
    cb?: (err: any, data?: ListSlotTypesCommandOutput) => void
  ): Promise<ListSlotTypesCommandOutput> | void {
    const command = new ListSlotTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of tags associated with a resource. Only bots, bot
   *          aliases, and bot channels can have tags associated with them.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Search for associated transcripts that meet the specified
   *          criteria.</p>
   */
  public searchAssociatedTranscripts(
    args: SearchAssociatedTranscriptsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAssociatedTranscriptsCommandOutput>;
  public searchAssociatedTranscripts(
    args: SearchAssociatedTranscriptsCommandInput,
    cb: (err: any, data?: SearchAssociatedTranscriptsCommandOutput) => void
  ): void;
  public searchAssociatedTranscripts(
    args: SearchAssociatedTranscriptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAssociatedTranscriptsCommandOutput) => void
  ): void;
  public searchAssociatedTranscripts(
    args: SearchAssociatedTranscriptsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchAssociatedTranscriptsCommandOutput) => void),
    cb?: (err: any, data?: SearchAssociatedTranscriptsCommandOutput) => void
  ): Promise<SearchAssociatedTranscriptsCommandOutput> | void {
    const command = new SearchAssociatedTranscriptsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Use this to provide your transcript data, and to start the bot
   *          recommendation process.</p>
   */
  public startBotRecommendation(
    args: StartBotRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBotRecommendationCommandOutput>;
  public startBotRecommendation(
    args: StartBotRecommendationCommandInput,
    cb: (err: any, data?: StartBotRecommendationCommandOutput) => void
  ): void;
  public startBotRecommendation(
    args: StartBotRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBotRecommendationCommandOutput) => void
  ): void;
  public startBotRecommendation(
    args: StartBotRecommendationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartBotRecommendationCommandOutput) => void),
    cb?: (err: any, data?: StartBotRecommendationCommandOutput) => void
  ): Promise<StartBotRecommendationCommandOutput> | void {
    const command = new StartBotRecommendationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts importing a bot, bot locale, or custom vocabulary from a zip
   *          archive that you uploaded to an S3 bucket.</p>
   */
  public startImport(args: StartImportCommandInput, options?: __HttpHandlerOptions): Promise<StartImportCommandOutput>;
  public startImport(args: StartImportCommandInput, cb: (err: any, data?: StartImportCommandOutput) => void): void;
  public startImport(
    args: StartImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImportCommandOutput) => void
  ): void;
  public startImport(
    args: StartImportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartImportCommandOutput) => void),
    cb?: (err: any, data?: StartImportCommandOutput) => void
  ): Promise<StartImportCommandOutput> | void {
    const command = new StartImportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stop an already running Bot Recommendation request.</p>
   */
  public stopBotRecommendation(
    args: StopBotRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBotRecommendationCommandOutput>;
  public stopBotRecommendation(
    args: StopBotRecommendationCommandInput,
    cb: (err: any, data?: StopBotRecommendationCommandOutput) => void
  ): void;
  public stopBotRecommendation(
    args: StopBotRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBotRecommendationCommandOutput) => void
  ): void;
  public stopBotRecommendation(
    args: StopBotRecommendationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopBotRecommendationCommandOutput) => void),
    cb?: (err: any, data?: StopBotRecommendationCommandOutput) => void
  ): Promise<StopBotRecommendationCommandOutput> | void {
    const command = new StopBotRecommendationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds the specified tags to the specified resource. If a tag key
   *          already exists, the existing value is replaced with the new
   *          value.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes tags from a bot, bot alias, or bot channel.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the configuration of an existing bot. </p>
   */
  public updateBot(args: UpdateBotCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBotCommandOutput>;
  public updateBot(args: UpdateBotCommandInput, cb: (err: any, data?: UpdateBotCommandOutput) => void): void;
  public updateBot(
    args: UpdateBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBotCommandOutput) => void
  ): void;
  public updateBot(
    args: UpdateBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBotCommandOutput) => void),
    cb?: (err: any, data?: UpdateBotCommandOutput) => void
  ): Promise<UpdateBotCommandOutput> | void {
    const command = new UpdateBotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the configuration of an existing bot alias.</p>
   */
  public updateBotAlias(
    args: UpdateBotAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBotAliasCommandOutput>;
  public updateBotAlias(
    args: UpdateBotAliasCommandInput,
    cb: (err: any, data?: UpdateBotAliasCommandOutput) => void
  ): void;
  public updateBotAlias(
    args: UpdateBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBotAliasCommandOutput) => void
  ): void;
  public updateBotAlias(
    args: UpdateBotAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBotAliasCommandOutput) => void),
    cb?: (err: any, data?: UpdateBotAliasCommandOutput) => void
  ): Promise<UpdateBotAliasCommandOutput> | void {
    const command = new UpdateBotAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the settings that a bot has for a specific locale.</p>
   */
  public updateBotLocale(
    args: UpdateBotLocaleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBotLocaleCommandOutput>;
  public updateBotLocale(
    args: UpdateBotLocaleCommandInput,
    cb: (err: any, data?: UpdateBotLocaleCommandOutput) => void
  ): void;
  public updateBotLocale(
    args: UpdateBotLocaleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBotLocaleCommandOutput) => void
  ): void;
  public updateBotLocale(
    args: UpdateBotLocaleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBotLocaleCommandOutput) => void),
    cb?: (err: any, data?: UpdateBotLocaleCommandOutput) => void
  ): Promise<UpdateBotLocaleCommandOutput> | void {
    const command = new UpdateBotLocaleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing bot recommendation request.</p>
   */
  public updateBotRecommendation(
    args: UpdateBotRecommendationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBotRecommendationCommandOutput>;
  public updateBotRecommendation(
    args: UpdateBotRecommendationCommandInput,
    cb: (err: any, data?: UpdateBotRecommendationCommandOutput) => void
  ): void;
  public updateBotRecommendation(
    args: UpdateBotRecommendationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBotRecommendationCommandOutput) => void
  ): void;
  public updateBotRecommendation(
    args: UpdateBotRecommendationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBotRecommendationCommandOutput) => void),
    cb?: (err: any, data?: UpdateBotRecommendationCommandOutput) => void
  ): Promise<UpdateBotRecommendationCommandOutput> | void {
    const command = new UpdateBotRecommendationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the password used to protect an export zip archive.</p>
   *          <p>The password is not required. If you don't supply a password, Amazon Lex
   *          generates a zip file that is not protected by a password. This is the
   *          archive that is available at the pre-signed S3 URL provided by the
   *             <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeExport.html">DescribeExport</a> operation.</p>
   */
  public updateExport(
    args: UpdateExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExportCommandOutput>;
  public updateExport(args: UpdateExportCommandInput, cb: (err: any, data?: UpdateExportCommandOutput) => void): void;
  public updateExport(
    args: UpdateExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExportCommandOutput) => void
  ): void;
  public updateExport(
    args: UpdateExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateExportCommandOutput) => void),
    cb?: (err: any, data?: UpdateExportCommandOutput) => void
  ): Promise<UpdateExportCommandOutput> | void {
    const command = new UpdateExportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the settings for an intent.</p>
   */
  public updateIntent(
    args: UpdateIntentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntentCommandOutput>;
  public updateIntent(args: UpdateIntentCommandInput, cb: (err: any, data?: UpdateIntentCommandOutput) => void): void;
  public updateIntent(
    args: UpdateIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntentCommandOutput) => void
  ): void;
  public updateIntent(
    args: UpdateIntentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIntentCommandOutput) => void),
    cb?: (err: any, data?: UpdateIntentCommandOutput) => void
  ): Promise<UpdateIntentCommandOutput> | void {
    const command = new UpdateIntentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Replaces the existing resource policy for a bot or bot alias with a
   *          new one. If the policy doesn't exist, Amazon Lex returns an
   *          exception.</p>
   */
  public updateResourcePolicy(
    args: UpdateResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourcePolicyCommandOutput>;
  public updateResourcePolicy(
    args: UpdateResourcePolicyCommandInput,
    cb: (err: any, data?: UpdateResourcePolicyCommandOutput) => void
  ): void;
  public updateResourcePolicy(
    args: UpdateResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourcePolicyCommandOutput) => void
  ): void;
  public updateResourcePolicy(
    args: UpdateResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourcePolicyCommandOutput) => void
  ): Promise<UpdateResourcePolicyCommandOutput> | void {
    const command = new UpdateResourcePolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the settings for a slot.</p>
   */
  public updateSlot(args: UpdateSlotCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSlotCommandOutput>;
  public updateSlot(args: UpdateSlotCommandInput, cb: (err: any, data?: UpdateSlotCommandOutput) => void): void;
  public updateSlot(
    args: UpdateSlotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSlotCommandOutput) => void
  ): void;
  public updateSlot(
    args: UpdateSlotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSlotCommandOutput) => void),
    cb?: (err: any, data?: UpdateSlotCommandOutput) => void
  ): Promise<UpdateSlotCommandOutput> | void {
    const command = new UpdateSlotCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the configuration of an existing slot type.</p>
   */
  public updateSlotType(
    args: UpdateSlotTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSlotTypeCommandOutput>;
  public updateSlotType(
    args: UpdateSlotTypeCommandInput,
    cb: (err: any, data?: UpdateSlotTypeCommandOutput) => void
  ): void;
  public updateSlotType(
    args: UpdateSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSlotTypeCommandOutput) => void
  ): void;
  public updateSlotType(
    args: UpdateSlotTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSlotTypeCommandOutput) => void),
    cb?: (err: any, data?: UpdateSlotTypeCommandOutput) => void
  ): Promise<UpdateSlotTypeCommandOutput> | void {
    const command = new UpdateSlotTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
