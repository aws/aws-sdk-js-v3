// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateCachePolicyRequest, CreateCachePolicyResult } from "../models/models_0";
import { de_CreateCachePolicyCommand, se_CreateCachePolicyCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCachePolicyCommand}.
 */
export interface CreateCachePolicyCommandInput extends CreateCachePolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateCachePolicyCommand}.
 */
export interface CreateCachePolicyCommandOutput extends CreateCachePolicyResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a cache policy.</p>
 *          <p>After you create a cache policy, you can attach it to one or more cache behaviors.
 * 			When it's attached to a cache behavior, the cache policy determines the
 * 			following:</p>
 *          <ul>
 *             <li>
 *                <p>The values that CloudFront includes in the <i>cache key</i>. These
 * 					values can include HTTP headers, cookies, and URL query strings. CloudFront uses the
 * 					cache key to find an object in its cache that it can return to the
 * 					viewer.</p>
 *             </li>
 *             <li>
 *                <p>The default, minimum, and maximum time to live (TTL) values that you want
 * 					objects to stay in the CloudFront cache.</p>
 *             </li>
 *          </ul>
 *          <p>The headers, cookies, and query strings that are included in the cache key are also included
 * 			in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an
 * 			object in its cache that matches the request's cache key. If you want to send values to
 * 			the origin but <i>not</i> include them in the cache key, use
 * 			<code>OriginRequestPolicy</code>.</p>
 *          <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateCachePolicyRequest
 *   CachePolicyConfig: { // CachePolicyConfig
 *     Comment: "STRING_VALUE",
 *     Name: "STRING_VALUE", // required
 *     DefaultTTL: Number("long"),
 *     MaxTTL: Number("long"),
 *     MinTTL: Number("long"), // required
 *     ParametersInCacheKeyAndForwardedToOrigin: { // ParametersInCacheKeyAndForwardedToOrigin
 *       EnableAcceptEncodingGzip: true || false, // required
 *       EnableAcceptEncodingBrotli: true || false,
 *       HeadersConfig: { // CachePolicyHeadersConfig
 *         HeaderBehavior: "none" || "whitelist", // required
 *         Headers: { // Headers
 *           Quantity: Number("int"), // required
 *           Items: [ // HeaderList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       CookiesConfig: { // CachePolicyCookiesConfig
 *         CookieBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 *         Cookies: { // CookieNames
 *           Quantity: Number("int"), // required
 *           Items: [ // CookieNameList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       QueryStringsConfig: { // CachePolicyQueryStringsConfig
 *         QueryStringBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 *         QueryStrings: { // QueryStringNames
 *           Quantity: Number("int"), // required
 *           Items: [ // QueryStringNamesList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new CreateCachePolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateCachePolicyResult
 * //   CachePolicy: { // CachePolicy
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     CachePolicyConfig: { // CachePolicyConfig
 * //       Comment: "STRING_VALUE",
 * //       Name: "STRING_VALUE", // required
 * //       DefaultTTL: Number("long"),
 * //       MaxTTL: Number("long"),
 * //       MinTTL: Number("long"), // required
 * //       ParametersInCacheKeyAndForwardedToOrigin: { // ParametersInCacheKeyAndForwardedToOrigin
 * //         EnableAcceptEncodingGzip: true || false, // required
 * //         EnableAcceptEncodingBrotli: true || false,
 * //         HeadersConfig: { // CachePolicyHeadersConfig
 * //           HeaderBehavior: "none" || "whitelist", // required
 * //           Headers: { // Headers
 * //             Quantity: Number("int"), // required
 * //             Items: [ // HeaderList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         CookiesConfig: { // CachePolicyCookiesConfig
 * //           CookieBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 * //           Cookies: { // CookieNames
 * //             Quantity: Number("int"), // required
 * //             Items: [ // CookieNameList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         QueryStringsConfig: { // CachePolicyQueryStringsConfig
 * //           QueryStringBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 * //           QueryStrings: { // QueryStringNames
 * //             Quantity: Number("int"), // required
 * //             Items: [ // QueryStringNamesList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
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
 * @param CreateCachePolicyCommandInput - {@link CreateCachePolicyCommandInput}
 * @returns {@link CreateCachePolicyCommandOutput}
 * @see {@link CreateCachePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CachePolicyAlreadyExists} (client fault)
 *  <p>A cache policy with this name already exists. You must provide a unique name. To
 * 			modify an existing cache policy, use <code>UpdateCachePolicy</code>.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link TooManyCachePolicies} (client fault)
 *  <p>You have reached the maximum number of cache policies for this Amazon Web Services account. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyCookiesInCachePolicy} (client fault)
 *  <p>The number of cookies in the cache policy exceeds the maximum. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyHeadersInCachePolicy} (client fault)
 *  <p>The number of headers in the cache policy exceeds the maximum. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyQueryStringsInCachePolicy} (client fault)
 *  <p>The number of query strings in the cache policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class CreateCachePolicyCommand extends $Command<
  CreateCachePolicyCommandInput,
  CreateCachePolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateCachePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCachePolicyCommandInput, CreateCachePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCachePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateCachePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateCachePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCachePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCachePolicyCommandOutput> {
    return de_CreateCachePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
