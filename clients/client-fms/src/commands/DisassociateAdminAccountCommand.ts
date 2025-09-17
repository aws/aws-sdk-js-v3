// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { DisassociateAdminAccountRequest } from "../models/models_0";
import { de_DisassociateAdminAccountCommand, se_DisassociateAdminAccountCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateAdminAccountCommand}.
 */
export interface DisassociateAdminAccountCommandInput extends DisassociateAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAdminAccountCommand}.
 */
export interface DisassociateAdminAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates an Firewall Manager administrator account. To set a different account as an Firewall Manager administrator, submit a <a>PutAdminAccount</a> request. To set an account as a default administrator account, you must submit an <a>AssociateAdminAccount</a> request.</p>
 *          <p>Disassociation of the default administrator account follows the first in, last out principle. If you are the default administrator, all Firewall Manager administrators within the organization must first disassociate their accounts before you can disassociate your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DisassociateAdminAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DisassociateAdminAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = {};
 * const command = new DisassociateAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAdminAccountCommandInput - {@link DisassociateAdminAccountCommandInput}
 * @returns {@link DisassociateAdminAccountCommandOutput}
 * @see {@link DisassociateAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
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
export class DisassociateAdminAccountCommand extends $Command
  .classBuilder<
    DisassociateAdminAccountCommandInput,
    DisassociateAdminAccountCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSFMS_20180101", "DisassociateAdminAccount", {})
  .n("FMSClient", "DisassociateAdminAccountCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateAdminAccountCommand)
  .de(de_DisassociateAdminAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisassociateAdminAccountCommandInput;
      output: DisassociateAdminAccountCommandOutput;
    };
  };
}
