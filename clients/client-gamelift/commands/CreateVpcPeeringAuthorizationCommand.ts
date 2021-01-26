import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateVpcPeeringAuthorizationInput, CreateVpcPeeringAuthorizationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateVpcPeeringAuthorizationCommand,
  serializeAws_json1_1CreateVpcPeeringAuthorizationCommand,
} from "../protocols/Aws_json1_1";
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

export type CreateVpcPeeringAuthorizationCommandInput = CreateVpcPeeringAuthorizationInput;
export type CreateVpcPeeringAuthorizationCommandOutput = CreateVpcPeeringAuthorizationOutput & __MetadataBearer;

/**
 * <p>Requests authorization to create or delete a peer connection between the VPC for
 *             your Amazon GameLift fleet and a virtual private cloud (VPC) in your AWS account. VPC peering enables the game
 *             servers on your fleet to communicate directly with other AWS resources. Once you've
 *             received authorization, call <a>CreateVpcPeeringConnection</a> to establish
 *             the peering connection. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift
 *                 Fleets</a>.</p>
 *         <p>You can peer with VPCs that are owned by any AWS account you have access to,
 *             including the account that you use to manage your Amazon GameLift fleets. You cannot peer with
 *             VPCs that are in different Regions.</p>
 *         <p>To request authorization to create a connection, call this operation from the AWS
 *             account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to
 *             enable your game servers to retrieve data from a DynamoDB table, use the account that
 *             manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC
 *             that you want to peer with, and (2) the ID of the AWS account that you use to manage
 *             Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p>
 *         <p>To request authorization to delete a connection, call this operation from the AWS
 *             account with the VPC that is peered with your Amazon GameLift fleet. Identify the following
 *             values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the
 *             AWS account that you use to manage Amazon GameLift. </p>
 *         <p>The authorization remains valid for 24 hours unless it is canceled by a call to
 *                 <a>DeleteVpcPeeringAuthorization</a>. You must create or delete the
 *             peering connection while the authorization is valid. </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateVpcPeeringAuthorization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeVpcPeeringAuthorizations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteVpcPeeringAuthorization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateVpcPeeringConnection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeVpcPeeringConnections</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteVpcPeeringConnection</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateVpcPeeringAuthorizationCommand extends $Command<
  CreateVpcPeeringAuthorizationCommandInput,
  CreateVpcPeeringAuthorizationCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateVpcPeeringAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpcPeeringAuthorizationInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcPeeringAuthorizationOutput.filterSensitiveLog,
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
