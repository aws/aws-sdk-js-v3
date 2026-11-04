// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { LaunchConfiguration, UpdateLaunchConfigurationRequest } from "../models/models_0";
import { UpdateLaunchConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLaunchConfigurationCommand}.
 */
export interface UpdateLaunchConfigurationCommandInput extends UpdateLaunchConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLaunchConfigurationCommand}.
 */
export interface UpdateLaunchConfigurationCommandOutput extends LaunchConfiguration, __MetadataBearer {}

/**
 * Updates a LaunchConfiguration by Source Server ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, UpdateLaunchConfigurationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, UpdateLaunchConfigurationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // UpdateLaunchConfigurationRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   launchDisposition: "STRING_VALUE",
 *   targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 *   copyPrivateIp: true || false,
 *   copyTags: true || false,
 *   licensing: { // Licensing
 *     osByol: true || false,
 *   },
 *   postLaunchEnabled: true || false,
 *   launchIntoInstanceProperties: { // LaunchIntoInstanceProperties
 *     launchIntoEC2InstanceID: "STRING_VALUE",
 *   },
 *   recoveryMode: "STRING_VALUE",
 * };
 * const command = new UpdateLaunchConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // LaunchConfiguration
 * //   sourceServerID: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   ec2LaunchTemplateID: "STRING_VALUE",
 * //   launchDisposition: "STRING_VALUE",
 * //   targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 * //   copyPrivateIp: true || false,
 * //   copyTags: true || false,
 * //   licensing: { // Licensing
 * //     osByol: true || false,
 * //   },
 * //   postLaunchEnabled: true || false,
 * //   launchIntoInstanceProperties: { // LaunchIntoInstanceProperties
 * //     launchIntoEC2InstanceID: "STRING_VALUE",
 * //   },
 * //   recoveryMode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateLaunchConfigurationCommandInput - {@link UpdateLaunchConfigurationCommandInput}
 * @returns {@link UpdateLaunchConfigurationCommandOutput}
 * @see {@link UpdateLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource for this operation was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the AWS service.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class UpdateLaunchConfigurationCommand extends command<UpdateLaunchConfigurationCommandInput, UpdateLaunchConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLaunchConfiguration",
  UpdateLaunchConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLaunchConfigurationRequest;
      output: LaunchConfiguration;
    };
    sdk: {
      input: UpdateLaunchConfigurationCommandInput;
      output: UpdateLaunchConfigurationCommandOutput;
    };
  };
}
