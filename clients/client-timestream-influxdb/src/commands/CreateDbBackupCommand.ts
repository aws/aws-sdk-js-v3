// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDbBackupInput, CreateDbBackupOutput } from "../models/models_0";
import { CreateDbBackup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDbBackupCommand}.
 */
export interface CreateDbBackupCommandInput extends CreateDbBackupInput {}
/**
 * @public
 *
 * The output of {@link CreateDbBackupCommand}.
 */
export interface CreateDbBackupCommandOutput extends CreateDbBackupOutput, __MetadataBearer {}

/**
 * Creates a new on-demand backup of a Timestream for InfluxDB resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, CreateDbBackupCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, CreateDbBackupCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // CreateDbBackupInput
 *   name: "STRING_VALUE", // required
 *   dbResourceId: "STRING_VALUE", // required
 *   retentionDays: Number("int"),
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDbBackupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDbBackupOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE", // required
 * //   status: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "DELETING" || "DELETED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   expiresAfter: "STRING_VALUE",
 * //   dbResourceId: "STRING_VALUE",
 * //   type: "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY" || "CUSTOM_SCHEDULE" || "ON_DEMAND" || "CONTINUOUS",
 * //   engineType: "INFLUXDB_V2" || "INFLUXDB_V3_CORE" || "INFLUXDB_V3_ENTERPRISE",
 * //   deploymentType: "SINGLE_AZ" || "WITH_MULTIAZ_STANDBY" || "MULTI_NODE_READ_REPLICAS",
 * //   kmsKeyId: "STRING_VALUE",
 * //   clusterConfiguration: { // ClusterConfiguration
 * //     ingestQueryInstances: Number("int"),
 * //     queryOnlyInstances: Number("int"),
 * //     dedicatedCompactor: true || false,
 * //   },
 * //   deploymentConfiguration: { // DeploymentConfiguration Union: only one key present
 * //     InfluxDBv3Enterprise: { // InfluxDBv3EnterpriseDeploymentConfiguration
 * //       nodeGroups: [ // NodeGroupList // required
 * //         { // NodeGroup
 * //           instanceModes: [ // InstanceModeList // required
 * //             "PRIMARY" || "STANDBY" || "REPLICA" || "INGEST" || "QUERY" || "COMPACT" || "PROCESS",
 * //           ],
 * //           instanceType: "db.influx.medium" || "db.influx.large" || "db.influx.xlarge" || "db.influx.2xlarge" || "db.influx.4xlarge" || "db.influx.8xlarge" || "db.influx.12xlarge" || "db.influx.16xlarge" || "db.influx.24xlarge", // required
 * //           count: Number("int"), // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   dbParameterGroupId: "STRING_VALUE",
 * //   dbInstanceType: "db.influx.medium" || "db.influx.large" || "db.influx.xlarge" || "db.influx.2xlarge" || "db.influx.4xlarge" || "db.influx.8xlarge" || "db.influx.12xlarge" || "db.influx.16xlarge" || "db.influx.24xlarge",
 * //   logDeliveryConfiguration: { // LogDeliveryConfiguration
 * //     s3Configuration: { // S3Configuration
 * //       bucketName: "STRING_VALUE", // required
 * //       enabled: true || false, // required
 * //     },
 * //   },
 * //   failoverMode: "AUTOMATIC" || "NO_FAILOVER",
 * //   dbStorageType: "InfluxIOIncludedT1" || "InfluxIOIncludedT2" || "InfluxIOIncludedT3",
 * //   allocatedStorage: Number("int"),
 * //   vpcSubnetIds: [ // VpcSubnetIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   vpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   publiclyAccessible: true || false,
 * //   port: Number("int"),
 * //   networkType: "IPV4" || "DUAL",
 * //   influxAuthParametersSecretArn: "STRING_VALUE",
 * //   maintenanceSchedule: { // MaintenanceSchedule
 * //     timezone: "STRING_VALUE", // required
 * //     preferredMaintenanceWindow: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDbBackupCommandInput - {@link CreateDbBackupCommandInput}
 * @returns {@link CreateDbBackupCommandOutput}
 * @see {@link CreateDbBackupCommandInput} for command's `input` shape.
 * @see {@link CreateDbBackupCommandOutput} for command's `response` shape.
 * @see {@link TimestreamInfluxDBClientResolvedConfig | config} for TimestreamInfluxDBClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with an existing resource in Timestream for InfluxDB.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found or does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds the service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Timestream for InfluxDB.
 *
 * @throws {@link TimestreamInfluxDBServiceException}
 *
 * Base exception class for all service exceptions from TimestreamInfluxDB service.
 *
 * @public
 */
export class CreateDbBackupCommand extends command<CreateDbBackupCommandInput, CreateDbBackupCommandOutput>(
  _ep0,
  _mw0,
  "CreateDbBackup",
  CreateDbBackup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDbBackupInput;
      output: CreateDbBackupOutput;
    };
    sdk: {
      input: CreateDbBackupCommandInput;
      output: CreateDbBackupCommandOutput;
    };
  };
}
