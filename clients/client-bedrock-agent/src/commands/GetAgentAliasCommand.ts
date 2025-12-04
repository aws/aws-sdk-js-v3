// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAgentAliasRequest, GetAgentAliasResponse } from "../models/models_0";
import { GetAgentAlias } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAgentAliasCommand}.
 */
export interface GetAgentAliasCommandInput extends GetAgentAliasRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentAliasCommand}.
 */
export interface GetAgentAliasCommandOutput extends GetAgentAliasResponse, __MetadataBearer {}

/**
 * <p>Gets information about an alias of an agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetAgentAliasCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetAgentAliasCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // GetAgentAliasRequest
 *   agentId: "STRING_VALUE", // required
 *   agentAliasId: "STRING_VALUE", // required
 * };
 * const command = new GetAgentAliasCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentAliasResponse
 * //   agentAlias: { // AgentAlias
 * //     agentId: "STRING_VALUE", // required
 * //     agentAliasId: "STRING_VALUE", // required
 * //     agentAliasName: "STRING_VALUE", // required
 * //     agentAliasArn: "STRING_VALUE", // required
 * //     clientToken: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     routingConfiguration: [ // AgentAliasRoutingConfiguration // required
 * //       { // AgentAliasRoutingConfigurationListItem
 * //         agentVersion: "STRING_VALUE",
 * //         provisionedThroughput: "STRING_VALUE",
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     agentAliasHistoryEvents: [ // AgentAliasHistoryEvents
 * //       { // AgentAliasHistoryEvent
 * //         routingConfiguration: [
 * //           {
 * //             agentVersion: "STRING_VALUE",
 * //             provisionedThroughput: "STRING_VALUE",
 * //           },
 * //         ],
 * //         endDate: new Date("TIMESTAMP"),
 * //         startDate: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     agentAliasStatus: "CREATING" || "PREPARED" || "FAILED" || "UPDATING" || "DELETING" || "DISSOCIATED", // required
 * //     failureReasons: [ // FailureReasons
 * //       "STRING_VALUE",
 * //     ],
 * //     aliasInvocationState: "ACCEPT_INVOCATIONS" || "REJECT_INVOCATIONS",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAgentAliasCommandInput - {@link GetAgentAliasCommandInput}
 * @returns {@link GetAgentAliasCommandOutput}
 * @see {@link GetAgentAliasCommandInput} for command's `input` shape.
 * @see {@link GetAgentAliasCommandOutput} for command's `response` shape.
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
export class GetAgentAliasCommand extends $Command
  .classBuilder<
    GetAgentAliasCommandInput,
    GetAgentAliasCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "GetAgentAlias", {})
  .n("BedrockAgentClient", "GetAgentAliasCommand")
  .sc(GetAgentAlias)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentAliasRequest;
      output: GetAgentAliasResponse;
    };
    sdk: {
      input: GetAgentAliasCommandInput;
      output: GetAgentAliasCommandOutput;
    };
  };
}
