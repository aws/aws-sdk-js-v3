// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteTransitGatewayClientVpnAttachmentRequest,
  DeleteTransitGatewayClientVpnAttachmentResult,
} from "../models/models_3";
import { DeleteTransitGatewayClientVpnAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayClientVpnAttachmentCommand}.
 */
export interface DeleteTransitGatewayClientVpnAttachmentCommandInput extends DeleteTransitGatewayClientVpnAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayClientVpnAttachmentCommand}.
 */
export interface DeleteTransitGatewayClientVpnAttachmentCommandOutput extends DeleteTransitGatewayClientVpnAttachmentResult, __MetadataBearer {}

/**
 * <p>Deletes a Transit Gateway attachment for a Client VPN endpoint. The Transit Gateway owner can delete the attachment to remove the association between the Client VPN endpoint and the Transit Gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayClientVpnAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayClientVpnAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayClientVpnAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayClientVpnAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayClientVpnAttachmentResult
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
 * @param DeleteTransitGatewayClientVpnAttachmentCommandInput - {@link DeleteTransitGatewayClientVpnAttachmentCommandInput}
 * @returns {@link DeleteTransitGatewayClientVpnAttachmentCommandOutput}
 * @see {@link DeleteTransitGatewayClientVpnAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayClientVpnAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayClientVpnAttachmentCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayClientVpnAttachmentCommandInput,
    DeleteTransitGatewayClientVpnAttachmentCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteTransitGatewayClientVpnAttachment", {})
  .n("EC2Client", "DeleteTransitGatewayClientVpnAttachmentCommand")
  .sc(DeleteTransitGatewayClientVpnAttachment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayClientVpnAttachmentRequest;
      output: DeleteTransitGatewayClientVpnAttachmentResult;
    };
    sdk: {
      input: DeleteTransitGatewayClientVpnAttachmentCommandInput;
      output: DeleteTransitGatewayClientVpnAttachmentCommandOutput;
    };
  };
}
