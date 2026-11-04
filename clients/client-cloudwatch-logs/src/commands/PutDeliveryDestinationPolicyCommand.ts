// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutDeliveryDestinationPolicyRequest, PutDeliveryDestinationPolicyResponse } from "../models/models_0";
import { PutDeliveryDestinationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface PutDeliveryDestinationPolicyCommandOutput extends PutDeliveryDestinationPolicyResponse, __MetadataBearer {}

/**
 * Creates and assigns an IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account. To configure the delivery of logs from an Amazon Web Services service in another account to a logs delivery destination in the current account, you must do the following:
 *
 * - Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see [PutDeliverySource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html).
 * - Create a *delivery destination*, which is a logical object that represents the actual delivery destination. For more information, see [PutDeliveryDestination](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html).
 * - Use this operation in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 * - Create a *delivery* by pairing exactly one delivery source and one delivery destination. For more information, see [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html).
 *
 * Only some Amazon Web Services services support being configured as a delivery source. These services are listed as **Supported [V2 Permissions]** in the table at [Enabling logging from Amazon Web Services services.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html)
 *
 * The contents of the policy must include two statements. One statement enables general logs delivery, and the other allows delivery to the chosen destination. See the examples for the needed policies.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutDeliveryDestinationPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutDeliveryDestinationPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
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
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the parameters for the request is not valid.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class PutDeliveryDestinationPolicyCommand extends command<PutDeliveryDestinationPolicyCommandInput, PutDeliveryDestinationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutDeliveryDestinationPolicy",
  PutDeliveryDestinationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDeliveryDestinationPolicyRequest;
      output: PutDeliveryDestinationPolicyResponse;
    };
    sdk: {
      input: PutDeliveryDestinationPolicyCommandInput;
      output: PutDeliveryDestinationPolicyCommandOutput;
    };
  };
}
