// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelTaskInput, CancelTaskOutput } from "../models/models_0";
import { CancelTask } from "../schemas/schemas_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelTaskCommand}.
 */
export interface CancelTaskCommandInput extends CancelTaskInput {}
/**
 * @public
 *
 * The output of {@link CancelTaskCommand}.
 */
export interface CancelTaskCommandOutput extends CancelTaskOutput, __MetadataBearer {}

/**
 * <p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a
 *         <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p>
 *          <note>
 *             <p>A task might still run if it's processed from the queue before the
 *           <code>CancelTask</code> operation changes the task's state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, CancelTaskCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, CancelTaskCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * // import type { SnowDeviceManagementClientConfig } from "@aws-sdk/client-snow-device-management";
 * const config = {}; // type is SnowDeviceManagementClientConfig
 * const client = new SnowDeviceManagementClient(config);
 * const input = { // CancelTaskInput
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new CancelTaskCommand(input);
 * const response = await client.send(command);
 * // { // CancelTaskOutput
 * //   taskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelTaskCommandInput - {@link CancelTaskCommandInput}
 * @returns {@link CancelTaskCommandOutput}
 * @see {@link CancelTaskCommandInput} for command's `input` shape.
 * @see {@link CancelTaskCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for SnowDeviceManagementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SnowDeviceManagementServiceException}
 * <p>Base exception class for all service exceptions from SnowDeviceManagement service.</p>
 *
 *
 * @public
 */
export class CancelTaskCommand extends $Command
  .classBuilder<
    CancelTaskCommandInput,
    CancelTaskCommandOutput,
    SnowDeviceManagementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowDeviceManagementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SnowDeviceManagement", "CancelTask", {})
  .n("SnowDeviceManagementClient", "CancelTaskCommand")
  .sc(CancelTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelTaskInput;
      output: CancelTaskOutput;
    };
    sdk: {
      input: CancelTaskCommandInput;
      output: CancelTaskCommandOutput;
    };
  };
}
