import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { UpdateStateMachineInput, UpdateStateMachineOutput } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateStateMachineCommand,
  serializeAws_json1_0UpdateStateMachineCommand,
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

export type UpdateStateMachineCommandInput = UpdateStateMachineInput;
export type UpdateStateMachineCommandOutput = UpdateStateMachineOutput & __MetadataBearer;

/**
 * <p>Updates an existing state machine by modifying its <code>definition</code>,
 *         <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue
 *       to use the previous <code>definition</code> and <code>roleArn</code>. You must include at
 *       least one of <code>definition</code> or <code>roleArn</code> or you will receive a
 *         <code>MissingRequiredParameter</code> error.</p>
 *          <note>
 *             <p>All <code>StartExecution</code> calls within a few seconds will use the updated
 *           <code>definition</code> and <code>roleArn</code>. Executions started immediately after
 *         calling <code>UpdateStateMachine</code> may use the previous state machine
 *           <code>definition</code> and <code>roleArn</code>. </p>
 *          </note>
 */
export class UpdateStateMachineCommand extends $Command<
  UpdateStateMachineCommandInput,
  UpdateStateMachineCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateStateMachineCommandInput) {
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
  ): Handler<UpdateStateMachineCommandInput, UpdateStateMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "UpdateStateMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateStateMachineInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateStateMachineOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateStateMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateStateMachineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStateMachineCommandOutput> {
    return deserializeAws_json1_0UpdateStateMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
