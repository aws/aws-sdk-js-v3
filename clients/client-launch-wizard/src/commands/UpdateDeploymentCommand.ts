// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import type { UpdateDeploymentInput, UpdateDeploymentOutput } from "../models/models_0";
import { UpdateDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeploymentCommand}.
 */
export interface UpdateDeploymentCommandInput extends UpdateDeploymentInput {}
/**
 * @public
 *
 * The output of {@link UpdateDeploymentCommand}.
 */
export interface UpdateDeploymentCommandOutput extends UpdateDeploymentOutput, __MetadataBearer {}

/**
 * <p>Updates a deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, UpdateDeploymentCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, UpdateDeploymentCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * // import type { LaunchWizardClientConfig } from "@aws-sdk/client-launch-wizard";
 * const config = {}; // type is LaunchWizardClientConfig
 * const client = new LaunchWizardClient(config);
 * const input = { // UpdateDeploymentInput
 *   deploymentId: "STRING_VALUE", // required
 *   specifications: { // DeploymentSpecifications // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   workloadVersionName: "STRING_VALUE",
 *   deploymentPatternVersionName: "STRING_VALUE",
 *   dryRun: true || false,
 *   force: true || false,
 * };
 * const command = new UpdateDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDeploymentOutput
 * //   deployment: { // DeploymentDataSummary
 * //     name: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     workloadName: "STRING_VALUE",
 * //     patternName: "STRING_VALUE",
 * //     status: "COMPLETED" || "CREATING" || "DELETE_IN_PROGRESS" || "DELETE_INITIATING" || "DELETE_FAILED" || "DELETED" || "FAILED" || "IN_PROGRESS" || "VALIDATING" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETED" || "UPDATE_FAILED" || "UPDATE_ROLLBACK_COMPLETED" || "UPDATE_ROLLBACK_FAILED",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDeploymentCommandInput - {@link UpdateDeploymentCommandInput}
 * @returns {@link UpdateDeploymentCommandOutput}
 * @see {@link UpdateDeploymentCommandInput} for command's `input` shape.
 * @see {@link UpdateDeploymentCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 *
 * @throws {@link ResourceLimitException} (client fault)
 *  <p>You have exceeded an Launch Wizard resource limit. For example, you might have too many deployments in progress.</p>
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
 * @example Edit deployment specifications.
 * ```javascript
 * //
 * const input = {
 *   deploymentId: "4c1b59c1-659c-467f-b6e9-6ef6f9d28e1d",
 *   dryRun: false,
 *   specifications: {
 *     CreateSecurityGroup: "No",
 *     DeploymentArtifactsS3Uri: "aws-bucket-name",
 *     DisableDeploymentRollback: "No",
 *     EnableEbsVolumeEncryption: "No",
 *     KeyPairName: "keyName",
 *     ProxyServerAddress: "http://mno.abc.com:8080",
 *     SapSysGroupId: "5003",
 *     SapVirtualIPOptIn: "No",
 *     SaveDeploymentArtifacts: "Yes",
 *     SnsTopicArn: "arn:aws:sns:us-east-1:111111222222:snsNameUsEast1.fifo",
 *     Timezone: "Pacific/Wake",
 *     VpcId: "vpc-1234567"
 *   }
 * };
 * const command = new UpdateDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   deployment: {
 *     createdAt: 1736286728468,
 *     id: "4c1b59c1-659c-467f-b6e9-6ef6f9d28e1d",
 *     name: "TestDeployment1",
 *     patternName: "SapHanaSingle",
 *     status: "UPDATE_IN_PROGRESS",
 *     workloadName: "SAP"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Update deployment version.
 * ```javascript
 * //
 * const input = {
 *   deploymentId: "4c1b59c1-659c-467f-b6e9-6ef6f9d28e1d",
 *   deploymentPatternVersionName: "2.0.0",
 *   dryRun: false,
 *   specifications: {
 *     CreateSecurityGroup: "No",
 *     DeploymentArtifactsS3Uri: "aws-bucket-name",
 *     DisableDeploymentRollback: "No",
 *     EnableEbsVolumeEncryption: "No",
 *     KeyPairName: "keyName",
 *     NewParameter: "Allow",
 *     ProxyServerAddress: "http://mno.abc.com:8080",
 *     SapSysGroupId: "5003",
 *     SapVirtualIPOptIn: "No",
 *     SaveDeploymentArtifacts: "Yes",
 *     SnsTopicArn: "arn:aws:sns:us-east-1:111111222222:snsNameUsEast1.fifo",
 *     Timezone: "Pacific/Wake",
 *     VpcId: "vpc-1234567"
 *   }
 * };
 * const command = new UpdateDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   deployment: {
 *     createdAt: 1736286728468,
 *     id: "4c1b59c1-659c-467f-b6e9-6ef6f9d28e1d",
 *     name: "TestDeployment1",
 *     patternName: "SapHanaSingle",
 *     status: "UPDATE_IN_PROGRESS",
 *     workloadName: "SAP"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateDeploymentCommand extends $Command
  .classBuilder<
    UpdateDeploymentCommandInput,
    UpdateDeploymentCommandOutput,
    LaunchWizardClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LaunchWizard", "UpdateDeployment", {})
  .n("LaunchWizardClient", "UpdateDeploymentCommand")
  .sc(UpdateDeployment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeploymentInput;
      output: UpdateDeploymentOutput;
    };
    sdk: {
      input: UpdateDeploymentCommandInput;
      output: UpdateDeploymentCommandOutput;
    };
  };
}
