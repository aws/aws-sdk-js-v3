// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetInsightsByAssessmentRequest, GetInsightsByAssessmentResponse } from "../models/models_0";
import { GetInsightsByAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetInsightsByAssessmentCommand}.
 */
export interface GetInsightsByAssessmentCommandInput extends GetInsightsByAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightsByAssessmentCommand}.
 */
export interface GetInsightsByAssessmentCommandOutput extends GetInsightsByAssessmentResponse, __MetadataBearer {}

/**
 * Gets the latest analytics data for a specific active assessment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetInsightsByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetInsightsByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // GetInsightsByAssessmentRequest
 *   assessmentId: "STRING_VALUE", // required
 * };
 * const command = new GetInsightsByAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightsByAssessmentResponse
 * //   insights: { // InsightsByAssessment
 * //     noncompliantEvidenceCount: Number("int"),
 * //     compliantEvidenceCount: Number("int"),
 * //     inconclusiveEvidenceCount: Number("int"),
 * //     assessmentControlsCountByNoncompliantEvidence: Number("int"),
 * //     totalAssessmentControlsCount: Number("int"),
 * //     lastUpdated: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInsightsByAssessmentCommandInput - {@link GetInsightsByAssessmentCommandInput}
 * @returns {@link GetInsightsByAssessmentCommandOutput}
 * @see {@link GetInsightsByAssessmentCommandInput} for command's `input` shape.
 * @see {@link GetInsightsByAssessmentCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Your account isn't registered with Audit Manager. Check the delegated administrator setup on the Audit Manager settings page, and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred during the processing of your request. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that's specified in the request can't be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AuditManagerServiceException}
 *
 * Base exception class for all service exceptions from AuditManager service.
 *
 * @public
 */
export class GetInsightsByAssessmentCommand extends command<GetInsightsByAssessmentCommandInput, GetInsightsByAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "GetInsightsByAssessment",
  GetInsightsByAssessment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInsightsByAssessmentRequest;
      output: GetInsightsByAssessmentResponse;
    };
    sdk: {
      input: GetInsightsByAssessmentCommandInput;
      output: GetInsightsByAssessmentCommandOutput;
    };
  };
}
