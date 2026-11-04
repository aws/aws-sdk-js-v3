// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDeploymentGroupInput, DeleteDeploymentGroupOutput } from "../models/models_0";
import { DeleteDeploymentGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDeploymentGroupCommand}.
 */
export interface DeleteDeploymentGroupCommandInput extends DeleteDeploymentGroupInput {}
/**
 * @public
 *
 * The output of {@link DeleteDeploymentGroupCommand}.
 */
export interface DeleteDeploymentGroupCommandOutput extends DeleteDeploymentGroupOutput, __MetadataBearer {}

/**
 * Deletes a deployment group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteDeploymentGroupCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteDeploymentGroupCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // DeleteDeploymentGroupInput
 *   applicationName: "STRING_VALUE", // required
 *   deploymentGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeploymentGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDeploymentGroupOutput
 * //   hooksNotCleanedUp: [ // AutoScalingGroupList
 * //     { // AutoScalingGroup
 * //       name: "STRING_VALUE",
 * //       hook: "STRING_VALUE",
 * //       terminationHook: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteDeploymentGroupCommandInput - {@link DeleteDeploymentGroupCommandInput}
 * @returns {@link DeleteDeploymentGroupCommandOutput}
 * @see {@link DeleteDeploymentGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationNameRequiredException} (client fault)
 *
 * The minimum number of required application names was not specified.
 *
 * @throws {@link DeploymentGroupNameRequiredException} (client fault)
 *
 * The deployment group name was not specified.
 *
 * @throws {@link InvalidApplicationNameException} (client fault)
 *
 * The application name was specified in an invalid format.
 *
 * @throws {@link InvalidDeploymentGroupNameException} (client fault)
 *
 * The deployment group name was specified in an invalid format.
 *
 * @throws {@link InvalidRoleException} (client fault)
 *
 * The service role ARN was specified in an invalid format. Or, if an Auto Scaling group was specified, the specified service role does not grant the appropriate permissions to Amazon EC2 Auto Scaling.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class DeleteDeploymentGroupCommand extends command<DeleteDeploymentGroupCommandInput, DeleteDeploymentGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDeploymentGroup",
  DeleteDeploymentGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeploymentGroupInput;
      output: DeleteDeploymentGroupOutput;
    };
    sdk: {
      input: DeleteDeploymentGroupCommandInput;
      output: DeleteDeploymentGroupCommandOutput;
    };
  };
}
