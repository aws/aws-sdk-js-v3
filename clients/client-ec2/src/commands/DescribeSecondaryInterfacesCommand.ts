// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSecondaryInterfacesRequest, DescribeSecondaryInterfacesResult } from "../models/models_4";
import { DescribeSecondaryInterfaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSecondaryInterfacesCommand}.
 */
export interface DescribeSecondaryInterfacesCommandInput extends DescribeSecondaryInterfacesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecondaryInterfacesCommand}.
 */
export interface DescribeSecondaryInterfacesCommandOutput extends DescribeSecondaryInterfacesResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your secondary interfaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecondaryInterfacesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecondaryInterfacesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeSecondaryInterfacesRequest
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
 *   SecondaryInterfaceIds: [ // SecondaryInterfaceIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeSecondaryInterfacesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecondaryInterfacesResult
 * //   SecondaryInterfaces: [ // SecondaryInterfaceList
 * //     { // SecondaryInterface
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       Attachment: { // SecondaryInterfaceAttachment
 * //         AttachmentId: "STRING_VALUE",
 * //         AttachTime: new Date("TIMESTAMP"),
 * //         DeleteOnTermination: true || false,
 * //         DeviceIndex: Number("int"),
 * //         InstanceId: "STRING_VALUE",
 * //         InstanceOwnerId: "STRING_VALUE",
 * //         NetworkCardIndex: Number("int"),
 * //         Status: "attaching" || "attached" || "detaching" || "detached",
 * //       },
 * //       MacAddress: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       PrivateIpv4Addresses: [ // SecondaryInterfaceIpv4AddressList
 * //         { // SecondaryInterfaceIpv4Address
 * //           PrivateIpAddress: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SecondaryInterfaceId: "STRING_VALUE",
 * //       SecondaryInterfaceArn: "STRING_VALUE",
 * //       SecondaryInterfaceType: "secondary",
 * //       SecondarySubnetId: "STRING_VALUE",
 * //       SecondaryNetworkId: "STRING_VALUE",
 * //       SecondaryNetworkType: "rdma",
 * //       SourceDestCheck: true || false,
 * //       Status: "available" || "in-use",
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
 * @param DescribeSecondaryInterfacesCommandInput - {@link DescribeSecondaryInterfacesCommandInput}
 * @returns {@link DescribeSecondaryInterfacesCommandOutput}
 * @see {@link DescribeSecondaryInterfacesCommandInput} for command's `input` shape.
 * @see {@link DescribeSecondaryInterfacesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe all secondary interfaces
 * ```javascript
 * // This example describes all secondary interfaces in the current Region.
 * const input = { /* empty *\/ };
 * const command = new DescribeSecondaryInterfacesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SecondaryInterfaces: [
 *     {
 *       Attachment: {
 *         AttachTime: "2026-02-28T23:35:33.000Z",
 *         AttachmentId: "si-attach-0123456789abcdef0",
 *         DeleteOnTermination: true,
 *         DeviceIndex: 0,
 *         InstanceId: "i-1234567890abcdef0",
 *         InstanceOwnerId: "123456789012",
 *         NetworkCardIndex: 1,
 *         Status: "attached"
 *       },
 *       AvailabilityZone: "us-east-2a",
 *       AvailabilityZoneId: "use2-az1",
 *       MacAddress: "02:2f:8f:b0:cf:75",
 *       OwnerId: "123456789012",
 *       PrivateIpv4Addresses: [
 *         {
 *           PrivateIpAddress: "10.0.1.17"
 *         }
 *       ],
 *       SecondaryInterfaceArn: "arn:aws:ec2:us-east-2:123456789012:secondary-interface/si-0123456789abcdef0",
 *       SecondaryInterfaceId: "si-0123456789abcdef0",
 *       SecondaryInterfaceType: "secondary",
 *       SecondaryNetworkId: "sn-0123456789abcdef0",
 *       SecondaryNetworkType: "rdma",
 *       SecondarySubnetId: "ss-0123456789abcdef0",
 *       SourceDestCheck: true,
 *       Status: "in-use",
 *       Tags: [
 *         {
 *           Key: "Name",
 *           Value: "Prod Secondary Interface"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To describe secondary interfaces using filters
 * ```javascript
 * // This example uses filters to describe secondary interfaces attached to a specific instance.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "attachment.instance-id",
 *       Values: [
 *         "i-1234567890abcdef0"
 *       ]
 *     }
 *   ],
 *   MaxResults: 5
 * };
 * const command = new DescribeSecondaryInterfacesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NextToken: "123456789MSIsInMiOjEsImMiOiIteGh3TERRTUEwanpsaVpab1dOdjZhMlBuRXZpZXJqTl==",
 *   SecondaryInterfaces: [
 *     {
 *       Attachment: {
 *         AttachTime: "2026-02-28T23:35:33.000Z",
 *         AttachmentId: "si-attach-0123456789abcdef0",
 *         DeleteOnTermination: true,
 *         DeviceIndex: 0,
 *         InstanceId: "i-1234567890abcdef0",
 *         InstanceOwnerId: "123456789012",
 *         NetworkCardIndex: 1,
 *         Status: "attached"
 *       },
 *       AvailabilityZone: "us-east-2a",
 *       AvailabilityZoneId: "use2-az1",
 *       MacAddress: "02:2f:8f:b0:cf:75",
 *       OwnerId: "123456789012",
 *       PrivateIpv4Addresses: [
 *         {
 *           PrivateIpAddress: "10.0.1.17"
 *         }
 *       ],
 *       SecondaryInterfaceArn: "arn:aws:ec2:us-east-2:123456789012:secondary-interface/si-0123456789abcdef0",
 *       SecondaryInterfaceId: "si-0123456789abcdef0",
 *       SecondaryInterfaceType: "secondary",
 *       SecondaryNetworkId: "sn-0123456789abcdef0",
 *       SecondaryNetworkType: "rdma",
 *       SecondarySubnetId: "ss-0123456789abcdef0",
 *       SourceDestCheck: true,
 *       Status: "in-use",
 *       Tags: [
 *         {
 *           Key: "Name",
 *           Value: "Prod Secondary Interface"
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
export class DescribeSecondaryInterfacesCommand extends command<DescribeSecondaryInterfacesCommandInput, DescribeSecondaryInterfacesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSecondaryInterfaces",
  DescribeSecondaryInterfaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecondaryInterfacesRequest;
      output: DescribeSecondaryInterfacesResult;
    };
    sdk: {
      input: DescribeSecondaryInterfacesCommandInput;
      output: DescribeSecondaryInterfacesCommandOutput;
    };
  };
}
