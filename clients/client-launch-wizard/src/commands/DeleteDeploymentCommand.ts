// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import { DeleteDeploymentInput, DeleteDeploymentOutput } from "../models/models_0";
import { de_DeleteDeploymentCommand, se_DeleteDeploymentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeploymentCommand}.
 */
export interface DeleteDeploymentCommandInput extends DeleteDeploymentInput {}
/**
 * @public
 *
 * The output of {@link DeleteDeploymentCommand}.
 */
export interface DeleteDeploymentCommandOutput extends DeleteDeploymentOutput, __MetadataBearer {}

/**
 * <p>Deletes a deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, DeleteDeploymentCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, DeleteDeploymentCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * // import type { LaunchWizardClientConfig } from "@aws-sdk/client-launch-wizard";
 * const config = {}; // type is LaunchWizardClientConfig
 * const client = new LaunchWizardClient(config);
 * const input = { // DeleteDeploymentInput
 *   deploymentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDeploymentOutput
 * //   status: "COMPLETED" || "CREATING" || "DELETE_IN_PROGRESS" || "DELETE_INITIATING" || "DELETE_FAILED" || "DELETED" || "FAILED" || "IN_PROGRESS" || "VALIDATING",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDeploymentCommandInput - {@link DeleteDeploymentCommandInput}
 * @returns {@link DeleteDeploymentCommandOutput}
 * @see {@link DeleteDeploymentCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 *
 * @throws {@link ResourceLimitException} (client fault)
 *  <p>You have exceeded an Launch Wizard resource limit. For example, you might have too many
 *          deployments in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified workload or deployment resource can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link LaunchWizardServiceException}
 * <p>Base exception class for all service exceptions from LaunchWizard service.</p>
 *
 *
 * @example Delete a deployment.
 * ```javascript
 * //
 * const input = {
 *   deploymentId: "4c1b59c1-659c-467f-b6e9-6ef6f9d28e1d"
 * };
 * const command = new DeleteDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   status: "DELETED",
 *   statusReason: "Finished processing DeleteApp request"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDeploymentCommand extends $Command
  .classBuilder<
    DeleteDeploymentCommandInput,
    DeleteDeploymentCommandOutput,
    LaunchWizardClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LaunchWizard", "DeleteDeployment", {})
  .n("LaunchWizardClient", "DeleteDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDeploymentCommand)
  .de(de_DeleteDeploymentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeploymentInput;
      output: DeleteDeploymentOutput;
    };
    sdk: {
      input: DeleteDeploymentCommandInput;
      output: DeleteDeploymentCommandOutput;
    };
  };
}
