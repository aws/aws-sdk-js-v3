// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDevicesRequest } from "../models/models_4";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateDevices } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDevicesCommand}.
 */
export interface UpdateDevicesCommandInput extends UpdateDevicesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDevicesCommand}.
 */
export interface UpdateDevicesCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates one or more devices in a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateDevicesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateDevicesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // UpdateDevicesRequest
 *   DeviceFleetName: "STRING_VALUE", // required
 *   Devices: [ // Devices // required
 *     { // Device
 *       DeviceName: "STRING_VALUE", // required
 *       Description: "STRING_VALUE",
 *       IotThingName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateDevicesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDevicesCommandInput - {@link UpdateDevicesCommandInput}
 * @returns {@link UpdateDevicesCommandOutput}
 * @see {@link UpdateDevicesCommandInput} for command's `input` shape.
 * @see {@link UpdateDevicesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class UpdateDevicesCommand extends $Command
  .classBuilder<
    UpdateDevicesCommandInput,
    UpdateDevicesCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "UpdateDevices", {})
  .n("SageMakerClient", "UpdateDevicesCommand")
  .sc(UpdateDevices)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDevicesRequest;
      output: {};
    };
    sdk: {
      input: UpdateDevicesCommandInput;
      output: UpdateDevicesCommandOutput;
    };
  };
}
