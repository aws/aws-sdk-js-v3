// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateClientVpnTargetNetworkRequest,
  DisassociateClientVpnTargetNetworkResult,
} from "../models/models_5";
import {
  de_DisassociateClientVpnTargetNetworkCommand,
  se_DisassociateClientVpnTargetNetworkCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateClientVpnTargetNetworkCommand}.
 */
export interface DisassociateClientVpnTargetNetworkCommandInput extends DisassociateClientVpnTargetNetworkRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateClientVpnTargetNetworkCommand}.
 */
export interface DisassociateClientVpnTargetNetworkCommandOutput
  extends DisassociateClientVpnTargetNetworkResult,
    __MetadataBearer {}

/**
 * <p>Disassociates a target network from the specified Client VPN endpoint. When you disassociate the
 * 			last target network from a Client VPN, the following happens:</p>
 *          <ul>
 *             <li>
 *                <p>The route that was automatically added for the VPC is deleted</p>
 *             </li>
 *             <li>
 *                <p>All active client connections are terminated</p>
 *             </li>
 *             <li>
 *                <p>New client connections are disallowed</p>
 *             </li>
 *             <li>
 *                <p>The Client VPN endpoint's status changes to <code>pending-associate</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateClientVpnTargetNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateClientVpnTargetNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateClientVpnTargetNetworkRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   AssociationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisassociateClientVpnTargetNetworkCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateClientVpnTargetNetworkResult
 * //   AssociationId: "STRING_VALUE",
 * //   Status: { // AssociationStatus
 * //     Code: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateClientVpnTargetNetworkCommandInput - {@link DisassociateClientVpnTargetNetworkCommandInput}
 * @returns {@link DisassociateClientVpnTargetNetworkCommandOutput}
 * @see {@link DisassociateClientVpnTargetNetworkCommandInput} for command's `input` shape.
 * @see {@link DisassociateClientVpnTargetNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DisassociateClientVpnTargetNetworkCommand extends $Command
  .classBuilder<
    DisassociateClientVpnTargetNetworkCommandInput,
    DisassociateClientVpnTargetNetworkCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DisassociateClientVpnTargetNetwork", {})
  .n("EC2Client", "DisassociateClientVpnTargetNetworkCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateClientVpnTargetNetworkCommand)
  .de(de_DisassociateClientVpnTargetNetworkCommand)
  .build() {}
