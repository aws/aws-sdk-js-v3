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
  DescribeVpcEndpointServicesRequest,
  DescribeVpcEndpointServicesRequestFilterSensitiveLog,
  DescribeVpcEndpointServicesResult,
  DescribeVpcEndpointServicesResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2DescribeVpcEndpointServicesCommand,
  serializeAws_ec2DescribeVpcEndpointServicesCommand,
} from "../protocols/Aws_ec2";

export interface DescribeVpcEndpointServicesCommandInput extends DescribeVpcEndpointServicesRequest {}
export interface DescribeVpcEndpointServicesCommandOutput extends DescribeVpcEndpointServicesResult, __MetadataBearer {}

/**
 * <p>Describes available services to which you can create a VPC endpoint.</p>
 *          <p>When the service provider and the consumer have different accounts in multiple
 *             Availability Zones, and the consumer views the VPC endpoint service information, the
 *             response only includes the common Availability Zones. For example, when the service
 *             provider account uses <code>us-east-1a</code> and <code>us-east-1c</code> and the
 *             consumer uses <code>us-east-1a</code> and <code>us-east-1b</code>, the response includes
 *             the VPC endpoint services in the common Availability Zone,
 *             <code>us-east-1a</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointServicesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointServicesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcEndpointServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcEndpointServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointServicesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeVpcEndpointServicesCommand extends $Command<
  DescribeVpcEndpointServicesCommandInput,
  DescribeVpcEndpointServicesCommandOutput,
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

  constructor(readonly input: DescribeVpcEndpointServicesCommandInput) {
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
  ): Handler<DescribeVpcEndpointServicesCommandInput, DescribeVpcEndpointServicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVpcEndpointServicesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointServicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcEndpointServicesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcEndpointServicesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVpcEndpointServicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVpcEndpointServicesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointServicesCommandOutput> {
    return deserializeAws_ec2DescribeVpcEndpointServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
