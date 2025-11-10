// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCustomActionRequest, CreateCustomActionResult } from "../models/models_0";
import { CreateCustomAction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomActionCommand}.
 */
export interface CreateCustomActionCommandInput extends CreateCustomActionRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomActionCommand}.
 */
export interface CreateCustomActionCommandOutput extends CreateCustomActionResult, __MetadataBearer {}

/**
 * <p>Creates a custom action that can be invoked as an alias or as a button on a notification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, CreateCustomActionCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, CreateCustomActionCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // CreateCustomActionRequest
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
 *   Tags: [ // TagList
 *     { // Tag
 *       TagKey: "STRING_VALUE", // required
 *       TagValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 *   ActionName: "STRING_VALUE", // required
 * };
 * const command = new CreateCustomActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomActionResult
 * //   CustomActionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCustomActionCommandInput - {@link CreateCustomActionCommandInput}
 * @returns {@link CreateCustomActionCommandOutput}
 * @see {@link CreateCustomActionCommandInput} for command's `input` shape.
 * @see {@link CreateCustomActionCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was an issue processing your request.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have exceeded a service limit for AWS Chatbot.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request was rejected because it doesn't have valid credentials for the target resource.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @example Create an alias that invokes a Lambda function
 * ```javascript
 * // Creates an alias that invokes a Lambda function from chat channels. You can use this alias by entering 'run invoke', after which you're prompted for the function name.
 * const input = {
 *   ActionName: "my-custom-action",
 *   AliasName: "invoke",
 *   Definition: {
 *     CommandText: "lambda invoke $functionName"
 *   }
 * };
 * const command = new CreateCustomActionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CustomActionArn: "arn:aws:chatbot::1234567890:custom-action/my-custom-action"
 * }
 * *\/
 * ```
 *
 * @example Create a custom action to list alarms
 * ```javascript
 * // Creates a button on all Cloudwatch notifications that lists alarms in the ‘ALARM’ state.
 * const input = {
 *   ActionName: "describe-alarms",
 *   Attachments: [
 *     {
 *       ButtonText: "List alarms",
 *       NotificationType: "CloudWatch"
 *     }
 *   ],
 *   Definition: {
 *     CommandText: "cloudwatch describe-alarms --state-value ALARM"
 *   }
 * };
 * const command = new CreateCustomActionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CustomActionArn: "arn:aws:chatbot::1234567890:custom-action/describe-alarms"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCustomActionCommand extends $Command
  .classBuilder<
    CreateCustomActionCommandInput,
    CreateCustomActionCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "CreateCustomAction", {})
  .n("ChatbotClient", "CreateCustomActionCommand")
  .sc(CreateCustomAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomActionRequest;
      output: CreateCustomActionResult;
    };
    sdk: {
      input: CreateCustomActionCommandInput;
      output: CreateCustomActionCommandOutput;
    };
  };
}
