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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DescribeReplicationInstancesMessage, DescribeReplicationInstancesResponse } from "../models/models_0";
import {
  de_DescribeReplicationInstancesCommand,
  se_DescribeReplicationInstancesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationInstancesCommand}.
 */
export interface DescribeReplicationInstancesCommandInput extends DescribeReplicationInstancesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationInstancesCommand}.
 */
export interface DescribeReplicationInstancesCommandOutput
  extends DescribeReplicationInstancesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about replication instances for your account in the current
 *          region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationInstancesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationInstancesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationInstancesMessage
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationInstancesResponse
 * //   Marker: "STRING_VALUE",
 * //   ReplicationInstances: [ // ReplicationInstanceList
 * //     { // ReplicationInstance
 * //       ReplicationInstanceIdentifier: "STRING_VALUE",
 * //       ReplicationInstanceClass: "STRING_VALUE",
 * //       ReplicationInstanceStatus: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       InstanceCreateTime: new Date("TIMESTAMP"),
 * //       VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //         { // VpcSecurityGroupMembership
 * //           VpcSecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AvailabilityZone: "STRING_VALUE",
 * //       ReplicationSubnetGroup: { // ReplicationSubnetGroup
 * //         ReplicationSubnetGroupIdentifier: "STRING_VALUE",
 * //         ReplicationSubnetGroupDescription: "STRING_VALUE",
 * //         VpcId: "STRING_VALUE",
 * //         SubnetGroupStatus: "STRING_VALUE",
 * //         Subnets: [ // SubnetList
 * //           { // Subnet
 * //             SubnetIdentifier: "STRING_VALUE",
 * //             SubnetAvailabilityZone: { // AvailabilityZone
 * //               Name: "STRING_VALUE",
 * //             },
 * //             SubnetStatus: "STRING_VALUE",
 * //           },
 * //         ],
 * //         SupportedNetworkTypes: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       PendingModifiedValues: { // ReplicationPendingModifiedValues
 * //         ReplicationInstanceClass: "STRING_VALUE",
 * //         AllocatedStorage: Number("int"),
 * //         MultiAZ: true || false,
 * //         EngineVersion: "STRING_VALUE",
 * //         NetworkType: "STRING_VALUE",
 * //       },
 * //       MultiAZ: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       AutoMinorVersionUpgrade: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       ReplicationInstanceArn: "STRING_VALUE",
 * //       ReplicationInstancePublicIpAddress: "STRING_VALUE",
 * //       ReplicationInstancePrivateIpAddress: "STRING_VALUE",
 * //       ReplicationInstancePublicIpAddresses: [ // ReplicationInstancePublicIpAddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       ReplicationInstancePrivateIpAddresses: [ // ReplicationInstancePrivateIpAddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       ReplicationInstanceIpv6Addresses: [ // ReplicationInstanceIpv6AddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       PubliclyAccessible: true || false,
 * //       SecondaryAvailabilityZone: "STRING_VALUE",
 * //       FreeUntil: new Date("TIMESTAMP"),
 * //       DnsNameServers: "STRING_VALUE",
 * //       NetworkType: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationInstancesCommandInput - {@link DescribeReplicationInstancesCommandInput}
 * @returns {@link DescribeReplicationInstancesCommandOutput}
 * @see {@link DescribeReplicationInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationInstancesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Describe replication instances
 * ```javascript
 * // Returns the status of the refresh-schemas operation.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "string",
 *       "Values": [
 *         "string",
 *         "string"
 *       ]
 *     }
 *   ],
 *   "Marker": "",
 *   "MaxRecords": 123
 * };
 * const command = new DescribeReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "",
 *   "ReplicationInstances": []
 * }
 * *\/
 * // example id: describe-replication-instances-1481755443952
 * ```
 *
 */
export class DescribeReplicationInstancesCommand extends $Command<
  DescribeReplicationInstancesCommandInput,
  DescribeReplicationInstancesCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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
  constructor(readonly input: DescribeReplicationInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReplicationInstancesCommandInput, DescribeReplicationInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReplicationInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeReplicationInstances",
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
  private serialize(input: DescribeReplicationInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeReplicationInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationInstancesCommandOutput> {
    return de_DescribeReplicationInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
