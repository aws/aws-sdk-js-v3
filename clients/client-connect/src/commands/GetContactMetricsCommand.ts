// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetContactMetricsRequest, GetContactMetricsResponse } from "../models/models_1";
import { GetContactMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves contact metric data for a specified contact.</p>
 *          <p>
 *             <b>Use cases</b>
 *          </p>
 *          <p>Following are common use cases for position in queue and estimated wait time:</p>
 *          <ul>
 *             <li>
 *                <p>Customer-Facing Wait Time Announcements - Display or announce the estimated wait time and position in queue to customers before or during their queue experience.
 *     </p>
 *             </li>
 *             <li>
 *                <p>Callback Offerings - Offer customers a callback option when the estimated wait time or position in queue exceeds a defined threshold.
 *     </p>
 *             </li>
 *             <li>
 *                <p>Queue Routing Decisions - Route incoming contacts to less congested queues by comparing estimated wait time and position in queue across multiple queues.
 *     </p>
 *             </li>
 *             <li>
 *                <p>Self-Service Deflection - Redirect customers to self-service options like chatbots or FAQs when estimated wait time is high or position in queue is unfavorable.
 *     </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Important things to know</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Metrics are only available while the contact is actively in queue.</p>
 *             </li>
 *             <li>
 *                <p>For more information, see the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html">Position in queue</a> metric in the <i>Amazon Connect Administrator Guide</i>. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Endpoints</b>: See <a href="https://docs.aws.amazon.com/general/latest/gr/connect_region.html">Amazon Connect endpoints and quotas</a>.</p>
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
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class GetContactMetricsCommand extends $Command
  .classBuilder<
    GetContactMetricsCommandInput,
    GetContactMetricsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "GetContactMetrics", {})
  .n("ConnectClient", "GetContactMetricsCommand")
  .sc(GetContactMetrics$)
  .build() {
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
