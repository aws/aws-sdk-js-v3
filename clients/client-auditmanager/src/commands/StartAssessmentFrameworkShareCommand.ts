// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartAssessmentFrameworkShareRequest, StartAssessmentFrameworkShareResponse } from "../models/models_0";
import { StartAssessmentFrameworkShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAssessmentFrameworkShareCommand}.
 */
export interface StartAssessmentFrameworkShareCommandInput extends StartAssessmentFrameworkShareRequest {}
/**
 * @public
 *
 * The output of {@link StartAssessmentFrameworkShareCommand}.
 */
export interface StartAssessmentFrameworkShareCommandOutput extends StartAssessmentFrameworkShareResponse, __MetadataBearer {}

/**
 * <p> Creates a share request for a custom framework in Audit Manager. </p>
 *          <p>The share request specifies a recipient and notifies them that a custom framework is
 *          available. Recipients have 120 days to accept or decline the request. If no action is
 *          taken, the share request expires.</p>
 *          <p>When you create a share request, Audit Manager stores a snapshot of your custom
 *          framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also
 *          stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p>
 *          <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following
 *          events occurs:</p>
 *          <ul>
 *             <li>
 *                <p>The sender revokes the share request.</p>
 *             </li>
 *             <li>
 *                <p>The recipient declines the share request.</p>
 *             </li>
 *             <li>
 *                <p>The recipient encounters an error and doesn't successfully accept the share
 *                request.</p>
 *             </li>
 *             <li>
 *                <p>The share request expires before the recipient responds to the request.</p>
 *             </li>
 *          </ul>
 *          <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that
 *          corresponds with the latest version of the custom framework. </p>
 *          <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share
 *          request. </p>
 *          <important>
 *             <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to
 *             share a custom framework with another Amazon Web Services account. You may not share a
 *             custom framework that is derived from a standard framework if the standard framework is
 *             designated as not eligible for sharing by Amazon Web Services, unless you have obtained
 *             permission to do so from the owner of the standard framework. To learn more about which
 *             standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User
 *                Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, StartAssessmentFrameworkShareCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, StartAssessmentFrameworkShareCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // StartAssessmentFrameworkShareRequest
 *   frameworkId: "STRING_VALUE", // required
 *   destinationAccount: "STRING_VALUE", // required
 *   destinationRegion: "STRING_VALUE", // required
 *   comment: "STRING_VALUE",
 * };
 * const command = new StartAssessmentFrameworkShareCommand(input);
 * const response = await client.send(command);
 * // { // StartAssessmentFrameworkShareResponse
 * //   assessmentFrameworkShareRequest: { // AssessmentFrameworkShareRequest
 * //     id: "STRING_VALUE",
 * //     frameworkId: "STRING_VALUE",
 * //     frameworkName: "STRING_VALUE",
 * //     frameworkDescription: "STRING_VALUE",
 * //     status: "ACTIVE" || "REPLICATING" || "SHARED" || "EXPIRING" || "FAILED" || "EXPIRED" || "DECLINED" || "REVOKED",
 * //     sourceAccount: "STRING_VALUE",
 * //     destinationAccount: "STRING_VALUE",
 * //     destinationRegion: "STRING_VALUE",
 * //     expirationTime: new Date("TIMESTAMP"),
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdated: new Date("TIMESTAMP"),
 * //     comment: "STRING_VALUE",
 * //     standardControlsCount: Number("int"),
 * //     customControlsCount: Number("int"),
 * //     complianceType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartAssessmentFrameworkShareCommandInput - {@link StartAssessmentFrameworkShareCommandInput}
 * @returns {@link StartAssessmentFrameworkShareCommandOutput}
 * @see {@link StartAssessmentFrameworkShareCommandInput} for command's `input` shape.
 * @see {@link StartAssessmentFrameworkShareCommandOutput} for command's `response` shape.
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
export class StartAssessmentFrameworkShareCommand extends $Command
  .classBuilder<
    StartAssessmentFrameworkShareCommandInput,
    StartAssessmentFrameworkShareCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "StartAssessmentFrameworkShare", {})
  .n("AuditManagerClient", "StartAssessmentFrameworkShareCommand")
  .sc(StartAssessmentFrameworkShare$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAssessmentFrameworkShareRequest;
      output: StartAssessmentFrameworkShareResponse;
    };
    sdk: {
      input: StartAssessmentFrameworkShareCommandInput;
      output: StartAssessmentFrameworkShareCommandOutput;
    };
  };
}
