// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTaskInput, CreateTaskOutput } from "../models/models_0";
import { CreateTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTaskCommand}.
 */
export interface CreateTaskCommandInput extends CreateTaskInput {}
/**
 * @public
 *
 * The output of {@link CreateTaskCommand}.
 */
export interface CreateTaskCommandOutput extends CreateTaskOutput, __MetadataBearer {}

/**
 * Instructs one or more devices to start a task, such as unlocking or rebooting.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, CreateTaskCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, CreateTaskCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * // import type { SnowDeviceManagementClientConfig } from "@aws-sdk/client-snow-device-management";
 * const config = {}; // type is SnowDeviceManagementClientConfig
 * const client = new SnowDeviceManagementClient(config);
 * const input = { // CreateTaskInput
 *   targets: [ // TargetList // required
 *     "STRING_VALUE",
 *   ],
 *   command: { // Command Union: only one key present
 *     unlock: {},
 *     reboot: {},
 *   },
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateTaskOutput
 * //   taskId: "STRING_VALUE",
 * //   taskArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTaskCommandInput - {@link CreateTaskCommandInput}
 * @returns {@link CreateTaskCommandOutput}
 * @see {@link CreateTaskCommandInput} for command's `input` shape.
 * @see {@link CreateTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
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
export class CreateTaskCommand extends command<CreateTaskCommandInput, CreateTaskCommandOutput>(
  _ep0,
  _mw0,
  "CreateTask",
  CreateTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTaskInput;
      output: CreateTaskOutput;
    };
    sdk: {
      input: CreateTaskCommandInput;
      output: CreateTaskCommandOutput;
    };
  };
}
