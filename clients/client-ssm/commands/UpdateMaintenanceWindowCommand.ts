import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateMaintenanceWindowRequest, UpdateMaintenanceWindowResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateMaintenanceWindowCommand,
  serializeAws_json1_1UpdateMaintenanceWindowCommand,
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

export type UpdateMaintenanceWindowCommandInput = UpdateMaintenanceWindowRequest;
export type UpdateMaintenanceWindowCommandOutput = UpdateMaintenanceWindowResult & __MetadataBearer;

/**
 * <p>Updates an existing maintenance window. Only specified parameters are modified.</p>
 *          <note>
 *             <p>The value you specify for <code>Duration</code> determines the specific end time for the
 *     maintenance window based on the time it begins. No maintenance window tasks are permitted to
 *     start after the resulting endtime minus the number of hours you specify for <code>Cutoff</code>.
 *     For example, if the maintenance window starts at 3 PM, the duration is three hours, and the
 *     value you specify for <code>Cutoff</code> is one hour, no maintenance window tasks can start
 *     after 5 PM.</p>
 *          </note>
 */
export class UpdateMaintenanceWindowCommand extends $Command<
  UpdateMaintenanceWindowCommandInput,
  UpdateMaintenanceWindowCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMaintenanceWindowCommandInput) {
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
  ): Handler<UpdateMaintenanceWindowCommandInput, UpdateMaintenanceWindowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateMaintenanceWindowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMaintenanceWindowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMaintenanceWindowResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMaintenanceWindowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateMaintenanceWindowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMaintenanceWindowCommandOutput> {
    return deserializeAws_json1_1UpdateMaintenanceWindowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
