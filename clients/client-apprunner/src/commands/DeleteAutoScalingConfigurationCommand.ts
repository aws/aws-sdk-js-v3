// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAutoScalingConfigurationRequest, DeleteAutoScalingConfigurationResponse } from "../models/models_0";
import {
  de_DeleteAutoScalingConfigurationCommand,
  se_DeleteAutoScalingConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAutoScalingConfigurationCommand}.
 */
export interface DeleteAutoScalingConfigurationCommandInput extends DeleteAutoScalingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAutoScalingConfigurationCommand}.
 */
export interface DeleteAutoScalingConfigurationCommandOutput
  extends DeleteAutoScalingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Delete an App Runner automatic scaling configuration resource. You can delete a top level auto scaling configuration, a specific revision of one, or all
 *       revisions associated with the top level configuration. You can't delete the default auto scaling configuration or a configuration that's used by one or
 *       more App Runner services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DeleteAutoScalingConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DeleteAutoScalingConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // DeleteAutoScalingConfigurationRequest
 *   AutoScalingConfigurationArn: "STRING_VALUE", // required
 *   DeleteAllRevisions: true || false,
 * };
 * const command = new DeleteAutoScalingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAutoScalingConfigurationResponse
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
 * @param DeleteAutoScalingConfigurationCommandInput - {@link DeleteAutoScalingConfigurationCommandInput}
 * @returns {@link DeleteAutoScalingConfigurationCommandOutput}
 * @see {@link DeleteAutoScalingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAutoScalingConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteAutoScalingConfigurationCommand extends $Command
  .classBuilder<
    DeleteAutoScalingConfigurationCommandInput,
    DeleteAutoScalingConfigurationCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppRunner", "DeleteAutoScalingConfiguration", {})
  .n("AppRunnerClient", "DeleteAutoScalingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAutoScalingConfigurationCommand)
  .de(de_DeleteAutoScalingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAutoScalingConfigurationRequest;
      output: DeleteAutoScalingConfigurationResponse;
    };
    sdk: {
      input: DeleteAutoScalingConfigurationCommandInput;
      output: DeleteAutoScalingConfigurationCommandOutput;
    };
  };
}
