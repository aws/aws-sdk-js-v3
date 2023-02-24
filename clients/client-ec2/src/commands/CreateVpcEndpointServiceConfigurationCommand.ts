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
  CreateVpcEndpointServiceConfigurationRequest,
  CreateVpcEndpointServiceConfigurationRequestFilterSensitiveLog,
  CreateVpcEndpointServiceConfigurationResult,
  CreateVpcEndpointServiceConfigurationResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2CreateVpcEndpointServiceConfigurationCommand,
  serializeAws_ec2CreateVpcEndpointServiceConfigurationCommand,
} from "../protocols/Aws_ec2";

export interface CreateVpcEndpointServiceConfigurationCommandInput
  extends CreateVpcEndpointServiceConfigurationRequest {}
export interface CreateVpcEndpointServiceConfigurationCommandOutput
  extends CreateVpcEndpointServiceConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Creates a VPC endpoint service to which service consumers (Amazon Web Services accounts,
 *             users, and IAM roles) can connect.</p>
 *          <p>Before you create an endpoint service, you must create one of the following for your service:</p>
 *          <ul>
 *             <li>
 *                <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/">Network Load Balancer</a>.
 *                     Service consumers connect to your service using an interface endpoint.</p>
 *             </li>
 *             <li>
 *                <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/">Gateway Load Balancer</a>.
 *                     Service consumers connect to your service using a Gateway Load Balancer endpoint.</p>
 *             </li>
 *          </ul>
 *          <p>If you set the private DNS name, you must prove that you own the private DNS domain
 *             name.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/">Amazon Web Services PrivateLink
 * 	        Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEndpointServiceConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEndpointServiceConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateVpcEndpointServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateVpcEndpointServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateVpcEndpointServiceConfigurationCommand extends $Command<
  CreateVpcEndpointServiceConfigurationCommandInput,
  CreateVpcEndpointServiceConfigurationCommandOutput,
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

  constructor(readonly input: CreateVpcEndpointServiceConfigurationCommandInput) {
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
  ): Handler<CreateVpcEndpointServiceConfigurationCommandInput, CreateVpcEndpointServiceConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVpcEndpointServiceConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpcEndpointServiceConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpcEndpointServiceConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcEndpointServiceConfigurationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateVpcEndpointServiceConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVpcEndpointServiceConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcEndpointServiceConfigurationCommandOutput> {
    return deserializeAws_ec2CreateVpcEndpointServiceConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
