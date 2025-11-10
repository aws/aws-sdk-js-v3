// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLogStreamsRequest, DescribeLogStreamsResponse } from "../models/models_0";
import { DescribeLogStreams } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the log streams for the specified log group. You can list all the log streams or
 *       filter the results by prefix. You can also control how the results are ordered.</p>
 *          <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or
 *         <code>logGroupName</code>. You must include one of these two parameters, but you can't
 *       include both. </p>
 *          <p>This operation has a limit of 25 transactions per second, after which transactions are
 *       throttled.</p>
 *          <p>If you are using CloudWatch cross-account observability, you can use this operation
 *       in a monitoring account and view data from the linked source accounts. For more information,
 *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
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
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class DescribeLogStreamsCommand extends $Command
  .classBuilder<
    DescribeLogStreamsCommandInput,
    DescribeLogStreamsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DescribeLogStreams", {})
  .n("CloudWatchLogsClient", "DescribeLogStreamsCommand")
  .sc(DescribeLogStreams)
  .build() {
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
