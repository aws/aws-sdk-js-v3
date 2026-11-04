// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFleetMetricRequest } from "../models/models_2";
import { UpdateFleetMetric$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFleetMetricCommand}.
 */
export interface UpdateFleetMetricCommandInput extends UpdateFleetMetricRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFleetMetricCommand}.
 */
export interface UpdateFleetMetricCommandOutput extends __MetadataBearer {}

/**
 * Updates the data for a fleet metric.
 *
 * Requires permission to access the [UpdateFleetMetric](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateFleetMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateFleetMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateFleetMetricRequest
 *   metricName: "STRING_VALUE", // required
 *   queryString: "STRING_VALUE",
 *   aggregationType: { // AggregationType
 *     name: "Statistics" || "Percentiles" || "Cardinality", // required
 *     values: [ // AggregationTypeValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   period: Number("int"),
 *   aggregationField: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   queryVersion: "STRING_VALUE",
 *   indexName: "STRING_VALUE", // required
 *   unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *   expectedVersion: Number("long"),
 * };
 * const command = new UpdateFleetMetricCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFleetMetricCommandInput - {@link UpdateFleetMetricCommandInput}
 * @returns {@link UpdateFleetMetricCommandOutput}
 * @see {@link UpdateFleetMetricCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link IndexNotReadyException} (client fault)
 *
 * The index is not ready.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidAggregationException} (client fault)
 *
 * The aggregation is invalid.
 *
 * @throws {@link InvalidQueryException} (client fault)
 *
 * The query is invalid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link VersionConflictException} (client fault)
 *
 * An exception thrown when the version of an entity specified with the `expectedVersion` parameter does not match the latest version in the system.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class UpdateFleetMetricCommand extends command<UpdateFleetMetricCommandInput, UpdateFleetMetricCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFleetMetric",
  UpdateFleetMetric$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFleetMetricRequest;
      output: {};
    };
    sdk: {
      input: UpdateFleetMetricCommandInput;
      output: UpdateFleetMetricCommandOutput;
    };
  };
}
