// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFlowAliasRequest, GetFlowAliasResponse } from "../models/models_0";
import { GetFlowAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFlowAliasCommand}.
 */
export interface GetFlowAliasCommandInput extends GetFlowAliasRequest {}
/**
 * @public
 *
 * The output of {@link GetFlowAliasCommand}.
 */
export interface GetFlowAliasCommandOutput extends GetFlowAliasResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a flow. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/flows-deploy.html">Deploy a flow in Amazon Bedrock</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetFlowAliasCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetFlowAliasCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // GetFlowAliasRequest
 *   flowIdentifier: "STRING_VALUE", // required
 *   aliasIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetFlowAliasCommand(input);
 * const response = await client.send(command);
 * // { // GetFlowAliasResponse
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   routingConfiguration: [ // FlowAliasRoutingConfiguration // required
 * //     { // FlowAliasRoutingConfigurationListItem
 * //       flowVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   concurrencyConfiguration: { // FlowAliasConcurrencyConfiguration
 * //     type: "Automatic" || "Manual", // required
 * //     maxConcurrency: Number("int"),
 * //   },
 * //   flowId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetFlowAliasCommandInput - {@link GetFlowAliasCommandInput}
 * @returns {@link GetFlowAliasCommandOutput}
 * @see {@link GetFlowAliasCommandInput} for command's `input` shape.
 * @see {@link GetFlowAliasCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetFlowAliasCommand extends $Command
  .classBuilder<
    GetFlowAliasCommandInput,
    GetFlowAliasCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "GetFlowAlias", {})
  .n("BedrockAgentClient", "GetFlowAliasCommand")
  .sc(GetFlowAlias$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFlowAliasRequest;
      output: GetFlowAliasResponse;
    };
    sdk: {
      input: GetFlowAliasCommandInput;
      output: GetFlowAliasCommandOutput;
    };
  };
}
