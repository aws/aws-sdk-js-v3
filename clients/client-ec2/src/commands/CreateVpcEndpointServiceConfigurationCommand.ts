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
  CreateVpcEndpointServiceConfigurationRequest,
  CreateVpcEndpointServiceConfigurationResult,
} from "../models/models_2";
import {
  de_CreateVpcEndpointServiceConfigurationCommand,
  se_CreateVpcEndpointServiceConfigurationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcEndpointServiceConfigurationCommand}.
 */
export interface CreateVpcEndpointServiceConfigurationCommandInput
  extends CreateVpcEndpointServiceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcEndpointServiceConfigurationCommand}.
 */
export interface CreateVpcEndpointServiceConfigurationCommandOutput
  extends CreateVpcEndpointServiceConfigurationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a VPC endpoint service to which service consumers (Amazon Web Services accounts,
 *             users, and IAM roles) can connect.</p>
 *          <p>Before you create an endpoint service, you must create one of the following for your service:</p>
 *          <ul>
 *             <li>
 *                <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/">Network Load Balancer</a>.
 *                     Service consumers connect to your service using an interface endpoint.</p>
 *             </li>
 *             <li>
 *                <p>A <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/">Gateway Load Balancer</a>.
 *                     Service consumers connect to your service using a Gateway Load Balancer endpoint.</p>
 *             </li>
 *          </ul>
 *          <p>If you set the private DNS name, you must prove that you own the private DNS domain
 *             name.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/">Amazon Web Services PrivateLink
 * 	        Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcEndpointServiceConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcEndpointServiceConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpcEndpointServiceConfigurationRequest
 *   DryRun: true || false,
 *   AcceptanceRequired: true || false,
 *   PrivateDnsName: "STRING_VALUE",
 *   NetworkLoadBalancerArns: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   GatewayLoadBalancerArns: [
 *     "STRING_VALUE",
 *   ],
 *   SupportedIpAddressTypes: [
 *     "STRING_VALUE",
 *   ],
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
 * };
 * const command = new CreateVpcEndpointServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcEndpointServiceConfigurationResult
 * //   ServiceConfiguration: { // ServiceConfiguration
 * //     ServiceType: [ // ServiceTypeDetailSet
 * //       { // ServiceTypeDetail
 * //         ServiceType: "Interface" || "Gateway" || "GatewayLoadBalancer",
 * //       },
 * //     ],
 * //     ServiceId: "STRING_VALUE",
 * //     ServiceName: "STRING_VALUE",
 * //     ServiceState: "Pending" || "Available" || "Deleting" || "Deleted" || "Failed",
 * //     AvailabilityZones: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     AcceptanceRequired: true || false,
 * //     ManagesVpcEndpoints: true || false,
 * //     NetworkLoadBalancerArns: [
 * //       "STRING_VALUE",
 * //     ],
 * //     GatewayLoadBalancerArns: [
 * //       "STRING_VALUE",
 * //     ],
 * //     SupportedIpAddressTypes: [ // SupportedIpAddressTypes
 * //       "ipv4" || "ipv6",
 * //     ],
 * //     BaseEndpointDnsNames: [
 * //       "STRING_VALUE",
 * //     ],
 * //     PrivateDnsName: "STRING_VALUE",
 * //     PrivateDnsNameConfiguration: { // PrivateDnsNameConfiguration
 * //       State: "pendingVerification" || "verified" || "failed",
 * //       Type: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     PayerResponsibility: "ServiceOwner",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateVpcEndpointServiceConfigurationCommandInput - {@link CreateVpcEndpointServiceConfigurationCommandInput}
 * @returns {@link CreateVpcEndpointServiceConfigurationCommandOutput}
 * @see {@link CreateVpcEndpointServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcEndpointServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CreateVpcEndpointServiceConfigurationCommand extends $Command<
  CreateVpcEndpointServiceConfigurationCommandInput,
  CreateVpcEndpointServiceConfigurationCommandOutput,
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
  constructor(readonly input: CreateVpcEndpointServiceConfigurationCommandInput) {
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
  ): Handler<CreateVpcEndpointServiceConfigurationCommandInput, CreateVpcEndpointServiceConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVpcEndpointServiceConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpcEndpointServiceConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CreateVpcEndpointServiceConfiguration",
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
  private serialize(
    input: CreateVpcEndpointServiceConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateVpcEndpointServiceConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcEndpointServiceConfigurationCommandOutput> {
    return de_CreateVpcEndpointServiceConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
