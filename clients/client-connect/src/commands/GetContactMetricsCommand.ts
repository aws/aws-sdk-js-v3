// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetContactMetricsRequest, GetContactMetricsResponse } from "../models/models_1";
import { GetContactMetrics } from "../schemas/schemas_0";

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
 * <p>Retrieves the position of the contact in the queue.</p>
 *          <p>
 *             <b>Use cases</b>
 *          </p>
 *          <p>Following are common uses cases for position in queue:</p>
 *          <ul>
 *             <li>
 *                <p>Understand the expected wait experience of a contact.</p>
 *             </li>
 *             <li>
 *                <p>Inform customers of their position in queue and potentially offer a callback.</p>
 *             </li>
 *             <li>
 *                <p>Make data-driven routing decisions between primary and alternative queues.</p>
 *             </li>
 *             <li>
 *                <p>Enhance queue visibility and leverage agent proficiencies to streamline contact routing.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Important things to know</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The only way to retrieve the position of the contact in queue is by using this API. You can't retrieve the
 *      position by using flows and attributes.</p>
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
 *       Name: "POSITION_IN_QUEUE", // required
 *     },
 *   ],
 * };
 * const command = new GetContactMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetContactMetricsResponse
 * //   MetricResults: [ // ContactMetricResults
 * //     { // ContactMetricResult
 * //       Name: "POSITION_IN_QUEUE", // required
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
  .sc(GetContactMetrics)
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
