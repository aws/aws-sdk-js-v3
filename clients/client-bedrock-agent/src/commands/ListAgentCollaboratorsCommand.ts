// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAgentCollaboratorsRequest,
  ListAgentCollaboratorsResponse,
  ListAgentCollaboratorsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListAgentCollaboratorsCommand, se_ListAgentCollaboratorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAgentCollaboratorsCommand}.
 */
export interface ListAgentCollaboratorsCommandInput extends ListAgentCollaboratorsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentCollaboratorsCommand}.
 */
export interface ListAgentCollaboratorsCommandOutput extends ListAgentCollaboratorsResponse, __MetadataBearer {}

/**
 * <p>Retrieve a list of an agent's collaborators.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListAgentCollaboratorsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListAgentCollaboratorsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // ListAgentCollaboratorsRequest
 *   agentId: "STRING_VALUE", // required
 *   agentVersion: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentCollaboratorsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentCollaboratorsResponse
 * //   agentCollaboratorSummaries: [ // AgentCollaboratorSummaries // required
 * //     { // AgentCollaboratorSummary
 * //       agentId: "STRING_VALUE", // required
 * //       agentVersion: "STRING_VALUE", // required
 * //       collaboratorId: "STRING_VALUE", // required
 * //       agentDescriptor: { // AgentDescriptor
 * //         aliasArn: "STRING_VALUE",
 * //       },
 * //       collaborationInstruction: "STRING_VALUE", // required
 * //       relayConversationHistory: "TO_COLLABORATOR" || "DISABLED", // required
 * //       collaboratorName: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentCollaboratorsCommandInput - {@link ListAgentCollaboratorsCommandInput}
 * @returns {@link ListAgentCollaboratorsCommandOutput}
 * @see {@link ListAgentCollaboratorsCommandInput} for command's `input` shape.
 * @see {@link ListAgentCollaboratorsCommandOutput} for command's `response` shape.
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
export class ListAgentCollaboratorsCommand extends $Command
  .classBuilder<
    ListAgentCollaboratorsCommandInput,
    ListAgentCollaboratorsCommandOutput,
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
  .s("AmazonBedrockAgentBuildTimeLambda", "ListAgentCollaborators", {})
  .n("BedrockAgentClient", "ListAgentCollaboratorsCommand")
  .f(void 0, ListAgentCollaboratorsResponseFilterSensitiveLog)
  .ser(se_ListAgentCollaboratorsCommand)
  .de(de_ListAgentCollaboratorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentCollaboratorsRequest;
      output: ListAgentCollaboratorsResponse;
    };
    sdk: {
      input: ListAgentCollaboratorsCommandInput;
      output: ListAgentCollaboratorsCommandOutput;
    };
  };
}
