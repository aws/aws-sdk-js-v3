// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBandwidthRateLimitInput, DescribeBandwidthRateLimitOutput } from "../models/models_0";
import { de_DescribeBandwidthRateLimitCommand, se_DescribeBandwidthRateLimitCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBandwidthRateLimitCommand}.
 */
export interface DescribeBandwidthRateLimitCommandInput extends DescribeBandwidthRateLimitInput {}
/**
 * @public
 *
 * The output of {@link DescribeBandwidthRateLimitCommand}.
 */
export interface DescribeBandwidthRateLimitCommandOutput extends DescribeBandwidthRateLimitOutput, __MetadataBearer {}

/**
 * <p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set,
 *          which means no bandwidth rate limiting is in effect. This operation is supported only for
 *          the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits
 *          for S3 file gateways, use <a>DescribeBandwidthRateLimitSchedule</a>.</p>
 *          <p>This operation returns a value for a bandwidth rate limit only if the limit is set. If
 *          no limits are set for the gateway, then this operation returns only the gateway ARN in the
 *          response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of
 *          the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeBandwidthRateLimitInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBandwidthRateLimitOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   AverageUploadRateLimitInBitsPerSec: Number("long"),
 * //   AverageDownloadRateLimitInBitsPerSec: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeBandwidthRateLimitCommandInput - {@link DescribeBandwidthRateLimitCommandInput}
 * @returns {@link DescribeBandwidthRateLimitCommandOutput}
 * @see {@link DescribeBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link DescribeBandwidthRateLimitCommandOutput} for command's `response` shape.
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
 * @public
 * @example To describe the bandwidth rate limits of a gateway
 * ```javascript
 * // Returns a value for a bandwidth rate limit if set. If not set, then only the gateway ARN is returned.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AverageDownloadRateLimitInBitsPerSec": 204800,
 *   "AverageUploadRateLimitInBitsPerSec": 102400,
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * // example id: to-describe-the-bandwidth-rate-limits-of-a-gateway-1471384826404
 * ```
 *
 */
export class DescribeBandwidthRateLimitCommand extends $Command
  .classBuilder<
    DescribeBandwidthRateLimitCommandInput,
    DescribeBandwidthRateLimitCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "DescribeBandwidthRateLimit", {})
  .n("StorageGatewayClient", "DescribeBandwidthRateLimitCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBandwidthRateLimitCommand)
  .de(de_DescribeBandwidthRateLimitCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBandwidthRateLimitInput;
      output: DescribeBandwidthRateLimitOutput;
    };
    sdk: {
      input: DescribeBandwidthRateLimitCommandInput;
      output: DescribeBandwidthRateLimitCommandOutput;
    };
  };
}
