// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAgentActionGroupsRequest, ListAgentActionGroupsResponse } from "../models/models_0";
import { de_ListAgentActionGroupsCommand, se_ListAgentActionGroupsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * Lists an Action Group for existing Amazon Bedrock Agent Version
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListAgentActionGroupsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListAgentActionGroupsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "ListAgentActionGroups", {})
  .n("BedrockAgentClient", "ListAgentActionGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListAgentActionGroupsCommand)
  .de(de_ListAgentActionGroupsCommand)
  .build() {}
