import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteConfigurationAggregatorRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteConfigurationAggregatorCommand,
  serializeAws_json1_1DeleteConfigurationAggregatorCommand,
} from "../protocols/Aws_json1_1";
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

export type DeleteConfigurationAggregatorCommandInput = DeleteConfigurationAggregatorRequest;
export type DeleteConfigurationAggregatorCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the specified configuration aggregator and the
 * 			aggregated data associated with the aggregator.</p>
 */
export class DeleteConfigurationAggregatorCommand extends $Command<
  DeleteConfigurationAggregatorCommandInput,
  DeleteConfigurationAggregatorCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteConfigurationAggregatorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteConfigurationAggregatorCommandInput, DeleteConfigurationAggregatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DeleteConfigurationAggregatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteConfigurationAggregatorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteConfigurationAggregatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteConfigurationAggregatorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteConfigurationAggregatorCommandOutput> {
    return deserializeAws_json1_1DeleteConfigurationAggregatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
