// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetCustomActionRequest, GetCustomActionResult } from "../models/models_0";
import { GetCustomAction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCustomActionCommand}.
 */
export interface GetCustomActionCommandInput extends GetCustomActionRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomActionCommand}.
 */
export interface GetCustomActionCommandOutput extends GetCustomActionResult, __MetadataBearer {}

/**
 * <p>Returns a custom action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, GetCustomActionCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, GetCustomActionCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // GetCustomActionRequest
 *   CustomActionArn: "STRING_VALUE", // required
 * };
 * const command = new GetCustomActionCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomActionResult
 * //   CustomAction: { // CustomAction
 * //     CustomActionArn: "STRING_VALUE", // required
 * //     Definition: { // CustomActionDefinition
 * //       CommandText: "STRING_VALUE", // required
 * //     },
 * //     AliasName: "STRING_VALUE",
 * //     Attachments: [ // CustomActionAttachmentList
 * //       { // CustomActionAttachment
 * //         NotificationType: "STRING_VALUE",
 * //         ButtonText: "STRING_VALUE",
 * //         Criteria: [ // CustomActionAttachmentCriteriaList
 * //           { // CustomActionAttachmentCriteria
 * //             Operator: "HAS_VALUE" || "EQUALS", // required
 * //             VariableName: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Variables: { // CustomActionAttachmentVariables
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     ActionName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCustomActionCommandInput - {@link GetCustomActionCommandInput}
 * @returns {@link GetCustomActionCommandOutput}
 * @see {@link GetCustomActionCommandInput} for command's `input` shape.
 * @see {@link GetCustomActionCommandOutput} for command's `response` shape.
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
 *
 * @example Get a custom action
 * ```javascript
 * //
 * const input = {
 *   CustomActionArn: "arn:aws:chatbot::1234567890:custom-action/my-custom-action"
 * };
 * const command = new GetCustomActionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CustomAction: {
 *     ActionName: "my-custom-action",
 *     CustomActionArn: "arn:aws:chatbot::1234567890:custom-action/my-custom-action",
 *     Definition: {
 *       CommandText: "lambda invoke $functionName"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetCustomActionCommand extends $Command
  .classBuilder<
    GetCustomActionCommandInput,
    GetCustomActionCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "GetCustomAction", {})
  .n("ChatbotClient", "GetCustomActionCommand")
  .sc(GetCustomAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomActionRequest;
      output: GetCustomActionResult;
    };
    sdk: {
      input: GetCustomActionCommandInput;
      output: GetCustomActionCommandOutput;
    };
  };
}
