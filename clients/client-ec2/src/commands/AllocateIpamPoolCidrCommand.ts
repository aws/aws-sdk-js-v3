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
  AllocateIpamPoolCidrRequest,
  AllocateIpamPoolCidrRequestFilterSensitiveLog,
  AllocateIpamPoolCidrResult,
  AllocateIpamPoolCidrResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AllocateIpamPoolCidrCommand,
  serializeAws_ec2AllocateIpamPoolCidrCommand,
} from "../protocols/Aws_ec2";

export interface AllocateIpamPoolCidrCommandInput extends AllocateIpamPoolCidrRequest {}
export interface AllocateIpamPoolCidrCommandOutput extends AllocateIpamPoolCidrResult, __MetadataBearer {}

/**
 * <p>Allocate a CIDR from an IPAM pool. In IPAM, an allocation is a CIDR assignment from an IPAM pool to another IPAM pool or to a resource. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/allocate-cidrs-ipam.html">Allocate CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AllocateIpamPoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AllocateIpamPoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AllocateIpamPoolCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AllocateIpamPoolCidrCommandInput} for command's `input` shape.
 * @see {@link AllocateIpamPoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AllocateIpamPoolCidrCommand extends $Command<
  AllocateIpamPoolCidrCommandInput,
  AllocateIpamPoolCidrCommandOutput,
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

  constructor(readonly input: AllocateIpamPoolCidrCommandInput) {
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
  ): Handler<AllocateIpamPoolCidrCommandInput, AllocateIpamPoolCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AllocateIpamPoolCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AllocateIpamPoolCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AllocateIpamPoolCidrRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AllocateIpamPoolCidrResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AllocateIpamPoolCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AllocateIpamPoolCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AllocateIpamPoolCidrCommandOutput> {
    return deserializeAws_ec2AllocateIpamPoolCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
