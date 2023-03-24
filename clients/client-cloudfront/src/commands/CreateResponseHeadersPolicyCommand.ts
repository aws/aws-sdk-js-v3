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
import { CreateResponseHeadersPolicyRequest } from "../models/models_0";
import { CreateResponseHeadersPolicyResult } from "../models/models_1";
import {
  deserializeAws_restXmlCreateResponseHeadersPolicyCommand,
  serializeAws_restXmlCreateResponseHeadersPolicyCommand,
} from "../protocols/Aws_restXml";

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
 * @public
 * <p>Creates a response headers policy.</p>
 *          <p>A response headers policy contains information about a set of HTTP headers. To create a
 * 			response headers policy, you provide some metadata about the policy and a set of
 * 			configurations that specify the headers.</p>
 *          <p>After you create a response headers policy, you can use its ID to attach it to one or more
 * 			cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the
 * 			response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to
 * 			requests that match the cache behavior. CloudFront adds or removes response headers according
 * 			to the configuration of the response headers policy.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateResponseHeadersPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateResponseHeadersPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
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
 * };
 * const command = new CreateResponseHeadersPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateResponseHeadersPolicyCommandInput - {@link CreateResponseHeadersPolicyCommandInput}
 * @returns {@link CreateResponseHeadersPolicyCommandOutput}
 * @see {@link CreateResponseHeadersPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateResponseHeadersPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InconsistentQuantities} (client fault)
 *  <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't
 * 			match.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
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
 * @throws {@link TooManyResponseHeadersPolicies} (client fault)
 *  <p>You have reached the maximum number of response headers policies for this
 * 			Amazon Web Services account.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 *
 *
 */
export class CreateResponseHeadersPolicyCommand extends $Command<
  CreateResponseHeadersPolicyCommandInput,
  CreateResponseHeadersPolicyCommandOutput,
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
  constructor(readonly input: CreateResponseHeadersPolicyCommandInput) {
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
  ): Handler<CreateResponseHeadersPolicyCommandInput, CreateResponseHeadersPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResponseHeadersPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "CreateResponseHeadersPolicyCommand";
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
  private serialize(input: CreateResponseHeadersPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateResponseHeadersPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateResponseHeadersPolicyCommandOutput> {
    return deserializeAws_restXmlCreateResponseHeadersPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
