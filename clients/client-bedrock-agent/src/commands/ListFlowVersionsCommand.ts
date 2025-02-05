// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFlowVersionsRequest, ListFlowVersionsResponse } from "../models/models_0";
import { de_ListFlowVersionsCommand, se_ListFlowVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFlowVersionsCommand}.
 */
export interface ListFlowVersionsCommandInput extends ListFlowVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowVersionsCommand}.
 */
export interface ListFlowVersionsCommandOutput extends ListFlowVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of information about each flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-deploy.html">Deploy a flow in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListFlowVersionsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListFlowVersionsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BedrockAgentClient(config);
 * const input = { // ListFlowVersionsRequest
 *   flowIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFlowVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowVersionsResponse
 * //   flowVersionSummaries: [ // FlowVersionSummaries // required
 * //     { // FlowVersionSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       status: "Failed" || "Prepared" || "Preparing" || "NotPrepared", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowVersionsCommandInput - {@link ListFlowVersionsCommandInput}
 * @returns {@link ListFlowVersionsCommandOutput}
 * @see {@link ListFlowVersionsCommandInput} for command's `input` shape.
 * @see {@link ListFlowVersionsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 * @public
 */
export class ListFlowVersionsCommand extends $Command
  .classBuilder<
    ListFlowVersionsCommandInput,
    ListFlowVersionsCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "ListFlowVersions", {})
  .n("BedrockAgentClient", "ListFlowVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListFlowVersionsCommand)
  .de(de_ListFlowVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlowVersionsRequest;
      output: ListFlowVersionsResponse;
    };
    sdk: {
      input: ListFlowVersionsCommandInput;
      output: ListFlowVersionsCommandOutput;
    };
  };
}
