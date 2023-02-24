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
  DeprovisionIpamPoolCidrRequest,
  DeprovisionIpamPoolCidrRequestFilterSensitiveLog,
  DeprovisionIpamPoolCidrResult,
  DeprovisionIpamPoolCidrResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DeprovisionIpamPoolCidrCommand,
  serializeAws_ec2DeprovisionIpamPoolCidrCommand,
} from "../protocols/Aws_ec2";

export interface DeprovisionIpamPoolCidrCommandInput extends DeprovisionIpamPoolCidrRequest {}
export interface DeprovisionIpamPoolCidrCommandOutput extends DeprovisionIpamPoolCidrResult, __MetadataBearer {}

/**
 * <p>Deprovision a CIDR provisioned from an IPAM pool. If you deprovision a CIDR from a pool that has a source pool, the CIDR is recycled back into the source pool. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/depro-pool-cidr-ipam.html">Deprovision pool CIDRs</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionIpamPoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionIpamPoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeprovisionIpamPoolCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprovisionIpamPoolCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionIpamPoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeprovisionIpamPoolCidrCommand extends $Command<
  DeprovisionIpamPoolCidrCommandInput,
  DeprovisionIpamPoolCidrCommandOutput,
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

  constructor(readonly input: DeprovisionIpamPoolCidrCommandInput) {
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
  ): Handler<DeprovisionIpamPoolCidrCommandInput, DeprovisionIpamPoolCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeprovisionIpamPoolCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeprovisionIpamPoolCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeprovisionIpamPoolCidrRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeprovisionIpamPoolCidrResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeprovisionIpamPoolCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeprovisionIpamPoolCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeprovisionIpamPoolCidrCommandOutput> {
    return deserializeAws_ec2DeprovisionIpamPoolCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
