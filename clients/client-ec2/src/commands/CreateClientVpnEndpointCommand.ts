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
import { CreateClientVpnEndpointRequest, CreateClientVpnEndpointResult } from "../models/models_1";
import { de_CreateClientVpnEndpointCommand, se_CreateClientVpnEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateClientVpnEndpointCommand}.
 */
export interface CreateClientVpnEndpointCommandInput extends CreateClientVpnEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateClientVpnEndpointCommand}.
 */
export interface CreateClientVpnEndpointCommandOutput extends CreateClientVpnEndpointResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Client VPN endpoint. A Client VPN endpoint is the resource you create and configure to
 * 			enable and manage client VPN sessions. It is the destination endpoint at which all client VPN sessions
 * 			are terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateClientVpnEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateClientVpnEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateClientVpnEndpointRequest
 *   ClientCidrBlock: "STRING_VALUE", // required
 *   ServerCertificateArn: "STRING_VALUE", // required
 *   AuthenticationOptions: [ // ClientVpnAuthenticationRequestList // required
 *     { // ClientVpnAuthenticationRequest
 *       Type: "certificate-authentication" || "directory-service-authentication" || "federated-authentication",
 *       ActiveDirectory: { // DirectoryServiceAuthenticationRequest
 *         DirectoryId: "STRING_VALUE",
 *       },
 *       MutualAuthentication: { // CertificateAuthenticationRequest
 *         ClientRootCertificateChainArn: "STRING_VALUE",
 *       },
 *       FederatedAuthentication: { // FederatedAuthenticationRequest
 *         SAMLProviderArn: "STRING_VALUE",
 *         SelfServiceSAMLProviderArn: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   ConnectionLogOptions: { // ConnectionLogOptions
 *     Enabled: true || false,
 *     CloudwatchLogGroup: "STRING_VALUE",
 *     CloudwatchLogStream: "STRING_VALUE",
 *   },
 *   DnsServers: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   TransportProtocol: "tcp" || "udp",
 *   VpnPort: Number("int"),
 *   Description: "STRING_VALUE",
 *   SplitTunnel: true || false,
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   SecurityGroupIds: [ // ClientVpnSecurityGroupIdSet
 *     "STRING_VALUE",
 *   ],
 *   VpcId: "STRING_VALUE",
 *   SelfServicePortal: "enabled" || "disabled",
 *   ClientConnectOptions: { // ClientConnectOptions
 *     Enabled: true || false,
 *     LambdaFunctionArn: "STRING_VALUE",
 *   },
 *   SessionTimeoutHours: Number("int"),
 *   ClientLoginBannerOptions: { // ClientLoginBannerOptions
 *     Enabled: true || false,
 *     BannerText: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateClientVpnEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateClientVpnEndpointResult
 * //   ClientVpnEndpointId: "STRING_VALUE",
 * //   Status: { // ClientVpnEndpointStatus
 * //     Code: "pending-associate" || "available" || "deleting" || "deleted",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   DnsName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateClientVpnEndpointCommandInput - {@link CreateClientVpnEndpointCommandInput}
 * @returns {@link CreateClientVpnEndpointCommandOutput}
 * @see {@link CreateClientVpnEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateClientVpnEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CreateClientVpnEndpointCommand extends $Command<
  CreateClientVpnEndpointCommandInput,
  CreateClientVpnEndpointCommandOutput,
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
  constructor(readonly input: CreateClientVpnEndpointCommandInput) {
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
  ): Handler<CreateClientVpnEndpointCommandInput, CreateClientVpnEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateClientVpnEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateClientVpnEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CreateClientVpnEndpoint",
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
  private serialize(input: CreateClientVpnEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateClientVpnEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClientVpnEndpointCommandOutput> {
    return de_CreateClientVpnEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
