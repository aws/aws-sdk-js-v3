// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAgentVersionsRequest, ListAgentVersionsResponse } from "../models/models_0";
import { de_ListAgentVersionsCommand, se_ListAgentVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAgentVersionsCommand}.
 */
export interface ListAgentVersionsCommandInput extends ListAgentVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentVersionsCommand}.
 */
export interface ListAgentVersionsCommandOutput extends ListAgentVersionsResponse, __MetadataBearer {}

/**
 * @public
 * Lists Agent Versions
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListAgentVersionsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListAgentVersionsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // ListAgentVersionsRequest
 *   agentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentVersionsResponse
 * //   agentVersionSummaries: [ // AgentVersionSummaries // required
 * //     { // AgentVersionSummary
 * //       agentName: "STRING_VALUE", // required
 * //       agentStatus: "CREATING" || "PREPARING" || "PREPARED" || "NOT_PREPARED" || "DELETING" || "FAILED" || "VERSIONING" || "UPDATING", // required
 * //       agentVersion: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentVersionsCommandInput - {@link ListAgentVersionsCommandInput}
 * @returns {@link ListAgentVersionsCommandOutput}
 * @see {@link ListAgentVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAgentVersionsCommandOutput} for command's `response` shape.
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
export class ListAgentVersionsCommand extends $Command
  .classBuilder<
    ListAgentVersionsCommandInput,
    ListAgentVersionsCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "ListAgentVersions", {})
  .n("BedrockAgentClient", "ListAgentVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListAgentVersionsCommand)
  .de(de_ListAgentVersionsCommand)
  .build() {}
