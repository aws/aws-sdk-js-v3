// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateApiCacheRequest, CreateApiCacheResponse } from "../models/models_0";
import { de_CreateApiCacheCommand, se_CreateApiCacheCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApiCacheCommand}.
 */
export interface CreateApiCacheCommandInput extends CreateApiCacheRequest {}
/**
 * @public
 *
 * The output of {@link CreateApiCacheCommand}.
 */
export interface CreateApiCacheCommandOutput extends CreateApiCacheResponse, __MetadataBearer {}

/**
 * <p>Creates a cache for the GraphQL API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateApiCacheCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateApiCacheCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // CreateApiCacheRequest
 *   apiId: "STRING_VALUE", // required
 *   ttl: Number("long"), // required
 *   transitEncryptionEnabled: true || false,
 *   atRestEncryptionEnabled: true || false,
 *   apiCachingBehavior: "FULL_REQUEST_CACHING" || "PER_RESOLVER_CACHING", // required
 *   type: "T2_SMALL" || "T2_MEDIUM" || "R4_LARGE" || "R4_XLARGE" || "R4_2XLARGE" || "R4_4XLARGE" || "R4_8XLARGE" || "SMALL" || "MEDIUM" || "LARGE" || "XLARGE" || "LARGE_2X" || "LARGE_4X" || "LARGE_8X" || "LARGE_12X", // required
 *   healthMetricsConfig: "ENABLED" || "DISABLED",
 * };
 * const command = new CreateApiCacheCommand(input);
 * const response = await client.send(command);
 * // { // CreateApiCacheResponse
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
 * @param CreateApiCacheCommandInput - {@link CreateApiCacheCommandInput}
 * @returns {@link CreateApiCacheCommandOutput}
 * @see {@link CreateApiCacheCommandInput} for command's `input` shape.
 * @see {@link CreateApiCacheCommandOutput} for command's `response` shape.
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
export class CreateApiCacheCommand extends $Command
  .classBuilder<
    CreateApiCacheCommandInput,
    CreateApiCacheCommandOutput,
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
  .s("AWSDeepdishControlPlaneService", "CreateApiCache", {})
  .n("AppSyncClient", "CreateApiCacheCommand")
  .f(void 0, void 0)
  .ser(se_CreateApiCacheCommand)
  .de(de_CreateApiCacheCommand)
  .build() {}
