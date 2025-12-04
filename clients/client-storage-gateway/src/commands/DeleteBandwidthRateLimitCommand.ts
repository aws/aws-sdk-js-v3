// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBandwidthRateLimitInput, DeleteBandwidthRateLimitOutput } from "../models/models_0";
import { DeleteBandwidthRateLimit } from "../schemas/schemas_0";
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
 * The input for {@link DeleteBandwidthRateLimitCommand}.
 */
export interface DeleteBandwidthRateLimitCommandInput extends DeleteBandwidthRateLimitInput {}
/**
 * @public
 *
 * The output of {@link DeleteBandwidthRateLimitCommand}.
 */
export interface DeleteBandwidthRateLimitCommandOutput extends DeleteBandwidthRateLimitOutput, __MetadataBearer {}

/**
 * <p>Deletes the bandwidth rate limits of a gateway. You can delete either the upload and
 *          download bandwidth rate limit, or you can delete both. If you delete only one of the
 *          limits, the other limit remains unchanged. To specify which gateway to work with, use the
 *          Amazon Resource Name (ARN) of the gateway in your request. This operation is supported only
 *          for the stored volume, cached volume, and tape gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteBandwidthRateLimitInput
 *   GatewayARN: "STRING_VALUE", // required
 *   BandwidthType: "STRING_VALUE", // required
 * };
 * const command = new DeleteBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBandwidthRateLimitOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBandwidthRateLimitCommandInput - {@link DeleteBandwidthRateLimitCommandInput}
 * @returns {@link DeleteBandwidthRateLimitCommandOutput}
 * @see {@link DeleteBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link DeleteBandwidthRateLimitCommandOutput} for command's `response` shape.
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
 * @example To delete bandwidth rate limits of gateway
 * ```javascript
 * // Deletes the bandwidth rate limits of a gateway; either the upload or download limit, or both.
 * const input = {
 *   BandwidthType: "All",
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DeleteBandwidthRateLimitCommand(input);
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
export class DeleteBandwidthRateLimitCommand extends $Command
  .classBuilder<
    DeleteBandwidthRateLimitCommandInput,
    DeleteBandwidthRateLimitCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DeleteBandwidthRateLimit", {})
  .n("StorageGatewayClient", "DeleteBandwidthRateLimitCommand")
  .sc(DeleteBandwidthRateLimit)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBandwidthRateLimitInput;
      output: DeleteBandwidthRateLimitOutput;
    };
    sdk: {
      input: DeleteBandwidthRateLimitCommandInput;
      output: DeleteBandwidthRateLimitCommandOutput;
    };
  };
}
