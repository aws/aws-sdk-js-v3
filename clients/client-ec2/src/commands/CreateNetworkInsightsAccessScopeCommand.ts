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
import { CreateNetworkInsightsAccessScopeRequest, CreateNetworkInsightsAccessScopeResult } from "../models/models_1";
import {
  de_CreateNetworkInsightsAccessScopeCommand,
  se_CreateNetworkInsightsAccessScopeCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkInsightsAccessScopeCommand}.
 */
export interface CreateNetworkInsightsAccessScopeCommandInput extends CreateNetworkInsightsAccessScopeRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkInsightsAccessScopeCommand}.
 */
export interface CreateNetworkInsightsAccessScopeCommandOutput
  extends CreateNetworkInsightsAccessScopeResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a Network Access Scope.</p>
 *          <p>Amazon Web Services Network Access Analyzer enables cloud networking and cloud operations teams
 *          to verify that their networks on Amazon Web Services conform to their network security and governance
 *          objectives. For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/network-access-analyzer/">Amazon Web Services Network Access Analyzer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInsightsAccessScopeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInsightsAccessScopeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateNetworkInsightsAccessScopeRequest
 *   MatchPaths: [ // AccessScopePathListRequest
 *     { // AccessScopePathRequest
 *       Source: { // PathStatementRequest
 *         PacketHeaderStatement: { // PacketHeaderStatementRequest
 *           SourceAddresses: [ // ValueStringList
 *             "STRING_VALUE",
 *           ],
 *           DestinationAddresses: [
 *             "STRING_VALUE",
 *           ],
 *           SourcePorts: [
 *             "STRING_VALUE",
 *           ],
 *           DestinationPorts: [
 *             "STRING_VALUE",
 *           ],
 *           SourcePrefixLists: [
 *             "STRING_VALUE",
 *           ],
 *           DestinationPrefixLists: "<ValueStringList>",
 *           Protocols: [ // ProtocolList
 *             "tcp" || "udp",
 *           ],
 *         },
 *         ResourceStatement: { // ResourceStatementRequest
 *           Resources: "<ValueStringList>",
 *           ResourceTypes: "<ValueStringList>",
 *         },
 *       },
 *       Destination: {
 *         PacketHeaderStatement: {
 *           SourceAddresses: "<ValueStringList>",
 *           DestinationAddresses: "<ValueStringList>",
 *           SourcePorts: "<ValueStringList>",
 *           DestinationPorts: "<ValueStringList>",
 *           SourcePrefixLists: "<ValueStringList>",
 *           DestinationPrefixLists: "<ValueStringList>",
 *           Protocols: [
 *             "tcp" || "udp",
 *           ],
 *         },
 *         ResourceStatement: {
 *           Resources: "<ValueStringList>",
 *           ResourceTypes: "<ValueStringList>",
 *         },
 *       },
 *       ThroughResources: [ // ThroughResourcesStatementRequestList
 *         { // ThroughResourcesStatementRequest
 *           ResourceStatement: {
 *             Resources: "<ValueStringList>",
 *             ResourceTypes: "<ValueStringList>",
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   ExcludePaths: [
 *     {
 *       Source: {
 *         PacketHeaderStatement: {
 *           SourceAddresses: "<ValueStringList>",
 *           DestinationAddresses: "<ValueStringList>",
 *           SourcePorts: "<ValueStringList>",
 *           DestinationPorts: "<ValueStringList>",
 *           SourcePrefixLists: "<ValueStringList>",
 *           DestinationPrefixLists: "<ValueStringList>",
 *           Protocols: [
 *             "tcp" || "udp",
 *           ],
 *         },
 *         ResourceStatement: {
 *           Resources: "<ValueStringList>",
 *           ResourceTypes: "<ValueStringList>",
 *         },
 *       },
 *       Destination: {
 *         PacketHeaderStatement: {
 *           SourceAddresses: "<ValueStringList>",
 *           DestinationAddresses: "<ValueStringList>",
 *           SourcePorts: "<ValueStringList>",
 *           DestinationPorts: "<ValueStringList>",
 *           SourcePrefixLists: "<ValueStringList>",
 *           DestinationPrefixLists: "<ValueStringList>",
 *           Protocols: [
 *             "tcp" || "udp",
 *           ],
 *         },
 *         ResourceStatement: {
 *           Resources: "<ValueStringList>",
 *           ResourceTypes: "<ValueStringList>",
 *         },
 *       },
 *       ThroughResources: [
 *         {
 *           ResourceStatement: "<ResourceStatementRequest>",
 *         },
 *       ],
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE", // required
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
 * };
 * const command = new CreateNetworkInsightsAccessScopeCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkInsightsAccessScopeResult
 * //   NetworkInsightsAccessScope: { // NetworkInsightsAccessScope
 * //     NetworkInsightsAccessScopeId: "STRING_VALUE",
 * //     NetworkInsightsAccessScopeArn: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     UpdatedDate: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   NetworkInsightsAccessScopeContent: { // NetworkInsightsAccessScopeContent
 * //     NetworkInsightsAccessScopeId: "STRING_VALUE",
 * //     MatchPaths: [ // AccessScopePathList
 * //       { // AccessScopePath
 * //         Source: { // PathStatement
 * //           PacketHeaderStatement: { // PacketHeaderStatement
 * //             SourceAddresses: [ // ValueStringList
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationAddresses: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SourcePorts: [
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationPorts: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SourcePrefixLists: [
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [ // ProtocolList
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: { // ResourceStatement
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         Destination: {
 * //           PacketHeaderStatement: {
 * //             SourceAddresses: "<ValueStringList>",
 * //             DestinationAddresses: "<ValueStringList>",
 * //             SourcePorts: "<ValueStringList>",
 * //             DestinationPorts: "<ValueStringList>",
 * //             SourcePrefixLists: "<ValueStringList>",
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: {
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         ThroughResources: [ // ThroughResourcesStatementList
 * //           { // ThroughResourcesStatement
 * //             ResourceStatement: {
 * //               Resources: "<ValueStringList>",
 * //               ResourceTypes: "<ValueStringList>",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ExcludePaths: [
 * //       {
 * //         Source: {
 * //           PacketHeaderStatement: {
 * //             SourceAddresses: "<ValueStringList>",
 * //             DestinationAddresses: "<ValueStringList>",
 * //             SourcePorts: "<ValueStringList>",
 * //             DestinationPorts: "<ValueStringList>",
 * //             SourcePrefixLists: "<ValueStringList>",
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: {
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         Destination: {
 * //           PacketHeaderStatement: {
 * //             SourceAddresses: "<ValueStringList>",
 * //             DestinationAddresses: "<ValueStringList>",
 * //             SourcePorts: "<ValueStringList>",
 * //             DestinationPorts: "<ValueStringList>",
 * //             SourcePrefixLists: "<ValueStringList>",
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: {
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         ThroughResources: [
 * //           {
 * //             ResourceStatement: "<ResourceStatement>",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNetworkInsightsAccessScopeCommandInput - {@link CreateNetworkInsightsAccessScopeCommandInput}
 * @returns {@link CreateNetworkInsightsAccessScopeCommandOutput}
 * @see {@link CreateNetworkInsightsAccessScopeCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInsightsAccessScopeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CreateNetworkInsightsAccessScopeCommand extends $Command<
  CreateNetworkInsightsAccessScopeCommandInput,
  CreateNetworkInsightsAccessScopeCommandOutput,
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
  constructor(readonly input: CreateNetworkInsightsAccessScopeCommandInput) {
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
  ): Handler<CreateNetworkInsightsAccessScopeCommandInput, CreateNetworkInsightsAccessScopeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNetworkInsightsAccessScopeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateNetworkInsightsAccessScopeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CreateNetworkInsightsAccessScope",
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
    input: CreateNetworkInsightsAccessScopeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateNetworkInsightsAccessScopeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNetworkInsightsAccessScopeCommandOutput> {
    return de_CreateNetworkInsightsAccessScopeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
