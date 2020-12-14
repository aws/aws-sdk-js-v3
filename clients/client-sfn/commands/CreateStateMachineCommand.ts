import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { CreateStateMachineInput, CreateStateMachineOutput } from "../models/models_0";
import {
  deserializeAws_json1_0CreateStateMachineCommand,
  serializeAws_json1_0CreateStateMachineCommand,
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

export type CreateStateMachineCommandInput = CreateStateMachineInput;
export type CreateStateMachineCommandOutput = CreateStateMachineOutput & __MetadataBearer;

/**
 * <p>Creates a state machine. A state machine consists of a collection of states that can do
 *       work (<code>Task</code> states), determine to which states to transition next
 *         (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states),
 *       and so on. State machines are specified using a JSON-based, structured language. For more
 *       information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States
 *         Language</a> in the AWS Step Functions User Guide.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <note>
 *             <p>
 *                <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a
 *         duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency
 *         check is based on the state machine <code>name</code>, <code>definition</code>,
 *           <code>type</code>, <code>LoggingConfiguration</code> and <code>TracingConfiguration</code>. If a following request has a
 *         different <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and
 *         treat it as an idempotent request of the previous. In this case, <code>roleArn</code> and
 *           <code>tags</code> will not be updated, even if they are different.</p>
 *          </note>
 */
export class CreateStateMachineCommand extends $Command<
  CreateStateMachineCommandInput,
  CreateStateMachineCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateStateMachineCommandInput) {
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
  ): Handler<CreateStateMachineCommandInput, CreateStateMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "CreateStateMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStateMachineInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStateMachineOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateStateMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateStateMachineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStateMachineCommandOutput> {
    return deserializeAws_json1_0CreateStateMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
