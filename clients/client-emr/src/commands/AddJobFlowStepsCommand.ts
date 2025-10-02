// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AddJobFlowStepsInput, AddJobFlowStepsOutput } from "../models/models_0";
import { de_AddJobFlowStepsCommand, se_AddJobFlowStepsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddJobFlowStepsCommand}.
 */
export interface AddJobFlowStepsCommandInput extends AddJobFlowStepsInput {}
/**
 * @public
 *
 * The output of {@link AddJobFlowStepsCommand}.
 */
export interface AddJobFlowStepsCommandOutput extends AddJobFlowStepsOutput, __MetadataBearer {}

/**
 * <p>AddJobFlowSteps adds new steps to a running cluster. A maximum of 256 steps are allowed
 *          in each job flow.</p>
 *          <p>If your cluster is long-running (such as a Hive data warehouse) or complex, you may
 *          require more than 256 steps to process your data. You can bypass the 256-step limitation in
 *          various ways, including using SSH to connect to the master node and submitting queries
 *          directly to the software running on the master node, such as Hive and Hadoop.</p>
 *          <p>A step specifies the location of a JAR file stored either on the master node of the
 *          cluster or in Amazon S3. Each step is performed by the main function of the main
 *          class of the JAR file. The main class can be specified either in the manifest of the JAR or
 *          by using the MainFunction parameter of the step.</p>
 *          <p>Amazon EMR executes each step in the order listed. For a step to be considered
 *          complete, the main function must exit with a zero exit code and all Hadoop jobs started
 *          while the step was running must have completed and run successfully.</p>
 *          <p>You can only add steps to a cluster that is in one of the following states: STARTING,
 *          BOOTSTRAPPING, RUNNING, or WAITING.</p>
 *          <note>
 *             <p>The string values passed into <code>HadoopJarStep</code> object cannot exceed a total
 *             of 10240 characters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddJobFlowStepsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddJobFlowStepsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // AddJobFlowStepsInput
 *   JobFlowId: "STRING_VALUE", // required
 *   Steps: [ // StepConfigList // required
 *     { // StepConfig
 *       Name: "STRING_VALUE", // required
 *       ActionOnFailure: "TERMINATE_JOB_FLOW" || "TERMINATE_CLUSTER" || "CANCEL_AND_WAIT" || "CONTINUE",
 *       HadoopJarStep: { // HadoopJarStepConfig
 *         Properties: [ // KeyValueList
 *           { // KeyValue
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *           },
 *         ],
 *         Jar: "STRING_VALUE", // required
 *         MainClass: "STRING_VALUE",
 *         Args: [ // XmlStringList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   ExecutionRoleArn: "STRING_VALUE",
 * };
 * const command = new AddJobFlowStepsCommand(input);
 * const response = await client.send(command);
 * // { // AddJobFlowStepsOutput
 * //   StepIds: [ // StepIdsList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddJobFlowStepsCommandInput - {@link AddJobFlowStepsCommandInput}
 * @returns {@link AddJobFlowStepsCommandOutput}
 * @see {@link AddJobFlowStepsCommandInput} for command's `input` shape.
 * @see {@link AddJobFlowStepsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class AddJobFlowStepsCommand extends $Command
  .classBuilder<
    AddJobFlowStepsCommandInput,
    AddJobFlowStepsCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "AddJobFlowSteps", {})
  .n("EMRClient", "AddJobFlowStepsCommand")
  .f(void 0, void 0)
  .ser(se_AddJobFlowStepsCommand)
  .de(de_AddJobFlowStepsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddJobFlowStepsInput;
      output: AddJobFlowStepsOutput;
    };
    sdk: {
      input: AddJobFlowStepsCommandInput;
      output: AddJobFlowStepsCommandOutput;
    };
  };
}
