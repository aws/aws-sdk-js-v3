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
import type { DeleteBotVersionRequest } from "../models/models_0";
import { DeleteBotVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a specific version of a bot. To delete all versions of a
 *       bot, use the <a>DeleteBot</a> operation. </p>
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteBotVersion</code> action.</p>
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
export class DeleteBotVersionCommand extends $Command
  .classBuilder<
    DeleteBotVersionCommandInput,
    DeleteBotVersionCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "DeleteBotVersion", {})
  .n("LexModelBuildingServiceClient", "DeleteBotVersionCommand")
  .sc(DeleteBotVersion$)
  .build() {
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
