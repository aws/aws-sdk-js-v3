import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { PutAlarmRequest, PutAlarmResult } from "../models/models_1";
import { deserializeAws_json1_1PutAlarmCommand, serializeAws_json1_1PutAlarmCommand } from "../protocols/Aws_json1_1";
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

export type PutAlarmCommandInput = PutAlarmRequest;
export type PutAlarmCommandOutput = PutAlarmResult & __MetadataBearer;

/**
 * <p>Creates or updates an alarm, and associates it with the specified metric.</p>
 *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
 *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
 *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 *          <p>When this action creates an alarm, the alarm state is immediately set to
 *         <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
 *       appropriately. Any actions associated with the new state are then executed.</p>
 *          <p>When you update an existing alarm, its state is left unchanged, but the update completely
 *       overwrites the previous configuration of the alarm. The alarm is then evaluated with the
 *       updated configuration.</p>
 */
export class PutAlarmCommand extends $Command<
  PutAlarmCommandInput,
  PutAlarmCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAlarmCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAlarmCommandInput, PutAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "PutAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAlarmRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAlarmResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAlarmCommandOutput> {
    return deserializeAws_json1_1PutAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
