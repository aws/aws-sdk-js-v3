// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyManagedPrefixListRequest, ModifyManagedPrefixListResult } from "../models/models_6";
import { de_ModifyManagedPrefixListCommand, se_ModifyManagedPrefixListCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyManagedPrefixListCommand}.
 */
export interface ModifyManagedPrefixListCommandInput extends ModifyManagedPrefixListRequest {}
/**
 * @public
 *
 * The output of {@link ModifyManagedPrefixListCommand}.
 */
export interface ModifyManagedPrefixListCommandOutput extends ModifyManagedPrefixListResult, __MetadataBearer {}

/**
 * <p>Modifies the specified managed prefix list.</p>
 *          <p>Adding or removing entries in a prefix list creates a new version of the prefix list.
 *             Changing the name of the prefix list does not affect the version.</p>
 *          <p>If you specify a current version number that does not match the true current version
 *             number, the request fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyManagedPrefixListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyManagedPrefixListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyManagedPrefixListRequest
 *   DryRun: true || false,
 *   PrefixListId: "STRING_VALUE", // required
 *   CurrentVersion: Number("long"),
 *   PrefixListName: "STRING_VALUE",
 *   AddEntries: [ // AddPrefixListEntries
 *     { // AddPrefixListEntry
 *       Cidr: "STRING_VALUE", // required
 *       Description: "STRING_VALUE",
 *     },
 *   ],
 *   RemoveEntries: [ // RemovePrefixListEntries
 *     { // RemovePrefixListEntry
 *       Cidr: "STRING_VALUE", // required
 *     },
 *   ],
 *   MaxEntries: Number("int"),
 * };
 * const command = new ModifyManagedPrefixListCommand(input);
 * const response = await client.send(command);
 * // { // ModifyManagedPrefixListResult
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
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyManagedPrefixListCommandInput - {@link ModifyManagedPrefixListCommandInput}
 * @returns {@link ModifyManagedPrefixListCommandOutput}
 * @see {@link ModifyManagedPrefixListCommandInput} for command's `input` shape.
 * @see {@link ModifyManagedPrefixListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyManagedPrefixListCommand extends $Command
  .classBuilder<
    ModifyManagedPrefixListCommandInput,
    ModifyManagedPrefixListCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "ModifyManagedPrefixList", {})
  .n("EC2Client", "ModifyManagedPrefixListCommand")
  .f(void 0, void 0)
  .ser(se_ModifyManagedPrefixListCommand)
  .de(de_ModifyManagedPrefixListCommand)
  .build() {}
