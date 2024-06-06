// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMovingAddressesRequest, DescribeMovingAddressesResult } from "../models/models_4";
import { de_DescribeMovingAddressesCommand, se_DescribeMovingAddressesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMovingAddressesCommand}.
 */
export interface DescribeMovingAddressesCommandInput extends DescribeMovingAddressesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMovingAddressesCommand}.
 */
export interface DescribeMovingAddressesCommandOutput extends DescribeMovingAddressesResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Describes your Elastic IP addresses that are being moved from or being restored to the EC2-Classic platform.
 *       This request does not return information about any other Elastic IP addresses in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeMovingAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeMovingAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeMovingAddressesRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   PublicIps: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeMovingAddressesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMovingAddressesResult
 * //   MovingAddressStatuses: [ // MovingAddressStatusSet
 * //     { // MovingAddressStatus
 * //       MoveStatus: "movingToVpc" || "restoringToClassic",
 * //       PublicIp: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMovingAddressesCommandInput - {@link DescribeMovingAddressesCommandInput}
 * @returns {@link DescribeMovingAddressesCommandOutput}
 * @see {@link DescribeMovingAddressesCommandInput} for command's `input` shape.
 * @see {@link DescribeMovingAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe your moving addresses
 * ```javascript
 * // This example describes all of your moving Elastic IP addresses.
 * const input = {};
 * const command = new DescribeMovingAddressesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "MovingAddressStatuses": [
 *     {
 *       "MoveStatus": "movingToVpc",
 *       "PublicIp": "198.51.100.0"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-moving-addresses-1
 * ```
 *
 */
export class DescribeMovingAddressesCommand extends $Command
  .classBuilder<
    DescribeMovingAddressesCommandInput,
    DescribeMovingAddressesCommandOutput,
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
  .s("AmazonEC2", "DescribeMovingAddresses", {})
  .n("EC2Client", "DescribeMovingAddressesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMovingAddressesCommand)
  .de(de_DescribeMovingAddressesCommand)
  .build() {}
