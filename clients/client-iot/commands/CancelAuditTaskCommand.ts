import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CancelAuditTaskRequest, CancelAuditTaskResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CancelAuditTaskCommand,
  serializeAws_restJson1CancelAuditTaskCommand,
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

export type CancelAuditTaskCommandInput = CancelAuditTaskRequest;
export type CancelAuditTaskCommandOutput = CancelAuditTaskResponse & __MetadataBearer;

/**
 * <p>Cancels an audit that is in progress. The audit can be either scheduled or on-demand.
 *           If the audit is not in progress, an "InvalidRequestException" occurs.</p>
 */
export class CancelAuditTaskCommand extends $Command<
  CancelAuditTaskCommandInput,
  CancelAuditTaskCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelAuditTaskCommandInput) {
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
  ): Handler<CancelAuditTaskCommandInput, CancelAuditTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CancelAuditTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelAuditTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelAuditTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelAuditTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelAuditTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelAuditTaskCommandOutput> {
    return deserializeAws_restJson1CancelAuditTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
