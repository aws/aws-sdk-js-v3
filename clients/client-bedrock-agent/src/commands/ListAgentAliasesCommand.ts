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
export { __MetadataBearer, $Command };
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
 * @public
 * Lists all the Aliases for an Amazon Bedrock Agent
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
 * //           agentVersion: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       agentAliasStatus: "CREATING" || "PREPARED" || "FAILED" || "UPDATING" || "DELETING", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
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
export class ListAgentAliasesCommand extends $Command
  .classBuilder<
    ListAgentAliasesCommandInput,
    ListAgentAliasesCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "ListAgentAliases", {})
  .n("BedrockAgentClient", "ListAgentAliasesCommand")
  .f(void 0, void 0)
  .ser(se_ListAgentAliasesCommand)
  .de(de_ListAgentAliasesCommand)
  .build() {}
