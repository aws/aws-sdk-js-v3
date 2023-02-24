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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  RegisterComputeInput,
  RegisterComputeInputFilterSensitiveLog,
  RegisterComputeOutput,
  RegisterComputeOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RegisterComputeCommand,
  serializeAws_json1_1RegisterComputeCommand,
} from "../protocols/Aws_json1_1";

export interface RegisterComputeCommandInput extends RegisterComputeInput {}
export interface RegisterComputeCommandOutput extends RegisterComputeOutput, __MetadataBearer {}

/**
 * <p>Registers your compute resources in a fleet you previously created. After you register
 *             a compute to your fleet, you can monitor and manage your compute using GameLift. The
 *             operation returns the compute resource containing SDK endpoint you can use to connect
 *             your game server to GameLift.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-anywhere.html">Create an
 *                         Anywhere fleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing.html">Test your
 *                         integration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, RegisterComputeCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, RegisterComputeCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new RegisterComputeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterComputeCommandInput} for command's `input` shape.
 * @see {@link RegisterComputeCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class RegisterComputeCommand extends $Command<
  RegisterComputeCommandInput,
  RegisterComputeCommandOutput,
  GameLiftClientResolvedConfig
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

  constructor(readonly input: RegisterComputeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterComputeCommandInput, RegisterComputeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterComputeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "RegisterComputeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterComputeInputFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterComputeOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterComputeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterComputeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterComputeCommandOutput> {
    return deserializeAws_json1_1RegisterComputeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
