import { LexModelsV2Client } from "./LexModelsV2Client";
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
  CreateIntentCommand,
  CreateIntentCommandInput,
  CreateIntentCommandOutput,
} from "./commands/CreateIntentCommand";
import { CreateSlotCommand, CreateSlotCommandInput, CreateSlotCommandOutput } from "./commands/CreateSlotCommand";
import {
  CreateSlotTypeCommand,
  CreateSlotTypeCommandInput,
  CreateSlotTypeCommandOutput,
} from "./commands/CreateSlotTypeCommand";
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
  DeleteIntentCommand,
  DeleteIntentCommandInput,
  DeleteIntentCommandOutput,
} from "./commands/DeleteIntentCommand";
import { DeleteSlotCommand, DeleteSlotCommandInput, DeleteSlotCommandOutput } from "./commands/DeleteSlotCommand";
import {
  DeleteSlotTypeCommand,
  DeleteSlotTypeCommandInput,
  DeleteSlotTypeCommandOutput,
} from "./commands/DeleteSlotTypeCommand";
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
  DescribeBotVersionCommand,
  DescribeBotVersionCommandInput,
  DescribeBotVersionCommandOutput,
} from "./commands/DescribeBotVersionCommand";
import {
  DescribeIntentCommand,
  DescribeIntentCommandInput,
  DescribeIntentCommandOutput,
} from "./commands/DescribeIntentCommand";
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
  ListBotVersionsCommand,
  ListBotVersionsCommandInput,
  ListBotVersionsCommandOutput,
} from "./commands/ListBotVersionsCommand";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "./commands/ListBotsCommand";
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
import { ListIntentsCommand, ListIntentsCommandInput, ListIntentsCommandOutput } from "./commands/ListIntentsCommand";
import {
  ListSlotTypesCommand,
  ListSlotTypesCommandInput,
  ListSlotTypesCommandOutput,
} from "./commands/ListSlotTypesCommand";
import { ListSlotsCommand, ListSlotsCommandInput, ListSlotsCommandOutput } from "./commands/ListSlotsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
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
  UpdateIntentCommand,
  UpdateIntentCommandInput,
  UpdateIntentCommandOutput,
} from "./commands/UpdateIntentCommand";
import { UpdateSlotCommand, UpdateSlotCommandInput, UpdateSlotCommandOutput } from "./commands/UpdateSlotCommand";
import {
  UpdateSlotTypeCommand,
  UpdateSlotTypeCommandInput,
  UpdateSlotTypeCommandOutput,
} from "./commands/UpdateSlotTypeCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p></p>
 */
export class LexModelsV2 extends LexModelsV2Client {
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
   *          use the <a>DeleteBot</a> operation.</p>
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
   *          more information, see <a>CreateIntent</a>.</p>
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
