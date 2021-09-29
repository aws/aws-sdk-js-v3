import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeVpcEndpointServicePermissionsRequest,
  DescribeVpcEndpointServicePermissionsResult,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeVpcEndpointServicePermissionsCommand,
  serializeAws_ec2DescribeVpcEndpointServicePermissionsCommand,
} from "../protocols/Aws_ec2";
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

export interface DescribeVpcEndpointServicePermissionsCommandInput
  extends DescribeVpcEndpointServicePermissionsRequest {}
export interface DescribeVpcEndpointServicePermissionsCommandOutput
  extends DescribeVpcEndpointServicePermissionsResult,
    __MetadataBearer {}

/**
 * <p>Describes the principals (service consumers) that are permitted to discover your VPC
 *             endpoint service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointServicePermissionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointServicePermissionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcEndpointServicePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcEndpointServicePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointServicePermissionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeVpcEndpointServicePermissionsCommand extends $Command<
  DescribeVpcEndpointServicePermissionsCommandInput,
  DescribeVpcEndpointServicePermissionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVpcEndpointServicePermissionsCommandInput) {
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
  ): Handler<DescribeVpcEndpointServicePermissionsCommandInput, DescribeVpcEndpointServicePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointServicePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVpcEndpointServicePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVpcEndpointServicePermissionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeVpcEndpointServicePermissionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeVpcEndpointServicePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointServicePermissionsCommandOutput> {
    return deserializeAws_ec2DescribeVpcEndpointServicePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
