// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListFlowAliasesRequest, ListFlowAliasesResponse } from "../models/models_0";
import { ListFlowAliases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFlowAliasesCommand}.
 */
export interface ListFlowAliasesCommandInput extends ListFlowAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListFlowAliasesCommand}.
 */
export interface ListFlowAliasesCommandOutput extends ListFlowAliasesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of aliases for a flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListFlowAliasesCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListFlowAliasesCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // ListFlowAliasesRequest
 *   flowIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFlowAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListFlowAliasesResponse
 * //   flowAliasSummaries: [ // FlowAliasSummaries // required
 * //     { // FlowAliasSummary
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       routingConfiguration: [ // FlowAliasRoutingConfiguration // required
 * //         { // FlowAliasRoutingConfigurationListItem
 * //           flowVersion: "STRING_VALUE",
 * //         },
 * //       ],
 * //       concurrencyConfiguration: { // FlowAliasConcurrencyConfiguration
 * //         type: "Automatic" || "Manual", // required
 * //         maxConcurrency: Number("int"),
 * //       },
 * //       flowId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFlowAliasesCommandInput - {@link ListFlowAliasesCommandInput}
 * @returns {@link ListFlowAliasesCommandOutput}
 * @see {@link ListFlowAliasesCommandInput} for command's `input` shape.
 * @see {@link ListFlowAliasesCommandOutput} for command's `response` shape.
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
export class ListFlowAliasesCommand extends $Command
  .classBuilder<
    ListFlowAliasesCommandInput,
    ListFlowAliasesCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "ListFlowAliases", {})
  .n("BedrockAgentClient", "ListFlowAliasesCommand")
  .sc(ListFlowAliases$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFlowAliasesRequest;
      output: ListFlowAliasesResponse;
    };
    sdk: {
      input: ListFlowAliasesCommandInput;
      output: ListFlowAliasesCommandOutput;
    };
  };
}
