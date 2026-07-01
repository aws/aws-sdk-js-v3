// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSecondarySubnetRequest, DeleteSecondarySubnetResult } from "../models/models_3";
import { DeleteSecondarySubnet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSecondarySubnetCommand}.
 */
export interface DeleteSecondarySubnetCommandInput extends DeleteSecondarySubnetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSecondarySubnetCommand}.
 */
export interface DeleteSecondarySubnetCommandOutput extends DeleteSecondarySubnetResult, __MetadataBearer {}

/**
 * <p>Deletes a secondary subnet. A secondary subnet must not contain any secondary interfaces prior to deletion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSecondarySubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSecondarySubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteSecondarySubnetRequest
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   SecondarySubnetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSecondarySubnetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSecondarySubnetResult
 * //   SecondarySubnet: { // SecondarySubnet
 * //     SecondarySubnetId: "STRING_VALUE",
 * //     SecondarySubnetArn: "STRING_VALUE",
 * //     SecondaryNetworkId: "STRING_VALUE",
 * //     SecondaryNetworkType: "rdma",
 * //     OwnerId: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     Ipv4CidrBlockAssociations: [ // SecondarySubnetIpv4CidrBlockAssociationList
 * //       { // SecondarySubnetIpv4CidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         CidrBlock: "STRING_VALUE",
 * //         State: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated" || "disassociation-failed",
 * //         StateReason: "STRING_VALUE",
 * //       },
 * //     ],
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //     StateReason: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSecondarySubnetCommandInput - {@link DeleteSecondarySubnetCommandInput}
 * @returns {@link DeleteSecondarySubnetCommandOutput}
 * @see {@link DeleteSecondarySubnetCommandInput} for command's `input` shape.
 * @see {@link DeleteSecondarySubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a secondary subnet
 * ```javascript
 * // This example deletes a secondary subnet.
 * const input = {
 *   ClientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   SecondarySubnetId: "ss-0123456789abcdef0"
 * };
 * const command = new DeleteSecondarySubnetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ClientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   SecondarySubnet: {
 *     AvailabilityZone: "us-east-2a",
 *     AvailabilityZoneId: "use2-az1",
 *     Ipv4CidrBlockAssociations: [
 *       {
 *         AssociationId: "ss-cidr-assoc-56789901234abcdef0",
 *         CidrBlock: "10.0.0.0/24",
 *         State: "disassociating"
 *       }
 *     ],
 *     OwnerId: "123456789012",
 *     SecondaryNetworkId: "sn-0123456789abcdef0",
 *     SecondaryNetworkType: "rdma",
 *     SecondarySubnetArn: "arn:aws:ec2:us-east-2:123456789012:secondary-subnet/ss-0123456789abcdef0",
 *     SecondarySubnetId: "ss-0123456789abcdef0",
 *     State: "delete-in-progress",
 *     Tags: [
 *       {
 *         Key: "Name",
 *         Value: "Prod Secondary Subnet"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteSecondarySubnetCommand extends command<DeleteSecondarySubnetCommandInput, DeleteSecondarySubnetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSecondarySubnet",
  DeleteSecondarySubnet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSecondarySubnetRequest;
      output: DeleteSecondarySubnetResult;
    };
    sdk: {
      input: DeleteSecondarySubnetCommandInput;
      output: DeleteSecondarySubnetCommandOutput;
    };
  };
}
