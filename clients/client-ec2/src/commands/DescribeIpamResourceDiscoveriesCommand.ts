// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIpamResourceDiscoveriesRequest, DescribeIpamResourceDiscoveriesResult } from "../models/models_5";
import {
  de_DescribeIpamResourceDiscoveriesCommand,
  se_DescribeIpamResourceDiscoveriesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamResourceDiscoveriesCommand}.
 */
export interface DescribeIpamResourceDiscoveriesCommandInput extends DescribeIpamResourceDiscoveriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamResourceDiscoveriesCommand}.
 */
export interface DescribeIpamResourceDiscoveriesCommandOutput
  extends DescribeIpamResourceDiscoveriesResult,
    __MetadataBearer {}

/**
 * <p>Describes IPAM resource discoveries. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamResourceDiscoveriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamResourceDiscoveriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamResourceDiscoveriesRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryIds: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeIpamResourceDiscoveriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamResourceDiscoveriesResult
 * //   IpamResourceDiscoveries: [ // IpamResourceDiscoverySet
 * //     { // IpamResourceDiscovery
 * //       OwnerId: "STRING_VALUE",
 * //       IpamResourceDiscoveryId: "STRING_VALUE",
 * //       IpamResourceDiscoveryArn: "STRING_VALUE",
 * //       IpamResourceDiscoveryRegion: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       OperatingRegions: [ // IpamOperatingRegionSet
 * //         { // IpamOperatingRegion
 * //           RegionName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IsDefault: true || false,
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OrganizationalUnitExclusions: [ // IpamOrganizationalUnitExclusionSet
 * //         { // IpamOrganizationalUnitExclusion
 * //           OrganizationsEntityPath: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeIpamResourceDiscoveriesCommandInput - {@link DescribeIpamResourceDiscoveriesCommandInput}
 * @returns {@link DescribeIpamResourceDiscoveriesCommandOutput}
 * @see {@link DescribeIpamResourceDiscoveriesCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamResourceDiscoveriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIpamResourceDiscoveriesCommand extends $Command
  .classBuilder<
    DescribeIpamResourceDiscoveriesCommandInput,
    DescribeIpamResourceDiscoveriesCommandOutput,
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
  .s("AmazonEC2", "DescribeIpamResourceDiscoveries", {})
  .n("EC2Client", "DescribeIpamResourceDiscoveriesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIpamResourceDiscoveriesCommand)
  .de(de_DescribeIpamResourceDiscoveriesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpamResourceDiscoveriesRequest;
      output: DescribeIpamResourceDiscoveriesResult;
    };
    sdk: {
      input: DescribeIpamResourceDiscoveriesCommandInput;
      output: DescribeIpamResourceDiscoveriesCommandOutput;
    };
  };
}
