// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLogStreamRequest } from "../models/models_0";
import { de_DeleteLogStreamCommand, se_DeleteLogStreamCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the specified log stream and permanently deletes all the archived log events associated
 *       with the log stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteLogStreamCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteLogStreamCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
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
 *  <p>A parameter is specified incorrectly.</p>
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
 * @public
 */
export class DeleteLogStreamCommand extends $Command
  .classBuilder<
    DeleteLogStreamCommandInput,
    DeleteLogStreamCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "DeleteLogStream", {})
  .n("CloudWatchLogsClient", "DeleteLogStreamCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLogStreamCommand)
  .de(de_DeleteLogStreamCommand)
  .build() {}
