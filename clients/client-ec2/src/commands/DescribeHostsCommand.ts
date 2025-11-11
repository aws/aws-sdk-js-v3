// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeHostsRequest, DescribeHostsResult } from "../models/models_4";
import { DescribeHosts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHostsCommand}.
 */
export interface DescribeHostsCommandInput extends DescribeHostsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHostsCommand}.
 */
export interface DescribeHostsCommandOutput extends DescribeHostsResult, __MetadataBearer {}

/**
 * <p>Describes the specified Dedicated Hosts or all your Dedicated Hosts.</p>
 *          <p>The results describe only the Dedicated Hosts in the Region you're currently using.
 *             All listed instances consume capacity on your Dedicated Host. Dedicated Hosts that have
 *             recently been released are listed with the state <code>released</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeHostsRequest
 *   HostIds: [ // RequestHostIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filter: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeHostsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHostsResult
 * //   Hosts: [ // HostList
 * //     { // Host
 * //       AutoPlacement: "on" || "off",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailableCapacity: { // AvailableCapacity
 * //         AvailableInstanceCapacity: [ // AvailableInstanceCapacityList
 * //           { // InstanceCapacity
 * //             AvailableCapacity: Number("int"),
 * //             InstanceType: "STRING_VALUE",
 * //             TotalCapacity: Number("int"),
 * //           },
 * //         ],
 * //         AvailableVCpus: Number("int"),
 * //       },
 * //       ClientToken: "STRING_VALUE",
 * //       HostId: "STRING_VALUE",
 * //       HostProperties: { // HostProperties
 * //         Cores: Number("int"),
 * //         InstanceType: "STRING_VALUE",
 * //         InstanceFamily: "STRING_VALUE",
 * //         Sockets: Number("int"),
 * //         TotalVCpus: Number("int"),
 * //       },
 * //       HostReservationId: "STRING_VALUE",
 * //       Instances: [ // HostInstanceList
 * //         { // HostInstance
 * //           InstanceId: "STRING_VALUE",
 * //           InstanceType: "STRING_VALUE",
 * //           OwnerId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       State: "available" || "under-assessment" || "permanent-failure" || "released" || "released-permanent-failure" || "pending",
 * //       AllocationTime: new Date("TIMESTAMP"),
 * //       ReleaseTime: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       HostRecovery: "on" || "off",
 * //       AllowsMultipleInstanceTypes: "on" || "off",
 * //       OwnerId: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       MemberOfServiceLinkedResourceGroup: true || false,
 * //       OutpostArn: "STRING_VALUE",
 * //       HostMaintenance: "on" || "off",
 * //       AssetId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeHostsCommandInput - {@link DescribeHostsCommandInput}
 * @returns {@link DescribeHostsCommandOutput}
 * @see {@link DescribeHostsCommandInput} for command's `input` shape.
 * @see {@link DescribeHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeHostsCommand extends $Command
  .classBuilder<
    DescribeHostsCommandInput,
    DescribeHostsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeHosts", {})
  .n("EC2Client", "DescribeHostsCommand")
  .sc(DescribeHosts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHostsRequest;
      output: DescribeHostsResult;
    };
    sdk: {
      input: DescribeHostsCommandInput;
      output: DescribeHostsCommandOutput;
    };
  };
}
