// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterOrganizationAdminAccountRequest, RegisterOrganizationAdminAccountResponse } from "../models/models_0";
import {
  de_RegisterOrganizationAdminAccountCommand,
  se_RegisterOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterOrganizationAdminAccountCommand}.
 */
export interface RegisterOrganizationAdminAccountCommandInput extends RegisterOrganizationAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link RegisterOrganizationAdminAccountCommand}.
 */
export interface RegisterOrganizationAdminAccountCommandOutput
  extends RegisterOrganizationAdminAccountResponse,
    __MetadataBearer {}

/**
 * <p> Enables an Amazon Web Services account within the organization as the delegated
 *          administrator for Audit Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, RegisterOrganizationAdminAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, RegisterOrganizationAdminAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = { // RegisterOrganizationAdminAccountRequest
 *   adminAccountId: "STRING_VALUE", // required
 * };
 * const command = new RegisterOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // RegisterOrganizationAdminAccountResponse
 * //   adminAccountId: "STRING_VALUE",
 * //   organizationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterOrganizationAdminAccountCommandInput - {@link RegisterOrganizationAdminAccountCommandInput}
 * @returns {@link RegisterOrganizationAdminAccountCommandOutput}
 * @see {@link RegisterOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link RegisterOrganizationAdminAccountCommandOutput} for command's `response` shape.
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
export class RegisterOrganizationAdminAccountCommand extends $Command
  .classBuilder<
    RegisterOrganizationAdminAccountCommandInput,
    RegisterOrganizationAdminAccountCommandOutput,
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
  .s("BedrockAssessmentManagerLambda", "RegisterOrganizationAdminAccount", {})
  .n("AuditManagerClient", "RegisterOrganizationAdminAccountCommand")
  .f(void 0, void 0)
  .ser(se_RegisterOrganizationAdminAccountCommand)
  .de(de_RegisterOrganizationAdminAccountCommand)
  .build() {}
