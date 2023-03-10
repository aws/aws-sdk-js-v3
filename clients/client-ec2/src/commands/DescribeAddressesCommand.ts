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
  DescribeAddressesRequest,
  DescribeAddressesRequestFilterSensitiveLog,
  DescribeAddressesResult,
  DescribeAddressesResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeAddressesCommand,
  serializeAws_ec2DescribeAddressesCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link DescribeAddressesCommand}.
 */
export interface DescribeAddressesCommandInput extends DescribeAddressesRequest {}
/**
 * The output of {@link DescribeAddressesCommand}.
 */
export interface DescribeAddressesCommandOutput extends DescribeAddressesResult, __MetadataBearer {}

/**
 * <p>Describes the specified Elastic IP addresses or all of your Elastic IP addresses.</p>
 *          <p>An Elastic IP address is for use in either the EC2-Classic platform or in a VPC.
 * 				For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP Addresses</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeAddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAddressesCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To describe your Elastic IP addresses
 * ```javascript
 * // This example describes your Elastic IP addresses.
 * const input = undefined;
 * const command = new DescribeAddressesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Addresses": [
 *     {
 *       "Domain": "standard",
 *       "InstanceId": "i-1234567890abcdef0",
 *       "PublicIp": "198.51.100.0"
 *     },
 *     {
 *       "AllocationId": "eipalloc-12345678",
 *       "AssociationId": "eipassoc-12345678",
 *       "Domain": "vpc",
 *       "InstanceId": "i-1234567890abcdef0",
 *       "NetworkInterfaceId": "eni-12345678",
 *       "NetworkInterfaceOwnerId": "123456789012",
 *       "PrivateIpAddress": "10.0.1.241",
 *       "PublicIp": "203.0.113.0"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-addresses-1
 * ```
 *
 * @example To describe your Elastic IP addresses for EC2-VPC
 * ```javascript
 * // This example describes your Elastic IP addresses for use with instances in a VPC.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "domain",
 *       "Values": [
 *         "vpc"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeAddressesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Addresses": [
 *     {
 *       "AllocationId": "eipalloc-12345678",
 *       "AssociationId": "eipassoc-12345678",
 *       "Domain": "vpc",
 *       "InstanceId": "i-1234567890abcdef0",
 *       "NetworkInterfaceId": "eni-12345678",
 *       "NetworkInterfaceOwnerId": "123456789012",
 *       "PrivateIpAddress": "10.0.1.241",
 *       "PublicIp": "203.0.113.0"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-addresses-2
 * ```
 *
 * @example To describe your Elastic IP addresses for EC2-Classic
 * ```javascript
 * // This example describes your Elastic IP addresses for use with instances in EC2-Classic.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "domain",
 *       "Values": [
 *         "standard"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeAddressesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Addresses": [
 *     {
 *       "Domain": "standard",
 *       "InstanceId": "i-1234567890abcdef0",
 *       "PublicIp": "198.51.100.0"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-addresses-3
 * ```
 *
 */
export class DescribeAddressesCommand extends $Command<
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput,
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

  constructor(readonly input: DescribeAddressesCommandInput) {
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
  ): Handler<DescribeAddressesCommandInput, DescribeAddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAddressesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeAddressesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAddressesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAddressesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeAddressesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAddressesCommandOutput> {
    return deserializeAws_ec2DescribeAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
