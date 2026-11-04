// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFleetMetricsRequest, ListFleetMetricsResponse } from "../models/models_1";
import { ListFleetMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFleetMetricsCommand}.
 */
export interface ListFleetMetricsCommandInput extends ListFleetMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListFleetMetricsCommand}.
 */
export interface ListFleetMetricsCommandOutput extends ListFleetMetricsResponse, __MetadataBearer {}

/**
 * Lists all your fleet metrics.
 *
 * Requires permission to access the [ListFleetMetrics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListFleetMetricsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListFleetMetricsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListFleetMetricsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFleetMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListFleetMetricsResponse
 * //   fleetMetrics: [ // FleetMetricNameAndArnList
 * //     { // FleetMetricNameAndArn
 * //       metricName: "STRING_VALUE",
 * //       metricArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFleetMetricsCommandInput - {@link ListFleetMetricsCommandInput}
 * @returns {@link ListFleetMetricsCommandOutput}
 * @see {@link ListFleetMetricsCommandInput} for command's `input` shape.
 * @see {@link ListFleetMetricsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
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
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListFleetMetricsCommand extends command<ListFleetMetricsCommandInput, ListFleetMetricsCommandOutput>(
  _ep0,
  _mw0,
  "ListFleetMetrics",
  ListFleetMetrics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFleetMetricsRequest;
      output: ListFleetMetricsResponse;
    };
    sdk: {
      input: ListFleetMetricsCommandInput;
      output: ListFleetMetricsCommandOutput;
    };
  };
}
