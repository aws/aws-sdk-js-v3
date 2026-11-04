// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDeliveryRequest, CreateDeliveryResponse } from "../models/models_0";
import { CreateDelivery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a *delivery*. A delivery is a connection between a logical *delivery source* and a logical *delivery destination* that you have already created.
 *
 * Only some Amazon Web Services services support being configured as a delivery source using this operation. These services are listed as **Supported [V2 Permissions]** in the table at [Enabling logging from Amazon Web Services services.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html)
 *
 * A delivery destination can represent a log group in CloudWatch Logs, an Amazon S3 bucket, a delivery stream in Firehose, or X-Ray.
 *
 * To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following:
 *
 * - Create a delivery source, which is a logical object that represents the resource that is actually sending the logs. For more information, see [PutDeliverySource](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html).
 * - Create a *delivery destination*, which is a logical object that represents the actual delivery destination. For more information, see [PutDeliveryDestination](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html).
 * - If you are delivering logs cross-account, you must use [PutDeliveryDestinationPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationPolicy.html) in the destination account to assign an IAM policy to the destination. This policy allows delivery to that destination.
 * - Use `CreateDelivery` to create a *delivery* by pairing exactly one delivery source and one delivery destination.
 *
 * You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination.
 *
 * To update an existing delivery configuration, use [UpdateDeliveryConfiguration](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UpdateDeliveryConfiguration.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CreateDeliveryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CreateDeliveryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
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
 *
 * You don't have sufficient permissions to perform this action.
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
export class CreateDeliveryCommand extends command<CreateDeliveryCommandInput, CreateDeliveryCommandOutput>(
  _ep0,
  _mw0,
  "CreateDelivery",
  CreateDelivery$
) {
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
