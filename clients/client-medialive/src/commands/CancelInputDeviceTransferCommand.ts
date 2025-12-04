// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import type { CancelInputDeviceTransferRequest, CancelInputDeviceTransferResponse } from "../models/models_0";
import { CancelInputDeviceTransfer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelInputDeviceTransferCommand}.
 */
export interface CancelInputDeviceTransferCommandInput extends CancelInputDeviceTransferRequest {}
/**
 * @public
 *
 * The output of {@link CancelInputDeviceTransferCommand}.
 */
export interface CancelInputDeviceTransferCommandOutput extends CancelInputDeviceTransferResponse, __MetadataBearer {}

/**
 * Cancel an input device transfer that you have requested.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CancelInputDeviceTransferCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CancelInputDeviceTransferCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // CancelInputDeviceTransferRequest
 *   InputDeviceId: "STRING_VALUE", // required
 * };
 * const command = new CancelInputDeviceTransferCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelInputDeviceTransferCommandInput - {@link CancelInputDeviceTransferCommandInput}
 * @returns {@link CancelInputDeviceTransferCommandOutput}
 * @see {@link CancelInputDeviceTransferCommandInput} for command's `input` shape.
 * @see {@link CancelInputDeviceTransferCommandOutput} for command's `response` shape.
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
export class CancelInputDeviceTransferCommand extends $Command
  .classBuilder<
    CancelInputDeviceTransferCommandInput,
    CancelInputDeviceTransferCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "CancelInputDeviceTransfer", {})
  .n("MediaLiveClient", "CancelInputDeviceTransferCommand")
  .sc(CancelInputDeviceTransfer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelInputDeviceTransferRequest;
      output: {};
    };
    sdk: {
      input: CancelInputDeviceTransferCommandInput;
      output: CancelInputDeviceTransferCommandOutput;
    };
  };
}
