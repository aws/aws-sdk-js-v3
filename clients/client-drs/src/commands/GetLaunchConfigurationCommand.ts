// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLaunchConfigurationRequest, LaunchConfiguration } from "../models/models_0";
import { de_GetLaunchConfigurationCommand, se_GetLaunchConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLaunchConfigurationCommand}.
 */
export interface GetLaunchConfigurationCommandInput extends GetLaunchConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetLaunchConfigurationCommand}.
 */
export interface GetLaunchConfigurationCommandOutput extends LaunchConfiguration, __MetadataBearer {}

/**
 * <p>Gets a LaunchConfiguration, filtered by Source Server IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, GetLaunchConfigurationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, GetLaunchConfigurationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // GetLaunchConfigurationRequest
 *   sourceServerID: "STRING_VALUE", // required
 * };
 * const command = new GetLaunchConfigurationCommand(input);
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
 * @param GetLaunchConfigurationCommandInput - {@link GetLaunchConfigurationCommandInput}
 * @returns {@link GetLaunchConfigurationCommandOutput}
 * @see {@link GetLaunchConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLaunchConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
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
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class GetLaunchConfigurationCommand extends $Command
  .classBuilder<
    GetLaunchConfigurationCommandInput,
    GetLaunchConfigurationCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "GetLaunchConfiguration", {})
  .n("DrsClient", "GetLaunchConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetLaunchConfigurationCommand)
  .de(de_GetLaunchConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLaunchConfigurationRequest;
      output: LaunchConfiguration;
    };
    sdk: {
      input: GetLaunchConfigurationCommandInput;
      output: GetLaunchConfigurationCommandOutput;
    };
  };
}
