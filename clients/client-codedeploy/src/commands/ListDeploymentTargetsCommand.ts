// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDeploymentTargetsInput, ListDeploymentTargetsOutput } from "../models/models_0";
import { de_ListDeploymentTargetsCommand, se_ListDeploymentTargetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Returns an array of target IDs that are associated a deployment. </p>
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
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *  <p>The deployment with the user or Amazon Web Services account does not exist.</p>
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *  <p>At least one deployment ID must be specified.</p>
 *
 * @throws {@link DeploymentNotStartedException} (client fault)
 *  <p>The specified deployment has not started.</p>
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
export class ListDeploymentTargetsCommand extends $Command
  .classBuilder<
    ListDeploymentTargetsCommandInput,
    ListDeploymentTargetsCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeDeploy_20141006", "ListDeploymentTargets", {})
  .n("CodeDeployClient", "ListDeploymentTargetsCommand")
  .f(void 0, void 0)
  .ser(se_ListDeploymentTargetsCommand)
  .de(de_ListDeploymentTargetsCommand)
  .build() {
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
