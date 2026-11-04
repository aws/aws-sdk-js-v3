// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutDeliverySourceRequest, PutDeliverySourceResponse } from "../models/models_0";
import { PutDeliverySource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates or updates a logical *delivery source*. A delivery source represents an Amazon Web Services resource that sends logs to an logs delivery destination. The destination can be CloudWatch Logs, Amazon S3, Firehose or X-Ray for sending traces.
 *
 * To configure logs delivery between a delivery destination and an Amazon Web Services service that is supported as a delivery source, you must do the following:
 *
 * - Use `PutDeliverySource` to create a delivery source, which is a logical object that represents the resource that is actually sending the logs.
 * - Use `PutDeliveryDestination` to create a *delivery destination*, which is a logical object that represents the actual delivery destination. For more information, see [PutDeliveryDestination](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html).
 * - If you are delivering logs cross-account, you must use [PutDeliveryDestinationPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html) in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 * - Use `CreateDelivery` to create a *delivery* by pairing exactly one delivery source and one delivery destination. For more information, see [CreateDelivery](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html).
 *
 * You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination.
 *
 * Only some Amazon Web Services services support being configured as a delivery source. These services are listed as **Supported [V2 Permissions]** in the table at [Enabling logging from Amazon Web Services services.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html)
 *
 * If you use this operation to update an existing delivery source, all the current delivery source parameters are overwritten with the new parameter values that you specify.
 *
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
 *   deliverySourceConfiguration: { // DeliverySourceConfiguration
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
 * //     deliverySourceConfiguration: { // DeliverySourceConfiguration
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     status: "ACTIVE" || "INACTIVE",
 * //     statusReason: "RESOURCE_DELETED",
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
export class PutDeliverySourceCommand extends command<PutDeliverySourceCommandInput, PutDeliverySourceCommandOutput>(
  _ep0,
  _mw0,
  "PutDeliverySource",
  PutDeliverySource$
) {
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
