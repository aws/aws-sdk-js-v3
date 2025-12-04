// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyIpamResourceDiscoveryRequest, ModifyIpamResourceDiscoveryResult } from "../models/models_6";
import { ModifyIpamResourceDiscovery } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyIpamResourceDiscoveryCommand}.
 */
export interface ModifyIpamResourceDiscoveryCommandInput extends ModifyIpamResourceDiscoveryRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamResourceDiscoveryCommand}.
 */
export interface ModifyIpamResourceDiscoveryCommandOutput extends ModifyIpamResourceDiscoveryResult, __MetadataBearer {}

/**
 * <p>Modifies a resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamResourceDiscoveryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamResourceDiscoveryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamResourceDiscoveryRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AddOperatingRegions: [ // AddIpamOperatingRegionSet
 *     { // AddIpamOperatingRegion
 *       RegionName: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveOperatingRegions: [ // RemoveIpamOperatingRegionSet
 *     { // RemoveIpamOperatingRegion
 *       RegionName: "STRING_VALUE",
 *     },
 *   ],
 *   AddOrganizationalUnitExclusions: [ // AddIpamOrganizationalUnitExclusionSet
 *     { // AddIpamOrganizationalUnitExclusion
 *       OrganizationsEntityPath: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveOrganizationalUnitExclusions: [ // RemoveIpamOrganizationalUnitExclusionSet
 *     { // RemoveIpamOrganizationalUnitExclusion
 *       OrganizationsEntityPath: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyIpamResourceDiscoveryCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpamResourceDiscoveryResult
 * //   IpamResourceDiscovery: { // IpamResourceDiscovery
 * //     OwnerId: "STRING_VALUE",
 * //     IpamResourceDiscoveryId: "STRING_VALUE",
 * //     IpamResourceDiscoveryArn: "STRING_VALUE",
 * //     IpamResourceDiscoveryRegion: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     OperatingRegions: [ // IpamOperatingRegionSet
 * //       { // IpamOperatingRegion
 * //         RegionName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IsDefault: true || false,
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OrganizationalUnitExclusions: [ // IpamOrganizationalUnitExclusionSet
 * //       { // IpamOrganizationalUnitExclusion
 * //         OrganizationsEntityPath: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIpamResourceDiscoveryCommandInput - {@link ModifyIpamResourceDiscoveryCommandInput}
 * @returns {@link ModifyIpamResourceDiscoveryCommandOutput}
 * @see {@link ModifyIpamResourceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamResourceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyIpamResourceDiscoveryCommand extends $Command
  .classBuilder<
    ModifyIpamResourceDiscoveryCommandInput,
    ModifyIpamResourceDiscoveryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyIpamResourceDiscovery", {})
  .n("EC2Client", "ModifyIpamResourceDiscoveryCommand")
  .sc(ModifyIpamResourceDiscovery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIpamResourceDiscoveryRequest;
      output: ModifyIpamResourceDiscoveryResult;
    };
    sdk: {
      input: ModifyIpamResourceDiscoveryCommandInput;
      output: ModifyIpamResourceDiscoveryCommandOutput;
    };
  };
}
