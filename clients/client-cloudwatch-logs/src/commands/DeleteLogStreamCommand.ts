// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLogStreamRequest } from "../models/models_0";
import { DeleteLogStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLogStreamCommand}.
 */
export interface DeleteLogStreamCommandInput extends DeleteLogStreamRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLogStreamCommand}.
 */
export interface DeleteLogStreamCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteLogStreamCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteLogStreamCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteLogStreamRequest
 *   logGroupName: "STRING_VALUE", // required
 *   logStreamName: "STRING_VALUE", // required
 * };
 * const command = new DeleteLogStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLogStreamCommandInput - {@link DeleteLogStreamCommandInput}
 * @returns {@link DeleteLogStreamCommandOutput}
 * @see {@link DeleteLogStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteLogStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link OperationAbortedException} (client fault)
 *
 * Multiple concurrent requests to update the same resource were in conflict.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
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
export class DeleteLogStreamCommand extends command<DeleteLogStreamCommandInput, DeleteLogStreamCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLogStream",
  DeleteLogStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLogStreamRequest;
      output: {};
    };
    sdk: {
      input: DeleteLogStreamCommandInput;
      output: DeleteLogStreamCommandOutput;
    };
  };
}
