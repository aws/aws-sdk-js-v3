// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetServicesInScopeRequest, GetServicesInScopeResponse } from "../models/models_0";
import { GetServicesInScope } from "../schemas/schemas_0";

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
 * <p>Gets a list of the Amazon Web Services services from which Audit Manager can collect
 *          evidence. </p>
 *          <p>Audit Manager defines which Amazon Web Services services are in scope for an
 *          assessment. Audit Manager infers this scope by examining the assessment’s controls and
 *          their data sources, and then mapping this information to one or more of the corresponding
 *             Amazon Web Services services that are in this list.</p>
 *          <note>
 *             <p>For information about why it's no longer possible to specify services in scope manually, see
 *                <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/evidence-collection-issues.html#unable-to-edit-services">I can't edit the services in scope for my assessment</a> in
 *             the <i>Troubleshooting</i> section of the Audit Manager user
 *             guide.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetServicesInScopeCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetServicesInScopeCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "GetServicesInScope", {})
  .n("AuditManagerClient", "GetServicesInScopeCommand")
  .sc(GetServicesInScope)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetServicesInScopeResponse;
    };
    sdk: {
      input: GetServicesInScopeCommandInput;
      output: GetServicesInScopeCommandOutput;
    };
  };
}
