// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssessmentReportsRequest, ListAssessmentReportsResponse } from "../models/models_0";
import { ListAssessmentReports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssessmentReportsCommand}.
 */
export interface ListAssessmentReportsCommandInput extends ListAssessmentReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentReportsCommand}.
 */
export interface ListAssessmentReportsCommandOutput extends ListAssessmentReportsResponse, __MetadataBearer {}

/**
 * <p> Returns a list of assessment reports created in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentReportsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentReportsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // ListAssessmentReportsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentReportsResponse
 * //   assessmentReports: [ // AssessmentReportsMetadata
 * //     { // AssessmentReportMetadata
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       assessmentId: "STRING_VALUE",
 * //       assessmentName: "STRING_VALUE",
 * //       author: "STRING_VALUE",
 * //       status: "COMPLETE" || "IN_PROGRESS" || "FAILED",
 * //       creationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentReportsCommandInput - {@link ListAssessmentReportsCommandInput}
 * @returns {@link ListAssessmentReportsCommandOutput}
 * @see {@link ListAssessmentReportsCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentReportsCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request has invalid or missing parameters. </p>
 *
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 *
 * @public
 */
export class ListAssessmentReportsCommand extends command<ListAssessmentReportsCommandInput, ListAssessmentReportsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssessmentReports",
  ListAssessmentReports$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssessmentReportsRequest;
      output: ListAssessmentReportsResponse;
    };
    sdk: {
      input: ListAssessmentReportsCommandInput;
      output: ListAssessmentReportsCommandOutput;
    };
  };
}
