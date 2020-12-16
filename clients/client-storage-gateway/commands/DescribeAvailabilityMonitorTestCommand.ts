import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeAvailabilityMonitorTestInput, DescribeAvailabilityMonitorTestOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand,
  serializeAws_json1_1DescribeAvailabilityMonitorTestCommand,
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

export type DescribeAvailabilityMonitorTestCommandInput = DescribeAvailabilityMonitorTestInput;
export type DescribeAvailabilityMonitorTestCommandOutput = DescribeAvailabilityMonitorTestOutput & __MetadataBearer;

/**
 * <p>Returns information about the most recent High Availability monitoring test that was
 *          performed on the host in a cluster. If a test isn't performed, the status and start
 *          time in the response would be null.</p>
 */
export class DescribeAvailabilityMonitorTestCommand extends $Command<
  DescribeAvailabilityMonitorTestCommandInput,
  DescribeAvailabilityMonitorTestCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAvailabilityMonitorTestCommandInput) {
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
  ): Handler<DescribeAvailabilityMonitorTestCommandInput, DescribeAvailabilityMonitorTestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeAvailabilityMonitorTestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAvailabilityMonitorTestInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAvailabilityMonitorTestOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAvailabilityMonitorTestCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAvailabilityMonitorTestCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAvailabilityMonitorTestCommandOutput> {
    return deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
