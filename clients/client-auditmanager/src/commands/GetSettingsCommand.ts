// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSettingsRequest, GetSettingsResponse, GetSettingsResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetSettingsCommand, se_GetSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSettingsCommand}.
 */
export interface GetSettingsCommandInput extends GetSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetSettingsCommand}.
 */
export interface GetSettingsCommandOutput extends GetSettingsResponse, __MetadataBearer {}

/**
 * <p> Gets the settings for a specified Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetSettingsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetSettingsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // GetSettingsRequest
 *   attribute: "ALL" || "IS_AWS_ORG_ENABLED" || "SNS_TOPIC" || "DEFAULT_ASSESSMENT_REPORTS_DESTINATION" || "DEFAULT_PROCESS_OWNERS" || "EVIDENCE_FINDER_ENABLEMENT" || "DEREGISTRATION_POLICY" || "DEFAULT_EXPORT_DESTINATION", // required
 * };
 * const command = new GetSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetSettingsResponse
 * //   settings: { // Settings
 * //     isAwsOrgEnabled: true || false,
 * //     snsTopic: "STRING_VALUE",
 * //     defaultAssessmentReportsDestination: { // AssessmentReportsDestination
 * //       destinationType: "S3",
 * //       destination: "STRING_VALUE",
 * //     },
 * //     defaultProcessOwners: [ // Roles
 * //       { // Role
 * //         roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 * //         roleArn: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     kmsKey: "STRING_VALUE",
 * //     evidenceFinderEnablement: { // EvidenceFinderEnablement
 * //       eventDataStoreArn: "STRING_VALUE",
 * //       enablementStatus: "ENABLED" || "DISABLED" || "ENABLE_IN_PROGRESS" || "DISABLE_IN_PROGRESS",
 * //       backfillStatus: "NOT_STARTED" || "IN_PROGRESS" || "COMPLETED",
 * //       error: "STRING_VALUE",
 * //     },
 * //     deregistrationPolicy: { // DeregistrationPolicy
 * //       deleteResources: "ALL" || "DEFAULT",
 * //     },
 * //     defaultExportDestination: { // DefaultExportDestination
 * //       destinationType: "S3",
 * //       destination: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSettingsCommandInput - {@link GetSettingsCommandInput}
 * @returns {@link GetSettingsCommandOutput}
 * @see {@link GetSettingsCommandInput} for command's `input` shape.
 * @see {@link GetSettingsCommandOutput} for command's `response` shape.
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
 * @throws {@link AuditManagerServiceException}
 * <p>Base exception class for all service exceptions from AuditManager service.</p>
 *
 *
 * @public
 */
export class GetSettingsCommand extends $Command
  .classBuilder<
    GetSettingsCommandInput,
    GetSettingsCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "GetSettings", {})
  .n("AuditManagerClient", "GetSettingsCommand")
  .f(void 0, GetSettingsResponseFilterSensitiveLog)
  .ser(se_GetSettingsCommand)
  .de(de_GetSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSettingsRequest;
      output: GetSettingsResponse;
    };
    sdk: {
      input: GetSettingsCommandInput;
      output: GetSettingsCommandOutput;
    };
  };
}
