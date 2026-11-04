// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIntentVersionRequest } from "../models/models_0";
import { DeleteIntentVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIntentVersionCommand}.
 */
export interface DeleteIntentVersionCommandInput extends DeleteIntentVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIntentVersionCommand}.
 */
export interface DeleteIntentVersionCommandOutput extends __MetadataBearer {}

/**
 * Deletes a specific version of an intent. To delete all versions of a intent, use the DeleteIntent operation.
 *
 * This operation requires permissions for the `lex:DeleteIntentVersion` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteIntentVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteIntentVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // DeleteIntentVersionRequest
 *   name: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 * };
 * const command = new DeleteIntentVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIntentVersionCommandInput - {@link DeleteIntentVersionCommandInput}
 * @returns {@link DeleteIntentVersionCommandOutput}
 * @see {@link DeleteIntentVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteIntentVersionCommandOutput} for command's `response` shape.
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
export class DeleteIntentVersionCommand extends command<DeleteIntentVersionCommandInput, DeleteIntentVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIntentVersion",
  DeleteIntentVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntentVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteIntentVersionCommandInput;
      output: DeleteIntentVersionCommandOutput;
    };
  };
}
