// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateBandwidthRateLimitInput, UpdateBandwidthRateLimitOutput } from "../models/models_0";
import { UpdateBandwidthRateLimit$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig,
} from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBandwidthRateLimitCommand}.
 */
export interface UpdateBandwidthRateLimitCommandInput extends UpdateBandwidthRateLimitInput {}
/**
 * @public
 *
 * The output of {@link UpdateBandwidthRateLimitCommand}.
 */
export interface UpdateBandwidthRateLimitCommandOutput extends UpdateBandwidthRateLimitOutput, __MetadataBearer {}

/**
 * <p>Updates the bandwidth rate limits of a gateway. You can update both the upload and
 *          download bandwidth rate limit or specify only one of the two. If you don't set a
 *          bandwidth rate limit, the existing rate limit remains. This operation is supported only for
 *          the stored volume, cached volume, and tape gateway types. To update bandwidth rate limits
 *          for S3 file gateways, use <a>UpdateBandwidthRateLimitSchedule</a>.</p>
 *          <p>By default, a gateway's bandwidth rate limits are not set. If you don't set
 *          any limit, the gateway does not have any limitations on its bandwidth usage and could
 *          potentially use the maximum available bandwidth.</p>
 *          <p>To specify which gateway to update, use the Amazon Resource Name (ARN) of the gateway in
 *          your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateBandwidthRateLimitInput
 *   GatewayARN: "STRING_VALUE", // required
 *   AverageUploadRateLimitInBitsPerSec: Number("long"),
 *   AverageDownloadRateLimitInBitsPerSec: Number("long"),
 * };
 * const command = new UpdateBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBandwidthRateLimitOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateBandwidthRateLimitCommandInput - {@link UpdateBandwidthRateLimitCommandInput}
 * @returns {@link UpdateBandwidthRateLimitCommandOutput}
 * @see {@link UpdateBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link UpdateBandwidthRateLimitCommandOutput} for command's `response` shape.
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
 * @example To update the bandwidth rate limits of a gateway
 * ```javascript
 * // Updates the bandwidth rate limits of a gateway. Both the upload and download bandwidth rate limit can be set, or either one of the two. If a new limit is not set, the existing rate limit remains.
 * const input = {
 *   AverageDownloadRateLimitInBitsPerSec: 102400,
 *   AverageUploadRateLimitInBitsPerSec: 51200,
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new UpdateBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateBandwidthRateLimitCommand extends $Command
  .classBuilder<
    UpdateBandwidthRateLimitCommandInput,
    UpdateBandwidthRateLimitCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "UpdateBandwidthRateLimit", {})
  .n("StorageGatewayClient", "UpdateBandwidthRateLimitCommand")
  .sc(UpdateBandwidthRateLimit$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBandwidthRateLimitInput;
      output: UpdateBandwidthRateLimitOutput;
    };
    sdk: {
      input: UpdateBandwidthRateLimitCommandInput;
      output: UpdateBandwidthRateLimitCommandOutput;
    };
  };
}
