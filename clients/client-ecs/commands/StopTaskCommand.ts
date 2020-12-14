import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { StopTaskRequest, StopTaskResponse } from "../models/models_0";
import { deserializeAws_json1_1StopTaskCommand, serializeAws_json1_1StopTaskCommand } from "../protocols/Aws_json1_1";
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

export type StopTaskCommandInput = StopTaskRequest;
export type StopTaskCommandOutput = StopTaskResponse & __MetadataBearer;

/**
 * <p>Stops a running task. Any tags associated with the task will be deleted.</p>
 * 		       <p>When <a>StopTask</a> is called on a task, the equivalent of <code>docker
 * 				stop</code> is issued to the containers running in the task. This results in a
 * 				<code>SIGTERM</code> value and a default 30-second timeout, after which the
 * 				<code>SIGKILL</code> value is sent and the containers are forcibly stopped. If the
 * 			container handles the <code>SIGTERM</code> value gracefully and exits within 30 seconds
 * 			from receiving it, no <code>SIGKILL</code> value is sent.</p>
 * 		       <note>
 * 			         <p>The default 30-second timeout can be configured on the Amazon ECS container agent with
 * 				the <code>ECS_CONTAINER_STOP_TIMEOUT</code> variable. For more information, see
 * 					<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html">Amazon ECS Container Agent Configuration</a> in the
 * 					<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * 		       </note>
 */
export class StopTaskCommand extends $Command<StopTaskCommandInput, StopTaskCommandOutput, ECSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopTaskCommandInput, StopTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "StopTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopTaskCommandOutput> {
    return deserializeAws_json1_1StopTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
