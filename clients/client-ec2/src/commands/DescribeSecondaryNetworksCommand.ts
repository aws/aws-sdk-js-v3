// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSecondaryNetworksRequest, DescribeSecondaryNetworksResult } from "../models/models_4";
import { DescribeSecondaryNetworks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecondaryNetworksCommand}.
 */
export interface DescribeSecondaryNetworksCommandInput extends DescribeSecondaryNetworksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecondaryNetworksCommand}.
 */
export interface DescribeSecondaryNetworksCommandOutput extends DescribeSecondaryNetworksResult, __MetadataBearer {}

/**
 * <p>Describes one or more secondary networks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecondaryNetworksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecondaryNetworksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeSecondaryNetworksRequest
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
 *   SecondaryNetworkIds: [ // SecondaryNetworkIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeSecondaryNetworksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecondaryNetworksResult
 * //   SecondaryNetworks: [ // SecondaryNetworkList
 * //     { // SecondaryNetwork
 * //       SecondaryNetworkId: "STRING_VALUE",
 * //       SecondaryNetworkArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Type: "rdma",
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //       StateReason: "STRING_VALUE",
 * //       Ipv4CidrBlockAssociations: [ // SecondaryNetworkIpv4CidrBlockAssociationList
 * //         { // SecondaryNetworkIpv4CidrBlockAssociation
 * //           AssociationId: "STRING_VALUE",
 * //           CidrBlock: "STRING_VALUE",
 * //           State: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated" || "disassociation-failed",
 * //           StateReason: "STRING_VALUE",
 * //         },
 * //       ],
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
 * @param DescribeSecondaryNetworksCommandInput - {@link DescribeSecondaryNetworksCommandInput}
 * @returns {@link DescribeSecondaryNetworksCommandOutput}
 * @see {@link DescribeSecondaryNetworksCommandInput} for command's `input` shape.
 * @see {@link DescribeSecondaryNetworksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe specified secondary networks
 * ```javascript
 * // This example describes the specified secondary networks.
 * const input = {
 *   SecondaryNetworkIds: [
 *     "sn-0123456789abcdef0",
 *     "sn-0987654321fedcba0"
 *   ]
 * };
 * const command = new DescribeSecondaryNetworksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SecondaryNetworks: [
 *     {
 *       Ipv4CidrBlockAssociations: [
 *         {
 *           AssociationId: "sn-cidr-assoc-56789901234abcdef0",
 *           CidrBlock: "10.0.0.0/16",
 *           State: "associated"
 *         }
 *       ],
 *       OwnerId: "123456789012",
 *       SecondaryNetworkArn: "arn:aws:ec2:us-east-2:123456789012:secondary-network/sn-0123456789abcdef0",
 *       SecondaryNetworkId: "sn-0123456789abcdef0",
 *       State: "create-complete",
 *       Tags: [
 *         {
 *           Key: "Name",
 *           Value: "Prod Secondary Network"
 *         }
 *       ],
 *       Type: "rdma"
 *     },
 *     {
 *       Ipv4CidrBlockAssociations: [
 *         {
 *           AssociationId: "sn-cidr-assoc-09876543210fedcba0",
 *           CidrBlock: "10.1.0.0/16",
 *           State: "associated"
 *         }
 *       ],
 *       OwnerId: "123456789012",
 *       SecondaryNetworkArn: "arn:aws:ec2:us-east-2:123456789012:secondary-network/sn-0987654321fedcba0",
 *       SecondaryNetworkId: "sn-0987654321fedcba0",
 *       State: "create-complete",
 *       Tags: [
 *         {
 *           Key: "Name",
 *           Value: "Dev Secondary Network"
 *         }
 *       ],
 *       Type: "rdma"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To describe secondary networks using filters
 * ```javascript
 * // This example uses filters to describe any secondary network you own that has a tag with the key Environment and the value Production and whose state is create-complete.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "tag:Environment",
 *       Values: [
 *         "Production"
 *       ]
 *     },
 *     {
 *       Name: "state",
 *       Values: [
 *         "create-complete"
 *       ]
 *     }
 *   ],
 *   MaxResults: 5
 * };
 * const command = new DescribeSecondaryNetworksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NextToken: "123456789MSIsInMiOjEsImMiOiIteGh3TERRTUEwanpsaVpab1dOdjZhMlBuRXZpZXJqTl==",
 *   SecondaryNetworks: [
 *     {
 *       Ipv4CidrBlockAssociations: [
 *         {
 *           AssociationId: "sn-cidr-assoc-12349901234abc1234",
 *           CidrBlock: "10.0.0.0/16",
 *           State: "associated"
 *         }
 *       ],
 *       OwnerId: "123456789012",
 *       SecondaryNetworkArn: "arn:aws:ec2:us-east-2:123456789012:secondary-network/sn-9876543210abc1234",
 *       SecondaryNetworkId: "sn-9876543210abc1234",
 *       State: "create-complete",
 *       Tags: [
 *         {
 *           Key: "Environment",
 *           Value: "Production"
 *         }
 *       ],
 *       Type: "rdma"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeSecondaryNetworksCommand extends $Command
  .classBuilder<
    DescribeSecondaryNetworksCommandInput,
    DescribeSecondaryNetworksCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeSecondaryNetworks", {})
  .n("EC2Client", "DescribeSecondaryNetworksCommand")
  .sc(DescribeSecondaryNetworks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSecondaryNetworksRequest;
      output: DescribeSecondaryNetworksResult;
    };
    sdk: {
      input: DescribeSecondaryNetworksCommandInput;
      output: DescribeSecondaryNetworksCommandOutput;
    };
  };
}
