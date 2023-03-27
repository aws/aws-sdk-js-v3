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
import { CreateVpnConnectionRequest, CreateVpnConnectionResult } from "../models/models_2";
import {
  deserializeAws_ec2CreateVpnConnectionCommand,
  serializeAws_ec2CreateVpnConnectionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link CreateVpnConnectionCommand}.
 */
export interface CreateVpnConnectionCommandInput extends CreateVpnConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpnConnectionCommand}.
 */
export interface CreateVpnConnectionCommandOutput extends CreateVpnConnectionResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a VPN connection between an existing virtual private gateway or transit
 *             gateway and a customer gateway. The supported connection type is
 *             <code>ipsec.1</code>.</p>
 *          <p>The response includes information that you need to give to your network administrator
 *             to configure your customer gateway.</p>
 *          <important>
 *             <p>We strongly recommend that you use HTTPS when calling this operation because the
 *                 response contains sensitive cryptographic information for configuring your customer
 *                 gateway device.</p>
 *          </important>
 *          <p>If you decide to shut down your VPN connection for any reason and later create a new
 *             VPN connection, you must reconfigure your customer gateway with the new information
 *             returned from this call.</p>
 *          <p>This is an idempotent operation. If you perform the operation more than once, Amazon
 *             EC2 doesn't return an error.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpnConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpnConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpnConnectionRequest
 *   CustomerGatewayId: "STRING_VALUE", // required
 *   Type: "STRING_VALUE", // required
 *   VpnGatewayId: "STRING_VALUE",
 *   TransitGatewayId: "STRING_VALUE",
 *   DryRun: true || false,
 *   Options: { // VpnConnectionOptionsSpecification
 *     EnableAcceleration: true || false,
 *     StaticRoutesOnly: true || false,
 *     TunnelInsideIpVersion: "ipv4" || "ipv6",
 *     TunnelOptions: [ // VpnTunnelOptionsSpecificationsList
 *       { // VpnTunnelOptionsSpecification
 *         TunnelInsideCidr: "STRING_VALUE",
 *         TunnelInsideIpv6Cidr: "STRING_VALUE",
 *         PreSharedKey: "STRING_VALUE",
 *         Phase1LifetimeSeconds: Number("int"),
 *         Phase2LifetimeSeconds: Number("int"),
 *         RekeyMarginTimeSeconds: Number("int"),
 *         RekeyFuzzPercentage: Number("int"),
 *         ReplayWindowSize: Number("int"),
 *         DPDTimeoutSeconds: Number("int"),
 *         DPDTimeoutAction: "STRING_VALUE",
 *         Phase1EncryptionAlgorithms: [ // Phase1EncryptionAlgorithmsRequestList
 *           { // Phase1EncryptionAlgorithmsRequestListValue
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         Phase2EncryptionAlgorithms: [ // Phase2EncryptionAlgorithmsRequestList
 *           { // Phase2EncryptionAlgorithmsRequestListValue
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         Phase1IntegrityAlgorithms: [ // Phase1IntegrityAlgorithmsRequestList
 *           { // Phase1IntegrityAlgorithmsRequestListValue
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         Phase2IntegrityAlgorithms: [ // Phase2IntegrityAlgorithmsRequestList
 *           { // Phase2IntegrityAlgorithmsRequestListValue
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         Phase1DHGroupNumbers: [ // Phase1DHGroupNumbersRequestList
 *           { // Phase1DHGroupNumbersRequestListValue
 *             Value: Number("int"),
 *           },
 *         ],
 *         Phase2DHGroupNumbers: [ // Phase2DHGroupNumbersRequestList
 *           { // Phase2DHGroupNumbersRequestListValue
 *             Value: Number("int"),
 *           },
 *         ],
 *         IKEVersions: [ // IKEVersionsRequestList
 *           { // IKEVersionsRequestListValue
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         StartupAction: "STRING_VALUE",
 *         LogOptions: { // VpnTunnelLogOptionsSpecification
 *           CloudWatchLogOptions: { // CloudWatchLogOptionsSpecification
 *             LogEnabled: true || false,
 *             LogGroupArn: "STRING_VALUE",
 *             LogOutputFormat: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *     LocalIpv4NetworkCidr: "STRING_VALUE",
 *     RemoteIpv4NetworkCidr: "STRING_VALUE",
 *     LocalIpv6NetworkCidr: "STRING_VALUE",
 *     RemoteIpv6NetworkCidr: "STRING_VALUE",
 *     OutsideIpAddressType: "STRING_VALUE",
 *     TransportTransitGatewayAttachmentId: "STRING_VALUE",
 *   },
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "ipam-resource-discovery" || "ipam-resource-discovery-association",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateVpnConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateVpnConnectionCommandInput - {@link CreateVpnConnectionCommandInput}
 * @returns {@link CreateVpnConnectionCommandOutput}
 * @see {@link CreateVpnConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpnConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class CreateVpnConnectionCommand extends $Command<
  CreateVpnConnectionCommandInput,
  CreateVpnConnectionCommandOutput,
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
  constructor(readonly input: CreateVpnConnectionCommandInput) {
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
  ): Handler<CreateVpnConnectionCommandInput, CreateVpnConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVpnConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpnConnectionCommand";
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
  private serialize(input: CreateVpnConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVpnConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVpnConnectionCommandOutput> {
    return deserializeAws_ec2CreateVpnConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
