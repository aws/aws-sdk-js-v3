// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDbClusterInput, GetDbClusterOutput } from "../models/models_0";
import { de_GetDbClusterCommand, se_GetDbClusterCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link GetDbClusterCommand}.
 */
export interface GetDbClusterCommandInput extends GetDbClusterInput {}
/**
 * @public
 *
 * The output of {@link GetDbClusterCommand}.
 */
export interface GetDbClusterCommandOutput extends GetDbClusterOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a Timestream for InfluxDB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamInfluxDBClient, GetDbClusterCommand } from "@aws-sdk/client-timestream-influxdb"; // ES Modules import
 * // const { TimestreamInfluxDBClient, GetDbClusterCommand } = require("@aws-sdk/client-timestream-influxdb"); // CommonJS import
 * const client = new TimestreamInfluxDBClient(config);
 * const input = { // GetDbClusterInput
 *   dbClusterId: "STRING_VALUE", // required
 * };
 * const command = new GetDbClusterCommand(input);
 * const response = await client.send(command);
 * // { // GetDbClusterOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "AVAILABLE" || "FAILED" || "DELETED",
 * //   endpoint: "STRING_VALUE",
 * //   readerEndpoint: "STRING_VALUE",
 * //   port: Number("int"),
 * //   deploymentType: "MULTI_NODE_READ_REPLICAS",
 * //   dbInstanceType: "db.influx.medium" || "db.influx.large" || "db.influx.xlarge" || "db.influx.2xlarge" || "db.influx.4xlarge" || "db.influx.8xlarge" || "db.influx.12xlarge" || "db.influx.16xlarge" || "db.influx.24xlarge",
 * //   networkType: "IPV4" || "DUAL",
 * //   dbStorageType: "InfluxIOIncludedT1" || "InfluxIOIncludedT2" || "InfluxIOIncludedT3",
 * //   allocatedStorage: Number("int"),
 * //   publiclyAccessible: true || false,
 * //   dbParameterGroupIdentifier: "STRING_VALUE",
 * //   logDeliveryConfiguration: { // LogDeliveryConfiguration
 * //     s3Configuration: { // S3Configuration
 * //       bucketName: "STRING_VALUE", // required
 * //       enabled: true || false, // required
 * //     },
 * //   },
 * //   influxAuthParametersSecretArn: "STRING_VALUE",
 * //   vpcSubnetIds: [ // VpcSubnetIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   vpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   failoverMode: "AUTOMATIC" || "NO_FAILOVER",
 * // };
 *
 * ```
 *
 * @param GetDbClusterCommandInput - {@link GetDbClusterCommandInput}
 * @returns {@link GetDbClusterCommandOutput}
 * @see {@link GetDbClusterCommandInput} for command's `input` shape.
 * @see {@link GetDbClusterCommandOutput} for command's `response` shape.
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
export class GetDbClusterCommand extends $Command
  .classBuilder<
    GetDbClusterCommandInput,
    GetDbClusterCommandOutput,
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
  .s("AmazonTimestreamInfluxDB", "GetDbCluster", {})
  .n("TimestreamInfluxDBClient", "GetDbClusterCommand")
  .f(void 0, void 0)
  .ser(se_GetDbClusterCommand)
  .de(de_GetDbClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDbClusterInput;
      output: GetDbClusterOutput;
    };
    sdk: {
      input: GetDbClusterCommandInput;
      output: GetDbClusterCommandOutput;
    };
  };
}
