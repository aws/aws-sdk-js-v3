// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetApiCacheRequest, GetApiCacheResponse } from "../models/models_0";
import { de_GetApiCacheCommand, se_GetApiCacheCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApiCacheCommand}.
 */
export interface GetApiCacheCommandInput extends GetApiCacheRequest {}
/**
 * @public
 *
 * The output of {@link GetApiCacheCommand}.
 */
export interface GetApiCacheCommandOutput extends GetApiCacheResponse, __MetadataBearer {}

/**
 * <p>Retrieves an <code>ApiCache</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // GetApiCacheRequest
 *   apiId: "STRING_VALUE", // required
 * };
 * const command = new GetApiCacheCommand(input);
 * const response = await client.send(command);
 * // { // GetApiCacheResponse
 * //   apiCache: { // ApiCache
 * //     ttl: Number("long"),
 * //     apiCachingBehavior: "FULL_REQUEST_CACHING" || "PER_RESOLVER_CACHING",
 * //     transitEncryptionEnabled: true || false,
 * //     atRestEncryptionEnabled: true || false,
 * //     type: "T2_SMALL" || "T2_MEDIUM" || "R4_LARGE" || "R4_XLARGE" || "R4_2XLARGE" || "R4_4XLARGE" || "R4_8XLARGE" || "SMALL" || "MEDIUM" || "LARGE" || "XLARGE" || "LARGE_2X" || "LARGE_4X" || "LARGE_8X" || "LARGE_12X",
 * //     status: "AVAILABLE" || "CREATING" || "DELETING" || "MODIFYING" || "FAILED",
 * //     healthMetricsConfig: "ENABLED" || "DISABLED",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApiCacheCommandInput - {@link GetApiCacheCommandInput}
 * @returns {@link GetApiCacheCommandOutput}
 * @see {@link GetApiCacheCommandInput} for command's `input` shape.
 * @see {@link GetApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the
 *          field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can make your
 *          change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 * @public
 */
export class GetApiCacheCommand extends $Command
  .classBuilder<
    GetApiCacheCommandInput,
    GetApiCacheCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "GetApiCache", {})
  .n("AppSyncClient", "GetApiCacheCommand")
  .f(void 0, void 0)
  .ser(se_GetApiCacheCommand)
  .de(de_GetApiCacheCommand)
  .build() {}
