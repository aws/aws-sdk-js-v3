import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import {
  DeregisterTargetFromMaintenanceWindowRequest,
  DeregisterTargetFromMaintenanceWindowResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand,
  serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand,
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

export type DeregisterTargetFromMaintenanceWindowCommandInput = DeregisterTargetFromMaintenanceWindowRequest;
export type DeregisterTargetFromMaintenanceWindowCommandOutput = DeregisterTargetFromMaintenanceWindowResult &
  __MetadataBearer;

/**
 * <p>Removes a target from a maintenance window.</p>
 */
export class DeregisterTargetFromMaintenanceWindowCommand extends $Command<
  DeregisterTargetFromMaintenanceWindowCommandInput,
  DeregisterTargetFromMaintenanceWindowCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterTargetFromMaintenanceWindowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterTargetFromMaintenanceWindowCommandInput, DeregisterTargetFromMaintenanceWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeregisterTargetFromMaintenanceWindowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterTargetFromMaintenanceWindowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterTargetFromMaintenanceWindowResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterTargetFromMaintenanceWindowCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterTargetFromMaintenanceWindowCommandOutput> {
    return deserializeAws_json1_1DeregisterTargetFromMaintenanceWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
