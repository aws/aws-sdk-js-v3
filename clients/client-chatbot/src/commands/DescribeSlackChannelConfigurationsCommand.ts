// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeSlackChannelConfigurationsRequest,
  DescribeSlackChannelConfigurationsResult,
} from "../models/models_0";
import { DescribeSlackChannelConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSlackChannelConfigurationsCommand}.
 */
export interface DescribeSlackChannelConfigurationsCommandInput extends DescribeSlackChannelConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSlackChannelConfigurationsCommand}.
 */
export interface DescribeSlackChannelConfigurationsCommandOutput
  extends DescribeSlackChannelConfigurationsResult,
    __MetadataBearer {}

/**
 * <p>Lists Slack channel configurations optionally filtered by ChatConfigurationArn</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DescribeSlackChannelConfigurationsCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DescribeSlackChannelConfigurationsCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // DescribeSlackChannelConfigurationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ChatConfigurationArn: "STRING_VALUE",
 * };
 * const command = new DescribeSlackChannelConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSlackChannelConfigurationsResult
 * //   NextToken: "STRING_VALUE",
 * //   SlackChannelConfigurations: [ // SlackChannelConfigurationList
 * //     { // SlackChannelConfiguration
 * //       SlackTeamName: "STRING_VALUE", // required
 * //       SlackTeamId: "STRING_VALUE", // required
 * //       SlackChannelId: "STRING_VALUE", // required
 * //       SlackChannelName: "STRING_VALUE", // required
 * //       ChatConfigurationArn: "STRING_VALUE", // required
 * //       IamRoleArn: "STRING_VALUE", // required
 * //       SnsTopicArns: [ // SnsTopicArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       ConfigurationName: "STRING_VALUE",
 * //       LoggingLevel: "STRING_VALUE",
 * //       GuardrailPolicyArns: [ // GuardrailPolicyArnList
 * //         "STRING_VALUE",
 * //       ],
 * //       UserAuthorizationRequired: true || false,
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
 * @param DescribeSlackChannelConfigurationsCommandInput - {@link DescribeSlackChannelConfigurationsCommandInput}
 * @returns {@link DescribeSlackChannelConfigurationsCommandOutput}
 * @see {@link DescribeSlackChannelConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeSlackChannelConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link DescribeSlackChannelConfigurationsException} (server fault)
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
export class DescribeSlackChannelConfigurationsCommand extends $Command
  .classBuilder<
    DescribeSlackChannelConfigurationsCommandInput,
    DescribeSlackChannelConfigurationsCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "DescribeSlackChannelConfigurations", {})
  .n("ChatbotClient", "DescribeSlackChannelConfigurationsCommand")
  .sc(DescribeSlackChannelConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSlackChannelConfigurationsRequest;
      output: DescribeSlackChannelConfigurationsResult;
    };
    sdk: {
      input: DescribeSlackChannelConfigurationsCommandInput;
      output: DescribeSlackChannelConfigurationsCommandOutput;
    };
  };
}
