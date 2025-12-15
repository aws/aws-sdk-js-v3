// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDbClusterInput, CreateDbClusterOutput } from "../models/models_0";
import { CreateDbCluster$ } from "../schemas/schemas_0";
import type {
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
 * The input for {@link CreateDbClusterCommand}.
 */
export interface CreateDbClusterCommandInput extends CreateDbClusterInput {}
/**
 * @public
 *
 * The output of {@link CreateDbClusterCommand}.
 */
export interface CreateDbClusterCommandOutput extends CreateDbClusterOutput, __MetadataBearer {}

/**
 * <p>Creates a new Timestream for InfluxDB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, CreateDbClusterCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, CreateDbClusterCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * // import type { TimestreamInfluxDBClientConfig } from "@aws-sdk/client-timestream-influxdb";
 * const config = {}; // type is TimestreamInfluxDBClientConfig
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // CreateDbClusterInput
 *   name: "STRING_VALUE", // required
 *   username: "STRING_VALUE",
 *   password: "STRING_VALUE",
 *   organization: "STRING_VALUE",
 *   bucket: "STRING_VALUE",
 *   port: Number("int"),
 *   dbParameterGroupIdentifier: "STRING_VALUE",
 *   dbInstanceType: "db.influx.medium" || "db.influx.large" || "db.influx.xlarge" || "db.influx.2xlarge" || "db.influx.4xlarge" || "db.influx.8xlarge" || "db.influx.12xlarge" || "db.influx.16xlarge" || "db.influx.24xlarge", // required
 *   dbStorageType: "InfluxIOIncludedT1" || "InfluxIOIncludedT2" || "InfluxIOIncludedT3",
 *   allocatedStorage: Number("int"),
 *   networkType: "IPV4" || "DUAL",
 *   publiclyAccessible: true || false,
 *   vpcSubnetIds: [ // VpcSubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   vpcSecurityGroupIds: [ // VpcSecurityGroupIdList // required
 *     "STRING_VALUE",
 *   ],
 *   deploymentType: "MULTI_NODE_READ_REPLICAS",
 *   failoverMode: "AUTOMATIC" || "NO_FAILOVER",
 *   logDeliveryConfiguration: { // LogDeliveryConfiguration
 *     s3Configuration: { // S3Configuration
 *       bucketName: "STRING_VALUE", // required
 *       enabled: true || false, // required
 *     },
 *   },
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDbClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateDbClusterOutput
 * //   dbClusterId: "STRING_VALUE",
 * //   dbClusterStatus: "CREATING" || "UPDATING" || "DELETING" || "AVAILABLE" || "FAILED" || "DELETED" || "MAINTENANCE",
 * // };
 *
 * ```
 *
 * @param CreateDbClusterCommandInput - {@link CreateDbClusterCommandInput}
 * @returns {@link CreateDbClusterCommandOutput}
 * @see {@link CreateDbClusterCommandInput} for command's `input` shape.
 * @see {@link CreateDbClusterCommandOutput} for command's `response` shape.
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
export class CreateDbClusterCommand extends $Command
  .classBuilder<
    CreateDbClusterCommandInput,
    CreateDbClusterCommandOutput,
    TimestreamInfluxDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamInfluxDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonTimestreamInfluxDB", "CreateDbCluster", {})
  .n("TimestreamInfluxDBClient", "CreateDbClusterCommand")
  .sc(CreateDbCluster$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDbClusterInput;
      output: CreateDbClusterOutput;
    };
    sdk: {
      input: CreateDbClusterCommandInput;
      output: CreateDbClusterCommandOutput;
    };
  };
}
