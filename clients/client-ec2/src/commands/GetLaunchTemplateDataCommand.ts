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
  GetLaunchTemplateDataRequest,
  GetLaunchTemplateDataRequestFilterSensitiveLog,
  GetLaunchTemplateDataResult,
  GetLaunchTemplateDataResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetLaunchTemplateDataCommand,
  serializeAws_ec2GetLaunchTemplateDataCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link GetLaunchTemplateDataCommand}.
 */
export interface GetLaunchTemplateDataCommandInput extends GetLaunchTemplateDataRequest {}
/**
 * The output of {@link GetLaunchTemplateDataCommand}.
 */
export interface GetLaunchTemplateDataCommandOutput extends GetLaunchTemplateDataResult, __MetadataBearer {}

/**
 * <p>Retrieves the configuration data of the specified instance. You can use this data to
 *             create a launch template. </p>
 *          <p>This action calls on other describe actions to get instance information. Depending on
 *             your instance configuration, you may need to allow the following actions in your IAM
 *             policy: <code>DescribeSpotInstanceRequests</code>,
 *                 <code>DescribeInstanceCreditSpecifications</code>, <code>DescribeVolumes</code>,
 *                 <code>DescribeInstanceAttribute</code>, and <code>DescribeElasticGpus</code>. Or,
 *             you can allow <code>describe*</code> depending on your instance requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetLaunchTemplateDataCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetLaunchTemplateDataCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetLaunchTemplateDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchTemplateDataCommandInput} for command's `input` shape.
 * @see {@link GetLaunchTemplateDataCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To get the launch template data for an instance
 * ```javascript
 * // This example gets the launch template data for the specified instance.
 * const input = {
 *   "InstanceId": "0123d646e8048babc"
 * };
 * const command = new GetLaunchTemplateDataCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LaunchTemplateData": {
 *     "BlockDeviceMappings": [
 *       {
 *         "DeviceName": "/dev/xvda",
 *         "Ebs": {
 *           "DeleteOnTermination": true,
 *           "Encrypted": false,
 *           "Iops": 100,
 *           "SnapshotId": "snap-02594938353ef77d3",
 *           "VolumeSize": 8,
 *           "VolumeType": "gp2"
 *         }
 *       }
 *     ],
 *     "EbsOptimized": false,
 *     "ImageId": "ami-32cf7b4a",
 *     "InstanceType": "t2.medium",
 *     "KeyName": "my-key-pair",
 *     "Monitoring": {
 *       "Enabled": false
 *     },
 *     "NetworkInterfaces": [
 *       {
 *         "AssociatePublicIpAddress": false,
 *         "DeleteOnTermination": true,
 *         "Description": "",
 *         "DeviceIndex": 0,
 *         "Groups": [
 *           "sg-d14e1bb4"
 *         ],
 *         "Ipv6Addresses": [],
 *         "NetworkInterfaceId": "eni-4338b5a9",
 *         "PrivateIpAddress": "10.0.3.233",
 *         "PrivateIpAddresses": [
 *           {
 *             "Primary": true,
 *             "PrivateIpAddress": "10.0.3.233"
 *           }
 *         ],
 *         "SubnetId": "subnet-5264e837"
 *       }
 *     ],
 *     "Placement": {
 *       "AvailabilityZone": "us-east-2b",
 *       "GroupName": "",
 *       "Tenancy": "default"
 *     }
 *   }
 * }
 * *\/
 * // example id: to-get-the-launch-template-data-for-an-instance--1529356515702
 * ```
 *
 */
export class GetLaunchTemplateDataCommand extends $Command<
  GetLaunchTemplateDataCommandInput,
  GetLaunchTemplateDataCommandOutput,
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

  constructor(readonly input: GetLaunchTemplateDataCommandInput) {
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
  ): Handler<GetLaunchTemplateDataCommandInput, GetLaunchTemplateDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLaunchTemplateDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetLaunchTemplateDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLaunchTemplateDataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLaunchTemplateDataResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLaunchTemplateDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetLaunchTemplateDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLaunchTemplateDataCommandOutput> {
    return deserializeAws_ec2GetLaunchTemplateDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
