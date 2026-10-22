// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetTransitGatewayAttachmentNatConfigurationRequest,
  GetTransitGatewayAttachmentNatConfigurationResult,
} from "../models/models_6";
import { GetTransitGatewayAttachmentNatConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayAttachmentNatConfigurationCommand}.
 */
export interface GetTransitGatewayAttachmentNatConfigurationCommandInput extends GetTransitGatewayAttachmentNatConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayAttachmentNatConfigurationCommand}.
 */
export interface GetTransitGatewayAttachmentNatConfigurationCommandOutput extends GetTransitGatewayAttachmentNatConfigurationResult, __MetadataBearer {}

/**
 * <p>Describes the NAT configuration for the specified transit gateway attachment. Only the owner of the transit gateway can describe the NAT configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayAttachmentNatConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayAttachmentNatConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayAttachmentNatConfigurationRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetTransitGatewayAttachmentNatConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayAttachmentNatConfigurationResult
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
 * @param GetTransitGatewayAttachmentNatConfigurationCommandInput - {@link GetTransitGatewayAttachmentNatConfigurationCommandInput}
 * @returns {@link GetTransitGatewayAttachmentNatConfigurationCommandOutput}
 * @see {@link GetTransitGatewayAttachmentNatConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayAttachmentNatConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetTransitGatewayAttachmentNatConfigurationCommand extends command<GetTransitGatewayAttachmentNatConfigurationCommandInput, GetTransitGatewayAttachmentNatConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetTransitGatewayAttachmentNatConfiguration",
  GetTransitGatewayAttachmentNatConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransitGatewayAttachmentNatConfigurationRequest;
      output: GetTransitGatewayAttachmentNatConfigurationResult;
    };
    sdk: {
      input: GetTransitGatewayAttachmentNatConfigurationCommandInput;
      output: GetTransitGatewayAttachmentNatConfigurationCommandOutput;
    };
  };
}
