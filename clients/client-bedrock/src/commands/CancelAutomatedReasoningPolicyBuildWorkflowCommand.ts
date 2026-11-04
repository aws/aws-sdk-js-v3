// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CancelAutomatedReasoningPolicyBuildWorkflowRequest,
  CancelAutomatedReasoningPolicyBuildWorkflowResponse,
} from "../models/models_0";
import { CancelAutomatedReasoningPolicyBuildWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelAutomatedReasoningPolicyBuildWorkflowCommand}.
 */
export interface CancelAutomatedReasoningPolicyBuildWorkflowCommandInput extends CancelAutomatedReasoningPolicyBuildWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link CancelAutomatedReasoningPolicyBuildWorkflowCommand}.
 */
export interface CancelAutomatedReasoningPolicyBuildWorkflowCommandOutput extends CancelAutomatedReasoningPolicyBuildWorkflowResponse, __MetadataBearer {}

/**
 * Cancels a running Automated Reasoning policy build workflow. This stops the policy generation process and prevents further processing of the source documents.
 *
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
export class CancelAutomatedReasoningPolicyBuildWorkflowCommand extends command<CancelAutomatedReasoningPolicyBuildWorkflowCommandInput, CancelAutomatedReasoningPolicyBuildWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "CancelAutomatedReasoningPolicyBuildWorkflow",
  CancelAutomatedReasoningPolicyBuildWorkflow$
) {
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
