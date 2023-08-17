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
import { GetOriginRequestPolicyRequest, GetOriginRequestPolicyResult } from "../models/models_1";
import { de_GetOriginRequestPolicyCommand, se_GetOriginRequestPolicyCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOriginRequestPolicyCommand}.
 */
export interface GetOriginRequestPolicyCommandInput extends GetOriginRequestPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetOriginRequestPolicyCommand}.
 */
export interface GetOriginRequestPolicyCommandOutput extends GetOriginRequestPolicyResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets an origin request policy, including the following metadata:</p>
 *          <ul>
 *             <li>
 *                <p>The policy's identifier.</p>
 *             </li>
 *             <li>
 *                <p>The date and time when the policy was last modified.</p>
 *             </li>
 *          </ul>
 *          <p>To get an origin request policy, you must provide the policy's identifier. If the
 * 			origin request policy is attached to a distribution's cache behavior, you can get the
 * 			policy's identifier using <code>ListDistributions</code> or
 * 			<code>GetDistribution</code>. If the origin request policy is not attached to a cache
 * 			behavior, you can get the identifier using
 * 			<code>ListOriginRequestPolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginRequestPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginRequestPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetOriginRequestPolicyRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetOriginRequestPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetOriginRequestPolicyResult
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
 * @param GetOriginRequestPolicyCommandInput - {@link GetOriginRequestPolicyCommandInput}
 * @returns {@link GetOriginRequestPolicyCommandOutput}
 * @see {@link GetOriginRequestPolicyCommandInput} for command's `input` shape.
 * @see {@link GetOriginRequestPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchOriginRequestPolicy} (client fault)
 *  <p>The origin request policy does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class GetOriginRequestPolicyCommand extends $Command<
  GetOriginRequestPolicyCommandInput,
  GetOriginRequestPolicyCommandOutput,
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
  constructor(readonly input: GetOriginRequestPolicyCommandInput) {
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
  ): Handler<GetOriginRequestPolicyCommandInput, GetOriginRequestPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOriginRequestPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetOriginRequestPolicyCommand";
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
  private serialize(input: GetOriginRequestPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetOriginRequestPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOriginRequestPolicyCommandOutput> {
    return de_GetOriginRequestPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
