// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateDbInstanceInput,
  CreateDbInstanceInputFilterSensitiveLog,
  CreateDbInstanceOutput,
} from "../models/models_0";
import { de_CreateDbInstanceCommand, se_CreateDbInstanceCommand } from "../protocols/Aws_json1_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  TimestreamInfluxDBClientResolvedConfig,
} from "../TimestreamInfluxDBClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDbInstanceCommand}.
 */
export interface CreateDbInstanceCommandInput extends CreateDbInstanceInput {}
/**
 * @public
 *
 * The output of {@link CreateDbInstanceCommand}.
 */
export interface CreateDbInstanceCommandOutput extends CreateDbInstanceOutput, __MetadataBearer {}

/**
 * <p>Creates a new Timestream for InfluxDB DB instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, CreateDbInstanceCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, CreateDbInstanceCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // CreateDbInstanceInput
 *   name: "STRING_VALUE", // required
 *   username: "STRING_VALUE",
 *   password: "STRING_VALUE", // required
 *   organization: "STRING_VALUE",
 *   bucket: "STRING_VALUE",
 *   dbInstanceType: "db.influx.medium" || "db.influx.large" || "db.influx.xlarge" || "db.influx.2xlarge" || "db.influx.4xlarge" || "db.influx.8xlarge" || "db.influx.12xlarge" || "db.influx.16xlarge" || "db.influx.24xlarge", // required
 *   vpcSubnetIds: [ // VpcSubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   vpcSecurityGroupIds: [ // VpcSecurityGroupIdList // required
 *     "STRING_VALUE",
 *   ],
 *   publiclyAccessible: true || false,
 *   dbStorageType: "InfluxIOIncludedT1" || "InfluxIOIncludedT2" || "InfluxIOIncludedT3",
 *   allocatedStorage: Number("int"), // required
 *   dbParameterGroupIdentifier: "STRING_VALUE",
 *   deploymentType: "SINGLE_AZ" || "WITH_MULTIAZ_STANDBY",
 *   logDeliveryConfiguration: { // LogDeliveryConfiguration
 *     s3Configuration: { // S3Configuration
 *       bucketName: "STRING_VALUE", // required
 *       enabled: true || false, // required
 *     },
 *   },
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   port: Number("int"),
 *   networkType: "IPV4" || "DUAL",
 * };
 * const command = new CreateDbInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateDbInstanceOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "CREATING" || "AVAILABLE" || "DELETING" || "MODIFYING" || "UPDATING" || "DELETED" || "FAILED" || "UPDATING_DEPLOYMENT_TYPE" || "UPDATING_INSTANCE_TYPE" || "MAINTENANCE",
 * //   endpoint: "STRING_VALUE",
 * //   port: Number("int"),
 * //   networkType: "IPV4" || "DUAL",
 * //   dbInstanceType: "db.influx.medium" || "db.influx.large" || "db.influx.xlarge" || "db.influx.2xlarge" || "db.influx.4xlarge" || "db.influx.8xlarge" || "db.influx.12xlarge" || "db.influx.16xlarge" || "db.influx.24xlarge",
 * //   dbStorageType: "InfluxIOIncludedT1" || "InfluxIOIncludedT2" || "InfluxIOIncludedT3",
 * //   allocatedStorage: Number("int"),
 * //   deploymentType: "SINGLE_AZ" || "WITH_MULTIAZ_STANDBY",
 * //   vpcSubnetIds: [ // VpcSubnetIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   publiclyAccessible: true || false,
 * //   vpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   dbParameterGroupIdentifier: "STRING_VALUE",
 * //   availabilityZone: "STRING_VALUE",
 * //   secondaryAvailabilityZone: "STRING_VALUE",
 * //   logDeliveryConfiguration: { // LogDeliveryConfiguration
 * //     s3Configuration: { // S3Configuration
 * //       bucketName: "STRING_VALUE", // required
 * //       enabled: true || false, // required
 * //     },
 * //   },
 * //   influxAuthParametersSecretArn: "STRING_VALUE",
 * //   dbClusterId: "STRING_VALUE",
 * //   instanceMode: "PRIMARY" || "STANDBY" || "REPLICA",
 * // };
 *
 * ```
 *
 * @param CreateDbInstanceCommandInput - {@link CreateDbInstanceCommandInput}
 * @returns {@link CreateDbInstanceCommandOutput}
 * @see {@link CreateDbInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateDbInstanceCommandOutput} for command's `response` shape.
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
export class CreateDbInstanceCommand extends $Command
  .classBuilder<
    CreateDbInstanceCommandInput,
    CreateDbInstanceCommandOutput,
    TimestreamInfluxDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamInfluxDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonTimestreamInfluxDB", "CreateDbInstance", {})
  .n("TimestreamInfluxDBClient", "CreateDbInstanceCommand")
  .f(CreateDbInstanceInputFilterSensitiveLog, void 0)
  .ser(se_CreateDbInstanceCommand)
  .de(de_CreateDbInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDbInstanceInput;
      output: CreateDbInstanceOutput;
    };
    sdk: {
      input: CreateDbInstanceCommandInput;
      output: CreateDbInstanceCommandOutput;
    };
  };
}
