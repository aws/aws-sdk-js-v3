// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAgentVersionsRequest, ListAgentVersionsResponse } from "../models/models_1";
import { de_ListAgentVersionsCommand, se_ListAgentVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the versions of an agent and information about each version.</p>
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
 * //       guardrailConfiguration: { // GuardrailConfiguration
 * //         guardrailIdentifier: "STRING_VALUE",
 * //         guardrailVersion: "STRING_VALUE",
 * //       },
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
export class ListAgentVersionsCommand extends $Command
  .classBuilder<
    ListAgentVersionsCommandInput,
    ListAgentVersionsCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "ListAgentVersions", {})
  .n("BedrockAgentClient", "ListAgentVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListAgentVersionsCommand)
  .de(de_ListAgentVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentVersionsRequest;
      output: ListAgentVersionsResponse;
    };
    sdk: {
      input: ListAgentVersionsCommandInput;
      output: ListAgentVersionsCommandOutput;
    };
  };
}
