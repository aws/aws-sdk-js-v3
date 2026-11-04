// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListControlDomainInsightsByAssessmentRequest,
  ListControlDomainInsightsByAssessmentResponse,
} from "../models/models_0";
import { ListControlDomainInsightsByAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListControlDomainInsightsByAssessmentCommand}.
 */
export interface ListControlDomainInsightsByAssessmentCommandInput extends ListControlDomainInsightsByAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link ListControlDomainInsightsByAssessmentCommand}.
 */
export interface ListControlDomainInsightsByAssessmentCommandOutput extends ListControlDomainInsightsByAssessmentResponse, __MetadataBearer {}

/**
 * Lists analytics data for control domains within a specified active assessment.
 *
 * Audit Manager supports the control domains that are provided by Amazon Web Services Control Catalog. For information about how to find a list of available control domains, see [`ListDomains`](https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListDomains.html) in the Amazon Web Services Control Catalog API Reference.
 *
 * > **Note:** A control domain is listed only if at least one of the controls within that domain collected evidence on the `lastUpdated` date of `controlDomainInsights`. If this condition isn’t met, no data is listed for that domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListControlDomainInsightsByAssessmentCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListControlDomainInsightsByAssessmentCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // ListControlDomainInsightsByAssessmentRequest
 *   assessmentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListControlDomainInsightsByAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // ListControlDomainInsightsByAssessmentResponse
 * //   controlDomainInsights: [ // ControlDomainInsightsList
 * //     { // ControlDomainInsights
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       controlsCountByNoncompliantEvidence: Number("int"),
 * //       totalControlsCount: Number("int"),
 * //       evidenceInsights: { // EvidenceInsights
 * //         noncompliantEvidenceCount: Number("int"),
 * //         compliantEvidenceCount: Number("int"),
 * //         inconclusiveEvidenceCount: Number("int"),
 * //       },
 * //       lastUpdated: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListControlDomainInsightsByAssessmentCommandInput - {@link ListControlDomainInsightsByAssessmentCommandInput}
 * @returns {@link ListControlDomainInsightsByAssessmentCommandOutput}
 * @see {@link ListControlDomainInsightsByAssessmentCommandInput} for command's `input` shape.
 * @see {@link ListControlDomainInsightsByAssessmentCommandOutput} for command's `response` shape.
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
export class ListControlDomainInsightsByAssessmentCommand extends command<ListControlDomainInsightsByAssessmentCommandInput, ListControlDomainInsightsByAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "ListControlDomainInsightsByAssessment",
  ListControlDomainInsightsByAssessment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListControlDomainInsightsByAssessmentRequest;
      output: ListControlDomainInsightsByAssessmentResponse;
    };
    sdk: {
      input: ListControlDomainInsightsByAssessmentCommandInput;
      output: ListControlDomainInsightsByAssessmentCommandOutput;
    };
  };
}
