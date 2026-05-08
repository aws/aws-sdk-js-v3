// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AcceptTransitGatewayClientVpnAttachmentRequest,
  AcceptTransitGatewayClientVpnAttachmentResult,
} from "../models/models_0";
import { AcceptTransitGatewayClientVpnAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptTransitGatewayClientVpnAttachmentCommand}.
 */
export interface AcceptTransitGatewayClientVpnAttachmentCommandInput extends AcceptTransitGatewayClientVpnAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link AcceptTransitGatewayClientVpnAttachmentCommand}.
 */
export interface AcceptTransitGatewayClientVpnAttachmentCommandOutput extends AcceptTransitGatewayClientVpnAttachmentResult, __MetadataBearer {}

/**
 * <p>Accepts a Transit Gateway attachment request for a Client VPN endpoint. The Transit Gateway owner must accept the attachment request before the Client VPN endpoint can route traffic through the Transit Gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptTransitGatewayClientVpnAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptTransitGatewayClientVpnAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AcceptTransitGatewayClientVpnAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AcceptTransitGatewayClientVpnAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // AcceptTransitGatewayClientVpnAttachmentResult
 * //   TransitGatewayClientVpnAttachment: { // TransitGatewayClientVpnAttachment
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     ClientVpnEndpointId: "STRING_VALUE",
 * //     ClientVpnOwnerId: "STRING_VALUE",
 * //     State: "pending-acceptance" || "pending" || "rejected" || "available" || "deleting" || "deleted",
 * //     CreationTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AcceptTransitGatewayClientVpnAttachmentCommandInput - {@link AcceptTransitGatewayClientVpnAttachmentCommandInput}
 * @returns {@link AcceptTransitGatewayClientVpnAttachmentCommandOutput}
 * @see {@link AcceptTransitGatewayClientVpnAttachmentCommandInput} for command's `input` shape.
 * @see {@link AcceptTransitGatewayClientVpnAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AcceptTransitGatewayClientVpnAttachmentCommand extends $Command
  .classBuilder<
    AcceptTransitGatewayClientVpnAttachmentCommandInput,
    AcceptTransitGatewayClientVpnAttachmentCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "AcceptTransitGatewayClientVpnAttachment", {})
  .n("EC2Client", "AcceptTransitGatewayClientVpnAttachmentCommand")
  .sc(AcceptTransitGatewayClientVpnAttachment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptTransitGatewayClientVpnAttachmentRequest;
      output: AcceptTransitGatewayClientVpnAttachmentResult;
    };
    sdk: {
      input: AcceptTransitGatewayClientVpnAttachmentCommandInput;
      output: AcceptTransitGatewayClientVpnAttachmentCommandOutput;
    };
  };
}
