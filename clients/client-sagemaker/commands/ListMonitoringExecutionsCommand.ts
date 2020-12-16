import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListMonitoringExecutionsRequest, ListMonitoringExecutionsResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ListMonitoringExecutionsCommand,
  serializeAws_json1_1ListMonitoringExecutionsCommand,
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

export type ListMonitoringExecutionsCommandInput = ListMonitoringExecutionsRequest;
export type ListMonitoringExecutionsCommandOutput = ListMonitoringExecutionsResponse & __MetadataBearer;

/**
 * <p>Returns list of all monitoring job executions.</p>
 */
export class ListMonitoringExecutionsCommand extends $Command<
  ListMonitoringExecutionsCommandInput,
  ListMonitoringExecutionsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMonitoringExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMonitoringExecutionsCommandInput, ListMonitoringExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListMonitoringExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMonitoringExecutionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMonitoringExecutionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMonitoringExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMonitoringExecutionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMonitoringExecutionsCommandOutput> {
    return deserializeAws_json1_1ListMonitoringExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
