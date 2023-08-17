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
import { ListCachePoliciesRequest, ListCachePoliciesResult } from "../models/models_1";
import { de_ListCachePoliciesCommand, se_ListCachePoliciesCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCachePoliciesCommand}.
 */
export interface ListCachePoliciesCommandInput extends ListCachePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListCachePoliciesCommand}.
 */
export interface ListCachePoliciesCommandOutput extends ListCachePoliciesResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of cache policies.</p>
 *          <p>You can optionally apply a filter to return only the managed policies created by
 * 			Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListCachePoliciesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListCachePoliciesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListCachePoliciesRequest
 *   Type: "managed" || "custom",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListCachePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListCachePoliciesResult
 * //   CachePolicyList: { // CachePolicyList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // CachePolicySummaryList
 * //       { // CachePolicySummary
 * //         Type: "managed" || "custom", // required
 * //         CachePolicy: { // CachePolicy
 * //           Id: "STRING_VALUE", // required
 * //           LastModifiedTime: new Date("TIMESTAMP"), // required
 * //           CachePolicyConfig: { // CachePolicyConfig
 * //             Comment: "STRING_VALUE",
 * //             Name: "STRING_VALUE", // required
 * //             DefaultTTL: Number("long"),
 * //             MaxTTL: Number("long"),
 * //             MinTTL: Number("long"), // required
 * //             ParametersInCacheKeyAndForwardedToOrigin: { // ParametersInCacheKeyAndForwardedToOrigin
 * //               EnableAcceptEncodingGzip: true || false, // required
 * //               EnableAcceptEncodingBrotli: true || false,
 * //               HeadersConfig: { // CachePolicyHeadersConfig
 * //                 HeaderBehavior: "none" || "whitelist", // required
 * //                 Headers: { // Headers
 * //                   Quantity: Number("int"), // required
 * //                   Items: [ // HeaderList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               CookiesConfig: { // CachePolicyCookiesConfig
 * //                 CookieBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 * //                 Cookies: { // CookieNames
 * //                   Quantity: Number("int"), // required
 * //                   Items: [ // CookieNameList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //               QueryStringsConfig: { // CachePolicyQueryStringsConfig
 * //                 QueryStringBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 * //                 QueryStrings: { // QueryStringNames
 * //                   Quantity: Number("int"), // required
 * //                   Items: [ // QueryStringNamesList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
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
 * @param ListCachePoliciesCommandInput - {@link ListCachePoliciesCommandInput}
 * @returns {@link ListCachePoliciesCommandOutput}
 * @see {@link ListCachePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListCachePoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchCachePolicy} (client fault)
 *  <p>The cache policy does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class ListCachePoliciesCommand extends $Command<
  ListCachePoliciesCommandInput,
  ListCachePoliciesCommandOutput,
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
  constructor(readonly input: ListCachePoliciesCommandInput) {
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
  ): Handler<ListCachePoliciesCommandInput, ListCachePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCachePoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListCachePoliciesCommand";
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
  private serialize(input: ListCachePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCachePoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCachePoliciesCommandOutput> {
    return de_ListCachePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
