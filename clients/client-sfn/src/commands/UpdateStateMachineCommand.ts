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
  UpdateStateMachineInput,
  UpdateStateMachineInputFilterSensitiveLog,
  UpdateStateMachineOutput,
  UpdateStateMachineOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0UpdateStateMachineCommand,
  serializeAws_json1_0UpdateStateMachineCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

export interface UpdateStateMachineCommandInput extends UpdateStateMachineInput {}
export interface UpdateStateMachineCommandOutput extends UpdateStateMachineOutput, __MetadataBearer {}

/**
 * <p>Updates an existing state machine by modifying its <code>definition</code>,
 *         <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue
 *       to use the previous <code>definition</code> and <code>roleArn</code>. You must include at
 *       least one of <code>definition</code> or <code>roleArn</code> or you will receive a
 *         <code>MissingRequiredParameter</code> error.</p>
 *
 *          <p>If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p>
 *
 *          <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p>
 *
 *          <note>
 *             <p>All <code>StartExecution</code> calls within a few seconds will use the updated
 *           <code>definition</code> and <code>roleArn</code>. Executions started immediately after
 *         calling <code>UpdateStateMachine</code> may use the previous state machine
 *           <code>definition</code> and <code>roleArn</code>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, UpdateStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, UpdateStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new UpdateStateMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStateMachineCommandInput} for command's `input` shape.
 * @see {@link UpdateStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 */
export class UpdateStateMachineCommand extends $Command<
  UpdateStateMachineCommandInput,
  UpdateStateMachineCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateStateMachineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "UpdateStateMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateStateMachineInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateStateMachineOutputFilterSensitiveLog,
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
