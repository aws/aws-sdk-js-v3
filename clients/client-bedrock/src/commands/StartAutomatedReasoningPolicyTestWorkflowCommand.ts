// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartAutomatedReasoningPolicyTestWorkflowRequest,
  StartAutomatedReasoningPolicyTestWorkflowResponse,
} from "../models/models_0";
import {
  de_StartAutomatedReasoningPolicyTestWorkflowCommand,
  se_StartAutomatedReasoningPolicyTestWorkflowCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAutomatedReasoningPolicyTestWorkflowCommand}.
 */
export interface StartAutomatedReasoningPolicyTestWorkflowCommandInput
  extends StartAutomatedReasoningPolicyTestWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link StartAutomatedReasoningPolicyTestWorkflowCommand}.
 */
export interface StartAutomatedReasoningPolicyTestWorkflowCommandOutput
  extends StartAutomatedReasoningPolicyTestWorkflowResponse,
    __MetadataBearer {}

/**
 * <p>Initiates a test workflow to validate Automated Reasoning policy tests. The workflow executes the specified tests against the policy and generates validation results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, StartAutomatedReasoningPolicyTestWorkflowCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, StartAutomatedReasoningPolicyTestWorkflowCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // StartAutomatedReasoningPolicyTestWorkflowRequest
 *   policyArn: "STRING_VALUE", // required
 *   buildWorkflowId: "STRING_VALUE", // required
 *   testCaseIds: [ // AutomatedReasoningPolicyTestCaseIdList
 *     "STRING_VALUE",
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new StartAutomatedReasoningPolicyTestWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // StartAutomatedReasoningPolicyTestWorkflowResponse
 * //   policyArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartAutomatedReasoningPolicyTestWorkflowCommandInput - {@link StartAutomatedReasoningPolicyTestWorkflowCommandInput}
 * @returns {@link StartAutomatedReasoningPolicyTestWorkflowCommandOutput}
 * @see {@link StartAutomatedReasoningPolicyTestWorkflowCommandInput} for command's `input` shape.
 * @see {@link StartAutomatedReasoningPolicyTestWorkflowCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
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
export class StartAutomatedReasoningPolicyTestWorkflowCommand extends $Command
  .classBuilder<
    StartAutomatedReasoningPolicyTestWorkflowCommandInput,
    StartAutomatedReasoningPolicyTestWorkflowCommandOutput,
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
  .s("AmazonBedrockControlPlaneService", "StartAutomatedReasoningPolicyTestWorkflow", {})
  .n("BedrockClient", "StartAutomatedReasoningPolicyTestWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_StartAutomatedReasoningPolicyTestWorkflowCommand)
  .de(de_StartAutomatedReasoningPolicyTestWorkflowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAutomatedReasoningPolicyTestWorkflowRequest;
      output: StartAutomatedReasoningPolicyTestWorkflowResponse;
    };
    sdk: {
      input: StartAutomatedReasoningPolicyTestWorkflowCommandInput;
      output: StartAutomatedReasoningPolicyTestWorkflowCommandOutput;
    };
  };
}
