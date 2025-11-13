// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetOriginRequestPolicyConfigRequest, GetOriginRequestPolicyConfigResult } from "../models/models_1";
import { GetOriginRequestPolicyConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOriginRequestPolicyConfigCommand}.
 */
export interface GetOriginRequestPolicyConfigCommandInput extends GetOriginRequestPolicyConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetOriginRequestPolicyConfigCommand}.
 */
export interface GetOriginRequestPolicyConfigCommandOutput
  extends GetOriginRequestPolicyConfigResult,
    __MetadataBearer {}

/**
 * <p>Gets an origin request policy configuration.</p> <p>To get an origin request policy configuration, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginRequestPolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginRequestPolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetOriginRequestPolicyConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetOriginRequestPolicyConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetOriginRequestPolicyConfigResult
 * //   OriginRequestPolicyConfig: { // OriginRequestPolicyConfig
 * //     Comment: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     HeadersConfig: { // OriginRequestPolicyHeadersConfig
 * //       HeaderBehavior: "none" || "whitelist" || "allViewer" || "allViewerAndWhitelistCloudFront" || "allExcept", // required
 * //       Headers: { // Headers
 * //         Quantity: Number("int"), // required
 * //         Items: [ // HeaderList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     CookiesConfig: { // OriginRequestPolicyCookiesConfig
 * //       CookieBehavior: "none" || "whitelist" || "all" || "allExcept", // required
 * //       Cookies: { // CookieNames
 * //         Quantity: Number("int"), // required
 * //         Items: [ // CookieNameList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     QueryStringsConfig: { // OriginRequestPolicyQueryStringsConfig
 * //       QueryStringBehavior: "none" || "whitelist" || "all" || "allExcept", // required
 * //       QueryStrings: { // QueryStringNames
 * //         Quantity: Number("int"), // required
 * //         Items: [ // QueryStringNamesList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOriginRequestPolicyConfigCommandInput - {@link GetOriginRequestPolicyConfigCommandInput}
 * @returns {@link GetOriginRequestPolicyConfigCommandOutput}
 * @see {@link GetOriginRequestPolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetOriginRequestPolicyConfigCommandOutput} for command's `response` shape.
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
export class GetOriginRequestPolicyConfigCommand extends $Command
  .classBuilder<
    GetOriginRequestPolicyConfigCommandInput,
    GetOriginRequestPolicyConfigCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetOriginRequestPolicyConfig", {})
  .n("CloudFrontClient", "GetOriginRequestPolicyConfigCommand")
  .sc(GetOriginRequestPolicyConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOriginRequestPolicyConfigRequest;
      output: GetOriginRequestPolicyConfigResult;
    };
    sdk: {
      input: GetOriginRequestPolicyConfigCommandInput;
      output: GetOriginRequestPolicyConfigCommandOutput;
    };
  };
}
