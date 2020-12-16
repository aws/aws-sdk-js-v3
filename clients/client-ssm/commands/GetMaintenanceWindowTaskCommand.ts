import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetMaintenanceWindowTaskRequest, GetMaintenanceWindowTaskResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetMaintenanceWindowTaskCommand,
  serializeAws_json1_1GetMaintenanceWindowTaskCommand,
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

export type GetMaintenanceWindowTaskCommandInput = GetMaintenanceWindowTaskRequest;
export type GetMaintenanceWindowTaskCommandOutput = GetMaintenanceWindowTaskResult & __MetadataBearer;

/**
 * <p>Lists the tasks in a maintenance window.</p>
 */
export class GetMaintenanceWindowTaskCommand extends $Command<
  GetMaintenanceWindowTaskCommandInput,
  GetMaintenanceWindowTaskCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMaintenanceWindowTaskCommandInput) {
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
  ): Handler<GetMaintenanceWindowTaskCommandInput, GetMaintenanceWindowTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetMaintenanceWindowTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMaintenanceWindowTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMaintenanceWindowTaskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMaintenanceWindowTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMaintenanceWindowTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMaintenanceWindowTaskCommandOutput> {
    return deserializeAws_json1_1GetMaintenanceWindowTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
