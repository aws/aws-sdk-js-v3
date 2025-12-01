// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetControlRequest, GetControlResponse } from "../models/models_0";
import { GetControl } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetControlCommand}.
 */
export interface GetControlCommandInput extends GetControlRequest {}
/**
 * @public
 *
 * The output of {@link GetControlCommand}.
 */
export interface GetControlCommandOutput extends GetControlResponse, __MetadataBearer {}

/**
 * <p> Gets information about a specified control.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetControlCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetControlCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // GetControlRequest
 *   controlId: "STRING_VALUE", // required
 * };
 * const command = new GetControlCommand(input);
 * const response = await client.send(command);
 * // { // GetControlResponse
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
 * @param GetControlCommandInput - {@link GetControlCommandInput}
 * @returns {@link GetControlCommandOutput}
 * @see {@link GetControlCommandInput} for command's `input` shape.
 * @see {@link GetControlCommandOutput} for command's `response` shape.
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
export class GetControlCommand extends $Command
  .classBuilder<
    GetControlCommandInput,
    GetControlCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "GetControl", {})
  .n("AuditManagerClient", "GetControlCommand")
  .sc(GetControl)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetControlRequest;
      output: GetControlResponse;
    };
    sdk: {
      input: GetControlCommandInput;
      output: GetControlCommandOutput;
    };
  };
}
