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
import {
  ModifyVpnTunnelOptionsRequest,
  ModifyVpnTunnelOptionsRequestFilterSensitiveLog,
  ModifyVpnTunnelOptionsResult,
  ModifyVpnTunnelOptionsResultFilterSensitiveLog,
} from "../models/models_6";
import { de_ModifyVpnTunnelOptionsCommand, se_ModifyVpnTunnelOptionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * // { // ModifyVpnTunnelOptionsResult
 * //   VpnConnection: { // VpnConnection
 * //     CustomerGatewayConfiguration: "STRING_VALUE",
 * //     CustomerGatewayId: "STRING_VALUE",
 * //     Category: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     Type: "ipsec.1",
 * //     VpnConnectionId: "STRING_VALUE",
 * //     VpnGatewayId: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     CoreNetworkArn: "STRING_VALUE",
 * //     CoreNetworkAttachmentArn: "STRING_VALUE",
 * //     GatewayAssociationState: "associated" || "not-associated" || "associating" || "disassociating",
 * //     Options: { // VpnConnectionOptions
 * //       EnableAcceleration: true || false,
 * //       StaticRoutesOnly: true || false,
 * //       LocalIpv4NetworkCidr: "STRING_VALUE",
 * //       RemoteIpv4NetworkCidr: "STRING_VALUE",
 * //       LocalIpv6NetworkCidr: "STRING_VALUE",
 * //       RemoteIpv6NetworkCidr: "STRING_VALUE",
 * //       OutsideIpAddressType: "STRING_VALUE",
 * //       TransportTransitGatewayAttachmentId: "STRING_VALUE",
 * //       TunnelInsideIpVersion: "ipv4" || "ipv6",
 * //       TunnelOptions: [ // TunnelOptionsList
 * //         { // TunnelOption
 * //           OutsideIpAddress: "STRING_VALUE",
 * //           TunnelInsideCidr: "STRING_VALUE",
 * //           TunnelInsideIpv6Cidr: "STRING_VALUE",
 * //           PreSharedKey: "STRING_VALUE",
 * //           Phase1LifetimeSeconds: Number("int"),
 * //           Phase2LifetimeSeconds: Number("int"),
 * //           RekeyMarginTimeSeconds: Number("int"),
 * //           RekeyFuzzPercentage: Number("int"),
 * //           ReplayWindowSize: Number("int"),
 * //           DpdTimeoutSeconds: Number("int"),
 * //           DpdTimeoutAction: "STRING_VALUE",
 * //           Phase1EncryptionAlgorithms: [ // Phase1EncryptionAlgorithmsList
 * //             { // Phase1EncryptionAlgorithmsListValue
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Phase2EncryptionAlgorithms: [ // Phase2EncryptionAlgorithmsList
 * //             { // Phase2EncryptionAlgorithmsListValue
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Phase1IntegrityAlgorithms: [ // Phase1IntegrityAlgorithmsList
 * //             { // Phase1IntegrityAlgorithmsListValue
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Phase2IntegrityAlgorithms: [ // Phase2IntegrityAlgorithmsList
 * //             { // Phase2IntegrityAlgorithmsListValue
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Phase1DHGroupNumbers: [ // Phase1DHGroupNumbersList
 * //             { // Phase1DHGroupNumbersListValue
 * //               Value: Number("int"),
 * //             },
 * //           ],
 * //           Phase2DHGroupNumbers: [ // Phase2DHGroupNumbersList
 * //             { // Phase2DHGroupNumbersListValue
 * //               Value: Number("int"),
 * //             },
 * //           ],
 * //           IkeVersions: [ // IKEVersionsList
 * //             { // IKEVersionsListValue
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           StartupAction: "STRING_VALUE",
 * //           LogOptions: { // VpnTunnelLogOptions
 * //             CloudWatchLogOptions: { // CloudWatchLogOptions
 * //               LogEnabled: true || false,
 * //               LogGroupArn: "STRING_VALUE",
 * //               LogOutputFormat: "STRING_VALUE",
 * //             },
 * //           },
 * //           EnableTunnelLifecycleControl: true || false,
 * //         },
 * //       ],
 * //     },
 * //     Routes: [ // VpnStaticRouteList
 * //       { // VpnStaticRoute
 * //         DestinationCidrBlock: "STRING_VALUE",
 * //         Source: "Static",
 * //         State: "pending" || "available" || "deleting" || "deleted",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VgwTelemetry: [ // VgwTelemetryList
 * //       { // VgwTelemetry
 * //         AcceptedRouteCount: Number("int"),
 * //         LastStatusChange: new Date("TIMESTAMP"),
 * //         OutsideIpAddress: "STRING_VALUE",
 * //         Status: "UP" || "DOWN",
 * //         StatusMessage: "STRING_VALUE",
 * //         CertificateArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyVpnTunnelOptionsCommandInput - {@link ModifyVpnTunnelOptionsCommandInput}
 * @returns {@link ModifyVpnTunnelOptionsCommandOutput}
 * @see {@link ModifyVpnTunnelOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnTunnelOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
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
      inputFilterSensitiveLog: ModifyVpnTunnelOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpnTunnelOptionsResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyVpnTunnelOptions",
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
  private serialize(input: ModifyVpnTunnelOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyVpnTunnelOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVpnTunnelOptionsCommandOutput> {
    return de_ModifyVpnTunnelOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
