// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBotRequest } from "../models/models_0";
import { DeleteBot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBotCommand}.
 */
export interface DeleteBotCommandInput extends DeleteBotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBotCommand}.
 */
export interface DeleteBotCommandOutput extends __MetadataBearer {}

/**
 * Deletes all versions of the bot, including the `$LATEST` version. To delete a specific version of the bot, use the DeleteBotVersion operation. The `DeleteBot` operation doesn't immediately remove the bot schema. Instead, it is marked for deletion and removed later.
 *
 * Amazon Lex stores utterances indefinitely for improving the ability of your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the utterances, use the DeleteUtterances operation.
 *
 * If a bot has an alias, you can't delete it. Instead, the `DeleteBot` operation returns a `ResourceInUseException` exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the `DeleteBot` operation is successful.
 *
 * This operation requires permissions for the `lex:DeleteBot` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteBotCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteBotCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // DeleteBotRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteBotCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBotCommandInput - {@link DeleteBotCommandInput}
 * @returns {@link DeleteBotCommandOutput}
 * @see {@link DeleteBotCommandInput} for command's `input` shape.
 * @see {@link DeleteBotCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Try your request again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal Amazon Lex error occurred. Try your request again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeded a limit. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource and try again.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource that you are attempting to delete is referred to by another resource. Use this information to remove references to the resource that you are trying to delete.
 *
 * The body of the exception contains a JSON object that describes the resource.
 *
 * `{ "resourceType": BOT | BOTALIAS | BOTCHANNEL | INTENT,`
 *
 * `"resourceReference": {`
 *
 * `"name": string, "version": string } }`
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 *
 * Base exception class for all service exceptions from LexModelBuildingService service.
 *
 * @public
 */
export class DeleteBotCommand extends command<DeleteBotCommandInput, DeleteBotCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBot",
  DeleteBot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBotRequest;
      output: {};
    };
    sdk: {
      input: DeleteBotCommandInput;
      output: DeleteBotCommandOutput;
    };
  };
}
