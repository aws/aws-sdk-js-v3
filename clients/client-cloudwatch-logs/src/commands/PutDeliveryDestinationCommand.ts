// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutDeliveryDestinationRequest, PutDeliveryDestinationResponse } from "../models/models_0";
import { PutDeliveryDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates or updates a logical *delivery destination*. A delivery destination is an Amazon Web Services resource that represents an Amazon Web Services service that logs can be sent to. CloudWatch Logs, Amazon S3, and Firehose are supported as logs delivery destinations and X-Ray as the trace delivery destination.
 *
 * To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following:
 *
 * - Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see [PutDeliverySource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html).
 * - Use `PutDeliveryDestination` to create a *delivery destination* in the same account of the actual delivery destination. The delivery destination that you create is a logical object that represents the actual delivery destination.
 * - If you are delivering logs cross-account, you must use [PutDeliveryDestinationPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html) in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 * - Use `CreateDelivery` to create a *delivery* by pairing exactly one delivery source and one delivery destination. For more information, see [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html).
 *
 * You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination.
 *
 * Only some Amazon Web Services services support being configured as a delivery source. These services are listed as **Supported [V2 Permissions]** in the table at [Enabling logging from Amazon Web Services services.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html)
 *
 * If you use this operation to update an existing delivery destination, all the current delivery destination parameters are overwritten with the new parameter values that you specify.
 *
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
 *   roleArn: "STRING_VALUE",
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
 * //     roleArn: "STRING_VALUE",
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
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * This request exceeds a service quota.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
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
export class PutDeliveryDestinationCommand extends command<PutDeliveryDestinationCommandInput, PutDeliveryDestinationCommandOutput>(
  _ep0,
  _mw0,
  "PutDeliveryDestination",
  PutDeliveryDestination$
) {
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
