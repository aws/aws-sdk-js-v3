import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { StartOnDemandAuditTaskRequest, StartOnDemandAuditTaskResponse } from "../models/models_1";
import {
  deserializeAws_restJson1StartOnDemandAuditTaskCommand,
  serializeAws_restJson1StartOnDemandAuditTaskCommand,
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

export type StartOnDemandAuditTaskCommandInput = StartOnDemandAuditTaskRequest;
export type StartOnDemandAuditTaskCommandOutput = StartOnDemandAuditTaskResponse & __MetadataBearer;

/**
 * <p>Starts an on-demand Device Defender audit.</p>
 */
export class StartOnDemandAuditTaskCommand extends $Command<
  StartOnDemandAuditTaskCommandInput,
  StartOnDemandAuditTaskCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartOnDemandAuditTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartOnDemandAuditTaskCommandInput, StartOnDemandAuditTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "StartOnDemandAuditTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartOnDemandAuditTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartOnDemandAuditTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartOnDemandAuditTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartOnDemandAuditTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartOnDemandAuditTaskCommandOutput> {
    return deserializeAws_restJson1StartOnDemandAuditTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
