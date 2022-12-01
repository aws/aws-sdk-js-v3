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
  CreateVpcPeeringConnectionInput,
  CreateVpcPeeringConnectionInputFilterSensitiveLog,
  CreateVpcPeeringConnectionOutput,
  CreateVpcPeeringConnectionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateVpcPeeringConnectionCommand,
  serializeAws_json1_1CreateVpcPeeringConnectionCommand,
} from "../protocols/Aws_json1_1";

export interface CreateVpcPeeringConnectionCommandInput extends CreateVpcPeeringConnectionInput {}
export interface CreateVpcPeeringConnectionCommandOutput extends CreateVpcPeeringConnectionOutput, __MetadataBearer {}

/**
 * <p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC
 *             for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to communicate
 *             directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that
 *             you have access to, including the account that you use to manage your Amazon GameLift fleets. You
 *             cannot peer with VPCs that are in different Regions. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC
 *                 Peering with Amazon GameLift Fleets</a>.</p>
 *         <p>Before calling this operation to establish the peering connection, you first need to
 *             use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a> and identify the VPC you want to peer with.
 *             Once the authorization for the specified VPC is issued, you have 24 hours to establish
 *             the connection. These two operations handle all tasks necessary to peer the two VPCs,
 *             including acceptance, updating routing tables, etc. </p>
 *         <p>To establish the connection, call this operation from the Amazon Web Services account that is used
 *             to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet you
 *             want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that
 *             you want to peer with; and (3) The ID of the VPC you want to peer with. This operation
 *             is asynchronous. If successful, a connection request is created. You can use continuous
 *             polling to track the request's status using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html">DescribeVpcPeeringConnections</a> , or by monitoring fleet events for success
 *             or failure using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a> . </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateVpcPeeringConnectionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateVpcPeeringConnectionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class CreateVpcPeeringConnectionCommand extends $Command<
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
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

  constructor(readonly input: CreateVpcPeeringConnectionCommandInput) {
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
  ): Handler<CreateVpcPeeringConnectionCommandInput, CreateVpcPeeringConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVpcPeeringConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateVpcPeeringConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpcPeeringConnectionInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcPeeringConnectionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVpcPeeringConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateVpcPeeringConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcPeeringConnectionCommandOutput> {
    return deserializeAws_json1_1CreateVpcPeeringConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
