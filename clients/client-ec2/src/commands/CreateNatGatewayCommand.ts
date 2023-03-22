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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNatGatewayRequest, CreateNatGatewayResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateNatGatewayCommand,
  serializeAws_ec2CreateNatGatewayCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link CreateNatGatewayCommand}.
 */
export interface CreateNatGatewayCommandInput extends CreateNatGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateNatGatewayCommand}.
 */
export interface CreateNatGatewayCommandOutput extends CreateNatGatewayResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a NAT gateway in the specified subnet. This action creates a network interface
 *           in the specified subnet with a private IP address from the IP address range of the
 *           subnet. You can create either a public NAT gateway or a private NAT gateway.</p>
 *          <p>With a public NAT gateway, internet-bound traffic from a private subnet can be routed
 *           to the NAT gateway, so that instances in a private subnet can connect to the internet.</p>
 *          <p>With a private NAT gateway, private communication is routed across VPCs and on-premises
 *             networks through a transit gateway or virtual private gateway. Common use cases include
 *             running large workloads behind a small pool of allowlisted IPv4 addresses, preserving
 *             private IPv4 addresses, and communicating between overlapping networks.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">NAT gateways</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNatGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNatGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateNatGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateNatGatewayCommandInput - {@link CreateNatGatewayCommandInput}
 * @returns {@link CreateNatGatewayCommandOutput}
 * @see {@link CreateNatGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateNatGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To create a NAT gateway
 * ```javascript
 * // This example creates a NAT gateway in subnet subnet-1a2b3c4d and associates an Elastic IP address with the allocation ID eipalloc-37fc1a52 with the NAT gateway.
 * const input = {
 *   "AllocationId": "eipalloc-37fc1a52",
 *   "SubnetId": "subnet-1a2b3c4d"
 * };
 * const command = new CreateNatGatewayCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NatGateway": {
 *     "CreateTime": "2015-12-17T12:45:26.732Z",
 *     "NatGatewayAddresses": [
 *       {
 *         "AllocationId": "eipalloc-37fc1a52"
 *       }
 *     ],
 *     "NatGatewayId": "nat-08d48af2a8e83edfd",
 *     "State": "pending",
 *     "SubnetId": "subnet-1a2b3c4d",
 *     "VpcId": "vpc-1122aabb"
 *   }
 * }
 * *\/
 * // example id: ec2-create-nat-gateway-1
 * ```
 *
 */
export class CreateNatGatewayCommand extends $Command<
  CreateNatGatewayCommandInput,
  CreateNatGatewayCommandOutput,
  EC2ClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: CreateNatGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNatGatewayCommandInput, CreateNatGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNatGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateNatGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateNatGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateNatGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNatGatewayCommandOutput> {
    return deserializeAws_ec2CreateNatGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
