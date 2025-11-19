// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreManagedPrefixListVersionRequest, RestoreManagedPrefixListVersionResult } from "../models/models_7";
import { RestoreManagedPrefixListVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreManagedPrefixListVersionCommand}.
 */
export interface RestoreManagedPrefixListVersionCommandInput extends RestoreManagedPrefixListVersionRequest {}
/**
 * @public
 *
 * The output of {@link RestoreManagedPrefixListVersionCommand}.
 */
export interface RestoreManagedPrefixListVersionCommandOutput
  extends RestoreManagedPrefixListVersionResult,
    __MetadataBearer {}

/**
 * <p>Restores the entries from a previous version of a managed prefix list to a new version of the prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreManagedPrefixListVersionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreManagedPrefixListVersionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // RestoreManagedPrefixListVersionRequest
 *   DryRun: true || false,
 *   PrefixListId: "STRING_VALUE", // required
 *   PreviousVersion: Number("long"), // required
 *   CurrentVersion: Number("long"), // required
 * };
 * const command = new RestoreManagedPrefixListVersionCommand(input);
 * const response = await client.send(command);
 * // { // RestoreManagedPrefixListVersionResult
 * //   PrefixList: { // ManagedPrefixList
 * //     PrefixListId: "STRING_VALUE",
 * //     AddressFamily: "STRING_VALUE",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "restore-in-progress" || "restore-complete" || "restore-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //     StateMessage: "STRING_VALUE",
 * //     PrefixListArn: "STRING_VALUE",
 * //     PrefixListName: "STRING_VALUE",
 * //     MaxEntries: Number("int"),
 * //     Version: Number("long"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OwnerId: "STRING_VALUE",
 * //     IpamPrefixListResolverTargetId: "STRING_VALUE",
 * //     IpamPrefixListResolverSyncEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreManagedPrefixListVersionCommandInput - {@link RestoreManagedPrefixListVersionCommandInput}
 * @returns {@link RestoreManagedPrefixListVersionCommandOutput}
 * @see {@link RestoreManagedPrefixListVersionCommandInput} for command's `input` shape.
 * @see {@link RestoreManagedPrefixListVersionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RestoreManagedPrefixListVersionCommand extends $Command
  .classBuilder<
    RestoreManagedPrefixListVersionCommandInput,
    RestoreManagedPrefixListVersionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "RestoreManagedPrefixListVersion", {})
  .n("EC2Client", "RestoreManagedPrefixListVersionCommand")
  .sc(RestoreManagedPrefixListVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreManagedPrefixListVersionRequest;
      output: RestoreManagedPrefixListVersionResult;
    };
    sdk: {
      input: RestoreManagedPrefixListVersionCommandInput;
      output: RestoreManagedPrefixListVersionCommandOutput;
    };
  };
}
