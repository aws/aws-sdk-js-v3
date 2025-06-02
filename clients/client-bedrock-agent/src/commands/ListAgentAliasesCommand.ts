// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAgentAliasesRequest, ListAgentAliasesResponse } from "../models/models_0";
import { de_ListAgentAliasesCommand, se_ListAgentAliasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAgentAliasesCommand}.
 */
export interface ListAgentAliasesCommandInput extends ListAgentAliasesRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentAliasesCommand}.
 */
export interface ListAgentAliasesCommandOutput extends ListAgentAliasesResponse, __MetadataBearer {}

/**
 * <p>Lists the aliases of an agent and information about each one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListAgentAliasesCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListAgentAliasesCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // ListAgentAliasesRequest
 *   agentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentAliasesResponse
 * //   agentAliasSummaries: [ // AgentAliasSummaries // required
 * //     { // AgentAliasSummary
 * //       agentAliasId: "STRING_VALUE", // required
 * //       agentAliasName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       routingConfiguration: [ // AgentAliasRoutingConfiguration
 * //         { // AgentAliasRoutingConfigurationListItem
 * //           agentVersion: "STRING_VALUE",
 * //           provisionedThroughput: "STRING_VALUE",
 * //         },
 * //       ],
 * //       agentAliasStatus: "CREATING" || "PREPARED" || "FAILED" || "UPDATING" || "DELETING" || "DISSOCIATED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       aliasInvocationState: "ACCEPT_INVOCATIONS" || "REJECT_INVOCATIONS",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentAliasesCommandInput - {@link ListAgentAliasesCommandInput}
 * @returns {@link ListAgentAliasesCommandOutput}
 * @see {@link ListAgentAliasesCommandInput} for command's `input` shape.
 * @see {@link ListAgentAliasesCommandOutput} for command's `response` shape.
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
export class ListAgentAliasesCommand extends $Command
  .classBuilder<
    ListAgentAliasesCommandInput,
    ListAgentAliasesCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "ListAgentAliases", {})
  .n("BedrockAgentClient", "ListAgentAliasesCommand")
  .f(void 0, void 0)
  .ser(se_ListAgentAliasesCommand)
  .de(de_ListAgentAliasesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentAliasesRequest;
      output: ListAgentAliasesResponse;
    };
    sdk: {
      input: ListAgentAliasesCommandInput;
      output: ListAgentAliasesCommandOutput;
    };
  };
}
