// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamDiscoveredPublicAddressesRequest, GetIpamDiscoveredPublicAddressesResult } from "../models/models_7";
import {
  de_GetIpamDiscoveredPublicAddressesCommand,
  se_GetIpamDiscoveredPublicAddressesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIpamDiscoveredPublicAddressesCommand}.
 */
export interface GetIpamDiscoveredPublicAddressesCommandInput extends GetIpamDiscoveredPublicAddressesRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamDiscoveredPublicAddressesCommand}.
 */
export interface GetIpamDiscoveredPublicAddressesCommandOutput
  extends GetIpamDiscoveredPublicAddressesResult,
    __MetadataBearer {}

/**
 * <p>Gets the public IP addresses that have been discovered by IPAM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamDiscoveredPublicAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamDiscoveredPublicAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamDiscoveredPublicAddressesRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryId: "STRING_VALUE", // required
 *   AddressRegion: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetIpamDiscoveredPublicAddressesCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamDiscoveredPublicAddressesResult
 * //   IpamDiscoveredPublicAddresses: [ // IpamDiscoveredPublicAddressSet
 * //     { // IpamDiscoveredPublicAddress
 * //       IpamResourceDiscoveryId: "STRING_VALUE",
 * //       AddressRegion: "STRING_VALUE",
 * //       Address: "STRING_VALUE",
 * //       AddressOwnerId: "STRING_VALUE",
 * //       AddressAllocationId: "STRING_VALUE",
 * //       AssociationStatus: "associated" || "disassociated",
 * //       AddressType: "service-managed-ip" || "service-managed-byoip" || "amazon-owned-eip" || "amazon-owned-contig" || "byoip" || "ec2-public-ip",
 * //       Service: "nat-gateway" || "database-migration-service" || "redshift" || "elastic-container-service" || "relational-database-service" || "site-to-site-vpn" || "load-balancer" || "global-accelerator" || "other",
 * //       ServiceResource: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       PublicIpv4PoolId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       NetworkInterfaceDescription: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       Tags: { // IpamPublicAddressTags
 * //         EipTags: [ // IpamPublicAddressTagList
 * //           { // IpamPublicAddressTag
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       NetworkBorderGroup: "STRING_VALUE",
 * //       SecurityGroups: [ // IpamPublicAddressSecurityGroupList
 * //         { // IpamPublicAddressSecurityGroup
 * //           GroupName: "STRING_VALUE",
 * //           GroupId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SampleTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   OldestSampleTime: new Date("TIMESTAMP"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamDiscoveredPublicAddressesCommandInput - {@link GetIpamDiscoveredPublicAddressesCommandInput}
 * @returns {@link GetIpamDiscoveredPublicAddressesCommandOutput}
 * @see {@link GetIpamDiscoveredPublicAddressesCommandInput} for command's `input` shape.
 * @see {@link GetIpamDiscoveredPublicAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamDiscoveredPublicAddressesCommand extends $Command
  .classBuilder<
    GetIpamDiscoveredPublicAddressesCommandInput,
    GetIpamDiscoveredPublicAddressesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "GetIpamDiscoveredPublicAddresses", {})
  .n("EC2Client", "GetIpamDiscoveredPublicAddressesCommand")
  .f(void 0, void 0)
  .ser(se_GetIpamDiscoveredPublicAddressesCommand)
  .de(de_GetIpamDiscoveredPublicAddressesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamDiscoveredPublicAddressesRequest;
      output: GetIpamDiscoveredPublicAddressesResult;
    };
    sdk: {
      input: GetIpamDiscoveredPublicAddressesCommandInput;
      output: GetIpamDiscoveredPublicAddressesCommandOutput;
    };
  };
}
