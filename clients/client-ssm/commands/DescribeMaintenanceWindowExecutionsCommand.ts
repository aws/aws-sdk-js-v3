import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import {
  DescribeMaintenanceWindowExecutionsRequest,
  DescribeMaintenanceWindowExecutionsResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand,
  serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand,
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

export type DescribeMaintenanceWindowExecutionsCommandInput = DescribeMaintenanceWindowExecutionsRequest;
export type DescribeMaintenanceWindowExecutionsCommandOutput = DescribeMaintenanceWindowExecutionsResult &
  __MetadataBearer;

/**
 * <p>Lists the executions of a maintenance window. This includes information about when the
 *    maintenance window was scheduled to be active, and information about tasks registered and run
 *    with the maintenance window.</p>
 */
export class DescribeMaintenanceWindowExecutionsCommand extends $Command<
  DescribeMaintenanceWindowExecutionsCommandInput,
  DescribeMaintenanceWindowExecutionsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMaintenanceWindowExecutionsCommandInput) {
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
  ): Handler<DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeMaintenanceWindowExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMaintenanceWindowExecutionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMaintenanceWindowExecutionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeMaintenanceWindowExecutionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMaintenanceWindowExecutionsCommandOutput> {
    return deserializeAws_json1_1DescribeMaintenanceWindowExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
