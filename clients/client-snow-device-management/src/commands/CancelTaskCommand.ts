// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelTaskInput, CancelTaskOutput } from "../models/models_0";
import { CancelTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sends a cancel request for a specified task. You can cancel a task only if it's still in a `QUEUED` state. Tasks that are already running can't be cancelled.
 *
 * > **Note:** A task might still run if it's processed from the queue before the `CancelTask` operation changes the task's state.
 *
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
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SnowDeviceManagementServiceException}
 *
 * Base exception class for all service exceptions from SnowDeviceManagement service.
 *
 * @public
 */
export class CancelTaskCommand extends command<CancelTaskCommandInput, CancelTaskCommandOutput>(
  _ep0,
  _mw0,
  "CancelTask",
  CancelTask$
) {
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
