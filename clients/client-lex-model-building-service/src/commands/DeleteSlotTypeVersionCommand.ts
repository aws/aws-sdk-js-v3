// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { DeleteSlotTypeVersionRequest } from "../models/models_0";
import { de_DeleteSlotTypeVersionCommand, se_DeleteSlotTypeVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSlotTypeVersionCommand}.
 */
export interface DeleteSlotTypeVersionCommandInput extends DeleteSlotTypeVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSlotTypeVersionCommand}.
 */
export interface DeleteSlotTypeVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a specific version of a slot type. To delete all versions
 *       of a slot type, use the <a>DeleteSlotType</a> operation. </p>
 *          <p>This operation requires permissions for the
 *         <code>lex:DeleteSlotTypeVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteSlotTypeVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteSlotTypeVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // DeleteSlotTypeVersionRequest
 *   name: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 * };
 * const command = new DeleteSlotTypeVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSlotTypeVersionCommandInput - {@link DeleteSlotTypeVersionCommandInput}
 * @returns {@link DeleteSlotTypeVersionCommandOutput}
 * @see {@link DeleteSlotTypeVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteSlotTypeVersionCommandOutput} for command's `response` shape.
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
export class DeleteSlotTypeVersionCommand extends $Command
  .classBuilder<
    DeleteSlotTypeVersionCommandInput,
    DeleteSlotTypeVersionCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseModelBuildingService", "DeleteSlotTypeVersion", {})
  .n("LexModelBuildingServiceClient", "DeleteSlotTypeVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSlotTypeVersionCommand)
  .de(de_DeleteSlotTypeVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSlotTypeVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteSlotTypeVersionCommandInput;
      output: DeleteSlotTypeVersionCommandOutput;
    };
  };
}
