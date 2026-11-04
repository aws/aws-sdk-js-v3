// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBotVersionRequest } from "../models/models_0";
import { DeleteBotVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBotVersionCommand}.
 */
export interface DeleteBotVersionCommandInput extends DeleteBotVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBotVersionCommand}.
 */
export interface DeleteBotVersionCommandOutput extends __MetadataBearer {}

/**
 * Deletes a specific version of a bot. To delete all versions of a bot, use the DeleteBot operation.
 *
 * This operation requires permissions for the `lex:DeleteBotVersion` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteBotVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteBotVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // DeleteBotVersionRequest
 *   name: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 * };
 * const command = new DeleteBotVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBotVersionCommandInput - {@link DeleteBotVersionCommandInput}
 * @returns {@link DeleteBotVersionCommandOutput}
 * @see {@link DeleteBotVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteBotVersionCommandOutput} for command's `response` shape.
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
export class DeleteBotVersionCommand extends command<DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBotVersion",
  DeleteBotVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBotVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteBotVersionCommandInput;
      output: DeleteBotVersionCommandOutput;
    };
  };
}
