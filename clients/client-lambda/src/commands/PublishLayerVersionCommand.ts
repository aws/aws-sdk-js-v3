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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  PublishLayerVersionRequest,
  PublishLayerVersionRequestFilterSensitiveLog,
  PublishLayerVersionResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1PublishLayerVersionCommand,
  serializeAws_restJson1PublishLayerVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link PublishLayerVersionCommand}.
 */
export interface PublishLayerVersionCommandInput extends PublishLayerVersionRequest {}
/**
 * @public
 *
 * The output of {@link PublishLayerVersionCommand}.
 */
export interface PublishLayerVersionCommandOutput extends PublishLayerVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same
 *       layer name, a new version is created.</p>
 *          <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PublishLayerVersionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PublishLayerVersionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = {
 *   LayerName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Content: {
 *     S3Bucket: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *     S3ObjectVersion: "STRING_VALUE",
 *     ZipFile: "BLOB_VALUE",
 *   },
 *   CompatibleRuntimes: [
 *     "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x",
 *   ],
 *   LicenseInfo: "STRING_VALUE",
 *   CompatibleArchitectures: [
 *     "x86_64" || "arm64",
 *   ],
 * };
 * const command = new PublishLayerVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param PublishLayerVersionCommandInput - {@link PublishLayerVersionCommandInput}
 * @returns {@link PublishLayerVersionCommandOutput}
 * @see {@link PublishLayerVersionCommandInput} for command's `input` shape.
 * @see {@link PublishLayerVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link CodeStorageExceededException} (client fault)
 *  <p>Your Amazon Web Services account has exceeded its maximum total code size. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 *
 */
export class PublishLayerVersionCommand extends $Command<
  PublishLayerVersionCommandInput,
  PublishLayerVersionCommandOutput,
  LambdaClientResolvedConfig
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
  constructor(readonly input: PublishLayerVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PublishLayerVersionCommandInput, PublishLayerVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PublishLayerVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "PublishLayerVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishLayerVersionRequestFilterSensitiveLog,
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
  private serialize(input: PublishLayerVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PublishLayerVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishLayerVersionCommandOutput> {
    return deserializeAws_restJson1PublishLayerVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
