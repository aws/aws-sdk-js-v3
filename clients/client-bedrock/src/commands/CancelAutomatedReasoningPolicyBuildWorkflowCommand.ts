// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CancelAutomatedReasoningPolicyBuildWorkflowRequest,
  CancelAutomatedReasoningPolicyBuildWorkflowResponse,
} from "../models/models_0";
import { CancelAutomatedReasoningPolicyBuildWorkflow } from "../schemas/schemas_34_CancelAutomatedReasoningPolicyBuildWorkflow";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelAutomatedReasoningPolicyBuildWorkflowCommand}.
 */
export interface CancelAutomatedReasoningPolicyBuildWorkflowCommandInput
  extends CancelAutomatedReasoningPolicyBuildWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link CancelAutomatedReasoningPolicyBuildWorkflowCommand}.
 */
export interface CancelAutomatedReasoningPolicyBuildWorkflowCommandOutput
  extends CancelAutomatedReasoningPolicyBuildWorkflowResponse,
    __MetadataBearer {}

/**
 * <p>Cancels a running Automated Reasoning policy build workflow. This stops the policy generation process and prevents further processing of the source documents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CancelAutomatedReasoningPolicyBuildWorkflowCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CancelAutomatedReasoningPolicyBuildWorkflowCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // CancelAutomatedReasoningPolicyBuildWorkflowRequest
 *   policyArn: "STRING_VALUE", // required
 *   buildWorkflowId: "STRING_VALUE", // required
 * };
 * const command = new CancelAutomatedReasoningPolicyBuildWorkflowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelAutomatedReasoningPolicyBuildWorkflowCommandInput - {@link CancelAutomatedReasoningPolicyBuildWorkflowCommandInput}
 * @returns {@link CancelAutomatedReasoningPolicyBuildWorkflowCommandOutput}
 * @see {@link CancelAutomatedReasoningPolicyBuildWorkflowCommandInput} for command's `input` shape.
 * @see {@link CancelAutomatedReasoningPolicyBuildWorkflowCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
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
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class CancelAutomatedReasoningPolicyBuildWorkflowCommand extends $Command
  .classBuilder<
    CancelAutomatedReasoningPolicyBuildWorkflowCommandInput,
    CancelAutomatedReasoningPolicyBuildWorkflowCommandOutput,
    BedrockClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockControlPlaneService", "CancelAutomatedReasoningPolicyBuildWorkflow", {})
  .n("BedrockClient", "CancelAutomatedReasoningPolicyBuildWorkflowCommand")
  .sc(CancelAutomatedReasoningPolicyBuildWorkflow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelAutomatedReasoningPolicyBuildWorkflowRequest;
      output: {};
    };
    sdk: {
      input: CancelAutomatedReasoningPolicyBuildWorkflowCommandInput;
      output: CancelAutomatedReasoningPolicyBuildWorkflowCommandOutput;
    };
  };
}
