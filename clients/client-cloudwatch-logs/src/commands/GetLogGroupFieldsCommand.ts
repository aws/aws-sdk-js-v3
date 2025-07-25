// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLogGroupFieldsRequest, GetLogGroupFieldsResponse } from "../models/models_0";
import { de_GetLogGroupFieldsCommand, se_GetLogGroupFieldsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLogGroupFieldsCommand}.
 */
export interface GetLogGroupFieldsCommandInput extends GetLogGroupFieldsRequest {}
/**
 * @public
 *
 * The output of {@link GetLogGroupFieldsCommand}.
 */
export interface GetLogGroupFieldsCommandOutput extends GetLogGroupFieldsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the fields that are included in log events in the specified log group.
 *       Includes the percentage of log events that contain each field. The search is limited to a time
 *       period that you specify.</p>
 *          <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or
 *         <code>logGroupName</code>. You must specify one of these parameters, but you can't specify
 *       both. </p>
 *          <p>In the results, fields that start with <code>@</code> are fields generated by CloudWatch
 *       Logs. For example, <code>@timestamp</code> is the timestamp of each log event. For more
 *       information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported
 *         Logs and Discovered Fields</a>.</p>
 *          <p>The response results are sorted by the frequency percentage, starting with the highest
 *       percentage.</p>
 *          <p>If you are using CloudWatch cross-account observability, you can use this operation
 *       in a monitoring account and view data from the linked source accounts. For more information,
 *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogGroupFieldsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogGroupFieldsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetLogGroupFieldsRequest
 *   logGroupName: "STRING_VALUE",
 *   time: Number("long"),
 *   logGroupIdentifier: "STRING_VALUE",
 * };
 * const command = new GetLogGroupFieldsCommand(input);
 * const response = await client.send(command);
 * // { // GetLogGroupFieldsResponse
 * //   logGroupFields: [ // LogGroupFieldList
 * //     { // LogGroupField
 * //       name: "STRING_VALUE",
 * //       percent: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLogGroupFieldsCommandInput - {@link GetLogGroupFieldsCommandInput}
 * @returns {@link GetLogGroupFieldsCommandOutput}
 * @see {@link GetLogGroupFieldsCommandInput} for command's `input` shape.
 * @see {@link GetLogGroupFieldsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
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
export class GetLogGroupFieldsCommand extends $Command
  .classBuilder<
    GetLogGroupFieldsCommandInput,
    GetLogGroupFieldsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "GetLogGroupFields", {})
  .n("CloudWatchLogsClient", "GetLogGroupFieldsCommand")
  .f(void 0, void 0)
  .ser(se_GetLogGroupFieldsCommand)
  .de(de_GetLogGroupFieldsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLogGroupFieldsRequest;
      output: GetLogGroupFieldsResponse;
    };
    sdk: {
      input: GetLogGroupFieldsCommandInput;
      output: GetLogGroupFieldsCommandOutput;
    };
  };
}
