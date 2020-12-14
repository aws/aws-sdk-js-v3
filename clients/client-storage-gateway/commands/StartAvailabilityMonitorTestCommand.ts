import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { StartAvailabilityMonitorTestInput, StartAvailabilityMonitorTestOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StartAvailabilityMonitorTestCommand,
  serializeAws_json1_1StartAvailabilityMonitorTestCommand,
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

export type StartAvailabilityMonitorTestCommandInput = StartAvailabilityMonitorTestInput;
export type StartAvailabilityMonitorTestCommandOutput = StartAvailabilityMonitorTestOutput & __MetadataBearer;

/**
 * <p>Start a test that verifies that the specified gateway is configured for High
 *          Availability monitoring in your host environment. This request only initiates the test and
 *          that a successful response only indicates that the test was started. It doesn't
 *          indicate that the test passed. For the status of the test, invoke the
 *             <code>DescribeAvailabilityMonitorTest</code> API.</p>
 *          <note>
 *             <p>Starting this test will cause your gateway to go offline for a brief period.</p>
 *          </note>
 */
export class StartAvailabilityMonitorTestCommand extends $Command<
  StartAvailabilityMonitorTestCommandInput,
  StartAvailabilityMonitorTestCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartAvailabilityMonitorTestCommandInput) {
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
  ): Handler<StartAvailabilityMonitorTestCommandInput, StartAvailabilityMonitorTestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "StartAvailabilityMonitorTestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartAvailabilityMonitorTestInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartAvailabilityMonitorTestOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartAvailabilityMonitorTestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartAvailabilityMonitorTestCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartAvailabilityMonitorTestCommandOutput> {
    return deserializeAws_json1_1StartAvailabilityMonitorTestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
