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
import type { ListEvaluatorsRequest, ListEvaluatorsResponse } from "../models/models_0";
import { ListEvaluators$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEvaluatorsCommand}.
 */
export interface ListEvaluatorsCommandInput extends ListEvaluatorsRequest {}
/**
 * @public
 *
 * The output of {@link ListEvaluatorsCommand}.
 */
export interface ListEvaluatorsCommandOutput extends ListEvaluatorsResponse, __MetadataBearer {}

/**
 * <p> Lists all available evaluators, including both builtin evaluators provided by the service and custom evaluators created by the user. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListEvaluatorsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListEvaluatorsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListEvaluatorsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEvaluatorsCommand(input);
 * const response = await client.send(command);
 * // { // ListEvaluatorsResponse
 * //   evaluators: [ // EvaluatorSummaryList // required
 * //     { // EvaluatorSummary
 * //       evaluatorArn: "STRING_VALUE", // required
 * //       evaluatorId: "STRING_VALUE", // required
 * //       evaluatorName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       evaluatorType: "Builtin" || "Custom", // required
 * //       level: "TOOL_CALL" || "TRACE" || "SESSION",
 * //       status: "ACTIVE" || "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       lockedForModification: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEvaluatorsCommandInput - {@link ListEvaluatorsCommandInput}
 * @returns {@link ListEvaluatorsCommandOutput}
 * @see {@link ListEvaluatorsCommandInput} for command's `input` shape.
 * @see {@link ListEvaluatorsCommandOutput} for command's `response` shape.
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
export class ListEvaluatorsCommand extends $Command
  .classBuilder<
    ListEvaluatorsCommandInput,
    ListEvaluatorsCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListEvaluators", {})
  .n("BedrockAgentCoreControlClient", "ListEvaluatorsCommand")
  .sc(ListEvaluators$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEvaluatorsRequest;
      output: ListEvaluatorsResponse;
    };
    sdk: {
      input: ListEvaluatorsCommandInput;
      output: ListEvaluatorsCommandOutput;
    };
  };
}
