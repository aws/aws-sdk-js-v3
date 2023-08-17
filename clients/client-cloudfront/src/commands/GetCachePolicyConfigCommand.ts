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
import { GetCachePolicyConfigRequest, GetCachePolicyConfigResult } from "../models/models_1";
import { de_GetCachePolicyConfigCommand, se_GetCachePolicyConfigCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCachePolicyConfigCommand}.
 */
export interface GetCachePolicyConfigCommandInput extends GetCachePolicyConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetCachePolicyConfigCommand}.
 */
export interface GetCachePolicyConfigCommandOutput extends GetCachePolicyConfigResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets a cache policy configuration.</p>
 *          <p>To get a cache policy configuration, you must provide the policy's identifier. If the
 * 			cache policy is attached to a distribution's cache behavior, you can get the policy's
 * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
 * 			cache policy is not attached to a cache behavior, you can get the identifier using
 * 				<code>ListCachePolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCachePolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCachePolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetCachePolicyConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetCachePolicyConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetCachePolicyConfigResult
 * //   CachePolicyConfig: { // CachePolicyConfig
 * //     Comment: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     DefaultTTL: Number("long"),
 * //     MaxTTL: Number("long"),
 * //     MinTTL: Number("long"), // required
 * //     ParametersInCacheKeyAndForwardedToOrigin: { // ParametersInCacheKeyAndForwardedToOrigin
 * //       EnableAcceptEncodingGzip: true || false, // required
 * //       EnableAcceptEncodingBrotli: true || false,
 * //       HeadersConfig: { // CachePolicyHeadersConfig
 * //         HeaderBehavior: "none" || "whitelist", // required
 * //         Headers: { // Headers
 * //           Quantity: Number("int"), // required
 * //           Items: [ // HeaderList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       CookiesConfig: { // CachePolicyCookiesConfig
 * //         CookieBehavior: "none" || "whitelist" || "allExcept" || "all", // required
 * //         Cookies: { // CookieNames
 * //           Quantity: Number("int"), // required
 * //           Items: [ // CookieNameList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       QueryStringsConfig: { // CachePolicyQueryStringsConfig
 * //         QueryStringBehavior: "none" || "whitelist" || "allExcept" || "all", // required
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
 * @param GetCachePolicyConfigCommandInput - {@link GetCachePolicyConfigCommandInput}
 * @returns {@link GetCachePolicyConfigCommandOutput}
 * @see {@link GetCachePolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetCachePolicyConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchCachePolicy} (client fault)
 *  <p>The cache policy does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class GetCachePolicyConfigCommand extends $Command<
  GetCachePolicyConfigCommandInput,
  GetCachePolicyConfigCommandOutput,
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
  constructor(readonly input: GetCachePolicyConfigCommandInput) {
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
  ): Handler<GetCachePolicyConfigCommandInput, GetCachePolicyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCachePolicyConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetCachePolicyConfigCommand";
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
  private serialize(input: GetCachePolicyConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCachePolicyConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCachePolicyConfigCommandOutput> {
    return de_GetCachePolicyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
