import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DeleteStateMachineInput, DeleteStateMachineOutput } from "../models/models_0";
import {
  deserializeAws_json1_0DeleteStateMachineCommand,
  serializeAws_json1_0DeleteStateMachineCommand,
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

export type DeleteStateMachineCommandInput = DeleteStateMachineInput;
export type DeleteStateMachineCommandOutput = DeleteStateMachineOutput & __MetadataBearer;

/**
 * <p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's
 *       status to <code>DELETING</code> and begins the deletion process. </p>
 *          <note>
 *             <p>For <code>EXPRESS</code>state machines, the deletion will happen eventually (usually
 *         less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code>
 *         API is called.</p>
 *          </note>
 */
export class DeleteStateMachineCommand extends $Command<
  DeleteStateMachineCommandInput,
  DeleteStateMachineCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteStateMachineCommandInput) {
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
  ): Handler<DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DeleteStateMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteStateMachineInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteStateMachineOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteStateMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteStateMachineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteStateMachineCommandOutput> {
    return deserializeAws_json1_0DeleteStateMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
