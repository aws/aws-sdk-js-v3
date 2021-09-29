import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DescribeFunctionRequest, DescribeFunctionResult } from "../models/models_0";
import {
  deserializeAws_restXmlDescribeFunctionCommand,
  serializeAws_restXmlDescribeFunctionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeFunctionCommandInput extends DescribeFunctionRequest {}
export interface DescribeFunctionCommandOutput extends DescribeFunctionResult, __MetadataBearer {}

/**
 * <p>Gets configuration information and metadata about a CloudFront function, but not the function’s
 * 			code. To get a function’s code, use <code>GetFunction</code>.</p>
 * 		       <p>To get configuration information and metadata about a function, you must provide the
 * 			function’s name and stage. To get these values, you can use
 * 			<code>ListFunctions</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DescribeFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DescribeFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DescribeFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFunctionCommandInput} for command's `input` shape.
 * @see {@link DescribeFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeFunctionCommand extends $Command<
  DescribeFunctionCommandInput,
  DescribeFunctionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFunctionCommandInput) {
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
  ): Handler<DescribeFunctionCommandInput, DescribeFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DescribeFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFunctionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDescribeFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFunctionCommandOutput> {
    return deserializeAws_restXmlDescribeFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
