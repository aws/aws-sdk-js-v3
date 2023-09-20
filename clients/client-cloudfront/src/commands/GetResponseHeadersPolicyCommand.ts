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
import { GetResponseHeadersPolicyRequest, GetResponseHeadersPolicyResult } from "../models/models_1";
import { de_GetResponseHeadersPolicyCommand, se_GetResponseHeadersPolicyCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResponseHeadersPolicyCommand}.
 */
export interface GetResponseHeadersPolicyCommandInput extends GetResponseHeadersPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetResponseHeadersPolicyCommand}.
 */
export interface GetResponseHeadersPolicyCommandOutput extends GetResponseHeadersPolicyResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets a response headers policy, including metadata (the policy's identifier and the
 * 			date and time when the policy was last modified).</p>
 *          <p>To get a response headers policy, you must provide the policy's identifier. If the
 * 			response headers policy is attached to a distribution's cache behavior, you can get the
 * 			policy's identifier using <code>ListDistributions</code> or
 * 			<code>GetDistribution</code>. If the response headers policy is not attached to a cache
 * 			behavior, you can get the identifier using
 * 			<code>ListResponseHeadersPolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetResponseHeadersPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetResponseHeadersPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetResponseHeadersPolicyRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetResponseHeadersPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetResponseHeadersPolicyResult
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
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResponseHeadersPolicyCommandInput - {@link GetResponseHeadersPolicyCommandInput}
 * @returns {@link GetResponseHeadersPolicyCommandOutput}
 * @see {@link GetResponseHeadersPolicyCommandInput} for command's `input` shape.
 * @see {@link GetResponseHeadersPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchResponseHeadersPolicy} (client fault)
 *  <p>The response headers policy does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class GetResponseHeadersPolicyCommand extends $Command<
  GetResponseHeadersPolicyCommandInput,
  GetResponseHeadersPolicyCommandOutput,
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
  constructor(readonly input: GetResponseHeadersPolicyCommandInput) {
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
  ): Handler<GetResponseHeadersPolicyCommandInput, GetResponseHeadersPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResponseHeadersPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetResponseHeadersPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "GetResponseHeadersPolicy",
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
  private serialize(input: GetResponseHeadersPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResponseHeadersPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResponseHeadersPolicyCommandOutput> {
    return de_GetResponseHeadersPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
