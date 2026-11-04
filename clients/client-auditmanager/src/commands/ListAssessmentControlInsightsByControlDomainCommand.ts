// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAssessmentControlInsightsByControlDomainRequest,
  ListAssessmentControlInsightsByControlDomainResponse,
} from "../models/models_0";
import { ListAssessmentControlInsightsByControlDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssessmentControlInsightsByControlDomainCommand}.
 */
export interface ListAssessmentControlInsightsByControlDomainCommandInput extends ListAssessmentControlInsightsByControlDomainRequest {}
/**
 * @public
 *
 * The output of {@link ListAssessmentControlInsightsByControlDomainCommand}.
 */
export interface ListAssessmentControlInsightsByControlDomainCommandOutput extends ListAssessmentControlInsightsByControlDomainResponse, __MetadataBearer {}

/**
 * Lists the latest analytics data for controls within a specific control domain and a specific active assessment.
 *
 * > **Note:** Control insights are listed only if the control belongs to the control domain and assessment that was specified. Moreover, the control must have collected evidence on the `lastUpdated` date of `controlInsightsByAssessment`. If neither of these conditions are met, no data is listed for that control.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListAssessmentControlInsightsByControlDomainCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListAssessmentControlInsightsByControlDomainCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // ListAssessmentControlInsightsByControlDomainRequest
 *   controlDomainId: "STRING_VALUE", // required
 *   assessmentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssessmentControlInsightsByControlDomainCommand(input);
 * const response = await client.send(command);
 * // { // ListAssessmentControlInsightsByControlDomainResponse
 * //   controlInsightsByAssessment: [ // ControlInsightsMetadataByAssessment
 * //     { // ControlInsightsMetadataByAssessmentItem
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       evidenceInsights: { // EvidenceInsights
 * //         noncompliantEvidenceCount: Number("int"),
 * //         compliantEvidenceCount: Number("int"),
 * //         inconclusiveEvidenceCount: Number("int"),
 * //       },
 * //       controlSetName: "STRING_VALUE",
 * //       lastUpdated: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssessmentControlInsightsByControlDomainCommandInput - {@link ListAssessmentControlInsightsByControlDomainCommandInput}
 * @returns {@link ListAssessmentControlInsightsByControlDomainCommandOutput}
 * @see {@link ListAssessmentControlInsightsByControlDomainCommandInput} for command's `input` shape.
 * @see {@link ListAssessmentControlInsightsByControlDomainCommandOutput} for command's `response` shape.
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
export class ListAssessmentControlInsightsByControlDomainCommand extends command<ListAssessmentControlInsightsByControlDomainCommandInput, ListAssessmentControlInsightsByControlDomainCommandOutput>(
  _ep0,
  _mw0,
  "ListAssessmentControlInsightsByControlDomain",
  ListAssessmentControlInsightsByControlDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssessmentControlInsightsByControlDomainRequest;
      output: ListAssessmentControlInsightsByControlDomainResponse;
    };
    sdk: {
      input: ListAssessmentControlInsightsByControlDomainCommandInput;
      output: ListAssessmentControlInsightsByControlDomainCommandOutput;
    };
  };
}
