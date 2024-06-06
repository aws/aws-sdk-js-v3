// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetOrganizationAdminAccountRequest, GetOrganizationAdminAccountResponse } from "../models/models_0";
import {
  de_GetOrganizationAdminAccountCommand,
  se_GetOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOrganizationAdminAccountCommand}.
 */
export interface GetOrganizationAdminAccountCommandInput extends GetOrganizationAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetOrganizationAdminAccountCommand}.
 */
export interface GetOrganizationAdminAccountCommandOutput
  extends GetOrganizationAdminAccountResponse,
    __MetadataBearer {}

/**
 * <p> Gets the name of the delegated Amazon Web Services administrator account for a specified
 *          organization. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetOrganizationAdminAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetOrganizationAdminAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * const client = new AuditManagerClient(config);
 * const input = {};
 * const command = new GetOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationAdminAccountResponse
 * //   adminAccountId: "STRING_VALUE",
 * //   organizationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOrganizationAdminAccountCommandInput - {@link GetOrganizationAdminAccountCommandInput}
 * @returns {@link GetOrganizationAdminAccountCommandOutput}
 * @see {@link GetOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationAdminAccountCommandOutput} for command's `response` shape.
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
export class GetOrganizationAdminAccountCommand extends $Command
  .classBuilder<
    GetOrganizationAdminAccountCommandInput,
    GetOrganizationAdminAccountCommandOutput,
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
  .s("BedrockAssessmentManagerLambda", "GetOrganizationAdminAccount", {})
  .n("AuditManagerClient", "GetOrganizationAdminAccountCommand")
  .f(void 0, void 0)
  .ser(se_GetOrganizationAdminAccountCommand)
  .de(de_GetOrganizationAdminAccountCommand)
  .build() {}
