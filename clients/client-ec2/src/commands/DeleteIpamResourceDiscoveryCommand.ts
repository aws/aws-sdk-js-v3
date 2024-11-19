// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIpamResourceDiscoveryRequest, DeleteIpamResourceDiscoveryResult } from "../models/models_3";
import { de_DeleteIpamResourceDiscoveryCommand, se_DeleteIpamResourceDiscoveryCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIpamResourceDiscoveryCommand}.
 */
export interface DeleteIpamResourceDiscoveryCommandInput extends DeleteIpamResourceDiscoveryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpamResourceDiscoveryCommand}.
 */
export interface DeleteIpamResourceDiscoveryCommandOutput extends DeleteIpamResourceDiscoveryResult, __MetadataBearer {}

/**
 * <p>Deletes an IPAM resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteIpamResourceDiscoveryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteIpamResourceDiscoveryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteIpamResourceDiscoveryRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIpamResourceDiscoveryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIpamResourceDiscoveryResult
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
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteIpamResourceDiscoveryCommandInput - {@link DeleteIpamResourceDiscoveryCommandInput}
 * @returns {@link DeleteIpamResourceDiscoveryCommandOutput}
 * @see {@link DeleteIpamResourceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamResourceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteIpamResourceDiscoveryCommand extends $Command
  .classBuilder<
    DeleteIpamResourceDiscoveryCommandInput,
    DeleteIpamResourceDiscoveryCommandOutput,
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
  .s("AmazonEC2", "DeleteIpamResourceDiscovery", {})
  .n("EC2Client", "DeleteIpamResourceDiscoveryCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIpamResourceDiscoveryCommand)
  .de(de_DeleteIpamResourceDiscoveryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIpamResourceDiscoveryRequest;
      output: DeleteIpamResourceDiscoveryResult;
    };
    sdk: {
      input: DeleteIpamResourceDiscoveryCommandInput;
      output: DeleteIpamResourceDiscoveryCommandOutput;
    };
  };
}
