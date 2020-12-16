import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ApplyPendingMaintenanceActionMessage, ApplyPendingMaintenanceActionResult } from "../models/models_0";
import {
  deserializeAws_queryApplyPendingMaintenanceActionCommand,
  serializeAws_queryApplyPendingMaintenanceActionCommand,
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

export type ApplyPendingMaintenanceActionCommandInput = ApplyPendingMaintenanceActionMessage;
export type ApplyPendingMaintenanceActionCommandOutput = ApplyPendingMaintenanceActionResult & __MetadataBearer;

/**
 * <p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>
 */
export class ApplyPendingMaintenanceActionCommand extends $Command<
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ApplyPendingMaintenanceActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ApplyPendingMaintenanceActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ApplyPendingMaintenanceActionMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ApplyPendingMaintenanceActionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ApplyPendingMaintenanceActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryApplyPendingMaintenanceActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ApplyPendingMaintenanceActionCommandOutput> {
    return deserializeAws_queryApplyPendingMaintenanceActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
