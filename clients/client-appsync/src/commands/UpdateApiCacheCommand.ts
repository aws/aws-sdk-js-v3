// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateApiCacheRequest, UpdateApiCacheResponse } from "../models/models_0";
import { UpdateApiCache$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateApiCacheCommand}.
 */
export interface UpdateApiCacheCommandInput extends UpdateApiCacheRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApiCacheCommand}.
 */
export interface UpdateApiCacheCommandOutput extends UpdateApiCacheResponse, __MetadataBearer {}

/**
 * Updates the cache for the GraphQL API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // UpdateApiCacheRequest
 *   apiId: "STRING_VALUE", // required
 *   ttl: Number("long"), // required
 *   apiCachingBehavior: "FULL_REQUEST_CACHING" || "PER_RESOLVER_CACHING" || "OPERATION_LEVEL_CACHING", // required
 *   type: "T2_SMALL" || "T2_MEDIUM" || "R4_LARGE" || "R4_XLARGE" || "R4_2XLARGE" || "R4_4XLARGE" || "R4_8XLARGE" || "SMALL" || "MEDIUM" || "LARGE" || "XLARGE" || "LARGE_2X" || "LARGE_4X" || "LARGE_8X" || "LARGE_12X", // required
 *   healthMetricsConfig: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateApiCacheCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApiCacheResponse
 * //   apiCache: { // ApiCache
 * //     ttl: Number("long"),
 * //     apiCachingBehavior: "FULL_REQUEST_CACHING" || "PER_RESOLVER_CACHING" || "OPERATION_LEVEL_CACHING",
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
 * @param UpdateApiCacheCommandInput - {@link UpdateApiCacheCommandInput}
 * @returns {@link UpdateApiCacheCommandOutput}
 * @see {@link UpdateApiCacheCommandInput} for command's `input` shape.
 * @see {@link UpdateApiCacheCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Another modification is in progress at this time and it must complete before you can make your change.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You aren't authorized to perform this operation.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class UpdateApiCacheCommand extends command<UpdateApiCacheCommandInput, UpdateApiCacheCommandOutput>(
  _ep0,
  _mw0,
  "UpdateApiCache",
  UpdateApiCache$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApiCacheRequest;
      output: UpdateApiCacheResponse;
    };
    sdk: {
      input: UpdateApiCacheCommandInput;
      output: UpdateApiCacheCommandOutput;
    };
  };
}
