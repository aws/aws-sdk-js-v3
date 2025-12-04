// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTaskInput, CreateTaskOutput } from "../models/models_0";
import { CreateTask } from "../schemas/schemas_0";
import type {
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
 * <p>Instructs one or more devices to start a task, such as unlocking or rebooting.</p>
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
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
export class CreateTaskCommand extends $Command
  .classBuilder<
    CreateTaskCommandInput,
    CreateTaskCommandOutput,
    SnowDeviceManagementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowDeviceManagementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SnowDeviceManagement", "CreateTask", {})
  .n("SnowDeviceManagementClient", "CreateTaskCommand")
  .sc(CreateTask)
  .build() {
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
