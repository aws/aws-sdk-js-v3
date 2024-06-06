// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetBucketMetricDataRequest, GetBucketMetricDataResult } from "../models/models_0";
import { de_GetBucketMetricDataCommand, se_GetBucketMetricDataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketMetricDataCommand}.
 */
export interface GetBucketMetricDataCommandInput extends GetBucketMetricDataRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketMetricDataCommand}.
 */
export interface GetBucketMetricDataCommandOutput extends GetBucketMetricDataResult, __MetadataBearer {}

/**
 * <p>Returns the data points of a specific metric for an Amazon Lightsail bucket.</p>
 *          <p>Metrics report the utilization of a bucket. View and collect metric data regularly to
 *       monitor the number of objects stored in a bucket (including object versions) and the storage
 *       space used by those objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBucketMetricDataCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBucketMetricDataCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetBucketMetricDataRequest
 *   bucketName: "STRING_VALUE", // required
 *   metricName: "BucketSizeBytes" || "NumberOfObjects", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   period: Number("int"), // required
 *   statistics: [ // MetricStatisticList // required
 *     "Minimum" || "Maximum" || "Sum" || "Average" || "SampleCount",
 *   ],
 *   unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None", // required
 * };
 * const command = new GetBucketMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketMetricDataResult
 * //   metricName: "BucketSizeBytes" || "NumberOfObjects",
 * //   metricData: [ // MetricDatapointList
 * //     { // MetricDatapoint
 * //       average: Number("double"),
 * //       maximum: Number("double"),
 * //       minimum: Number("double"),
 * //       sampleCount: Number("double"),
 * //       sum: Number("double"),
 * //       timestamp: new Date("TIMESTAMP"),
 * //       unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketMetricDataCommandInput - {@link GetBucketMetricDataCommandInput}
 * @returns {@link GetBucketMetricDataCommandOutput}
 * @see {@link GetBucketMetricDataCommandInput} for command's `input` shape.
 * @see {@link GetBucketMetricDataCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 * @public
 */
export class GetBucketMetricDataCommand extends $Command
  .classBuilder<
    GetBucketMetricDataCommandInput,
    GetBucketMetricDataCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetBucketMetricData", {})
  .n("LightsailClient", "GetBucketMetricDataCommand")
  .f(void 0, void 0)
  .ser(se_GetBucketMetricDataCommand)
  .de(de_GetBucketMetricDataCommand)
  .build() {}
