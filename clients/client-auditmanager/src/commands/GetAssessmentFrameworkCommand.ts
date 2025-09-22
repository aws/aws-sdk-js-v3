// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAssessmentFrameworkRequest, GetAssessmentFrameworkResponse } from "../models/models_0";
import { GetAssessmentFramework } from "../schemas/schemas_6_Assessment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssessmentFrameworkCommand}.
 */
export interface GetAssessmentFrameworkCommandInput extends GetAssessmentFrameworkRequest {}
/**
 * @public
 *
 * The output of {@link GetAssessmentFrameworkCommand}.
 */
export interface GetAssessmentFrameworkCommandOutput extends GetAssessmentFrameworkResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specified framework.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetAssessmentFrameworkCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetAssessmentFrameworkCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // GetAssessmentFrameworkRequest
 *   frameworkId: "STRING_VALUE", // required
 * };
 * const command = new GetAssessmentFrameworkCommand(input);
 * const response = await client.send(command);
 * // { // GetAssessmentFrameworkResponse
 * //   framework: { // Framework
 * //     arn: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     type: "Standard" || "Custom",
 * //     complianceType: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     logo: "STRING_VALUE",
 * //     controlSources: "STRING_VALUE",
 * //     controlSets: [ // ControlSets
 * //       { // ControlSet
 * //         id: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         controls: [ // Controls
 * //           { // Control
 * //             arn: "STRING_VALUE",
 * //             id: "STRING_VALUE",
 * //             type: "Standard" || "Custom" || "Core",
 * //             name: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //             testingInformation: "STRING_VALUE",
 * //             actionPlanTitle: "STRING_VALUE",
 * //             actionPlanInstructions: "STRING_VALUE",
 * //             controlSources: "STRING_VALUE",
 * //             controlMappingSources: [ // ControlMappingSources
 * //               { // ControlMappingSource
 * //                 sourceId: "STRING_VALUE",
 * //                 sourceName: "STRING_VALUE",
 * //                 sourceDescription: "STRING_VALUE",
 * //                 sourceSetUpOption: "System_Controls_Mapping" || "Procedural_Controls_Mapping",
 * //                 sourceType: "AWS_Cloudtrail" || "AWS_Config" || "AWS_Security_Hub" || "AWS_API_Call" || "MANUAL" || "Common_Control" || "Core_Control",
 * //                 sourceKeyword: { // SourceKeyword
 * //                   keywordInputType: "SELECT_FROM_LIST" || "UPLOAD_FILE" || "INPUT_TEXT",
 * //                   keywordValue: "STRING_VALUE",
 * //                 },
 * //                 sourceFrequency: "DAILY" || "WEEKLY" || "MONTHLY",
 * //                 troubleshootingText: "STRING_VALUE",
 * //               },
 * //             ],
 * //             createdAt: new Date("TIMESTAMP"),
 * //             lastUpdatedAt: new Date("TIMESTAMP"),
 * //             createdBy: "STRING_VALUE",
 * //             lastUpdatedBy: "STRING_VALUE",
 * //             tags: { // TagMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             state: "ACTIVE" || "END_OF_SUPPORT",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     lastUpdatedBy: "STRING_VALUE",
 * //     tags: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAssessmentFrameworkCommandInput - {@link GetAssessmentFrameworkCommandInput}
 * @returns {@link GetAssessmentFrameworkCommandOutput}
 * @see {@link GetAssessmentFrameworkCommandInput} for command's `input` shape.
 * @see {@link GetAssessmentFrameworkCommandOutput} for command's `response` shape.
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
export class GetAssessmentFrameworkCommand extends $Command
  .classBuilder<
    GetAssessmentFrameworkCommandInput,
    GetAssessmentFrameworkCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "GetAssessmentFramework", {})
  .n("AuditManagerClient", "GetAssessmentFrameworkCommand")
  .sc(GetAssessmentFramework)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssessmentFrameworkRequest;
      output: GetAssessmentFrameworkResponse;
    };
    sdk: {
      input: GetAssessmentFrameworkCommandInput;
      output: GetAssessmentFrameworkCommandOutput;
    };
  };
}
