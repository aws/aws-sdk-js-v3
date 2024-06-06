// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteManagedPrefixListRequest, DeleteManagedPrefixListResult } from "../models/models_2";
import { de_DeleteManagedPrefixListCommand, se_DeleteManagedPrefixListCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteManagedPrefixListCommand}.
 */
export interface DeleteManagedPrefixListCommandInput extends DeleteManagedPrefixListRequest {}
/**
 * @public
 *
 * The output of {@link DeleteManagedPrefixListCommand}.
 */
export interface DeleteManagedPrefixListCommandOutput extends DeleteManagedPrefixListResult, __MetadataBearer {}

/**
 * <p>Deletes the specified managed prefix list. You must first remove all references to the prefix list in your resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteManagedPrefixListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteManagedPrefixListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteManagedPrefixListRequest
 *   DryRun: true || false,
 *   PrefixListId: "STRING_VALUE", // required
 * };
 * const command = new DeleteManagedPrefixListCommand(input);
 * const response = await client.send(command);
 * // { // DeleteManagedPrefixListResult
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
 * @param DeleteManagedPrefixListCommandInput - {@link DeleteManagedPrefixListCommandInput}
 * @returns {@link DeleteManagedPrefixListCommandOutput}
 * @see {@link DeleteManagedPrefixListCommandInput} for command's `input` shape.
 * @see {@link DeleteManagedPrefixListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteManagedPrefixListCommand extends $Command
  .classBuilder<
    DeleteManagedPrefixListCommandInput,
    DeleteManagedPrefixListCommandOutput,
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
  .s("AmazonEC2", "DeleteManagedPrefixList", {})
  .n("EC2Client", "DeleteManagedPrefixListCommand")
  .f(void 0, void 0)
  .ser(se_DeleteManagedPrefixListCommand)
  .de(de_DeleteManagedPrefixListCommand)
  .build() {}
