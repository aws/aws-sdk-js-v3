// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetAutomatedReasoningPolicyNextScenarioRequest,
  GetAutomatedReasoningPolicyNextScenarioResponse,
} from "../models/models_0";
import { GetAutomatedReasoningPolicyNextScenario$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAutomatedReasoningPolicyNextScenarioCommand}.
 */
export interface GetAutomatedReasoningPolicyNextScenarioCommandInput extends GetAutomatedReasoningPolicyNextScenarioRequest {}
/**
 * @public
 *
 * The output of {@link GetAutomatedReasoningPolicyNextScenarioCommand}.
 */
export interface GetAutomatedReasoningPolicyNextScenarioCommandOutput extends GetAutomatedReasoningPolicyNextScenarioResponse, __MetadataBearer {}

/**
 * Retrieves the next test scenario for validating an Automated Reasoning policy. This is used during the interactive policy refinement process to test policy behavior.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetAutomatedReasoningPolicyNextScenarioCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetAutomatedReasoningPolicyNextScenarioCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetAutomatedReasoningPolicyNextScenarioRequest
 *   policyArn: "STRING_VALUE", // required
 *   buildWorkflowId: "STRING_VALUE", // required
 * };
 * const command = new GetAutomatedReasoningPolicyNextScenarioCommand(input);
 * const response = await client.send(command);
 * // { // GetAutomatedReasoningPolicyNextScenarioResponse
 * //   policyArn: "STRING_VALUE", // required
 * //   scenario: { // AutomatedReasoningPolicyScenario
 * //     expression: "STRING_VALUE", // required
 * //     alternateExpression: "STRING_VALUE", // required
 * //     expectedResult: "VALID" || "INVALID" || "SATISFIABLE" || "IMPOSSIBLE" || "TRANSLATION_AMBIGUOUS" || "TOO_COMPLEX" || "NO_TRANSLATION", // required
 * //     ruleIds: [ // AutomatedReasoningPolicyDefinitionRuleIdList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAutomatedReasoningPolicyNextScenarioCommandInput - {@link GetAutomatedReasoningPolicyNextScenarioCommandInput}
 * @returns {@link GetAutomatedReasoningPolicyNextScenarioCommandOutput}
 * @see {@link GetAutomatedReasoningPolicyNextScenarioCommandInput} for command's `input` shape.
 * @see {@link GetAutomatedReasoningPolicyNextScenarioCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockServiceException}
 *
 * Base exception class for all service exceptions from Bedrock service.
 *
 * @public
 */
export class GetAutomatedReasoningPolicyNextScenarioCommand extends command<GetAutomatedReasoningPolicyNextScenarioCommandInput, GetAutomatedReasoningPolicyNextScenarioCommandOutput>(
  _ep0,
  _mw0,
  "GetAutomatedReasoningPolicyNextScenario",
  GetAutomatedReasoningPolicyNextScenario$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAutomatedReasoningPolicyNextScenarioRequest;
      output: GetAutomatedReasoningPolicyNextScenarioResponse;
    };
    sdk: {
      input: GetAutomatedReasoningPolicyNextScenarioCommandInput;
      output: GetAutomatedReasoningPolicyNextScenarioCommandOutput;
    };
  };
}
