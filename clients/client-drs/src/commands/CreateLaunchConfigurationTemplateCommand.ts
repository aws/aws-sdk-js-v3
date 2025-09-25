// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateLaunchConfigurationTemplateRequest,
  CreateLaunchConfigurationTemplateResponse,
} from "../models/models_0";
import { CreateLaunchConfigurationTemplate } from "../schemas/schemas_4_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLaunchConfigurationTemplateCommand}.
 */
export interface CreateLaunchConfigurationTemplateCommandInput extends CreateLaunchConfigurationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateLaunchConfigurationTemplateCommand}.
 */
export interface CreateLaunchConfigurationTemplateCommandOutput
  extends CreateLaunchConfigurationTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new Launch Configuration Template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, CreateLaunchConfigurationTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, CreateLaunchConfigurationTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // CreateLaunchConfigurationTemplateRequest
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
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
 * const command = new CreateLaunchConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateLaunchConfigurationTemplateResponse
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
 * @param CreateLaunchConfigurationTemplateCommandInput - {@link CreateLaunchConfigurationTemplateCommandInput}
 * @returns {@link CreateLaunchConfigurationTemplateCommandOutput}
 * @see {@link CreateLaunchConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateLaunchConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
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
export class CreateLaunchConfigurationTemplateCommand extends $Command
  .classBuilder<
    CreateLaunchConfigurationTemplateCommandInput,
    CreateLaunchConfigurationTemplateCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "CreateLaunchConfigurationTemplate", {})
  .n("DrsClient", "CreateLaunchConfigurationTemplateCommand")
  .sc(CreateLaunchConfigurationTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLaunchConfigurationTemplateRequest;
      output: CreateLaunchConfigurationTemplateResponse;
    };
    sdk: {
      input: CreateLaunchConfigurationTemplateCommandInput;
      output: CreateLaunchConfigurationTemplateCommandOutput;
    };
  };
}
