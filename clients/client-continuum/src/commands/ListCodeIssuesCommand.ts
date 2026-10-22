// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCodeIssuesInput, ListCodeIssuesOutput } from "../models/models_0";
import { ListCodeIssues$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCodeIssuesCommand}.
 */
export interface ListCodeIssuesCommandInput extends ListCodeIssuesInput {}
/**
 * @public
 *
 * The output of {@link ListCodeIssuesCommand}.
 */
export interface ListCodeIssuesCommandOutput extends ListCodeIssuesOutput, __MetadataBearer {}

/**
 * Lists the issues in an environment in descending issueId order.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, ListCodeIssuesCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, ListCodeIssuesCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // ListCodeIssuesInput
 *   environmentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCodeIssuesCommand(input);
 * const response = await client.send(command);
 * // { // ListCodeIssuesOutput
 * //   items: [ // CodeIssueSummaries // required
 * //     { // IssueSummary
 * //       issueId: "STRING_VALUE", // required
 * //       issueArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       severity: "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //       confidence: Number("int"),
 * //       status: "CREATED" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //       phase: "VALIDATION" || "PRIORITIZATION" || "REMEDIATION",
 * //       statusReason: "INTERNAL_ERROR" || "REMEDIATION_FAILED",
 * //       statusMessage: "STRING_VALUE",
 * //       statusUpdatedAt: new Date("TIMESTAMP"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCodeIssuesCommandInput - {@link ListCodeIssuesCommandInput}
 * @returns {@link ListCodeIssuesCommandOutput}
 * @see {@link ListCodeIssuesCommandInput} for command's `input` shape.
 * @see {@link ListCodeIssuesCommandOutput} for command's `response` shape.
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
export class ListCodeIssuesCommand extends command<ListCodeIssuesCommandInput, ListCodeIssuesCommandOutput>(
  _ep0,
  _mw0,
  "ListCodeIssues",
  ListCodeIssues$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCodeIssuesInput;
      output: ListCodeIssuesOutput;
    };
    sdk: {
      input: ListCodeIssuesCommandInput;
      output: ListCodeIssuesCommandOutput;
    };
  };
}
