// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeChimeWebhookConfigurationsRequest,
  DescribeChimeWebhookConfigurationsResult,
  DescribeChimeWebhookConfigurationsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeChimeWebhookConfigurationsCommand,
  se_DescribeChimeWebhookConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeChimeWebhookConfigurationsCommand}.
 */
export interface DescribeChimeWebhookConfigurationsCommandInput extends DescribeChimeWebhookConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChimeWebhookConfigurationsCommand}.
 */
export interface DescribeChimeWebhookConfigurationsCommandOutput
  extends DescribeChimeWebhookConfigurationsResult,
    __MetadataBearer {}

/**
 * <p>Lists Amazon Chime webhook configurations optionally filtered by ChatConfigurationArn</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DescribeChimeWebhookConfigurationsCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DescribeChimeWebhookConfigurationsCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * const client = new ChatbotClient(config);
 * const input = { // DescribeChimeWebhookConfigurationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ChatConfigurationArn: "STRING_VALUE",
 * };
 * const command = new DescribeChimeWebhookConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChimeWebhookConfigurationsResult
 * //   NextToken: "STRING_VALUE",
 * //   WebhookConfigurations: [ // ChimeWebhookConfigurationList
 * //     { // ChimeWebhookConfiguration
 * //       WebhookDescription: "STRING_VALUE", // required
 * //       ChatConfigurationArn: "STRING_VALUE", // required
 * //       IamRoleArn: "STRING_VALUE", // required
 * //       SnsTopicArns: [ // SnsTopicArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       ConfigurationName: "STRING_VALUE",
 * //       LoggingLevel: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           TagKey: "STRING_VALUE", // required
 * //           TagValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       State: "STRING_VALUE",
 * //       StateReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeChimeWebhookConfigurationsCommandInput - {@link DescribeChimeWebhookConfigurationsCommandInput}
 * @returns {@link DescribeChimeWebhookConfigurationsCommandOutput}
 * @see {@link DescribeChimeWebhookConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeChimeWebhookConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link DescribeChimeWebhookConfigurationsException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 *
 * @throws {@link ChatbotServiceException}
 * <p>Base exception class for all service exceptions from Chatbot service.</p>
 *
 *
 * @public
 */
export class DescribeChimeWebhookConfigurationsCommand extends $Command
  .classBuilder<
    DescribeChimeWebhookConfigurationsCommandInput,
    DescribeChimeWebhookConfigurationsCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "DescribeChimeWebhookConfigurations", {})
  .n("ChatbotClient", "DescribeChimeWebhookConfigurationsCommand")
  .f(void 0, DescribeChimeWebhookConfigurationsResultFilterSensitiveLog)
  .ser(se_DescribeChimeWebhookConfigurationsCommand)
  .de(de_DescribeChimeWebhookConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChimeWebhookConfigurationsRequest;
      output: DescribeChimeWebhookConfigurationsResult;
    };
    sdk: {
      input: DescribeChimeWebhookConfigurationsCommandInput;
      output: DescribeChimeWebhookConfigurationsCommandOutput;
    };
  };
}
