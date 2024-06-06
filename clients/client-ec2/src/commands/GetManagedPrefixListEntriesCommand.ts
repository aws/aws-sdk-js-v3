// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetManagedPrefixListEntriesRequest, GetManagedPrefixListEntriesResult } from "../models/models_6";
import { de_GetManagedPrefixListEntriesCommand, se_GetManagedPrefixListEntriesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetManagedPrefixListEntriesCommand}.
 */
export interface GetManagedPrefixListEntriesCommandInput extends GetManagedPrefixListEntriesRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedPrefixListEntriesCommand}.
 */
export interface GetManagedPrefixListEntriesCommandOutput extends GetManagedPrefixListEntriesResult, __MetadataBearer {}

/**
 * <p>Gets information about the entries for a specified managed prefix list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetManagedPrefixListEntriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetManagedPrefixListEntriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetManagedPrefixListEntriesRequest
 *   DryRun: true || false,
 *   PrefixListId: "STRING_VALUE", // required
 *   TargetVersion: Number("long"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetManagedPrefixListEntriesCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedPrefixListEntriesResult
 * //   Entries: [ // PrefixListEntrySet
 * //     { // PrefixListEntry
 * //       Cidr: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetManagedPrefixListEntriesCommandInput - {@link GetManagedPrefixListEntriesCommandInput}
 * @returns {@link GetManagedPrefixListEntriesCommandOutput}
 * @see {@link GetManagedPrefixListEntriesCommandInput} for command's `input` shape.
 * @see {@link GetManagedPrefixListEntriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetManagedPrefixListEntriesCommand extends $Command
  .classBuilder<
    GetManagedPrefixListEntriesCommandInput,
    GetManagedPrefixListEntriesCommandOutput,
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
  .s("AmazonEC2", "GetManagedPrefixListEntries", {})
  .n("EC2Client", "GetManagedPrefixListEntriesCommand")
  .f(void 0, void 0)
  .ser(se_GetManagedPrefixListEntriesCommand)
  .de(de_GetManagedPrefixListEntriesCommand)
  .build() {}
