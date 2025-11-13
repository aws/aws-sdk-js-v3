// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetOriginRequestPolicyRequest, GetOriginRequestPolicyResult } from "../models/models_1";
import { GetOriginRequestPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOriginRequestPolicyCommand}.
 */
export interface GetOriginRequestPolicyCommandInput extends GetOriginRequestPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetOriginRequestPolicyCommand}.
 */
export interface GetOriginRequestPolicyCommandOutput extends GetOriginRequestPolicyResult, __MetadataBearer {}

/**
 * <p>Gets an origin request policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetOriginRequestPolicyRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetOriginRequestPolicyResult
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
 * @param GetOriginRequestPolicyCommandInput - {@link GetOriginRequestPolicyCommandInput}
 * @returns {@link GetOriginRequestPolicyCommandOutput}
 * @see {@link GetOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link GetOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchOriginRequestPolicy} (client fault)
 *  <p>The origin request policy does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetOriginRequestPolicyCommand extends $Command
  .classBuilder<
    GetOriginRequestPolicyCommandInput,
    GetOriginRequestPolicyCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetOriginRequestPolicy", {})
  .n("CloudFrontClient", "GetOriginRequestPolicyCommand")
  .sc(GetOriginRequestPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOriginRequestPolicyRequest;
      output: GetOriginRequestPolicyResult;
    };
    sdk: {
      input: GetOriginRequestPolicyCommandInput;
      output: GetOriginRequestPolicyCommandOutput;
    };
  };
}
