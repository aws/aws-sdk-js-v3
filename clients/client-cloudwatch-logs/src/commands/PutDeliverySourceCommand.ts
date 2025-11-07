// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutDeliverySourceRequest, PutDeliverySourceResponse } from "../models/models_0";
import { PutDeliverySource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDeliverySourceCommand}.
 */
export interface PutDeliverySourceCommandInput extends PutDeliverySourceRequest {}
/**
 * @public
 *
 * The output of {@link PutDeliverySourceCommand}.
 */
export interface PutDeliverySourceCommandOutput extends PutDeliverySourceResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a logical <i>delivery source</i>. A delivery source
 *       represents an Amazon Web Services resource that sends logs to an logs delivery destination. The
 *       destination can be CloudWatch Logs, Amazon S3, Firehose or X-Ray for sending traces.</p>
 *          <p>To configure logs delivery between a delivery destination and an Amazon Web Services
 *       service that is supported as a delivery source, you must do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Use <code>PutDeliverySource</code> to create a delivery source, which is a logical
 *           object that represents the resource that is actually sending the logs. </p>
 *             </li>
 *             <li>
 *                <p>Use <code>PutDeliveryDestination</code> to create a <i>delivery
 *             destination</i>, which is a logical object that represents the actual delivery
 *           destination. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html">PutDeliveryDestination</a>.</p>
 *             </li>
 *             <li>
 *                <p>If you are delivering logs cross-account, you must use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html">PutDeliveryDestinationPolicy</a> in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 *         </p>
 *             </li>
 *             <li>
 *                <p>Use <code>CreateDelivery</code> to create a <i>delivery</i> by pairing
 *           exactly one delivery source and one delivery destination. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a>. </p>
 *             </li>
 *          </ul>
 *          <p>You can configure a single delivery source to send logs to multiple destinations by
 *       creating multiple deliveries. You can also create multiple deliveries to configure multiple
 *       delivery sources to send logs to the same delivery destination.</p>
 *          <p>Only some Amazon Web Services services support being configured as a delivery source. These
 *       services are listed as <b>Supported [V2 Permissions]</b> in the
 *       table at <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html">Enabling logging from
 *           Amazon Web Services services.</a>
 *          </p>
 *          <p>If you use this operation to update an existing delivery source, all the current delivery
 *       source parameters are overwritten with the new parameter values that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutDeliverySourceCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutDeliverySourceCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutDeliverySourceRequest
 *   name: "STRING_VALUE", // required
 *   resourceArn: "STRING_VALUE", // required
 *   logType: "STRING_VALUE", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutDeliverySourceCommand(input);
 * const response = await client.send(command);
 * // { // PutDeliverySourceResponse
 * //   deliverySource: { // DeliverySource
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     resourceArns: [ // ResourceArns
 * //       "STRING_VALUE",
 * //     ],
 * //     service: "STRING_VALUE",
 * //     logType: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutDeliverySourceCommandInput - {@link PutDeliverySourceCommandInput}
 * @returns {@link PutDeliverySourceCommandOutput}
 * @see {@link PutDeliverySourceCommandInput} for command's `input` shape.
 * @see {@link PutDeliverySourceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
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
export class PutDeliverySourceCommand extends $Command
  .classBuilder<
    PutDeliverySourceCommandInput,
    PutDeliverySourceCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "PutDeliverySource", {})
  .n("CloudWatchLogsClient", "PutDeliverySourceCommand")
  .sc(PutDeliverySource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDeliverySourceRequest;
      output: PutDeliverySourceResponse;
    };
    sdk: {
      input: PutDeliverySourceCommandInput;
      output: PutDeliverySourceCommandOutput;
    };
  };
}
