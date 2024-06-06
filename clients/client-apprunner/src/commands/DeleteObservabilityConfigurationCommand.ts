// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteObservabilityConfigurationRequest, DeleteObservabilityConfigurationResponse } from "../models/models_0";
import {
  de_DeleteObservabilityConfigurationCommand,
  se_DeleteObservabilityConfigurationCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteObservabilityConfigurationCommand}.
 */
export interface DeleteObservabilityConfigurationCommandInput extends DeleteObservabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteObservabilityConfigurationCommand}.
 */
export interface DeleteObservabilityConfigurationCommandOutput
  extends DeleteObservabilityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a
 *       configuration that's used by one or more App Runner services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DeleteObservabilityConfigurationCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DeleteObservabilityConfigurationCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // DeleteObservabilityConfigurationRequest
 *   ObservabilityConfigurationArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteObservabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteObservabilityConfigurationResponse
 * //   ObservabilityConfiguration: { // ObservabilityConfiguration
 * //     ObservabilityConfigurationArn: "STRING_VALUE",
 * //     ObservabilityConfigurationName: "STRING_VALUE",
 * //     TraceConfiguration: { // TraceConfiguration
 * //       Vendor: "AWSXRAY", // required
 * //     },
 * //     ObservabilityConfigurationRevision: Number("int"),
 * //     Latest: true || false,
 * //     Status: "ACTIVE" || "INACTIVE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteObservabilityConfigurationCommandInput - {@link DeleteObservabilityConfigurationCommandInput}
 * @returns {@link DeleteObservabilityConfigurationCommandOutput}
 * @see {@link DeleteObservabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteObservabilityConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteObservabilityConfigurationCommand extends $Command
  .classBuilder<
    DeleteObservabilityConfigurationCommandInput,
    DeleteObservabilityConfigurationCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppRunner", "DeleteObservabilityConfiguration", {})
  .n("AppRunnerClient", "DeleteObservabilityConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteObservabilityConfigurationCommand)
  .de(de_DeleteObservabilityConfigurationCommand)
  .build() {}
