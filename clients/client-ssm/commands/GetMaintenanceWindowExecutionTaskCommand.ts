import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetMaintenanceWindowExecutionTaskRequest, GetMaintenanceWindowExecutionTaskResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand,
  serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand,
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

export type GetMaintenanceWindowExecutionTaskCommandInput = GetMaintenanceWindowExecutionTaskRequest;
export type GetMaintenanceWindowExecutionTaskCommandOutput = GetMaintenanceWindowExecutionTaskResult & __MetadataBearer;

/**
 * <p>Retrieves the details about a specific task run as part of a maintenance window
 *    execution.</p>
 */
export class GetMaintenanceWindowExecutionTaskCommand extends $Command<
  GetMaintenanceWindowExecutionTaskCommandInput,
  GetMaintenanceWindowExecutionTaskCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMaintenanceWindowExecutionTaskCommandInput) {
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
  ): Handler<GetMaintenanceWindowExecutionTaskCommandInput, GetMaintenanceWindowExecutionTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetMaintenanceWindowExecutionTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMaintenanceWindowExecutionTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMaintenanceWindowExecutionTaskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetMaintenanceWindowExecutionTaskCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMaintenanceWindowExecutionTaskCommandOutput> {
    return deserializeAws_json1_1GetMaintenanceWindowExecutionTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
