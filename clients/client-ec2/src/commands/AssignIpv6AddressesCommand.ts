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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssignIpv6AddressesRequest, AssignIpv6AddressesResult } from "../models/models_0";
import { de_AssignIpv6AddressesCommand, se_AssignIpv6AddressesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssignIpv6AddressesCommand}.
 */
export interface AssignIpv6AddressesCommandInput extends AssignIpv6AddressesRequest {}
/**
 * @public
 *
 * The output of {@link AssignIpv6AddressesCommand}.
 */
export interface AssignIpv6AddressesCommandOutput extends AssignIpv6AddressesResult, __MetadataBearer {}

/**
 * @public
 * <p>Assigns one or more IPv6 addresses to the specified network interface. You can
 *             specify one or more specific IPv6 addresses, or you can specify the number of IPv6
 *             addresses to be automatically assigned from within the subnet's IPv6 CIDR block range.
 *             You can assign as many IPv6 addresses to a network interface as you can assign private
 *             IPv4 addresses, and the limit varies per instance type. For information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI">IP Addresses Per Network Interface Per Instance Type</a>
 *             in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>You must specify either the IPv6 addresses or the IPv6 address count in the request. </p>
 *          <p>You can optionally use Prefix Delegation on the network interface. You must specify
 *             either the IPV6 Prefix Delegation prefixes, or the IPv6 Prefix Delegation count. For
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html">
 *                 Assigning prefixes to Amazon EC2 network interfaces</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssignIpv6AddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssignIpv6AddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssignIpv6AddressesRequest
 *   Ipv6AddressCount: Number("int"),
 *   Ipv6Addresses: [ // Ipv6AddressList
 *     "STRING_VALUE",
 *   ],
 *   Ipv6PrefixCount: Number("int"),
 *   Ipv6Prefixes: [ // IpPrefixList
 *     "STRING_VALUE",
 *   ],
 *   NetworkInterfaceId: "STRING_VALUE", // required
 * };
 * const command = new AssignIpv6AddressesCommand(input);
 * const response = await client.send(command);
 * // { // AssignIpv6AddressesResult
 * //   AssignedIpv6Addresses: [ // Ipv6AddressList
 * //     "STRING_VALUE",
 * //   ],
 * //   AssignedIpv6Prefixes: [ // IpPrefixList
 * //     "STRING_VALUE",
 * //   ],
 * //   NetworkInterfaceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssignIpv6AddressesCommandInput - {@link AssignIpv6AddressesCommandInput}
 * @returns {@link AssignIpv6AddressesCommandOutput}
 * @see {@link AssignIpv6AddressesCommandInput} for command's `input` shape.
 * @see {@link AssignIpv6AddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class AssignIpv6AddressesCommand extends $Command<
  AssignIpv6AddressesCommandInput,
  AssignIpv6AddressesCommandOutput,
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
  constructor(readonly input: AssignIpv6AddressesCommandInput) {
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
  ): Handler<AssignIpv6AddressesCommandInput, AssignIpv6AddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssignIpv6AddressesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssignIpv6AddressesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "AssignIpv6Addresses",
      },
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
  private serialize(input: AssignIpv6AddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssignIpv6AddressesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssignIpv6AddressesCommandOutput> {
    return de_AssignIpv6AddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
