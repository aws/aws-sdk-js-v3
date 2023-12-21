// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeliveryRequest, GetDeliveryResponse } from "../models/models_0";
import { de_GetDeliveryCommand, se_GetDeliveryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeliveryCommand}.
 */
export interface GetDeliveryCommandInput extends GetDeliveryRequest {}
/**
 * @public
 *
 * The output of {@link GetDeliveryCommand}.
 */
export interface GetDeliveryCommandOutput extends GetDeliveryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns complete information about one <i>delivery</i>. A delivery is a connection between a logical <i>delivery source</i> and a logical
 *        <i>delivery destination</i>
 *          </p>
 *          <p>You need to specify the delivery <code>id</code> in this operation. You can find the IDs of the deliveries in your account with the
 *        <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html">DescribeDeliveries</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetDeliveryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetDeliveryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetDeliveryRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetDeliveryCommand(input);
 * const response = await client.send(command);
 * // { // GetDeliveryResponse
 * //   delivery: { // Delivery
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     deliverySourceName: "STRING_VALUE",
 * //     deliveryDestinationArn: "STRING_VALUE",
 * //     deliveryDestinationType: "S3" || "CWL" || "FH",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeliveryCommandInput - {@link GetDeliveryCommandInput}
 * @returns {@link GetDeliveryCommandOutput}
 * @see {@link GetDeliveryCommandInput} for command's `input` shape.
 * @see {@link GetDeliveryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class GetDeliveryCommand extends $Command
  .classBuilder<
    GetDeliveryCommandInput,
    GetDeliveryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: CloudWatchLogsClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "GetDelivery", {})
  .n("CloudWatchLogsClient", "GetDeliveryCommand")
  .f(void 0, void 0)
  .ser(se_GetDeliveryCommand)
  .de(de_GetDeliveryCommand)
  .build() {}
