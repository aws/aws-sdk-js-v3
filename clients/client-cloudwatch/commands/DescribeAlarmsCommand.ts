import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DescribeAlarmsInput, DescribeAlarmsOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeAlarmsCommand,
  serializeAws_queryDescribeAlarmsCommand,
} from "../protocols/Aws_query";
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

export type DescribeAlarmsCommandInput = DescribeAlarmsInput;
export type DescribeAlarmsCommandOutput = DescribeAlarmsOutput & __MetadataBearer;

/**
 * <p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm
 * 			name, the alarm state, or a prefix for any action.</p>
 */
export class DescribeAlarmsCommand extends $Command<
  DescribeAlarmsCommandInput,
  DescribeAlarmsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAlarmsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAlarmsCommandInput, DescribeAlarmsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DescribeAlarmsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAlarmsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAlarmsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAlarmsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAlarmsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAlarmsCommandOutput> {
    return deserializeAws_queryDescribeAlarmsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
