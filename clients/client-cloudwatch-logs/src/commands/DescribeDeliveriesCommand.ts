// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDeliveriesRequest, DescribeDeliveriesResponse } from "../models/models_0";
import { DescribeDeliveries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDeliveriesCommand}.
 */
export interface DescribeDeliveriesCommandInput extends DescribeDeliveriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDeliveriesCommand}.
 */
export interface DescribeDeliveriesCommandOutput extends DescribeDeliveriesResponse, __MetadataBearer {}

/**
 * Retrieves a list of the deliveries that have been created in the account.
 *
 * A *delivery* is a connection between a [*delivery source*](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html) and a [*delivery destination*](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestination.html).
 *
 * A delivery source represents an Amazon Web Services resource that sends logs to an logs delivery destination. The destination can be CloudWatch Logs, Amazon S3, Firehose or X-Ray. Only some Amazon Web Services services support being configured as a delivery source. These services are listed in [Enable logging from Amazon Web Services services.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeDeliveriesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeDeliveriesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeDeliveriesRequest
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   deliverySourceNames: [ // DeliverySourceNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDeliveriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDeliveriesResponse
 * //   deliveries: [ // Deliveries
 * //     { // Delivery
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       deliverySourceName: "STRING_VALUE",
 * //       deliveryDestinationArn: "STRING_VALUE",
 * //       deliveryDestinationType: "S3" || "CWL" || "FH" || "XRAY",
 * //       recordFields: [ // RecordFields
 * //         "STRING_VALUE",
 * //       ],
 * //       fieldDelimiter: "STRING_VALUE",
 * //       s3DeliveryConfiguration: { // S3DeliveryConfiguration
 * //         suffixPath: "STRING_VALUE",
 * //         enableHiveCompatiblePath: true || false,
 * //       },
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDeliveriesCommandInput - {@link DescribeDeliveriesCommandInput}
 * @returns {@link DescribeDeliveriesCommandOutput}
 * @see {@link DescribeDeliveriesCommandInput} for command's `input` shape.
 * @see {@link DescribeDeliveriesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
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
export class DescribeDeliveriesCommand extends command<DescribeDeliveriesCommandInput, DescribeDeliveriesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDeliveries",
  DescribeDeliveries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDeliveriesRequest;
      output: DescribeDeliveriesResponse;
    };
    sdk: {
      input: DescribeDeliveriesCommandInput;
      output: DescribeDeliveriesCommandOutput;
    };
  };
}
