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

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { ModifyReplicationInstanceMessage, ModifyReplicationInstanceResponse } from "../models/models_0";
import { de_ModifyReplicationInstanceCommand, se_ModifyReplicationInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyReplicationInstanceCommand}.
 */
export interface ModifyReplicationInstanceCommandInput extends ModifyReplicationInstanceMessage {}
/**
 * @public
 *
 * The output of {@link ModifyReplicationInstanceCommand}.
 */
export interface ModifyReplicationInstanceCommandOutput extends ModifyReplicationInstanceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the replication instance to apply new settings. You can change one or more
 *          parameters by specifying these parameters and the new values in the request.</p>
 *          <p>Some settings are applied during the maintenance window.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyReplicationInstanceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyReplicationInstanceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyReplicationInstanceMessage
 *   ReplicationInstanceArn: "STRING_VALUE", // required
 *   AllocatedStorage: Number("int"),
 *   ApplyImmediately: true || false,
 *   ReplicationInstanceClass: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   MultiAZ: true || false,
 *   EngineVersion: "STRING_VALUE",
 *   AllowMajorVersionUpgrade: true || false,
 *   AutoMinorVersionUpgrade: true || false,
 *   ReplicationInstanceIdentifier: "STRING_VALUE",
 *   NetworkType: "STRING_VALUE",
 * };
 * const command = new ModifyReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * // { // ModifyReplicationInstanceResponse
 * //   ReplicationInstance: { // ReplicationInstance
 * //     ReplicationInstanceIdentifier: "STRING_VALUE",
 * //     ReplicationInstanceClass: "STRING_VALUE",
 * //     ReplicationInstanceStatus: "STRING_VALUE",
 * //     AllocatedStorage: Number("int"),
 * //     InstanceCreateTime: new Date("TIMESTAMP"),
 * //     VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //       { // VpcSecurityGroupMembership
 * //         VpcSecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AvailabilityZone: "STRING_VALUE",
 * //     ReplicationSubnetGroup: { // ReplicationSubnetGroup
 * //       ReplicationSubnetGroupIdentifier: "STRING_VALUE",
 * //       ReplicationSubnetGroupDescription: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SubnetGroupStatus: "STRING_VALUE",
 * //       Subnets: [ // SubnetList
 * //         { // Subnet
 * //           SubnetIdentifier: "STRING_VALUE",
 * //           SubnetAvailabilityZone: { // AvailabilityZone
 * //             Name: "STRING_VALUE",
 * //           },
 * //           SubnetStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SupportedNetworkTypes: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     PendingModifiedValues: { // ReplicationPendingModifiedValues
 * //       ReplicationInstanceClass: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       MultiAZ: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       NetworkType: "STRING_VALUE",
 * //     },
 * //     MultiAZ: true || false,
 * //     EngineVersion: "STRING_VALUE",
 * //     AutoMinorVersionUpgrade: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     ReplicationInstanceArn: "STRING_VALUE",
 * //     ReplicationInstancePublicIpAddress: "STRING_VALUE",
 * //     ReplicationInstancePrivateIpAddress: "STRING_VALUE",
 * //     ReplicationInstancePublicIpAddresses: [ // ReplicationInstancePublicIpAddressList
 * //       "STRING_VALUE",
 * //     ],
 * //     ReplicationInstancePrivateIpAddresses: [ // ReplicationInstancePrivateIpAddressList
 * //       "STRING_VALUE",
 * //     ],
 * //     ReplicationInstanceIpv6Addresses: [ // ReplicationInstanceIpv6AddressList
 * //       "STRING_VALUE",
 * //     ],
 * //     PubliclyAccessible: true || false,
 * //     SecondaryAvailabilityZone: "STRING_VALUE",
 * //     FreeUntil: new Date("TIMESTAMP"),
 * //     DnsNameServers: "STRING_VALUE",
 * //     NetworkType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyReplicationInstanceCommandInput - {@link ModifyReplicationInstanceCommandInput}
 * @returns {@link ModifyReplicationInstanceCommandOutput}
 * @see {@link ModifyReplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationInstanceCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InsufficientResourceCapacityFault} (client fault)
 *  <p>There are not enough resources allocated to the database migration.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>The storage quota has been exceeded.</p>
 *
 * @throws {@link UpgradeDependencyFailureFault} (client fault)
 *  <p>An upgrade dependency is preventing the database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Modify replication instance
 * ```javascript
 * // Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request. Some settings are applied during the maintenance window.
 * const input = {
 *   "AllocatedStorage": 123,
 *   "AllowMajorVersionUpgrade": true,
 *   "ApplyImmediately": true,
 *   "AutoMinorVersionUpgrade": true,
 *   "EngineVersion": "1.5.0",
 *   "MultiAZ": true,
 *   "PreferredMaintenanceWindow": "sun:06:00-sun:14:00",
 *   "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
 *   "ReplicationInstanceClass": "dms.t2.micro",
 *   "ReplicationInstanceIdentifier": "test-rep-1",
 *   "VpcSecurityGroupIds": []
 * };
 * const command = new ModifyReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationInstance": {
 *     "AllocatedStorage": 5,
 *     "AutoMinorVersionUpgrade": true,
 *     "EngineVersion": "1.5.0",
 *     "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
 *     "PendingModifiedValues": {},
 *     "PreferredMaintenanceWindow": "sun:06:00-sun:14:00",
 *     "PubliclyAccessible": true,
 *     "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
 *     "ReplicationInstanceClass": "dms.t2.micro",
 *     "ReplicationInstanceIdentifier": "test-rep-1",
 *     "ReplicationInstanceStatus": "available",
 *     "ReplicationSubnetGroup": {
 *       "ReplicationSubnetGroupDescription": "default",
 *       "ReplicationSubnetGroupIdentifier": "default",
 *       "SubnetGroupStatus": "Complete",
 *       "Subnets": [
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-east-1d"
 *           },
 *           "SubnetIdentifier": "subnet-f6dd91af",
 *           "SubnetStatus": "Active"
 *         },
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-east-1b"
 *           },
 *           "SubnetIdentifier": "subnet-3605751d",
 *           "SubnetStatus": "Active"
 *         },
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-east-1c"
 *           },
 *           "SubnetIdentifier": "subnet-c2daefb5",
 *           "SubnetStatus": "Active"
 *         },
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-east-1e"
 *           },
 *           "SubnetIdentifier": "subnet-85e90cb8",
 *           "SubnetStatus": "Active"
 *         }
 *       ],
 *       "VpcId": "vpc-6741a603"
 *     }
 *   }
 * }
 * *\/
 * // example id: modify-replication-instance-1481761784746
 * ```
 *
 */
export class ModifyReplicationInstanceCommand extends $Command<
  ModifyReplicationInstanceCommandInput,
  ModifyReplicationInstanceCommandOutput,
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
  constructor(readonly input: ModifyReplicationInstanceCommandInput) {
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
  ): Handler<ModifyReplicationInstanceCommandInput, ModifyReplicationInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyReplicationInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ModifyReplicationInstanceCommand";
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
  private serialize(input: ModifyReplicationInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyReplicationInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyReplicationInstanceCommandOutput> {
    return de_ModifyReplicationInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
