import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CancelAuditMitigationActionsTaskRequest, CancelAuditMitigationActionsTaskResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CancelAuditMitigationActionsTaskCommand,
  serializeAws_restJson1CancelAuditMitigationActionsTaskCommand,
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

export type CancelAuditMitigationActionsTaskCommandInput = CancelAuditMitigationActionsTaskRequest;
export type CancelAuditMitigationActionsTaskCommandOutput = CancelAuditMitigationActionsTaskResponse & __MetadataBearer;

/**
 * <p>Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs.</p>
 */
export class CancelAuditMitigationActionsTaskCommand extends $Command<
  CancelAuditMitigationActionsTaskCommandInput,
  CancelAuditMitigationActionsTaskCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelAuditMitigationActionsTaskCommandInput) {
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
  ): Handler<CancelAuditMitigationActionsTaskCommandInput, CancelAuditMitigationActionsTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CancelAuditMitigationActionsTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelAuditMitigationActionsTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelAuditMitigationActionsTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CancelAuditMitigationActionsTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelAuditMitigationActionsTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelAuditMitigationActionsTaskCommandOutput> {
    return deserializeAws_restJson1CancelAuditMitigationActionsTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
