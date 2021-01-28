import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateMaintenanceWindowRequest, CreateMaintenanceWindowResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateMaintenanceWindowCommand,
  serializeAws_json1_1CreateMaintenanceWindowCommand,
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

export type CreateMaintenanceWindowCommandInput = CreateMaintenanceWindowRequest;
export type CreateMaintenanceWindowCommandOutput = CreateMaintenanceWindowResult & __MetadataBearer;

/**
 * <p>Creates a new maintenance window.</p>
 *          <note>
 *             <p>The value you specify for <code>Duration</code> determines the specific end time for the
 *     maintenance window based on the time it begins. No maintenance window tasks are permitted to
 *     start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>.
 *     For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
 *     value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start
 *     after 5 PM.</p>
 *          </note>
 */
export class CreateMaintenanceWindowCommand extends $Command<
  CreateMaintenanceWindowCommandInput,
  CreateMaintenanceWindowCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMaintenanceWindowCommandInput) {
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
  ): Handler<CreateMaintenanceWindowCommandInput, CreateMaintenanceWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateMaintenanceWindowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMaintenanceWindowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMaintenanceWindowResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMaintenanceWindowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMaintenanceWindowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMaintenanceWindowCommandOutput> {
    return deserializeAws_json1_1CreateMaintenanceWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
