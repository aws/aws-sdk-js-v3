import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import {
  DescribeMaintenanceWindowExecutionTaskInvocationsRequest,
  DescribeMaintenanceWindowExecutionTaskInvocationsResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
  serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand,
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

export type DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput = DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
export type DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput = DescribeMaintenanceWindowExecutionTaskInvocationsResult &
  __MetadataBearer;

/**
 * <p>Retrieves the individual task executions (one per target) for a particular task run as part
 *    of a maintenance window execution.</p>
 */
export class DescribeMaintenanceWindowExecutionTaskInvocationsCommand extends $Command<
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
  DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput) {
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
  ): Handler<
    DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeMaintenanceWindowExecutionTaskInvocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMaintenanceWindowExecutionTaskInvocationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMaintenanceWindowExecutionTaskInvocationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> {
    return deserializeAws_json1_1DescribeMaintenanceWindowExecutionTaskInvocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
