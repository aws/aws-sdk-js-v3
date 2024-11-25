// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCustomActionRequest, UpdateCustomActionResult } from "../models/models_0";
import { de_UpdateCustomActionCommand, se_UpdateCustomActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCustomActionCommand}.
 */
export interface UpdateCustomActionCommandInput extends UpdateCustomActionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomActionCommand}.
 */
export interface UpdateCustomActionCommandOutput extends UpdateCustomActionResult, __MetadataBearer {}

/**
 * <p>Updates a custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, UpdateCustomActionCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, UpdateCustomActionCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // UpdateCustomActionRequest
 *   CustomActionArn: "STRING_VALUE", // required
 *   Definition: { // CustomActionDefinition
 *     CommandText: "STRING_VALUE", // required
 *   },
 *   AliasName: "STRING_VALUE",
 *   Attachments: [ // CustomActionAttachmentList
 *     { // CustomActionAttachment
 *       NotificationType: "STRING_VALUE",
 *       ButtonText: "STRING_VALUE",
 *       Criteria: [ // CustomActionAttachmentCriteriaList
 *         { // CustomActionAttachmentCriteria
 *           Operator: "HAS_VALUE" || "EQUALS", // required
 *           VariableName: "STRING_VALUE", // required
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *       Variables: { // CustomActionAttachmentVariables
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateCustomActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCustomActionResult
 * //   CustomActionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateCustomActionCommandInput - {@link UpdateCustomActionCommandInput}
 * @returns {@link UpdateCustomActionCommandOutput}
 * @see {@link UpdateCustomActionCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomActionCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We were unable to find the resource for your request</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request was rejected because it doesn't have valid credentials for the target resource.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 * @public
 * @example Update the command definition of an existing action
 * ```javascript
 * // Updates the command text of a custom action without altering the existing alias name or attachment criteria
 * const input = {
 *   "CustomActionArn": "arn:aws:chatbot::1234567890:custom-action/my-custom-action",
 *   "Definition": {
 *     "CommandText": "lambda invoke MyNewFunction"
 *   }
 * };
 * const command = new UpdateCustomActionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CustomActionArn": "arn:aws:chatbot::1234567890:custom-action/my-custom-action"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class UpdateCustomActionCommand extends $Command
  .classBuilder<
    UpdateCustomActionCommandInput,
    UpdateCustomActionCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WheatleyOrchestration_20171011", "UpdateCustomAction", {})
  .n("ChatbotClient", "UpdateCustomActionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCustomActionCommand)
  .de(de_UpdateCustomActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCustomActionRequest;
      output: UpdateCustomActionResult;
    };
    sdk: {
      input: UpdateCustomActionCommandInput;
      output: UpdateCustomActionCommandOutput;
    };
  };
}
