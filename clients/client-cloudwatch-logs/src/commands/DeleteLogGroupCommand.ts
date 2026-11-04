// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLogGroupRequest } from "../models/models_0";
import { DeleteLogGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLogGroupCommand}.
 */
export interface DeleteLogGroupCommandInput extends DeleteLogGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLogGroupCommand}.
 */
export interface DeleteLogGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified log group and permanently deletes all the archived log events associated with the log group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteLogGroupCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteLogGroupCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DeleteLogGroupRequest
 *   logGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteLogGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLogGroupCommandInput - {@link DeleteLogGroupCommandInput}
 * @returns {@link DeleteLogGroupCommandOutput}
 * @see {@link DeleteLogGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteLogGroupCommandOutput} for command's `response` shape.
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
export class DeleteLogGroupCommand extends command<DeleteLogGroupCommandInput, DeleteLogGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLogGroup",
  DeleteLogGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLogGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteLogGroupCommandInput;
      output: DeleteLogGroupCommandOutput;
    };
  };
}
