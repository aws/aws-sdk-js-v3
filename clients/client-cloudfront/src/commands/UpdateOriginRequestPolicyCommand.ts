// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateOriginRequestPolicyRequest, UpdateOriginRequestPolicyResult } from "../models/models_1";
import { UpdateOriginRequestPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates an origin request policy configuration.
 *
 * When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration:
 *
 * 1. Use `GetOriginRequestPolicyConfig` to get the current configuration.
 * 2. Locally modify the fields in the origin request policy configuration that you want to update.
 * 3. Call `UpdateOriginRequestPolicy` by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.
 *
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
 *
 * Access denied.
 *
 * @throws {@link IllegalUpdate} (client fault)
 *
 * The update contains modifications that are not allowed.
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchOriginRequestPolicy} (client fault)
 *
 * The origin request policy does not exist.
 *
 * @throws {@link OriginRequestPolicyAlreadyExists} (client fault)
 *
 * An origin request policy with this name already exists. You must provide a unique name. To modify an existing origin request policy, use `UpdateOriginRequestPolicy`.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link TooManyCookiesInOriginRequestPolicy} (client fault)
 *
 * The number of cookies in the origin request policy exceeds the maximum. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyHeadersInOriginRequestPolicy} (client fault)
 *
 * The number of headers in the origin request policy exceeds the maximum. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyQueryStringsInOriginRequestPolicy} (client fault)
 *
 * The number of query strings in the origin request policy exceeds the maximum. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class UpdateOriginRequestPolicyCommand extends command<UpdateOriginRequestPolicyCommandInput, UpdateOriginRequestPolicyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateOriginRequestPolicy",
  UpdateOriginRequestPolicy$
) {
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
