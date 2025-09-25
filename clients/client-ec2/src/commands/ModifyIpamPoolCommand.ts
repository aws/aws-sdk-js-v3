// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIpamPoolRequest, ModifyIpamPoolResult } from "../models/models_7";
import { ModifyIpamPool } from "../schemas/schemas_41_Ipam";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyIpamPoolCommand}.
 */
export interface ModifyIpamPoolCommandInput extends ModifyIpamPoolRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamPoolCommand}.
 */
export interface ModifyIpamPoolCommandOutput extends ModifyIpamPoolResult, __MetadataBearer {}

/**
 * <p>Modify the configurations of an IPAM pool.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/mod-pool-ipam.html">Modify a pool</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamPoolCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamPoolCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamPoolRequest
 *   DryRun: true || false,
 *   IpamPoolId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AutoImport: true || false,
 *   AllocationMinNetmaskLength: Number("int"),
 *   AllocationMaxNetmaskLength: Number("int"),
 *   AllocationDefaultNetmaskLength: Number("int"),
 *   ClearAllocationDefaultNetmaskLength: true || false,
 *   AddAllocationResourceTags: [ // RequestIpamResourceTagList
 *     { // RequestIpamResourceTag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveAllocationResourceTags: [
 *     {
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyIpamPoolCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpamPoolResult
 * //   IpamPool: { // IpamPool
 * //     OwnerId: "STRING_VALUE",
 * //     IpamPoolId: "STRING_VALUE",
 * //     SourceIpamPoolId: "STRING_VALUE",
 * //     IpamPoolArn: "STRING_VALUE",
 * //     IpamScopeArn: "STRING_VALUE",
 * //     IpamScopeType: "public" || "private",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     Locale: "STRING_VALUE",
 * //     PoolDepth: Number("int"),
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     StateMessage: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     AutoImport: true || false,
 * //     PubliclyAdvertisable: true || false,
 * //     AddressFamily: "ipv4" || "ipv6",
 * //     AllocationMinNetmaskLength: Number("int"),
 * //     AllocationMaxNetmaskLength: Number("int"),
 * //     AllocationDefaultNetmaskLength: Number("int"),
 * //     AllocationResourceTags: [ // IpamResourceTagList
 * //       { // IpamResourceTag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AwsService: "ec2",
 * //     PublicIpSource: "amazon" || "byoip",
 * //     SourceResource: { // IpamPoolSourceResource
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "vpc",
 * //       ResourceRegion: "STRING_VALUE",
 * //       ResourceOwner: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIpamPoolCommandInput - {@link ModifyIpamPoolCommandInput}
 * @returns {@link ModifyIpamPoolCommandOutput}
 * @see {@link ModifyIpamPoolCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamPoolCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyIpamPoolCommand extends $Command
  .classBuilder<
    ModifyIpamPoolCommandInput,
    ModifyIpamPoolCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyIpamPool", {})
  .n("EC2Client", "ModifyIpamPoolCommand")
  .sc(ModifyIpamPool)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIpamPoolRequest;
      output: ModifyIpamPoolResult;
    };
    sdk: {
      input: ModifyIpamPoolCommandInput;
      output: ModifyIpamPoolCommandOutput;
    };
  };
}
