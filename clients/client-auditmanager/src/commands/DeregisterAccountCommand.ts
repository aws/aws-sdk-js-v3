// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeregisterAccountRequest, DeregisterAccountResponse } from "../models/models_0";
import { DeregisterAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterAccountCommand}.
 */
export interface DeregisterAccountCommandInput extends DeregisterAccountRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterAccountCommand}.
 */
export interface DeregisterAccountCommandOutput extends DeregisterAccountResponse, __MetadataBearer {}

/**
 * <p> Deregisters an account in Audit Manager. </p>
 *          <note>
 *             <p>Before you deregister, you can use the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html">UpdateSettings</a> API operation to set your preferred data retention policy. By
 *             default, Audit Manager retains your data. If you want to delete your data, you can
 *             use the <code>DeregistrationPolicy</code> attribute to request the deletion of your
 *             data. </p>
 *             <p>For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data
 *                Protection</a> in the <i>Audit Manager User Guide</i>.
 *          </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, DeregisterAccountCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, DeregisterAccountCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = {};
 * const command = new DeregisterAccountCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterAccountResponse
 * //   status: "ACTIVE" || "INACTIVE" || "PENDING_ACTIVATION",
 * // };
 *
 * ```
 *
 * @param DeregisterAccountCommandInput - {@link DeregisterAccountCommandInput}
 * @returns {@link DeregisterAccountCommandOutput}
 * @see {@link DeregisterAccountCommandInput} for command's `input` shape.
 * @see {@link DeregisterAccountCommandOutput} for command's `response` shape.
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
export class DeregisterAccountCommand extends $Command
  .classBuilder<
    DeregisterAccountCommandInput,
    DeregisterAccountCommandOutput,
    AuditManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AuditManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BedrockAssessmentManagerLambda", "DeregisterAccount", {})
  .n("AuditManagerClient", "DeregisterAccountCommand")
  .sc(DeregisterAccount$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DeregisterAccountResponse;
    };
    sdk: {
      input: DeregisterAccountCommandInput;
      output: DeregisterAccountCommandOutput;
    };
  };
}
