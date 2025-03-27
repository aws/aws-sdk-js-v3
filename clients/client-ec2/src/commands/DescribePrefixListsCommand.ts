// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePrefixListsRequest, DescribePrefixListsResult } from "../models/models_4";
import { de_DescribePrefixListsCommand, se_DescribePrefixListsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePrefixListsCommand}.
 */
export interface DescribePrefixListsCommandInput extends DescribePrefixListsRequest {}
/**
 * @public
 *
 * The output of {@link DescribePrefixListsCommand}.
 */
export interface DescribePrefixListsCommandOutput extends DescribePrefixListsResult, __MetadataBearer {}

/**
 * <p>Describes available Amazon Web Services services in a prefix list format, which includes the prefix list
 *             name and prefix list ID of the service and the IP address range for the service.</p>
 *          <p>We recommend that you use <a>DescribeManagedPrefixLists</a> instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribePrefixListsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribePrefixListsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribePrefixListsRequest
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
 *   PrefixListIds: [ // PrefixListResourceIdStringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribePrefixListsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePrefixListsResult
 * //   NextToken: "STRING_VALUE",
 * //   PrefixLists: [ // PrefixListSet
 * //     { // PrefixList
 * //       Cidrs: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       PrefixListId: "STRING_VALUE",
 * //       PrefixListName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePrefixListsCommandInput - {@link DescribePrefixListsCommandInput}
 * @returns {@link DescribePrefixListsCommandOutput}
 * @see {@link DescribePrefixListsCommandInput} for command's `input` shape.
 * @see {@link DescribePrefixListsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribePrefixListsCommand extends $Command
  .classBuilder<
    DescribePrefixListsCommandInput,
    DescribePrefixListsCommandOutput,
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
  .s("AmazonEC2", "DescribePrefixLists", {})
  .n("EC2Client", "DescribePrefixListsCommand")
  .f(void 0, void 0)
  .ser(se_DescribePrefixListsCommand)
  .de(de_DescribePrefixListsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePrefixListsRequest;
      output: DescribePrefixListsResult;
    };
    sdk: {
      input: DescribePrefixListsCommandInput;
      output: DescribePrefixListsCommandOutput;
    };
  };
}
