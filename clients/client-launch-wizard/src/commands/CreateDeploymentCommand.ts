// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import type { CreateDeploymentInput, CreateDeploymentOutput } from "../models/models_0";
import { CreateDeployment } from "../schemas/schemas_0";

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
 * // import type { LaunchWizardClientConfig } from "@aws-sdk/client-launch-wizard";
 * const config = {}; // type is LaunchWizardClientConfig
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
 *
 * @example Deploy a given workload with given settings.
 * ```javascript
 * //
 * const input = {
 *   deploymentPatternName: "SapHanaSingle",
 *   dryRun: false,
 *   name: "SapHanaSingleForTest",
 *   specifications: {
 *     DisableDeploymentRollback: "true",
 *     Encryption: "Yes",
 *     KeyName: "testLinuxInstance",
 *     SAPTZ: "America/Vancouver",
 *     VPCID: "vpc-1234567",
 *     applicationName: "SapHanaSingleForTest",
 *     deploymentScenario: "SapHanaSingle",
 *     environmentType: "production",
 *     saveArtifactsS3Uri: "s3://testbucket",
 *     saveDeploymentArtifacts: "Yes"
 *   },
 *   workloadName: "SAP"
 * };
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   deploymentId: "4c1b59c1-659c-467f-b6e9-6ef6f9d28e1d"
 * }
 * *\/
 * ```
 *
 * @example Deploy a given workload with given settings and passing tags for Launch Wizard deployment resource.
 * ```javascript
 * //
 * const input = {
 *   deploymentPatternName: "SapHanaSingle",
 *   dryRun: false,
 *   name: "SapHanaSingleForTest",
 *   specifications: {
 *     DisableDeploymentRollback: "true",
 *     Encryption: "Yes",
 *     KeyName: "testLinuxInstance",
 *     SAPTZ: "America/Vancouver",
 *     VPCID: "vpc-1234567",
 *     applicationName: "SapHanaSingleForTest",
 *     deploymentScenario: "SapHanaSingle",
 *     environmentType: "production",
 *     saveArtifactsS3Uri: "s3://testbucket",
 *     saveDeploymentArtifacts: "Yes"
 *   },
 *   tags: {
 *     key1: "val1",
 *     key2: "val2"
 *   },
 *   workloadName: "SAP"
 * };
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   deploymentId: "1111111-1111-1111-1111-111111111111"
 * }
 * *\/
 * ```
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LaunchWizard", "CreateDeployment", {})
  .n("LaunchWizardClient", "CreateDeploymentCommand")
  .sc(CreateDeployment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentInput;
      output: CreateDeploymentOutput;
    };
    sdk: {
      input: CreateDeploymentCommandInput;
      output: CreateDeploymentCommandOutput;
    };
  };
}
