import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeVpcPeeringConnectionsInput, DescribeVpcPeeringConnectionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand,
  serializeAws_json1_1DescribeVpcPeeringConnectionsCommand,
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

export type DescribeVpcPeeringConnectionsCommandInput = DescribeVpcPeeringConnectionsInput;
export type DescribeVpcPeeringConnectionsCommandOutput = DescribeVpcPeeringConnectionsOutput & __MetadataBearer;

/**
 * <p>Retrieves information on VPC peering connections. Use this operation to get peering
 *             information for all fleets or for one specific fleet ID. </p>
 *         <p>To retrieve connection information, call this operation from the AWS account that
 *             is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty
 *             to retrieve all connection records. If successful, the retrieved information includes
 *             both active and pending connections. Active connections identify the IpV4 CIDR block
 *             that the VPC uses to connect. </p>
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
export class DescribeVpcPeeringConnectionsCommand extends $Command<
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcPeeringConnectionsCommandInput) {
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
  ): Handler<DescribeVpcPeeringConnectionsCommandInput, DescribeVpcPeeringConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeVpcPeeringConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcPeeringConnectionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcPeeringConnectionsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVpcPeeringConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeVpcPeeringConnectionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcPeeringConnectionsCommandOutput> {
    return deserializeAws_json1_1DescribeVpcPeeringConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
