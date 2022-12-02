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
  StartExecutionInput,
  StartExecutionInputFilterSensitiveLog,
  StartExecutionOutput,
  StartExecutionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0StartExecutionCommand,
  serializeAws_json1_0StartExecutionCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

export interface StartExecutionCommandInput extends StartExecutionInput {}
export interface StartExecutionCommandOutput extends StartExecutionOutput, __MetadataBearer {}

/**
 * <p>Starts a state machine execution. If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p>
 *
 *          <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p>
 *
 *          <note>
 *             <p>
 *                <code>StartExecution</code> is idempotent for <code>STANDARD</code> workflows. For a
 *           <code>STANDARD</code> workflow, if <code>StartExecution</code> is called with the same
 *         name and input as a running execution, the call will succeed and return the same response as
 *         the original request. If the execution is closed or if the input is different, it will
 *         return a <code>400 ExecutionAlreadyExists</code> error. Names can be reused after 90 days. </p>
 *             <p>
 *                <code>StartExecution</code> is not idempotent for <code>EXPRESS</code> workflows. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StartExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new StartExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExecutionCommandInput} for command's `input` shape.
 * @see {@link StartExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 */
export class StartExecutionCommand extends $Command<
  StartExecutionCommandInput,
  StartExecutionCommandOutput,
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

  constructor(readonly input: StartExecutionCommandInput) {
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
  ): Handler<StartExecutionCommandInput, StartExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "StartExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartExecutionInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartExecutionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0StartExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExecutionCommandOutput> {
    return deserializeAws_json1_0StartExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
