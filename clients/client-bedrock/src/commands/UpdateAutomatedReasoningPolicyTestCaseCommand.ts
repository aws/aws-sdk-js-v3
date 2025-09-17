// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateAutomatedReasoningPolicyTestCaseRequest,
  UpdateAutomatedReasoningPolicyTestCaseRequestFilterSensitiveLog,
  UpdateAutomatedReasoningPolicyTestCaseResponse,
} from "../models/models_0";
import {
  de_UpdateAutomatedReasoningPolicyTestCaseCommand,
  se_UpdateAutomatedReasoningPolicyTestCaseCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAutomatedReasoningPolicyTestCaseCommand}.
 */
export interface UpdateAutomatedReasoningPolicyTestCaseCommandInput
  extends UpdateAutomatedReasoningPolicyTestCaseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAutomatedReasoningPolicyTestCaseCommand}.
 */
export interface UpdateAutomatedReasoningPolicyTestCaseCommandOutput
  extends UpdateAutomatedReasoningPolicyTestCaseResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing Automated Reasoning policy test. You can modify the content, query, expected result, and confidence threshold.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, UpdateAutomatedReasoningPolicyTestCaseCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, UpdateAutomatedReasoningPolicyTestCaseCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // UpdateAutomatedReasoningPolicyTestCaseRequest
 *   policyArn: "STRING_VALUE", // required
 *   testCaseId: "STRING_VALUE", // required
 *   guardContent: "STRING_VALUE", // required
 *   queryContent: "STRING_VALUE",
 *   lastUpdatedAt: new Date("TIMESTAMP"), // required
 *   expectedAggregatedFindingsResult: "VALID" || "INVALID" || "SATISFIABLE" || "IMPOSSIBLE" || "TRANSLATION_AMBIGUOUS" || "TOO_COMPLEX" || "NO_TRANSLATION", // required
 *   confidenceThreshold: Number("double"),
 *   kmsKeyArn: "STRING_VALUE",
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new UpdateAutomatedReasoningPolicyTestCaseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAutomatedReasoningPolicyTestCaseResponse
 * //   policyArn: "STRING_VALUE", // required
 * //   testCaseId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateAutomatedReasoningPolicyTestCaseCommandInput - {@link UpdateAutomatedReasoningPolicyTestCaseCommandInput}
 * @returns {@link UpdateAutomatedReasoningPolicyTestCaseCommandOutput}
 * @see {@link UpdateAutomatedReasoningPolicyTestCaseCommandInput} for command's `input` shape.
 * @see {@link UpdateAutomatedReasoningPolicyTestCaseCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>Thrown when attempting to delete or modify a resource that is currently being used by other resources or operations. For example, trying to delete an Automated Reasoning policy that is referenced by an active guardrail.</p>
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
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class UpdateAutomatedReasoningPolicyTestCaseCommand extends $Command
  .classBuilder<
    UpdateAutomatedReasoningPolicyTestCaseCommandInput,
    UpdateAutomatedReasoningPolicyTestCaseCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockControlPlaneService", "UpdateAutomatedReasoningPolicyTestCase", {})
  .n("BedrockClient", "UpdateAutomatedReasoningPolicyTestCaseCommand")
  .f(UpdateAutomatedReasoningPolicyTestCaseRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateAutomatedReasoningPolicyTestCaseCommand)
  .de(de_UpdateAutomatedReasoningPolicyTestCaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAutomatedReasoningPolicyTestCaseRequest;
      output: UpdateAutomatedReasoningPolicyTestCaseResponse;
    };
    sdk: {
      input: UpdateAutomatedReasoningPolicyTestCaseCommandInput;
      output: UpdateAutomatedReasoningPolicyTestCaseCommandOutput;
    };
  };
}
