// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { RebootInputDeviceRequest, RebootInputDeviceResponse } from "../models/models_1";
import { RebootInputDevice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RebootInputDeviceCommand}.
 */
export interface RebootInputDeviceCommandInput extends RebootInputDeviceRequest {}
/**
 * @public
 *
 * The output of {@link RebootInputDeviceCommand}.
 */
export interface RebootInputDeviceCommandOutput extends RebootInputDeviceResponse, __MetadataBearer {}

/**
 * Send a reboot command to the specified input device. The device will begin rebooting within a few seconds of sending the command. When the reboot is complete, the device’s connection status will change to connected.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, RebootInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, RebootInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // RebootInputDeviceRequest
 *   Force: "NO" || "YES",
 *   InputDeviceId: "STRING_VALUE", // required
 * };
 * const command = new RebootInputDeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RebootInputDeviceCommandInput - {@link RebootInputDeviceCommandInput}
 * @returns {@link RebootInputDeviceCommandOutput}
 * @see {@link RebootInputDeviceCommandInput} for command's `input` shape.
 * @see {@link RebootInputDeviceCommandOutput} for command's `response` shape.
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
export class RebootInputDeviceCommand extends $Command
  .classBuilder<
    RebootInputDeviceCommandInput,
    RebootInputDeviceCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "RebootInputDevice", {})
  .n("MediaLiveClient", "RebootInputDeviceCommand")
  .sc(RebootInputDevice$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RebootInputDeviceRequest;
      output: {};
    };
    sdk: {
      input: RebootInputDeviceCommandInput;
      output: RebootInputDeviceCommandOutput;
    };
  };
}
