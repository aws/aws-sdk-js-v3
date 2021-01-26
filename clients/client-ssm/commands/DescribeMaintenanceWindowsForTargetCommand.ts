import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import {
  DescribeMaintenanceWindowsForTargetRequest,
  DescribeMaintenanceWindowsForTargetResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand,
  serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand,
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

export type DescribeMaintenanceWindowsForTargetCommandInput = DescribeMaintenanceWindowsForTargetRequest;
export type DescribeMaintenanceWindowsForTargetCommandOutput = DescribeMaintenanceWindowsForTargetResult &
  __MetadataBearer;

/**
 * <p>Retrieves information about the maintenance window targets or tasks that an instance is
 *    associated with.</p>
 */
export class DescribeMaintenanceWindowsForTargetCommand extends $Command<
  DescribeMaintenanceWindowsForTargetCommandInput,
  DescribeMaintenanceWindowsForTargetCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMaintenanceWindowsForTargetCommandInput) {
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
  ): Handler<DescribeMaintenanceWindowsForTargetCommandInput, DescribeMaintenanceWindowsForTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeMaintenanceWindowsForTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMaintenanceWindowsForTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMaintenanceWindowsForTargetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeMaintenanceWindowsForTargetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMaintenanceWindowsForTargetCommandOutput> {
    return deserializeAws_json1_1DescribeMaintenanceWindowsForTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
