// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDeliveryRequest, GetDeliveryResponse } from "../models/models_0";
import { GetDelivery } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns complete information about one logical <i>delivery</i>. A delivery
 *       is a connection between a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html">
 *                <i>delivery
 *           source</i>
 *             </a> and a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html">
 *                <i>delivery destination</i>
 *             </a>.</p>
 *          <p>A delivery source represents an Amazon Web Services resource that sends logs to an logs
 *       delivery destination. The destination can be CloudWatch Logs, Amazon S3, or Firehose. Only some Amazon Web Services services support being configured as a delivery
 *       source. These services are listed in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html">Enable logging from
 *           Amazon Web Services services.</a>
 *          </p>
 *          <p>You need to specify the delivery <code>id</code> in this operation. You can find the IDs
 *       of the deliveries in your account with the <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeDeliveries.html">DescribeDeliveries</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetDeliveryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetDeliveryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
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
 * //     deliveryDestinationType: "S3" || "CWL" || "FH" || "XRAY",
 * //     recordFields: [ // RecordFields
 * //       "STRING_VALUE",
 * //     ],
 * //     fieldDelimiter: "STRING_VALUE",
 * //     s3DeliveryConfiguration: { // S3DeliveryConfiguration
 * //       suffixPath: "STRING_VALUE",
 * //       enableHiveCompatiblePath: true || false,
 * //     },
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
 *
 * @public
 */
export class GetDeliveryCommand extends $Command
  .classBuilder<
    GetDeliveryCommandInput,
    GetDeliveryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "GetDelivery", {})
  .n("CloudWatchLogsClient", "GetDeliveryCommand")
  .sc(GetDelivery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeliveryRequest;
      output: GetDeliveryResponse;
    };
    sdk: {
      input: GetDeliveryCommandInput;
      output: GetDeliveryCommandOutput;
    };
  };
}
