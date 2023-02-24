// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateStateMachineInput,
  CreateStateMachineInputFilterSensitiveLog,
  CreateStateMachineOutput,
  CreateStateMachineOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateStateMachineCommand,
  serializeAws_json1_0CreateStateMachineCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

export interface CreateStateMachineCommandInput extends CreateStateMachineInput {}
export interface CreateStateMachineCommandOutput extends CreateStateMachineOutput, __MetadataBearer {}

/**
 * <p>Creates a state machine. A state machine consists of a collection of states that can do
 *       work (<code>Task</code> states), determine to which states to transition next
 *         (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states),
 *       and so on. State machines are specified using a JSON-based, structured language. For more
 *       information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States
 *         Language</a> in the Step Functions User Guide.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <note>
 *             <p>
 *                <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a
 *         duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency
 *         check is based on the state machine <code>name</code>, <code>definition</code>,
 *           <code>type</code>, <code>LoggingConfiguration</code> and
 *         <code>TracingConfiguration</code>. If a following request has a different
 *           <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and treat
 *         it as an idempotent request of the previous. In this case, <code>roleArn</code> and
 *           <code>tags</code> will not be updated, even if they are different.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, CreateStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, CreateStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new CreateStateMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStateMachineCommandInput} for command's `input` shape.
 * @see {@link CreateStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 */
export class CreateStateMachineCommand extends $Command<
  CreateStateMachineCommandInput,
  CreateStateMachineCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStateMachineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "CreateStateMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStateMachineInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateStateMachineOutputFilterSensitiveLog,
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
