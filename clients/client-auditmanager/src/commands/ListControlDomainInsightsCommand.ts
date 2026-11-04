// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListControlDomainInsightsRequest, ListControlDomainInsightsResponse } from "../models/models_0";
import { ListControlDomainInsights$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListControlDomainInsightsCommand}.
 */
export interface ListControlDomainInsightsCommandInput extends ListControlDomainInsightsRequest {}
/**
 * @public
 *
 * The output of {@link ListControlDomainInsightsCommand}.
 */
export interface ListControlDomainInsightsCommandOutput extends ListControlDomainInsightsResponse, __MetadataBearer {}

/**
 * Lists the latest analytics data for control domains across all of your active assessments.
 *
 * Audit Manager supports the control domains that are provided by Amazon Web Services Control Catalog. For information about how to find a list of available control domains, see [`ListDomains`](https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListDomains.html) in the Amazon Web Services Control Catalog API Reference.
 *
 * > **Note:** A control domain is listed only if at least one of the controls within that domain collected evidence on the `lastUpdated` date of `controlDomainInsights`. If this condition isn’t met, no data is listed for that control domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListControlDomainInsightsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListControlDomainInsightsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // ListControlDomainInsightsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListControlDomainInsightsCommand(input);
 * const response = await client.send(command);
 * // { // ListControlDomainInsightsResponse
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
 * @param ListControlDomainInsightsCommandInput - {@link ListControlDomainInsightsCommandInput}
 * @returns {@link ListControlDomainInsightsCommandOutput}
 * @see {@link ListControlDomainInsightsCommandInput} for command's `input` shape.
 * @see {@link ListControlDomainInsightsCommandOutput} for command's `response` shape.
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
export class ListControlDomainInsightsCommand extends command<ListControlDomainInsightsCommandInput, ListControlDomainInsightsCommandOutput>(
  _ep0,
  _mw0,
  "ListControlDomainInsights",
  ListControlDomainInsights$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListControlDomainInsightsRequest;
      output: ListControlDomainInsightsResponse;
    };
    sdk: {
      input: ListControlDomainInsightsCommandInput;
      output: ListControlDomainInsightsCommandOutput;
    };
  };
}
