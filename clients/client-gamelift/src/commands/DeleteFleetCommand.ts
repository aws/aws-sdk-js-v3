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
import { DeleteFleetInput, DeleteFleetInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteFleetCommand,
  serializeAws_json1_1DeleteFleetCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteFleetCommandInput extends DeleteFleetInput {}
export interface DeleteFleetCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes all resources and information related a fleet. Any current fleet instances,
 *             including those in remote locations, are shut down. You don't need to call
 *                 <code>DeleteFleetLocations</code> separately.</p>
 *         <note>
 *             <p>If the fleet being deleted has a VPC peering connection, you first need to get a
 *                 valid authorization (good for 24 hours) by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a>. You do not need to explicitly delete the
 *                 VPC peering connection.</p>
 *         </note>
 *         <p>To delete a fleet, specify the fleet ID to be terminated. During the deletion process
 *             the fleet status is changed to <code>DELETING</code>. When completed, the status
 *             switches to <code>TERMINATED</code> and the fleet event <code>FLEET_DELETED</code> is
 *             sent.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift
 *                 Fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteFleetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteFleetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DeleteFleetCommand extends $Command<
  DeleteFleetCommandInput,
  DeleteFleetCommandOutput,
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

  constructor(readonly input: DeleteFleetCommandInput) {
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
  ): Handler<DeleteFleetCommandInput, DeleteFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteFleetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFleetInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFleetCommandOutput> {
    return deserializeAws_json1_1DeleteFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
