// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDhcpOptionsRequest, DescribeDhcpOptionsResult } from "../models/models_3";
import { de_DescribeDhcpOptionsCommand, se_DescribeDhcpOptionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDhcpOptionsCommand}.
 */
export interface DescribeDhcpOptionsCommandInput extends DescribeDhcpOptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDhcpOptionsCommand}.
 */
export interface DescribeDhcpOptionsCommandOutput extends DescribeDhcpOptionsResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your DHCP options sets.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP options sets</a> in the
 * 				<i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeDhcpOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeDhcpOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeDhcpOptionsRequest
 *   DhcpOptionsIds: [ // DhcpOptionsIdStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDhcpOptionsResult
 * //   DhcpOptions: [ // DhcpOptionsList
 * //     { // DhcpOptions
 * //       DhcpConfigurations: [ // DhcpConfigurationList
 * //         { // DhcpConfiguration
 * //           Key: "STRING_VALUE",
 * //           Values: [ // DhcpConfigurationValueList
 * //             { // AttributeValue
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       DhcpOptionsId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDhcpOptionsCommandInput - {@link DescribeDhcpOptionsCommandInput}
 * @returns {@link DescribeDhcpOptionsCommandOutput}
 * @see {@link DescribeDhcpOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDhcpOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe a DHCP options set
 * ```javascript
 * // This example describes the specified DHCP options set.
 * const input = {
 *   "DhcpOptionsIds": [
 *     "dopt-d9070ebb"
 *   ]
 * };
 * const command = new DescribeDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DhcpOptions": [
 *     {
 *       "DhcpConfigurations": [
 *         {
 *           "Key": "domain-name-servers",
 *           "Values": [
 *             {
 *               "Value": "10.2.5.2"
 *             },
 *             {
 *               "Value": "10.2.5.1"
 *             }
 *           ]
 *         }
 *       ],
 *       "DhcpOptionsId": "dopt-d9070ebb"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-dhcp-options-1
 * ```
 *
 */
export class DescribeDhcpOptionsCommand extends $Command
  .classBuilder<
    DescribeDhcpOptionsCommandInput,
    DescribeDhcpOptionsCommandOutput,
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
  .s("AmazonEC2", "DescribeDhcpOptions", {})
  .n("EC2Client", "DescribeDhcpOptionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDhcpOptionsCommand)
  .de(de_DescribeDhcpOptionsCommand)
  .build() {}
