// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ModifyIpamPrefixListResolverTargetRequest,
  ModifyIpamPrefixListResolverTargetResult,
} from "../models/models_7";
import {
  de_ModifyIpamPrefixListResolverTargetCommand,
  se_ModifyIpamPrefixListResolverTargetCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyIpamPrefixListResolverTargetCommand}.
 */
export interface ModifyIpamPrefixListResolverTargetCommandInput extends ModifyIpamPrefixListResolverTargetRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamPrefixListResolverTargetCommand}.
 */
export interface ModifyIpamPrefixListResolverTargetCommandOutput
  extends ModifyIpamPrefixListResolverTargetResult,
    __MetadataBearer {}

/**
 * <p>Modifies an IPAM prefix list resolver target. You can update version tracking settings and the desired version of the target prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamPrefixListResolverTargetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamPrefixListResolverTargetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamPrefixListResolverTargetRequest
 *   DryRun: true || false,
 *   IpamPrefixListResolverTargetId: "STRING_VALUE", // required
 *   DesiredVersion: Number("long"),
 *   TrackLatestVersion: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ModifyIpamPrefixListResolverTargetCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpamPrefixListResolverTargetResult
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
 * @param ModifyIpamPrefixListResolverTargetCommandInput - {@link ModifyIpamPrefixListResolverTargetCommandInput}
 * @returns {@link ModifyIpamPrefixListResolverTargetCommandOutput}
 * @see {@link ModifyIpamPrefixListResolverTargetCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamPrefixListResolverTargetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyIpamPrefixListResolverTargetCommand extends $Command
  .classBuilder<
    ModifyIpamPrefixListResolverTargetCommandInput,
    ModifyIpamPrefixListResolverTargetCommandOutput,
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
  .s("AmazonEC2", "ModifyIpamPrefixListResolverTarget", {})
  .n("EC2Client", "ModifyIpamPrefixListResolverTargetCommand")
  .f(void 0, void 0)
  .ser(se_ModifyIpamPrefixListResolverTargetCommand)
  .de(de_ModifyIpamPrefixListResolverTargetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIpamPrefixListResolverTargetRequest;
      output: ModifyIpamPrefixListResolverTargetResult;
    };
    sdk: {
      input: ModifyIpamPrefixListResolverTargetCommandInput;
      output: ModifyIpamPrefixListResolverTargetCommandOutput;
    };
  };
}
