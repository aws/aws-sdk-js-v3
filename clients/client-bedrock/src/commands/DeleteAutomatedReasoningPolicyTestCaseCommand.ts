// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteAutomatedReasoningPolicyTestCaseRequest,
  DeleteAutomatedReasoningPolicyTestCaseResponse,
} from "../models/models_0";
import { DeleteAutomatedReasoningPolicyTestCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAutomatedReasoningPolicyTestCaseCommand}.
 */
export interface DeleteAutomatedReasoningPolicyTestCaseCommandInput extends DeleteAutomatedReasoningPolicyTestCaseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAutomatedReasoningPolicyTestCaseCommand}.
 */
export interface DeleteAutomatedReasoningPolicyTestCaseCommandOutput extends DeleteAutomatedReasoningPolicyTestCaseResponse, __MetadataBearer {}

/**
 * Deletes an Automated Reasoning policy test. This operation is idempotent; if you delete a test more than once, each call succeeds.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteAutomatedReasoningPolicyTestCaseCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteAutomatedReasoningPolicyTestCaseCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // DeleteAutomatedReasoningPolicyTestCaseRequest
 *   policyArn: "STRING_VALUE", // required
 *   testCaseId: "STRING_VALUE", // required
 *   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * };
 * const command = new DeleteAutomatedReasoningPolicyTestCaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAutomatedReasoningPolicyTestCaseCommandInput - {@link DeleteAutomatedReasoningPolicyTestCaseCommandInput}
 * @returns {@link DeleteAutomatedReasoningPolicyTestCaseCommandOutput}
 * @see {@link DeleteAutomatedReasoningPolicyTestCaseCommandInput} for command's `input` shape.
 * @see {@link DeleteAutomatedReasoningPolicyTestCaseCommandOutput} for command's `response` shape.
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
export class DeleteAutomatedReasoningPolicyTestCaseCommand extends command<DeleteAutomatedReasoningPolicyTestCaseCommandInput, DeleteAutomatedReasoningPolicyTestCaseCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAutomatedReasoningPolicyTestCase",
  DeleteAutomatedReasoningPolicyTestCase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAutomatedReasoningPolicyTestCaseRequest;
      output: {};
    };
    sdk: {
      input: DeleteAutomatedReasoningPolicyTestCaseCommandInput;
      output: DeleteAutomatedReasoningPolicyTestCaseCommandOutput;
    };
  };
}
