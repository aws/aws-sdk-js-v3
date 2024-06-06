// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetServicesInScopeRequest, GetServicesInScopeResponse } from "../models/models_0";
import { de_GetServicesInScopeCommand, se_GetServicesInScopeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetServicesInScopeCommand}.
 */
export interface GetServicesInScopeCommandInput extends GetServicesInScopeRequest {}
/**
 * @public
 *
 * The output of {@link GetServicesInScopeCommand}.
 */
export interface GetServicesInScopeCommandOutput extends GetServicesInScopeResponse, __MetadataBearer {}

/**
 * <p>Gets a list of all of the Amazon Web Services that you can choose to include in
 *          your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to
 *          narrow the assessment's <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetServicesInScopeCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetServicesInScopeCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = {};
 * const command = new GetServicesInScopeCommand(input);
 * const response = await client.send(command);
 * // { // GetServicesInScopeResponse
 * //   serviceMetadata: [ // ServiceMetadataList
 * //     { // ServiceMetadata
 * //       name: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       category: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetServicesInScopeCommandInput - {@link GetServicesInScopeCommandInput}
 * @returns {@link GetServicesInScopeCommandOutput}
 * @see {@link GetServicesInScopeCommandInput} for command's `input` shape.
 * @see {@link GetServicesInScopeCommandOutput} for command's `response` shape.
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
export class GetServicesInScopeCommand extends $Command
  .classBuilder<
    GetServicesInScopeCommandInput,
    GetServicesInScopeCommandOutput,
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
  .s("BedrockAssessmentManagerLambda", "GetServicesInScope", {})
  .n("AuditManagerClient", "GetServicesInScopeCommand")
  .f(void 0, void 0)
  .ser(se_GetServicesInScopeCommand)
  .de(de_GetServicesInScopeCommand)
  .build() {}
