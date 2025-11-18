// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpnConcentratorsRequest, DescribeVpnConcentratorsResult } from "../models/models_6";
import { DescribeVpnConcentrators } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpnConcentratorsCommand}.
 */
export interface DescribeVpnConcentratorsCommandInput extends DescribeVpnConcentratorsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpnConcentratorsCommand}.
 */
export interface DescribeVpnConcentratorsCommandOutput extends DescribeVpnConcentratorsResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your VPN concentrators.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpnConcentratorsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpnConcentratorsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeVpnConcentratorsRequest
 *   VpnConcentratorIds: [ // VpnConcentratorIdStringList
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
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DescribeVpnConcentratorsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpnConcentratorsResult
 * //   VpnConcentrators: [ // VpnConcentratorList
 * //     { // VpnConcentrator
 * //       VpnConcentratorId: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
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
 * @param DescribeVpnConcentratorsCommandInput - {@link DescribeVpnConcentratorsCommandInput}
 * @returns {@link DescribeVpnConcentratorsCommandOutput}
 * @see {@link DescribeVpnConcentratorsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpnConcentratorsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpnConcentratorsCommand extends $Command
  .classBuilder<
    DescribeVpnConcentratorsCommandInput,
    DescribeVpnConcentratorsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeVpnConcentrators", {})
  .n("EC2Client", "DescribeVpnConcentratorsCommand")
  .sc(DescribeVpnConcentrators)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpnConcentratorsRequest;
      output: DescribeVpnConcentratorsResult;
    };
    sdk: {
      input: DescribeVpnConcentratorsCommandInput;
      output: DescribeVpnConcentratorsCommandOutput;
    };
  };
}
