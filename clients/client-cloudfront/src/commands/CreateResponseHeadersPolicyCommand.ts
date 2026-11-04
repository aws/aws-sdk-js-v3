// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateResponseHeadersPolicyRequest, CreateResponseHeadersPolicyResult } from "../models/models_0";
import { CreateResponseHeadersPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateResponseHeadersPolicyCommand}.
 */
export interface CreateResponseHeadersPolicyCommandInput extends CreateResponseHeadersPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateResponseHeadersPolicyCommand}.
 */
export interface CreateResponseHeadersPolicyCommandOutput extends CreateResponseHeadersPolicyResult, __MetadataBearer {}

/**
 * Creates a response headers policy.
 *
 * A response headers policy contains information about a set of HTTP headers. To create a response headers policy, you provide some metadata about the policy and a set of configurations that specify the headers.
 *
 * After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.
 *
 * For more information, see [Adding or removing HTTP headers in CloudFront responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html) in the *Amazon CloudFront Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateResponseHeadersPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateResponseHeadersPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateResponseHeadersPolicyRequest
 *   ResponseHeadersPolicyConfig: { // ResponseHeadersPolicyConfig
 *     Comment: "STRING_VALUE",
 *     Name: "STRING_VALUE", // required
 *     CorsConfig: { // ResponseHeadersPolicyCorsConfig
 *       AccessControlAllowOrigins: { // ResponseHeadersPolicyAccessControlAllowOrigins
 *         Quantity: Number("int"), // required
 *         Items: [ // AccessControlAllowOriginsList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       AccessControlAllowHeaders: { // ResponseHeadersPolicyAccessControlAllowHeaders
 *         Quantity: Number("int"), // required
 *         Items: [ // AccessControlAllowHeadersList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       AccessControlAllowMethods: { // ResponseHeadersPolicyAccessControlAllowMethods
 *         Quantity: Number("int"), // required
 *         Items: [ // AccessControlAllowMethodsList // required
 *           "GET" || "POST" || "OPTIONS" || "PUT" || "DELETE" || "PATCH" || "HEAD" || "ALL",
 *         ],
 *       },
 *       AccessControlAllowCredentials: true || false, // required
 *       AccessControlExposeHeaders: { // ResponseHeadersPolicyAccessControlExposeHeaders
 *         Quantity: Number("int"), // required
 *         Items: [ // AccessControlExposeHeadersList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       AccessControlMaxAgeSec: Number("int"),
 *       OriginOverride: true || false, // required
 *     },
 *     SecurityHeadersConfig: { // ResponseHeadersPolicySecurityHeadersConfig
 *       XSSProtection: { // ResponseHeadersPolicyXSSProtection
 *         Override: true || false, // required
 *         Protection: true || false, // required
 *         ModeBlock: true || false,
 *         ReportUri: "STRING_VALUE",
 *       },
 *       FrameOptions: { // ResponseHeadersPolicyFrameOptions
 *         Override: true || false, // required
 *         FrameOption: "DENY" || "SAMEORIGIN", // required
 *       },
 *       ReferrerPolicy: { // ResponseHeadersPolicyReferrerPolicy
 *         Override: true || false, // required
 *         ReferrerPolicy: "no-referrer" || "no-referrer-when-downgrade" || "origin" || "origin-when-cross-origin" || "same-origin" || "strict-origin" || "strict-origin-when-cross-origin" || "unsafe-url", // required
 *       },
 *       ContentSecurityPolicy: { // ResponseHeadersPolicyContentSecurityPolicy
 *         Override: true || false, // required
 *         ContentSecurityPolicy: "STRING_VALUE", // required
 *       },
 *       ContentTypeOptions: { // ResponseHeadersPolicyContentTypeOptions
 *         Override: true || false, // required
 *       },
 *       StrictTransportSecurity: { // ResponseHeadersPolicyStrictTransportSecurity
 *         Override: true || false, // required
 *         IncludeSubdomains: true || false,
 *         Preload: true || false,
 *         AccessControlMaxAgeSec: Number("int"), // required
 *       },
 *     },
 *     ServerTimingHeadersConfig: { // ResponseHeadersPolicyServerTimingHeadersConfig
 *       Enabled: true || false, // required
 *       SamplingRate: Number("double"),
 *     },
 *     CustomHeadersConfig: { // ResponseHeadersPolicyCustomHeadersConfig
 *       Quantity: Number("int"), // required
 *       Items: [ // ResponseHeadersPolicyCustomHeaderList
 *         { // ResponseHeadersPolicyCustomHeader
 *           Header: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *           Override: true || false, // required
 *         },
 *       ],
 *     },
 *     RemoveHeadersConfig: { // ResponseHeadersPolicyRemoveHeadersConfig
 *       Quantity: Number("int"), // required
 *       Items: [ // ResponseHeadersPolicyRemoveHeaderList
 *         { // ResponseHeadersPolicyRemoveHeader
 *           Header: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new CreateResponseHeadersPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateResponseHeadersPolicyResult
 * //   ResponseHeadersPolicy: { // ResponseHeadersPolicy
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     ResponseHeadersPolicyConfig: { // ResponseHeadersPolicyConfig
 * //       Comment: "STRING_VALUE",
 * //       Name: "STRING_VALUE", // required
 * //       CorsConfig: { // ResponseHeadersPolicyCorsConfig
 * //         AccessControlAllowOrigins: { // ResponseHeadersPolicyAccessControlAllowOrigins
 * //           Quantity: Number("int"), // required
 * //           Items: [ // AccessControlAllowOriginsList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         AccessControlAllowHeaders: { // ResponseHeadersPolicyAccessControlAllowHeaders
 * //           Quantity: Number("int"), // required
 * //           Items: [ // AccessControlAllowHeadersList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         AccessControlAllowMethods: { // ResponseHeadersPolicyAccessControlAllowMethods
 * //           Quantity: Number("int"), // required
 * //           Items: [ // AccessControlAllowMethodsList // required
 * //             "GET" || "POST" || "OPTIONS" || "PUT" || "DELETE" || "PATCH" || "HEAD" || "ALL",
 * //           ],
 * //         },
 * //         AccessControlAllowCredentials: true || false, // required
 * //         AccessControlExposeHeaders: { // ResponseHeadersPolicyAccessControlExposeHeaders
 * //           Quantity: Number("int"), // required
 * //           Items: [ // AccessControlExposeHeadersList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         AccessControlMaxAgeSec: Number("int"),
 * //         OriginOverride: true || false, // required
 * //       },
 * //       SecurityHeadersConfig: { // ResponseHeadersPolicySecurityHeadersConfig
 * //         XSSProtection: { // ResponseHeadersPolicyXSSProtection
 * //           Override: true || false, // required
 * //           Protection: true || false, // required
 * //           ModeBlock: true || false,
 * //           ReportUri: "STRING_VALUE",
 * //         },
 * //         FrameOptions: { // ResponseHeadersPolicyFrameOptions
 * //           Override: true || false, // required
 * //           FrameOption: "DENY" || "SAMEORIGIN", // required
 * //         },
 * //         ReferrerPolicy: { // ResponseHeadersPolicyReferrerPolicy
 * //           Override: true || false, // required
 * //           ReferrerPolicy: "no-referrer" || "no-referrer-when-downgrade" || "origin" || "origin-when-cross-origin" || "same-origin" || "strict-origin" || "strict-origin-when-cross-origin" || "unsafe-url", // required
 * //         },
 * //         ContentSecurityPolicy: { // ResponseHeadersPolicyContentSecurityPolicy
 * //           Override: true || false, // required
 * //           ContentSecurityPolicy: "STRING_VALUE", // required
 * //         },
 * //         ContentTypeOptions: { // ResponseHeadersPolicyContentTypeOptions
 * //           Override: true || false, // required
 * //         },
 * //         StrictTransportSecurity: { // ResponseHeadersPolicyStrictTransportSecurity
 * //           Override: true || false, // required
 * //           IncludeSubdomains: true || false,
 * //           Preload: true || false,
 * //           AccessControlMaxAgeSec: Number("int"), // required
 * //         },
 * //       },
 * //       ServerTimingHeadersConfig: { // ResponseHeadersPolicyServerTimingHeadersConfig
 * //         Enabled: true || false, // required
 * //         SamplingRate: Number("double"),
 * //       },
 * //       CustomHeadersConfig: { // ResponseHeadersPolicyCustomHeadersConfig
 * //         Quantity: Number("int"), // required
 * //         Items: [ // ResponseHeadersPolicyCustomHeaderList
 * //           { // ResponseHeadersPolicyCustomHeader
 * //             Header: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //             Override: true || false, // required
 * //           },
 * //         ],
 * //       },
 * //       RemoveHeadersConfig: { // ResponseHeadersPolicyRemoveHeadersConfig
 * //         Quantity: Number("int"), // required
 * //         Items: [ // ResponseHeadersPolicyRemoveHeaderList
 * //           { // ResponseHeadersPolicyRemoveHeader
 * //             Header: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResponseHeadersPolicyCommandInput - {@link CreateResponseHeadersPolicyCommandInput}
 * @returns {@link CreateResponseHeadersPolicyCommandOutput}
 * @see {@link CreateResponseHeadersPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateResponseHeadersPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *
 * The value of `Quantity` and the size of `Items` don't match.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link ResponseHeadersPolicyAlreadyExists} (client fault)
 *
 * A response headers policy with this name already exists. You must provide a unique name. To modify an existing response headers policy, use `UpdateResponseHeadersPolicy`.
 *
 * @throws {@link TooLongCSPInResponseHeadersPolicy} (client fault)
 *
 * The length of the `Content-Security-Policy` header value in the response headers policy exceeds the maximum.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyCustomHeadersInResponseHeadersPolicy} (client fault)
 *
 * The number of custom headers in the response headers policy exceeds the maximum.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyRemoveHeadersInResponseHeadersPolicy} (client fault)
 *
 * The number of headers in `RemoveHeadersConfig` in the response headers policy exceeds the maximum.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link TooManyResponseHeadersPolicies} (client fault)
 *
 * You have reached the maximum number of response headers policies for this Amazon Web Services account.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class CreateResponseHeadersPolicyCommand extends command<CreateResponseHeadersPolicyCommandInput, CreateResponseHeadersPolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateResponseHeadersPolicy",
  CreateResponseHeadersPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResponseHeadersPolicyRequest;
      output: CreateResponseHeadersPolicyResult;
    };
    sdk: {
      input: CreateResponseHeadersPolicyCommandInput;
      output: CreateResponseHeadersPolicyCommandOutput;
    };
  };
}
