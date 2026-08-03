// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDbBackupInput, GetDbBackupOutput } from "../models/models_0";
import { GetDbBackup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDbBackupCommand}.
 */
export interface GetDbBackupCommandInput extends GetDbBackupInput {}
/**
 * @public
 *
 * The output of {@link GetDbBackupCommand}.
 */
export interface GetDbBackupCommandOutput extends GetDbBackupOutput, __MetadataBearer {}

/**
 * <p>Returns information about a specific Timestream for InfluxDB backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, GetDbBackupCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, GetDbBackupCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // GetDbBackupInput
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetDbBackupCommand(input);
 * const response = await client.send(command);
 * // { // GetDbBackupOutput
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
 * @param GetDbBackupCommandInput - {@link GetDbBackupCommandInput}
 * @returns {@link GetDbBackupCommandOutput}
 * @see {@link GetDbBackupCommandInput} for command's `input` shape.
 * @see {@link GetDbBackupCommandOutput} for command's `response` shape.
 * @see {@link TimestreamInfluxDBClientResolvedConfig | config} for TimestreamInfluxDBClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found or does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Timestream for InfluxDB.</p>
 *
 * @throws {@link TimestreamInfluxDBServiceException}
 * <p>Base exception class for all service exceptions from TimestreamInfluxDB service.</p>
 *
 *
 * @public
 */
export class GetDbBackupCommand extends command<GetDbBackupCommandInput, GetDbBackupCommandOutput>(
  _ep0,
  _mw0,
  "GetDbBackup",
  GetDbBackup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDbBackupInput;
      output: GetDbBackupOutput;
    };
    sdk: {
      input: GetDbBackupCommandInput;
      output: GetDbBackupCommandOutput;
    };
  };
}
