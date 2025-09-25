// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEnvironmentInput, UpdateEnvironmentOutput } from "../models/models_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { UpdateEnvironment } from "../schemas/schemas_2_Environment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandInput extends UpdateEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentCommand}.
 */
export interface UpdateEnvironmentCommandOutput extends UpdateEnvironmentOutput, __MetadataBearer {}

/**
 * <p>Update an environment.</p>
 *          <p>If the environment is associated with an environment account connection, <i>don't</i> update or include the
 *         <code>protonServiceRoleArn</code> and <code>provisioningRepository</code> parameter to update or connect to an environment account connection.</p>
 *          <p>You can only update to a new environment account connection if that connection was created in the same environment account that the current
 *       environment account connection was created in. The account connection must also be associated with the current environment.</p>
 *          <p>If the environment <i>isn't</i> associated with an environment account connection, <i>don't</i> update or include the
 *         <code>environmentAccountConnectionId</code> parameter. You <i>can't</i> update or connect the environment to an environment account
 *       connection if it <i>isn't</i> already associated with an environment connection.</p>
 *          <p>You can update either the <code>environmentAccountConnectionId</code> or <code>protonServiceRoleArn</code> parameter and value. You can’t update
 *       both.</p>
 *          <p>If the environment was configured for Amazon Web Services-managed provisioning, omit the <code>provisioningRepository</code> parameter.</p>
 *          <p>If the environment was configured for self-managed provisioning, specify the <code>provisioningRepository</code> parameter and omit the
 *         <code>protonServiceRoleArn</code> and <code>environmentAccountConnectionId</code> parameters.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html">Environments</a> and <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html">Provisioning methods</a> in the <i>Proton User
 *         Guide</i>.</p>
 *          <p>There are four modes for updating an environment. The <code>deploymentType</code> field defines the mode.</p>
 *          <dl>
 *             <dt/>
 *             <dd>
 *                <p>
 *                   <code>NONE</code>
 *                </p>
 *                <p>In this mode, a deployment <i>doesn't</i> occur. Only the requested metadata parameters are updated.</p>
 *             </dd>
 *             <dt/>
 *             <dd>
 *                <p>
 *                   <code>CURRENT_VERSION</code>
 *                </p>
 *                <p>In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated.
 *               <i>Don’t</i> include minor or major version parameters when you use this <code>deployment-type</code>.</p>
 *             </dd>
 *             <dt/>
 *             <dd>
 *                <p>
 *                   <code>MINOR_VERSION</code>
 *                </p>
 *                <p>In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in
 *             use, by default. You can also specify a different minor version of the current major version in use.</p>
 *             </dd>
 *             <dt/>
 *             <dd>
 *                <p>
 *                   <code>MAJOR_VERSION</code>
 *                </p>
 *                <p>In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template,
 *             by default. You can also specify a different major version that's higher than the major version in use and a minor version.</p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateEnvironmentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateEnvironmentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // UpdateEnvironmentInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   spec: "STRING_VALUE",
 *   templateMajorVersion: "STRING_VALUE",
 *   templateMinorVersion: "STRING_VALUE",
 *   protonServiceRoleArn: "STRING_VALUE",
 *   deploymentType: "STRING_VALUE", // required
 *   environmentAccountConnectionId: "STRING_VALUE",
 *   provisioningRepository: { // RepositoryBranchInput
 *     provider: "STRING_VALUE", // required
 *     name: "STRING_VALUE", // required
 *     branch: "STRING_VALUE", // required
 *   },
 *   componentRoleArn: "STRING_VALUE",
 *   codebuildRoleArn: "STRING_VALUE",
 * };
 * const command = new UpdateEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentOutput
 * //   environment: { // Environment
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentAttemptedAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentSucceededAt: new Date("TIMESTAMP"), // required
 * //     arn: "STRING_VALUE", // required
 * //     templateName: "STRING_VALUE", // required
 * //     templateMajorVersion: "STRING_VALUE", // required
 * //     templateMinorVersion: "STRING_VALUE", // required
 * //     deploymentStatus: "STRING_VALUE", // required
 * //     deploymentStatusMessage: "STRING_VALUE",
 * //     protonServiceRoleArn: "STRING_VALUE",
 * //     environmentAccountConnectionId: "STRING_VALUE",
 * //     environmentAccountId: "STRING_VALUE",
 * //     spec: "STRING_VALUE",
 * //     provisioning: "STRING_VALUE",
 * //     provisioningRepository: { // RepositoryBranch
 * //       arn: "STRING_VALUE", // required
 * //       provider: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     componentRoleArn: "STRING_VALUE",
 * //     codebuildRoleArn: "STRING_VALUE",
 * //     lastAttemptedDeploymentId: "STRING_VALUE",
 * //     lastSucceededDeploymentId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEnvironmentCommandInput - {@link UpdateEnvironmentCommandInput}
 * @returns {@link UpdateEnvironmentCommandOutput}
 * @see {@link UpdateEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 *
 * @public
 */
export class UpdateEnvironmentCommand extends $Command
  .classBuilder<
    UpdateEnvironmentCommandInput,
    UpdateEnvironmentCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "UpdateEnvironment", {})
  .n("ProtonClient", "UpdateEnvironmentCommand")
  .sc(UpdateEnvironment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentInput;
      output: UpdateEnvironmentOutput;
    };
    sdk: {
      input: UpdateEnvironmentCommandInput;
      output: UpdateEnvironmentCommandOutput;
    };
  };
}
