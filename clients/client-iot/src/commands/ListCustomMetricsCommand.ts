// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCustomMetricsRequest, ListCustomMetricsResponse } from "../models/models_1";
import { ListCustomMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCustomMetricsCommand}.
 */
export interface ListCustomMetricsCommandInput extends ListCustomMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomMetricsCommand}.
 */
export interface ListCustomMetricsCommandOutput extends ListCustomMetricsResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.</p>
 *          </note>
 *          <p>
 *       Lists your Device Defender detect custom metrics.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCustomMetrics</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCustomMetricsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCustomMetricsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListCustomMetricsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCustomMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomMetricsResponse
 * //   metricNames: [ // MetricNames
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomMetricsCommandInput - {@link ListCustomMetricsCommandInput}
 * @returns {@link ListCustomMetricsCommandOutput}
 * @see {@link ListCustomMetricsCommandInput} for command's `input` shape.
 * @see {@link ListCustomMetricsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class ListCustomMetricsCommand extends command<ListCustomMetricsCommandInput, ListCustomMetricsCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomMetrics",
  ListCustomMetrics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomMetricsRequest;
      output: ListCustomMetricsResponse;
    };
    sdk: {
      input: ListCustomMetricsCommandInput;
      output: ListCustomMetricsCommandOutput;
    };
  };
}
