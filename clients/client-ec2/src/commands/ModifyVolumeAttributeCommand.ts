// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVolumeAttributeRequest } from "../models/models_7";
import { de_ModifyVolumeAttributeCommand, se_ModifyVolumeAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVolumeAttributeCommand}.
 */
export interface ModifyVolumeAttributeCommandInput extends ModifyVolumeAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVolumeAttributeCommand}.
 */
export interface ModifyVolumeAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies a volume attribute.</p>
 *          <p>By default, all I/O operations for the volume are suspended when the data on the volume is
 *       determined to be potentially inconsistent, to prevent undetectable, latent data corruption.
 *       The I/O access to the volume can be resumed by first enabling I/O access and then checking the
 *       data consistency on your volume.</p>
 *          <p>You can change the default behavior to resume I/O operations. We recommend that you change
 *       this only for boot volumes or for volumes that are stateless or disposable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVolumeAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVolumeAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // ModifyVolumeAttributeRequest
 *   AutoEnableIO: { // AttributeBooleanValue
 *     Value: true || false,
 *   },
 *   VolumeId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ModifyVolumeAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyVolumeAttributeCommandInput - {@link ModifyVolumeAttributeCommandInput}
 * @returns {@link ModifyVolumeAttributeCommandOutput}
 * @see {@link ModifyVolumeAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyVolumeAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To modify a volume attribute
 * ```javascript
 * // This example sets the ``autoEnableIo`` attribute of the volume with the ID ``vol-1234567890abcdef0`` to ``true``. If the command succeeds, no output is returned.
 * const input = {
 *   "AutoEnableIO": {
 *     "Value": true
 *   },
 *   "DryRun": true,
 *   "VolumeId": "vol-1234567890abcdef0"
 * };
 * const command = new ModifyVolumeAttributeCommand(input);
 * await client.send(command);
 * // example id: to-modify-a-volume-attribute-1472508596749
 * ```
 *
 */
export class ModifyVolumeAttributeCommand extends $Command
  .classBuilder<
    ModifyVolumeAttributeCommandInput,
    ModifyVolumeAttributeCommandOutput,
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
  .s("AmazonEC2", "ModifyVolumeAttribute", {})
  .n("EC2Client", "ModifyVolumeAttributeCommand")
  .f(void 0, void 0)
  .ser(se_ModifyVolumeAttributeCommand)
  .de(de_ModifyVolumeAttributeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVolumeAttributeRequest;
      output: {};
    };
    sdk: {
      input: ModifyVolumeAttributeCommandInput;
      output: ModifyVolumeAttributeCommandOutput;
    };
  };
}
