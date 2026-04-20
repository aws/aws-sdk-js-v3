// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  RejectTransitGatewayClientVpnAttachmentRequest,
  RejectTransitGatewayClientVpnAttachmentResult,
} from "../models/models_7";
import { RejectTransitGatewayClientVpnAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectTransitGatewayClientVpnAttachmentCommand}.
 */
export interface RejectTransitGatewayClientVpnAttachmentCommandInput extends RejectTransitGatewayClientVpnAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link RejectTransitGatewayClientVpnAttachmentCommand}.
 */
export interface RejectTransitGatewayClientVpnAttachmentCommandOutput extends RejectTransitGatewayClientVpnAttachmentResult, __MetadataBearer {}

/**
 * <p>Rejects a Transit Gateway attachment request for a Client VPN endpoint. The Transit Gateway owner can reject the attachment request to prevent the Client VPN endpoint from routing traffic through the Transit Gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectTransitGatewayClientVpnAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectTransitGatewayClientVpnAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // RejectTransitGatewayClientVpnAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new RejectTransitGatewayClientVpnAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // RejectTransitGatewayClientVpnAttachmentResult
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
 * @param RejectTransitGatewayClientVpnAttachmentCommandInput - {@link RejectTransitGatewayClientVpnAttachmentCommandInput}
 * @returns {@link RejectTransitGatewayClientVpnAttachmentCommandOutput}
 * @see {@link RejectTransitGatewayClientVpnAttachmentCommandInput} for command's `input` shape.
 * @see {@link RejectTransitGatewayClientVpnAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RejectTransitGatewayClientVpnAttachmentCommand extends $Command
  .classBuilder<
    RejectTransitGatewayClientVpnAttachmentCommandInput,
    RejectTransitGatewayClientVpnAttachmentCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "RejectTransitGatewayClientVpnAttachment", {})
  .n("EC2Client", "RejectTransitGatewayClientVpnAttachmentCommand")
  .sc(RejectTransitGatewayClientVpnAttachment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectTransitGatewayClientVpnAttachmentRequest;
      output: RejectTransitGatewayClientVpnAttachmentResult;
    };
    sdk: {
      input: RejectTransitGatewayClientVpnAttachmentCommandInput;
      output: RejectTransitGatewayClientVpnAttachmentCommandOutput;
    };
  };
}
