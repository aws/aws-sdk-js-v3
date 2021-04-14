import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { ListMetricStreamsInput, ListMetricStreamsOutput } from "../models/models_0";
import {
  deserializeAws_queryListMetricStreamsCommand,
  serializeAws_queryListMetricStreamsCommand,
} from "../protocols/Aws_query";
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

export type ListMetricStreamsCommandInput = ListMetricStreamsInput;
export type ListMetricStreamsCommandOutput = ListMetricStreamsOutput & __MetadataBearer;

/**
 * <p>Returns a list of metric streams in this account.</p>
 */
export class ListMetricStreamsCommand extends $Command<
  ListMetricStreamsCommandInput,
  ListMetricStreamsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMetricStreamsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMetricStreamsCommandInput, ListMetricStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "ListMetricStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMetricStreamsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListMetricStreamsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMetricStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListMetricStreamsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMetricStreamsCommandOutput> {
    return deserializeAws_queryListMetricStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
