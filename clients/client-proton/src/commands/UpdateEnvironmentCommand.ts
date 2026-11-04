// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEnvironmentInput, UpdateEnvironmentOutput } from "../models/models_0";
import { UpdateEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Update an environment.
 *
 * If the environment is associated with an environment account connection, *don't* update or include the `protonServiceRoleArn` and `provisioningRepository` parameter to update or connect to an environment account connection.
 *
 * You can only update to a new environment account connection if that connection was created in the same environment account that the current environment account connection was created in. The account connection must also be associated with the current environment.
 *
 * If the environment *isn't* associated with an environment account connection, *don't* update or include the `environmentAccountConnectionId` parameter. You *can't* update or connect the environment to an environment account connection if it *isn't* already associated with an environment connection.
 *
 * You can update either the `environmentAccountConnectionId` or `protonServiceRoleArn` parameter and value. You can’t update both.
 *
 * If the environment was configured for Amazon Web Services-managed provisioning, omit the `provisioningRepository` parameter.
 *
 * If the environment was configured for self-managed provisioning, specify the `provisioningRepository` parameter and omit the `protonServiceRoleArn` and `environmentAccountConnectionId` parameters.
 *
 * For more information, see [Environments](https://docs.aws.amazon.com/proton/latest/userguide/ag-environments.html) and [Provisioning methods](https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html) in the *Proton User Guide*.
 *
 * There are four modes for updating an environment. The `deploymentType` field defines the mode.
 *
 * - **`NONE`
 *
 *   In this mode, a deployment *doesn't* occur. Only the requested metadata parameters are updated.
 *
 * - **`CURRENT_VERSION`
 *
 *   In this mode, the environment is deployed and updated with the new spec that you provide. Only requested parameters are updated. *Don’t* include minor or major version parameters when you use this `deployment-type`.
 *
 * - **`MINOR_VERSION`
 *
 *   In this mode, the environment is deployed and updated with the published, recommended (latest) minor version of the current major version in use, by default. You can also specify a different minor version of the current major version in use.
 *
 * - **`MAJOR_VERSION`
 *
 *   In this mode, the environment is deployed and updated with the published, recommended (latest) major and minor version of the current template, by default. You can also specify a different major version that's higher than the major version in use and a minor version.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers. @example Use a bare-bones client and the command you need to make an API call.********```javascript
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
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request *couldn't* be made due to a conflicting operation or resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class UpdateEnvironmentCommand extends command<UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEnvironment",
  UpdateEnvironment$
) {
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
