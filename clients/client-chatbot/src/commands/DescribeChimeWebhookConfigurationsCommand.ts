// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeChimeWebhookConfigurationsRequest,
  DescribeChimeWebhookConfigurationsResult,
} from "../models/models_0";
import { DescribeChimeWebhookConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeChimeWebhookConfigurationsCommandOutput extends DescribeChimeWebhookConfigurationsResult, __MetadataBearer {}

/**
 * <p>Lists Amazon Chime webhook configurations optionally filtered by ChatConfigurationArn</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DescribeChimeWebhookConfigurationsCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DescribeChimeWebhookConfigurationsCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
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
export class DescribeChimeWebhookConfigurationsCommand extends command<DescribeChimeWebhookConfigurationsCommandInput, DescribeChimeWebhookConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeChimeWebhookConfigurations",
  DescribeChimeWebhookConfigurations$
) {
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
