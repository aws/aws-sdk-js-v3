// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { LexModelBuildingServiceClient } from "./LexModelBuildingServiceClient";

/**
 * <fullname>Amazon Lex Build-Time Actions</fullname>
 *          <p> Amazon Lex is an AWS service for building conversational voice and text
 *       interfaces. Use these actions to create, update, and delete conversational
 *       bots for new and existing client applications. </p>
 */
export class LexModelBuildingService extends LexModelBuildingServiceClient {
  /**
   * <p>Creates a new version of the bot based on the <code>$LATEST</code>
   *       version. If the <code>$LATEST</code> version of this resource hasn't
   *       changed since you created the last version, Amazon Lex doesn't create a new
   *       version. It returns the last created version.</p>
   *          <note>
   *             <p>You can update only the <code>$LATEST</code> version of the bot.
   *         You can't update the numbered versions that you create with the
   *           <code>CreateBotVersion</code> operation.</p>
   *          </note>
   *          <p> When you create the first version of a bot, Amazon Lex sets the version
   *       to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
   *          <p> This operation requires permission for the
   *         <code>lex:CreateBotVersion</code> action. </p>
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
   * <p>Creates a new version of an intent based on the
   *         <code>$LATEST</code> version of the intent. If the <code>$LATEST</code>
   *       version of this intent hasn't changed since you last updated it, Amazon Lex
   *       doesn't create a new version. It returns the last version you
   *       created.</p>
   *          <note>
   *             <p>You can update only the <code>$LATEST</code> version of the
   *         intent. You can't update the numbered versions that you create with the
   *           <code>CreateIntentVersion</code> operation.</p>
   *          </note>
   *          <p> When you create a version of an intent, Amazon Lex sets the version to
   *       1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
   *          <p>This operation requires permissions to perform the
   *         <code>lex:CreateIntentVersion</code> action. </p>
   */
  public createIntentVersion(
    args: CreateIntentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntentVersionCommandOutput>;
  public createIntentVersion(
    args: CreateIntentVersionCommandInput,
    cb: (err: any, data?: CreateIntentVersionCommandOutput) => void
  ): void;
  public createIntentVersion(
    args: CreateIntentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntentVersionCommandOutput) => void
  ): void;
  public createIntentVersion(
    args: CreateIntentVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIntentVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateIntentVersionCommandOutput) => void
  ): Promise<CreateIntentVersionCommandOutput> | void {
    const command = new CreateIntentVersionCommand(args);
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
   * <p>Creates a new version of a slot type based on the
   *         <code>$LATEST</code> version of the specified slot type. If the
   *         <code>$LATEST</code> version of this resource has not changed since the
   *       last version that you created, Amazon Lex doesn't create a new version. It
   *       returns the last version that you created. </p>
   *          <note>
   *             <p>You can update only the <code>$LATEST</code> version of a slot
   *         type. You can't update the numbered versions that you create with the
   *           <code>CreateSlotTypeVersion</code> operation.</p>
   *          </note>
   *
   *          <p>When you create a version of a slot type, Amazon Lex sets the version to
   *       1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
   *
   *          <p>This operation requires permissions for the
   *         <code>lex:CreateSlotTypeVersion</code> action.</p>
   */
  public createSlotTypeVersion(
    args: CreateSlotTypeVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSlotTypeVersionCommandOutput>;
  public createSlotTypeVersion(
    args: CreateSlotTypeVersionCommandInput,
    cb: (err: any, data?: CreateSlotTypeVersionCommandOutput) => void
  ): void;
  public createSlotTypeVersion(
    args: CreateSlotTypeVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSlotTypeVersionCommandOutput) => void
  ): void;
  public createSlotTypeVersion(
    args: CreateSlotTypeVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSlotTypeVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateSlotTypeVersionCommandOutput) => void
  ): Promise<CreateSlotTypeVersionCommandOutput> | void {
    const command = new CreateSlotTypeVersionCommand(args);
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
   * <p>Deletes all versions of the bot, including the <code>$LATEST</code>
   *       version. To delete a specific version of the bot, use the <a>DeleteBotVersion</a> operation. The <code>DeleteBot</code>
   *       operation doesn't immediately remove the bot schema. Instead, it is marked
   *       for deletion and removed later.</p>
   *          <p>Amazon Lex stores utterances indefinitely for improving the ability of
   *       your bot to respond to user inputs. These utterances are not removed when
   *       the bot is deleted. To remove the utterances, use the <a>DeleteUtterances</a> operation.</p>
   *          <p>If a bot has an alias, you can't delete it. Instead, the
   *         <code>DeleteBot</code> operation returns a
   *         <code>ResourceInUseException</code> exception that includes a reference
   *       to the alias that refers to the bot. To remove the reference to the bot,
   *       delete the alias. If you get the same exception again, delete the
   *       referring alias until the <code>DeleteBot</code> operation is
   *       successful.</p>
   *
   *          <p>This operation requires permissions for the
   *         <code>lex:DeleteBot</code> action.</p>
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
   * <p>Deletes an alias for the specified bot. </p>
   *          <p>You can't delete an alias that is used in the association between a
   *       bot and a messaging channel. If an alias is used in a channel association,
   *       the <code>DeleteBot</code> operation returns a
   *         <code>ResourceInUseException</code> exception that includes a reference
   *       to the channel association that refers to the bot. You can remove the
   *       reference to the alias by deleting the channel association. If you get the
   *       same exception again, delete the referring association until the
   *         <code>DeleteBotAlias</code> operation is successful.</p>
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
   * <p>Deletes the association between an Amazon Lex bot and a messaging
   *       platform.</p>
   *          <p>This operation requires permission for the
   *         <code>lex:DeleteBotChannelAssociation</code> action.</p>
   */
  public deleteBotChannelAssociation(
    args: DeleteBotChannelAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBotChannelAssociationCommandOutput>;
  public deleteBotChannelAssociation(
    args: DeleteBotChannelAssociationCommandInput,
    cb: (err: any, data?: DeleteBotChannelAssociationCommandOutput) => void
  ): void;
  public deleteBotChannelAssociation(
    args: DeleteBotChannelAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBotChannelAssociationCommandOutput) => void
  ): void;
  public deleteBotChannelAssociation(
    args: DeleteBotChannelAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBotChannelAssociationCommandOutput) => void),
    cb?: (err: any, data?: DeleteBotChannelAssociationCommandOutput) => void
  ): Promise<DeleteBotChannelAssociationCommandOutput> | void {
    const command = new DeleteBotChannelAssociationCommand(args);
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
   * <p>Deletes a specific version of a bot. To delete all versions of a
   *       bot, use the <a>DeleteBot</a> operation. </p>
   *          <p>This operation requires permissions for the
   *         <code>lex:DeleteBotVersion</code> action.</p>
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
   * <p>Deletes all versions of the intent, including the
   *         <code>$LATEST</code> version. To delete a specific version of the
   *       intent, use the <a>DeleteIntentVersion</a> operation.</p>
   *          <p> You can delete a version of an intent only if it is not
   *       referenced. To delete an intent that is referred to in one or more bots
   *       (see <a>how-it-works</a>), you must remove those references
   *       first. </p>
   *          <note>
   *             <p> If you get the <code>ResourceInUseException</code> exception, it
   *         provides an example reference that shows where the intent is referenced.
   *         To remove the reference to the intent, either update the bot or delete
   *         it. If you get the same exception when you attempt to delete the intent
   *         again, repeat until the intent has no references and the call to
   *           <code>DeleteIntent</code> is successful. </p>
   *          </note>
   *
   *          <p> This operation requires permission for the
   *         <code>lex:DeleteIntent</code> action. </p>
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
   * <p>Deletes a specific version of an intent. To delete all versions of
   *       a intent, use the <a>DeleteIntent</a> operation. </p>
   *          <p>This operation requires permissions for the
   *         <code>lex:DeleteIntentVersion</code> action.</p>
   */
  public deleteIntentVersion(
    args: DeleteIntentVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntentVersionCommandOutput>;
  public deleteIntentVersion(
    args: DeleteIntentVersionCommandInput,
    cb: (err: any, data?: DeleteIntentVersionCommandOutput) => void
  ): void;
  public deleteIntentVersion(
    args: DeleteIntentVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntentVersionCommandOutput) => void
  ): void;
  public deleteIntentVersion(
    args: DeleteIntentVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIntentVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteIntentVersionCommandOutput) => void
  ): Promise<DeleteIntentVersionCommandOutput> | void {
    const command = new DeleteIntentVersionCommand(args);
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
   * <p>Deletes all versions of the slot type, including the
   *         <code>$LATEST</code> version. To delete a specific version of the slot
   *       type, use the <a>DeleteSlotTypeVersion</a> operation.</p>
   *          <p> You can delete a version of a slot type only if it is not
   *       referenced. To delete a slot type that is referred to in one or more
   *       intents, you must remove those references first. </p>
   *          <note>
   *             <p> If you get the <code>ResourceInUseException</code> exception,
   *         the exception provides an example reference that shows the intent where
   *         the slot type is referenced. To remove the reference to the slot type,
   *         either update the intent or delete it. If you get the same exception
   *         when you attempt to delete the slot type again, repeat until the slot
   *         type has no references and the <code>DeleteSlotType</code> call is
   *         successful. </p>
   *          </note>
   *          <p>This operation requires permission for the
   *         <code>lex:DeleteSlotType</code> action.</p>
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
   * <p>Deletes a specific version of a slot type. To delete all versions
   *       of a slot type, use the <a>DeleteSlotType</a> operation. </p>
   *          <p>This operation requires permissions for the
   *         <code>lex:DeleteSlotTypeVersion</code> action.</p>
   */
  public deleteSlotTypeVersion(
    args: DeleteSlotTypeVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSlotTypeVersionCommandOutput>;
  public deleteSlotTypeVersion(
    args: DeleteSlotTypeVersionCommandInput,
    cb: (err: any, data?: DeleteSlotTypeVersionCommandOutput) => void
  ): void;
  public deleteSlotTypeVersion(
    args: DeleteSlotTypeVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSlotTypeVersionCommandOutput) => void
  ): void;
  public deleteSlotTypeVersion(
    args: DeleteSlotTypeVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSlotTypeVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteSlotTypeVersionCommandOutput) => void
  ): Promise<DeleteSlotTypeVersionCommandOutput> | void {
    const command = new DeleteSlotTypeVersionCommand(args);
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
   *       are stored for 15 days for use with the <a>GetUtterancesView</a> operation, and then stored indefinitely for use in improving the
   *       ability of your bot to respond to user input.</p>
   *          <p>Use the <code>DeleteUtterances</code> operation to manually delete
   *       stored utterances for a specific user. When you use the
   *         <code>DeleteUtterances</code> operation, utterances stored for improving
   *       your bot's ability to respond to user input are deleted immediately.
   *       Utterances stored for use with the <code>GetUtterancesView</code>
   *       operation are deleted after 15 days.</p>
   *          <p>This operation requires permissions for the
   *         <code>lex:DeleteUtterances</code> action.</p>
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
   * <p>Returns metadata information for a specific bot. You must provide
   *       the bot name and the bot version or alias. </p>
   *          <p> This operation requires permissions for the
   *         <code>lex:GetBot</code> action. </p>
   */
  public getBot(args: GetBotCommandInput, options?: __HttpHandlerOptions): Promise<GetBotCommandOutput>;
  public getBot(args: GetBotCommandInput, cb: (err: any, data?: GetBotCommandOutput) => void): void;
  public getBot(
    args: GetBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotCommandOutput) => void
  ): void;
  public getBot(
    args: GetBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBotCommandOutput) => void),
    cb?: (err: any, data?: GetBotCommandOutput) => void
  ): Promise<GetBotCommandOutput> | void {
    const command = new GetBotCommand(args);
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
   * <p>Returns information about an Amazon Lex bot alias. For more information
   *       about aliases, see <a>versioning-aliases</a>.</p>
   *          <p>This operation requires permissions for the
   *         <code>lex:GetBotAlias</code> action.</p>
   */
  public getBotAlias(args: GetBotAliasCommandInput, options?: __HttpHandlerOptions): Promise<GetBotAliasCommandOutput>;
  public getBotAlias(args: GetBotAliasCommandInput, cb: (err: any, data?: GetBotAliasCommandOutput) => void): void;
  public getBotAlias(
    args: GetBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotAliasCommandOutput) => void
  ): void;
  public getBotAlias(
    args: GetBotAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBotAliasCommandOutput) => void),
    cb?: (err: any, data?: GetBotAliasCommandOutput) => void
  ): Promise<GetBotAliasCommandOutput> | void {
    const command = new GetBotAliasCommand(args);
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
   * <p>Returns a list of aliases for a specified Amazon Lex bot.</p>
   *          <p>This operation requires permissions for the
   *         <code>lex:GetBotAliases</code> action.</p>
   */
  public getBotAliases(
    args: GetBotAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBotAliasesCommandOutput>;
  public getBotAliases(
    args: GetBotAliasesCommandInput,
    cb: (err: any, data?: GetBotAliasesCommandOutput) => void
  ): void;
  public getBotAliases(
    args: GetBotAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotAliasesCommandOutput) => void
  ): void;
  public getBotAliases(
    args: GetBotAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBotAliasesCommandOutput) => void),
    cb?: (err: any, data?: GetBotAliasesCommandOutput) => void
  ): Promise<GetBotAliasesCommandOutput> | void {
    const command = new GetBotAliasesCommand(args);
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
   * <p>Returns information about the association between an Amazon Lex bot and
   *       a messaging platform.</p>
   *          <p>This operation requires permissions for the
   *         <code>lex:GetBotChannelAssociation</code> action.</p>
   */
  public getBotChannelAssociation(
    args: GetBotChannelAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBotChannelAssociationCommandOutput>;
  public getBotChannelAssociation(
    args: GetBotChannelAssociationCommandInput,
    cb: (err: any, data?: GetBotChannelAssociationCommandOutput) => void
  ): void;
  public getBotChannelAssociation(
    args: GetBotChannelAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotChannelAssociationCommandOutput) => void
  ): void;
  public getBotChannelAssociation(
    args: GetBotChannelAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBotChannelAssociationCommandOutput) => void),
    cb?: (err: any, data?: GetBotChannelAssociationCommandOutput) => void
  ): Promise<GetBotChannelAssociationCommandOutput> | void {
    const command = new GetBotChannelAssociationCommand(args);
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
   * <p> Returns a list of all of the channels associated with the
   *       specified bot. </p>
   *          <p>The <code>GetBotChannelAssociations</code> operation requires
   *       permissions for the <code>lex:GetBotChannelAssociations</code>
   *       action.</p>
   */
  public getBotChannelAssociations(
    args: GetBotChannelAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBotChannelAssociationsCommandOutput>;
  public getBotChannelAssociations(
    args: GetBotChannelAssociationsCommandInput,
    cb: (err: any, data?: GetBotChannelAssociationsCommandOutput) => void
  ): void;
  public getBotChannelAssociations(
    args: GetBotChannelAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotChannelAssociationsCommandOutput) => void
  ): void;
  public getBotChannelAssociations(
    args: GetBotChannelAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBotChannelAssociationsCommandOutput) => void),
    cb?: (err: any, data?: GetBotChannelAssociationsCommandOutput) => void
  ): Promise<GetBotChannelAssociationsCommandOutput> | void {
    const command = new GetBotChannelAssociationsCommand(args);
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
   * <p>Returns bot information as follows: </p>
   *          <ul>
   *             <li>
   *                <p>If you provide the <code>nameContains</code> field, the
   *           response includes information for the <code>$LATEST</code> version of
   *           all bots whose name contains the specified string.</p>
   *             </li>
   *             <li>
   *                <p>If you don't specify the <code>nameContains</code> field, the
   *           operation returns information about the <code>$LATEST</code> version
   *           of all of your bots.</p>
   *             </li>
   *          </ul>
   *          <p>This operation requires permission for the <code>lex:GetBots</code>
   *       action.</p>
   */
  public getBots(args: GetBotsCommandInput, options?: __HttpHandlerOptions): Promise<GetBotsCommandOutput>;
  public getBots(args: GetBotsCommandInput, cb: (err: any, data?: GetBotsCommandOutput) => void): void;
  public getBots(
    args: GetBotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotsCommandOutput) => void
  ): void;
  public getBots(
    args: GetBotsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBotsCommandOutput) => void),
    cb?: (err: any, data?: GetBotsCommandOutput) => void
  ): Promise<GetBotsCommandOutput> | void {
    const command = new GetBotsCommand(args);
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
   *          <p>The <code>GetBotVersions</code> operation returns a
   *         <code>BotMetadata</code> object for each version of a bot. For example,
   *       if a bot has three numbered versions, the <code>GetBotVersions</code>
   *       operation returns four <code>BotMetadata</code> objects in the response,
   *       one for each numbered version and one for the <code>$LATEST</code>
   *       version. </p>
   *          <p>The <code>GetBotVersions</code> operation always returns at least
   *       one version, the <code>$LATEST</code> version.</p>
   *          <p>This operation requires permissions for the
   *         <code>lex:GetBotVersions</code> action.</p>
   */
  public getBotVersions(
    args: GetBotVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBotVersionsCommandOutput>;
  public getBotVersions(
    args: GetBotVersionsCommandInput,
    cb: (err: any, data?: GetBotVersionsCommandOutput) => void
  ): void;
  public getBotVersions(
    args: GetBotVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBotVersionsCommandOutput) => void
  ): void;
  public getBotVersions(
    args: GetBotVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBotVersionsCommandOutput) => void),
    cb?: (err: any, data?: GetBotVersionsCommandOutput) => void
  ): Promise<GetBotVersionsCommandOutput> | void {
    const command = new GetBotVersionsCommand(args);
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
   * <p>Returns information about a built-in intent.</p>
   *          <p>This operation requires permission for the
   *         <code>lex:GetBuiltinIntent</code> action.</p>
   */
  public getBuiltinIntent(
    args: GetBuiltinIntentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBuiltinIntentCommandOutput>;
  public getBuiltinIntent(
    args: GetBuiltinIntentCommandInput,
    cb: (err: any, data?: GetBuiltinIntentCommandOutput) => void
  ): void;
  public getBuiltinIntent(
    args: GetBuiltinIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBuiltinIntentCommandOutput) => void
  ): void;
  public getBuiltinIntent(
    args: GetBuiltinIntentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBuiltinIntentCommandOutput) => void),
    cb?: (err: any, data?: GetBuiltinIntentCommandOutput) => void
  ): Promise<GetBuiltinIntentCommandOutput> | void {
    const command = new GetBuiltinIntentCommand(args);
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
   * <p>Gets a list of built-in intents that meet the specified
   *       criteria.</p>
   *          <p>This operation requires permission for the
   *         <code>lex:GetBuiltinIntents</code> action.</p>
   */
  public getBuiltinIntents(
    args: GetBuiltinIntentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBuiltinIntentsCommandOutput>;
  public getBuiltinIntents(
    args: GetBuiltinIntentsCommandInput,
    cb: (err: any, data?: GetBuiltinIntentsCommandOutput) => void
  ): void;
  public getBuiltinIntents(
    args: GetBuiltinIntentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBuiltinIntentsCommandOutput) => void
  ): void;
  public getBuiltinIntents(
    args: GetBuiltinIntentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBuiltinIntentsCommandOutput) => void),
    cb?: (err: any, data?: GetBuiltinIntentsCommandOutput) => void
  ): Promise<GetBuiltinIntentsCommandOutput> | void {
    const command = new GetBuiltinIntentsCommand(args);
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
   *       criteria.</p>
   *          <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   *
   *          <p>This operation requires permission for the
   *         <code>lex:GetBuiltInSlotTypes</code> action.</p>
   */
  public getBuiltinSlotTypes(
    args: GetBuiltinSlotTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBuiltinSlotTypesCommandOutput>;
  public getBuiltinSlotTypes(
    args: GetBuiltinSlotTypesCommandInput,
    cb: (err: any, data?: GetBuiltinSlotTypesCommandOutput) => void
  ): void;
  public getBuiltinSlotTypes(
    args: GetBuiltinSlotTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBuiltinSlotTypesCommandOutput) => void
  ): void;
  public getBuiltinSlotTypes(
    args: GetBuiltinSlotTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBuiltinSlotTypesCommandOutput) => void),
    cb?: (err: any, data?: GetBuiltinSlotTypesCommandOutput) => void
  ): Promise<GetBuiltinSlotTypesCommandOutput> | void {
    const command = new GetBuiltinSlotTypesCommand(args);
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
   * <p>Exports the contents of a Amazon Lex resource in a specified format.
   *     </p>
   */
  public getExport(args: GetExportCommandInput, options?: __HttpHandlerOptions): Promise<GetExportCommandOutput>;
  public getExport(args: GetExportCommandInput, cb: (err: any, data?: GetExportCommandOutput) => void): void;
  public getExport(
    args: GetExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportCommandOutput) => void
  ): void;
  public getExport(
    args: GetExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExportCommandOutput) => void),
    cb?: (err: any, data?: GetExportCommandOutput) => void
  ): Promise<GetExportCommandOutput> | void {
    const command = new GetExportCommand(args);
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
   * <p>Gets information about an import job started with the
   *         <code>StartImport</code> operation.</p>
   */
  public getImport(args: GetImportCommandInput, options?: __HttpHandlerOptions): Promise<GetImportCommandOutput>;
  public getImport(args: GetImportCommandInput, cb: (err: any, data?: GetImportCommandOutput) => void): void;
  public getImport(
    args: GetImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportCommandOutput) => void
  ): void;
  public getImport(
    args: GetImportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetImportCommandOutput) => void),
    cb?: (err: any, data?: GetImportCommandOutput) => void
  ): Promise<GetImportCommandOutput> | void {
    const command = new GetImportCommand(args);
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
   * <p> Returns information about an intent. In addition to the intent
   *       name, you must specify the intent version. </p>
   *          <p> This operation requires permissions to perform the
   *         <code>lex:GetIntent</code> action. </p>
   */
  public getIntent(args: GetIntentCommandInput, options?: __HttpHandlerOptions): Promise<GetIntentCommandOutput>;
  public getIntent(args: GetIntentCommandInput, cb: (err: any, data?: GetIntentCommandOutput) => void): void;
  public getIntent(
    args: GetIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntentCommandOutput) => void
  ): void;
  public getIntent(
    args: GetIntentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIntentCommandOutput) => void),
    cb?: (err: any, data?: GetIntentCommandOutput) => void
  ): Promise<GetIntentCommandOutput> | void {
    const command = new GetIntentCommand(args);
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
   * <p>Returns intent information as follows: </p>
   *          <ul>
   *             <li>
   *                <p>If you specify the <code>nameContains</code> field, returns the
   *             <code>$LATEST</code> version of all intents that contain the
   *           specified string.</p>
   *             </li>
   *             <li>
   *                <p> If you don't specify the <code>nameContains</code> field,
   *           returns information about the <code>$LATEST</code> version of all
   *           intents. </p>
   *             </li>
   *          </ul>
   *          <p> The operation requires permission for the
   *         <code>lex:GetIntents</code> action. </p>
   */
  public getIntents(args: GetIntentsCommandInput, options?: __HttpHandlerOptions): Promise<GetIntentsCommandOutput>;
  public getIntents(args: GetIntentsCommandInput, cb: (err: any, data?: GetIntentsCommandOutput) => void): void;
  public getIntents(
    args: GetIntentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntentsCommandOutput) => void
  ): void;
  public getIntents(
    args: GetIntentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIntentsCommandOutput) => void),
    cb?: (err: any, data?: GetIntentsCommandOutput) => void
  ): Promise<GetIntentsCommandOutput> | void {
    const command = new GetIntentsCommand(args);
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
   * <p>Gets information about all of the versions of an intent.</p>
   *          <p>The <code>GetIntentVersions</code> operation returns an
   *         <code>IntentMetadata</code> object for each version of an intent. For
   *       example, if an intent has three numbered versions, the
   *         <code>GetIntentVersions</code> operation returns four
   *         <code>IntentMetadata</code> objects in the response, one for each
   *       numbered version and one for the <code>$LATEST</code> version. </p>
   *          <p>The <code>GetIntentVersions</code> operation always returns at
   *       least one version, the <code>$LATEST</code> version.</p>
   *          <p>This operation requires permissions for the
   *         <code>lex:GetIntentVersions</code> action.</p>
   */
  public getIntentVersions(
    args: GetIntentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntentVersionsCommandOutput>;
  public getIntentVersions(
    args: GetIntentVersionsCommandInput,
    cb: (err: any, data?: GetIntentVersionsCommandOutput) => void
  ): void;
  public getIntentVersions(
    args: GetIntentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntentVersionsCommandOutput) => void
  ): void;
  public getIntentVersions(
    args: GetIntentVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIntentVersionsCommandOutput) => void),
    cb?: (err: any, data?: GetIntentVersionsCommandOutput) => void
  ): Promise<GetIntentVersionsCommandOutput> | void {
    const command = new GetIntentVersionsCommand(args);
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
   * <p>Provides details about an ongoing or complete migration from an
   *       Amazon Lex V1 bot to an Amazon Lex V2 bot. Use this operation to view the migration
   *       alerts and warnings related to the migration.</p>
   */
  public getMigration(
    args: GetMigrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMigrationCommandOutput>;
  public getMigration(args: GetMigrationCommandInput, cb: (err: any, data?: GetMigrationCommandOutput) => void): void;
  public getMigration(
    args: GetMigrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMigrationCommandOutput) => void
  ): void;
  public getMigration(
    args: GetMigrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMigrationCommandOutput) => void),
    cb?: (err: any, data?: GetMigrationCommandOutput) => void
  ): Promise<GetMigrationCommandOutput> | void {
    const command = new GetMigrationCommand(args);
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
   * <p>Gets a list of migrations between Amazon Lex V1 and Amazon Lex V2.</p>
   */
  public getMigrations(
    args: GetMigrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMigrationsCommandOutput>;
  public getMigrations(
    args: GetMigrationsCommandInput,
    cb: (err: any, data?: GetMigrationsCommandOutput) => void
  ): void;
  public getMigrations(
    args: GetMigrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMigrationsCommandOutput) => void
  ): void;
  public getMigrations(
    args: GetMigrationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMigrationsCommandOutput) => void),
    cb?: (err: any, data?: GetMigrationsCommandOutput) => void
  ): Promise<GetMigrationsCommandOutput> | void {
    const command = new GetMigrationsCommand(args);
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
   * <p>Returns information about a specific version of a slot type. In
   *       addition to specifying the slot type name, you must specify the slot type
   *       version.</p>
   *          <p>This operation requires permissions for the
   *         <code>lex:GetSlotType</code> action.</p>
   */
  public getSlotType(args: GetSlotTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetSlotTypeCommandOutput>;
  public getSlotType(args: GetSlotTypeCommandInput, cb: (err: any, data?: GetSlotTypeCommandOutput) => void): void;
  public getSlotType(
    args: GetSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSlotTypeCommandOutput) => void
  ): void;
  public getSlotType(
    args: GetSlotTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSlotTypeCommandOutput) => void),
    cb?: (err: any, data?: GetSlotTypeCommandOutput) => void
  ): Promise<GetSlotTypeCommandOutput> | void {
    const command = new GetSlotTypeCommand(args);
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
   * <p>Returns slot type information as follows: </p>
   *          <ul>
   *             <li>
   *                <p>If you specify the <code>nameContains</code> field, returns the
   *             <code>$LATEST</code> version of all slot types that contain the
   *           specified string.</p>
   *             </li>
   *             <li>
   *                <p> If you don't specify the <code>nameContains</code> field,
   *           returns information about the <code>$LATEST</code> version of all slot
   *           types. </p>
   *             </li>
   *          </ul>
   *          <p> The operation requires permission for the
   *         <code>lex:GetSlotTypes</code> action. </p>
   */
  public getSlotTypes(
    args: GetSlotTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSlotTypesCommandOutput>;
  public getSlotTypes(args: GetSlotTypesCommandInput, cb: (err: any, data?: GetSlotTypesCommandOutput) => void): void;
  public getSlotTypes(
    args: GetSlotTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSlotTypesCommandOutput) => void
  ): void;
  public getSlotTypes(
    args: GetSlotTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSlotTypesCommandOutput) => void),
    cb?: (err: any, data?: GetSlotTypesCommandOutput) => void
  ): Promise<GetSlotTypesCommandOutput> | void {
    const command = new GetSlotTypesCommand(args);
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
   * <p>Gets information about all versions of a slot type.</p>
   *          <p>The <code>GetSlotTypeVersions</code> operation returns a
   *         <code>SlotTypeMetadata</code> object for each version of a slot type.
   *       For example, if a slot type has three numbered versions, the
   *         <code>GetSlotTypeVersions</code> operation returns four
   *         <code>SlotTypeMetadata</code> objects in the response, one for each
   *       numbered version and one for the <code>$LATEST</code> version. </p>
   *          <p>The <code>GetSlotTypeVersions</code> operation always returns at
   *       least one version, the <code>$LATEST</code> version.</p>
   *          <p>This operation requires permissions for the
   *         <code>lex:GetSlotTypeVersions</code> action.</p>
   */
  public getSlotTypeVersions(
    args: GetSlotTypeVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSlotTypeVersionsCommandOutput>;
  public getSlotTypeVersions(
    args: GetSlotTypeVersionsCommandInput,
    cb: (err: any, data?: GetSlotTypeVersionsCommandOutput) => void
  ): void;
  public getSlotTypeVersions(
    args: GetSlotTypeVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSlotTypeVersionsCommandOutput) => void
  ): void;
  public getSlotTypeVersions(
    args: GetSlotTypeVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSlotTypeVersionsCommandOutput) => void),
    cb?: (err: any, data?: GetSlotTypeVersionsCommandOutput) => void
  ): Promise<GetSlotTypeVersionsCommandOutput> | void {
    const command = new GetSlotTypeVersionsCommand(args);
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
   * <p>Use the <code>GetUtterancesView</code> operation to get information
   *       about the utterances that your users have made to your bot. You can use
   *       this list to tune the utterances that your bot responds to.</p>
   *          <p>For example, say that you have created a bot to order flowers.
   *       After your users have used your bot for a while, use the
   *         <code>GetUtterancesView</code> operation to see the requests that they
   *       have made and whether they have been successful. You might find that the
   *       utterance "I want flowers" is not being recognized. You could add this
   *       utterance to the <code>OrderFlowers</code> intent so that your bot
   *       recognizes that utterance.</p>
   *          <p>After you publish a new version of a bot, you can get information
   *       about the old version and the new so that you can compare the performance
   *       across the two versions. </p>
   *          <p>Utterance statistics are generated once a day. Data is available
   *       for the last 15 days. You can request information for up to 5 versions of
   *       your bot in each request. Amazon Lex returns the most frequent utterances
   *       received by the bot in the last 15 days. The response contains information
   *       about a maximum of 100 utterances for each version.</p>
   *          <p>If you set <code>childDirected</code> field to true when you
   *       created your bot, if you are using slot obfuscation with one or more
   *       slots, or if you opted out of participating in improving Amazon Lex, utterances
   *       are not available.</p>
   *          <p>This operation requires permissions for the
   *         <code>lex:GetUtterancesView</code> action.</p>
   */
  public getUtterancesView(
    args: GetUtterancesViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUtterancesViewCommandOutput>;
  public getUtterancesView(
    args: GetUtterancesViewCommandInput,
    cb: (err: any, data?: GetUtterancesViewCommandOutput) => void
  ): void;
  public getUtterancesView(
    args: GetUtterancesViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUtterancesViewCommandOutput) => void
  ): void;
  public getUtterancesView(
    args: GetUtterancesViewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUtterancesViewCommandOutput) => void),
    cb?: (err: any, data?: GetUtterancesViewCommandOutput) => void
  ): Promise<GetUtterancesViewCommandOutput> | void {
    const command = new GetUtterancesViewCommand(args);
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
   * <p>Gets a list of tags associated with the specified resource. Only bots,
   *       bot aliases, and bot channels can have tags associated with them.</p>
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
   * <p>Creates an Amazon Lex conversational bot or replaces an existing bot.
   *       When you create or update a bot you are only required to specify a name, a
   *       locale, and whether the bot is directed toward children under age 13. You
   *       can use this to add intents later, or to remove intents from an existing
   *       bot. When you create a bot with the minimum information, the bot is
   *       created or updated but Amazon Lex returns the <code></code> response
   *         <code>FAILED</code>. You can build the bot after you add one or more
   *       intents. For more information about Amazon Lex bots, see <a>how-it-works</a>. </p>
   *          <p>If you specify the name of an existing bot, the fields in the
   *       request replace the existing values in the <code>$LATEST</code> version of
   *       the bot. Amazon Lex removes any fields that you don't provide values for in the
   *       request, except for the <code>idleTTLInSeconds</code> and
   *         <code>privacySettings</code> fields, which are set to their default
   *       values. If you don't specify values for required fields, Amazon Lex throws an
   *       exception.</p>
   *
   *          <p>This operation requires permissions for the <code>lex:PutBot</code>
   *       action. For more information, see <a>security-iam</a>.</p>
   */
  public putBot(args: PutBotCommandInput, options?: __HttpHandlerOptions): Promise<PutBotCommandOutput>;
  public putBot(args: PutBotCommandInput, cb: (err: any, data?: PutBotCommandOutput) => void): void;
  public putBot(
    args: PutBotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBotCommandOutput) => void
  ): void;
  public putBot(
    args: PutBotCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutBotCommandOutput) => void),
    cb?: (err: any, data?: PutBotCommandOutput) => void
  ): Promise<PutBotCommandOutput> | void {
    const command = new PutBotCommand(args);
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
   * <p>Creates an alias for the specified version of the bot or replaces
   *       an alias for the specified bot. To change the version of the bot that the
   *       alias points to, replace the alias. For more information about aliases,
   *       see <a>versioning-aliases</a>.</p>
   *          <p>This operation requires permissions for the
   *         <code>lex:PutBotAlias</code> action. </p>
   */
  public putBotAlias(args: PutBotAliasCommandInput, options?: __HttpHandlerOptions): Promise<PutBotAliasCommandOutput>;
  public putBotAlias(args: PutBotAliasCommandInput, cb: (err: any, data?: PutBotAliasCommandOutput) => void): void;
  public putBotAlias(
    args: PutBotAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBotAliasCommandOutput) => void
  ): void;
  public putBotAlias(
    args: PutBotAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutBotAliasCommandOutput) => void),
    cb?: (err: any, data?: PutBotAliasCommandOutput) => void
  ): Promise<PutBotAliasCommandOutput> | void {
    const command = new PutBotAliasCommand(args);
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
   * <p>Creates an intent or replaces an existing intent.</p>
   *          <p>To define the interaction between the user and your bot, you use
   *       one or more intents. For a pizza ordering bot, for example, you would
   *       create an <code>OrderPizza</code> intent. </p>
   *          <p>To create an intent or replace an existing intent, you must provide
   *       the following:</p>
   *          <ul>
   *             <li>
   *                <p>Intent name. For example, <code>OrderPizza</code>.</p>
   *             </li>
   *             <li>
   *                <p>Sample utterances. For example, "Can I order a pizza, please."
   *           and "I want to order a pizza."</p>
   *             </li>
   *             <li>
   *                <p>Information to be gathered. You specify slot types for the
   *           information that your bot will request from the user. You can specify
   *           standard slot types, such as a date or a time, or custom slot types
   *           such as the size and crust of a pizza.</p>
   *             </li>
   *             <li>
   *                <p>How the intent will be fulfilled. You can provide a Lambda
   *           function or configure the intent to return the intent information to
   *           the client application. If you use a Lambda function, when all of the
   *           intent information is available, Amazon Lex invokes your Lambda function.
   *           If you configure your intent to return the intent information to the
   *           client application. </p>
   *             </li>
   *          </ul>
   *          <p>You can specify other optional information in the request, such
   *       as:</p>
   *
   *          <ul>
   *             <li>
   *                <p>A confirmation prompt to ask the user to confirm an intent. For
   *           example, "Shall I order your pizza?"</p>
   *             </li>
   *             <li>
   *                <p>A conclusion statement to send to the user after the intent has
   *           been fulfilled. For example, "I placed your pizza order."</p>
   *             </li>
   *             <li>
   *                <p>A follow-up prompt that asks the user for additional activity.
   *           For example, asking "Do you want to order a drink with your
   *           pizza?"</p>
   *             </li>
   *          </ul>
   *          <p>If you specify an existing intent name to update the intent, Amazon Lex
   *       replaces the values in the <code>$LATEST</code> version of the intent with
   *       the values in the request. Amazon Lex removes fields that you don't provide in
   *       the request. If you don't specify the required fields, Amazon Lex throws an
   *       exception. When you update the <code>$LATEST</code> version of an intent,
   *       the <code>status</code> field of any bot that uses the
   *         <code>$LATEST</code> version of the intent is set to
   *         <code>NOT_BUILT</code>.</p>
   *          <p>For more information, see <a>how-it-works</a>.</p>
   *          <p>This operation requires permissions for the
   *         <code>lex:PutIntent</code> action.</p>
   */
  public putIntent(args: PutIntentCommandInput, options?: __HttpHandlerOptions): Promise<PutIntentCommandOutput>;
  public putIntent(args: PutIntentCommandInput, cb: (err: any, data?: PutIntentCommandOutput) => void): void;
  public putIntent(
    args: PutIntentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntentCommandOutput) => void
  ): void;
  public putIntent(
    args: PutIntentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutIntentCommandOutput) => void),
    cb?: (err: any, data?: PutIntentCommandOutput) => void
  ): Promise<PutIntentCommandOutput> | void {
    const command = new PutIntentCommand(args);
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
   * <p>Creates a custom slot type or replaces an existing custom slot
   *       type.</p>
   *          <p>To create a custom slot type, specify a name for the slot type and
   *       a set of enumeration values, which are the values that a slot of this type
   *       can assume. For more information, see <a>how-it-works</a>.</p>
   *          <p>If you specify the name of an existing slot type, the fields in the
   *       request replace the existing values in the <code>$LATEST</code> version of
   *       the slot type. Amazon Lex removes the fields that you don't provide in the
   *       request. If you don't specify required fields, Amazon Lex throws an exception.
   *       When you update the <code>$LATEST</code> version of a slot type, if a bot
   *       uses the <code>$LATEST</code> version of an intent that contains the slot
   *       type, the bot's <code>status</code> field is set to
   *       <code>NOT_BUILT</code>.</p>
   *
   *          <p>This operation requires permissions for the
   *         <code>lex:PutSlotType</code> action.</p>
   */
  public putSlotType(args: PutSlotTypeCommandInput, options?: __HttpHandlerOptions): Promise<PutSlotTypeCommandOutput>;
  public putSlotType(args: PutSlotTypeCommandInput, cb: (err: any, data?: PutSlotTypeCommandOutput) => void): void;
  public putSlotType(
    args: PutSlotTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSlotTypeCommandOutput) => void
  ): void;
  public putSlotType(
    args: PutSlotTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSlotTypeCommandOutput) => void),
    cb?: (err: any, data?: PutSlotTypeCommandOutput) => void
  ): Promise<PutSlotTypeCommandOutput> | void {
    const command = new PutSlotTypeCommand(args);
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
   * <p>Starts a job to import a resource to Amazon Lex.</p>
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
   * <p>Starts migrating a bot from Amazon Lex V1 to Amazon Lex V2. Migrate your bot when
   *       you want to take advantage of the new features of Amazon Lex V2.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/migrate.html">Migrating a bot</a> in the <i>Amazon Lex
   *         developer guide</i>.</p>
   */
  public startMigration(
    args: StartMigrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMigrationCommandOutput>;
  public startMigration(
    args: StartMigrationCommandInput,
    cb: (err: any, data?: StartMigrationCommandOutput) => void
  ): void;
  public startMigration(
    args: StartMigrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMigrationCommandOutput) => void
  ): void;
  public startMigration(
    args: StartMigrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMigrationCommandOutput) => void),
    cb?: (err: any, data?: StartMigrationCommandOutput) => void
  ): Promise<StartMigrationCommandOutput> | void {
    const command = new StartMigrationCommand(args);
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
   *       already exists, the existing value is replaced with the new value.</p>
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
   * <p>Removes tags from a bot, bot alias or bot channel.</p>
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
}
