// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListCachePoliciesRequest, ListCachePoliciesResult } from "../models/models_1";
import { de_ListCachePoliciesCommand, se_ListCachePoliciesCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCachePoliciesCommand}.
 */
export interface ListCachePoliciesCommandInput extends ListCachePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListCachePoliciesCommand}.
 */
export interface ListCachePoliciesCommandOutput extends ListCachePoliciesResult, __MetadataBearer {}

/**
 * <p>Gets a list of cache policies.</p>
 *          <p>You can optionally apply a filter to return only the managed policies created by
 * 			Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListCachePoliciesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListCachePoliciesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListCachePoliciesRequest
 *   Type: "managed" || "custom",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListCachePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListCachePoliciesResult
 * //   CachePolicyList: { // CachePolicyList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // CachePolicySummaryList
 * //       { // CachePolicySummary
 * //         Type: "managed" || "custom", // required
 * //         CachePolicy: { // CachePolicy
 * //           Id: "STRING_VALUE", // required
 * //           LastModifiedTime: new Date("TIMESTAMP"), // required
 * //           CachePolicyConfig: { // CachePolicyConfig
 * //             Comment: "STRING_VALUE",
 * //             Name: "STRING_VALUE", // required
 * //             DefaultTTL: Number("long"),
 * //             MaxTTL: Number("long"),
 * //             MinTTL: Number("long"), // required
 * //             ParametersInCacheKeyAndForwardedToOrigin: { // ParametersInCacheKeyAndForwardedToOrigin
 * //               EnableAcceptEncodingGzip: true || false, // required
 * //               EnableAcceptEncodingBrotli: true || false,
 * //               HeadersConfig: { // CachePolicyHeadersConfig
 * //                 HeaderBehavior: "none" || "whitelist", // required
 * //                 Headers: { // Headers
 * //                   Quantity: Number("int"), // required
 * //                   Items: [ // HeaderList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               CookiesConfig: { // CachePolicyCookiesConfig
 * //                 CookieBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 * //                 Cookies: { // CookieNames
 * //                   Quantity: Number("int"), // required
 * //                   Items: [ // CookieNameList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               QueryStringsConfig: { // CachePolicyQueryStringsConfig
 * //                 QueryStringBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 * //                 QueryStrings: { // QueryStringNames
 * //                   Quantity: Number("int"), // required
 * //                   Items: [ // QueryStringNamesList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
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
 * @param ListCachePoliciesCommandInput - {@link ListCachePoliciesCommandInput}
 * @returns {@link ListCachePoliciesCommandOutput}
 * @see {@link ListCachePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListCachePoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
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
export class ListCachePoliciesCommand extends $Command
  .classBuilder<
    ListCachePoliciesCommandInput,
    ListCachePoliciesCommandOutput,
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
  .s("Cloudfront2020_05_31", "ListCachePolicies", {})
  .n("CloudFrontClient", "ListCachePoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListCachePoliciesCommand)
  .de(de_ListCachePoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCachePoliciesRequest;
      output: ListCachePoliciesResult;
    };
    sdk: {
      input: ListCachePoliciesCommandInput;
      output: ListCachePoliciesCommandOutput;
    };
  };
}
