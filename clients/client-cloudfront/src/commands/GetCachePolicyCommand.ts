// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCachePolicyRequest, GetCachePolicyResult } from "../models/models_1";
import { de_GetCachePolicyCommand, se_GetCachePolicyCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCachePolicyCommand}.
 */
export interface GetCachePolicyCommandInput extends GetCachePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetCachePolicyCommand}.
 */
export interface GetCachePolicyCommandOutput extends GetCachePolicyResult, __MetadataBearer {}

/**
 * <p>Gets a cache policy, including the following metadata:</p>
 *          <ul>
 *             <li>
 *                <p>The policy's identifier.</p>
 *             </li>
 *             <li>
 *                <p>The date and time when the policy was last modified.</p>
 *             </li>
 *          </ul>
 *          <p>To get a cache policy, you must provide the policy's identifier. If the cache policy
 * 			is attached to a distribution's cache behavior, you can get the policy's identifier
 * 			using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache
 * 			policy is not attached to a cache behavior, you can get the identifier using
 * 				<code>ListCachePolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetCachePolicyRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetCachePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetCachePolicyResult
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
 * @param GetCachePolicyCommandInput - {@link GetCachePolicyCommandInput}
 * @returns {@link GetCachePolicyCommandOutput}
 * @see {@link GetCachePolicyCommandInput} for command's `input` shape.
 * @see {@link GetCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchCachePolicy} (client fault)
 *  <p>The cache policy does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetCachePolicyCommand extends $Command
  .classBuilder<
    GetCachePolicyCommandInput,
    GetCachePolicyCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "GetCachePolicy", {})
  .n("CloudFrontClient", "GetCachePolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetCachePolicyCommand)
  .de(de_GetCachePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCachePolicyRequest;
      output: GetCachePolicyResult;
    };
    sdk: {
      input: GetCachePolicyCommandInput;
      output: GetCachePolicyCommandOutput;
    };
  };
}
