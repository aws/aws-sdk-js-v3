// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { RejectInputDeviceTransferRequest, RejectInputDeviceTransferResponse } from "../models/models_2";
import { de_RejectInputDeviceTransferCommand, se_RejectInputDeviceTransferCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectInputDeviceTransferCommand}.
 */
export interface RejectInputDeviceTransferCommandInput extends RejectInputDeviceTransferRequest {}
/**
 * @public
 *
 * The output of {@link RejectInputDeviceTransferCommand}.
 */
export interface RejectInputDeviceTransferCommandOutput extends RejectInputDeviceTransferResponse, __MetadataBearer {}

/**
 * Reject the transfer of the specified input device to your AWS account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, RejectInputDeviceTransferCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, RejectInputDeviceTransferCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaLiveClient(config);
 * const input = { // RejectInputDeviceTransferRequest
 *   InputDeviceId: "STRING_VALUE", // required
 * };
 * const command = new RejectInputDeviceTransferCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RejectInputDeviceTransferCommandInput - {@link RejectInputDeviceTransferCommandInput}
 * @returns {@link RejectInputDeviceTransferCommandOutput}
 * @see {@link RejectInputDeviceTransferCommandInput} for command's `input` shape.
 * @see {@link RejectInputDeviceTransferCommandOutput} for command's `response` shape.
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
 * @public
 */
export class RejectInputDeviceTransferCommand extends $Command
  .classBuilder<
    RejectInputDeviceTransferCommandInput,
    RejectInputDeviceTransferCommandOutput,
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
  .s("MediaLive", "RejectInputDeviceTransfer", {})
  .n("MediaLiveClient", "RejectInputDeviceTransferCommand")
  .f(void 0, void 0)
  .ser(se_RejectInputDeviceTransferCommand)
  .de(de_RejectInputDeviceTransferCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectInputDeviceTransferRequest;
      output: {};
    };
    sdk: {
      input: RejectInputDeviceTransferCommandInput;
      output: RejectInputDeviceTransferCommandOutput;
    };
  };
}
