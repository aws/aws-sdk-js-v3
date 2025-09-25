// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAutomatedReasoningPolicyTestCaseRequest,
  CreateAutomatedReasoningPolicyTestCaseResponse,
} from "../models/models_0";
import { CreateAutomatedReasoningPolicyTestCase } from "../schemas/schemas_11_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAutomatedReasoningPolicyTestCaseCommand}.
 */
export interface CreateAutomatedReasoningPolicyTestCaseCommandInput
  extends CreateAutomatedReasoningPolicyTestCaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateAutomatedReasoningPolicyTestCaseCommand}.
 */
export interface CreateAutomatedReasoningPolicyTestCaseCommandOutput
  extends CreateAutomatedReasoningPolicyTestCaseResponse,
    __MetadataBearer {}

/**
 * <p>Creates a test for an Automated Reasoning policy. Tests validate that your policy works as expected by providing sample inputs and expected outcomes. Use tests to verify policy behavior before deploying to production.</p>
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
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class CreateAutomatedReasoningPolicyTestCaseCommand extends $Command
  .classBuilder<
    CreateAutomatedReasoningPolicyTestCaseCommandInput,
    CreateAutomatedReasoningPolicyTestCaseCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockControlPlaneService", "CreateAutomatedReasoningPolicyTestCase", {})
  .n("BedrockClient", "CreateAutomatedReasoningPolicyTestCaseCommand")
  .sc(CreateAutomatedReasoningPolicyTestCase)
  .build() {
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
