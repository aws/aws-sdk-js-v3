// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListControlDomainInsightsRequest, ListControlDomainInsightsResponse } from "../models/models_0";
import { ListControlDomainInsights } from "../schemas/schemas_2_Assessment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the latest analytics data for control domains across all of your active
 *          assessments. </p>
 *          <p>Audit Manager supports the control domains that are provided by Amazon Web Services
 *          Control Catalog. For information about how to find a list of available control domains, see
 *             <a href="https://docs.aws.amazon.com/controlcatalog/latest/APIReference/API_ListDomains.html">
 *                <code>ListDomains</code>
 *             </a> in the Amazon Web Services Control
 *          Catalog API Reference.</p>
 *          <note>
 *             <p>A control domain is listed only if at least one of the controls within that domain
 *             collected evidence on the <code>lastUpdated</code> date of
 *                <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed
 *             for that control domain.</p>
 *          </note>
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
 *  <p> Your account isn't registered with Audit Manager. Check the delegated
 *          administrator setup on the Audit Manager settings page, and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *          later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource that's specified in the request can't be found. </p>
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
export class ListControlDomainInsightsCommand extends $Command
  .classBuilder<
    ListControlDomainInsightsCommandInput,
    ListControlDomainInsightsCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "ListControlDomainInsights", {})
  .n("AuditManagerClient", "ListControlDomainInsightsCommand")
  .sc(ListControlDomainInsights)
  .build() {
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
