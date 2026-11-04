// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateAutomatedReasoningPolicyTestCaseRequest,
  CreateAutomatedReasoningPolicyTestCaseResponse,
} from "../models/models_0";
import { CreateAutomatedReasoningPolicyTestCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAutomatedReasoningPolicyTestCaseCommand}.
 */
export interface CreateAutomatedReasoningPolicyTestCaseCommandInput extends CreateAutomatedReasoningPolicyTestCaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateAutomatedReasoningPolicyTestCaseCommand}.
 */
export interface CreateAutomatedReasoningPolicyTestCaseCommandOutput extends CreateAutomatedReasoningPolicyTestCaseResponse, __MetadataBearer {}

/**
 * Creates a test for an Automated Reasoning policy. Tests validate that your policy works as expected by providing sample inputs and expected outcomes. Use tests to verify policy behavior before deploying to production.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateAutomatedReasoningPolicyTestCaseCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateAutomatedReasoningPolicyTestCaseCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // CreateAutomatedReasoningPolicyTestCaseRequest
 *   policyArn: "STRING_VALUE", // required
 *   guardContent: "STRING_VALUE", // required
 *   queryContent: "STRING_VALUE",
 *   expectedAggregatedFindingsResult: "VALID" || "INVALID" || "SATISFIABLE" || "IMPOSSIBLE" || "TRANSLATION_AMBIGUOUS" || "TOO_COMPLEX" || "NO_TRANSLATION", // required
 *   clientRequestToken: "STRING_VALUE",
 *   confidenceThreshold: Number("double"),
 * };
 * const command = new CreateAutomatedReasoningPolicyTestCaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateAutomatedReasoningPolicyTestCaseResponse
 * //   policyArn: "STRING_VALUE", // required
 * //   testCaseId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAutomatedReasoningPolicyTestCaseCommandInput - {@link CreateAutomatedReasoningPolicyTestCaseCommandInput}
 * @returns {@link CreateAutomatedReasoningPolicyTestCaseCommandOutput}
 * @see {@link CreateAutomatedReasoningPolicyTestCaseCommandInput} for command's `input` shape.
 * @see {@link CreateAutomatedReasoningPolicyTestCaseCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Error occurred because of a conflict while performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
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
export class CreateAutomatedReasoningPolicyTestCaseCommand extends command<CreateAutomatedReasoningPolicyTestCaseCommandInput, CreateAutomatedReasoningPolicyTestCaseCommandOutput>(
  _ep0,
  _mw0,
  "CreateAutomatedReasoningPolicyTestCase",
  CreateAutomatedReasoningPolicyTestCase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAutomatedReasoningPolicyTestCaseRequest;
      output: CreateAutomatedReasoningPolicyTestCaseResponse;
    };
    sdk: {
      input: CreateAutomatedReasoningPolicyTestCaseCommandInput;
      output: CreateAutomatedReasoningPolicyTestCaseCommandOutput;
    };
  };
}
