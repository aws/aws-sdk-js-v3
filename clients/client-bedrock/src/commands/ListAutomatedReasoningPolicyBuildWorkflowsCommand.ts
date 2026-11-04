// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAutomatedReasoningPolicyBuildWorkflowsRequest,
  ListAutomatedReasoningPolicyBuildWorkflowsResponse,
} from "../models/models_0";
import { ListAutomatedReasoningPolicyBuildWorkflows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAutomatedReasoningPolicyBuildWorkflowsCommand}.
 */
export interface ListAutomatedReasoningPolicyBuildWorkflowsCommandInput extends ListAutomatedReasoningPolicyBuildWorkflowsRequest {}
/**
 * @public
 *
 * The output of {@link ListAutomatedReasoningPolicyBuildWorkflowsCommand}.
 */
export interface ListAutomatedReasoningPolicyBuildWorkflowsCommandOutput extends ListAutomatedReasoningPolicyBuildWorkflowsResponse, __MetadataBearer {}

/**
 * Lists all build workflows for an Automated Reasoning policy, showing the history of policy creation and modification attempts.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListAutomatedReasoningPolicyBuildWorkflowsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListAutomatedReasoningPolicyBuildWorkflowsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // ListAutomatedReasoningPolicyBuildWorkflowsRequest
 *   policyArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAutomatedReasoningPolicyBuildWorkflowsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomatedReasoningPolicyBuildWorkflowsResponse
 * //   automatedReasoningPolicyBuildWorkflowSummaries: [ // AutomatedReasoningPolicyBuildWorkflowSummaries // required
 * //     { // AutomatedReasoningPolicyBuildWorkflowSummary
 * //       policyArn: "STRING_VALUE", // required
 * //       buildWorkflowId: "STRING_VALUE", // required
 * //       status: "SCHEDULED" || "CANCEL_REQUESTED" || "PREPROCESSING" || "BUILDING" || "TESTING" || "COMPLETED" || "FAILED" || "CANCELLED", // required
 * //       buildWorkflowType: "INGEST_CONTENT" || "REFINE_POLICY" || "IMPORT_POLICY" || "GENERATE_FIDELITY_REPORT" || "GENERATE_POLICY_SCENARIOS" || "RESOLVE_POLICY_AMBIGUITIES" || "ITERATIVELY_REFINE_POLICY", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutomatedReasoningPolicyBuildWorkflowsCommandInput - {@link ListAutomatedReasoningPolicyBuildWorkflowsCommandInput}
 * @returns {@link ListAutomatedReasoningPolicyBuildWorkflowsCommandOutput}
 * @see {@link ListAutomatedReasoningPolicyBuildWorkflowsCommandInput} for command's `input` shape.
 * @see {@link ListAutomatedReasoningPolicyBuildWorkflowsCommandOutput} for command's `response` shape.
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
export class ListAutomatedReasoningPolicyBuildWorkflowsCommand extends command<ListAutomatedReasoningPolicyBuildWorkflowsCommandInput, ListAutomatedReasoningPolicyBuildWorkflowsCommandOutput>(
  _ep0,
  _mw0,
  "ListAutomatedReasoningPolicyBuildWorkflows",
  ListAutomatedReasoningPolicyBuildWorkflows$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutomatedReasoningPolicyBuildWorkflowsRequest;
      output: ListAutomatedReasoningPolicyBuildWorkflowsResponse;
    };
    sdk: {
      input: ListAutomatedReasoningPolicyBuildWorkflowsCommandInput;
      output: ListAutomatedReasoningPolicyBuildWorkflowsCommandOutput;
    };
  };
}
