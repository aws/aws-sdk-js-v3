// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSecondarySubnetsRequest, DescribeSecondarySubnetsResult } from "../models/models_4";
import { DescribeSecondarySubnets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSecondarySubnetsCommand}.
 */
export interface DescribeSecondarySubnetsCommandInput extends DescribeSecondarySubnetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecondarySubnetsCommand}.
 */
export interface DescribeSecondarySubnetsCommandOutput extends DescribeSecondarySubnetsResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your secondary subnets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecondarySubnetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecondarySubnetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeSecondarySubnetsRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SecondarySubnetIds: [ // SecondarySubnetIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeSecondarySubnetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecondarySubnetsResult
 * //   SecondarySubnets: [ // SecondarySubnetList
 * //     { // SecondarySubnet
 * //       SecondarySubnetId: "STRING_VALUE",
 * //       SecondarySubnetArn: "STRING_VALUE",
 * //       SecondaryNetworkId: "STRING_VALUE",
 * //       SecondaryNetworkType: "rdma",
 * //       OwnerId: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       Ipv4CidrBlockAssociations: [ // SecondarySubnetIpv4CidrBlockAssociationList
 * //         { // SecondarySubnetIpv4CidrBlockAssociation
 * //           AssociationId: "STRING_VALUE",
 * //           CidrBlock: "STRING_VALUE",
 * //           State: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated" || "disassociation-failed",
 * //           StateReason: "STRING_VALUE",
 * //         },
 * //       ],
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //       StateReason: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSecondarySubnetsCommandInput - {@link DescribeSecondarySubnetsCommandInput}
 * @returns {@link DescribeSecondarySubnetsCommandOutput}
 * @see {@link DescribeSecondarySubnetsCommandInput} for command's `input` shape.
 * @see {@link DescribeSecondarySubnetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe specified secondary subnets
 * ```javascript
 * // This example describes the specified secondary subnets.
 * const input = {
 *   SecondarySubnetIds: [
 *     "ss-0123456789abcdef0",
 *     "ss-0987654321fedcba0"
 *   ]
 * };
 * const command = new DescribeSecondarySubnetsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SecondarySubnets: [
 *     {
 *       AvailabilityZone: "us-east-2a",
 *       AvailabilityZoneId: "use2-az1",
 *       Ipv4CidrBlockAssociations: [
 *         {
 *           AssociationId: "ss-cidr-assoc-56789901234abcdef0",
 *           CidrBlock: "10.0.0.0/24",
 *           State: "associated"
 *         }
 *       ],
 *       OwnerId: "123456789012",
 *       SecondaryNetworkId: "sn-0123456789abcdef0",
 *       SecondaryNetworkType: "rdma",
 *       SecondarySubnetArn: "arn:aws:ec2:us-east-2:123456789012:secondary-subnet/ss-0123456789abcdef0",
 *       SecondarySubnetId: "ss-0123456789abcdef0",
 *       State: "create-complete",
 *       Tags: [
 *         {
 *           Key: "Name",
 *           Value: "Prod Secondary Subnet"
 *         }
 *       ]
 *     },
 *     {
 *       AvailabilityZone: "us-east-2a",
 *       AvailabilityZoneId: "use2-az1",
 *       Ipv4CidrBlockAssociations: [
 *         {
 *           AssociationId: "ss-cidr-assoc-09876543210fedcba0",
 *           CidrBlock: "10.0.1.0/24",
 *           State: "associated"
 *         }
 *       ],
 *       OwnerId: "123456789012",
 *       SecondaryNetworkId: "sn-0123456789abcdef0",
 *       SecondaryNetworkType: "rdma",
 *       SecondarySubnetArn: "arn:aws:ec2:us-east-2:123456789012:secondary-subnet/ss-0987654321fedcba0",
 *       SecondarySubnetId: "ss-0987654321fedcba0",
 *       State: "create-complete",
 *       Tags: [
 *         {
 *           Key: "Name",
 *           Value: "Dev Secondary Subnet"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeSecondarySubnetsCommand extends command<DescribeSecondarySubnetsCommandInput, DescribeSecondarySubnetsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSecondarySubnets",
  DescribeSecondarySubnets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecondarySubnetsRequest;
      output: DescribeSecondarySubnetsResult;
    };
    sdk: {
      input: DescribeSecondarySubnetsCommandInput;
      output: DescribeSecondarySubnetsCommandOutput;
    };
  };
}
