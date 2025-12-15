// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateOriginRequestPolicyRequest, UpdateOriginRequestPolicyResult } from "../models/models_1";
import { UpdateOriginRequestPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOriginRequestPolicyCommand}.
 */
export interface UpdateOriginRequestPolicyCommandInput extends UpdateOriginRequestPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOriginRequestPolicyCommand}.
 */
export interface UpdateOriginRequestPolicyCommandOutput extends UpdateOriginRequestPolicyResult, __MetadataBearer {}

/**
 * <p>Updates an origin request policy configuration.</p> <p>When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration:</p> <ol> <li> <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the origin request policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateOriginRequestPolicyRequest
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
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOriginRequestPolicyResult
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
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateOriginRequestPolicyCommandInput - {@link UpdateOriginRequestPolicyCommandInput}
 * @returns {@link UpdateOriginRequestPolicyCommandOutput}
 * @see {@link UpdateOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link IllegalUpdate} (client fault)
 *  <p>The update contains modifications that are not allowed.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchOriginRequestPolicy} (client fault)
 *  <p>The origin request policy does not exist.</p>
 *
 * @throws {@link OriginRequestPolicyAlreadyExists} (client fault)
 *  <p>An origin request policy with this name already exists. You must provide a unique name. To modify an existing origin request policy, use <code>UpdateOriginRequestPolicy</code>.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
 *
 * @throws {@link TooManyCookiesInOriginRequestPolicy} (client fault)
 *  <p>The number of cookies in the origin request policy exceeds the maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyHeadersInOriginRequestPolicy} (client fault)
 *  <p>The number of headers in the origin request policy exceeds the maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyQueryStringsInOriginRequestPolicy} (client fault)
 *  <p>The number of query strings in the origin request policy exceeds the maximum. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class UpdateOriginRequestPolicyCommand extends $Command
  .classBuilder<
    UpdateOriginRequestPolicyCommandInput,
    UpdateOriginRequestPolicyCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "UpdateOriginRequestPolicy", {})
  .n("CloudFrontClient", "UpdateOriginRequestPolicyCommand")
  .sc(UpdateOriginRequestPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOriginRequestPolicyRequest;
      output: UpdateOriginRequestPolicyResult;
    };
    sdk: {
      input: UpdateOriginRequestPolicyCommandInput;
      output: UpdateOriginRequestPolicyCommandOutput;
    };
  };
}
