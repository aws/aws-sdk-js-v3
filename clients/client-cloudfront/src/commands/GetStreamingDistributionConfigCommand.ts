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
import { GetStreamingDistributionConfigRequest, GetStreamingDistributionConfigResult } from "../models/models_1";
import {
  de_GetStreamingDistributionConfigCommand,
  se_GetStreamingDistributionConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetStreamingDistributionConfigCommand}.
 */
export interface GetStreamingDistributionConfigCommandInput extends GetStreamingDistributionConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetStreamingDistributionConfigCommand}.
 */
export interface GetStreamingDistributionConfigCommandOutput
  extends GetStreamingDistributionConfigResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Get the configuration information about a streaming distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetStreamingDistributionConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetStreamingDistributionConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetStreamingDistributionConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetStreamingDistributionConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamingDistributionConfigResult
 * //   StreamingDistributionConfig: { // StreamingDistributionConfig
 * //     CallerReference: "STRING_VALUE", // required
 * //     S3Origin: { // S3Origin
 * //       DomainName: "STRING_VALUE", // required
 * //       OriginAccessIdentity: "STRING_VALUE", // required
 * //     },
 * //     Aliases: { // Aliases
 * //       Quantity: Number("int"), // required
 * //       Items: [ // AliasList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Comment: "STRING_VALUE", // required
 * //     Logging: { // StreamingLoggingConfig
 * //       Enabled: true || false, // required
 * //       Bucket: "STRING_VALUE", // required
 * //       Prefix: "STRING_VALUE", // required
 * //     },
 * //     TrustedSigners: { // TrustedSigners
 * //       Enabled: true || false, // required
 * //       Quantity: Number("int"), // required
 * //       Items: [ // AwsAccountNumberList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     PriceClass: "PriceClass_100" || "PriceClass_200" || "PriceClass_All",
 * //     Enabled: true || false, // required
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetStreamingDistributionConfigCommandInput - {@link GetStreamingDistributionConfigCommandInput}
 * @returns {@link GetStreamingDistributionConfigCommandOutput}
 * @see {@link GetStreamingDistributionConfigCommandInput} for command's `input` shape.
 * @see {@link GetStreamingDistributionConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchStreamingDistribution} (client fault)
 *  <p>The specified streaming distribution does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class GetStreamingDistributionConfigCommand extends $Command<
  GetStreamingDistributionConfigCommandInput,
  GetStreamingDistributionConfigCommandOutput,
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
  constructor(readonly input: GetStreamingDistributionConfigCommandInput) {
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
  ): Handler<GetStreamingDistributionConfigCommandInput, GetStreamingDistributionConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetStreamingDistributionConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetStreamingDistributionConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "GetStreamingDistributionConfig",
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
  private serialize(
    input: GetStreamingDistributionConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetStreamingDistributionConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetStreamingDistributionConfigCommandOutput> {
    return de_GetStreamingDistributionConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
