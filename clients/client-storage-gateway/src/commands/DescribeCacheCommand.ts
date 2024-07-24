// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCacheInput, DescribeCacheOutput } from "../models/models_0";
import { de_DescribeCacheCommand, se_DescribeCacheCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheCommand}.
 */
export interface DescribeCacheCommandInput extends DescribeCacheInput {}
/**
 * @public
 *
 * The output of {@link DescribeCacheCommand}.
 */
export interface DescribeCacheCommandOutput extends DescribeCacheOutput, __MetadataBearer {}

/**
 * <p>Returns information about the cache of a gateway. This operation is only supported in
 *          the cached volume, tape, and file gateway types.</p>
 *          <p>The response includes disk IDs that are configured as cache, and it includes the amount
 *          of cache allocated and used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeCacheCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeCacheCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeCacheInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeCacheCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCacheOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   DiskIds: [ // DiskIds
 * //     "STRING_VALUE",
 * //   ],
 * //   CacheAllocatedInBytes: Number("long"),
 * //   CacheUsedPercentage: Number("double"),
 * //   CacheDirtyPercentage: Number("double"),
 * //   CacheHitPercentage: Number("double"),
 * //   CacheMissPercentage: Number("double"),
 * // };
 *
 * ```
 *
 * @param DescribeCacheCommandInput - {@link DescribeCacheCommandInput}
 * @returns {@link DescribeCacheCommandOutput}
 * @see {@link DescribeCacheCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheCommandOutput} for command's `response` shape.
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
 */
export class DescribeCacheCommand extends $Command
  .classBuilder<
    DescribeCacheCommandInput,
    DescribeCacheCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "DescribeCache", {})
  .n("StorageGatewayClient", "DescribeCacheCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCacheCommand)
  .de(de_DescribeCacheCommand)
  .build() {}
