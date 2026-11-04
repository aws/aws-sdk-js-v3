// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteAutomatedReasoningPolicyBuildWorkflowRequest,
  DeleteAutomatedReasoningPolicyBuildWorkflowResponse,
} from "../models/models_0";
import { DeleteAutomatedReasoningPolicyBuildWorkflow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAutomatedReasoningPolicyBuildWorkflowCommand}.
 */
export interface DeleteAutomatedReasoningPolicyBuildWorkflowCommandInput extends DeleteAutomatedReasoningPolicyBuildWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAutomatedReasoningPolicyBuildWorkflowCommand}.
 */
export interface DeleteAutomatedReasoningPolicyBuildWorkflowCommandOutput extends DeleteAutomatedReasoningPolicyBuildWorkflowResponse, __MetadataBearer {}

/**
 * Deletes an Automated Reasoning policy build workflow and its associated artifacts. This permanently removes the workflow history and any generated assets.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteAutomatedReasoningPolicyBuildWorkflowCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteAutomatedReasoningPolicyBuildWorkflowCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // DeleteAutomatedReasoningPolicyBuildWorkflowRequest
 *   policyArn: "STRING_VALUE", // required
 *   buildWorkflowId: "STRING_VALUE", // required
 *   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * };
 * const command = new DeleteAutomatedReasoningPolicyBuildWorkflowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAutomatedReasoningPolicyBuildWorkflowCommandInput - {@link DeleteAutomatedReasoningPolicyBuildWorkflowCommandInput}
 * @returns {@link DeleteAutomatedReasoningPolicyBuildWorkflowCommandOutput}
 * @see {@link DeleteAutomatedReasoningPolicyBuildWorkflowCommandInput} for command's `input` shape.
 * @see {@link DeleteAutomatedReasoningPolicyBuildWorkflowCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *
 * Thrown when attempting to delete or modify a resource that is currently being used by other resources or operations. For example, trying to delete an Automated Reasoning policy that is referenced by an active guardrail.
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
export class DeleteAutomatedReasoningPolicyBuildWorkflowCommand extends command<DeleteAutomatedReasoningPolicyBuildWorkflowCommandInput, DeleteAutomatedReasoningPolicyBuildWorkflowCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAutomatedReasoningPolicyBuildWorkflow",
  DeleteAutomatedReasoningPolicyBuildWorkflow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAutomatedReasoningPolicyBuildWorkflowRequest;
      output: {};
    };
    sdk: {
      input: DeleteAutomatedReasoningPolicyBuildWorkflowCommandInput;
      output: DeleteAutomatedReasoningPolicyBuildWorkflowCommandOutput;
    };
  };
}
