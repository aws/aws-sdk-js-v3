// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetLogRecordRequest, GetLogRecordResponse } from "../models/models_0";
import { GetLogRecord } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLogRecordCommand}.
 */
export interface GetLogRecordCommandInput extends GetLogRecordRequest {}
/**
 * @public
 *
 * The output of {@link GetLogRecordCommand}.
 */
export interface GetLogRecordCommandOutput extends GetLogRecordResponse, __MetadataBearer {}

/**
 * <p>Retrieves all of the fields and values of a single log event. All fields are retrieved,
 *       even if the original query that produced the <code>logRecordPointer</code> retrieved only a
 *       subset of fields. Fields are returned as field name/field value pairs.</p>
 *          <p>The full unparsed log event is returned within <code>@message</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogRecordCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogRecordCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetLogRecordRequest
 *   logRecordPointer: "STRING_VALUE", // required
 *   unmask: true || false,
 * };
 * const command = new GetLogRecordCommand(input);
 * const response = await client.send(command);
 * // { // GetLogRecordResponse
 * //   logRecord: { // LogRecord
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLogRecordCommandInput - {@link GetLogRecordCommandInput}
 * @returns {@link GetLogRecordCommandOutput}
 * @see {@link GetLogRecordCommandInput} for command's `input` shape.
 * @see {@link GetLogRecordCommandOutput} for command's `response` shape.
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
export class GetLogRecordCommand extends $Command
  .classBuilder<
    GetLogRecordCommandInput,
    GetLogRecordCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "GetLogRecord", {})
  .n("CloudWatchLogsClient", "GetLogRecordCommand")
  .sc(GetLogRecord)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLogRecordRequest;
      output: GetLogRecordResponse;
    };
    sdk: {
      input: GetLogRecordCommandInput;
      output: GetLogRecordCommandOutput;
    };
  };
}
