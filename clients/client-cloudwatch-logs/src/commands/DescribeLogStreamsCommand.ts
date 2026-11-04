// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeLogStreamsRequest, DescribeLogStreamsResponse } from "../models/models_0";
import { DescribeLogStreams$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeLogStreamsCommand}.
 */
export interface DescribeLogStreamsCommandInput extends DescribeLogStreamsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLogStreamsCommand}.
 */
export interface DescribeLogStreamsCommandOutput extends DescribeLogStreamsResponse, __MetadataBearer {}

/**
 * Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered.
 *
 * You can specify the log group to search by using either `logGroupIdentifier` or `logGroupName`. You must include one of these two parameters, but you can't include both.
 *
 * This operation has a limit of 25 transactions per second, after which transactions are throttled.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see [CloudWatch cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeLogStreamsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeLogStreamsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeLogStreamsRequest
 *   logGroupName: "STRING_VALUE",
 *   logGroupIdentifier: "STRING_VALUE",
 *   logStreamNamePrefix: "STRING_VALUE",
 *   orderBy: "LogStreamName" || "LastEventTime",
 *   descending: true || false,
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new DescribeLogStreamsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLogStreamsResponse
 * //   logStreams: [ // LogStreams
 * //     { // LogStream
 * //       logStreamName: "STRING_VALUE",
 * //       creationTime: Number("long"),
 * //       firstEventTimestamp: Number("long"),
 * //       lastEventTimestamp: Number("long"),
 * //       lastIngestionTime: Number("long"),
 * //       uploadSequenceToken: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       storedBytes: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLogStreamsCommandInput - {@link DescribeLogStreamsCommandInput}
 * @returns {@link DescribeLogStreamsCommandOutput}
 * @see {@link DescribeLogStreamsCommandInput} for command's `input` shape.
 * @see {@link DescribeLogStreamsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class DescribeLogStreamsCommand extends command<DescribeLogStreamsCommandInput, DescribeLogStreamsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeLogStreams",
  DescribeLogStreams$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLogStreamsRequest;
      output: DescribeLogStreamsResponse;
    };
    sdk: {
      input: DescribeLogStreamsCommandInput;
      output: DescribeLogStreamsCommandOutput;
    };
  };
}
