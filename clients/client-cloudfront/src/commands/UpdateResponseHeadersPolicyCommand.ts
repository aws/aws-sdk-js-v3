// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateResponseHeadersPolicyRequest, UpdateResponseHeadersPolicyResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateResponseHeadersPolicyCommand,
  serializeAws_restXmlUpdateResponseHeadersPolicyCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 *
 * The input for {@link UpdateResponseHeadersPolicyCommand}.
 */
export interface UpdateResponseHeadersPolicyCommandInput extends UpdateResponseHeadersPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResponseHeadersPolicyCommand}.
 */
export interface UpdateResponseHeadersPolicyCommandOutput extends UpdateResponseHeadersPolicyResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates a response headers policy.</p>
 *          <p>When you update a response headers policy, the entire policy is replaced. You cannot
 * 			update some policy fields independent of others. To update a response headers policy
 * 			configuration:</p>
 *          <ol>
 *             <li>
 *                <p>Use <code>GetResponseHeadersPolicyConfig</code> to get the current policy's
 * 					configuration.</p>
 *             </li>
 *             <li>
 *                <p>Modify the fields in the response headers policy configuration that you want
 * 					to update.</p>
 *             </li>
 *             <li>
 *                <p>Call <code>UpdateResponseHeadersPolicy</code>, providing the entire response
 * 					headers policy configuration, including the fields that you modified and those
 * 					that you didn't.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateResponseHeadersPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateResponseHeadersPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = {
 *   ResponseHeadersPolicyConfig: {
 *     Comment: "STRING_VALUE",
 *     Name: "STRING_VALUE", // required
 *     CorsConfig: {
 *       AccessControlAllowOrigins: {
 *         Quantity: Number("int"), // required
 *         Items: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       AccessControlAllowHeaders: {
 *         Quantity: Number("int"), // required
 *         Items: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       AccessControlAllowMethods: {
 *         Quantity: Number("int"), // required
 *         Items: [ // required
 *           "GET" || "POST" || "OPTIONS" || "PUT" || "DELETE" || "PATCH" || "HEAD" || "ALL",
 *         ],
 *       },
 *       AccessControlAllowCredentials: true || false, // required
 *       AccessControlExposeHeaders: {
 *         Quantity: Number("int"), // required
 *         Items: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       AccessControlMaxAgeSec: Number("int"),
 *       OriginOverride: true || false, // required
 *     },
 *     SecurityHeadersConfig: {
 *       XSSProtection: {
 *         Override: true || false, // required
 *         Protection: true || false, // required
 *         ModeBlock: true || false,
 *         ReportUri: "STRING_VALUE",
 *       },
 *       FrameOptions: {
 *         Override: true || false, // required
 *         FrameOption: "DENY" || "SAMEORIGIN", // required
 *       },
 *       ReferrerPolicy: {
 *         Override: true || false, // required
 *         ReferrerPolicy: "no-referrer" || "no-referrer-when-downgrade" || "origin" || "origin-when-cross-origin" || "same-origin" || "strict-origin" || "strict-origin-when-cross-origin" || "unsafe-url", // required
 *       },
 *       ContentSecurityPolicy: {
 *         Override: true || false, // required
 *         ContentSecurityPolicy: "STRING_VALUE", // required
 *       },
 *       ContentTypeOptions: {
 *         Override: true || false, // required
 *       },
 *       StrictTransportSecurity: {
 *         Override: true || false, // required
 *         IncludeSubdomains: true || false,
 *         Preload: true || false,
 *         AccessControlMaxAgeSec: Number("int"), // required
 *       },
 *     },
 *     ServerTimingHeadersConfig: {
 *       Enabled: true || false, // required
 *       SamplingRate: Number("double"),
 *     },
 *     CustomHeadersConfig: {
 *       Quantity: Number("int"), // required
 *       Items: [
 *         {
 *           Header: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *           Override: true || false, // required
 *         },
 *       ],
 *     },
 *     RemoveHeadersConfig: {
 *       Quantity: Number("int"), // required
 *       Items: [
 *         {
 *           Header: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdateResponseHeadersPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateResponseHeadersPolicyCommandInput - {@link UpdateResponseHeadersPolicyCommandInput}
 * @returns {@link UpdateResponseHeadersPolicyCommandOutput}
 * @see {@link UpdateResponseHeadersPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateResponseHeadersPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link NoSuchResponseHeadersPolicy} (client fault)
 *  <p>The response headers policy does not exist.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link ResponseHeadersPolicyAlreadyExists} (client fault)
 *  <p>A response headers policy with this name already exists. You must provide a unique
 * 			name. To modify an existing response headers policy, use
 * 				<code>UpdateResponseHeadersPolicy</code>.</p>
 *
 * @throws {@link TooLongCSPInResponseHeadersPolicy} (client fault)
 *  <p>The length of the <code>Content-Security-Policy</code> header value in the response
 * 			headers policy exceeds the maximum.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyCustomHeadersInResponseHeadersPolicy} (client fault)
 *  <p>The number of custom headers in the response headers policy exceeds the
 * 			maximum.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link TooManyRemoveHeadersInResponseHeadersPolicy} (client fault)
 *  <p>The number of headers in <code>RemoveHeadersConfig</code> in the response headers
 * 			policy exceeds the maximum.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 *
 */
export class UpdateResponseHeadersPolicyCommand extends $Command<
  UpdateResponseHeadersPolicyCommandInput,
  UpdateResponseHeadersPolicyCommandOutput,
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
  constructor(readonly input: UpdateResponseHeadersPolicyCommandInput) {
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
  ): Handler<UpdateResponseHeadersPolicyCommandInput, UpdateResponseHeadersPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateResponseHeadersPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateResponseHeadersPolicyCommand";
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
  private serialize(input: UpdateResponseHeadersPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateResponseHeadersPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateResponseHeadersPolicyCommandOutput> {
    return deserializeAws_restXmlUpdateResponseHeadersPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
