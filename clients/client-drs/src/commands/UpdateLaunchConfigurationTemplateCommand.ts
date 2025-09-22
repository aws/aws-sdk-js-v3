// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateLaunchConfigurationTemplateRequest,
  UpdateLaunchConfigurationTemplateResponse,
} from "../models/models_0";
import { UpdateLaunchConfigurationTemplate } from "../schemas/schemas_11_LaunchConfiguration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLaunchConfigurationTemplateCommand}.
 */
export interface UpdateLaunchConfigurationTemplateCommandInput extends UpdateLaunchConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLaunchConfigurationTemplateCommand}.
 */
export interface UpdateLaunchConfigurationTemplateCommandOutput
  extends UpdateLaunchConfigurationTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing Launch Configuration Template by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, UpdateLaunchConfigurationTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, UpdateLaunchConfigurationTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // UpdateLaunchConfigurationTemplateRequest
 *   launchConfigurationTemplateID: "STRING_VALUE", // required
 *   launchDisposition: "STRING_VALUE",
 *   targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 *   copyPrivateIp: true || false,
 *   copyTags: true || false,
 *   licensing: { // Licensing
 *     osByol: true || false,
 *   },
 *   exportBucketArn: "STRING_VALUE",
 *   postLaunchEnabled: true || false,
 *   launchIntoSourceInstance: true || false,
 * };
 * const command = new UpdateLaunchConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLaunchConfigurationTemplateResponse
 * //   launchConfigurationTemplate: { // LaunchConfigurationTemplate
 * //     launchConfigurationTemplateID: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     launchDisposition: "STRING_VALUE",
 * //     targetInstanceTypeRightSizingMethod: "STRING_VALUE",
 * //     copyPrivateIp: true || false,
 * //     copyTags: true || false,
 * //     licensing: { // Licensing
 * //       osByol: true || false,
 * //     },
 * //     exportBucketArn: "STRING_VALUE",
 * //     postLaunchEnabled: true || false,
 * //     launchIntoSourceInstance: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLaunchConfigurationTemplateCommandInput - {@link UpdateLaunchConfigurationTemplateCommandInput}
 * @returns {@link UpdateLaunchConfigurationTemplateCommandOutput}
 * @see {@link UpdateLaunchConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateLaunchConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class UpdateLaunchConfigurationTemplateCommand extends $Command
  .classBuilder<
    UpdateLaunchConfigurationTemplateCommandInput,
    UpdateLaunchConfigurationTemplateCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "UpdateLaunchConfigurationTemplate", {})
  .n("DrsClient", "UpdateLaunchConfigurationTemplateCommand")
  .sc(UpdateLaunchConfigurationTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLaunchConfigurationTemplateRequest;
      output: UpdateLaunchConfigurationTemplateResponse;
    };
    sdk: {
      input: UpdateLaunchConfigurationTemplateCommandInput;
      output: UpdateLaunchConfigurationTemplateCommandOutput;
    };
  };
}
