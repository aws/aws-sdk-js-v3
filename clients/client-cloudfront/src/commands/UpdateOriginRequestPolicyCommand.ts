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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateOriginRequestPolicyRequest, UpdateOriginRequestPolicyResult } from "../models/models_1";
import { de_UpdateOriginRequestPolicyCommand, se_UpdateOriginRequestPolicyCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Updates an origin request policy configuration.</p>
 *          <p>When you update an origin request policy configuration, all the fields are updated
 * 			with the values provided in the request. You cannot update some fields independent of
 * 			others. To update an origin request policy configuration:</p>
 *          <ol>
 *             <li>
 *                <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current
 * 					configuration.</p>
 *             </li>
 *             <li>
 *                <p>Locally modify the fields in the origin request policy configuration that you
 * 					want to update.</p>
 *             </li>
 *             <li>
 *                <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin
 * 					request policy configuration, including the fields that you modified and those
 * 					that you didn't.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
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
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
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
 *  <p>An origin request policy with this name already exists. You must provide a unique
 * 			name. To modify an existing origin request policy, use
 * 				<code>UpdateOriginRequestPolicy</code>.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link TooManyCookiesInOriginRequestPolicy} (client fault)
 *  <p>The number of cookies in the origin request policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyHeadersInOriginRequestPolicy} (client fault)
 *  <p>The number of headers in the origin request policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyQueryStringsInOriginRequestPolicy} (client fault)
 *  <p>The number of query strings in the origin request policy exceeds the maximum. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class UpdateOriginRequestPolicyCommand extends $Command<
  UpdateOriginRequestPolicyCommandInput,
  UpdateOriginRequestPolicyCommandOutput,
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
  constructor(readonly input: UpdateOriginRequestPolicyCommandInput) {
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
  ): Handler<UpdateOriginRequestPolicyCommandInput, UpdateOriginRequestPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateOriginRequestPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateOriginRequestPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "UpdateOriginRequestPolicy",
      },
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
  private serialize(input: UpdateOriginRequestPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateOriginRequestPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateOriginRequestPolicyCommandOutput> {
    return de_UpdateOriginRequestPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
