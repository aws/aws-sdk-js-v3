// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCodeFindingsInput, ListCodeFindingsOutput } from "../models/models_0";
import { ListCodeFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCodeFindingsCommand}.
 */
export interface ListCodeFindingsCommandInput extends ListCodeFindingsInput {}
/**
 * @public
 *
 * The output of {@link ListCodeFindingsCommand}.
 */
export interface ListCodeFindingsCommandOutput extends ListCodeFindingsOutput, __MetadataBearer {}

/**
 * Lists the findings in an environment in descending findingId order.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, ListCodeFindingsCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, ListCodeFindingsCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // ListCodeFindingsInput
 *   environmentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCodeFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListCodeFindingsOutput
 * //   items: [ // CodeFindingSummaries // required
 * //     { // FindingSummary
 * //       findingId: "STRING_VALUE", // required
 * //       findingArn: "STRING_VALUE", // required
 * //       environmentId: "STRING_VALUE", // required
 * //       source: "STRING_VALUE", // required
 * //       sourceFindingId: "STRING_VALUE", // required
 * //       reportedAt: new Date("TIMESTAMP"), // required
 * //       status: "SUBMITTED" || "VALIDATING" || "CONFIRMED" || "DISCARDED", // required
 * //       statusUpdatedAt: new Date("TIMESTAMP"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       scanRunId: "STRING_VALUE",
 * //       statusMessage: "STRING_VALUE",
 * //       discardReason: "SCANNER_VALIDATED_FALSE_POSITIVE" || "SCANNER_NEEDS_REVIEW" || "FALSE_POSITIVE_VALIDATED_AGAINST_CONTEXT" || "DUPLICATE_OF_OPEN_ISSUE" || "DUPLICATE_OF_CLOSED_ISSUE" || "COMPENSATING_CONTROL_PRESENT" || "OUT_OF_SCOPE" || "INSUFFICIENT_EVIDENCE" || "PROCESSING_FAILED" || "SOURCE_REPO_NOT_FOUND",
 * //       discardReasoning: "STRING_VALUE",
 * //       duplicateOfIssueId: "STRING_VALUE",
 * //       createdIssueId: "STRING_VALUE",
 * //       completedAt: new Date("TIMESTAMP"),
 * //       type: "CONTINUUM_CODE_VULN" || "CUSTOMER_CODE_VULN", // required
 * //       title: "STRING_VALUE", // required
 * //       severity: "UNKNOWN" || "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL" || "FATAL" || "OTHER", // required
 * //       category: "STRING_VALUE",
 * //       filePath: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCodeFindingsCommandInput - {@link ListCodeFindingsCommandInput}
 * @returns {@link ListCodeFindingsCommandOutput}
 * @see {@link ListCodeFindingsCommandInput} for command's `input` shape.
 * @see {@link ListCodeFindingsCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class ListCodeFindingsCommand extends command<ListCodeFindingsCommandInput, ListCodeFindingsCommandOutput>(
  _ep0,
  _mw0,
  "ListCodeFindings",
  ListCodeFindings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCodeFindingsInput;
      output: ListCodeFindingsOutput;
    };
    sdk: {
      input: ListCodeFindingsCommandInput;
      output: ListCodeFindingsCommandOutput;
    };
  };
}
