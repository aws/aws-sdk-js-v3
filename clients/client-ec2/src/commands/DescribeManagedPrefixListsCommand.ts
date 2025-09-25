// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeManagedPrefixListsRequest, DescribeManagedPrefixListsResult } from "../models/models_5";
import { DescribeManagedPrefixLists } from "../schemas/schemas_25_ManagedPrefix";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeManagedPrefixListsCommand}.
 */
export interface DescribeManagedPrefixListsCommandInput extends DescribeManagedPrefixListsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeManagedPrefixListsCommand}.
 */
export interface DescribeManagedPrefixListsCommandOutput extends DescribeManagedPrefixListsResult, __MetadataBearer {}

/**
 * <p>Describes your managed prefix lists and any Amazon Web Services-managed prefix lists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeManagedPrefixListsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeManagedPrefixListsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeManagedPrefixListsRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   PrefixListIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeManagedPrefixListsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeManagedPrefixListsResult
 * //   NextToken: "STRING_VALUE",
 * //   PrefixLists: [ // ManagedPrefixListSet
 * //     { // ManagedPrefixList
 * //       PrefixListId: "STRING_VALUE",
 * //       AddressFamily: "STRING_VALUE",
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "restore-in-progress" || "restore-complete" || "restore-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //       StateMessage: "STRING_VALUE",
 * //       PrefixListArn: "STRING_VALUE",
 * //       PrefixListName: "STRING_VALUE",
 * //       MaxEntries: Number("int"),
 * //       Version: Number("long"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OwnerId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeManagedPrefixListsCommandInput - {@link DescribeManagedPrefixListsCommandInput}
 * @returns {@link DescribeManagedPrefixListsCommandOutput}
 * @see {@link DescribeManagedPrefixListsCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedPrefixListsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeManagedPrefixListsCommand extends $Command
  .classBuilder<
    DescribeManagedPrefixListsCommandInput,
    DescribeManagedPrefixListsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeManagedPrefixLists", {})
  .n("EC2Client", "DescribeManagedPrefixListsCommand")
  .sc(DescribeManagedPrefixLists)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeManagedPrefixListsRequest;
      output: DescribeManagedPrefixListsResult;
    };
    sdk: {
      input: DescribeManagedPrefixListsCommandInput;
      output: DescribeManagedPrefixListsCommandOutput;
    };
  };
}
