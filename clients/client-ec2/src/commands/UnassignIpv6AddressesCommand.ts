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
import { UnassignIpv6AddressesRequest, UnassignIpv6AddressesResult } from "../models/models_7";
import { de_UnassignIpv6AddressesCommand, se_UnassignIpv6AddressesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UnassignIpv6AddressesCommand}.
 */
export interface UnassignIpv6AddressesCommandInput extends UnassignIpv6AddressesRequest {}
/**
 * @public
 *
 * The output of {@link UnassignIpv6AddressesCommand}.
 */
export interface UnassignIpv6AddressesCommandOutput extends UnassignIpv6AddressesResult, __MetadataBearer {}

/**
 * @public
 * <p>Unassigns one or more IPv6 addresses IPv4 Prefix Delegation prefixes from a network interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnassignIpv6AddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnassignIpv6AddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // UnassignIpv6AddressesRequest
 *   Ipv6Addresses: [ // Ipv6AddressList
 *     "STRING_VALUE",
 *   ],
 *   Ipv6Prefixes: [ // IpPrefixList
 *     "STRING_VALUE",
 *   ],
 *   NetworkInterfaceId: "STRING_VALUE", // required
 * };
 * const command = new UnassignIpv6AddressesCommand(input);
 * const response = await client.send(command);
 * // { // UnassignIpv6AddressesResult
 * //   NetworkInterfaceId: "STRING_VALUE",
 * //   UnassignedIpv6Addresses: [ // Ipv6AddressList
 * //     "STRING_VALUE",
 * //   ],
 * //   UnassignedIpv6Prefixes: [ // IpPrefixList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param UnassignIpv6AddressesCommandInput - {@link UnassignIpv6AddressesCommandInput}
 * @returns {@link UnassignIpv6AddressesCommandOutput}
 * @see {@link UnassignIpv6AddressesCommandInput} for command's `input` shape.
 * @see {@link UnassignIpv6AddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "UnassignIpv6Addresses",
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
  private serialize(input: UnassignIpv6AddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UnassignIpv6AddressesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnassignIpv6AddressesCommandOutput> {
    return de_UnassignIpv6AddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
