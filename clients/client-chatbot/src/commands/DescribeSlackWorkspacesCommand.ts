// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChatbotClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChatbotClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSlackWorkspacesRequest, DescribeSlackWorkspacesResult } from "../models/models_0";
import { de_DescribeSlackWorkspacesCommand, se_DescribeSlackWorkspacesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSlackWorkspacesCommand}.
 */
export interface DescribeSlackWorkspacesCommandInput extends DescribeSlackWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSlackWorkspacesCommand}.
 */
export interface DescribeSlackWorkspacesCommandOutput extends DescribeSlackWorkspacesResult, __MetadataBearer {}

/**
 * <p>List all authorized Slack workspaces connected to the AWS Account onboarded with AWS Chatbot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChatbotClient, DescribeSlackWorkspacesCommand } from "@aws-sdk/client-chatbot"; // ES Modules import
 * // const { ChatbotClient, DescribeSlackWorkspacesCommand } = require("@aws-sdk/client-chatbot"); // CommonJS import
 * // import type { ChatbotClientConfig } from "@aws-sdk/client-chatbot";
 * const config = {}; // type is ChatbotClientConfig
 * const client = new ChatbotClient(config);
 * const input = { // DescribeSlackWorkspacesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSlackWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSlackWorkspacesResult
 * //   SlackWorkspaces: [ // SlackWorkspacesList
 * //     { // SlackWorkspace
 * //       SlackTeamId: "STRING_VALUE", // required
 * //       SlackTeamName: "STRING_VALUE", // required
 * //       State: "STRING_VALUE",
 * //       StateReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSlackWorkspacesCommandInput - {@link DescribeSlackWorkspacesCommandInput}
 * @returns {@link DescribeSlackWorkspacesCommandOutput}
 * @see {@link DescribeSlackWorkspacesCommandInput} for command's `input` shape.
 * @see {@link DescribeSlackWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link ChatbotClientResolvedConfig | config} for ChatbotClient's `config` shape.
 *
 * @throws {@link DescribeSlackWorkspacesException} (server fault)
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
export class DescribeSlackWorkspacesCommand extends $Command
  .classBuilder<
    DescribeSlackWorkspacesCommandInput,
    DescribeSlackWorkspacesCommandOutput,
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
  .s("WheatleyOrchestration_20171011", "DescribeSlackWorkspaces", {})
  .n("ChatbotClient", "DescribeSlackWorkspacesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSlackWorkspacesCommand)
  .de(de_DescribeSlackWorkspacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSlackWorkspacesRequest;
      output: DescribeSlackWorkspacesResult;
    };
    sdk: {
      input: DescribeSlackWorkspacesCommandInput;
      output: DescribeSlackWorkspacesCommandOutput;
    };
  };
}
