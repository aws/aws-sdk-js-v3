// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateOriginRequestPolicyRequest, CreateOriginRequestPolicyResult } from "../models/models_0";
import { de_CreateOriginRequestPolicyCommand, se_CreateOriginRequestPolicyCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOriginRequestPolicyCommand}.
 */
export interface CreateOriginRequestPolicyCommandInput extends CreateOriginRequestPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateOriginRequestPolicyCommand}.
 */
export interface CreateOriginRequestPolicyCommandOutput extends CreateOriginRequestPolicyResult, __MetadataBearer {}

/**
 * <p>Creates an origin request policy.</p>
 *          <p>After you create an origin request policy, you can attach it to one or more cache
 * 			behaviors. When it's attached to a cache behavior, the origin request policy determines
 * 			the values that CloudFront includes in requests that it sends to the origin. Each request that
 * 			CloudFront sends to the origin includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>The request body and the URL path (without the domain name) from the viewer
 * 					request.</p>
 *             </li>
 *             <li>
 *                <p>The headers that CloudFront automatically includes in every origin request,
 * 					including <code>Host</code>, <code>User-Agent</code>, and
 * 						<code>X-Amz-Cf-Id</code>.</p>
 *             </li>
 *             <li>
 *                <p>All HTTP headers, cookies, and URL query strings that are specified in the
 * 					cache policy or the origin request policy. These can include items from the
 * 					viewer request and, in the case of headers, additional ones that are added by
 * 					CloudFront.</p>
 *             </li>
 *          </ul>
 *          <p>CloudFront sends a request when it can't find a valid object in its cache that matches the
 * 			request. If you want to send values to the origin and also include them in the cache
 * 			key, use <code>CachePolicy</code>.</p>
 *          <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateOriginRequestPolicyRequest
 *   OriginRequestPolicyConfig: { // OriginRequestPolicyConfig
 *     Comment: "STRING_VALUE",
 *     Name: "STRING_VALUE", // required
 *     HeadersConfig: { // OriginRequestPolicyHeadersConfig
 *       HeaderBehavior: "none" || "whitelist" || "allViewer" || "allViewerAndWhitelistCloudFront" || "allExcept", // required
 *       Headers: { // Headers
 *         Quantity: Number("int"), // required
 *         Items: [ // HeaderList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     CookiesConfig: { // OriginRequestPolicyCookiesConfig
 *       CookieBehavior: "none" || "whitelist" || "all" || "allExcept", // required
 *       Cookies: { // CookieNames
 *         Quantity: Number("int"), // required
 *         Items: [ // CookieNameList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     QueryStringsConfig: { // OriginRequestPolicyQueryStringsConfig
 *       QueryStringBehavior: "none" || "whitelist" || "all" || "allExcept", // required
 *       QueryStrings: { // QueryStringNames
 *         Quantity: Number("int"), // required
 *         Items: [ // QueryStringNamesList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 * };
 * const command = new CreateOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateOriginRequestPolicyResult
 * //   OriginRequestPolicy: { // OriginRequestPolicy
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     OriginRequestPolicyConfig: { // OriginRequestPolicyConfig
 * //       Comment: "STRING_VALUE",
 * //       Name: "STRING_VALUE", // required
 * //       HeadersConfig: { // OriginRequestPolicyHeadersConfig
 * //         HeaderBehavior: "none" || "whitelist" || "allViewer" || "allViewerAndWhitelistCloudFront" || "allExcept", // required
 * //         Headers: { // Headers
 * //           Quantity: Number("int"), // required
 * //           Items: [ // HeaderList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       CookiesConfig: { // OriginRequestPolicyCookiesConfig
 * //         CookieBehavior: "none" || "whitelist" || "all" || "allExcept", // required
 * //         Cookies: { // CookieNames
 * //           Quantity: Number("int"), // required
 * //           Items: [ // CookieNameList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       QueryStringsConfig: { // OriginRequestPolicyQueryStringsConfig
 * //         QueryStringBehavior: "none" || "whitelist" || "all" || "allExcept", // required
 * //         QueryStrings: { // QueryStringNames
 * //           Quantity: Number("int"), // required
 * //           Items: [ // QueryStringNamesList
 * //             "STRING_VALUE",
 * //           ],
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
 * @param CreateOriginRequestPolicyCommandInput - {@link CreateOriginRequestPolicyCommandInput}
 * @returns {@link CreateOriginRequestPolicyCommandOutput}
 * @see {@link CreateOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link OriginRequestPolicyAlreadyExists} (client fault)
 *  <p>An origin request policy with this name already exists. You must provide a unique
 * 			name. To modify an existing origin request policy, use
 * 				<code>UpdateOriginRequestPolicy</code>.</p>
 *
 * @throws {@link TooManyCookiesInOriginRequestPolicy} (client fault)
 *  <p>The number of cookies in the origin request policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyHeadersInOriginRequestPolicy} (client fault)
 *  <p>The number of headers in the origin request policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyOriginRequestPolicies} (client fault)
 *  <p>You have reached the maximum number of origin request policies for this Amazon Web Services account.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyQueryStringsInOriginRequestPolicy} (client fault)
 *  <p>The number of query strings in the origin request policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class CreateOriginRequestPolicyCommand extends $Command
  .classBuilder<
    CreateOriginRequestPolicyCommandInput,
    CreateOriginRequestPolicyCommandOutput,
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
  .s("Cloudfront2020_05_31", "CreateOriginRequestPolicy", {})
  .n("CloudFrontClient", "CreateOriginRequestPolicyCommand")
  .f(void 0, void 0)
  .ser(se_CreateOriginRequestPolicyCommand)
  .de(de_CreateOriginRequestPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOriginRequestPolicyRequest;
      output: CreateOriginRequestPolicyResult;
    };
    sdk: {
      input: CreateOriginRequestPolicyCommandInput;
      output: CreateOriginRequestPolicyCommandOutput;
    };
  };
}
