// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFailureModeAssessmentsRequest, ListFailureModeAssessmentsResponse } from "../models/models_0";
import { ListFailureModeAssessments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFailureModeAssessmentsCommand}.
 */
export interface ListFailureModeAssessmentsCommandInput extends ListFailureModeAssessmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListFailureModeAssessmentsCommand}.
 */
export interface ListFailureModeAssessmentsCommandOutput extends ListFailureModeAssessmentsResponse, __MetadataBearer {}

/**
 * <p>Lists failure mode assessments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, ListFailureModeAssessmentsCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, ListFailureModeAssessmentsCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // ListFailureModeAssessmentsRequest
 *   serviceArn: "STRING_VALUE", // required
 *   assessmentStatuses: [ // AssessmentStatusList
 *     "NOT_STARTED" || "PENDING" || "IN_PROGRESS" || "FAILED" || "SUCCESS",
 *   ],
 *   startedAfter: new Date("TIMESTAMP"),
 *   endedBefore: new Date("TIMESTAMP"),
 *   sortBy: "STARTED_AT",
 *   sortOrder: "ASC" || "DESC",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFailureModeAssessmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListFailureModeAssessmentsResponse
 * //   assessmentSummaries: [ // AssessmentSummaryList // required
 * //     { // AssessmentSummary
 * //       assessmentId: "STRING_VALUE", // required
 * //       serviceArn: "STRING_VALUE", // required
 * //       assessmentStatus: "NOT_STARTED" || "PENDING" || "IN_PROGRESS" || "FAILED" || "SUCCESS",
 * //       assessmentStep: "TOPOLOGY_GENERATION" || "INPUT_VALIDATION" || "DESIGN_ANALYSIS" || "TOPOLOGY_ENHANCEMENT" || "SERVICE_FUNCTION_GENERATION" || "POLICY_VALIDATION" || "RESILIENCE_ASSESSMENT" || "FAILURE_MODE_FINDINGS_CONSOLIDATION" || "FAILURE_MODE_FINDINGS_ENRICHMENT",
 * //       totalFindings: Number("int"),
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "INVALID_PERMISSIONS" || "CMK_ACCESS_DENIED" || "AGENT_ERROR" || "INTERNAL_ERROR" || "DESIGN_FILE_ACCESS_DENIED",
 * //       assessmentCost: { // AssessmentCost
 * //         amount: Number("double"),
 * //         currency: "USD",
 * //       },
 * //       billableAssessmentUnitCount: Number("int"),
 * //       achievability: { // Achievability
 * //         availabilitySlo: "ACHIEVABLE" || "NOT_ACHIEVABLE",
 * //         multiAzRtoRpo: "ACHIEVABLE" || "NOT_ACHIEVABLE",
 * //         multiRegionRtoRpo: "ACHIEVABLE" || "NOT_ACHIEVABLE",
 * //         dataRecoveryTimeBetweenBackups: "ACHIEVABLE" || "NOT_ACHIEVABLE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFailureModeAssessmentsCommandInput - {@link ListFailureModeAssessmentsCommandInput}
 * @returns {@link ListFailureModeAssessmentsCommandOutput}
 * @see {@link ListFailureModeAssessmentsCommandInput} for command's `input` shape.
 * @see {@link ListFailureModeAssessmentsCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class ListFailureModeAssessmentsCommand extends command<ListFailureModeAssessmentsCommandInput, ListFailureModeAssessmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListFailureModeAssessments",
  ListFailureModeAssessments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFailureModeAssessmentsRequest;
      output: ListFailureModeAssessmentsResponse;
    };
    sdk: {
      input: ListFailureModeAssessmentsCommandInput;
      output: ListFailureModeAssessmentsCommandOutput;
    };
  };
}
