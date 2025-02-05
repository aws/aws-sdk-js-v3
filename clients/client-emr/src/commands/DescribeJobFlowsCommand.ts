// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeJobFlowsInput, DescribeJobFlowsOutput } from "../models/models_0";
import { de_DescribeJobFlowsCommand, se_DescribeJobFlowsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobFlowsCommand}.
 */
export interface DescribeJobFlowsCommandInput extends DescribeJobFlowsInput {}
/**
 * @public
 *
 * The output of {@link DescribeJobFlowsCommand}.
 */
export interface DescribeJobFlowsCommandOutput extends DescribeJobFlowsOutput, __MetadataBearer {}

/**
 * <p>This API is no longer supported and will eventually be removed. We recommend you use
 *             <a>ListClusters</a>, <a>DescribeCluster</a>, <a>ListSteps</a>, <a>ListInstanceGroups</a> and <a>ListBootstrapActions</a> instead.</p>
 *          <p>DescribeJobFlows returns a list of job flows that match all of the supplied parameters.
 *          The parameters can include a list of job flow IDs, job flow states, and restrictions on job
 *          flow creation date and time.</p>
 *          <p>Regardless of supplied parameters, only job flows created within the last two months are
 *          returned.</p>
 *          <p>If no parameters are supplied, then job flows matching either of the following criteria
 *          are returned:</p>
 *          <ul>
 *             <li>
 *                <p>Job flows created and completed in the last two weeks</p>
 *             </li>
 *             <li>
 *                <p> Job flows created within the last two months that are in one of the following
 *                states: <code>RUNNING</code>, <code>WAITING</code>, <code>SHUTTING_DOWN</code>,
 *                   <code>STARTING</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon EMR can return a maximum of 512 job flow descriptions.</p>
 *
 * @deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeJobFlowsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeJobFlowsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EMRClient(config);
 * const input = { // DescribeJobFlowsInput
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   JobFlowIds: [ // XmlStringList
 *     "STRING_VALUE",
 *   ],
 *   JobFlowStates: [ // JobFlowExecutionStateList
 *     "STARTING" || "BOOTSTRAPPING" || "RUNNING" || "WAITING" || "SHUTTING_DOWN" || "TERMINATED" || "COMPLETED" || "FAILED",
 *   ],
 * };
 * const command = new DescribeJobFlowsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobFlowsOutput
 * //   JobFlows: [ // JobFlowDetailList
 * //     { // JobFlowDetail
 * //       JobFlowId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       LogUri: "STRING_VALUE",
 * //       LogEncryptionKmsKeyId: "STRING_VALUE",
 * //       AmiVersion: "STRING_VALUE",
 * //       ExecutionStatusDetail: { // JobFlowExecutionStatusDetail
 * //         State: "STARTING" || "BOOTSTRAPPING" || "RUNNING" || "WAITING" || "SHUTTING_DOWN" || "TERMINATED" || "COMPLETED" || "FAILED", // required
 * //         CreationDateTime: new Date("TIMESTAMP"), // required
 * //         StartDateTime: new Date("TIMESTAMP"),
 * //         ReadyDateTime: new Date("TIMESTAMP"),
 * //         EndDateTime: new Date("TIMESTAMP"),
 * //         LastStateChangeReason: "STRING_VALUE",
 * //       },
 * //       Instances: { // JobFlowInstancesDetail
 * //         MasterInstanceType: "STRING_VALUE", // required
 * //         MasterPublicDnsName: "STRING_VALUE",
 * //         MasterInstanceId: "STRING_VALUE",
 * //         SlaveInstanceType: "STRING_VALUE", // required
 * //         InstanceCount: Number("int"), // required
 * //         InstanceGroups: [ // InstanceGroupDetailList
 * //           { // InstanceGroupDetail
 * //             InstanceGroupId: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //             Market: "ON_DEMAND" || "SPOT", // required
 * //             InstanceRole: "MASTER" || "CORE" || "TASK", // required
 * //             BidPrice: "STRING_VALUE",
 * //             InstanceType: "STRING_VALUE", // required
 * //             InstanceRequestCount: Number("int"), // required
 * //             InstanceRunningCount: Number("int"), // required
 * //             State: "PROVISIONING" || "BOOTSTRAPPING" || "RUNNING" || "RECONFIGURING" || "RESIZING" || "SUSPENDED" || "TERMINATING" || "TERMINATED" || "ARRESTED" || "SHUTTING_DOWN" || "ENDED", // required
 * //             LastStateChangeReason: "STRING_VALUE",
 * //             CreationDateTime: new Date("TIMESTAMP"), // required
 * //             StartDateTime: new Date("TIMESTAMP"),
 * //             ReadyDateTime: new Date("TIMESTAMP"),
 * //             EndDateTime: new Date("TIMESTAMP"),
 * //             CustomAmiId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         NormalizedInstanceHours: Number("int"),
 * //         Ec2KeyName: "STRING_VALUE",
 * //         Ec2SubnetId: "STRING_VALUE",
 * //         Placement: { // PlacementType
 * //           AvailabilityZone: "STRING_VALUE",
 * //           AvailabilityZones: [ // XmlStringMaxLen256List
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         KeepJobFlowAliveWhenNoSteps: true || false,
 * //         TerminationProtected: true || false,
 * //         UnhealthyNodeReplacement: true || false,
 * //         HadoopVersion: "STRING_VALUE",
 * //       },
 * //       Steps: [ // StepDetailList
 * //         { // StepDetail
 * //           StepConfig: { // StepConfig
 * //             Name: "STRING_VALUE", // required
 * //             ActionOnFailure: "TERMINATE_JOB_FLOW" || "TERMINATE_CLUSTER" || "CANCEL_AND_WAIT" || "CONTINUE",
 * //             HadoopJarStep: { // HadoopJarStepConfig
 * //               Properties: [ // KeyValueList
 * //                 { // KeyValue
 * //                   Key: "STRING_VALUE",
 * //                   Value: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               Jar: "STRING_VALUE", // required
 * //               MainClass: "STRING_VALUE",
 * //               Args: [ // XmlStringList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           ExecutionStatusDetail: { // StepExecutionStatusDetail
 * //             State: "PENDING" || "RUNNING" || "CONTINUE" || "COMPLETED" || "CANCELLED" || "FAILED" || "INTERRUPTED", // required
 * //             CreationDateTime: new Date("TIMESTAMP"), // required
 * //             StartDateTime: new Date("TIMESTAMP"),
 * //             EndDateTime: new Date("TIMESTAMP"),
 * //             LastStateChangeReason: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       BootstrapActions: [ // BootstrapActionDetailList
 * //         { // BootstrapActionDetail
 * //           BootstrapActionConfig: { // BootstrapActionConfig
 * //             Name: "STRING_VALUE", // required
 * //             ScriptBootstrapAction: { // ScriptBootstrapActionConfig
 * //               Path: "STRING_VALUE", // required
 * //               Args: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       SupportedProducts: [ // SupportedProductsList
 * //         "STRING_VALUE",
 * //       ],
 * //       VisibleToAllUsers: true || false,
 * //       JobFlowRole: "STRING_VALUE",
 * //       ServiceRole: "STRING_VALUE",
 * //       AutoScalingRole: "STRING_VALUE",
 * //       ScaleDownBehavior: "TERMINATE_AT_INSTANCE_HOUR" || "TERMINATE_AT_TASK_COMPLETION",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeJobFlowsCommandInput - {@link DescribeJobFlowsCommandInput}
 * @returns {@link DescribeJobFlowsCommandOutput}
 * @see {@link DescribeJobFlowsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobFlowsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 * @public
 */
export class DescribeJobFlowsCommand extends $Command
  .classBuilder<
    DescribeJobFlowsCommandInput,
    DescribeJobFlowsCommandOutput,
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
  .s("ElasticMapReduce", "DescribeJobFlows", {})
  .n("EMRClient", "DescribeJobFlowsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeJobFlowsCommand)
  .de(de_DescribeJobFlowsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJobFlowsInput;
      output: DescribeJobFlowsOutput;
    };
    sdk: {
      input: DescribeJobFlowsCommandInput;
      output: DescribeJobFlowsCommandOutput;
    };
  };
}
