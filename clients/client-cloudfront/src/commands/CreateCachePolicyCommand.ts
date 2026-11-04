// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCachePolicyRequest, CreateCachePolicyResult } from "../models/models_0";
import { CreateCachePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCachePolicyCommand}.
 */
export interface CreateCachePolicyCommandInput extends CreateCachePolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateCachePolicyCommand}.
 */
export interface CreateCachePolicyCommandOutput extends CreateCachePolicyResult, __MetadataBearer {}

/**
 * Creates a cache policy.
 *
 * After you create a cache policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the cache policy determines the following:
 *
 * - The values that CloudFront includes in the *cache key*. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.
 * - The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.
 *
 *   > **Important:** If your minimum TTL is greater than 0, CloudFront will cache content for at least the duration specified in the cache policy's minimum TTL, even if the `Cache-Control: no-cache`, `no-store`, or `private` directives are present in the origin headers.
 *
 * The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but *not* include them in the cache key, use `OriginRequestPolicy`.
 *
 * For more information about cache policies, see [Controlling the cache key](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateCachePolicyRequest
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
 * };
 * const command = new CreateCachePolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateCachePolicyResult
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
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCachePolicyCommandInput - {@link CreateCachePolicyCommandInput}
 * @returns {@link CreateCachePolicyCommandOutput}
 * @see {@link CreateCachePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateCachePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link TooManyCachePolicies} (client fault)
 *
 * You have reached the maximum number of cache policies for this Amazon Web Services account. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
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
export class CreateCachePolicyCommand extends command<CreateCachePolicyCommandInput, CreateCachePolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateCachePolicy",
  CreateCachePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCachePolicyRequest;
      output: CreateCachePolicyResult;
    };
    sdk: {
      input: CreateCachePolicyCommandInput;
      output: CreateCachePolicyCommandOutput;
    };
  };
}
