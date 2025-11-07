// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { AssociateAdminAccountRequest } from "../models/models_0";
import { AssociateAdminAccount } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateAdminAccountCommand}.
 */
export interface AssociateAdminAccountCommandInput extends AssociateAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAdminAccountCommand}.
 */
export interface AssociateAdminAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets a Firewall Manager default administrator account. The Firewall Manager default administrator account can manage third-party firewalls and has full administrative scope that allows administration of all policy types, accounts, organizational units, and Regions. This account must be a member account of the organization in Organizations whose resources you want to protect.</p>
 *          <p>For information about working with Firewall Manager administrator accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/fms-administrators.html">Managing Firewall Manager administrators</a> in the <i>Firewall Manager Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, AssociateAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, AssociateAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // AssociateAdminAccountRequest
 *   AdminAccount: "STRING_VALUE", // required
 * };
 * const command = new AssociateAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateAdminAccountCommandInput - {@link AssociateAdminAccountCommandInput}
 * @returns {@link AssociateAdminAccountCommandOutput}
 * @see {@link AssociateAdminAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an Amazon Web Services account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 *
 * @public
 */
export class AssociateAdminAccountCommand extends $Command
  .classBuilder<
    AssociateAdminAccountCommandInput,
    AssociateAdminAccountCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "AssociateAdminAccount", {})
  .n("FMSClient", "AssociateAdminAccountCommand")
  .sc(AssociateAdminAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAdminAccountRequest;
      output: {};
    };
    sdk: {
      input: AssociateAdminAccountCommandInput;
      output: AssociateAdminAccountCommandOutput;
    };
  };
}
