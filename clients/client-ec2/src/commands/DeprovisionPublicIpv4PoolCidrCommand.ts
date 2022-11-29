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
  DeprovisionPublicIpv4PoolCidrRequest,
  DeprovisionPublicIpv4PoolCidrRequestFilterSensitiveLog,
  DeprovisionPublicIpv4PoolCidrResult,
  DeprovisionPublicIpv4PoolCidrResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DeprovisionPublicIpv4PoolCidrCommand,
  serializeAws_ec2DeprovisionPublicIpv4PoolCidrCommand,
} from "../protocols/Aws_ec2";

export interface DeprovisionPublicIpv4PoolCidrCommandInput extends DeprovisionPublicIpv4PoolCidrRequest {}
export interface DeprovisionPublicIpv4PoolCidrCommandOutput
  extends DeprovisionPublicIpv4PoolCidrResult,
    __MetadataBearer {}

/**
 * <p>Deprovision a CIDR from a public IPv4 pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionPublicIpv4PoolCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionPublicIpv4PoolCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeprovisionPublicIpv4PoolCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprovisionPublicIpv4PoolCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionPublicIpv4PoolCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeprovisionPublicIpv4PoolCidrCommand extends $Command<
  DeprovisionPublicIpv4PoolCidrCommandInput,
  DeprovisionPublicIpv4PoolCidrCommandOutput,
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

  constructor(readonly input: DeprovisionPublicIpv4PoolCidrCommandInput) {
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
  ): Handler<DeprovisionPublicIpv4PoolCidrCommandInput, DeprovisionPublicIpv4PoolCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeprovisionPublicIpv4PoolCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeprovisionPublicIpv4PoolCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeprovisionPublicIpv4PoolCidrRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeprovisionPublicIpv4PoolCidrResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeprovisionPublicIpv4PoolCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeprovisionPublicIpv4PoolCidrCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeprovisionPublicIpv4PoolCidrCommandOutput> {
    return deserializeAws_ec2DeprovisionPublicIpv4PoolCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
