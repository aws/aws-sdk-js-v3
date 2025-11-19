// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteTransitGatewayRouteTableAnnouncementRequest,
  DeleteTransitGatewayRouteTableAnnouncementResult,
} from "../models/models_2";
import { DeleteTransitGatewayRouteTableAnnouncement } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayRouteTableAnnouncementCommand}.
 */
export interface DeleteTransitGatewayRouteTableAnnouncementCommandInput
  extends DeleteTransitGatewayRouteTableAnnouncementRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayRouteTableAnnouncementCommand}.
 */
export interface DeleteTransitGatewayRouteTableAnnouncementCommandOutput
  extends DeleteTransitGatewayRouteTableAnnouncementResult,
    __MetadataBearer {}

/**
 * <p>Advertises to the transit gateway that a transit gateway route table is deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayRouteTableAnnouncementCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayRouteTableAnnouncementCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayRouteTableAnnouncementRequest
 *   TransitGatewayRouteTableAnnouncementId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayRouteTableAnnouncementCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayRouteTableAnnouncementResult
 * //   TransitGatewayRouteTableAnnouncement: { // TransitGatewayRouteTableAnnouncement
 * //     TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     CoreNetworkId: "STRING_VALUE",
 * //     PeerTransitGatewayId: "STRING_VALUE",
 * //     PeerCoreNetworkId: "STRING_VALUE",
 * //     PeeringAttachmentId: "STRING_VALUE",
 * //     AnnouncementDirection: "outgoing" || "incoming",
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     State: "available" || "pending" || "failing" || "failed" || "deleting" || "deleted",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteTransitGatewayRouteTableAnnouncementCommandInput - {@link DeleteTransitGatewayRouteTableAnnouncementCommandInput}
 * @returns {@link DeleteTransitGatewayRouteTableAnnouncementCommandOutput}
 * @see {@link DeleteTransitGatewayRouteTableAnnouncementCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayRouteTableAnnouncementCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayRouteTableAnnouncementCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayRouteTableAnnouncementCommandInput,
    DeleteTransitGatewayRouteTableAnnouncementCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteTransitGatewayRouteTableAnnouncement", {})
  .n("EC2Client", "DeleteTransitGatewayRouteTableAnnouncementCommand")
  .sc(DeleteTransitGatewayRouteTableAnnouncement)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayRouteTableAnnouncementRequest;
      output: DeleteTransitGatewayRouteTableAnnouncementResult;
    };
    sdk: {
      input: DeleteTransitGatewayRouteTableAnnouncementCommandInput;
      output: DeleteTransitGatewayRouteTableAnnouncementCommandOutput;
    };
  };
}
