import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { FunctionConfiguration, PublishVersionRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PublishVersionCommand,
  serializeAws_restJson1PublishVersionCommand,
} from "../protocols/Aws_restJson1";
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

export type PublishVersionCommandInput = PublishVersionRequest;
export type PublishVersionCommandOutput = FunctionConfiguration & __MetadataBearer;

/**
 * <p>Creates a <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">version</a> from the
 *       current code and configuration of a function. Use versions to create a snapshot of your function code and
 *       configuration that doesn't change.</p>
 *
 *          <p>AWS Lambda doesn't publish a version if the function's configuration and code haven't changed since the last
 *       version. Use <a>UpdateFunctionCode</a> or <a>UpdateFunctionConfiguration</a> to update the
 *       function before publishing a version.</p>
 *
 *          <p>Clients can invoke versions directly or with an alias. To create an alias, use <a>CreateAlias</a>.</p>
 */
export class PublishVersionCommand extends $Command<
  PublishVersionCommandInput,
  PublishVersionCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PublishVersionCommandInput) {
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
  ): Handler<PublishVersionCommandInput, PublishVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "PublishVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PublishVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: FunctionConfiguration.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PublishVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PublishVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PublishVersionCommandOutput> {
    return deserializeAws_restJson1PublishVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
