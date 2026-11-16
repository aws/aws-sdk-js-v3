// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyTransitGatewayNetworkFunctionAttachmentRequest,
  ModifyTransitGatewayNetworkFunctionAttachmentResult,
} from "../models/models_7";
import { ModifyTransitGatewayNetworkFunctionAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyTransitGatewayNetworkFunctionAttachmentCommand}.
 */
export interface ModifyTransitGatewayNetworkFunctionAttachmentCommandInput extends ModifyTransitGatewayNetworkFunctionAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTransitGatewayNetworkFunctionAttachmentCommand}.
 */
export interface ModifyTransitGatewayNetworkFunctionAttachmentCommandOutput extends ModifyTransitGatewayNetworkFunctionAttachmentResult, __MetadataBearer {}

/**
 * <p>Adds Availability Zones to or removes Availability Zones from the specified network function attachment.
 *             The attachment must be in the <code>available</code> state. You must specify at least one Availability Zone to add or remove,
 *             and the attachment must keep at least one Availability Zone.</p>
 *          <p>Adding an Availability Zone provisions a new Gateway Load Balancer endpoint in that Availability Zone. If the endpoint service
 *             doesn't automatically accept connection requests, the endpoint service owner must accept the endpoint connection for
 *             each Availability Zone that you add.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayNetworkFunctionAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayNetworkFunctionAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyTransitGatewayNetworkFunctionAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   AddAvailabilityZones: [ // NetworkFunctionAttachmentAZNameList
 *     "STRING_VALUE",
 *   ],
 *   AddAvailabilityZoneIds: [ // NetworkFunctionAttachmentAZIdList
 *     "STRING_VALUE",
 *   ],
 *   RemoveAvailabilityZones: [
 *     "STRING_VALUE",
 *   ],
 *   RemoveAvailabilityZoneIds: [
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ModifyTransitGatewayNetworkFunctionAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTransitGatewayNetworkFunctionAttachmentResult
 * //   TransitGatewayNetworkFunctionAttachment: { // TransitGatewayNetworkFunctionAttachment
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     TransitGatewayOwnerId: "STRING_VALUE",
 * //     ResourceOwnerId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     AvailabilityZones: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     AvailabilityZoneIds: [
 * //       "STRING_VALUE",
 * //     ],
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
 * @param ModifyTransitGatewayNetworkFunctionAttachmentCommandInput - {@link ModifyTransitGatewayNetworkFunctionAttachmentCommandInput}
 * @returns {@link ModifyTransitGatewayNetworkFunctionAttachmentCommandOutput}
 * @see {@link ModifyTransitGatewayNetworkFunctionAttachmentCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayNetworkFunctionAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyTransitGatewayNetworkFunctionAttachmentCommand extends command<ModifyTransitGatewayNetworkFunctionAttachmentCommandInput, ModifyTransitGatewayNetworkFunctionAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "ModifyTransitGatewayNetworkFunctionAttachment",
  ModifyTransitGatewayNetworkFunctionAttachment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTransitGatewayNetworkFunctionAttachmentRequest;
      output: ModifyTransitGatewayNetworkFunctionAttachmentResult;
    };
    sdk: {
      input: ModifyTransitGatewayNetworkFunctionAttachmentCommandInput;
      output: ModifyTransitGatewayNetworkFunctionAttachmentCommandOutput;
    };
  };
}
