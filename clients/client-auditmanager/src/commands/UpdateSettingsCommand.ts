// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateSettingsRequest,
  UpdateSettingsRequestFilterSensitiveLog,
  UpdateSettingsResponse,
  UpdateSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateSettingsCommand, se_UpdateSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSettingsCommand}.
 */
export interface UpdateSettingsCommandInput extends UpdateSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSettingsCommand}.
 */
export interface UpdateSettingsCommandOutput extends UpdateSettingsResponse, __MetadataBearer {}

/**
 * <p> Updates Audit Manager settings for the current account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateSettingsCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateSettingsCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // UpdateSettingsRequest
 *   snsTopic: "STRING_VALUE",
 *   defaultAssessmentReportsDestination: { // AssessmentReportsDestination
 *     destinationType: "S3",
 *     destination: "STRING_VALUE",
 *   },
 *   defaultProcessOwners: [ // Roles
 *     { // Role
 *       roleType: "PROCESS_OWNER" || "RESOURCE_OWNER", // required
 *       roleArn: "STRING_VALUE", // required
 *     },
 *   ],
 *   kmsKey: "STRING_VALUE",
 *   evidenceFinderEnabled: true || false,
 *   deregistrationPolicy: { // DeregistrationPolicy
 *     deleteResources: "ALL" || "DEFAULT",
 *   },
 *   defaultExportDestination: { // DefaultExportDestination
 *     destinationType: "S3",
 *     destination: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSettingsResponse
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
 * @param UpdateSettingsCommandInput - {@link UpdateSettingsCommandInput}
 * @returns {@link UpdateSettingsCommandOutput}
 * @see {@link UpdateSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateSettingsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateSettingsCommand extends $Command
  .classBuilder<
    UpdateSettingsCommandInput,
    UpdateSettingsCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BedrockAssessmentManagerLambda", "UpdateSettings", {})
  .n("AuditManagerClient", "UpdateSettingsCommand")
  .f(UpdateSettingsRequestFilterSensitiveLog, UpdateSettingsResponseFilterSensitiveLog)
  .ser(se_UpdateSettingsCommand)
  .de(de_UpdateSettingsCommand)
  .build() {}
