// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeregisterDevicesRequest } from "../models/models_2";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeregisterDevices } from "../schemas/schemas_22_Devices";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterDevicesCommand}.
 */
export interface DeregisterDevicesCommandInput extends DeregisterDevicesRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterDevicesCommand}.
 */
export interface DeregisterDevicesCommandOutput extends __MetadataBearer {}

/**
 * <p>Deregisters the specified devices. After you deregister a device, you will need to re-register the devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeregisterDevicesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeregisterDevicesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeregisterDevicesRequest
 *   DeviceFleetName: "STRING_VALUE", // required
 *   DeviceNames: [ // DeviceNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeregisterDevicesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterDevicesCommandInput - {@link DeregisterDevicesCommandInput}
 * @returns {@link DeregisterDevicesCommandOutput}
 * @see {@link DeregisterDevicesCommandInput} for command's `input` shape.
 * @see {@link DeregisterDevicesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DeregisterDevicesCommand extends $Command
  .classBuilder<
    DeregisterDevicesCommandInput,
    DeregisterDevicesCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeregisterDevices", {})
  .n("SageMakerClient", "DeregisterDevicesCommand")
  .sc(DeregisterDevices)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterDevicesRequest;
      output: {};
    };
    sdk: {
      input: DeregisterDevicesCommandInput;
      output: DeregisterDevicesCommandOutput;
    };
  };
}
