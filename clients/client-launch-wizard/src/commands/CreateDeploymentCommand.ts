// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import {
  CreateDeploymentInput,
  CreateDeploymentInputFilterSensitiveLog,
  CreateDeploymentOutput,
} from "../models/models_0";
import { de_CreateDeploymentCommand, se_CreateDeploymentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandInput extends CreateDeploymentInput {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandOutput extends CreateDeploymentOutput, __MetadataBearer {}

/**
 * <p>Creates a deployment for the given workload. Deployments created by this operation are
 *          not available in the Launch Wizard console to use the <code>Clone deployment</code> action
 *          on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, CreateDeploymentCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, CreateDeploymentCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * const client = new LaunchWizardClient(config);
 * const input = { // CreateDeploymentInput
 *   workloadName: "STRING_VALUE", // required
 *   deploymentPatternName: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   specifications: { // DeploymentSpecifications // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   dryRun: true || false,
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeploymentOutput
 * //   deploymentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDeploymentCommandInput - {@link CreateDeploymentCommandInput}
 * @returns {@link CreateDeploymentCommandOutput}
 * @see {@link CreateDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateDeploymentCommand extends $Command
  .classBuilder<
    CreateDeploymentCommandInput,
    CreateDeploymentCommandOutput,
    LaunchWizardClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LaunchWizard", "CreateDeployment", {})
  .n("LaunchWizardClient", "CreateDeploymentCommand")
  .f(CreateDeploymentInputFilterSensitiveLog, void 0)
  .ser(se_CreateDeploymentCommand)
  .de(de_CreateDeploymentCommand)
  .build() {}
