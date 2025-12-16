// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { type DescribeInputDeviceThumbnailRequest, DescribeInputDeviceThumbnailResponse } from "../models/models_1";
import { DescribeInputDeviceThumbnail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInputDeviceThumbnailCommand}.
 */
export interface DescribeInputDeviceThumbnailCommandInput extends DescribeInputDeviceThumbnailRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInputDeviceThumbnailCommand}.
 */
export interface DescribeInputDeviceThumbnailCommandOutput
  extends Omit<DescribeInputDeviceThumbnailResponse, "Body">,
    __MetadataBearer {
  Body?: StreamingBlobPayloadOutputTypes;
}

/**
 * Get the latest thumbnail data for the input device.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputDeviceThumbnailCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputDeviceThumbnailCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeInputDeviceThumbnailRequest
 *   InputDeviceId: "STRING_VALUE", // required
 *   Accept: "image/jpeg", // required
 * };
 * const command = new DescribeInputDeviceThumbnailCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.Body.transformToByteArray();
 * // const str = await response.Body.transformToString();
 * // response.Body.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // DescribeInputDeviceThumbnailResponse
 * //   Body: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * //   ContentType: "image/jpeg",
 * //   ContentLength: Number("long"),
 * //   ETag: "STRING_VALUE",
 * //   LastModified: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeInputDeviceThumbnailCommandInput - {@link DescribeInputDeviceThumbnailCommandInput}
 * @returns {@link DescribeInputDeviceThumbnailCommandOutput}
 * @see {@link DescribeInputDeviceThumbnailCommandInput} for command's `input` shape.
 * @see {@link DescribeInputDeviceThumbnailCommandOutput} for command's `response` shape.
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
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class DescribeInputDeviceThumbnailCommand extends $Command
  .classBuilder<
    DescribeInputDeviceThumbnailCommandInput,
    DescribeInputDeviceThumbnailCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DescribeInputDeviceThumbnail", {})
  .n("MediaLiveClient", "DescribeInputDeviceThumbnailCommand")
  .sc(DescribeInputDeviceThumbnail$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInputDeviceThumbnailRequest;
      output: DescribeInputDeviceThumbnailResponse;
    };
    sdk: {
      input: DescribeInputDeviceThumbnailCommandInput;
      output: DescribeInputDeviceThumbnailCommandOutput;
    };
  };
}
