import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { SendTaskHeartbeatInput, SendTaskHeartbeatOutput } from "../models/models_0";
import {
  deserializeAws_json1_0SendTaskHeartbeatCommand,
  serializeAws_json1_0SendTaskHeartbeatCommand,
} from "../protocols/Aws_json1_0";
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

export type SendTaskHeartbeatCommandInput = SendTaskHeartbeatInput;
export type SendTaskHeartbeatCommandOutput = SendTaskHeartbeatOutput & __MetadataBearer;

/**
 * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern to report to Step Functions that the task represented by the specified
 *         <code>taskToken</code> is still making progress. This action resets the
 *         <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state
 *       machine's Amazon States Language definition (<code>HeartbeatSeconds</code>). This action does not in itself
 *       create an event in the execution history. However, if the task times out, the execution
 *       history contains an <code>ActivityTimedOut</code> entry for activities, or a
 *         <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or
 *         <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a>
 *       pattern.</p>
 *          <note>
 *             <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is
 *         its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval
 *         for heartbeats.</p>
 *          </note>
 */
export class SendTaskHeartbeatCommand extends $Command<
  SendTaskHeartbeatCommandInput,
  SendTaskHeartbeatCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendTaskHeartbeatCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "SendTaskHeartbeatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendTaskHeartbeatInput.filterSensitiveLog,
      outputFilterSensitiveLog: SendTaskHeartbeatOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendTaskHeartbeatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0SendTaskHeartbeatCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendTaskHeartbeatCommandOutput> {
    return deserializeAws_json1_0SendTaskHeartbeatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
