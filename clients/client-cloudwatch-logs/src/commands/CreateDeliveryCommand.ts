// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDeliveryRequest, CreateDeliveryResponse } from "../models/models_0";
import { de_CreateDeliveryCommand, se_CreateDeliveryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeliveryCommand}.
 */
export interface CreateDeliveryCommandInput extends CreateDeliveryRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeliveryCommand}.
 */
export interface CreateDeliveryCommandOutput extends CreateDeliveryResponse, __MetadataBearer {}

/**
 * <p>Creates a <i>delivery</i>. A delivery is a connection between a logical
 *         <i>delivery source</i> and a logical <i>delivery destination</i>
 *       that you have already created.</p>
 *          <p>Only some Amazon Web Services services support being configured as a delivery source using
 *       this operation. These services are listed as <b>Supported [V2
 *         Permissions]</b> in the table at <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html">Enabling logging from
 *           Amazon Web Services services.</a>
 *          </p>
 *          <p>A delivery destination can represent a log group in CloudWatch Logs, an Amazon S3 bucket, a delivery stream in Firehose, or X-Ray.</p>
 *          <p>To configure logs delivery between a supported Amazon Web Services service and a
 *       destination, you must do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Create a delivery source, which is a logical object that represents the resource that
 *           is actually sending the logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html">PutDeliverySource</a>.</p>
 *             </li>
 *             <li>
 *                <p>Create a <i>delivery destination</i>, which is a logical object that
 *           represents the actual delivery destination. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html">PutDeliveryDestination</a>.</p>
 *             </li>
 *             <li>
 *                <p>If you are delivering logs cross-account, you must use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html">PutDeliveryDestinationPolicy</a> in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 *         </p>
 *             </li>
 *             <li>
 *                <p>Use <code>CreateDelivery</code> to create a <i>delivery</i> by pairing
 *           exactly one delivery source and one delivery destination. </p>
 *             </li>
 *          </ul>
 *          <p>You can configure a single delivery source to send logs to multiple destinations by
 *       creating multiple deliveries. You can also create multiple deliveries to configure multiple
 *       delivery sources to send logs to the same delivery destination.</p>
 *          <p>To update an existing delivery configuration, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateDeliveryConfiguration.html">UpdateDeliveryConfiguration</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CreateDeliveryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CreateDeliveryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // CreateDeliveryRequest
 *   deliverySourceName: "STRING_VALUE", // required
 *   deliveryDestinationArn: "STRING_VALUE", // required
 *   recordFields: [ // RecordFields
 *     "STRING_VALUE",
 *   ],
 *   fieldDelimiter: "STRING_VALUE",
 *   s3DeliveryConfiguration: { // S3DeliveryConfiguration
 *     suffixPath: "STRING_VALUE",
 *     enableHiveCompatiblePath: true || false,
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDeliveryCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeliveryResponse
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
 * @param CreateDeliveryCommandInput - {@link CreateDeliveryCommandInput}
 * @returns {@link CreateDeliveryCommandOutput}
 * @see {@link CreateDeliveryCommandInput} for command's `input` shape.
 * @see {@link CreateDeliveryCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
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
export class CreateDeliveryCommand extends $Command
  .classBuilder<
    CreateDeliveryCommandInput,
    CreateDeliveryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "CreateDelivery", {})
  .n("CloudWatchLogsClient", "CreateDeliveryCommand")
  .f(void 0, void 0)
  .ser(se_CreateDeliveryCommand)
  .de(de_CreateDeliveryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeliveryRequest;
      output: CreateDeliveryResponse;
    };
    sdk: {
      input: CreateDeliveryCommandInput;
      output: CreateDeliveryCommandOutput;
    };
  };
}
