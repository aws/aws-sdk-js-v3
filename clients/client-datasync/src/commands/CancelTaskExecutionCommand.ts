// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelTaskExecutionRequest, CancelTaskExecutionResponse } from "../models/models_0";
import { CancelTaskExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelTaskExecutionCommand}.
 */
export interface CancelTaskExecutionCommandInput extends CancelTaskExecutionRequest {}
/**
 * @public
 *
 * The output of {@link CancelTaskExecutionCommand}.
 */
export interface CancelTaskExecutionCommandOutput extends CancelTaskExecutionResponse, __MetadataBearer {}

/**
 * <p>Stops an DataSync task execution that's in progress. The transfer of some
 *       files are abruptly interrupted. File contents that're transferred to the destination might be
 *       incomplete or inconsistent with the source files.</p>
 *          <p>However, if you start a new task execution using the same task and allow it to finish,
 *       file content on the destination will be complete and consistent. This applies to other
 *       unexpected failures that interrupt a task execution. In all of these cases, DataSync
 *       successfully completes the transfer when you start the next task execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CancelTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CancelTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // CancelTaskExecutionRequest
 *   TaskExecutionArn: "STRING_VALUE", // required
 * };
 * const command = new CancelTaskExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelTaskExecutionCommandInput - {@link CancelTaskExecutionCommandInput}
 * @returns {@link CancelTaskExecutionCommandOutput}
 * @see {@link CancelTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class CancelTaskExecutionCommand extends $Command
  .classBuilder<
    CancelTaskExecutionCommandInput,
    CancelTaskExecutionCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "CancelTaskExecution", {})
  .n("DataSyncClient", "CancelTaskExecutionCommand")
  .sc(CancelTaskExecution$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelTaskExecutionRequest;
      output: {};
    };
    sdk: {
      input: CancelTaskExecutionCommandInput;
      output: CancelTaskExecutionCommandOutput;
    };
  };
}
