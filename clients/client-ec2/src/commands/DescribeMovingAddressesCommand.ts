// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMovingAddressesRequest, DescribeMovingAddressesResult } from "../models/models_5";
import { DescribeMovingAddresses } from "../schemas/schemas_0";

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
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeMovingAddressesRequest
 *   DryRun: true || false,
 *   PublicIps: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
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
 *
 * @example To describe your moving addresses
 * ```javascript
 * // This example describes all of your moving Elastic IP addresses.
 * const input = { /* empty *\/ };
 * const command = new DescribeMovingAddressesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   MovingAddressStatuses: [
 *     {
 *       MoveStatus: "movingToVpc",
 *       PublicIp: "198.51.100.0"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeMovingAddressesCommand extends $Command
  .classBuilder<
    DescribeMovingAddressesCommandInput,
    DescribeMovingAddressesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeMovingAddresses", {})
  .n("EC2Client", "DescribeMovingAddressesCommand")
  .sc(DescribeMovingAddresses)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMovingAddressesRequest;
      output: DescribeMovingAddressesResult;
    };
    sdk: {
      input: DescribeMovingAddressesCommandInput;
      output: DescribeMovingAddressesCommandOutput;
    };
  };
}
