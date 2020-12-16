import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateVpcPeeringConnectionInput, CreateVpcPeeringConnectionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateVpcPeeringConnectionCommand,
  serializeAws_json1_1CreateVpcPeeringConnectionCommand,
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

export type CreateVpcPeeringConnectionCommandInput = CreateVpcPeeringConnectionInput;
export type CreateVpcPeeringConnectionCommandOutput = CreateVpcPeeringConnectionOutput & __MetadataBearer;

/**
 * <p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an AWS account with the VPC
 *             for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to
 *             communicate directly with other AWS resources. You can peer with VPCs in any AWS account
 *             that you have access to, including the account that you use to manage your Amazon GameLift
 *             fleets. You cannot peer with VPCs that are in different Regions. For more information,
 *             see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
 *         <p>Before calling this operation to establish the peering connection, you first need
 *             to call <a>CreateVpcPeeringAuthorization</a> and identify the VPC you want to
 *             peer with. Once the authorization for the specified VPC is issued, you have 24 hours to
 *             establish the connection. These two operations handle all tasks necessary to peer the
 *             two VPCs, including acceptance, updating routing tables, etc. </p>
 *         <p>To establish the connection, call this operation from the AWS account that is used
 *             to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet
 *             you want to be enable a VPC peering connection for; (2) The AWS account with the VPC
 *             that you want to peer with; and (3) The ID of the VPC you want to peer with. This
 *             operation is asynchronous. If successful, a <a>VpcPeeringConnection</a>
 *             request is created. You can use continuous polling to track the request's status using
 *                 <a>DescribeVpcPeeringConnections</a>, or by monitoring fleet events for
 *             success or failure using <a>DescribeFleetEvents</a>. </p>
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
export class CreateVpcPeeringConnectionCommand extends $Command<
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateVpcPeeringConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpcPeeringConnectionInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcPeeringConnectionOutput.filterSensitiveLog,
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
