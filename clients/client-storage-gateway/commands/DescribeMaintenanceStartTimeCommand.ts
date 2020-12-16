import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeMaintenanceStartTimeInput, DescribeMaintenanceStartTimeOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMaintenanceStartTimeCommand,
  serializeAws_json1_1DescribeMaintenanceStartTimeCommand,
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

export type DescribeMaintenanceStartTimeCommandInput = DescribeMaintenanceStartTimeInput;
export type DescribeMaintenanceStartTimeCommandOutput = DescribeMaintenanceStartTimeOutput & __MetadataBearer;

/**
 * <p>Returns your gateway's weekly maintenance start time including the day and time of
 *          the week. Note that values are in terms of the gateway's time zone.</p>
 */
export class DescribeMaintenanceStartTimeCommand extends $Command<
  DescribeMaintenanceStartTimeCommandInput,
  DescribeMaintenanceStartTimeCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMaintenanceStartTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMaintenanceStartTimeCommandInput, DescribeMaintenanceStartTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeMaintenanceStartTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMaintenanceStartTimeInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMaintenanceStartTimeOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMaintenanceStartTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMaintenanceStartTimeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMaintenanceStartTimeCommandOutput> {
    return deserializeAws_json1_1DescribeMaintenanceStartTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
