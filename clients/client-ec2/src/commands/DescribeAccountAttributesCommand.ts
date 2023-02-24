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
  DescribeAccountAttributesRequest,
  DescribeAccountAttributesRequestFilterSensitiveLog,
  DescribeAccountAttributesResult,
  DescribeAccountAttributesResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeAccountAttributesCommand,
  serializeAws_ec2DescribeAccountAttributesCommand,
} from "../protocols/Aws_ec2";

export interface DescribeAccountAttributesCommandInput extends DescribeAccountAttributesRequest {}
export interface DescribeAccountAttributesCommandOutput extends DescribeAccountAttributesResult, __MetadataBearer {}

/**
 * <p>Describes attributes of your Amazon Web Services account. The following are the supported account attributes:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>supported-platforms</code>: Indicates whether your account can launch instances
 *           into EC2-Classic and EC2-VPC, or only into EC2-VPC.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>default-vpc</code>: The ID of the default VPC for your account, or
 *             <code>none</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>max-instances</code>: This attribute is no longer supported. The returned
 *                     value does not reflect your actual vCPU limit for running On-Demand Instances.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#ec2-on-demand-instances-limits">On-Demand Instance Limits</a> in the
 *                         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vpc-max-security-groups-per-interface</code>: The maximum number of security groups
 *           that you can assign to a network interface.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can
 *           allocate for use with EC2-Classic. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vpc-max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can
 *           allocate for use with EC2-VPC.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>We are retiring EC2-Classic on August 15, 2022. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAccountAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAccountAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeAccountAttributesCommand extends $Command<
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
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

  constructor(readonly input: DescribeAccountAttributesCommandInput) {
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
  ): Handler<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeAccountAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountAttributesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeAccountAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountAttributesCommandOutput> {
    return deserializeAws_ec2DescribeAccountAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
