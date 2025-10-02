// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListMetricValuesRequest, ListMetricValuesResponse } from "../models/models_2";
import { de_ListMetricValuesCommand, se_ListMetricValuesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMetricValuesCommand}.
 */
export interface ListMetricValuesCommandInput extends ListMetricValuesRequest {}
/**
 * @public
 *
 * The output of {@link ListMetricValuesCommand}.
 */
export interface ListMetricValuesCommandOutput extends ListMetricValuesResponse, __MetadataBearer {}

/**
 * <p>Lists the values reported for an IoT Device Defender metric (device-side metric, cloud-side metric, or custom metric)
 *       by the given thing during the specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListMetricValuesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListMetricValuesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListMetricValuesRequest
 *   thingName: "STRING_VALUE", // required
 *   metricName: "STRING_VALUE", // required
 *   dimensionName: "STRING_VALUE",
 *   dimensionValueOperator: "IN" || "NOT_IN",
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMetricValuesCommand(input);
 * const response = await client.send(command);
 * // { // ListMetricValuesResponse
 * //   metricDatumList: [ // MetricDatumList
 * //     { // MetricDatum
 * //       timestamp: new Date("TIMESTAMP"),
 * //       value: { // MetricValue
 * //         count: Number("long"),
 * //         cidrs: [ // Cidrs
 * //           "STRING_VALUE",
 * //         ],
 * //         ports: [ // Ports
 * //           Number("int"),
 * //         ],
 * //         number: Number("double"),
 * //         numbers: [ // NumberList
 * //           Number("double"),
 * //         ],
 * //         strings: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMetricValuesCommandInput - {@link ListMetricValuesCommandInput}
 * @returns {@link ListMetricValuesCommandOutput}
 * @see {@link ListMetricValuesCommandInput} for command's `input` shape.
 * @see {@link ListMetricValuesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListMetricValuesCommand extends $Command
  .classBuilder<
    ListMetricValuesCommandInput,
    ListMetricValuesCommandOutput,
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
  .s("AWSIotService", "ListMetricValues", {})
  .n("IoTClient", "ListMetricValuesCommand")
  .f(void 0, void 0)
  .ser(se_ListMetricValuesCommand)
  .de(de_ListMetricValuesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMetricValuesRequest;
      output: ListMetricValuesResponse;
    };
    sdk: {
      input: ListMetricValuesCommandInput;
      output: ListMetricValuesCommandOutput;
    };
  };
}
