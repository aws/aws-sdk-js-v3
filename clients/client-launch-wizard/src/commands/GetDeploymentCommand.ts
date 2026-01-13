// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import type { GetDeploymentInput, GetDeploymentOutput } from "../models/models_0";
import { GetDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandInput extends GetDeploymentInput {}
/**
 * @public
 *
 * The output of {@link GetDeploymentCommand}.
 */
export interface GetDeploymentCommandOutput extends GetDeploymentOutput, __MetadataBearer {}

/**
 * <p>Returns information about the deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, GetDeploymentCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, GetDeploymentCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * // import type { LaunchWizardClientConfig } from "@aws-sdk/client-launch-wizard";
 * const config = {}; // type is LaunchWizardClientConfig
 * const client = new LaunchWizardClient(config);
 * const input = { // GetDeploymentInput
 *   deploymentId: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentOutput
 * //   deployment: { // DeploymentData
 * //     name: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     workloadName: "STRING_VALUE",
 * //     patternName: "STRING_VALUE",
 * //     status: "COMPLETED" || "CREATING" || "DELETE_IN_PROGRESS" || "DELETE_INITIATING" || "DELETE_FAILED" || "DELETED" || "FAILED" || "IN_PROGRESS" || "VALIDATING",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     specifications: { // DeploymentSpecifications
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     resourceGroup: "STRING_VALUE",
 * //     deletedAt: new Date("TIMESTAMP"),
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     deploymentArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeploymentCommandInput - {@link GetDeploymentCommandInput}
 * @returns {@link GetDeploymentCommandOutput}
 * @see {@link GetDeploymentCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
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
 * @example Get details about a given deployment.
 * ```javascript
 * //
 * const input = {
 *   deploymentId: "1111111-1111-1111-1111-111111111111"
 * };
 * const command = new GetDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   deployment: {
 *     createdAt: "2023-04-24T13:10:09.857Z",
 *     deploymentArn: "arn:aws:launchwizard:us-east-1:123456789012:deployment/1111111-1111-1111-1111-111111111111",
 *     id: "1111111-1111-1111-1111-111111111111",
 *     name: "SapHanaSingleForTest",
 *     specifications: {
 *       DisableDeploymentRollback: "true",
 *       Encryption: "Yes",
 *       KeyName: "testLinuxInstance",
 *       SAPTZ: "America/Vancouver",
 *       VPCID: "vpc-1234567",
 *       applicationName: "SapHanaSingleForTest",
 *       deploymentScenario: "SapHanaSingle",
 *       environmentType: "production",
 *       saveArtifactsS3Uri: "s3://testbucket",
 *       saveDeploymentArtifacts: "Yes"
 *     },
 *     status: "FAILED",
 *     tags: {
 *       key1: "val1",
 *       key2: "val2"
 *     },
 *     workloadName: "SapHanaSingle"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDeploymentCommand extends $Command
  .classBuilder<
    GetDeploymentCommandInput,
    GetDeploymentCommandOutput,
    LaunchWizardClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LaunchWizardClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LaunchWizard", "GetDeployment", {})
  .n("LaunchWizardClient", "GetDeploymentCommand")
  .sc(GetDeployment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentInput;
      output: GetDeploymentOutput;
    };
    sdk: {
      input: GetDeploymentCommandInput;
      output: GetDeploymentCommandOutput;
    };
  };
}
