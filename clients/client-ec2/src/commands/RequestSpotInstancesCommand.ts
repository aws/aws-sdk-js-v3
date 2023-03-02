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
  RequestSpotInstancesRequest,
  RequestSpotInstancesRequestFilterSensitiveLog,
  RequestSpotInstancesResult,
  RequestSpotInstancesResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2RequestSpotInstancesCommand,
  serializeAws_ec2RequestSpotInstancesCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link RequestSpotInstancesCommand}.
 */
export interface RequestSpotInstancesCommandInput extends RequestSpotInstancesRequest {}
/**
 * The output of {@link RequestSpotInstancesCommand}.
 */
export interface RequestSpotInstancesCommandOutput extends RequestSpotInstancesResult, __MetadataBearer {}

/**
 * <p>Creates a Spot Instance request.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html">Spot Instance requests</a> in
 *             the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 *          <important>
 *             <p>We strongly discourage using the RequestSpotInstances API because it is a legacy
 *                 API with no planned investment. For options for requesting Spot Instances, see
 *                     <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-best-practices.html#which-spot-request-method-to-use">Which
 *                     is the best Spot request method to use?</a> in the
 *                     <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 *          </important>
 *          <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RequestSpotInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RequestSpotInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RequestSpotInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestSpotInstancesCommandInput} for command's `input` shape.
 * @see {@link RequestSpotInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @example To create a one-time Spot Instance request
 * ```javascript
 * // This example creates a one-time Spot Instance request for five instances in the specified Availability Zone. If your account supports EC2-VPC only, Amazon EC2 launches the instances in the default subnet of the specified Availability Zone. If your account supports EC2-Classic, Amazon EC2 launches the instances in EC2-Classic in the specified Availability Zone.
 * const input = {
 *   "InstanceCount": 5,
 *   "LaunchSpecification": {
 *     "IamInstanceProfile": {
 *       "Arn": "arn:aws:iam::123456789012:instance-profile/my-iam-role"
 *     },
 *     "ImageId": "ami-1a2b3c4d",
 *     "InstanceType": "m3.medium",
 *     "KeyName": "my-key-pair",
 *     "Placement": {
 *       "AvailabilityZone": "us-west-2a"
 *     },
 *     "SecurityGroupIds": [
 *       "sg-1a2b3c4d"
 *     ]
 *   },
 *   "SpotPrice": "0.03",
 *   "Type": "one-time"
 * };
 * const command = new RequestSpotInstancesCommand(input);
 * await client.send(command);
 * // example id: ec2-request-spot-instances-1
 * ```
 *
 * @example To create a one-time Spot Instance request
 * ```javascript
 * // This example command creates a one-time Spot Instance request for five instances in the specified subnet. Amazon EC2 launches the instances in the specified subnet. If the VPC is a nondefault VPC, the instances do not receive a public IP address by default.
 * const input = {
 *   "InstanceCount": 5,
 *   "LaunchSpecification": {
 *     "IamInstanceProfile": {
 *       "Arn": "arn:aws:iam::123456789012:instance-profile/my-iam-role"
 *     },
 *     "ImageId": "ami-1a2b3c4d",
 *     "InstanceType": "m3.medium",
 *     "SecurityGroupIds": [
 *       "sg-1a2b3c4d"
 *     ],
 *     "SubnetId": "subnet-1a2b3c4d"
 *   },
 *   "SpotPrice": "0.050",
 *   "Type": "one-time"
 * };
 * const command = new RequestSpotInstancesCommand(input);
 * await client.send(command);
 * // example id: ec2-request-spot-instances-2
 * ```
 *
 */
export class RequestSpotInstancesCommand extends $Command<
  RequestSpotInstancesCommandInput,
  RequestSpotInstancesCommandOutput,
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

  constructor(readonly input: RequestSpotInstancesCommandInput) {
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
  ): Handler<RequestSpotInstancesCommandInput, RequestSpotInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RequestSpotInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RequestSpotInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RequestSpotInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RequestSpotInstancesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RequestSpotInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RequestSpotInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RequestSpotInstancesCommandOutput> {
    return deserializeAws_ec2RequestSpotInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
