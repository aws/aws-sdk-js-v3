import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetMaintenanceWindowExecutionRequest, GetMaintenanceWindowExecutionResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetMaintenanceWindowExecutionCommand,
  serializeAws_json1_1GetMaintenanceWindowExecutionCommand,
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

export type GetMaintenanceWindowExecutionCommandInput = GetMaintenanceWindowExecutionRequest;
export type GetMaintenanceWindowExecutionCommandOutput = GetMaintenanceWindowExecutionResult & __MetadataBearer;

/**
 * <p>Retrieves details about a specific a maintenance window execution.</p>
 */
export class GetMaintenanceWindowExecutionCommand extends $Command<
  GetMaintenanceWindowExecutionCommandInput,
  GetMaintenanceWindowExecutionCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMaintenanceWindowExecutionCommandInput) {
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
  ): Handler<GetMaintenanceWindowExecutionCommandInput, GetMaintenanceWindowExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetMaintenanceWindowExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMaintenanceWindowExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMaintenanceWindowExecutionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMaintenanceWindowExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMaintenanceWindowExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMaintenanceWindowExecutionCommandOutput> {
    return deserializeAws_json1_1GetMaintenanceWindowExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
