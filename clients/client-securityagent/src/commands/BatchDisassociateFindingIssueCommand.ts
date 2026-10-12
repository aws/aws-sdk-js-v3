// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDisassociateFindingIssueInput, BatchDisassociateFindingIssueOutput } from "../models/models_0";
import { BatchDisassociateFindingIssue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDisassociateFindingIssueCommand}.
 */
export interface BatchDisassociateFindingIssueCommandInput extends BatchDisassociateFindingIssueInput {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateFindingIssueCommand}.
 */
export interface BatchDisassociateFindingIssueCommandOutput extends BatchDisassociateFindingIssueOutput, __MetadataBearer {}

/**
 * <p>Disassociates a batch of findings from their linked issues.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchDisassociateFindingIssueCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchDisassociateFindingIssueCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchDisassociateFindingIssueInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   pentestJobId: "STRING_VALUE",
 *   codeReviewJobId: "STRING_VALUE",
 *   findingIds: [ // FindingIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDisassociateFindingIssueCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateFindingIssueOutput
 * //   errors: [ // BatchDisassociateFindingIssueErrors // required
 * //     { // BatchDisassociateFindingIssueError
 * //       findingId: "STRING_VALUE", // required
 * //       code: "CLIENT_ERROR" || "INTERNAL_ERROR" || "STOPPED_BY_USER", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateFindingIssueCommandInput - {@link BatchDisassociateFindingIssueCommandInput}
 * @returns {@link BatchDisassociateFindingIssueCommandOutput}
 * @see {@link BatchDisassociateFindingIssueCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateFindingIssueCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource identifier is correct and that the resource exists in the specified agent space or account.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota. Review your current usage and request a quota increase if needed.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class BatchDisassociateFindingIssueCommand extends command<BatchDisassociateFindingIssueCommandInput, BatchDisassociateFindingIssueCommandOutput>(
  _ep0,
  _mw0,
  "BatchDisassociateFindingIssue",
  BatchDisassociateFindingIssue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisassociateFindingIssueInput;
      output: BatchDisassociateFindingIssueOutput;
    };
    sdk: {
      input: BatchDisassociateFindingIssueCommandInput;
      output: BatchDisassociateFindingIssueCommandOutput;
    };
  };
}
