// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetContactMetricsRequest, GetContactMetricsResponse } from "../models/models_2";
import { GetContactMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetContactMetricsCommand}.
 */
export interface GetContactMetricsCommandInput extends GetContactMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetContactMetricsCommand}.
 */
export interface GetContactMetricsCommandOutput extends GetContactMetricsResponse, __MetadataBearer {}

/**
 * Retrieves contact metric data for a specified contact.
 *
 * **Use cases**
 *
 * Following are common use cases for position in queue and estimated wait time:
 *
 * - Customer-Facing Wait Time Announcements - Display or announce the estimated wait time and position in queue to customers before or during their queue experience.
 * - Callback Offerings - Offer customers a callback option when the estimated wait time or position in queue exceeds a defined threshold.
 * - Queue Routing Decisions - Route incoming contacts to less congested queues by comparing estimated wait time and position in queue across multiple queues.
 * - Self-Service Deflection - Redirect customers to self-service options like chatbots or FAQs when estimated wait time is high or position in queue is unfavorable.
 *
 * **Important things to know**
 *
 * - Metrics are only available while the contact is actively in queue.
 * - For more information, see the [Position in queue](https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html) metric in the *Connect Customer Administrator Guide*.
 *
 * **Endpoints**: See [Connect Customer endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/connect_region.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetContactMetricsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetContactMetricsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // GetContactMetricsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   Metrics: [ // ContactMetrics // required
 *     { // ContactMetricInfo
 *       Name: "ESTIMATED_WAIT_TIME" || "POSITION_IN_QUEUE", // required
 *     },
 *   ],
 * };
 * const command = new GetContactMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetContactMetricsResponse
 * //   MetricResults: [ // ContactMetricResults
 * //     { // ContactMetricResult
 * //       Name: "ESTIMATED_WAIT_TIME" || "POSITION_IN_QUEUE", // required
 * //       Value: { // ContactMetricValue Union: only one key present
 * //         Number: Number("double"),
 * //       },
 * //     },
 * //   ],
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetContactMetricsCommandInput - {@link GetContactMetricsCommandInput}
 * @returns {@link GetContactMetricsCommandOutput}
 * @see {@link GetContactMetricsCommandInput} for command's `input` shape.
 * @see {@link GetContactMetricsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class GetContactMetricsCommand extends command<GetContactMetricsCommandInput, GetContactMetricsCommandOutput>(
  _ep0,
  _mw0,
  "GetContactMetrics",
  GetContactMetrics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContactMetricsRequest;
      output: GetContactMetricsResponse;
    };
    sdk: {
      input: GetContactMetricsCommandInput;
      output: GetContactMetricsCommandOutput;
    };
  };
}
