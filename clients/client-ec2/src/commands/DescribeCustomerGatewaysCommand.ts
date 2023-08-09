// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeCustomerGatewaysRequest, DescribeCustomerGatewaysResult } from "../models/models_3";
import { de_DescribeCustomerGatewaysCommand, se_DescribeCustomerGatewaysCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCustomerGatewaysCommand}.
 */
export interface DescribeCustomerGatewaysCommandInput extends DescribeCustomerGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomerGatewaysCommand}.
 */
export interface DescribeCustomerGatewaysCommandOutput extends DescribeCustomerGatewaysResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your VPN customer gateways.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCustomerGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCustomerGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeCustomerGatewaysRequest
 *   CustomerGatewayIds: [ // CustomerGatewayIdStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeCustomerGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomerGatewaysResult
 * //   CustomerGateways: [ // CustomerGatewayList
 * //     { // CustomerGateway
 * //       BgpAsn: "STRING_VALUE",
 * //       CustomerGatewayId: "STRING_VALUE",
 * //       IpAddress: "STRING_VALUE",
 * //       CertificateArn: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       DeviceName: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCustomerGatewaysCommandInput - {@link DescribeCustomerGatewaysCommandInput}
 * @returns {@link DescribeCustomerGatewaysCommandOutput}
 * @see {@link DescribeCustomerGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomerGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeCustomerGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCustomerGatewaysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCustomerGatewaysCommandOutput> {
    return de_DescribeCustomerGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
