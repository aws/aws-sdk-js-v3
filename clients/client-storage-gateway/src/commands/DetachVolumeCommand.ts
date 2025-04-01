// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DetachVolumeInput, DetachVolumeOutput } from "../models/models_0";
import { de_DetachVolumeCommand, se_DetachVolumeCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachVolumeCommand}.
 */
export interface DetachVolumeCommandInput extends DetachVolumeInput {}
/**
 * @public
 *
 * The output of {@link DetachVolumeCommand}.
 */
export interface DetachVolumeCommandOutput extends DetachVolumeOutput, __MetadataBearer {}

/**
 * <p>Disconnects a volume from an iSCSI connection and then detaches the volume from the
 *          specified gateway. Detaching and attaching a volume enables you to recover your data from
 *          one gateway to a different gateway without creating a snapshot. It also makes it easier to
 *          move your volumes from an on-premises gateway to a gateway hosted on an Amazon EC2
 *          instance. This operation is only supported in the volume gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DetachVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DetachVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DetachVolumeInput
 *   VolumeARN: "STRING_VALUE", // required
 *   ForceDetach: true || false,
 * };
 * const command = new DetachVolumeCommand(input);
 * const response = await client.send(command);
 * // { // DetachVolumeOutput
 * //   VolumeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DetachVolumeCommandInput - {@link DetachVolumeCommandInput}
 * @returns {@link DetachVolumeCommandOutput}
 * @see {@link DetachVolumeCommandInput} for command's `input` shape.
 * @see {@link DetachVolumeCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @public
 */
export class DetachVolumeCommand extends $Command
  .classBuilder<
    DetachVolumeCommandInput,
    DetachVolumeCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "DetachVolume", {})
  .n("StorageGatewayClient", "DetachVolumeCommand")
  .f(void 0, void 0)
  .ser(se_DetachVolumeCommand)
  .de(de_DetachVolumeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachVolumeInput;
      output: DetachVolumeOutput;
    };
    sdk: {
      input: DetachVolumeCommandInput;
      output: DetachVolumeCommandOutput;
    };
  };
}
