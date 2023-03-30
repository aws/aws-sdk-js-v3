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
import { ModifyVpnTunnelOptionsRequest, ModifyVpnTunnelOptionsResult } from "../models/models_6";
import {
  deserializeAws_ec2ModifyVpnTunnelOptionsCommand,
  serializeAws_ec2ModifyVpnTunnelOptionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link ModifyVpnTunnelOptionsCommand}.
 */
export interface ModifyVpnTunnelOptionsCommandInput extends ModifyVpnTunnelOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpnTunnelOptionsCommand}.
 */
export interface ModifyVpnTunnelOptionsCommandOutput extends ModifyVpnTunnelOptionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the options for a VPN tunnel in an Amazon Web Services Site-to-Site VPN connection. You can modify
 *             multiple options for a tunnel in a single request, but you can only modify one tunnel at
 *             a time. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNTunnels.html">Site-to-Site VPN tunnel options for your Site-to-Site VPN
 *                 connection</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnTunnelOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnTunnelOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVpnTunnelOptionsRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   VpnTunnelOutsideIpAddress: "STRING_VALUE", // required
 *   TunnelOptions: { // ModifyVpnTunnelOptionsSpecification
 *     TunnelInsideCidr: "STRING_VALUE",
 *     TunnelInsideIpv6Cidr: "STRING_VALUE",
 *     PreSharedKey: "STRING_VALUE",
 *     Phase1LifetimeSeconds: Number("int"),
 *     Phase2LifetimeSeconds: Number("int"),
 *     RekeyMarginTimeSeconds: Number("int"),
 *     RekeyFuzzPercentage: Number("int"),
 *     ReplayWindowSize: Number("int"),
 *     DPDTimeoutSeconds: Number("int"),
 *     DPDTimeoutAction: "STRING_VALUE",
 *     Phase1EncryptionAlgorithms: [ // Phase1EncryptionAlgorithmsRequestList
 *       { // Phase1EncryptionAlgorithmsRequestListValue
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     Phase2EncryptionAlgorithms: [ // Phase2EncryptionAlgorithmsRequestList
 *       { // Phase2EncryptionAlgorithmsRequestListValue
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     Phase1IntegrityAlgorithms: [ // Phase1IntegrityAlgorithmsRequestList
 *       { // Phase1IntegrityAlgorithmsRequestListValue
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     Phase2IntegrityAlgorithms: [ // Phase2IntegrityAlgorithmsRequestList
 *       { // Phase2IntegrityAlgorithmsRequestListValue
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     Phase1DHGroupNumbers: [ // Phase1DHGroupNumbersRequestList
 *       { // Phase1DHGroupNumbersRequestListValue
 *         Value: Number("int"),
 *       },
 *     ],
 *     Phase2DHGroupNumbers: [ // Phase2DHGroupNumbersRequestList
 *       { // Phase2DHGroupNumbersRequestListValue
 *         Value: Number("int"),
 *       },
 *     ],
 *     IKEVersions: [ // IKEVersionsRequestList
 *       { // IKEVersionsRequestListValue
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     StartupAction: "STRING_VALUE",
 *     LogOptions: { // VpnTunnelLogOptionsSpecification
 *       CloudWatchLogOptions: { // CloudWatchLogOptionsSpecification
 *         LogEnabled: true || false,
 *         LogGroupArn: "STRING_VALUE",
 *         LogOutputFormat: "STRING_VALUE",
 *       },
 *     },
 *     EnableTunnelLifecycleControl: true || false,
 *   },
 *   DryRun: true || false,
 *   SkipTunnelReplacement: true || false,
 * };
 * const command = new ModifyVpnTunnelOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyVpnTunnelOptionsCommandInput - {@link ModifyVpnTunnelOptionsCommandInput}
 * @returns {@link ModifyVpnTunnelOptionsCommandOutput}
 * @see {@link ModifyVpnTunnelOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnTunnelOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class ModifyVpnTunnelOptionsCommand extends $Command<
  ModifyVpnTunnelOptionsCommandInput,
  ModifyVpnTunnelOptionsCommandOutput,
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
  constructor(readonly input: ModifyVpnTunnelOptionsCommandInput) {
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
  ): Handler<ModifyVpnTunnelOptionsCommandInput, ModifyVpnTunnelOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVpnTunnelOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpnTunnelOptionsCommand";
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
  private serialize(input: ModifyVpnTunnelOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpnTunnelOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVpnTunnelOptionsCommandOutput> {
    return deserializeAws_ec2ModifyVpnTunnelOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
