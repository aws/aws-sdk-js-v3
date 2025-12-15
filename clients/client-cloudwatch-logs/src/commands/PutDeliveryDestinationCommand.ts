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
import type { PutDeliveryDestinationRequest, PutDeliveryDestinationResponse } from "../models/models_0";
import { PutDeliveryDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDeliveryDestinationCommand}.
 */
export interface PutDeliveryDestinationCommandInput extends PutDeliveryDestinationRequest {}
/**
 * @public
 *
 * The output of {@link PutDeliveryDestinationCommand}.
 */
export interface PutDeliveryDestinationCommandOutput extends PutDeliveryDestinationResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a logical <i>delivery destination</i>. A delivery
 *       destination is an Amazon Web Services resource that represents an Amazon Web Services service
 *       that logs can be sent to. CloudWatch Logs, Amazon S3, and Firehose are
 *       supported as logs delivery destinations and X-Ray as the trace delivery
 *       destination.</p>
 *          <p>To configure logs delivery between a supported Amazon Web Services service and a
 *       destination, you must do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Create a delivery source, which is a logical object that represents the resource that
 *           is actually sending the logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html">PutDeliverySource</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>PutDeliveryDestination</code> to create a <i>delivery
 *             destination</i> in the same account of the actual delivery destination. The
 *           delivery destination that you create is a logical object that represents the actual
 *           delivery destination. </p>
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
 *          <p>If you use this operation to update an existing delivery destination, all the current
 *       delivery destination parameters are overwritten with the new parameter values that you
 *       specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutDeliveryDestinationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutDeliveryDestinationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutDeliveryDestinationRequest
 *   name: "STRING_VALUE", // required
 *   outputFormat: "json" || "plain" || "w3c" || "raw" || "parquet",
 *   deliveryDestinationConfiguration: { // DeliveryDestinationConfiguration
 *     destinationResourceArn: "STRING_VALUE", // required
 *   },
 *   deliveryDestinationType: "S3" || "CWL" || "FH" || "XRAY",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutDeliveryDestinationCommand(input);
 * const response = await client.send(command);
 * // { // PutDeliveryDestinationResponse
 * //   deliveryDestination: { // DeliveryDestination
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     deliveryDestinationType: "S3" || "CWL" || "FH" || "XRAY",
 * //     outputFormat: "json" || "plain" || "w3c" || "raw" || "parquet",
 * //     deliveryDestinationConfiguration: { // DeliveryDestinationConfiguration
 * //       destinationResourceArn: "STRING_VALUE", // required
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutDeliveryDestinationCommandInput - {@link PutDeliveryDestinationCommandInput}
 * @returns {@link PutDeliveryDestinationCommandOutput}
 * @see {@link PutDeliveryDestinationCommandInput} for command's `input` shape.
 * @see {@link PutDeliveryDestinationCommandOutput} for command's `response` shape.
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
export class PutDeliveryDestinationCommand extends $Command
  .classBuilder<
    PutDeliveryDestinationCommandInput,
    PutDeliveryDestinationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "PutDeliveryDestination", {})
  .n("CloudWatchLogsClient", "PutDeliveryDestinationCommand")
  .sc(PutDeliveryDestination$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDeliveryDestinationRequest;
      output: PutDeliveryDestinationResponse;
    };
    sdk: {
      input: PutDeliveryDestinationCommandInput;
      output: PutDeliveryDestinationCommandOutput;
    };
  };
}
