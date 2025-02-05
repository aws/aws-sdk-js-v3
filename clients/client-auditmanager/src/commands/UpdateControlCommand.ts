// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateControlRequest,
  UpdateControlRequestFilterSensitiveLog,
  UpdateControlResponse,
  UpdateControlResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateControlCommand, se_UpdateControlCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateControlCommand}.
 */
export interface UpdateControlCommandInput extends UpdateControlRequest {}
/**
 * @public
 *
 * The output of {@link UpdateControlCommand}.
 */
export interface UpdateControlCommandOutput extends UpdateControlResponse, __MetadataBearer {}

/**
 * <p> Updates a custom control in Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, UpdateControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, UpdateControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AuditManagerClient(config);
 * const input = { // UpdateControlRequest
 *   controlId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   testingInformation: "STRING_VALUE",
 *   actionPlanTitle: "STRING_VALUE",
 *   actionPlanInstructions: "STRING_VALUE",
 *   controlMappingSources: [ // ControlMappingSources // required
 *     { // ControlMappingSource
 *       sourceId: "STRING_VALUE",
 *       sourceName: "STRING_VALUE",
 *       sourceDescription: "STRING_VALUE",
 *       sourceSetUpOption: "System_Controls_Mapping" || "Procedural_Controls_Mapping",
 *       sourceType: "AWS_Cloudtrail" || "AWS_Config" || "AWS_Security_Hub" || "AWS_API_Call" || "MANUAL" || "Common_Control" || "Core_Control",
 *       sourceKeyword: { // SourceKeyword
 *         keywordInputType: "SELECT_FROM_LIST" || "UPLOAD_FILE" || "INPUT_TEXT",
 *         keywordValue: "STRING_VALUE",
 *       },
 *       sourceFrequency: "DAILY" || "WEEKLY" || "MONTHLY",
 *       troubleshootingText: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateControlCommand(input);
 * const response = await client.send(command);
 * // { // UpdateControlResponse
 * //   control: { // Control
 * //     arn: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     type: "Standard" || "Custom" || "Core",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     testingInformation: "STRING_VALUE",
 * //     actionPlanTitle: "STRING_VALUE",
 * //     actionPlanInstructions: "STRING_VALUE",
 * //     controlSources: "STRING_VALUE",
 * //     controlMappingSources: [ // ControlMappingSources
 * //       { // ControlMappingSource
 * //         sourceId: "STRING_VALUE",
 * //         sourceName: "STRING_VALUE",
 * //         sourceDescription: "STRING_VALUE",
 * //         sourceSetUpOption: "System_Controls_Mapping" || "Procedural_Controls_Mapping",
 * //         sourceType: "AWS_Cloudtrail" || "AWS_Config" || "AWS_Security_Hub" || "AWS_API_Call" || "MANUAL" || "Common_Control" || "Core_Control",
 * //         sourceKeyword: { // SourceKeyword
 * //           keywordInputType: "SELECT_FROM_LIST" || "UPLOAD_FILE" || "INPUT_TEXT",
 * //           keywordValue: "STRING_VALUE",
 * //         },
 * //         sourceFrequency: "DAILY" || "WEEKLY" || "MONTHLY",
 * //         troubleshootingText: "STRING_VALUE",
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     lastUpdatedBy: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     state: "ACTIVE" || "END_OF_SUPPORT",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateControlCommandInput - {@link UpdateControlCommandInput}
 * @returns {@link UpdateControlCommandOutput}
 * @see {@link UpdateControlCommandInput} for command's `input` shape.
 * @see {@link UpdateControlCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateControlCommand extends $Command
  .classBuilder<
    UpdateControlCommandInput,
    UpdateControlCommandOutput,
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
  .s("BedrockAssessmentManagerLambda", "UpdateControl", {})
  .n("AuditManagerClient", "UpdateControlCommand")
  .f(UpdateControlRequestFilterSensitiveLog, UpdateControlResponseFilterSensitiveLog)
  .ser(se_UpdateControlCommand)
  .de(de_UpdateControlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateControlRequest;
      output: UpdateControlResponse;
    };
    sdk: {
      input: UpdateControlCommandInput;
      output: UpdateControlCommandOutput;
    };
  };
}
