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
  CreateVpcPeeringAuthorizationInput,
  CreateVpcPeeringAuthorizationInputFilterSensitiveLog,
  CreateVpcPeeringAuthorizationOutput,
  CreateVpcPeeringAuthorizationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand,
  serializeAws_json1_1CreateVpcPeeringAuthorizationCommand,
} from "../protocols/Aws_json1_1";

export interface CreateVpcPeeringAuthorizationCommandInput extends CreateVpcPeeringAuthorizationInput {}
export interface CreateVpcPeeringAuthorizationCommandOutput
  extends CreateVpcPeeringAuthorizationOutput,
    __MetadataBearer {}

/**
 * <p>Requests authorization to create or delete a peer connection between the VPC for your
 *             Amazon GameLift fleet and a virtual private cloud (VPC) in your Amazon Web Services account. VPC peering enables the game servers on
 *             your fleet to communicate directly with other Amazon Web Services resources. After you've received
 *             authorization, use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringConnection.html">CreateVpcPeeringConnection</a> to establish the peering connection. For more
 *             information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift
 *                 Fleets</a>.</p>
 *         <p>You can peer with VPCs that are owned by any Amazon Web Services account you have access to,
 *             including the account that you use to manage your Amazon GameLift fleets. You cannot peer with
 *             VPCs that are in different Regions.</p>
 *         <p>To request authorization to create a connection, call this operation from the Amazon Web Services
 *             account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to enable
 *             your game servers to retrieve data from a DynamoDB table, use the account that manages
 *             that DynamoDB resource. Identify the following values: (1) The ID of the VPC that you
 *             want to peer with, and (2) the ID of the Amazon Web Services account that you use to manage Amazon GameLift. If
 *             successful, VPC peering is authorized for the specified VPC. </p>
 *         <p>To request authorization to delete a connection, call this operation from the Amazon Web Services
 *             account with the VPC that is peered with your Amazon GameLift fleet. Identify the following
 *             values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the
 *             Amazon Web Services account that you use to manage Amazon GameLift. </p>
 *         <p>The authorization remains valid for 24 hours unless it is canceled. You must create or
 *             delete the peering connection while the authorization is valid. </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateVpcPeeringAuthorizationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateVpcPeeringAuthorizationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateVpcPeeringAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcPeeringAuthorizationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcPeeringAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class CreateVpcPeeringAuthorizationCommand extends $Command<
  CreateVpcPeeringAuthorizationCommandInput,
  CreateVpcPeeringAuthorizationCommandOutput,
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

  constructor(readonly input: CreateVpcPeeringAuthorizationCommandInput) {
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
  ): Handler<CreateVpcPeeringAuthorizationCommandInput, CreateVpcPeeringAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVpcPeeringAuthorizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateVpcPeeringAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpcPeeringAuthorizationInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcPeeringAuthorizationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVpcPeeringAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateVpcPeeringAuthorizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcPeeringAuthorizationCommandOutput> {
    return deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
