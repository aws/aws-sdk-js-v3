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
import { CreateVpnConnectionRouteRequest } from "../models/models_2";
import { de_CreateVpnConnectionRouteCommand, se_CreateVpnConnectionRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateVpnConnectionRouteCommand}.
 */
export interface CreateVpnConnectionRouteCommandInput extends CreateVpnConnectionRouteRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpnConnectionRouteCommand}.
 */
export interface CreateVpnConnectionRouteCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates a static route associated with a VPN connection between an existing virtual
 *             private gateway and a VPN customer gateway. The static route allows traffic to be routed
 *             from the virtual private gateway to the VPN customer gateway.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpnConnectionRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpnConnectionRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpnConnectionRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   VpnConnectionId: "STRING_VALUE", // required
 * };
 * const command = new CreateVpnConnectionRouteCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateVpnConnectionRouteCommandInput - {@link CreateVpnConnectionRouteCommandInput}
 * @returns {@link CreateVpnConnectionRouteCommandOutput}
 * @see {@link CreateVpnConnectionRouteCommandInput} for command's `input` shape.
 * @see {@link CreateVpnConnectionRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CreateVpnConnectionRouteCommand extends $Command<
  CreateVpnConnectionRouteCommandInput,
  CreateVpnConnectionRouteCommandOutput,
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
  constructor(readonly input: CreateVpnConnectionRouteCommandInput) {
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
  ): Handler<CreateVpnConnectionRouteCommandInput, CreateVpnConnectionRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVpnConnectionRouteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpnConnectionRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CreateVpnConnectionRoute",
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
  private serialize(input: CreateVpnConnectionRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateVpnConnectionRouteCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVpnConnectionRouteCommandOutput> {
    return de_CreateVpnConnectionRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
