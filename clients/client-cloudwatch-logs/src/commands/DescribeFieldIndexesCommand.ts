// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFieldIndexesRequest, DescribeFieldIndexesResponse } from "../models/models_0";
import { de_DescribeFieldIndexesCommand, se_DescribeFieldIndexesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFieldIndexesCommand}.
 */
export interface DescribeFieldIndexesCommandInput extends DescribeFieldIndexesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFieldIndexesCommand}.
 */
export interface DescribeFieldIndexesCommandOutput extends DescribeFieldIndexesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of field indexes listed in the field index policies of one or more log
 *       groups. For more information about field index policies, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutIndexPolicy.html">PutIndexPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeFieldIndexesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeFieldIndexesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeFieldIndexesRequest
 *   logGroupIdentifiers: [ // DescribeFieldIndexesLogGroupIdentifiers // required
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeFieldIndexesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFieldIndexesResponse
 * //   fieldIndexes: [ // FieldIndexes
 * //     { // FieldIndex
 * //       logGroupIdentifier: "STRING_VALUE",
 * //       fieldIndexName: "STRING_VALUE",
 * //       lastScanTime: Number("long"),
 * //       firstEventTime: Number("long"),
 * //       lastEventTime: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFieldIndexesCommandInput - {@link DescribeFieldIndexesCommandInput}
 * @returns {@link DescribeFieldIndexesCommandOutput}
 * @see {@link DescribeFieldIndexesCommandInput} for command's `input` shape.
 * @see {@link DescribeFieldIndexesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
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
export class DescribeFieldIndexesCommand extends $Command
  .classBuilder<
    DescribeFieldIndexesCommandInput,
    DescribeFieldIndexesCommandOutput,
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
  .s("Logs_20140328", "DescribeFieldIndexes", {})
  .n("CloudWatchLogsClient", "DescribeFieldIndexesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFieldIndexesCommand)
  .de(de_DescribeFieldIndexesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFieldIndexesRequest;
      output: DescribeFieldIndexesResponse;
    };
    sdk: {
      input: DescribeFieldIndexesCommandInput;
      output: DescribeFieldIndexesCommandOutput;
    };
  };
}
