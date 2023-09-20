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
  DescribeVpnConnectionsRequest,
  DescribeVpnConnectionsResult,
  DescribeVpnConnectionsResultFilterSensitiveLog,
} from "../models/models_5";
import { de_DescribeVpnConnectionsCommand, se_DescribeVpnConnectionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpnConnectionsCommand}.
 */
export interface DescribeVpnConnectionsCommandInput extends DescribeVpnConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpnConnectionsCommand}.
 */
export interface DescribeVpnConnectionsCommandOutput extends DescribeVpnConnectionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your VPN connections.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpnConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpnConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpnConnectionsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   VpnConnectionIds: [ // VpnConnectionIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeVpnConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpnConnectionsResult
 * //   VpnConnections: [ // VpnConnectionList
 * //     { // VpnConnection
 * //       CustomerGatewayConfiguration: "STRING_VALUE",
 * //       CustomerGatewayId: "STRING_VALUE",
 * //       Category: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted",
 * //       Type: "ipsec.1",
 * //       VpnConnectionId: "STRING_VALUE",
 * //       VpnGatewayId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       CoreNetworkArn: "STRING_VALUE",
 * //       CoreNetworkAttachmentArn: "STRING_VALUE",
 * //       GatewayAssociationState: "associated" || "not-associated" || "associating" || "disassociating",
 * //       Options: { // VpnConnectionOptions
 * //         EnableAcceleration: true || false,
 * //         StaticRoutesOnly: true || false,
 * //         LocalIpv4NetworkCidr: "STRING_VALUE",
 * //         RemoteIpv4NetworkCidr: "STRING_VALUE",
 * //         LocalIpv6NetworkCidr: "STRING_VALUE",
 * //         RemoteIpv6NetworkCidr: "STRING_VALUE",
 * //         OutsideIpAddressType: "STRING_VALUE",
 * //         TransportTransitGatewayAttachmentId: "STRING_VALUE",
 * //         TunnelInsideIpVersion: "ipv4" || "ipv6",
 * //         TunnelOptions: [ // TunnelOptionsList
 * //           { // TunnelOption
 * //             OutsideIpAddress: "STRING_VALUE",
 * //             TunnelInsideCidr: "STRING_VALUE",
 * //             TunnelInsideIpv6Cidr: "STRING_VALUE",
 * //             PreSharedKey: "STRING_VALUE",
 * //             Phase1LifetimeSeconds: Number("int"),
 * //             Phase2LifetimeSeconds: Number("int"),
 * //             RekeyMarginTimeSeconds: Number("int"),
 * //             RekeyFuzzPercentage: Number("int"),
 * //             ReplayWindowSize: Number("int"),
 * //             DpdTimeoutSeconds: Number("int"),
 * //             DpdTimeoutAction: "STRING_VALUE",
 * //             Phase1EncryptionAlgorithms: [ // Phase1EncryptionAlgorithmsList
 * //               { // Phase1EncryptionAlgorithmsListValue
 * //                 Value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Phase2EncryptionAlgorithms: [ // Phase2EncryptionAlgorithmsList
 * //               { // Phase2EncryptionAlgorithmsListValue
 * //                 Value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Phase1IntegrityAlgorithms: [ // Phase1IntegrityAlgorithmsList
 * //               { // Phase1IntegrityAlgorithmsListValue
 * //                 Value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Phase2IntegrityAlgorithms: [ // Phase2IntegrityAlgorithmsList
 * //               { // Phase2IntegrityAlgorithmsListValue
 * //                 Value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             Phase1DHGroupNumbers: [ // Phase1DHGroupNumbersList
 * //               { // Phase1DHGroupNumbersListValue
 * //                 Value: Number("int"),
 * //               },
 * //             ],
 * //             Phase2DHGroupNumbers: [ // Phase2DHGroupNumbersList
 * //               { // Phase2DHGroupNumbersListValue
 * //                 Value: Number("int"),
 * //               },
 * //             ],
 * //             IkeVersions: [ // IKEVersionsList
 * //               { // IKEVersionsListValue
 * //                 Value: "STRING_VALUE",
 * //               },
 * //             ],
 * //             StartupAction: "STRING_VALUE",
 * //             LogOptions: { // VpnTunnelLogOptions
 * //               CloudWatchLogOptions: { // CloudWatchLogOptions
 * //                 LogEnabled: true || false,
 * //                 LogGroupArn: "STRING_VALUE",
 * //                 LogOutputFormat: "STRING_VALUE",
 * //               },
 * //             },
 * //             EnableTunnelLifecycleControl: true || false,
 * //           },
 * //         ],
 * //       },
 * //       Routes: [ // VpnStaticRouteList
 * //         { // VpnStaticRoute
 * //           DestinationCidrBlock: "STRING_VALUE",
 * //           Source: "Static",
 * //           State: "pending" || "available" || "deleting" || "deleted",
 * //         },
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VgwTelemetry: [ // VgwTelemetryList
 * //         { // VgwTelemetry
 * //           AcceptedRouteCount: Number("int"),
 * //           LastStatusChange: new Date("TIMESTAMP"),
 * //           OutsideIpAddress: "STRING_VALUE",
 * //           Status: "UP" || "DOWN",
 * //           StatusMessage: "STRING_VALUE",
 * //           CertificateArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeVpnConnectionsCommandInput - {@link DescribeVpnConnectionsCommandInput}
 * @returns {@link DescribeVpnConnectionsCommandOutput}
 * @see {@link DescribeVpnConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpnConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVpnConnectionsCommand extends $Command<
  DescribeVpnConnectionsCommandInput,
  DescribeVpnConnectionsCommandOutput,
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
  constructor(readonly input: DescribeVpnConnectionsCommandInput) {
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
  ): Handler<DescribeVpnConnectionsCommandInput, DescribeVpnConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVpnConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpnConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeVpnConnectionsResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeVpnConnections",
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
  private serialize(input: DescribeVpnConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVpnConnectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVpnConnectionsCommandOutput> {
    return de_DescribeVpnConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
