// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListOriginRequestPoliciesRequest, ListOriginRequestPoliciesResult } from "../models/models_1";
import { ListOriginRequestPolicies } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOriginRequestPoliciesCommand}.
 */
export interface ListOriginRequestPoliciesCommandInput extends ListOriginRequestPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListOriginRequestPoliciesCommand}.
 */
export interface ListOriginRequestPoliciesCommandOutput extends ListOriginRequestPoliciesResult, __MetadataBearer {}

/**
 * <p>Gets a list of origin request policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListOriginRequestPoliciesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListOriginRequestPoliciesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListOriginRequestPoliciesRequest
 *   Type: "managed" || "custom",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListOriginRequestPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListOriginRequestPoliciesResult
 * //   OriginRequestPolicyList: { // OriginRequestPolicyList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // OriginRequestPolicySummaryList
 * //       { // OriginRequestPolicySummary
 * //         Type: "managed" || "custom", // required
 * //         OriginRequestPolicy: { // OriginRequestPolicy
 * //           Id: "STRING_VALUE", // required
 * //           LastModifiedTime: new Date("TIMESTAMP"), // required
 * //           OriginRequestPolicyConfig: { // OriginRequestPolicyConfig
 * //             Comment: "STRING_VALUE",
 * //             Name: "STRING_VALUE", // required
 * //             HeadersConfig: { // OriginRequestPolicyHeadersConfig
 * //               HeaderBehavior: "none" || "whitelist" || "allViewer" || "allViewerAndWhitelistCloudFront" || "allExcept", // required
 * //               Headers: { // Headers
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // HeaderList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //             CookiesConfig: { // OriginRequestPolicyCookiesConfig
 * //               CookieBehavior: "none" || "whitelist" || "all" || "allExcept", // required
 * //               Cookies: { // CookieNames
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // CookieNameList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //             QueryStringsConfig: { // OriginRequestPolicyQueryStringsConfig
 * //               QueryStringBehavior: "none" || "whitelist" || "all" || "allExcept", // required
 * //               QueryStrings: { // QueryStringNames
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // QueryStringNamesList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListOriginRequestPoliciesCommandInput - {@link ListOriginRequestPoliciesCommandInput}
 * @returns {@link ListOriginRequestPoliciesCommandOutput}
 * @see {@link ListOriginRequestPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListOriginRequestPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
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
export class ListOriginRequestPoliciesCommand extends $Command
  .classBuilder<
    ListOriginRequestPoliciesCommandInput,
    ListOriginRequestPoliciesCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListOriginRequestPolicies", {})
  .n("CloudFrontClient", "ListOriginRequestPoliciesCommand")
  .sc(ListOriginRequestPolicies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOriginRequestPoliciesRequest;
      output: ListOriginRequestPoliciesResult;
    };
    sdk: {
      input: ListOriginRequestPoliciesCommandInput;
      output: ListOriginRequestPoliciesCommandOutput;
    };
  };
}
