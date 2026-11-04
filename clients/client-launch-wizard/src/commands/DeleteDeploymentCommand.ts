// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDeploymentInput, DeleteDeploymentOutput } from "../models/models_0";
import { DeleteDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a deployment.
 *
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
 * //   status: "COMPLETED" || "CREATING" || "DELETE_IN_PROGRESS" || "DELETE_INITIATING" || "DELETE_FAILED" || "DELETED" || "FAILED" || "IN_PROGRESS" || "VALIDATING" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETED" || "UPDATE_FAILED" || "UPDATE_ROLLBACK_COMPLETED" || "UPDATE_ROLLBACK_FAILED",
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
 *
 * An internal error has occurred. Retry your request, but if the problem persists, contact us with details by posting a question on [re:Post](https://repost.aws/).
 *
 * @throws {@link ResourceLimitException} (client fault)
 *
 * You have exceeded an Launch Wizard resource limit. For example, you might have too many deployments in progress.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified workload or deployment resource can't be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link LaunchWizardServiceException}
 *
 * Base exception class for all service exceptions from LaunchWizard service.
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
export class DeleteDeploymentCommand extends command<DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDeployment",
  DeleteDeployment$
) {
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
