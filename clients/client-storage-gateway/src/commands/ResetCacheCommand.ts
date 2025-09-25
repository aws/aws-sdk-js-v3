// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ResetCacheInput, ResetCacheOutput } from "../models/models_0";
import { ResetCache } from "../schemas/schemas_53_ResetCache";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetCacheCommand}.
 */
export interface ResetCacheCommandInput extends ResetCacheInput {}
/**
 * @public
 *
 * The output of {@link ResetCacheCommand}.
 */
export interface ResetCacheCommandOutput extends ResetCacheOutput, __MetadataBearer {}

/**
 * <p>Resets all cache disks that have encountered an error and makes the disks available for
 *          reconfiguration as cache storage. If your cache disk encounters an error, the gateway
 *          prevents read and write operations on virtual tapes in the gateway. For example, an error
 *          can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the
 *          gateway loses its cache storage. At this point, you can reconfigure the disks as cache
 *          disks. This operation is only supported in the cached volume and tape types.</p>
 *          <important>
 *             <p>If the cache disk you are resetting contains data that has not been uploaded to
 *                Amazon S3 yet, that data can be lost. After you reset cache disks, there will
 *             be no configured cache disks left in the gateway, so you must configure at least one new
 *             cache disk for your gateway to function properly.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ResetCacheCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ResetCacheCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // ResetCacheInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new ResetCacheCommand(input);
 * const response = await client.send(command);
 * // { // ResetCacheOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResetCacheCommandInput - {@link ResetCacheCommandInput}
 * @returns {@link ResetCacheCommandOutput}
 * @see {@link ResetCacheCommandInput} for command's `input` shape.
 * @see {@link ResetCacheCommandOutput} for command's `response` shape.
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
 * @example To reset cache disks in error status
 * ```javascript
 * // Resets all cache disks that have encountered a error and makes the disks available for reconfiguration as cache storage.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C"
 * };
 * const command = new ResetCacheCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ResetCacheCommand extends $Command
  .classBuilder<
    ResetCacheCommandInput,
    ResetCacheCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "ResetCache", {})
  .n("StorageGatewayClient", "ResetCacheCommand")
  .sc(ResetCache)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetCacheInput;
      output: ResetCacheOutput;
    };
    sdk: {
      input: ResetCacheCommandInput;
      output: ResetCacheCommandOutput;
    };
  };
}
