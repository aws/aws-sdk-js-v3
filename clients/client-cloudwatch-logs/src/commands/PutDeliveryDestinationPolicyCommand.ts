// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutDeliveryDestinationPolicyRequest, PutDeliveryDestinationPolicyResponse } from "../models/models_0";
import {
  de_PutDeliveryDestinationPolicyCommand,
  se_PutDeliveryDestinationPolicyCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDeliveryDestinationPolicyCommand}.
 */
export interface PutDeliveryDestinationPolicyCommandInput extends PutDeliveryDestinationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutDeliveryDestinationPolicyCommand}.
 */
export interface PutDeliveryDestinationPolicyCommandOutput
  extends PutDeliveryDestinationPolicyResponse,
    __MetadataBearer {}

/**
 * <p>Creates and assigns an IAM policy that grants permissions to CloudWatch Logs to deliver
 *        logs cross-account to a specified destination in this account. To configure the delivery of logs from an
 *      Amazon Web Services service in another account to a logs delivery destination in the current account, you must do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Create a delivery source, which is a logical object that represents the resource that is actually
 *          sending the logs. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html">PutDeliverySource</a>.</p>
 *             </li>
 *             <li>
 *                <p>Create a <i>delivery destination</i>, which is a logical object that represents the actual
 *          delivery destination.  For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html">PutDeliveryDestination</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use this operation in the destination account to assign an IAM policy to the
 *          destination. This policy allows delivery to that destination.
 *         </p>
 *             </li>
 *             <li>
 *                <p>Create a <i>delivery</i> by pairing exactly one delivery source and one delivery destination.
 *          For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a>.</p>
 *             </li>
 *          </ul>
 *          <p>Only some Amazon Web Services services support being configured as a delivery source. These services are listed
 *        as <b>Supported [V2 Permissions]</b> in the table at
 *        <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html">Enabling
 *          logging from Amazon Web Services services.</a>
 *          </p>
 *          <p>The contents of the policy must include two statements. One statement enables general logs delivery, and the other
 *     allows delivery to the chosen destination. See the examples for the needed policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutDeliveryDestinationPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutDeliveryDestinationPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutDeliveryDestinationPolicyRequest
 *   deliveryDestinationName: "STRING_VALUE", // required
 *   deliveryDestinationPolicy: "STRING_VALUE", // required
 * };
 * const command = new PutDeliveryDestinationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutDeliveryDestinationPolicyResponse
 * //   policy: { // Policy
 * //     deliveryDestinationPolicy: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutDeliveryDestinationPolicyCommandInput - {@link PutDeliveryDestinationPolicyCommandInput}
 * @returns {@link PutDeliveryDestinationPolicyCommandOutput}
 * @see {@link PutDeliveryDestinationPolicyCommandInput} for command's `input` shape.
 * @see {@link PutDeliveryDestinationPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 * @public
 */
export class PutDeliveryDestinationPolicyCommand extends $Command
  .classBuilder<
    PutDeliveryDestinationPolicyCommandInput,
    PutDeliveryDestinationPolicyCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "PutDeliveryDestinationPolicy", {})
  .n("CloudWatchLogsClient", "PutDeliveryDestinationPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutDeliveryDestinationPolicyCommand)
  .de(de_PutDeliveryDestinationPolicyCommand)
  .build() {}
