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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  ExecuteCommandRequest,
  ExecuteCommandRequestFilterSensitiveLog,
  ExecuteCommandResponse,
  ExecuteCommandResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ExecuteCommandCommand,
  serializeAws_json1_1ExecuteCommandCommand,
} from "../protocols/Aws_json1_1";

export interface ExecuteCommandCommandInput extends ExecuteCommandRequest {}
export interface ExecuteCommandCommandOutput extends ExecuteCommandResponse, __MetadataBearer {}

/**
 * <p>Runs a command remotely on a container within a task.</p>
 *          <p>If you use a condition key in your IAM policy to refine the conditions for the policy
 * 			statement, for example limit the actions to a specific cluster, you receive an
 * 				<code>AccessDeniedException</code> when there is a mismatch between the condition
 * 			key value and the corresponding parameter value.</p>
 *          <p>For information about required permissions and considerations, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-exec.htm">Using Amazon ECS Exec for
 * 			debugging</a> in the <i>Amazon ECS Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ExecuteCommandCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ExecuteCommandCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ExecuteCommandCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteCommandCommandInput} for command's `input` shape.
 * @see {@link ExecuteCommandCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class ExecuteCommandCommand extends $Command<
  ExecuteCommandCommandInput,
  ExecuteCommandCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: ExecuteCommandCommandInput) {
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
  ): Handler<ExecuteCommandCommandInput, ExecuteCommandCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteCommandCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "ExecuteCommandCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteCommandRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExecuteCommandResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecuteCommandCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ExecuteCommandCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteCommandCommandOutput> {
    return deserializeAws_json1_1ExecuteCommandCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
