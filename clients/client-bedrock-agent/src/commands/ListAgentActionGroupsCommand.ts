// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAgentActionGroupsRequest, ListAgentActionGroupsResponse } from "../models/models_0";
import { ListAgentActionGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAgentActionGroupsCommand}.
 */
export interface ListAgentActionGroupsCommandInput extends ListAgentActionGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentActionGroupsCommand}.
 */
export interface ListAgentActionGroupsCommandOutput extends ListAgentActionGroupsResponse, __MetadataBearer {}

/**
 * <p>Lists the action groups for an agent and information about each one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListAgentActionGroupsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListAgentActionGroupsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // ListAgentActionGroupsRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentActionGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentActionGroupsResponse
 * //   actionGroupSummaries: [ // ActionGroupSummaries // required
 * //     { // ActionGroupSummary
 * //       actionGroupId: "STRING_VALUE", // required
 * //       actionGroupName: "STRING_VALUE", // required
 * //       actionGroupState: "ENABLED" || "DISABLED", // required
 * //       description: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentActionGroupsCommandInput - {@link ListAgentActionGroupsCommandInput}
 * @returns {@link ListAgentActionGroupsCommandOutput}
 * @see {@link ListAgentActionGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAgentActionGroupsCommandOutput} for command's `response` shape.
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
export class ListAgentActionGroupsCommand extends $Command
  .classBuilder<
    ListAgentActionGroupsCommandInput,
    ListAgentActionGroupsCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "ListAgentActionGroups", {})
  .n("BedrockAgentClient", "ListAgentActionGroupsCommand")
  .sc(ListAgentActionGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentActionGroupsRequest;
      output: ListAgentActionGroupsResponse;
    };
    sdk: {
      input: ListAgentActionGroupsCommandInput;
      output: ListAgentActionGroupsCommandOutput;
    };
  };
}
