// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIpamRequest, DeleteIpamResult } from "../models/models_3";
import { de_DeleteIpamCommand, se_DeleteIpamCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIpamCommand}.
 */
export interface DeleteIpamCommandInput extends DeleteIpamRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpamCommand}.
 */
export interface DeleteIpamCommandOutput extends DeleteIpamResult, __MetadataBearer {}

/**
 * <p>Delete an IPAM. Deleting an IPAM removes all monitored data associated with the IPAM including the historical data for CIDRs.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/delete-ipam.html">Delete an IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteIpamCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteIpamCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteIpamRequest
 *   DryRun: true || false,
 *   IpamId: "STRING_VALUE", // required
 *   Cascade: true || false,
 * };
 * const command = new DeleteIpamCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIpamResult
 * //   Ipam: { // Ipam
 * //     OwnerId: "STRING_VALUE",
 * //     IpamId: "STRING_VALUE",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     PublicDefaultScopeId: "STRING_VALUE",
 * //     PrivateDefaultScopeId: "STRING_VALUE",
 * //     ScopeCount: Number("int"),
 * //     Description: "STRING_VALUE",
 * //     OperatingRegions: [ // IpamOperatingRegionSet
 * //       { // IpamOperatingRegion
 * //         RegionName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DefaultResourceDiscoveryId: "STRING_VALUE",
 * //     DefaultResourceDiscoveryAssociationId: "STRING_VALUE",
 * //     ResourceDiscoveryAssociationCount: Number("int"),
 * //     StateMessage: "STRING_VALUE",
 * //     Tier: "free" || "advanced",
 * //     EnablePrivateGua: true || false,
 * //     MeteredAccount: "ipam-owner" || "resource-owner",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteIpamCommandInput - {@link DeleteIpamCommandInput}
 * @returns {@link DeleteIpamCommandOutput}
 * @see {@link DeleteIpamCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteIpamCommand extends $Command
  .classBuilder<
    DeleteIpamCommandInput,
    DeleteIpamCommandOutput,
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
  .s("AmazonEC2", "DeleteIpam", {})
  .n("EC2Client", "DeleteIpamCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIpamCommand)
  .de(de_DeleteIpamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIpamRequest;
      output: DeleteIpamResult;
    };
    sdk: {
      input: DeleteIpamCommandInput;
      output: DeleteIpamCommandOutput;
    };
  };
}
