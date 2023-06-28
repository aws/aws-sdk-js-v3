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
import { UpdateCachePolicyRequest, UpdateCachePolicyResult } from "../models/models_1";
import { de_UpdateCachePolicyCommand, se_UpdateCachePolicyCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCachePolicyCommand}.
 */
export interface UpdateCachePolicyCommandInput extends UpdateCachePolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCachePolicyCommand}.
 */
export interface UpdateCachePolicyCommandOutput extends UpdateCachePolicyResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates a cache policy configuration.</p>
 *          <p>When you update a cache policy configuration, all the fields are updated with the
 * 			values provided in the request. You cannot update some fields independent of others. To
 * 			update a cache policy configuration:</p>
 *          <ol>
 *             <li>
 *                <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p>
 *             </li>
 *             <li>
 *                <p>Locally modify the fields in the cache policy configuration that you want to
 * 					update.</p>
 *             </li>
 *             <li>
 *                <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy
 * 					configuration, including the fields that you modified and those that you
 * 					didn't.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateCachePolicyRequest
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
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateCachePolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCachePolicyResult
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
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateCachePolicyCommandInput - {@link UpdateCachePolicyCommandInput}
 * @returns {@link UpdateCachePolicyCommandOutput}
 * @see {@link UpdateCachePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CachePolicyAlreadyExists} (client fault)
 *  <p>A cache policy with this name already exists. You must provide a unique name. To
 * 			modify an existing cache policy, use <code>UpdateCachePolicy</code>.</p>
 *
 * @throws {@link IllegalUpdate} (client fault)
 *  <p>The update contains modifications that are not allowed.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchCachePolicy} (client fault)
 *  <p>The cache policy does not exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
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
export class UpdateCachePolicyCommand extends $Command<
  UpdateCachePolicyCommandInput,
  UpdateCachePolicyCommandOutput,
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
  constructor(readonly input: UpdateCachePolicyCommandInput) {
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
  ): Handler<UpdateCachePolicyCommandInput, UpdateCachePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCachePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateCachePolicyCommand";
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
  private serialize(input: UpdateCachePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCachePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCachePolicyCommandOutput> {
    return de_UpdateCachePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
