import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ScheduleRunRequest, ScheduleRunResult } from "../models/models_0";
import {
  deserializeAws_json1_1ScheduleRunCommand,
  serializeAws_json1_1ScheduleRunCommand,
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

export type ScheduleRunCommandInput = ScheduleRunRequest;
export type ScheduleRunCommandOutput = ScheduleRunResult & __MetadataBearer;

/**
 * <p>Schedules a run.</p>
 */
export class ScheduleRunCommand extends $Command<
  ScheduleRunCommandInput,
  ScheduleRunCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ScheduleRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ScheduleRunCommandInput, ScheduleRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ScheduleRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ScheduleRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ScheduleRunResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ScheduleRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ScheduleRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ScheduleRunCommandOutput> {
    return deserializeAws_json1_1ScheduleRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
