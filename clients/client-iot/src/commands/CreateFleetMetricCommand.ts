// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateFleetMetricRequest, CreateFleetMetricResponse } from "../models/models_0";
import { de_CreateFleetMetricCommand, se_CreateFleetMetricCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFleetMetricCommand}.
 */
export interface CreateFleetMetricCommandInput extends CreateFleetMetricRequest {}
/**
 * @public
 *
 * The output of {@link CreateFleetMetricCommand}.
 */
export interface CreateFleetMetricCommandOutput extends CreateFleetMetricResponse, __MetadataBearer {}

/**
 * <p>Creates a fleet metric.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateFleetMetric</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateFleetMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateFleetMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // CreateFleetMetricRequest
 *   metricName: "STRING_VALUE", // required
 *   queryString: "STRING_VALUE", // required
 *   aggregationType: { // AggregationType
 *     name: "Statistics" || "Percentiles" || "Cardinality", // required
 *     values: [ // AggregationTypeValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   period: Number("int"), // required
 *   aggregationField: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   queryVersion: "STRING_VALUE",
 *   indexName: "STRING_VALUE",
 *   unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateFleetMetricCommand(input);
 * const response = await client.send(command);
 * // { // CreateFleetMetricResponse
 * //   metricName: "STRING_VALUE",
 * //   metricArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFleetMetricCommandInput - {@link CreateFleetMetricCommandInput}
 * @returns {@link CreateFleetMetricCommandOutput}
 * @see {@link CreateFleetMetricCommandInput} for command's `input` shape.
 * @see {@link CreateFleetMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link IndexNotReadyException} (client fault)
 *  <p>The index is not ready.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidAggregationException} (client fault)
 *  <p>The aggregation is invalid.</p>
 *
 * @throws {@link InvalidQueryException} (client fault)
 *  <p>The query is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class CreateFleetMetricCommand extends $Command
  .classBuilder<
    CreateFleetMetricCommandInput,
    CreateFleetMetricCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "CreateFleetMetric", {})
  .n("IoTClient", "CreateFleetMetricCommand")
  .f(void 0, void 0)
  .ser(se_CreateFleetMetricCommand)
  .de(de_CreateFleetMetricCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFleetMetricRequest;
      output: CreateFleetMetricResponse;
    };
    sdk: {
      input: CreateFleetMetricCommandInput;
      output: CreateFleetMetricCommandOutput;
    };
  };
}
