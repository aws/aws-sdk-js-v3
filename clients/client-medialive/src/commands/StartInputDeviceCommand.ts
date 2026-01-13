// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { StartInputDeviceRequest, StartInputDeviceResponse } from "../models/models_1";
import { StartInputDevice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartInputDeviceCommand}.
 */
export interface StartInputDeviceCommandInput extends StartInputDeviceRequest {}
/**
 * @public
 *
 * The output of {@link StartInputDeviceCommand}.
 */
export interface StartInputDeviceCommandOutput extends StartInputDeviceResponse, __MetadataBearer {}

/**
 * Start an input device that is attached to a MediaConnect flow. (There is no need to start a device that is attached to a MediaLive input; MediaLive starts the device when the channel starts.)
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, StartInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, StartInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // StartInputDeviceRequest
 *   InputDeviceId: "STRING_VALUE", // required
 * };
 * const command = new StartInputDeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartInputDeviceCommandInput - {@link StartInputDeviceCommandInput}
 * @returns {@link StartInputDeviceCommandOutput}
 * @see {@link StartInputDeviceCommandInput} for command's `input` shape.
 * @see {@link StartInputDeviceCommandOutput} for command's `response` shape.
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
export class StartInputDeviceCommand extends $Command
  .classBuilder<
    StartInputDeviceCommandInput,
    StartInputDeviceCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "StartInputDevice", {})
  .n("MediaLiveClient", "StartInputDeviceCommand")
  .sc(StartInputDevice$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartInputDeviceRequest;
      output: {};
    };
    sdk: {
      input: StartInputDeviceCommandInput;
      output: StartInputDeviceCommandOutput;
    };
  };
}
