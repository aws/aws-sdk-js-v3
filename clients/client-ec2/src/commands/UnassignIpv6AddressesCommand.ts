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
  UnassignIpv6AddressesRequest,
  UnassignIpv6AddressesRequestFilterSensitiveLog,
  UnassignIpv6AddressesResult,
  UnassignIpv6AddressesResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2UnassignIpv6AddressesCommand,
  serializeAws_ec2UnassignIpv6AddressesCommand,
} from "../protocols/Aws_ec2";

export interface UnassignIpv6AddressesCommandInput extends UnassignIpv6AddressesRequest {}
export interface UnassignIpv6AddressesCommandOutput extends UnassignIpv6AddressesResult, __MetadataBearer {}

/**
 * <p>Unassigns one or more IPv6 addresses IPv4 Prefix Delegation prefixes from a network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnassignIpv6AddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnassignIpv6AddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UnassignIpv6AddressesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnassignIpv6AddressesCommandInput} for command's `input` shape.
 * @see {@link UnassignIpv6AddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class UnassignIpv6AddressesCommand extends $Command<
  UnassignIpv6AddressesCommandInput,
  UnassignIpv6AddressesCommandOutput,
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

  constructor(readonly input: UnassignIpv6AddressesCommandInput) {
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
  ): Handler<UnassignIpv6AddressesCommandInput, UnassignIpv6AddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UnassignIpv6AddressesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "UnassignIpv6AddressesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnassignIpv6AddressesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UnassignIpv6AddressesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnassignIpv6AddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2UnassignIpv6AddressesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnassignIpv6AddressesCommandOutput> {
    return deserializeAws_ec2UnassignIpv6AddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
