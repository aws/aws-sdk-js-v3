// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCachePolicyConfigRequest, GetCachePolicyConfigResult } from "../models/models_1";
import { de_GetCachePolicyConfigCommand, se_GetCachePolicyConfigCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCachePolicyConfigCommand}.
 */
export interface GetCachePolicyConfigCommandInput extends GetCachePolicyConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetCachePolicyConfigCommand}.
 */
export interface GetCachePolicyConfigCommandOutput extends GetCachePolicyConfigResult, __MetadataBearer {}

/**
 * <p>Gets a cache policy configuration.</p>
 *          <p>To get a cache policy configuration, you must provide the policy's identifier. If the
 * 			cache policy is attached to a distribution's cache behavior, you can get the policy's
 * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
 * 			cache policy is not attached to a cache behavior, you can get the identifier using
 * 				<code>ListCachePolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCachePolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCachePolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFrontClient(config);
 * const input = { // GetCachePolicyConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetCachePolicyConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetCachePolicyConfigResult
 * //   CachePolicyConfig: { // CachePolicyConfig
 * //     Comment: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     DefaultTTL: Number("long"),
 * //     MaxTTL: Number("long"),
 * //     MinTTL: Number("long"), // required
 * //     ParametersInCacheKeyAndForwardedToOrigin: { // ParametersInCacheKeyAndForwardedToOrigin
 * //       EnableAcceptEncodingGzip: true || false, // required
 * //       EnableAcceptEncodingBrotli: true || false,
 * //       HeadersConfig: { // CachePolicyHeadersConfig
 * //         HeaderBehavior: "none" || "whitelist", // required
 * //         Headers: { // Headers
 * //           Quantity: Number("int"), // required
 * //           Items: [ // HeaderList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       CookiesConfig: { // CachePolicyCookiesConfig
 * //         CookieBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 * //         Cookies: { // CookieNames
 * //           Quantity: Number("int"), // required
 * //           Items: [ // CookieNameList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       QueryStringsConfig: { // CachePolicyQueryStringsConfig
 * //         QueryStringBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 * //         QueryStrings: { // QueryStringNames
 * //           Quantity: Number("int"), // required
 * //           Items: [ // QueryStringNamesList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCachePolicyConfigCommandInput - {@link GetCachePolicyConfigCommandInput}
 * @returns {@link GetCachePolicyConfigCommandOutput}
 * @see {@link GetCachePolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetCachePolicyConfigCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetCachePolicyConfigCommand extends $Command
  .classBuilder<
    GetCachePolicyConfigCommandInput,
    GetCachePolicyConfigCommandOutput,
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
  .s("Cloudfront2020_05_31", "GetCachePolicyConfig", {})
  .n("CloudFrontClient", "GetCachePolicyConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetCachePolicyConfigCommand)
  .de(de_GetCachePolicyConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCachePolicyConfigRequest;
      output: GetCachePolicyConfigResult;
    };
    sdk: {
      input: GetCachePolicyConfigCommandInput;
      output: GetCachePolicyConfigCommandOutput;
    };
  };
}
