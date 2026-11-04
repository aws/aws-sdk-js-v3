// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLogRecordRequest, GetLogRecordResponse } from "../models/models_0";
import { GetLogRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves all of the fields and values of a single log event. All fields are retrieved, even if the original query that produced the `logRecordPointer` retrieved only a subset of fields. Fields are returned as field name/field value pairs.
 *
 * The full unparsed log event is returned within `@message`.
 *
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
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You have reached the maximum number of resources that can be created.
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
export class GetLogRecordCommand extends command<GetLogRecordCommandInput, GetLogRecordCommandOutput>(
  _ep0,
  _mw0,
  "GetLogRecord",
  GetLogRecord$
) {
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
