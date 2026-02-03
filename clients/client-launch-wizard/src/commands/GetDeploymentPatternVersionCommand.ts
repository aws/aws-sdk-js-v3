// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import type { GetDeploymentPatternVersionInput, GetDeploymentPatternVersionOutput } from "../models/models_0";
import { GetDeploymentPatternVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentPatternVersionCommand}.
 */
export interface GetDeploymentPatternVersionCommandInput extends GetDeploymentPatternVersionInput {}
/**
 * @public
 *
 * The output of {@link GetDeploymentPatternVersionCommand}.
 */
export interface GetDeploymentPatternVersionCommandOutput extends GetDeploymentPatternVersionOutput, __MetadataBearer {}

/**
 * <p>Returns information about a deployment pattern version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, GetDeploymentPatternVersionCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, GetDeploymentPatternVersionCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * // import type { LaunchWizardClientConfig } from "@aws-sdk/client-launch-wizard";
 * const config = {}; // type is LaunchWizardClientConfig
 * const client = new LaunchWizardClient(config);
 * const input = { // GetDeploymentPatternVersionInput
 *   workloadName: "STRING_VALUE", // required
 *   deploymentPatternName: "STRING_VALUE", // required
 *   deploymentPatternVersionName: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentPatternVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentPatternVersionOutput
 * //   deploymentPatternVersion: { // DeploymentPatternVersionDataSummary
 * //     deploymentPatternVersionName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     documentationUrl: "STRING_VALUE",
 * //     workloadName: "STRING_VALUE",
 * //     deploymentPatternName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeploymentPatternVersionCommandInput - {@link GetDeploymentPatternVersionCommandInput}
 * @returns {@link GetDeploymentPatternVersionCommandOutput}
 * @see {@link GetDeploymentPatternVersionCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentPatternVersionCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified workload or deployment resource can't be found.</p>
 *
 * @throws {@link LaunchWizardServiceException}
 * <p>Base exception class for all service exceptions from LaunchWizard service.</p>
 *
 *
 * @public
 */
export class GetDeploymentPatternVersionCommand extends $Command
  .classBuilder<
    GetDeploymentPatternVersionCommandInput,
    GetDeploymentPatternVersionCommandOutput,
    LaunchWizardClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LaunchWizard", "GetDeploymentPatternVersion", {})
  .n("LaunchWizardClient", "GetDeploymentPatternVersionCommand")
  .sc(GetDeploymentPatternVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentPatternVersionInput;
      output: GetDeploymentPatternVersionOutput;
    };
    sdk: {
      input: GetDeploymentPatternVersionCommandInput;
      output: GetDeploymentPatternVersionCommandOutput;
    };
  };
}
