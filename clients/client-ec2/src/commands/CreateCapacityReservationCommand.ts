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
import { CreateCapacityReservationRequest, CreateCapacityReservationResult } from "../models/models_0";
import { de_CreateCapacityReservationCommand, se_CreateCapacityReservationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCapacityReservationCommand}.
 */
export interface CreateCapacityReservationCommandInput extends CreateCapacityReservationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCapacityReservationCommand}.
 */
export interface CreateCapacityReservationCommandOutput extends CreateCapacityReservationResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new Capacity Reservation with the specified attributes.</p>
 *          <p>Capacity Reservations enable you to reserve capacity for your Amazon EC2 instances in a specific Availability Zone for any duration. This
 * 			gives you the flexibility to selectively add capacity reservations and still get the Regional RI discounts for that usage.
 * 			By creating Capacity Reservations, you ensure that you always have access to Amazon EC2 capacity when you need it, for as long as you need it.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html">Capacity Reservations</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p>Your request to create a Capacity Reservation could fail if Amazon EC2 does not have sufficient capacity to
 * 			fulfill the request. If your request fails due to Amazon EC2 capacity constraints, either try
 * 			again at a later time, try in a different Availability Zone, or request a smaller
 * 			capacity reservation. If your application is flexible across instance types and sizes,
 * 			try to create a Capacity Reservation with different instance attributes.</p>
 *          <p>Your request could also fail if the requested quantity exceeds your On-Demand Instance
 * 			limit for the selected instance type. If your request fails due to limit constraints,
 * 			increase your On-Demand Instance limit for the required instance type and try again. For
 * 			more information about increasing your instance limits, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-resource-limits.html">Amazon EC2 Service
 * 				Quotas</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCapacityReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCapacityReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateCapacityReservationRequest
 *   ClientToken: "STRING_VALUE",
 *   InstanceType: "STRING_VALUE", // required
 *   InstancePlatform: "Linux/UNIX" || "Red Hat Enterprise Linux" || "SUSE Linux" || "Windows" || "Windows with SQL Server" || "Windows with SQL Server Enterprise" || "Windows with SQL Server Standard" || "Windows with SQL Server Web" || "Linux with SQL Server Standard" || "Linux with SQL Server Web" || "Linux with SQL Server Enterprise" || "RHEL with SQL Server Standard" || "RHEL with SQL Server Enterprise" || "RHEL with SQL Server Web" || "RHEL with HA" || "RHEL with HA and SQL Server Standard" || "RHEL with HA and SQL Server Enterprise", // required
 *   AvailabilityZone: "STRING_VALUE",
 *   AvailabilityZoneId: "STRING_VALUE",
 *   Tenancy: "default" || "dedicated",
 *   InstanceCount: Number("int"), // required
 *   EbsOptimized: true || false,
 *   EphemeralStorage: true || false,
 *   EndDate: new Date("TIMESTAMP"),
 *   EndDateType: "unlimited" || "limited",
 *   InstanceMatchCriteria: "open" || "targeted",
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
 *   DryRun: true || false,
 *   OutpostArn: "STRING_VALUE",
 *   PlacementGroupArn: "STRING_VALUE",
 * };
 * const command = new CreateCapacityReservationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCapacityReservationResult
 * //   CapacityReservation: { // CapacityReservation
 * //     CapacityReservationId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     CapacityReservationArn: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     InstanceType: "STRING_VALUE",
 * //     InstancePlatform: "Linux/UNIX" || "Red Hat Enterprise Linux" || "SUSE Linux" || "Windows" || "Windows with SQL Server" || "Windows with SQL Server Enterprise" || "Windows with SQL Server Standard" || "Windows with SQL Server Web" || "Linux with SQL Server Standard" || "Linux with SQL Server Web" || "Linux with SQL Server Enterprise" || "RHEL with SQL Server Standard" || "RHEL with SQL Server Enterprise" || "RHEL with SQL Server Web" || "RHEL with HA" || "RHEL with HA and SQL Server Standard" || "RHEL with HA and SQL Server Enterprise",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     Tenancy: "default" || "dedicated",
 * //     TotalInstanceCount: Number("int"),
 * //     AvailableInstanceCount: Number("int"),
 * //     EbsOptimized: true || false,
 * //     EphemeralStorage: true || false,
 * //     State: "active" || "expired" || "cancelled" || "pending" || "failed",
 * //     StartDate: new Date("TIMESTAMP"),
 * //     EndDate: new Date("TIMESTAMP"),
 * //     EndDateType: "unlimited" || "limited",
 * //     InstanceMatchCriteria: "open" || "targeted",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OutpostArn: "STRING_VALUE",
 * //     CapacityReservationFleetId: "STRING_VALUE",
 * //     PlacementGroupArn: "STRING_VALUE",
 * //     CapacityAllocations: [ // CapacityAllocations
 * //       { // CapacityAllocation
 * //         AllocationType: "used",
 * //         Count: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCapacityReservationCommandInput - {@link CreateCapacityReservationCommandInput}
 * @returns {@link CreateCapacityReservationCommandOutput}
 * @see {@link CreateCapacityReservationCommandInput} for command's `input` shape.
 * @see {@link CreateCapacityReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CreateCapacityReservationCommand extends $Command<
  CreateCapacityReservationCommandInput,
  CreateCapacityReservationCommandOutput,
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
  constructor(readonly input: CreateCapacityReservationCommandInput) {
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
  ): Handler<CreateCapacityReservationCommandInput, CreateCapacityReservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCapacityReservationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateCapacityReservationCommand";
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
  private serialize(input: CreateCapacityReservationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCapacityReservationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCapacityReservationCommandOutput> {
    return de_CreateCapacityReservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
