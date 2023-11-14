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
import { GetOriginRequestPolicyConfigRequest, GetOriginRequestPolicyConfigResult } from "../models/models_1";
import {
  de_GetOriginRequestPolicyConfigCommand,
  se_GetOriginRequestPolicyConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOriginRequestPolicyConfigCommand}.
 */
export interface GetOriginRequestPolicyConfigCommandInput extends GetOriginRequestPolicyConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetOriginRequestPolicyConfigCommand}.
 */
export interface GetOriginRequestPolicyConfigCommandOutput
  extends GetOriginRequestPolicyConfigResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets an origin request policy configuration.</p>
 *          <p>To get an origin request policy configuration, you must provide the policy's
 * 			identifier. If the origin request policy is attached to a distribution's cache behavior,
 * 			you can get the policy's identifier using <code>ListDistributions</code> or
 * 				<code>GetDistribution</code>. If the origin request policy is not attached to a
 * 			cache behavior, you can get the identifier using
 * 			<code>ListOriginRequestPolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetOriginRequestPolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetOriginRequestPolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetOriginRequestPolicyConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetOriginRequestPolicyConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetOriginRequestPolicyConfigResult
 * //   OriginRequestPolicyConfig: { // OriginRequestPolicyConfig
 * //     Comment: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     HeadersConfig: { // OriginRequestPolicyHeadersConfig
 * //       HeaderBehavior: "none" || "whitelist" || "allViewer" || "allViewerAndWhitelistCloudFront" || "allExcept", // required
 * //       Headers: { // Headers
 * //         Quantity: Number("int"), // required
 * //         Items: [ // HeaderList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     CookiesConfig: { // OriginRequestPolicyCookiesConfig
 * //       CookieBehavior: "none" || "whitelist" || "all" || "allExcept", // required
 * //       Cookies: { // CookieNames
 * //         Quantity: Number("int"), // required
 * //         Items: [ // CookieNameList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     QueryStringsConfig: { // OriginRequestPolicyQueryStringsConfig
 * //       QueryStringBehavior: "none" || "whitelist" || "all" || "allExcept", // required
 * //       QueryStrings: { // QueryStringNames
 * //         Quantity: Number("int"), // required
 * //         Items: [ // QueryStringNamesList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOriginRequestPolicyConfigCommandInput - {@link GetOriginRequestPolicyConfigCommandInput}
 * @returns {@link GetOriginRequestPolicyConfigCommandOutput}
 * @see {@link GetOriginRequestPolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetOriginRequestPolicyConfigCommandOutput} for command's `response` shape.
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
export class GetOriginRequestPolicyConfigCommand extends $Command<
  GetOriginRequestPolicyConfigCommandInput,
  GetOriginRequestPolicyConfigCommandOutput,
  CloudFrontClientResolvedConfig
> {
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
  constructor(readonly input: GetOriginRequestPolicyConfigCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOriginRequestPolicyConfigCommandInput, GetOriginRequestPolicyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOriginRequestPolicyConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetOriginRequestPolicyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "GetOriginRequestPolicyConfig",
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
  private serialize(input: GetOriginRequestPolicyConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetOriginRequestPolicyConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOriginRequestPolicyConfigCommandOutput> {
    return de_GetOriginRequestPolicyConfigCommand(output, context);
  }
}
