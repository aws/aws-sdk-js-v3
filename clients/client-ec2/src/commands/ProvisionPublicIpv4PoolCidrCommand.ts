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
  ProvisionPublicIpv4PoolCidrRequest,
  ProvisionPublicIpv4PoolCidrRequestFilterSensitiveLog,
  ProvisionPublicIpv4PoolCidrResult,
  ProvisionPublicIpv4PoolCidrResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ProvisionPublicIpv4PoolCidrCommand,
  serializeAws_ec2ProvisionPublicIpv4PoolCidrCommand,
} from "../protocols/Aws_ec2";

export interface ProvisionPublicIpv4PoolCidrCommandInput extends ProvisionPublicIpv4PoolCidrRequest {}
export interface ProvisionPublicIpv4PoolCidrCommandOutput extends ProvisionPublicIpv4PoolCidrResult, __MetadataBearer {}

/**
 * <p>Provision a CIDR to a public IPv4 pool.</p>
 *          <p>For more information about IPAM, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/what-is-it-ipam.html">What is IPAM?</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ProvisionPublicIpv4PoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ProvisionPublicIpv4PoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ProvisionPublicIpv4PoolCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionPublicIpv4PoolCidrCommandInput} for command's `input` shape.
 * @see {@link ProvisionPublicIpv4PoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ProvisionPublicIpv4PoolCidrCommand extends $Command<
  ProvisionPublicIpv4PoolCidrCommandInput,
  ProvisionPublicIpv4PoolCidrCommandOutput,
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

  constructor(readonly input: ProvisionPublicIpv4PoolCidrCommandInput) {
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
  ): Handler<ProvisionPublicIpv4PoolCidrCommandInput, ProvisionPublicIpv4PoolCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ProvisionPublicIpv4PoolCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ProvisionPublicIpv4PoolCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ProvisionPublicIpv4PoolCidrRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ProvisionPublicIpv4PoolCidrResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ProvisionPublicIpv4PoolCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ProvisionPublicIpv4PoolCidrCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ProvisionPublicIpv4PoolCidrCommandOutput> {
    return deserializeAws_ec2ProvisionPublicIpv4PoolCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
