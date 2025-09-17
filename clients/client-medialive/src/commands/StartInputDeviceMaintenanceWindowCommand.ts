// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  StartInputDeviceMaintenanceWindowRequest,
  StartInputDeviceMaintenanceWindowResponse,
} from "../models/models_2";
import {
  de_StartInputDeviceMaintenanceWindowCommand,
  se_StartInputDeviceMaintenanceWindowCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartInputDeviceMaintenanceWindowCommand}.
 */
export interface StartInputDeviceMaintenanceWindowCommandInput extends StartInputDeviceMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link StartInputDeviceMaintenanceWindowCommand}.
 */
export interface StartInputDeviceMaintenanceWindowCommandOutput
  extends StartInputDeviceMaintenanceWindowResponse,
    __MetadataBearer {}

/**
 * Start a maintenance window for the specified input device. Starting a maintenance window will give the device up to two hours to install software. If the device was streaming prior to the maintenance, it will resume streaming when the software is fully installed. Devices automatically install updates while they are powered on and their MediaLive channels are stopped. A maintenance window allows you to update a device without having to stop MediaLive channels that use the device. The device must remain powered on and connected to the internet for the duration of the maintenance.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, StartInputDeviceMaintenanceWindowCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, StartInputDeviceMaintenanceWindowCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // StartInputDeviceMaintenanceWindowRequest
 *   InputDeviceId: "STRING_VALUE", // required
 * };
 * const command = new StartInputDeviceMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartInputDeviceMaintenanceWindowCommandInput - {@link StartInputDeviceMaintenanceWindowCommandInput}
 * @returns {@link StartInputDeviceMaintenanceWindowCommandOutput}
 * @see {@link StartInputDeviceMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link StartInputDeviceMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class StartInputDeviceMaintenanceWindowCommand extends $Command
  .classBuilder<
    StartInputDeviceMaintenanceWindowCommandInput,
    StartInputDeviceMaintenanceWindowCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "StartInputDeviceMaintenanceWindow", {})
  .n("MediaLiveClient", "StartInputDeviceMaintenanceWindowCommand")
  .f(void 0, void 0)
  .ser(se_StartInputDeviceMaintenanceWindowCommand)
  .de(de_StartInputDeviceMaintenanceWindowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartInputDeviceMaintenanceWindowRequest;
      output: {};
    };
    sdk: {
      input: StartInputDeviceMaintenanceWindowCommandInput;
      output: StartInputDeviceMaintenanceWindowCommandOutput;
    };
  };
}
