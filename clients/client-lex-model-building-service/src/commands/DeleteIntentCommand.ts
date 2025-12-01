// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import type { DeleteIntentRequest } from "../models/models_0";
import { DeleteIntent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIntentCommand}.
 */
export interface DeleteIntentCommandInput extends DeleteIntentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIntentCommand}.
 */
export interface DeleteIntentCommandOutput extends __MetadataBearer {}

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
 *          <p> This operation requires permission for the
 *         <code>lex:DeleteIntent</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteIntentCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteIntentCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // DeleteIntentRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteIntentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIntentCommandInput - {@link DeleteIntentCommandInput}
 * @returns {@link DeleteIntentCommandOutput}
 * @see {@link DeleteIntentCommandInput} for command's `input` shape.
 * @see {@link DeleteIntentCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict processing the request. Try your request
 *       again. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are attempting to delete is referred to by
 *       another resource. Use this information to remove references to the
 *       resource that you are trying to delete.</p>
 *          <p>The body of the exception contains a JSON object that describes the
 *       resource.</p>
 *          <p>
 *             <code>{ "resourceType": BOT | BOTALIAS | BOTCHANNEL |
 *         INTENT,</code>
 *          </p>
 *          <p>
 *             <code>"resourceReference": {</code>
 *          </p>
 *          <p>
 *             <code>"name": <i>string</i>, "version":
 *           <i>string</i> } }</code>
 *          </p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 *
 * @public
 */
export class DeleteIntentCommand extends $Command
  .classBuilder<
    DeleteIntentCommandInput,
    DeleteIntentCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "DeleteIntent", {})
  .n("LexModelBuildingServiceClient", "DeleteIntentCommand")
  .sc(DeleteIntent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntentRequest;
      output: {};
    };
    sdk: {
      input: DeleteIntentCommandInput;
      output: DeleteIntentCommandOutput;
    };
  };
}
