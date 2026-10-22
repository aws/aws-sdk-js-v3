// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyTransitGatewayAttachmentNatConfigurationRequest,
  ModifyTransitGatewayAttachmentNatConfigurationResult,
} from "../models/models_7";
import { ModifyTransitGatewayAttachmentNatConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyTransitGatewayAttachmentNatConfigurationCommand}.
 */
export interface ModifyTransitGatewayAttachmentNatConfigurationCommandInput extends ModifyTransitGatewayAttachmentNatConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTransitGatewayAttachmentNatConfigurationCommand}.
 */
export interface ModifyTransitGatewayAttachmentNatConfigurationCommandOutput extends ModifyTransitGatewayAttachmentNatConfigurationResult, __MetadataBearer {}

/**
 * <p>Modifies the NAT configuration for the specified transit gateway attachment. Use this operation to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Enable or disable NAT gateway support for the attachment.</p>
 *             </li>
 *             <li>
 *                <p>Specify whether the transit gateway installs routes for the NAT CIDRs.</p>
 *             </li>
 *             <li>
 *                <p>Replace the NAT gateway rules for the attachment.</p>
 *             </li>
 *          </ul>
 *          <p>Only the owner of the transit gateway can modify the NAT configuration.</p>
 *          <p>With NAT gateway support enabled, the transit gateway translates addresses in each rule's <code>MatchSourceCidr</code> range
 *          to the corresponding addresses in its <code>NatCidr</code> range.</p>
 *          <p>The transit gateway applies changes asynchronously. To check the result, use <code>GetTransitGatewayAttachmentNatConfiguration</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayAttachmentNatConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayAttachmentNatConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyTransitGatewayAttachmentNatConfigurationRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   NatGatewaySupport: "enable" || "disable",
 *   NatSystemRouteSupport: "enable" || "disable",
 *   NatGatewayRules: [ // TransitGatewayNatRuleRequestList
 *     { // TransitGatewayNatRuleRequest
 *       RuleNumber: Number("int"),
 *       MatchSourceCidr: "STRING_VALUE",
 *       NatCidr: "STRING_VALUE",
 *     },
 *   ],
 *   ResetNatGatewayRules: true || false,
 *   DryRun: true || false,
 * };
 * const command = new ModifyTransitGatewayAttachmentNatConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTransitGatewayAttachmentNatConfigurationResult
 * //   TransitGatewayAttachmentId: "STRING_VALUE",
 * //   NatGatewaySupport: "enabled" || "disabled" || "enabling" || "disabling",
 * //   NatSystemRouteSupport: "enable" || "disable",
 * //   NatGatewayRules: [ // TransitGatewayNatRuleList
 * //     { // TransitGatewayNatRule
 * //       RuleNumber: Number("int"),
 * //       MatchSourceCidr: "STRING_VALUE",
 * //       NatCidr: "STRING_VALUE",
 * //       State: "pending" || "activated" || "deactivated" || "deleting",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyTransitGatewayAttachmentNatConfigurationCommandInput - {@link ModifyTransitGatewayAttachmentNatConfigurationCommandInput}
 * @returns {@link ModifyTransitGatewayAttachmentNatConfigurationCommandOutput}
 * @see {@link ModifyTransitGatewayAttachmentNatConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayAttachmentNatConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyTransitGatewayAttachmentNatConfigurationCommand extends command<ModifyTransitGatewayAttachmentNatConfigurationCommandInput, ModifyTransitGatewayAttachmentNatConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "ModifyTransitGatewayAttachmentNatConfiguration",
  ModifyTransitGatewayAttachmentNatConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTransitGatewayAttachmentNatConfigurationRequest;
      output: ModifyTransitGatewayAttachmentNatConfigurationResult;
    };
    sdk: {
      input: ModifyTransitGatewayAttachmentNatConfigurationCommandInput;
      output: ModifyTransitGatewayAttachmentNatConfigurationCommandOutput;
    };
  };
}
