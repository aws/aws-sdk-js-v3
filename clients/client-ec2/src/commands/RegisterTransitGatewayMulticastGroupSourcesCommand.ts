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
import {
  RegisterTransitGatewayMulticastGroupSourcesRequest,
  RegisterTransitGatewayMulticastGroupSourcesResult,
} from "../models/models_6";
import {
  de_RegisterTransitGatewayMulticastGroupSourcesCommand,
  se_RegisterTransitGatewayMulticastGroupSourcesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterTransitGatewayMulticastGroupSourcesCommand}.
 */
export interface RegisterTransitGatewayMulticastGroupSourcesCommandInput
  extends RegisterTransitGatewayMulticastGroupSourcesRequest {}
/**
 * @public
 *
 * The output of {@link RegisterTransitGatewayMulticastGroupSourcesCommand}.
 */
export interface RegisterTransitGatewayMulticastGroupSourcesCommandOutput
  extends RegisterTransitGatewayMulticastGroupSourcesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Registers sources (network interfaces) with the specified  transit gateway multicast group.</p>
 *          <p>A multicast source is a network interface attached to a supported instance that sends
 *             multicast traffic. For information about supported instances, see <a href="https://docs.aws.amazon.com/vpc/latest/tgw/transit-gateway-limits.html#multicast-limits">Multicast
 *                 Considerations</a> in <i>Amazon VPC Transit Gateways</i>.</p>
 *          <p>After you add the source, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SearchTransitGatewayMulticastGroups.html">SearchTransitGatewayMulticastGroups</a> to verify that the source was added to the multicast
 *             group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RegisterTransitGatewayMulticastGroupSourcesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RegisterTransitGatewayMulticastGroupSourcesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RegisterTransitGatewayMulticastGroupSourcesRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE", // required
 *   GroupIpAddress: "STRING_VALUE",
 *   NetworkInterfaceIds: [ // TransitGatewayNetworkInterfaceIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new RegisterTransitGatewayMulticastGroupSourcesCommand(input);
 * const response = await client.send(command);
 * // { // RegisterTransitGatewayMulticastGroupSourcesResult
 * //   RegisteredMulticastGroupSources: { // TransitGatewayMulticastRegisteredGroupSources
 * //     TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //     RegisteredNetworkInterfaceIds: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     GroupIpAddress: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RegisterTransitGatewayMulticastGroupSourcesCommandInput - {@link RegisterTransitGatewayMulticastGroupSourcesCommandInput}
 * @returns {@link RegisterTransitGatewayMulticastGroupSourcesCommandOutput}
 * @see {@link RegisterTransitGatewayMulticastGroupSourcesCommandInput} for command's `input` shape.
 * @see {@link RegisterTransitGatewayMulticastGroupSourcesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class RegisterTransitGatewayMulticastGroupSourcesCommand extends $Command<
  RegisterTransitGatewayMulticastGroupSourcesCommandInput,
  RegisterTransitGatewayMulticastGroupSourcesCommandOutput,
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
  constructor(readonly input: RegisterTransitGatewayMulticastGroupSourcesCommandInput) {
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
  ): Handler<
    RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    RegisterTransitGatewayMulticastGroupSourcesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        RegisterTransitGatewayMulticastGroupSourcesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RegisterTransitGatewayMulticastGroupSourcesCommand";
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
  private serialize(
    input: RegisterTransitGatewayMulticastGroupSourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RegisterTransitGatewayMulticastGroupSourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterTransitGatewayMulticastGroupSourcesCommandOutput> {
    return de_RegisterTransitGatewayMulticastGroupSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
