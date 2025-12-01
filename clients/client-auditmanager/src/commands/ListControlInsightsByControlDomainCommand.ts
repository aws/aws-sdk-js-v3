// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListControlInsightsByControlDomainRequest,
  ListControlInsightsByControlDomainResponse,
} from "../models/models_0";
import { ListControlInsightsByControlDomain } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListControlInsightsByControlDomainCommand}.
 */
export interface ListControlInsightsByControlDomainCommandInput extends ListControlInsightsByControlDomainRequest {}
/**
 * @public
 *
 * The output of {@link ListControlInsightsByControlDomainCommand}.
 */
export interface ListControlInsightsByControlDomainCommandOutput
  extends ListControlInsightsByControlDomainResponse,
    __MetadataBearer {}

/**
 * <p>Lists the latest analytics data for controls within a specific control domain across all
 *          active assessments.</p>
 *          <note>
 *             <p>Control insights are listed only if the control belongs to the control domain that
 *             was specified and the control collected evidence on the <code>lastUpdated</code> date of
 *                <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data
 *             is listed for that control. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, ListControlInsightsByControlDomainCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, ListControlInsightsByControlDomainCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // ListControlInsightsByControlDomainRequest
 *   controlDomainId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListControlInsightsByControlDomainCommand(input);
 * const response = await client.send(command);
 * // { // ListControlInsightsByControlDomainResponse
 * //   controlInsightsMetadata: [ // ControlInsightsMetadata
 * //     { // ControlInsightsMetadataItem
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
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
 * @param ListControlInsightsByControlDomainCommandInput - {@link ListControlInsightsByControlDomainCommandInput}
 * @returns {@link ListControlInsightsByControlDomainCommandOutput}
 * @see {@link ListControlInsightsByControlDomainCommandInput} for command's `input` shape.
 * @see {@link ListControlInsightsByControlDomainCommandOutput} for command's `response` shape.
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
export class ListControlInsightsByControlDomainCommand extends $Command
  .classBuilder<
    ListControlInsightsByControlDomainCommandInput,
    ListControlInsightsByControlDomainCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "ListControlInsightsByControlDomain", {})
  .n("AuditManagerClient", "ListControlInsightsByControlDomainCommand")
  .sc(ListControlInsightsByControlDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListControlInsightsByControlDomainRequest;
      output: ListControlInsightsByControlDomainResponse;
    };
    sdk: {
      input: ListControlInsightsByControlDomainCommandInput;
      output: ListControlInsightsByControlDomainCommandOutput;
    };
  };
}
