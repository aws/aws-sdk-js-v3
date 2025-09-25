// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLogGroupRequest } from "../models/models_0";
import { DeleteLogGroup } from "../schemas/schemas_28_DeleteLogGroup";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the specified log group and permanently deletes all the archived log events
 *       associated with the log group.</p>
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
 *
 * @public
 */
export class DeleteLogGroupCommand extends $Command
  .classBuilder<
    DeleteLogGroupCommandInput,
    DeleteLogGroupCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "DeleteLogGroup", {})
  .n("CloudWatchLogsClient", "DeleteLogGroupCommand")
  .sc(DeleteLogGroup)
  .build() {
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
