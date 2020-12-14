import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { DescribeBrokerInstanceOptionsRequest, DescribeBrokerInstanceOptionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeBrokerInstanceOptionsCommand,
  serializeAws_restJson1DescribeBrokerInstanceOptionsCommand,
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

export type DescribeBrokerInstanceOptionsCommandInput = DescribeBrokerInstanceOptionsRequest;
export type DescribeBrokerInstanceOptionsCommandOutput = DescribeBrokerInstanceOptionsResponse & __MetadataBearer;

/**
 * Describe available broker instance options.
 */
export class DescribeBrokerInstanceOptionsCommand extends $Command<
  DescribeBrokerInstanceOptionsCommandInput,
  DescribeBrokerInstanceOptionsCommandOutput,
  MqClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBrokerInstanceOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MqClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBrokerInstanceOptionsCommandInput, DescribeBrokerInstanceOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MqClient";
    const commandName = "DescribeBrokerInstanceOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBrokerInstanceOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBrokerInstanceOptionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBrokerInstanceOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBrokerInstanceOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBrokerInstanceOptionsCommandOutput> {
    return deserializeAws_restJson1DescribeBrokerInstanceOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
