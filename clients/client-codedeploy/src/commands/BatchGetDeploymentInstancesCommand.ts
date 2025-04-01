// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetDeploymentInstancesInput, BatchGetDeploymentInstancesOutput } from "../models/models_0";
import { de_BatchGetDeploymentInstancesCommand, se_BatchGetDeploymentInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetDeploymentInstancesCommand}.
 */
export interface BatchGetDeploymentInstancesCommandInput extends BatchGetDeploymentInstancesInput {}
/**
 * @public
 *
 * The output of {@link BatchGetDeploymentInstancesCommand}.
 */
export interface BatchGetDeploymentInstancesCommandOutput extends BatchGetDeploymentInstancesOutput, __MetadataBearer {}

/**
 * <note>
 *             <p> This method works, but is deprecated. Use <code>BatchGetDeploymentTargets</code>
 *                 instead. </p>
 *          </note>
 *          <p> Returns an array of one or more instances associated with a deployment. This method
 *             works with EC2/On-premises and Lambda compute platforms. The newer
 *                 <code>BatchGetDeploymentTargets</code> works with all compute platforms. The maximum
 *             number of instances that can be returned is 25.</p>
 *
 * @deprecated This operation is deprecated, use BatchGetDeploymentTargets instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, BatchGetDeploymentInstancesCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, BatchGetDeploymentInstancesCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // BatchGetDeploymentInstancesInput
 *   deploymentId: "STRING_VALUE", // required
 *   instanceIds: [ // InstancesList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetDeploymentInstancesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetDeploymentInstancesOutput
 * //   instancesSummary: [ // InstanceSummaryList
 * //     { // InstanceSummary
 * //       deploymentId: "STRING_VALUE",
 * //       instanceId: "STRING_VALUE",
 * //       status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown" || "Ready",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       lifecycleEvents: [ // LifecycleEventList
 * //         { // LifecycleEvent
 * //           lifecycleEventName: "STRING_VALUE",
 * //           diagnostics: { // Diagnostics
 * //             errorCode: "Success" || "ScriptMissing" || "ScriptNotExecutable" || "ScriptTimedOut" || "ScriptFailed" || "UnknownError",
 * //             scriptName: "STRING_VALUE",
 * //             message: "STRING_VALUE",
 * //             logTail: "STRING_VALUE",
 * //           },
 * //           startTime: new Date("TIMESTAMP"),
 * //           endTime: new Date("TIMESTAMP"),
 * //           status: "Pending" || "InProgress" || "Succeeded" || "Failed" || "Skipped" || "Unknown",
 * //         },
 * //       ],
 * //       instanceType: "Blue" || "Green",
 * //     },
 * //   ],
 * //   errorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BatchGetDeploymentInstancesCommandInput - {@link BatchGetDeploymentInstancesCommandInput}
 * @returns {@link BatchGetDeploymentInstancesCommandOutput}
 * @see {@link BatchGetDeploymentInstancesCommandInput} for command's `input` shape.
 * @see {@link BatchGetDeploymentInstancesCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link BatchLimitExceededException} (client fault)
 *  <p>The maximum number of names or IDs allowed for this request (100) was exceeded.</p>
 *
 * @throws {@link DeploymentDoesNotExistException} (client fault)
 *  <p>The deployment with the user or Amazon Web Services account does not exist.</p>
 *
 * @throws {@link DeploymentIdRequiredException} (client fault)
 *  <p>At least one deployment ID must be specified.</p>
 *
 * @throws {@link InstanceIdRequiredException} (client fault)
 *  <p>The instance ID was not specified.</p>
 *
 * @throws {@link InvalidComputePlatformException} (client fault)
 *  <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code>, <code>Server</code>, or <code>ECS</code>.</p>
 *
 * @throws {@link InvalidDeploymentIdException} (client fault)
 *  <p>At least one of the deployment IDs was specified in an invalid format.</p>
 *
 * @throws {@link InvalidInstanceNameException} (client fault)
 *  <p>The on-premises instance name was specified in an invalid format.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class BatchGetDeploymentInstancesCommand extends $Command
  .classBuilder<
    BatchGetDeploymentInstancesCommandInput,
    BatchGetDeploymentInstancesCommandOutput,
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
  .s("CodeDeploy_20141006", "BatchGetDeploymentInstances", {})
  .n("CodeDeployClient", "BatchGetDeploymentInstancesCommand")
  .f(void 0, void 0)
  .ser(se_BatchGetDeploymentInstancesCommand)
  .de(de_BatchGetDeploymentInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetDeploymentInstancesInput;
      output: BatchGetDeploymentInstancesOutput;
    };
    sdk: {
      input: BatchGetDeploymentInstancesCommandInput;
      output: BatchGetDeploymentInstancesCommandOutput;
    };
  };
}
