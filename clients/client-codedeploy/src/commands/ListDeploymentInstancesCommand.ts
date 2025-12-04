// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDeploymentInstancesInput, ListDeploymentInstancesOutput } from "../models/models_0";
import { ListDeploymentInstances } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentInstancesCommand}.
 */
export interface ListDeploymentInstancesCommandInput extends ListDeploymentInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentInstancesCommand}.
 */
export interface ListDeploymentInstancesCommandOutput extends ListDeploymentInstancesOutput, __MetadataBearer {}

/**
 * <note>
 *             <p> The newer <code>BatchGetDeploymentTargets</code> should be used instead because
 *                 it works with all compute types. <code>ListDeploymentInstances</code> throws an
 *                 exception if it is used with a compute platform other than EC2/On-premises or
 *                     Lambda. </p>
 *          </note>
 *          <p> Lists the instance for a deployment associated with the user or Amazon Web Services account. </p>
 *
 * @deprecated This operation is deprecated, use ListDeploymentTargets instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, ListDeploymentInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, ListDeploymentInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // ListDeploymentInstancesInput
 *   deploymentId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   instanceStatusFilter: [ // InstanceStatusList
 *     "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown" || "Ready",
 *   ],
 *   instanceTypeFilter: [ // InstanceTypeList
 *     "Blue" || "Green",
 *   ],
 * };
 * const command = new ListDeploymentInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentInstancesOutput
 * //   instancesList: [ // InstancesList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentInstancesCommandInput - {@link ListDeploymentInstancesCommandInput}
 * @returns {@link ListDeploymentInstancesCommandOutput}
 * @see {@link ListDeploymentInstancesCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *  <p>The deployment with the user or Amazon Web Services account does not exist.</p>
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *  <p>At least one deployment ID must be specified.</p>
 *
 * @throws {@link DeploymentNotStartedException} (client fault)
 *  <p>The specified deployment has not started.</p>
 *
 * @throws {@link InvalidComputePlatformException} (client fault)
 *  <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code>, <code>Server</code>, or <code>ECS</code>.</p>
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 * @throws {@link InvalidDeploymentInstanceTypeException} (client fault)
 *  <p>An instance type was specified for an in-place deployment. Instance types are
 *             supported for blue/green deployments only.</p>
 *
 * @throws {@link InvalidInstanceStatusException} (client fault)
 *  <p>The specified instance status does not exist.</p>
 *
 * @throws {@link InvalidInstanceTypeException} (client fault)
 *  <p>An invalid instance type was specified for instances in a blue/green deployment. Valid
 *             values include "Blue" for an original environment and "Green" for a replacement
 *             environment.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The next token was specified in an invalid format.</p>
 *
 * @throws {@link InvalidTargetFilterNameException} (client fault)
 *  <p> The target filter name is invalid. </p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class ListDeploymentInstancesCommand extends $Command
  .classBuilder<
    ListDeploymentInstancesCommandInput,
    ListDeploymentInstancesCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "ListDeploymentInstances", {})
  .n("CodeDeployClient", "ListDeploymentInstancesCommand")
  .sc(ListDeploymentInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentInstancesInput;
      output: ListDeploymentInstancesOutput;
    };
    sdk: {
      input: ListDeploymentInstancesCommandInput;
      output: ListDeploymentInstancesCommandOutput;
    };
  };
}
