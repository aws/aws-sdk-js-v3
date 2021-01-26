import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeMaintenanceWindowsRequest, DescribeMaintenanceWindowsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMaintenanceWindowsCommand,
  serializeAws_json1_1DescribeMaintenanceWindowsCommand,
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

export type DescribeMaintenanceWindowsCommandInput = DescribeMaintenanceWindowsRequest;
export type DescribeMaintenanceWindowsCommandOutput = DescribeMaintenanceWindowsResult & __MetadataBearer;

/**
 * <p>Retrieves the maintenance windows in an AWS account.</p>
 */
export class DescribeMaintenanceWindowsCommand extends $Command<
  DescribeMaintenanceWindowsCommandInput,
  DescribeMaintenanceWindowsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMaintenanceWindowsCommandInput) {
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
  ): Handler<DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeMaintenanceWindowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMaintenanceWindowsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMaintenanceWindowsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMaintenanceWindowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMaintenanceWindowsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMaintenanceWindowsCommandOutput> {
    return deserializeAws_json1_1DescribeMaintenanceWindowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
