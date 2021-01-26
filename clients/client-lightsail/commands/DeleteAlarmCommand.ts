import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteAlarmRequest, DeleteAlarmResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAlarmCommand,
  serializeAws_json1_1DeleteAlarmCommand,
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

export type DeleteAlarmCommandInput = DeleteAlarmRequest;
export type DeleteAlarmCommandOutput = DeleteAlarmResult & __MetadataBearer;

/**
 * <p>Deletes an alarm.</p>
 *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
 *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
 *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 */
export class DeleteAlarmCommand extends $Command<
  DeleteAlarmCommandInput,
  DeleteAlarmCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAlarmCommandInput) {
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
  ): Handler<DeleteAlarmCommandInput, DeleteAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAlarmRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAlarmResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAlarmCommandOutput> {
    return deserializeAws_json1_1DeleteAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
