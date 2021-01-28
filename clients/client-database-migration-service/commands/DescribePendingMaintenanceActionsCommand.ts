import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  DescribePendingMaintenanceActionsMessage,
  DescribePendingMaintenanceActionsResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePendingMaintenanceActionsCommand,
  serializeAws_json1_1DescribePendingMaintenanceActionsCommand,
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

export type DescribePendingMaintenanceActionsCommandInput = DescribePendingMaintenanceActionsMessage;
export type DescribePendingMaintenanceActionsCommandOutput = DescribePendingMaintenanceActionsResponse &
  __MetadataBearer;

/**
 * <p>For internal use only</p>
 */
export class DescribePendingMaintenanceActionsCommand extends $Command<
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePendingMaintenanceActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribePendingMaintenanceActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePendingMaintenanceActionsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePendingMaintenanceActionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribePendingMaintenanceActionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePendingMaintenanceActionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePendingMaintenanceActionsCommandOutput> {
    return deserializeAws_json1_1DescribePendingMaintenanceActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
