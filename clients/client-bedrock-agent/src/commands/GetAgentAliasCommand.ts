// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAgentAliasRequest, GetAgentAliasResponse } from "../models/models_0";
import { de_GetAgentAliasCommand, se_GetAgentAliasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * Describes an Alias for a Amazon Bedrock Agent
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetAgentAliasCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetAgentAliasCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
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
 * //         agentVersion: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     agentAliasHistoryEvents: [ // AgentAliasHistoryEvents
 * //       { // AgentAliasHistoryEvent
 * //         routingConfiguration: [
 * //           {
 * //             agentVersion: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         endDate: new Date("TIMESTAMP"),
 * //         startDate: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     agentAliasStatus: "CREATING" || "PREPARED" || "FAILED" || "UPDATING" || "DELETING", // required
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
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 */
export class GetAgentAliasCommand extends $Command
  .classBuilder<
    GetAgentAliasCommandInput,
    GetAgentAliasCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: BedrockAgentClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "GetAgentAlias", {})
  .n("BedrockAgentClient", "GetAgentAliasCommand")
  .f(void 0, void 0)
  .ser(se_GetAgentAliasCommand)
  .de(de_GetAgentAliasCommand)
  .build() {}
