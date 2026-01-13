// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateDefaultAutoScalingConfigurationRequest,
  UpdateDefaultAutoScalingConfigurationResponse,
} from "../models/models_0";
import { UpdateDefaultAutoScalingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDefaultAutoScalingConfigurationCommand}.
 */
export interface UpdateDefaultAutoScalingConfigurationCommandInput extends UpdateDefaultAutoScalingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDefaultAutoScalingConfigurationCommand}.
 */
export interface UpdateDefaultAutoScalingConfigurationCommandOutput extends UpdateDefaultAutoScalingConfigurationResponse, __MetadataBearer {}

/**
 * <p>Update an auto scaling configuration to be the default. The existing default auto scaling configuration will be set to non-default
 *       automatically.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, UpdateDefaultAutoScalingConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, UpdateDefaultAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // UpdateDefaultAutoScalingConfigurationRequest
 *   AutoScalingConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateDefaultAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDefaultAutoScalingConfigurationResponse
 * //   AutoScalingConfiguration: { // AutoScalingConfiguration
 * //     AutoScalingConfigurationArn: "STRING_VALUE",
 * //     AutoScalingConfigurationName: "STRING_VALUE",
 * //     AutoScalingConfigurationRevision: Number("int"),
 * //     Latest: true || false,
 * //     Status: "ACTIVE" || "INACTIVE",
 * //     MaxConcurrency: Number("int"),
 * //     MinSize: Number("int"),
 * //     MaxSize: Number("int"),
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //     HasAssociatedService: true || false,
 * //     IsDefault: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDefaultAutoScalingConfigurationCommandInput - {@link UpdateDefaultAutoScalingConfigurationCommandInput}
 * @returns {@link UpdateDefaultAutoScalingConfigurationCommandOutput}
 * @see {@link UpdateDefaultAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateDefaultAutoScalingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 *
 * @public
 */
export class UpdateDefaultAutoScalingConfigurationCommand extends $Command
  .classBuilder<
    UpdateDefaultAutoScalingConfigurationCommandInput,
    UpdateDefaultAutoScalingConfigurationCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppRunner", "UpdateDefaultAutoScalingConfiguration", {})
  .n("AppRunnerClient", "UpdateDefaultAutoScalingConfigurationCommand")
  .sc(UpdateDefaultAutoScalingConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDefaultAutoScalingConfigurationRequest;
      output: UpdateDefaultAutoScalingConfigurationResponse;
    };
    sdk: {
      input: UpdateDefaultAutoScalingConfigurationCommandInput;
      output: UpdateDefaultAutoScalingConfigurationCommandOutput;
    };
  };
}
