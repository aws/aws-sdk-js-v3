// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListOnlineEvaluationConfigsRequest, ListOnlineEvaluationConfigsResponse } from "../models/models_0";
import { ListOnlineEvaluationConfigs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOnlineEvaluationConfigsCommand}.
 */
export interface ListOnlineEvaluationConfigsCommandInput extends ListOnlineEvaluationConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListOnlineEvaluationConfigsCommand}.
 */
export interface ListOnlineEvaluationConfigsCommandOutput
  extends ListOnlineEvaluationConfigsResponse,
    __MetadataBearer {}

/**
 * <p> Lists all online evaluation configurations in the account, providing summary information about each configuration's status and settings. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListOnlineEvaluationConfigsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListOnlineEvaluationConfigsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListOnlineEvaluationConfigsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListOnlineEvaluationConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListOnlineEvaluationConfigsResponse
 * //   onlineEvaluationConfigs: [ // OnlineEvaluationConfigSummaryList // required
 * //     { // OnlineEvaluationConfigSummary
 * //       onlineEvaluationConfigArn: "STRING_VALUE", // required
 * //       onlineEvaluationConfigId: "STRING_VALUE", // required
 * //       onlineEvaluationConfigName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "ACTIVE" || "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING", // required
 * //       executionStatus: "ENABLED" || "DISABLED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOnlineEvaluationConfigsCommandInput - {@link ListOnlineEvaluationConfigsCommandInput}
 * @returns {@link ListOnlineEvaluationConfigsCommandOutput}
 * @see {@link ListOnlineEvaluationConfigsCommandInput} for command's `input` shape.
 * @see {@link ListOnlineEvaluationConfigsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class ListOnlineEvaluationConfigsCommand extends $Command
  .classBuilder<
    ListOnlineEvaluationConfigsCommandInput,
    ListOnlineEvaluationConfigsCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListOnlineEvaluationConfigs", {})
  .n("BedrockAgentCoreControlClient", "ListOnlineEvaluationConfigsCommand")
  .sc(ListOnlineEvaluationConfigs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOnlineEvaluationConfigsRequest;
      output: ListOnlineEvaluationConfigsResponse;
    };
    sdk: {
      input: ListOnlineEvaluationConfigsCommandInput;
      output: ListOnlineEvaluationConfigsCommandOutput;
    };
  };
}
