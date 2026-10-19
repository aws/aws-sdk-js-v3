// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchExportFindingsInput, BatchExportFindingsOutput } from "../models/models_0";
import { BatchExportFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchExportFindingsCommand}.
 */
export interface BatchExportFindingsCommandInput extends BatchExportFindingsInput {}
/**
 * @public
 *
 * The output of {@link BatchExportFindingsCommand}.
 */
export interface BatchExportFindingsCommandOutput extends BatchExportFindingsOutput, __MetadataBearer {}

/**
 * <p>Exports a batch of findings to the connected issue tracker as issues.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchExportFindingsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchExportFindingsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchExportFindingsInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   pentestJobId: "STRING_VALUE",
 *   codeReviewJobId: "STRING_VALUE",
 *   issueDestination: { // IssueDestination
 *     integrationId: "STRING_VALUE", // required
 *     projectKey: "STRING_VALUE", // required
 *   },
 *   findingIds: [ // FindingIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchExportFindingsCommand(input);
 * const response = await client.send(command);
 * // { // BatchExportFindingsOutput
 * //   results: [ // BatchExportFindingResultList // required
 * //     { // BatchExportFindingResult
 * //       findingId: "STRING_VALUE", // required
 * //       linkedIssue: { // LinkedIssue
 * //         provider: "GITHUB" || "GITLAB" || "BITBUCKET" || "CONFLUENCE" || "AZURE_DEVOPS" || "JIRA",
 * //         integrationId: "STRING_VALUE",
 * //         projectKey: "STRING_VALUE",
 * //         issueKey: "STRING_VALUE",
 * //         issueId: "STRING_VALUE",
 * //         issueUrl: "STRING_VALUE",
 * //         siteUrl: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchExportFindingErrorList // required
 * //     { // BatchExportFindingError
 * //       findingId: "STRING_VALUE", // required
 * //       code: "CLIENT_ERROR" || "INTERNAL_ERROR" || "STOPPED_BY_USER", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchExportFindingsCommandInput - {@link BatchExportFindingsCommandInput}
 * @returns {@link BatchExportFindingsCommandOutput}
 * @see {@link BatchExportFindingsCommandInput} for command's `input` shape.
 * @see {@link BatchExportFindingsCommandOutput} for command's `response` shape.
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
export class BatchExportFindingsCommand extends command<BatchExportFindingsCommandInput, BatchExportFindingsCommandOutput>(
  _ep0,
  _mw0,
  "BatchExportFindings",
  BatchExportFindings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchExportFindingsInput;
      output: BatchExportFindingsOutput;
    };
    sdk: {
      input: BatchExportFindingsCommandInput;
      output: BatchExportFindingsCommandOutput;
    };
  };
}
