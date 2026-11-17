// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyTransitGatewayPeeringAttachmentRequest,
  ModifyTransitGatewayPeeringAttachmentResult,
} from "../models/models_7";
import { ModifyTransitGatewayPeeringAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyTransitGatewayPeeringAttachmentCommand}.
 */
export interface ModifyTransitGatewayPeeringAttachmentCommandInput extends ModifyTransitGatewayPeeringAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTransitGatewayPeeringAttachmentCommand}.
 */
export interface ModifyTransitGatewayPeeringAttachmentCommandOutput extends ModifyTransitGatewayPeeringAttachmentResult, __MetadataBearer {}

/**
 * <p>Modifies the options for a transit gateway peering attachment. The peering attachment must be in the <code>available</code> state.</p>
 *          <p>You can allow multipath resilience for your side of an inter-Region transit gateway peering attachment between
 *             supported Regions.
 *             Multipath resilience isn't supported for transit gateway peering attachments in the same Region. It takes
 *             effect only when both the requester and the accepter allow it. To modify the requester side, send the
 *             request in the Region of the requester transit gateway. To modify the accepter side, send the request in the
 *             Region of the accepter transit gateway. To check whether multipath resilience is in effect, use
 *             <a>DescribeTransitGatewayPeeringAttachments</a> and check
 *             <code>multipathResilienceStatus</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyTransitGatewayPeeringAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   Options: { // ModifyTransitGatewayPeeringAttachmentRequestOptions
 *     AllowMultipathResilience: true || false,
 *     MultipathResilienceMode: "always-on",
 *   },
 *   DryRun: true || false,
 * };
 * const command = new ModifyTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTransitGatewayPeeringAttachmentResult
 * //   TransitGatewayPeeringAttachment: { // TransitGatewayPeeringAttachment
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     AccepterTransitGatewayAttachmentId: "STRING_VALUE",
 * //     RequesterTgwInfo: { // PeeringTgwInfo
 * //       TransitGatewayId: "STRING_VALUE",
 * //       CoreNetworkId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     AccepterTgwInfo: {
 * //       TransitGatewayId: "STRING_VALUE",
 * //       CoreNetworkId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     Options: { // TransitGatewayPeeringAttachmentOptions
 * //       DynamicRouting: "enable" || "disable",
 * //       RequesterAllowMultipathResilience: true || false,
 * //       RequesterMultipathResilienceMode: "always-on",
 * //       AccepterAllowMultipathResilience: true || false,
 * //       AccepterMultipathResilienceMode: "always-on",
 * //       MultipathResilienceStatus: "pending" || "enabled" || "disabled",
 * //     },
 * //     Status: { // PeeringAttachmentStatus
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     State: "initiating" || "initiatingRequest" || "pendingAcceptance" || "rollingBack" || "pending" || "available" || "modifying" || "deleting" || "deleted" || "failed" || "rejected" || "rejecting" || "failing",
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
 * @param ModifyTransitGatewayPeeringAttachmentCommandInput - {@link ModifyTransitGatewayPeeringAttachmentCommandInput}
 * @returns {@link ModifyTransitGatewayPeeringAttachmentCommandOutput}
 * @see {@link ModifyTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyTransitGatewayPeeringAttachmentCommand extends command<ModifyTransitGatewayPeeringAttachmentCommandInput, ModifyTransitGatewayPeeringAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "ModifyTransitGatewayPeeringAttachment",
  ModifyTransitGatewayPeeringAttachment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTransitGatewayPeeringAttachmentRequest;
      output: ModifyTransitGatewayPeeringAttachmentResult;
    };
    sdk: {
      input: ModifyTransitGatewayPeeringAttachmentCommandInput;
      output: ModifyTransitGatewayPeeringAttachmentCommandOutput;
    };
  };
}
