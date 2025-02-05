// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CancelDataRepositoryTaskRequest, CancelDataRepositoryTaskResponse } from "../models/models_0";
import { de_CancelDataRepositoryTaskCommand, se_CancelDataRepositoryTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelDataRepositoryTaskCommand}.
 */
export interface CancelDataRepositoryTaskCommandInput extends CancelDataRepositoryTaskRequest {}
/**
 * @public
 *
 * The output of {@link CancelDataRepositoryTaskCommand}.
 */
export interface CancelDataRepositoryTaskCommandOutput extends CancelDataRepositoryTaskResponse, __MetadataBearer {}

/**
 * <p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the
 *             <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel am export task, Amazon FSx
 *             does the following.</p>
 *          <ul>
 *             <li>
 *                <p>Any files that FSx has already exported are not reverted.</p>
 *             </li>
 *             <li>
 *                <p>FSx continues to export any files that are in-flight when the cancel operation is received.</p>
 *             </li>
 *             <li>
 *                <p>FSx does not export any files that have not yet been exported.</p>
 *             </li>
 *          </ul>
 *          <p>For a release task, Amazon FSx will stop releasing files upon cancellation. Any files that
 *             have already been released will remain in the released state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CancelDataRepositoryTaskCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CancelDataRepositoryTaskCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FSxClient(config);
 * const input = { // CancelDataRepositoryTaskRequest
 *   TaskId: "STRING_VALUE", // required
 * };
 * const command = new CancelDataRepositoryTaskCommand(input);
 * const response = await client.send(command);
 * // { // CancelDataRepositoryTaskResponse
 * //   Lifecycle: "PENDING" || "EXECUTING" || "FAILED" || "SUCCEEDED" || "CANCELED" || "CANCELING",
 * //   TaskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelDataRepositoryTaskCommandInput - {@link CancelDataRepositoryTaskCommandInput}
 * @returns {@link CancelDataRepositoryTaskCommandOutput}
 * @see {@link CancelDataRepositoryTaskCommandInput} for command's `input` shape.
 * @see {@link CancelDataRepositoryTaskCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link DataRepositoryTaskEnded} (client fault)
 *  <p>The data repository task could not be canceled because the task has already ended.</p>
 *
 * @throws {@link DataRepositoryTaskNotFound} (client fault)
 *  <p>The data repository task or tasks you specified could not be found.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 * @public
 */
export class CancelDataRepositoryTaskCommand extends $Command
  .classBuilder<
    CancelDataRepositoryTaskCommandInput,
    CancelDataRepositoryTaskCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSimbaAPIService_v20180301", "CancelDataRepositoryTask", {})
  .n("FSxClient", "CancelDataRepositoryTaskCommand")
  .f(void 0, void 0)
  .ser(se_CancelDataRepositoryTaskCommand)
  .de(de_CancelDataRepositoryTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelDataRepositoryTaskRequest;
      output: CancelDataRepositoryTaskResponse;
    };
    sdk: {
      input: CancelDataRepositoryTaskCommandInput;
      output: CancelDataRepositoryTaskCommandOutput;
    };
  };
}
