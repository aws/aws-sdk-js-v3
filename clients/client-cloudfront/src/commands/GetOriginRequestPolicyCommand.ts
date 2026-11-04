// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetOriginRequestPolicyRequest, GetOriginRequestPolicyResult } from "../models/models_1";
import { GetOriginRequestPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets an origin request policy, including the following metadata:
 *
 * - The policy's identifier.
 * - The date and time when the policy was last modified.
 *
 * To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using `ListDistributions` or `GetDistribution`. If the origin request policy is not attached to a cache behavior, you can get the identifier using `ListOriginRequestPolicies`.
 *
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
 *
 * Access denied.
 *
 * @throws {@link NoSuchOriginRequestPolicy} (client fault)
 *
 * The origin request policy does not exist.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class GetOriginRequestPolicyCommand extends command<GetOriginRequestPolicyCommandInput, GetOriginRequestPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetOriginRequestPolicy",
  GetOriginRequestPolicy$
) {
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
