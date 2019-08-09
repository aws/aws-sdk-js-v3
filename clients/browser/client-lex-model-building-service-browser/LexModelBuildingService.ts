import { LexModelBuildingServiceClient } from "./LexModelBuildingServiceClient";
import { BadRequestException } from "./types/BadRequestException";
import { ConflictException } from "./types/ConflictException";
import { CreateBotVersionInput } from "./types/CreateBotVersionInput";
import { CreateBotVersionOutput } from "./types/CreateBotVersionOutput";
import { CreateIntentVersionInput } from "./types/CreateIntentVersionInput";
import { CreateIntentVersionOutput } from "./types/CreateIntentVersionOutput";
import { CreateSlotTypeVersionInput } from "./types/CreateSlotTypeVersionInput";
import { CreateSlotTypeVersionOutput } from "./types/CreateSlotTypeVersionOutput";
import { DeleteBotAliasInput } from "./types/DeleteBotAliasInput";
import { DeleteBotAliasOutput } from "./types/DeleteBotAliasOutput";
import { DeleteBotChannelAssociationInput } from "./types/DeleteBotChannelAssociationInput";
import { DeleteBotChannelAssociationOutput } from "./types/DeleteBotChannelAssociationOutput";
import { DeleteBotInput } from "./types/DeleteBotInput";
import { DeleteBotOutput } from "./types/DeleteBotOutput";
import { DeleteBotVersionInput } from "./types/DeleteBotVersionInput";
import { DeleteBotVersionOutput } from "./types/DeleteBotVersionOutput";
import { DeleteIntentInput } from "./types/DeleteIntentInput";
import { DeleteIntentOutput } from "./types/DeleteIntentOutput";
import { DeleteIntentVersionInput } from "./types/DeleteIntentVersionInput";
import { DeleteIntentVersionOutput } from "./types/DeleteIntentVersionOutput";
import { DeleteSlotTypeInput } from "./types/DeleteSlotTypeInput";
import { DeleteSlotTypeOutput } from "./types/DeleteSlotTypeOutput";
import { DeleteSlotTypeVersionInput } from "./types/DeleteSlotTypeVersionInput";
import { DeleteSlotTypeVersionOutput } from "./types/DeleteSlotTypeVersionOutput";
import { DeleteUtterancesInput } from "./types/DeleteUtterancesInput";
import { DeleteUtterancesOutput } from "./types/DeleteUtterancesOutput";
import { GetBotAliasInput } from "./types/GetBotAliasInput";
import { GetBotAliasOutput } from "./types/GetBotAliasOutput";
import { GetBotAliasesInput } from "./types/GetBotAliasesInput";
import { GetBotAliasesOutput } from "./types/GetBotAliasesOutput";
import { GetBotChannelAssociationInput } from "./types/GetBotChannelAssociationInput";
import { GetBotChannelAssociationOutput } from "./types/GetBotChannelAssociationOutput";
import { GetBotChannelAssociationsInput } from "./types/GetBotChannelAssociationsInput";
import { GetBotChannelAssociationsOutput } from "./types/GetBotChannelAssociationsOutput";
import { GetBotInput } from "./types/GetBotInput";
import { GetBotOutput } from "./types/GetBotOutput";
import { GetBotVersionsInput } from "./types/GetBotVersionsInput";
import { GetBotVersionsOutput } from "./types/GetBotVersionsOutput";
import { GetBotsInput } from "./types/GetBotsInput";
import { GetBotsOutput } from "./types/GetBotsOutput";
import { GetBuiltinIntentInput } from "./types/GetBuiltinIntentInput";
import { GetBuiltinIntentOutput } from "./types/GetBuiltinIntentOutput";
import { GetBuiltinIntentsInput } from "./types/GetBuiltinIntentsInput";
import { GetBuiltinIntentsOutput } from "./types/GetBuiltinIntentsOutput";
import { GetBuiltinSlotTypesInput } from "./types/GetBuiltinSlotTypesInput";
import { GetBuiltinSlotTypesOutput } from "./types/GetBuiltinSlotTypesOutput";
import { GetExportInput } from "./types/GetExportInput";
import { GetExportOutput } from "./types/GetExportOutput";
import { GetImportInput } from "./types/GetImportInput";
import { GetImportOutput } from "./types/GetImportOutput";
import { GetIntentInput } from "./types/GetIntentInput";
import { GetIntentOutput } from "./types/GetIntentOutput";
import { GetIntentVersionsInput } from "./types/GetIntentVersionsInput";
import { GetIntentVersionsOutput } from "./types/GetIntentVersionsOutput";
import { GetIntentsInput } from "./types/GetIntentsInput";
import { GetIntentsOutput } from "./types/GetIntentsOutput";
import { GetSlotTypeInput } from "./types/GetSlotTypeInput";
import { GetSlotTypeOutput } from "./types/GetSlotTypeOutput";
import { GetSlotTypeVersionsInput } from "./types/GetSlotTypeVersionsInput";
import { GetSlotTypeVersionsOutput } from "./types/GetSlotTypeVersionsOutput";
import { GetSlotTypesInput } from "./types/GetSlotTypesInput";
import { GetSlotTypesOutput } from "./types/GetSlotTypesOutput";
import { GetUtterancesViewInput } from "./types/GetUtterancesViewInput";
import { GetUtterancesViewOutput } from "./types/GetUtterancesViewOutput";
import { InternalFailureException } from "./types/InternalFailureException";
import { LimitExceededException } from "./types/LimitExceededException";
import { NotFoundException } from "./types/NotFoundException";
import { PreconditionFailedException } from "./types/PreconditionFailedException";
import { PutBotAliasInput } from "./types/PutBotAliasInput";
import { PutBotAliasOutput } from "./types/PutBotAliasOutput";
import { PutBotInput } from "./types/PutBotInput";
import { PutBotOutput } from "./types/PutBotOutput";
import { PutIntentInput } from "./types/PutIntentInput";
import { PutIntentOutput } from "./types/PutIntentOutput";
import { PutSlotTypeInput } from "./types/PutSlotTypeInput";
import { PutSlotTypeOutput } from "./types/PutSlotTypeOutput";
import { ResourceInUseException } from "./types/ResourceInUseException";
import { StartImportInput } from "./types/StartImportInput";
import { StartImportOutput } from "./types/StartImportOutput";
import { CreateBotVersionCommand } from "./commands/CreateBotVersionCommand";
import { CreateIntentVersionCommand } from "./commands/CreateIntentVersionCommand";
import { CreateSlotTypeVersionCommand } from "./commands/CreateSlotTypeVersionCommand";
import { DeleteBotAliasCommand } from "./commands/DeleteBotAliasCommand";
import { DeleteBotChannelAssociationCommand } from "./commands/DeleteBotChannelAssociationCommand";
import { DeleteBotCommand } from "./commands/DeleteBotCommand";
import { DeleteBotVersionCommand } from "./commands/DeleteBotVersionCommand";
import { DeleteIntentCommand } from "./commands/DeleteIntentCommand";
import { DeleteIntentVersionCommand } from "./commands/DeleteIntentVersionCommand";
import { DeleteSlotTypeCommand } from "./commands/DeleteSlotTypeCommand";
import { DeleteSlotTypeVersionCommand } from "./commands/DeleteSlotTypeVersionCommand";
import { DeleteUtterancesCommand } from "./commands/DeleteUtterancesCommand";
import { GetBotAliasCommand } from "./commands/GetBotAliasCommand";
import { GetBotAliasesCommand } from "./commands/GetBotAliasesCommand";
import { GetBotChannelAssociationCommand } from "./commands/GetBotChannelAssociationCommand";
import { GetBotChannelAssociationsCommand } from "./commands/GetBotChannelAssociationsCommand";
import { GetBotCommand } from "./commands/GetBotCommand";
import { GetBotVersionsCommand } from "./commands/GetBotVersionsCommand";
import { GetBotsCommand } from "./commands/GetBotsCommand";
import { GetBuiltinIntentCommand } from "./commands/GetBuiltinIntentCommand";
import { GetBuiltinIntentsCommand } from "./commands/GetBuiltinIntentsCommand";
import { GetBuiltinSlotTypesCommand } from "./commands/GetBuiltinSlotTypesCommand";
import { GetExportCommand } from "./commands/GetExportCommand";
import { GetImportCommand } from "./commands/GetImportCommand";
import { GetIntentCommand } from "./commands/GetIntentCommand";
import { GetIntentVersionsCommand } from "./commands/GetIntentVersionsCommand";
import { GetIntentsCommand } from "./commands/GetIntentsCommand";
import { GetSlotTypeCommand } from "./commands/GetSlotTypeCommand";
import { GetSlotTypeVersionsCommand } from "./commands/GetSlotTypeVersionsCommand";
import { GetSlotTypesCommand } from "./commands/GetSlotTypesCommand";
import { GetUtterancesViewCommand } from "./commands/GetUtterancesViewCommand";
import { PutBotAliasCommand } from "./commands/PutBotAliasCommand";
import { PutBotCommand } from "./commands/PutBotCommand";
import { PutIntentCommand } from "./commands/PutIntentCommand";
import { PutSlotTypeCommand } from "./commands/PutSlotTypeCommand";
import { StartImportCommand } from "./commands/StartImportCommand";

export class LexModelBuildingService extends LexModelBuildingServiceClient {
  /**
   * <p>Creates a new version of the bot based on the <code>$LATEST</code> version. If the <code>$LATEST</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version.</p> <note> <p>You can update only the <code>$LATEST</code> version of the bot. You can't update the numbered versions that you create with the <code>CreateBotVersion</code> operation.</p> </note> <p> When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p> This operation requires permission for the <code>lex:CreateBotVersion</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {PreconditionFailedException} <p> The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBotVersion(
    args: CreateBotVersionInput
  ): Promise<CreateBotVersionOutput>;
  public createBotVersion(
    args: CreateBotVersionInput,
    cb: (err: any, data?: CreateBotVersionOutput) => void
  ): void;
  public createBotVersion(
    args: CreateBotVersionInput,
    cb?: (err: any, data?: CreateBotVersionOutput) => void
  ): Promise<CreateBotVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBotVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new version of an intent based on the <code>$LATEST</code> version of the intent. If the <code>$LATEST</code> version of this intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last version you created.</p> <note> <p>You can update only the <code>$LATEST</code> version of the intent. You can't update the numbered versions that you create with the <code>CreateIntentVersion</code> operation.</p> </note> <p> When you create a version of an intent, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p>This operation requires permissions to perform the <code>lex:CreateIntentVersion</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {PreconditionFailedException} <p> The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createIntentVersion(
    args: CreateIntentVersionInput
  ): Promise<CreateIntentVersionOutput>;
  public createIntentVersion(
    args: CreateIntentVersionInput,
    cb: (err: any, data?: CreateIntentVersionOutput) => void
  ): void;
  public createIntentVersion(
    args: CreateIntentVersionInput,
    cb?: (err: any, data?: CreateIntentVersionOutput) => void
  ): Promise<CreateIntentVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateIntentVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new version of a slot type based on the <code>$LATEST</code> version of the specified slot type. If the <code>$LATEST</code> version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a new version. It returns the last version that you created. </p> <note> <p>You can update only the <code>$LATEST</code> version of a slot type. You can't update the numbered versions that you create with the <code>CreateSlotTypeVersion</code> operation.</p> </note> <p>When you create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p>This operation requires permissions for the <code>lex:CreateSlotTypeVersion</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {PreconditionFailedException} <p> The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSlotTypeVersion(
    args: CreateSlotTypeVersionInput
  ): Promise<CreateSlotTypeVersionOutput>;
  public createSlotTypeVersion(
    args: CreateSlotTypeVersionInput,
    cb: (err: any, data?: CreateSlotTypeVersionOutput) => void
  ): void;
  public createSlotTypeVersion(
    args: CreateSlotTypeVersionInput,
    cb?: (err: any, data?: CreateSlotTypeVersionOutput) => void
  ): Promise<CreateSlotTypeVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSlotTypeVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes all versions of the bot, including the <code>$LATEST</code> version. To delete a specific version of the bot, use the <a>DeleteBotVersion</a> operation.</p> <p>If a bot has an alias, you can't delete it. Instead, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the <code>DeleteBot</code> operation is successful.</p> <p>This operation requires permissions for the <code>lex:DeleteBot</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {ResourceInUseException} <p>The resource that you are attempting to delete is referred to by another resource. Use this information to remove references to the resource that you are trying to delete.</p> <p>The body of the exception contains a JSON object that describes the resource.</p> <p> <code>{ "resourceType": BOT | BOTALIAS | BOTCHANNEL | INTENT,</code> </p> <p> <code>"resourceReference": {</code> </p> <p> <code>"name": <i>string</i>, "version": <i>string</i> } }</code> </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBot(args: DeleteBotInput): Promise<DeleteBotOutput>;
  public deleteBot(
    args: DeleteBotInput,
    cb: (err: any, data?: DeleteBotOutput) => void
  ): void;
  public deleteBot(
    args: DeleteBotInput,
    cb?: (err: any, data?: DeleteBotOutput) => void
  ): Promise<DeleteBotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an alias for the specified bot. </p> <p>You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the <code>DeleteBotAlias</code> operation is successful.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {ResourceInUseException} <p>The resource that you are attempting to delete is referred to by another resource. Use this information to remove references to the resource that you are trying to delete.</p> <p>The body of the exception contains a JSON object that describes the resource.</p> <p> <code>{ "resourceType": BOT | BOTALIAS | BOTCHANNEL | INTENT,</code> </p> <p> <code>"resourceReference": {</code> </p> <p> <code>"name": <i>string</i>, "version": <i>string</i> } }</code> </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBotAlias(
    args: DeleteBotAliasInput
  ): Promise<DeleteBotAliasOutput>;
  public deleteBotAlias(
    args: DeleteBotAliasInput,
    cb: (err: any, data?: DeleteBotAliasOutput) => void
  ): void;
  public deleteBotAlias(
    args: DeleteBotAliasInput,
    cb?: (err: any, data?: DeleteBotAliasOutput) => void
  ): Promise<DeleteBotAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBotAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the association between an Amazon Lex bot and a messaging platform.</p> <p>This operation requires permission for the <code>lex:DeleteBotChannelAssociation</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBotChannelAssociation(
    args: DeleteBotChannelAssociationInput
  ): Promise<DeleteBotChannelAssociationOutput>;
  public deleteBotChannelAssociation(
    args: DeleteBotChannelAssociationInput,
    cb: (err: any, data?: DeleteBotChannelAssociationOutput) => void
  ): void;
  public deleteBotChannelAssociation(
    args: DeleteBotChannelAssociationInput,
    cb?: (err: any, data?: DeleteBotChannelAssociationOutput) => void
  ): Promise<DeleteBotChannelAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBotChannelAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specific version of a bot. To delete all versions of a bot, use the <a>DeleteBot</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteBotVersion</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {ResourceInUseException} <p>The resource that you are attempting to delete is referred to by another resource. Use this information to remove references to the resource that you are trying to delete.</p> <p>The body of the exception contains a JSON object that describes the resource.</p> <p> <code>{ "resourceType": BOT | BOTALIAS | BOTCHANNEL | INTENT,</code> </p> <p> <code>"resourceReference": {</code> </p> <p> <code>"name": <i>string</i>, "version": <i>string</i> } }</code> </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBotVersion(
    args: DeleteBotVersionInput
  ): Promise<DeleteBotVersionOutput>;
  public deleteBotVersion(
    args: DeleteBotVersionInput,
    cb: (err: any, data?: DeleteBotVersionOutput) => void
  ): void;
  public deleteBotVersion(
    args: DeleteBotVersionInput,
    cb?: (err: any, data?: DeleteBotVersionOutput) => void
  ): Promise<DeleteBotVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBotVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes all versions of the intent, including the <code>$LATEST</code> version. To delete a specific version of the intent, use the <a>DeleteIntentVersion</a> operation.</p> <p> You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see <a>how-it-works</a>), you must remove those references first. </p> <note> <p> If you get the <code>ResourceInUseException</code> exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to <code>DeleteIntent</code> is successful. </p> </note> <p> This operation requires permission for the <code>lex:DeleteIntent</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {ResourceInUseException} <p>The resource that you are attempting to delete is referred to by another resource. Use this information to remove references to the resource that you are trying to delete.</p> <p>The body of the exception contains a JSON object that describes the resource.</p> <p> <code>{ "resourceType": BOT | BOTALIAS | BOTCHANNEL | INTENT,</code> </p> <p> <code>"resourceReference": {</code> </p> <p> <code>"name": <i>string</i>, "version": <i>string</i> } }</code> </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteIntent(args: DeleteIntentInput): Promise<DeleteIntentOutput>;
  public deleteIntent(
    args: DeleteIntentInput,
    cb: (err: any, data?: DeleteIntentOutput) => void
  ): void;
  public deleteIntent(
    args: DeleteIntentInput,
    cb?: (err: any, data?: DeleteIntentOutput) => void
  ): Promise<DeleteIntentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteIntentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specific version of an intent. To delete all versions of a intent, use the <a>DeleteIntent</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteIntentVersion</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {ResourceInUseException} <p>The resource that you are attempting to delete is referred to by another resource. Use this information to remove references to the resource that you are trying to delete.</p> <p>The body of the exception contains a JSON object that describes the resource.</p> <p> <code>{ "resourceType": BOT | BOTALIAS | BOTCHANNEL | INTENT,</code> </p> <p> <code>"resourceReference": {</code> </p> <p> <code>"name": <i>string</i>, "version": <i>string</i> } }</code> </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteIntentVersion(
    args: DeleteIntentVersionInput
  ): Promise<DeleteIntentVersionOutput>;
  public deleteIntentVersion(
    args: DeleteIntentVersionInput,
    cb: (err: any, data?: DeleteIntentVersionOutput) => void
  ): void;
  public deleteIntentVersion(
    args: DeleteIntentVersionInput,
    cb?: (err: any, data?: DeleteIntentVersionOutput) => void
  ): Promise<DeleteIntentVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteIntentVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes all versions of the slot type, including the <code>$LATEST</code> version. To delete a specific version of the slot type, use the <a>DeleteSlotTypeVersion</a> operation.</p> <p> You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first. </p> <note> <p> If you get the <code>ResourceInUseException</code> exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the <code>DeleteSlotType</code> call is successful. </p> </note> <p>This operation requires permission for the <code>lex:DeleteSlotType</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {ResourceInUseException} <p>The resource that you are attempting to delete is referred to by another resource. Use this information to remove references to the resource that you are trying to delete.</p> <p>The body of the exception contains a JSON object that describes the resource.</p> <p> <code>{ "resourceType": BOT | BOTALIAS | BOTCHANNEL | INTENT,</code> </p> <p> <code>"resourceReference": {</code> </p> <p> <code>"name": <i>string</i>, "version": <i>string</i> } }</code> </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSlotType(
    args: DeleteSlotTypeInput
  ): Promise<DeleteSlotTypeOutput>;
  public deleteSlotType(
    args: DeleteSlotTypeInput,
    cb: (err: any, data?: DeleteSlotTypeOutput) => void
  ): void;
  public deleteSlotType(
    args: DeleteSlotTypeInput,
    cb?: (err: any, data?: DeleteSlotTypeOutput) => void
  ): Promise<DeleteSlotTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSlotTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specific version of a slot type. To delete all versions of a slot type, use the <a>DeleteSlotType</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteSlotTypeVersion</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {ResourceInUseException} <p>The resource that you are attempting to delete is referred to by another resource. Use this information to remove references to the resource that you are trying to delete.</p> <p>The body of the exception contains a JSON object that describes the resource.</p> <p> <code>{ "resourceType": BOT | BOTALIAS | BOTCHANNEL | INTENT,</code> </p> <p> <code>"resourceReference": {</code> </p> <p> <code>"name": <i>string</i>, "version": <i>string</i> } }</code> </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSlotTypeVersion(
    args: DeleteSlotTypeVersionInput
  ): Promise<DeleteSlotTypeVersionOutput>;
  public deleteSlotTypeVersion(
    args: DeleteSlotTypeVersionInput,
    cb: (err: any, data?: DeleteSlotTypeVersionOutput) => void
  ): void;
  public deleteSlotTypeVersion(
    args: DeleteSlotTypeVersionInput,
    cb?: (err: any, data?: DeleteSlotTypeVersionOutput) => void
  ): Promise<DeleteSlotTypeVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSlotTypeVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes stored utterances.</p> <p>Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the <a>GetUtterancesView</a> operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input.</p> <p>Use the <code>DeleteStoredUtterances</code> operation to manually delete stored utterances for a specific user.</p> <p>This operation requires permissions for the <code>lex:DeleteUtterances</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUtterances(
    args: DeleteUtterancesInput
  ): Promise<DeleteUtterancesOutput>;
  public deleteUtterances(
    args: DeleteUtterancesInput,
    cb: (err: any, data?: DeleteUtterancesOutput) => void
  ): void;
  public deleteUtterances(
    args: DeleteUtterancesInput,
    cb?: (err: any, data?: DeleteUtterancesOutput) => void
  ): Promise<DeleteUtterancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUtterancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias. </p> <p> This operation requires permissions for the <code>lex:GetBot</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBot(args: GetBotInput): Promise<GetBotOutput>;
  public getBot(
    args: GetBotInput,
    cb: (err: any, data?: GetBotOutput) => void
  ): void;
  public getBot(
    args: GetBotInput,
    cb?: (err: any, data?: GetBotOutput) => void
  ): Promise<GetBotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about an Amazon Lex bot alias. For more information about aliases, see <a>versioning-aliases</a>.</p> <p>This operation requires permissions for the <code>lex:GetBotAlias</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBotAlias(args: GetBotAliasInput): Promise<GetBotAliasOutput>;
  public getBotAlias(
    args: GetBotAliasInput,
    cb: (err: any, data?: GetBotAliasOutput) => void
  ): void;
  public getBotAlias(
    args: GetBotAliasInput,
    cb?: (err: any, data?: GetBotAliasOutput) => void
  ): Promise<GetBotAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBotAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of aliases for a specified Amazon Lex bot.</p> <p>This operation requires permissions for the <code>lex:GetBotAliases</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBotAliases(args: GetBotAliasesInput): Promise<GetBotAliasesOutput>;
  public getBotAliases(
    args: GetBotAliasesInput,
    cb: (err: any, data?: GetBotAliasesOutput) => void
  ): void;
  public getBotAliases(
    args: GetBotAliasesInput,
    cb?: (err: any, data?: GetBotAliasesOutput) => void
  ): Promise<GetBotAliasesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBotAliasesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the association between an Amazon Lex bot and a messaging platform.</p> <p>This operation requires permissions for the <code>lex:GetBotChannelAssociation</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBotChannelAssociation(
    args: GetBotChannelAssociationInput
  ): Promise<GetBotChannelAssociationOutput>;
  public getBotChannelAssociation(
    args: GetBotChannelAssociationInput,
    cb: (err: any, data?: GetBotChannelAssociationOutput) => void
  ): void;
  public getBotChannelAssociation(
    args: GetBotChannelAssociationInput,
    cb?: (err: any, data?: GetBotChannelAssociationOutput) => void
  ): Promise<GetBotChannelAssociationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBotChannelAssociationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns a list of all of the channels associated with the specified bot. </p> <p>The <code>GetBotChannelAssociations</code> operation requires permissions for the <code>lex:GetBotChannelAssociations</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBotChannelAssociations(
    args: GetBotChannelAssociationsInput
  ): Promise<GetBotChannelAssociationsOutput>;
  public getBotChannelAssociations(
    args: GetBotChannelAssociationsInput,
    cb: (err: any, data?: GetBotChannelAssociationsOutput) => void
  ): void;
  public getBotChannelAssociations(
    args: GetBotChannelAssociationsInput,
    cb?: (err: any, data?: GetBotChannelAssociationsOutput) => void
  ): Promise<GetBotChannelAssociationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBotChannelAssociationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about all of the versions of a bot.</p> <p>The <code>GetBotVersions</code> operation returns a <code>BotMetadata</code> object for each version of a bot. For example, if a bot has three numbered versions, the <code>GetBotVersions</code> operation returns four <code>BotMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetBotVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetBotVersions</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBotVersions(
    args: GetBotVersionsInput
  ): Promise<GetBotVersionsOutput>;
  public getBotVersions(
    args: GetBotVersionsInput,
    cb: (err: any, data?: GetBotVersionsOutput) => void
  ): void;
  public getBotVersions(
    args: GetBotVersionsInput,
    cb?: (err: any, data?: GetBotVersionsOutput) => void
  ): Promise<GetBotVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBotVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns bot information as follows: </p> <ul> <li> <p>If you provide the <code>nameContains</code> field, the response includes information for the <code>$LATEST</code> version of all bots whose name contains the specified string.</p> </li> <li> <p>If you don't specify the <code>nameContains</code> field, the operation returns information about the <code>$LATEST</code> version of all of your bots.</p> </li> </ul> <p>This operation requires permission for the <code>lex:GetBots</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBots(args: GetBotsInput): Promise<GetBotsOutput>;
  public getBots(
    args: GetBotsInput,
    cb: (err: any, data?: GetBotsOutput) => void
  ): void;
  public getBots(
    args: GetBotsInput,
    cb?: (err: any, data?: GetBotsOutput) => void
  ): Promise<GetBotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a built-in intent.</p> <p>This operation requires permission for the <code>lex:GetBuiltinIntent</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBuiltinIntent(
    args: GetBuiltinIntentInput
  ): Promise<GetBuiltinIntentOutput>;
  public getBuiltinIntent(
    args: GetBuiltinIntentInput,
    cb: (err: any, data?: GetBuiltinIntentOutput) => void
  ): void;
  public getBuiltinIntent(
    args: GetBuiltinIntentInput,
    cb?: (err: any, data?: GetBuiltinIntentOutput) => void
  ): Promise<GetBuiltinIntentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBuiltinIntentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of built-in intents that meet the specified criteria.</p> <p>This operation requires permission for the <code>lex:GetBuiltinIntents</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBuiltinIntents(
    args: GetBuiltinIntentsInput
  ): Promise<GetBuiltinIntentsOutput>;
  public getBuiltinIntents(
    args: GetBuiltinIntentsInput,
    cb: (err: any, data?: GetBuiltinIntentsOutput) => void
  ): void;
  public getBuiltinIntents(
    args: GetBuiltinIntentsInput,
    cb?: (err: any, data?: GetBuiltinIntentsOutput) => void
  ): Promise<GetBuiltinIntentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBuiltinIntentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a list of built-in slot types that meet the specified criteria.</p> <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills Kit</i>.</p> <p>This operation requires permission for the <code>lex:GetBuiltInSlotTypes</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBuiltinSlotTypes(
    args: GetBuiltinSlotTypesInput
  ): Promise<GetBuiltinSlotTypesOutput>;
  public getBuiltinSlotTypes(
    args: GetBuiltinSlotTypesInput,
    cb: (err: any, data?: GetBuiltinSlotTypesOutput) => void
  ): void;
  public getBuiltinSlotTypes(
    args: GetBuiltinSlotTypesInput,
    cb?: (err: any, data?: GetBuiltinSlotTypesOutput) => void
  ): Promise<GetBuiltinSlotTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBuiltinSlotTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Exports the contents of a Amazon Lex resource in a specified format. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getExport(args: GetExportInput): Promise<GetExportOutput>;
  public getExport(
    args: GetExportInput,
    cb: (err: any, data?: GetExportOutput) => void
  ): void;
  public getExport(
    args: GetExportInput,
    cb?: (err: any, data?: GetExportOutput) => void
  ): Promise<GetExportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetExportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about an import job started with the <code>StartImport</code> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getImport(args: GetImportInput): Promise<GetImportOutput>;
  public getImport(
    args: GetImportInput,
    cb: (err: any, data?: GetImportOutput) => void
  ): void;
  public getImport(
    args: GetImportInput,
    cb?: (err: any, data?: GetImportOutput) => void
  ): Promise<GetImportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetImportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> Returns information about an intent. In addition to the intent name, you must specify the intent version. </p> <p> This operation requires permissions to perform the <code>lex:GetIntent</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIntent(args: GetIntentInput): Promise<GetIntentOutput>;
  public getIntent(
    args: GetIntentInput,
    cb: (err: any, data?: GetIntentOutput) => void
  ): void;
  public getIntent(
    args: GetIntentInput,
    cb?: (err: any, data?: GetIntentOutput) => void
  ): Promise<GetIntentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIntentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about all of the versions of an intent.</p> <p>The <code>GetIntentVersions</code> operation returns an <code>IntentMetadata</code> object for each version of an intent. For example, if an intent has three numbered versions, the <code>GetIntentVersions</code> operation returns four <code>IntentMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetIntentVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetIntentVersions</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIntentVersions(
    args: GetIntentVersionsInput
  ): Promise<GetIntentVersionsOutput>;
  public getIntentVersions(
    args: GetIntentVersionsInput,
    cb: (err: any, data?: GetIntentVersionsOutput) => void
  ): void;
  public getIntentVersions(
    args: GetIntentVersionsInput,
    cb?: (err: any, data?: GetIntentVersionsOutput) => void
  ): Promise<GetIntentVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIntentVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns intent information as follows: </p> <ul> <li> <p>If you specify the <code>nameContains</code> field, returns the <code>$LATEST</code> version of all intents that contain the specified string.</p> </li> <li> <p> If you don't specify the <code>nameContains</code> field, returns information about the <code>$LATEST</code> version of all intents. </p> </li> </ul> <p> The operation requires permission for the <code>lex:GetIntents</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIntents(args: GetIntentsInput): Promise<GetIntentsOutput>;
  public getIntents(
    args: GetIntentsInput,
    cb: (err: any, data?: GetIntentsOutput) => void
  ): void;
  public getIntents(
    args: GetIntentsInput,
    cb?: (err: any, data?: GetIntentsOutput) => void
  ): Promise<GetIntentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIntentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version.</p> <p>This operation requires permissions for the <code>lex:GetSlotType</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSlotType(args: GetSlotTypeInput): Promise<GetSlotTypeOutput>;
  public getSlotType(
    args: GetSlotTypeInput,
    cb: (err: any, data?: GetSlotTypeOutput) => void
  ): void;
  public getSlotType(
    args: GetSlotTypeInput,
    cb?: (err: any, data?: GetSlotTypeOutput) => void
  ): Promise<GetSlotTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSlotTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about all versions of a slot type.</p> <p>The <code>GetSlotTypeVersions</code> operation returns a <code>SlotTypeMetadata</code> object for each version of a slot type. For example, if a slot type has three numbered versions, the <code>GetSlotTypeVersions</code> operation returns four <code>SlotTypeMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetSlotTypeVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetSlotTypeVersions</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSlotTypeVersions(
    args: GetSlotTypeVersionsInput
  ): Promise<GetSlotTypeVersionsOutput>;
  public getSlotTypeVersions(
    args: GetSlotTypeVersionsInput,
    cb: (err: any, data?: GetSlotTypeVersionsOutput) => void
  ): void;
  public getSlotTypeVersions(
    args: GetSlotTypeVersionsInput,
    cb?: (err: any, data?: GetSlotTypeVersionsOutput) => void
  ): Promise<GetSlotTypeVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSlotTypeVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns slot type information as follows: </p> <ul> <li> <p>If you specify the <code>nameContains</code> field, returns the <code>$LATEST</code> version of all slot types that contain the specified string.</p> </li> <li> <p> If you don't specify the <code>nameContains</code> field, returns information about the <code>$LATEST</code> version of all slot types. </p> </li> </ul> <p> The operation requires permission for the <code>lex:GetSlotTypes</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource and try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSlotTypes(args: GetSlotTypesInput): Promise<GetSlotTypesOutput>;
  public getSlotTypes(
    args: GetSlotTypesInput,
    cb: (err: any, data?: GetSlotTypesOutput) => void
  ): void;
  public getSlotTypes(
    args: GetSlotTypesInput,
    cb?: (err: any, data?: GetSlotTypesOutput) => void
  ): Promise<GetSlotTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSlotTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Use the <code>GetUtterancesView</code> operation to get information about the utterances that your users have made to your bot. You can use this list to tune the utterances that your bot responds to.</p> <p>For example, say that you have created a bot to order flowers. After your users have used your bot for a while, use the <code>GetUtterancesView</code> operation to see the requests that they have made and whether they have been successful. You might find that the utterance "I want flowers" is not being recognized. You could add this utterance to the <code>OrderFlowers</code> intent so that your bot recognizes that utterance.</p> <p>After you publish a new version of a bot, you can get information about the old version and the new so that you can compare the performance across the two versions. </p> <note> <p>Utterance statistics are generated once a day. Data is available for the last 15 days. You can request information for up to 5 versions in each request. The response contains information about a maximum of 100 utterances for each version.</p> </note> <p>This operation requires permissions for the <code>lex:GetUtterancesView</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUtterancesView(
    args: GetUtterancesViewInput
  ): Promise<GetUtterancesViewOutput>;
  public getUtterancesView(
    args: GetUtterancesViewInput,
    cb: (err: any, data?: GetUtterancesViewOutput) => void
  ): void;
  public getUtterancesView(
    args: GetUtterancesViewInput,
    cb?: (err: any, data?: GetUtterancesViewOutput) => void
  ): Promise<GetUtterancesViewOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUtterancesViewCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum information, the bot is created or updated but Amazon Lex returns the <code/> response <code>FAILED</code>. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see <a>how-it-works</a>. </p> <p>If you specify the name of an existing bot, the fields in the request replace the existing values in the <code>$LATEST</code> version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the <code>idleTTLInSeconds</code> and <code>privacySettings</code> fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception.</p> <p>This operation requires permissions for the <code>lex:PutBot</code> action. For more information, see <a>auth-and-access-control</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {PreconditionFailedException} <p> The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBot(args: PutBotInput): Promise<PutBotOutput>;
  public putBot(
    args: PutBotInput,
    cb: (err: any, data?: PutBotOutput) => void
  ): void;
  public putBot(
    args: PutBotInput,
    cb?: (err: any, data?: PutBotOutput) => void
  ): Promise<PutBotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see <a>versioning-aliases</a>.</p> <p>This operation requires permissions for the <code>lex:PutBotAlias</code> action. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {PreconditionFailedException} <p> The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBotAlias(args: PutBotAliasInput): Promise<PutBotAliasOutput>;
  public putBotAlias(
    args: PutBotAliasInput,
    cb: (err: any, data?: PutBotAliasOutput) => void
  ): void;
  public putBotAlias(
    args: PutBotAliasInput,
    cb?: (err: any, data?: PutBotAliasOutput) => void
  ): Promise<PutBotAliasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBotAliasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an intent or replaces an existing intent.</p> <p>To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an <code>OrderPizza</code> intent. </p> <p>To create an intent or replace an existing intent, you must provide the following:</p> <ul> <li> <p>Intent name. For example, <code>OrderPizza</code>.</p> </li> <li> <p>Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza."</p> </li> <li> <p>Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza.</p> </li> <li> <p>How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application. </p> </li> </ul> <p>You can specify other optional information in the request, such as:</p> <ul> <li> <p>A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent has been fulfilled. For example, "I placed your pizza order."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, asking "Do you want to order a drink with your pizza?"</p> </li> </ul> <p>If you specify an existing intent name to update the intent, Amazon Lex replaces the values in the <code>$LATEST</code> version of the intent with the values in the request. Amazon Lex removes fields that you don't provide in the request. If you don't specify the required fields, Amazon Lex throws an exception. When you update the <code>$LATEST</code> version of an intent, the <code>status</code> field of any bot that uses the <code>$LATEST</code> version of the intent is set to <code>NOT_BUILT</code>.</p> <p>For more information, see <a>how-it-works</a>.</p> <p>This operation requires permissions for the <code>lex:PutIntent</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {PreconditionFailedException} <p> The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putIntent(args: PutIntentInput): Promise<PutIntentOutput>;
  public putIntent(
    args: PutIntentInput,
    cb: (err: any, data?: PutIntentOutput) => void
  ): void;
  public putIntent(
    args: PutIntentInput,
    cb?: (err: any, data?: PutIntentOutput) => void
  ): Promise<PutIntentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutIntentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a custom slot type or replaces an existing custom slot type.</p> <p>To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see <a>how-it-works</a>.</p> <p>If you specify the name of an existing slot type, the fields in the request replace the existing values in the <code>$LATEST</code> version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. When you update the <code>$LATEST</code> version of a slot type, if a bot uses the <code>$LATEST</code> version of an intent that contains the slot type, the bot's <code>status</code> field is set to <code>NOT_BUILT</code>.</p> <p>This operation requires permissions for the <code>lex:PutSlotType</code> action.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConflictException} <p> There was a conflict processing the request. Try your request again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {PreconditionFailedException} <p> The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putSlotType(args: PutSlotTypeInput): Promise<PutSlotTypeOutput>;
  public putSlotType(
    args: PutSlotTypeInput,
    cb: (err: any, data?: PutSlotTypeOutput) => void
  ): void;
  public putSlotType(
    args: PutSlotTypeInput,
    cb?: (err: any, data?: PutSlotTypeOutput) => void
  ): Promise<PutSlotTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutSlotTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a job to import a resource to Amazon Lex.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal Amazon Lex error occurred. Try your request again.</p>
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startImport(args: StartImportInput): Promise<StartImportOutput>;
  public startImport(
    args: StartImportInput,
    cb: (err: any, data?: StartImportOutput) => void
  ): void;
  public startImport(
    args: StartImportInput,
    cb?: (err: any, data?: StartImportOutput) => void
  ): Promise<StartImportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartImportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
