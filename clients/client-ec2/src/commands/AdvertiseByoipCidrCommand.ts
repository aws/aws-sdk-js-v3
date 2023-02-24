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
  AdvertiseByoipCidrRequest,
  AdvertiseByoipCidrRequestFilterSensitiveLog,
  AdvertiseByoipCidrResult,
  AdvertiseByoipCidrResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2AdvertiseByoipCidrCommand,
  serializeAws_ec2AdvertiseByoipCidrCommand,
} from "../protocols/Aws_ec2";

export interface AdvertiseByoipCidrCommandInput extends AdvertiseByoipCidrRequest {}
export interface AdvertiseByoipCidrCommandOutput extends AdvertiseByoipCidrResult, __MetadataBearer {}

/**
 * <p>Advertises an IPv4 or IPv6 address range that is provisioned for use with your Amazon Web Services resources through
 *          bring your own IP addresses (BYOIP).</p>
 *          <p>You can perform this operation at most once every 10 seconds, even if you specify different
 *          address ranges each time.</p>
 *          <p>We recommend that you stop advertising the BYOIP CIDR from other locations when you advertise
 *           it from Amazon Web Services. To minimize down time, you can configure your Amazon Web Services resources to use an address from a
 *          BYOIP CIDR before it is advertised, and then simultaneously stop advertising it from the current
 *          location and start advertising it through Amazon Web Services.</p>
 *          <p>It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services
 *          because of BGP propagation delays.</p>
 *          <p>To stop advertising the BYOIP CIDR, use <a>WithdrawByoipCidr</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AdvertiseByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AdvertiseByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AdvertiseByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdvertiseByoipCidrCommandInput} for command's `input` shape.
 * @see {@link AdvertiseByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class AdvertiseByoipCidrCommand extends $Command<
  AdvertiseByoipCidrCommandInput,
  AdvertiseByoipCidrCommandOutput,
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

  constructor(readonly input: AdvertiseByoipCidrCommandInput) {
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
  ): Handler<AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdvertiseByoipCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AdvertiseByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdvertiseByoipCidrRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AdvertiseByoipCidrResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdvertiseByoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AdvertiseByoipCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdvertiseByoipCidrCommandOutput> {
    return deserializeAws_ec2AdvertiseByoipCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
