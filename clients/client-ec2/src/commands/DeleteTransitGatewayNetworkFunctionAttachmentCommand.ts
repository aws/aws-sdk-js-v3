// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteTransitGatewayNetworkFunctionAttachmentRequest,
  DeleteTransitGatewayNetworkFunctionAttachmentResult,
} from "../models/models_3";
import { DeleteTransitGatewayNetworkFunctionAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayNetworkFunctionAttachmentCommand}.
 */
export interface DeleteTransitGatewayNetworkFunctionAttachmentCommandInput extends DeleteTransitGatewayNetworkFunctionAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayNetworkFunctionAttachmentCommand}.
 */
export interface DeleteTransitGatewayNetworkFunctionAttachmentCommandOutput extends DeleteTransitGatewayNetworkFunctionAttachmentResult, __MetadataBearer {}

/**
 * <p>Deletes the specified network function attachment. The attachment must be in the <code>available</code> or <code>pendingAcceptance</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayNetworkFunctionAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayNetworkFunctionAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayNetworkFunctionAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayNetworkFunctionAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayNetworkFunctionAttachmentResult
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
 * @param DeleteTransitGatewayNetworkFunctionAttachmentCommandInput - {@link DeleteTransitGatewayNetworkFunctionAttachmentCommandInput}
 * @returns {@link DeleteTransitGatewayNetworkFunctionAttachmentCommandOutput}
 * @see {@link DeleteTransitGatewayNetworkFunctionAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayNetworkFunctionAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayNetworkFunctionAttachmentCommand extends command<DeleteTransitGatewayNetworkFunctionAttachmentCommandInput, DeleteTransitGatewayNetworkFunctionAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTransitGatewayNetworkFunctionAttachment",
  DeleteTransitGatewayNetworkFunctionAttachment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayNetworkFunctionAttachmentRequest;
      output: DeleteTransitGatewayNetworkFunctionAttachmentResult;
    };
    sdk: {
      input: DeleteTransitGatewayNetworkFunctionAttachmentCommandInput;
      output: DeleteTransitGatewayNetworkFunctionAttachmentCommandOutput;
    };
  };
}
