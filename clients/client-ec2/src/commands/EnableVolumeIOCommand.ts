// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableVolumeIORequest } from "../models/models_6";
import { de_EnableVolumeIOCommand, se_EnableVolumeIOCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableVolumeIOCommand}.
 */
export interface EnableVolumeIOCommandInput extends EnableVolumeIORequest {}
/**
 * @public
 *
 * The output of {@link EnableVolumeIOCommand}.
 */
export interface EnableVolumeIOCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables I/O operations for a volume that had I/O operations disabled because the data on
 *       the volume was potentially inconsistent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVolumeIOCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableVolumeIOCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // EnableVolumeIORequest
 *   DryRun: true || false,
 *   VolumeId: "STRING_VALUE", // required
 * };
 * const command = new EnableVolumeIOCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableVolumeIOCommandInput - {@link EnableVolumeIOCommandInput}
 * @returns {@link EnableVolumeIOCommandOutput}
 * @see {@link EnableVolumeIOCommandInput} for command's `input` shape.
 * @see {@link EnableVolumeIOCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To enable I/O for a volume
 * ```javascript
 * // This example enables I/O on volume ``vol-1234567890abcdef0``.
 * const input = {
 *   "VolumeId": "vol-1234567890abcdef0"
 * };
 * const command = new EnableVolumeIOCommand(input);
 * await client.send(command);
 * // example id: to-enable-io-for-a-volume-1472508114867
 * ```
 *
 */
export class EnableVolumeIOCommand extends $Command
  .classBuilder<
    EnableVolumeIOCommandInput,
    EnableVolumeIOCommandOutput,
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
  .s("AmazonEC2", "EnableVolumeIO", {})
  .n("EC2Client", "EnableVolumeIOCommand")
  .f(void 0, void 0)
  .ser(se_EnableVolumeIOCommand)
  .de(de_EnableVolumeIOCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableVolumeIORequest;
      output: {};
    };
    sdk: {
      input: EnableVolumeIOCommandInput;
      output: EnableVolumeIOCommandOutput;
    };
  };
}
