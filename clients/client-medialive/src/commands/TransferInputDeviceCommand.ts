// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { TransferInputDeviceRequest, TransferInputDeviceResponse } from "../models/models_1";
import { TransferInputDevice } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TransferInputDeviceCommand}.
 */
export interface TransferInputDeviceCommandInput extends TransferInputDeviceRequest {}
/**
 * @public
 *
 * The output of {@link TransferInputDeviceCommand}.
 */
export interface TransferInputDeviceCommandOutput extends TransferInputDeviceResponse, __MetadataBearer {}

/**
 * Start an input device transfer to another AWS account. After you make the request, the other account must accept or reject the transfer.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, TransferInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, TransferInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // TransferInputDeviceRequest
 *   InputDeviceId: "STRING_VALUE", // required
 *   TargetCustomerId: "STRING_VALUE",
 *   TargetRegion: "STRING_VALUE",
 *   TransferMessage: "STRING_VALUE",
 * };
 * const command = new TransferInputDeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TransferInputDeviceCommandInput - {@link TransferInputDeviceCommandInput}
 * @returns {@link TransferInputDeviceCommandOutput}
 * @see {@link TransferInputDeviceCommandInput} for command's `input` shape.
 * @see {@link TransferInputDeviceCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
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
export class TransferInputDeviceCommand extends $Command
  .classBuilder<
    TransferInputDeviceCommandInput,
    TransferInputDeviceCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "TransferInputDevice", {})
  .n("MediaLiveClient", "TransferInputDeviceCommand")
  .sc(TransferInputDevice)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TransferInputDeviceRequest;
      output: {};
    };
    sdk: {
      input: TransferInputDeviceCommandInput;
      output: TransferInputDeviceCommandOutput;
    };
  };
}
