import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DisableAlarmActionsInput } from "../models/models_0";
import {
  deserializeAws_queryDisableAlarmActionsCommand,
  serializeAws_queryDisableAlarmActionsCommand,
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

export type DisableAlarmActionsCommandInput = DisableAlarmActionsInput;
export type DisableAlarmActionsCommandOutput = __MetadataBearer;

/**
 * <p>Disables the actions for the specified alarms. When an alarm's actions are disabled, the
 * 			alarm actions do not execute when the alarm state changes.</p>
 */
export class DisableAlarmActionsCommand extends $Command<
  DisableAlarmActionsCommandInput,
  DisableAlarmActionsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableAlarmActionsCommandInput) {
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
  ): Handler<DisableAlarmActionsCommandInput, DisableAlarmActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DisableAlarmActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableAlarmActionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableAlarmActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDisableAlarmActionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableAlarmActionsCommandOutput> {
    return deserializeAws_queryDisableAlarmActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
