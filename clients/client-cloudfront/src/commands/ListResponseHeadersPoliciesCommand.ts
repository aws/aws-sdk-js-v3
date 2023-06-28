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
import { ListResponseHeadersPoliciesRequest, ListResponseHeadersPoliciesResult } from "../models/models_1";
import { de_ListResponseHeadersPoliciesCommand, se_ListResponseHeadersPoliciesCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListResponseHeadersPoliciesCommand}.
 */
export interface ListResponseHeadersPoliciesCommandInput extends ListResponseHeadersPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListResponseHeadersPoliciesCommand}.
 */
export interface ListResponseHeadersPoliciesCommandOutput extends ListResponseHeadersPoliciesResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of response headers policies.</p>
 *          <p>You can optionally apply a filter to get only the managed policies created by Amazon Web Services,
 * 			or only the custom policies created in your Amazon Web Services account.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListResponseHeadersPoliciesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListResponseHeadersPoliciesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListResponseHeadersPoliciesRequest
 *   Type: "managed" || "custom",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListResponseHeadersPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListResponseHeadersPoliciesResult
 * //   ResponseHeadersPolicyList: { // ResponseHeadersPolicyList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // ResponseHeadersPolicySummaryList
 * //       { // ResponseHeadersPolicySummary
 * //         Type: "managed" || "custom", // required
 * //         ResponseHeadersPolicy: { // ResponseHeadersPolicy
 * //           Id: "STRING_VALUE", // required
 * //           LastModifiedTime: new Date("TIMESTAMP"), // required
 * //           ResponseHeadersPolicyConfig: { // ResponseHeadersPolicyConfig
 * //             Comment: "STRING_VALUE",
 * //             Name: "STRING_VALUE", // required
 * //             CorsConfig: { // ResponseHeadersPolicyCorsConfig
 * //               AccessControlAllowOrigins: { // ResponseHeadersPolicyAccessControlAllowOrigins
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // AccessControlAllowOriginsList // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               AccessControlAllowHeaders: { // ResponseHeadersPolicyAccessControlAllowHeaders
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // AccessControlAllowHeadersList // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               AccessControlAllowMethods: { // ResponseHeadersPolicyAccessControlAllowMethods
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // AccessControlAllowMethodsList // required
 * //                   "GET" || "POST" || "OPTIONS" || "PUT" || "DELETE" || "PATCH" || "HEAD" || "ALL",
 * //                 ],
 * //               },
 * //               AccessControlAllowCredentials: true || false, // required
 * //               AccessControlExposeHeaders: { // ResponseHeadersPolicyAccessControlExposeHeaders
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // AccessControlExposeHeadersList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               AccessControlMaxAgeSec: Number("int"),
 * //               OriginOverride: true || false, // required
 * //             },
 * //             SecurityHeadersConfig: { // ResponseHeadersPolicySecurityHeadersConfig
 * //               XSSProtection: { // ResponseHeadersPolicyXSSProtection
 * //                 Override: true || false, // required
 * //                 Protection: true || false, // required
 * //                 ModeBlock: true || false,
 * //                 ReportUri: "STRING_VALUE",
 * //               },
 * //               FrameOptions: { // ResponseHeadersPolicyFrameOptions
 * //                 Override: true || false, // required
 * //                 FrameOption: "DENY" || "SAMEORIGIN", // required
 * //               },
 * //               ReferrerPolicy: { // ResponseHeadersPolicyReferrerPolicy
 * //                 Override: true || false, // required
 * //                 ReferrerPolicy: "no-referrer" || "no-referrer-when-downgrade" || "origin" || "origin-when-cross-origin" || "same-origin" || "strict-origin" || "strict-origin-when-cross-origin" || "unsafe-url", // required
 * //               },
 * //               ContentSecurityPolicy: { // ResponseHeadersPolicyContentSecurityPolicy
 * //                 Override: true || false, // required
 * //                 ContentSecurityPolicy: "STRING_VALUE", // required
 * //               },
 * //               ContentTypeOptions: { // ResponseHeadersPolicyContentTypeOptions
 * //                 Override: true || false, // required
 * //               },
 * //               StrictTransportSecurity: { // ResponseHeadersPolicyStrictTransportSecurity
 * //                 Override: true || false, // required
 * //                 IncludeSubdomains: true || false,
 * //                 Preload: true || false,
 * //                 AccessControlMaxAgeSec: Number("int"), // required
 * //               },
 * //             },
 * //             ServerTimingHeadersConfig: { // ResponseHeadersPolicyServerTimingHeadersConfig
 * //               Enabled: true || false, // required
 * //               SamplingRate: Number("double"),
 * //             },
 * //             CustomHeadersConfig: { // ResponseHeadersPolicyCustomHeadersConfig
 * //               Quantity: Number("int"), // required
 * //               Items: [ // ResponseHeadersPolicyCustomHeaderList
 * //                 { // ResponseHeadersPolicyCustomHeader
 * //                   Header: "STRING_VALUE", // required
 * //                   Value: "STRING_VALUE", // required
 * //                   Override: true || false, // required
 * //                 },
 * //               ],
 * //             },
 * //             RemoveHeadersConfig: { // ResponseHeadersPolicyRemoveHeadersConfig
 * //               Quantity: Number("int"), // required
 * //               Items: [ // ResponseHeadersPolicyRemoveHeaderList
 * //                 { // ResponseHeadersPolicyRemoveHeader
 * //                   Header: "STRING_VALUE", // required
 * //                 },
 * //               ],
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
 * @param ListResponseHeadersPoliciesCommandInput - {@link ListResponseHeadersPoliciesCommandInput}
 * @returns {@link ListResponseHeadersPoliciesCommandOutput}
 * @see {@link ListResponseHeadersPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListResponseHeadersPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchResponseHeadersPolicy} (client fault)
 *  <p>The response headers policy does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class ListResponseHeadersPoliciesCommand extends $Command<
  ListResponseHeadersPoliciesCommandInput,
  ListResponseHeadersPoliciesCommandOutput,
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
  constructor(readonly input: ListResponseHeadersPoliciesCommandInput) {
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
  ): Handler<ListResponseHeadersPoliciesCommandInput, ListResponseHeadersPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResponseHeadersPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListResponseHeadersPoliciesCommand";
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
  private serialize(input: ListResponseHeadersPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListResponseHeadersPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResponseHeadersPoliciesCommandOutput> {
    return de_ListResponseHeadersPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
