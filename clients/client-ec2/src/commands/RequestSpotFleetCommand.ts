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
import {
  RequestSpotFleetRequest,
  RequestSpotFleetRequestFilterSensitiveLog,
  RequestSpotFleetResponse,
  RequestSpotFleetResponseFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2RequestSpotFleetCommand,
  serializeAws_ec2RequestSpotFleetCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link RequestSpotFleetCommand}.
 */
export interface RequestSpotFleetCommandInput extends RequestSpotFleetRequest {}
/**
 * The output of {@link RequestSpotFleetCommand}.
 */
export interface RequestSpotFleetCommandOutput extends RequestSpotFleetResponse, __MetadataBearer {}

/**
 * <p>Creates a Spot Fleet request.</p>
 *          <p>The Spot Fleet request specifies the total target capacity and the On-Demand target
 *             capacity. Amazon EC2 calculates the difference between the total capacity and On-Demand
 *             capacity, and launches the difference as Spot capacity.</p>
 *          <p>You can submit a single request that includes multiple launch specifications that vary
 *             by instance type, AMI, Availability Zone, or subnet.</p>
 *          <p>By default, the Spot Fleet requests Spot Instances in the Spot Instance pool where the
 *             price per unit is the lowest. Each launch specification can include its own instance
 *             weighting that reflects the value of the instance type to your application
 *             workload.</p>
 *          <p>Alternatively, you can specify that the Spot Fleet distribute the target capacity
 *             across the Spot pools included in its launch specifications. By ensuring that the Spot
 *             Instances in your Spot Fleet are in different Spot pools, you can improve the
 *             availability of your fleet.</p>
 *          <p>You can specify tags for the Spot Fleet request and instances launched by the fleet.
 *             You cannot tag other resource types in a Spot Fleet request because only the
 *                 <code>spot-fleet-request</code> and <code>instance</code> resource types are
 *             supported.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-requests.html">Spot Fleet requests</a>
 *             in the <i>Amazon EC2 User Guide</i>.</p>
 *          <important>
 *             <p>We strongly discourage using the RequestSpotFleet API because it is a legacy
 *                 API with no planned investment. For options for requesting Spot Instances, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html#which-spot-request-method-to-use">Which
 *                     is the best Spot request method to use?</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RequestSpotFleetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RequestSpotFleetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RequestSpotFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestSpotFleetCommandInput} for command's `input` shape.
 * @see {@link RequestSpotFleetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To request a Spot fleet in the subnet with the lowest price
 * ```javascript
 * // This example creates a Spot fleet request with two launch specifications that differ only by subnet. The Spot fleet launches the instances in the specified subnet with the lowest price. If the instances are launched in a default VPC, they receive a public IP address by default. If the instances are launched in a nondefault VPC, they do not receive a public IP address by default. Note that you can't specify different subnets from the same Availability Zone in a Spot fleet request.
 * const input = {
 *   "SpotFleetRequestConfig": {
 *     "IamFleetRole": "arn:aws:iam::123456789012:role/my-spot-fleet-role",
 *     "LaunchSpecifications": [
 *       {
 *         "IamInstanceProfile": {
 *           "Arn": "arn:aws:iam::123456789012:instance-profile/my-iam-role"
 *         },
 *         "ImageId": "ami-1a2b3c4d",
 *         "InstanceType": "m3.medium",
 *         "KeyName": "my-key-pair",
 *         "SecurityGroups": [
 *           {
 *             "GroupId": "sg-1a2b3c4d"
 *           }
 *         ],
 *         "SubnetId": "subnet-1a2b3c4d, subnet-3c4d5e6f"
 *       }
 *     ],
 *     "SpotPrice": "0.04",
 *     "TargetCapacity": 2
 *   }
 * };
 * const command = new RequestSpotFleetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 * }
 * *\/
 * // example id: ec2-request-spot-fleet-1
 * ```
 *
 * @example To request a Spot fleet in the Availability Zone with the lowest price
 * ```javascript
 * // This example creates a Spot fleet request with two launch specifications that differ only by Availability Zone. The Spot fleet launches the instances in the specified Availability Zone with the lowest price. If your account supports EC2-VPC only, Amazon EC2 launches the Spot instances in the default subnet of the Availability Zone. If your account supports EC2-Classic, Amazon EC2 launches the instances in EC2-Classic in the Availability Zone.
 * const input = {
 *   "SpotFleetRequestConfig": {
 *     "IamFleetRole": "arn:aws:iam::123456789012:role/my-spot-fleet-role",
 *     "LaunchSpecifications": [
 *       {
 *         "IamInstanceProfile": {
 *           "Arn": "arn:aws:iam::123456789012:instance-profile/my-iam-role"
 *         },
 *         "ImageId": "ami-1a2b3c4d",
 *         "InstanceType": "m3.medium",
 *         "KeyName": "my-key-pair",
 *         "Placement": {
 *           "AvailabilityZone": "us-west-2a, us-west-2b"
 *         },
 *         "SecurityGroups": [
 *           {
 *             "GroupId": "sg-1a2b3c4d"
 *           }
 *         ]
 *       }
 *     ],
 *     "SpotPrice": "0.04",
 *     "TargetCapacity": 2
 *   }
 * };
 * const command = new RequestSpotFleetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 * }
 * *\/
 * // example id: ec2-request-spot-fleet-2
 * ```
 *
 * @example To launch Spot instances in a subnet and assign them public IP addresses
 * ```javascript
 * // This example assigns public addresses to instances launched in a nondefault VPC. Note that when you specify a network interface, you must include the subnet ID and security group ID using the network interface.
 * const input = {
 *   "SpotFleetRequestConfig": {
 *     "IamFleetRole": "arn:aws:iam::123456789012:role/my-spot-fleet-role",
 *     "LaunchSpecifications": [
 *       {
 *         "IamInstanceProfile": {
 *           "Arn": "arn:aws:iam::880185128111:instance-profile/my-iam-role"
 *         },
 *         "ImageId": "ami-1a2b3c4d",
 *         "InstanceType": "m3.medium",
 *         "KeyName": "my-key-pair",
 *         "NetworkInterfaces": [
 *           {
 *             "AssociatePublicIpAddress": true,
 *             "DeviceIndex": 0,
 *             "Groups": [
 *               "sg-1a2b3c4d"
 *             ],
 *             "SubnetId": "subnet-1a2b3c4d"
 *           }
 *         ]
 *       }
 *     ],
 *     "SpotPrice": "0.04",
 *     "TargetCapacity": 2
 *   }
 * };
 * const command = new RequestSpotFleetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 * }
 * *\/
 * // example id: ec2-request-spot-fleet-3
 * ```
 *
 * @example To request a Spot fleet using the diversified allocation strategy
 * ```javascript
 * // This example creates a Spot fleet request that launches 30 instances using the diversified allocation strategy. The launch specifications differ by instance type. The Spot fleet distributes the instances across the launch specifications such that there are 10 instances of each type.
 * const input = {
 *   "SpotFleetRequestConfig": {
 *     "AllocationStrategy": "diversified",
 *     "IamFleetRole": "arn:aws:iam::123456789012:role/my-spot-fleet-role",
 *     "LaunchSpecifications": [
 *       {
 *         "ImageId": "ami-1a2b3c4d",
 *         "InstanceType": "c4.2xlarge",
 *         "SubnetId": "subnet-1a2b3c4d"
 *       },
 *       {
 *         "ImageId": "ami-1a2b3c4d",
 *         "InstanceType": "m3.2xlarge",
 *         "SubnetId": "subnet-1a2b3c4d"
 *       },
 *       {
 *         "ImageId": "ami-1a2b3c4d",
 *         "InstanceType": "r3.2xlarge",
 *         "SubnetId": "subnet-1a2b3c4d"
 *       }
 *     ],
 *     "SpotPrice": "0.70",
 *     "TargetCapacity": 30
 *   }
 * };
 * const command = new RequestSpotFleetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 * }
 * *\/
 * // example id: ec2-request-spot-fleet-4
 * ```
 *
 */
export class RequestSpotFleetCommand extends $Command<
  RequestSpotFleetCommandInput,
  RequestSpotFleetCommandOutput,
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

  constructor(readonly input: RequestSpotFleetCommandInput) {
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
  ): Handler<RequestSpotFleetCommandInput, RequestSpotFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RequestSpotFleetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RequestSpotFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RequestSpotFleetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RequestSpotFleetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RequestSpotFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RequestSpotFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RequestSpotFleetCommandOutput> {
    return deserializeAws_ec2RequestSpotFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
