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
import { DeleteScalingPolicyInput, DeleteScalingPolicyInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteScalingPolicyCommand,
  serializeAws_json1_1DeleteScalingPolicyCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteScalingPolicyCommandInput extends DeleteScalingPolicyInput {}
export interface DeleteScalingPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a fleet scaling policy. Once deleted, the policy is no longer in force and
 *             GameLift removes all record of it. To delete a scaling policy, specify both the scaling
 *             policy name and the fleet ID it is associated with.</p>
 *         <p>To temporarily suspend scaling policies, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StopFleetActions.html">StopFleetActions</a>. This operation suspends all policies for the
 *             fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteScalingPolicyCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteScalingPolicyCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteScalingPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DeleteScalingPolicyCommand extends $Command<
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
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

  constructor(readonly input: DeleteScalingPolicyCommandInput) {
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
  ): Handler<DeleteScalingPolicyCommandInput, DeleteScalingPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteScalingPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteScalingPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteScalingPolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteScalingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteScalingPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteScalingPolicyCommandOutput> {
    return deserializeAws_json1_1DeleteScalingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
