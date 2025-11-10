// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { FlushApiCacheRequest, FlushApiCacheResponse } from "../models/models_0";
import { FlushApiCache } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link FlushApiCacheCommand}.
 */
export interface FlushApiCacheCommandInput extends FlushApiCacheRequest {}
/**
 * @public
 *
 * The output of {@link FlushApiCacheCommand}.
 */
export interface FlushApiCacheCommandOutput extends FlushApiCacheResponse, __MetadataBearer {}

/**
 * <p>Flushes an <code>ApiCache</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, FlushApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, FlushApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // FlushApiCacheRequest
 *   apiId: "STRING_VALUE", // required
 * };
 * const command = new FlushApiCacheCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param FlushApiCacheCommandInput - {@link FlushApiCacheCommandInput}
 * @returns {@link FlushApiCacheCommandOutput}
 * @see {@link FlushApiCacheCommandInput} for command's `input` shape.
 * @see {@link FlushApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class FlushApiCacheCommand extends $Command
  .classBuilder<
    FlushApiCacheCommandInput,
    FlushApiCacheCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "FlushApiCache", {})
  .n("AppSyncClient", "FlushApiCacheCommand")
  .sc(FlushApiCache)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: FlushApiCacheRequest;
      output: {};
    };
    sdk: {
      input: FlushApiCacheCommandInput;
      output: FlushApiCacheCommandOutput;
    };
  };
}
