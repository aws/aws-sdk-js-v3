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
import { CreateReplicationInstanceMessage, CreateReplicationInstanceResponse } from "../models/models_0";
import { de_CreateReplicationInstanceCommand, se_CreateReplicationInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationInstanceCommand}.
 */
export interface CreateReplicationInstanceCommandInput extends CreateReplicationInstanceMessage {}
/**
 * @public
 *
 * The output of {@link CreateReplicationInstanceCommand}.
 */
export interface CreateReplicationInstanceCommandOutput extends CreateReplicationInstanceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates the replication instance using the specified parameters.</p>
 *          <p>DMS requires that your account have certain roles with appropriate permissions
 *          before you can create a replication instance. For information on the required roles, see
 *       <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For
 *          information on the required permissions, see
 *       <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateReplicationInstanceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateReplicationInstanceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateReplicationInstanceMessage
 *   ReplicationInstanceIdentifier: "STRING_VALUE", // required
 *   AllocatedStorage: Number("int"),
 *   ReplicationInstanceClass: "STRING_VALUE", // required
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   AvailabilityZone: "STRING_VALUE",
 *   ReplicationSubnetGroupIdentifier: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   MultiAZ: true || false,
 *   EngineVersion: "STRING_VALUE",
 *   AutoMinorVersionUpgrade: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 *   KmsKeyId: "STRING_VALUE",
 *   PubliclyAccessible: true || false,
 *   DnsNameServers: "STRING_VALUE",
 *   ResourceIdentifier: "STRING_VALUE",
 *   NetworkType: "STRING_VALUE",
 * };
 * const command = new CreateReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateReplicationInstanceResponse
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
 * @param CreateReplicationInstanceCommandInput - {@link CreateReplicationInstanceCommandInput}
 * @returns {@link CreateReplicationInstanceCommandOutput}
 * @see {@link CreateReplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationInstanceCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The subnet provided isn't valid.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ReplicationSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>The storage quota has been exceeded.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Create replication instance
 * ```javascript
 * // Creates the replication instance using the specified parameters.
 * const input = {
 *   "AllocatedStorage": 123,
 *   "AutoMinorVersionUpgrade": true,
 *   "AvailabilityZone": "",
 *   "EngineVersion": "",
 *   "KmsKeyId": "",
 *   "MultiAZ": true,
 *   "PreferredMaintenanceWindow": "",
 *   "PubliclyAccessible": true,
 *   "ReplicationInstanceClass": "",
 *   "ReplicationInstanceIdentifier": "",
 *   "ReplicationSubnetGroupIdentifier": "",
 *   "Tags": [
 *     {
 *       "Key": "string",
 *       "Value": "string"
 *     }
 *   ],
 *   "VpcSecurityGroupIds": []
 * };
 * const command = new CreateReplicationInstanceCommand(input);
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
 *     "ReplicationInstanceStatus": "creating",
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
 * // example id: create-replication-instance-1481746705295
 * ```
 *
 */
export class CreateReplicationInstanceCommand extends $Command<
  CreateReplicationInstanceCommandInput,
  CreateReplicationInstanceCommandOutput,
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
  constructor(readonly input: CreateReplicationInstanceCommandInput) {
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
  ): Handler<CreateReplicationInstanceCommandInput, CreateReplicationInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReplicationInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CreateReplicationInstanceCommand";
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
  private serialize(input: CreateReplicationInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateReplicationInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReplicationInstanceCommandOutput> {
    return de_CreateReplicationInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
