// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSlackUserIdentitiesRequest, DescribeSlackUserIdentitiesResult } from "../models/models_0";
import { DescribeSlackUserIdentities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSlackUserIdentitiesCommand}.
 */
export interface DescribeSlackUserIdentitiesCommandInput extends DescribeSlackUserIdentitiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSlackUserIdentitiesCommand}.
 */
export interface DescribeSlackUserIdentitiesCommandOutput extends DescribeSlackUserIdentitiesResult, __MetadataBearer {}

/**
 * <p>Lists all Slack user identities with a mapped role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DescribeSlackUserIdentitiesCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DescribeSlackUserIdentitiesCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // DescribeSlackUserIdentitiesRequest
 *   ChatConfigurationArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeSlackUserIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSlackUserIdentitiesResult
 * //   SlackUserIdentities: [ // SlackUserIdentitiesList
 * //     { // SlackUserIdentity
 * //       IamRoleArn: "STRING_VALUE", // required
 * //       ChatConfigurationArn: "STRING_VALUE", // required
 * //       SlackTeamId: "STRING_VALUE", // required
 * //       SlackUserId: "STRING_VALUE", // required
 * //       AwsUserIdentity: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSlackUserIdentitiesCommandInput - {@link DescribeSlackUserIdentitiesCommandInput}
 * @returns {@link DescribeSlackUserIdentitiesCommandOutput}
 * @see {@link DescribeSlackUserIdentitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeSlackUserIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link DescribeSlackUserIdentitiesException} (server fault)
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
export class DescribeSlackUserIdentitiesCommand extends $Command
  .classBuilder<
    DescribeSlackUserIdentitiesCommandInput,
    DescribeSlackUserIdentitiesCommandOutput,
    ChatbotClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChatbotClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WheatleyOrchestration_20171011", "DescribeSlackUserIdentities", {})
  .n("ChatbotClient", "DescribeSlackUserIdentitiesCommand")
  .sc(DescribeSlackUserIdentities$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSlackUserIdentitiesRequest;
      output: DescribeSlackUserIdentitiesResult;
    };
    sdk: {
      input: DescribeSlackUserIdentitiesCommandInput;
      output: DescribeSlackUserIdentitiesCommandOutput;
    };
  };
}
