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
  DescribeInstanceAttributeRequest,
  DescribeInstanceAttributeRequestFilterSensitiveLog,
  InstanceAttribute,
  InstanceAttributeFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeInstanceAttributeCommand,
  serializeAws_ec2DescribeInstanceAttributeCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link DescribeInstanceAttributeCommand}.
 */
export interface DescribeInstanceAttributeCommandInput extends DescribeInstanceAttributeRequest {}
/**
 * The output of {@link DescribeInstanceAttributeCommand}.
 */
export interface DescribeInstanceAttributeCommandOutput extends InstanceAttribute, __MetadataBearer {}

/**
 * <p>Describes the specified attribute of the specified instance. You can specify only one
 *             attribute at a time. Valid attribute values are: <code>instanceType</code> |
 *                 <code>kernel</code> | <code>ramdisk</code> | <code>userData</code> |
 *                 <code>disableApiTermination</code> | <code>instanceInitiatedShutdownBehavior</code>
 *             | <code>rootDeviceName</code> | <code>blockDeviceMapping</code> |
 *                 <code>productCodes</code> | <code>sourceDestCheck</code> | <code>groupSet</code> |
 *                 <code>ebsOptimized</code> | <code>sriovNetSupport</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @example To describe the instance type
 * ```javascript
 * // This example describes the instance type of the specified instance.
 * //
 * const input = {
 *   "Attribute": "instanceType",
 *   "InstanceId": "i-1234567890abcdef0"
 * };
 * const command = new DescribeInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceId": "i-1234567890abcdef0",
 *   "InstanceType": {
 *     "Value": "t1.micro"
 *   }
 * }
 * *\/
 * // example id: to-describe-the-instance-type-1472712432132
 * ```
 *
 * @example To describe the disableApiTermination attribute
 * ```javascript
 * // This example describes the ``disableApiTermination`` attribute of the specified instance.
 * //
 * const input = {
 *   "Attribute": "disableApiTermination",
 *   "InstanceId": "i-1234567890abcdef0"
 * };
 * const command = new DescribeInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DisableApiTermination": {
 *     "Value": "false"
 *   },
 *   "InstanceId": "i-1234567890abcdef0"
 * }
 * *\/
 * // example id: to-describe-the-disableapitermination-attribute-1472712533466
 * ```
 *
 * @example To describe the block device mapping for an instance
 * ```javascript
 * // This example describes the ``blockDeviceMapping`` attribute of the specified instance.
 * //
 * const input = {
 *   "Attribute": "blockDeviceMapping",
 *   "InstanceId": "i-1234567890abcdef0"
 * };
 * const command = new DescribeInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "BlockDeviceMappings": [
 *     {
 *       "DeviceName": "/dev/sda1",
 *       "Ebs": {
 *         "AttachTime": "2013-05-17T22:42:34.000Z",
 *         "DeleteOnTermination": true,
 *         "Status": "attached",
 *         "VolumeId": "vol-049df61146c4d7901"
 *       }
 *     },
 *     {
 *       "DeviceName": "/dev/sdf",
 *       "Ebs": {
 *         "AttachTime": "2013-09-10T23:07:00.000Z",
 *         "DeleteOnTermination": false,
 *         "Status": "attached",
 *         "VolumeId": "vol-049df61146c4d7901"
 *       }
 *     }
 *   ],
 *   "InstanceId": "i-1234567890abcdef0"
 * }
 * *\/
 * // example id: to-describe-the-block-device-mapping-for-an-instance-1472712645423
 * ```
 *
 */
export class DescribeInstanceAttributeCommand extends $Command<
  DescribeInstanceAttributeCommandInput,
  DescribeInstanceAttributeCommandOutput,
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

  constructor(readonly input: DescribeInstanceAttributeCommandInput) {
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
  ): Handler<DescribeInstanceAttributeCommandInput, DescribeInstanceAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceAttributeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InstanceAttributeFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeInstanceAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceAttributeCommandOutput> {
    return deserializeAws_ec2DescribeInstanceAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
