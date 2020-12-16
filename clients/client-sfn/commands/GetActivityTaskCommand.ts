import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { GetActivityTaskInput, GetActivityTaskOutput } from "../models/models_0";
import {
  deserializeAws_json1_0GetActivityTaskCommand,
  serializeAws_json1_0GetActivityTaskCommand,
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

export type GetActivityTaskCommandInput = GetActivityTaskInput;
export type GetActivityTaskCommandOutput = GetActivityTaskOutput & __MetadataBearer;

/**
 * <p>Used by workers to retrieve a task (with the specified activity ARN) which has been
 *       scheduled for execution by a running state machine. This initiates a long poll, where the
 *       service holds the HTTP connection open and responds as soon as a task becomes available (i.e.
 *       an execution of a task of this type is needed.) The maximum time the service holds on to the
 *       request before responding is 60 seconds. If no task is available within 60 seconds, the poll
 *       returns a <code>taskToken</code> with a null string.</p>
 *          <important>
 *             <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds
 *         higher than the maximum time the service may hold the poll request).</p>
 *             <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See
 *           <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid
 *           Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p>
 *          </important>
 */
export class GetActivityTaskCommand extends $Command<
  GetActivityTaskCommandInput,
  GetActivityTaskCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetActivityTaskCommandInput) {
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
  ): Handler<GetActivityTaskCommandInput, GetActivityTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "GetActivityTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetActivityTaskInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetActivityTaskOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetActivityTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetActivityTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetActivityTaskCommandOutput> {
    return deserializeAws_json1_0GetActivityTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
