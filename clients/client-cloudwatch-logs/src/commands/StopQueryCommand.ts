// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopQueryRequest, StopQueryResponse } from "../models/models_0";
import { StopQuery } from "../schemas/schemas";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopQueryCommand}.
 */
export interface StopQueryCommandInput extends StopQueryRequest {}
/**
 * @public
 *
 * The output of {@link StopQueryCommand}.
 */
export interface StopQueryCommandOutput extends StopQueryResponse, __MetadataBearer {}

/**
 * <p>Stops a CloudWatch Logs Insights query that is in progress. If the query has already
 *       ended, the operation returns an error indicating that the specified query is not
 *       running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, StopQueryCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, StopQueryCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // StopQueryRequest
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new StopQueryCommand(input);
 * const response = await client.send(command);
 * // { // StopQueryResponse
 * //   success: true || false,
 * // };
 *
 * ```
 *
 * @param StopQueryCommandInput - {@link StopQueryCommandInput}
 * @returns {@link StopQueryCommandOutput}
 * @see {@link StopQueryCommandInput} for command's `input` shape.
 * @see {@link StopQueryCommandOutput} for command's `response` shape.
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
export class StopQueryCommand extends $Command
  .classBuilder<
    StopQueryCommandInput,
    StopQueryCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "StopQuery", {})
  .n("CloudWatchLogsClient", "StopQueryCommand")
  .f(void 0, void 0)
  .sc(StopQuery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopQueryRequest;
      output: StopQueryResponse;
    };
    sdk: {
      input: StopQueryCommandInput;
      output: StopQueryCommandOutput;
    };
  };
}
