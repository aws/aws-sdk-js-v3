// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVolumeAttributeRequest, DescribeVolumeAttributeResult } from "../models/models_5";
import { de_DescribeVolumeAttributeCommand, se_DescribeVolumeAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVolumeAttributeCommand}.
 */
export interface DescribeVolumeAttributeCommandInput extends DescribeVolumeAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVolumeAttributeCommand}.
 */
export interface DescribeVolumeAttributeCommandOutput extends DescribeVolumeAttributeResult, __MetadataBearer {}

/**
 * <p>Describes the specified attribute of the specified volume. You can specify only one
 *       attribute at a time.</p>
 *          <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volumes.html">Amazon EBS volumes</a> in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVolumeAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVolumeAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVolumeAttributeRequest
 *   Attribute: "autoEnableIO" || "productCodes", // required
 *   VolumeId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DescribeVolumeAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVolumeAttributeResult
 * //   AutoEnableIO: { // AttributeBooleanValue
 * //     Value: true || false,
 * //   },
 * //   ProductCodes: [ // ProductCodeList
 * //     { // ProductCode
 * //       ProductCodeId: "STRING_VALUE",
 * //       ProductCodeType: "devpay" || "marketplace",
 * //     },
 * //   ],
 * //   VolumeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVolumeAttributeCommandInput - {@link DescribeVolumeAttributeCommandInput}
 * @returns {@link DescribeVolumeAttributeCommandOutput}
 * @see {@link DescribeVolumeAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumeAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe a volume attribute
 * ```javascript
 * // This example describes the ``autoEnableIo`` attribute of the volume with the ID ``vol-049df61146c4d7901``.
 * const input = {
 *   "Attribute": "autoEnableIO",
 *   "VolumeId": "vol-049df61146c4d7901"
 * };
 * const command = new DescribeVolumeAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AutoEnableIO": {
 *     "Value": false
 *   },
 *   "VolumeId": "vol-049df61146c4d7901"
 * }
 * *\/
 * // example id: to-describe-a-volume-attribute-1472505773492
 * ```
 *
 */
export class DescribeVolumeAttributeCommand extends $Command
  .classBuilder<
    DescribeVolumeAttributeCommandInput,
    DescribeVolumeAttributeCommandOutput,
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
  .s("AmazonEC2", "DescribeVolumeAttribute", {})
  .n("EC2Client", "DescribeVolumeAttributeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVolumeAttributeCommand)
  .de(de_DescribeVolumeAttributeCommand)
  .build() {}
