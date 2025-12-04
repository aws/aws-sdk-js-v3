// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { LaunchConfiguration, UpdateLaunchConfigurationRequest } from "../models/models_0";
import { UpdateLaunchConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates a LaunchConfiguration by Source Server ID.</p>
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
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class UpdateLaunchConfigurationCommand extends $Command
  .classBuilder<
    UpdateLaunchConfigurationCommandInput,
    UpdateLaunchConfigurationCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "UpdateLaunchConfiguration", {})
  .n("DrsClient", "UpdateLaunchConfigurationCommand")
  .sc(UpdateLaunchConfiguration)
  .build() {
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
