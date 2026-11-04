// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDeploymentTargetsInput, ListDeploymentTargetsOutput } from "../models/models_0";
import { ListDeploymentTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDeploymentTargetsCommand}.
 */
export interface ListDeploymentTargetsCommandInput extends ListDeploymentTargetsInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentTargetsCommand}.
 */
export interface ListDeploymentTargetsCommandOutput extends ListDeploymentTargetsOutput, __MetadataBearer {}

/**
 * Returns an array of target IDs that are associated a deployment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentTargetsCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentTargetsCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // ListDeploymentTargetsInput
 *   deploymentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   targetFilters: { // TargetFilters
 *     "<keys>": [ // FilterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListDeploymentTargetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentTargetsOutput
 * //   targetIds: [ // TargetIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentTargetsCommandInput - {@link ListDeploymentTargetsCommandInput}
 * @returns {@link ListDeploymentTargetsCommandOutput}
 * @see {@link ListDeploymentTargetsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentTargetsCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link ApplicationDoesNotExistException} (client fault)
 *
 * The application does not exist with the user or Amazon Web Services account.
 *
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *
 * The deployment with the user or Amazon Web Services account does not exist.
 *
 * @throws {@link DeploymentGroupDoesNotExistException} (client fault)
 *
 * The named deployment group with the user or Amazon Web Services account does not exist.
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *
 * At least one deployment ID must be specified.
 *
 * @throws {@link DeploymentNotStartedException} (client fault)
 *
 * The specified deployment has not started.
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *
 * At least one of the deployment IDs was specified in an invalid format.
 *
 * @throws {@link InvalidDeploymentInstanceTypeException} (client fault)
 *
 * An instance type was specified for an in-place deployment. Instance types are supported for blue/green deployments only.
 *
 * @throws {@link InvalidInstanceStatusException} (client fault)
 *
 * The specified instance status does not exist.
 *
 * @throws {@link InvalidInstanceTypeException} (client fault)
 *
 * An invalid instance type was specified for instances in a blue/green deployment. Valid values include "Blue" for an original environment and "Green" for a replacement environment.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The next token was specified in an invalid format.
 *
 * @throws {@link InvalidTargetFilterNameException} (client fault)
 *
 * The target filter name is invalid.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class ListDeploymentTargetsCommand extends command<ListDeploymentTargetsCommandInput, ListDeploymentTargetsCommandOutput>(
  _ep0,
  _mw0,
  "ListDeploymentTargets",
  ListDeploymentTargets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentTargetsInput;
      output: ListDeploymentTargetsOutput;
    };
    sdk: {
      input: ListDeploymentTargetsCommandInput;
      output: ListDeploymentTargetsCommandOutput;
    };
  };
}
