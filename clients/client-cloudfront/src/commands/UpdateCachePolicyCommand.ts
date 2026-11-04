// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCachePolicyRequest, UpdateCachePolicyResult } from "../models/models_1";
import { UpdateCachePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCachePolicyCommand}.
 */
export interface UpdateCachePolicyCommandInput extends UpdateCachePolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCachePolicyCommand}.
 */
export interface UpdateCachePolicyCommandOutput extends UpdateCachePolicyResult, __MetadataBearer {}

/**
 * Updates a cache policy configuration.
 *
 * When you update a cache policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a cache policy configuration:
 *
 * 1. Use `GetCachePolicyConfig` to get the current configuration.
 * 2. Locally modify the fields in the cache policy configuration that you want to update.
 * 3. Call `UpdateCachePolicy` by providing the entire cache policy configuration, including the fields that you modified and those that you didn't.
 *
 * > **Important:** If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the `Cache-Control: no-cache`, `no-store`, or `private` directives are present in the origin headers.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateCachePolicyRequest
 *   CachePolicyConfig: { // CachePolicyConfig
 *     Comment: "STRING_VALUE",
 *     Name: "STRING_VALUE", // required
 *     DefaultTTL: Number("long"),
 *     MaxTTL: Number("long"),
 *     MinTTL: Number("long"), // required
 *     ParametersInCacheKeyAndForwardedToOrigin: { // ParametersInCacheKeyAndForwardedToOrigin
 *       EnableAcceptEncodingGzip: true || false, // required
 *       EnableAcceptEncodingBrotli: true || false,
 *       HeadersConfig: { // CachePolicyHeadersConfig
 *         HeaderBehavior: "none" || "whitelist", // required
 *         Headers: { // Headers
 *           Quantity: Number("int"), // required
 *           Items: [ // HeaderList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       CookiesConfig: { // CachePolicyCookiesConfig
 *         CookieBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 *         Cookies: { // CookieNames
 *           Quantity: Number("int"), // required
 *           Items: [ // CookieNameList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       QueryStringsConfig: { // CachePolicyQueryStringsConfig
 *         QueryStringBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 *         QueryStrings: { // QueryStringNames
 *           Quantity: Number("int"), // required
 *           Items: [ // QueryStringNamesList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *   },
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateCachePolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCachePolicyResult
 * //   CachePolicy: { // CachePolicy
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     CachePolicyConfig: { // CachePolicyConfig
 * //       Comment: "STRING_VALUE",
 * //       Name: "STRING_VALUE", // required
 * //       DefaultTTL: Number("long"),
 * //       MaxTTL: Number("long"),
 * //       MinTTL: Number("long"), // required
 * //       ParametersInCacheKeyAndForwardedToOrigin: { // ParametersInCacheKeyAndForwardedToOrigin
 * //         EnableAcceptEncodingGzip: true || false, // required
 * //         EnableAcceptEncodingBrotli: true || false,
 * //         HeadersConfig: { // CachePolicyHeadersConfig
 * //           HeaderBehavior: "none" || "whitelist", // required
 * //           Headers: { // Headers
 * //             Quantity: Number("int"), // required
 * //             Items: [ // HeaderList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         CookiesConfig: { // CachePolicyCookiesConfig
 * //           CookieBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 * //           Cookies: { // CookieNames
 * //             Quantity: Number("int"), // required
 * //             Items: [ // CookieNameList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         QueryStringsConfig: { // CachePolicyQueryStringsConfig
 * //           QueryStringBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 * //           QueryStrings: { // QueryStringNames
 * //             Quantity: Number("int"), // required
 * //             Items: [ // QueryStringNamesList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateCachePolicyCommandInput - {@link UpdateCachePolicyCommandInput}
 * @returns {@link UpdateCachePolicyCommandOutput}
 * @see {@link UpdateCachePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link CachePolicyAlreadyExists} (client fault)
 *
 * A cache policy with this name already exists. You must provide a unique name. To modify an existing cache policy, use `UpdateCachePolicy`.
 *
 * @throws {@link IllegalUpdate} (client fault)
 *
 * The update contains modifications that are not allowed.
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchCachePolicy} (client fault)
 *
 * The cache policy does not exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link TooManyCookiesInCachePolicy} (client fault)
 *
 * The number of cookies in the cache policy exceeds the maximum. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyHeadersInCachePolicy} (client fault)
 *
 * The number of headers in the cache policy exceeds the maximum. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyQueryStringsInCachePolicy} (client fault)
 *
 * The number of query strings in the cache policy exceeds the maximum. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class UpdateCachePolicyCommand extends command<UpdateCachePolicyCommandInput, UpdateCachePolicyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCachePolicy",
  UpdateCachePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCachePolicyRequest;
      output: UpdateCachePolicyResult;
    };
    sdk: {
      input: UpdateCachePolicyCommandInput;
      output: UpdateCachePolicyCommandOutput;
    };
  };
}
