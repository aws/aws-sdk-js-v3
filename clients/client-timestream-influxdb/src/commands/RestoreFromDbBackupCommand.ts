// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreFromDbBackupInput, RestoreFromDbBackupOutput } from "../models/models_0";
import { RestoreFromDbBackup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreFromDbBackupCommand}.
 */
export interface RestoreFromDbBackupCommandInput extends RestoreFromDbBackupInput {}
/**
 * @public
 *
 * The output of {@link RestoreFromDbBackupCommand}.
 */
export interface RestoreFromDbBackupCommandOutput extends RestoreFromDbBackupOutput, __MetadataBearer {}

/**
 * <p>Restores a Timestream for InfluxDB resource from a backup. By default, a new resource is created. You can optionally restore to the same resource using the REPLACE_EXISTING restore mode.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, RestoreFromDbBackupCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, RestoreFromDbBackupCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // RestoreFromDbBackupInput
 *   name: "STRING_VALUE", // required
 *   dbBackupId: "STRING_VALUE", // required
 *   restoreToTime: new Date("TIMESTAMP"),
 *   restoreMode: "NEW_RESOURCE" || "REPLACE_EXISTING",
 *   vpcSubnetIds: [ // VpcSubnetIdList
 *     "STRING_VALUE",
 *   ],
 *   vpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   publiclyAccessible: true || false,
 *   logDeliveryConfiguration: { // LogDeliveryConfiguration
 *     s3Configuration: { // S3Configuration
 *       bucketName: "STRING_VALUE", // required
 *       enabled: true || false, // required
 *     },
 *   },
 *   maintenanceSchedule: { // MaintenanceSchedule
 *     timezone: "STRING_VALUE", // required
 *     preferredMaintenanceWindow: "STRING_VALUE", // required
 *   },
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   port: Number("int"),
 *   networkType: "IPV4" || "DUAL",
 *   deploymentType: "SINGLE_AZ" || "WITH_MULTIAZ_STANDBY" || "MULTI_NODE_READ_REPLICAS",
 *   dbBackupConfigurations: [ // DbBackupConfigurationInputList
 *     { // DbBackupConfiguration
 *       type: "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY" || "CUSTOM_SCHEDULE" || "CONTINUOUS", // required
 *       retentionDays: Number("int"), // required
 *       enabled: true || false, // required
 *       customSchedule: "STRING_VALUE",
 *     },
 *   ],
 *   kmsKeyId: "STRING_VALUE",
 * };
 * const command = new RestoreFromDbBackupCommand(input);
 * const response = await client.send(command);
 * // { // RestoreFromDbBackupOutput
 * //   restoredDbResourceId: "STRING_VALUE",
 * //   restoreStatus: "RESTORING",
 * //   resourceType: "DB_INSTANCE" || "DB_CLUSTER",
 * //   engineType: "INFLUXDB_V2" || "INFLUXDB_V3_CORE" || "INFLUXDB_V3_ENTERPRISE",
 * //   deploymentType: "SINGLE_AZ" || "WITH_MULTIAZ_STANDBY" || "MULTI_NODE_READ_REPLICAS",
 * // };
 *
 * ```
 *
 * @param RestoreFromDbBackupCommandInput - {@link RestoreFromDbBackupCommandInput}
 * @returns {@link RestoreFromDbBackupCommandOutput}
 * @see {@link RestoreFromDbBackupCommandInput} for command's `input` shape.
 * @see {@link RestoreFromDbBackupCommandOutput} for command's `response` shape.
 * @see {@link TimestreamInfluxDBClientResolvedConfig | config} for TimestreamInfluxDBClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource in Timestream for InfluxDB.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found or does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds the service quota.</p>
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
export class RestoreFromDbBackupCommand extends command<RestoreFromDbBackupCommandInput, RestoreFromDbBackupCommandOutput>(
  _ep0,
  _mw0,
  "RestoreFromDbBackup",
  RestoreFromDbBackup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreFromDbBackupInput;
      output: RestoreFromDbBackupOutput;
    };
    sdk: {
      input: RestoreFromDbBackupCommandInput;
      output: RestoreFromDbBackupCommandOutput;
    };
  };
}
