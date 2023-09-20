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
  ModifyVpnConnectionOptionsRequest,
  ModifyVpnConnectionOptionsResult,
  ModifyVpnConnectionOptionsResultFilterSensitiveLog,
} from "../models/models_6";
import { de_ModifyVpnConnectionOptionsCommand, se_ModifyVpnConnectionOptionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpnConnectionOptionsCommand}.
 */
export interface ModifyVpnConnectionOptionsCommandInput extends ModifyVpnConnectionOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpnConnectionOptionsCommand}.
 */
export interface ModifyVpnConnectionOptionsCommandOutput extends ModifyVpnConnectionOptionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the connection options for your Site-to-Site VPN connection.</p>
 *          <p>When you modify the VPN connection options, the VPN endpoint IP addresses on the
 *                 Amazon Web Services side do not change, and the tunnel options do not change. Your
 *             VPN connection will be temporarily unavailable for a brief period while the VPN
 *             connection is updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnConnectionOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnConnectionOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVpnConnectionOptionsRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   LocalIpv4NetworkCidr: "STRING_VALUE",
 *   RemoteIpv4NetworkCidr: "STRING_VALUE",
 *   LocalIpv6NetworkCidr: "STRING_VALUE",
 *   RemoteIpv6NetworkCidr: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new ModifyVpnConnectionOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpnConnectionOptionsResult
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
 * @param ModifyVpnConnectionOptionsCommandInput - {@link ModifyVpnConnectionOptionsCommandInput}
 * @returns {@link ModifyVpnConnectionOptionsCommandOutput}
 * @see {@link ModifyVpnConnectionOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnConnectionOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyVpnConnectionOptionsCommand extends $Command<
  ModifyVpnConnectionOptionsCommandInput,
  ModifyVpnConnectionOptionsCommandOutput,
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
  constructor(readonly input: ModifyVpnConnectionOptionsCommandInput) {
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
  ): Handler<ModifyVpnConnectionOptionsCommandInput, ModifyVpnConnectionOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVpnConnectionOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpnConnectionOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ModifyVpnConnectionOptionsResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyVpnConnectionOptions",
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
  private serialize(input: ModifyVpnConnectionOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyVpnConnectionOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpnConnectionOptionsCommandOutput> {
    return de_ModifyVpnConnectionOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
