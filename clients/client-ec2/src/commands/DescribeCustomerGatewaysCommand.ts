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
  DescribeCustomerGatewaysRequest,
  DescribeCustomerGatewaysRequestFilterSensitiveLog,
  DescribeCustomerGatewaysResult,
  DescribeCustomerGatewaysResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeCustomerGatewaysCommand,
  serializeAws_ec2DescribeCustomerGatewaysCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link DescribeCustomerGatewaysCommand}.
 */
export interface DescribeCustomerGatewaysCommandInput extends DescribeCustomerGatewaysRequest {}
/**
 * The output of {@link DescribeCustomerGatewaysCommand}.
 */
export interface DescribeCustomerGatewaysCommandOutput extends DescribeCustomerGatewaysResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your VPN customer gateways.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCustomerGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCustomerGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeCustomerGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomerGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomerGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To describe a customer gateway
 * ```javascript
 * // This example describes the specified customer gateway.
 * const input = {
 *   "CustomerGatewayIds": [
 *     "cgw-0e11f167"
 *   ]
 * };
 * const command = new DescribeCustomerGatewaysCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CustomerGateways": [
 *     {
 *       "BgpAsn": "65534",
 *       "CustomerGatewayId": "cgw-0e11f167",
 *       "IpAddress": "12.1.2.3",
 *       "State": "available",
 *       "Type": "ipsec.1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-customer-gateways-1
 * ```
 *
 */
export class DescribeCustomerGatewaysCommand extends $Command<
  DescribeCustomerGatewaysCommandInput,
  DescribeCustomerGatewaysCommandOutput,
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

  constructor(readonly input: DescribeCustomerGatewaysCommandInput) {
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
  ): Handler<DescribeCustomerGatewaysCommandInput, DescribeCustomerGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCustomerGatewaysCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeCustomerGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCustomerGatewaysRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeCustomerGatewaysResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCustomerGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeCustomerGatewaysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCustomerGatewaysCommandOutput> {
    return deserializeAws_ec2DescribeCustomerGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
