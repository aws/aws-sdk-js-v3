// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteIpamPrefixListResolverTargetRequest,
  DeleteIpamPrefixListResolverTargetResult,
} from "../models/models_2";
import { DeleteIpamPrefixListResolverTarget$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIpamPrefixListResolverTargetCommand}.
 */
export interface DeleteIpamPrefixListResolverTargetCommandInput extends DeleteIpamPrefixListResolverTargetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpamPrefixListResolverTargetCommand}.
 */
export interface DeleteIpamPrefixListResolverTargetCommandOutput extends DeleteIpamPrefixListResolverTargetResult, __MetadataBearer {}

/**
 * <p>Deletes an IPAM prefix list resolver target. This removes the association between the resolver and the managed prefix list, stopping automatic CIDR synchronization.</p>
 *          <p>For more information about IPAM prefix list resolver, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/automate-prefix-list-updates.html">Automate prefix list updates with IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteIpamPrefixListResolverTargetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteIpamPrefixListResolverTargetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteIpamPrefixListResolverTargetRequest
 *   DryRun: true || false,
 *   IpamPrefixListResolverTargetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIpamPrefixListResolverTargetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIpamPrefixListResolverTargetResult
 * //   IpamPrefixListResolverTarget: { // IpamPrefixListResolverTarget
 * //     IpamPrefixListResolverTargetId: "STRING_VALUE",
 * //     IpamPrefixListResolverTargetArn: "STRING_VALUE",
 * //     IpamPrefixListResolverId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     PrefixListId: "STRING_VALUE",
 * //     PrefixListRegion: "STRING_VALUE",
 * //     DesiredVersion: Number("long"),
 * //     LastSyncedVersion: Number("long"),
 * //     TrackLatestVersion: true || false,
 * //     StateMessage: "STRING_VALUE",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "sync-in-progress" || "sync-complete" || "sync-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
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
 * @param DeleteIpamPrefixListResolverTargetCommandInput - {@link DeleteIpamPrefixListResolverTargetCommandInput}
 * @returns {@link DeleteIpamPrefixListResolverTargetCommandOutput}
 * @see {@link DeleteIpamPrefixListResolverTargetCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamPrefixListResolverTargetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteIpamPrefixListResolverTargetCommand extends $Command
  .classBuilder<
    DeleteIpamPrefixListResolverTargetCommandInput,
    DeleteIpamPrefixListResolverTargetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteIpamPrefixListResolverTarget", {})
  .n("EC2Client", "DeleteIpamPrefixListResolverTargetCommand")
  .sc(DeleteIpamPrefixListResolverTarget$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIpamPrefixListResolverTargetRequest;
      output: DeleteIpamPrefixListResolverTargetResult;
    };
    sdk: {
      input: DeleteIpamPrefixListResolverTargetCommandInput;
      output: DeleteIpamPrefixListResolverTargetCommandOutput;
    };
  };
}
