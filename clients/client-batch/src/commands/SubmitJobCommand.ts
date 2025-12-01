// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SubmitJobRequest, SubmitJobResponse } from "../models/models_0";
import { SubmitJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SubmitJobCommand}.
 */
export interface SubmitJobCommandInput extends SubmitJobRequest {}
/**
 * @public
 *
 * The output of {@link SubmitJobCommand}.
 */
export interface SubmitJobCommandOutput extends SubmitJobResponse, __MetadataBearer {}

/**
 * <p>Submits an Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a> override parameters defined in the job definition. vCPU and memory
 *       requirements that are specified in the <code>resourceRequirements</code> objects in the job
 *       definition are the exception. They can't be overridden this way using the <code>memory</code>
 *       and <code>vcpus</code> parameters. Rather, you must specify updates to job definition
 *       parameters in a <code>resourceRequirements</code> object that's included in the
 *         <code>containerOverrides</code> parameter.</p>
 *          <note>
 *             <p>Job queues with a scheduling policy are limited to 500 active share identifiers at
 *         a time. </p>
 *          </note>
 *          <important>
 *             <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days.
 *         This is because, after 14 days, Fargate resources might become unavailable and job might be
 *         terminated.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, SubmitJobCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, SubmitJobCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * // import type { BatchClientConfig } from "@aws-sdk/client-batch";
 * const config = {}; // type is BatchClientConfig
 * const client = new BatchClient(config);
 * const input = { // SubmitJobRequest
 *   jobName: "STRING_VALUE", // required
 *   jobQueue: "STRING_VALUE", // required
 *   shareIdentifier: "STRING_VALUE",
 *   schedulingPriorityOverride: Number("int"),
 *   arrayProperties: { // ArrayProperties
 *     size: Number("int"),
 *   },
 *   dependsOn: [ // JobDependencyList
 *     { // JobDependency
 *       jobId: "STRING_VALUE",
 *       type: "N_TO_N" || "SEQUENTIAL",
 *     },
 *   ],
 *   jobDefinition: "STRING_VALUE", // required
 *   parameters: { // ParametersMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   containerOverrides: { // ContainerOverrides
 *     vcpus: Number("int"),
 *     memory: Number("int"),
 *     command: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     instanceType: "STRING_VALUE",
 *     environment: [ // EnvironmentVariables
 *       { // KeyValuePair
 *         name: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     resourceRequirements: [ // ResourceRequirements
 *       { // ResourceRequirement
 *         value: "STRING_VALUE", // required
 *         type: "GPU" || "VCPU" || "MEMORY", // required
 *       },
 *     ],
 *   },
 *   nodeOverrides: { // NodeOverrides
 *     numNodes: Number("int"),
 *     nodePropertyOverrides: [ // NodePropertyOverrides
 *       { // NodePropertyOverride
 *         targetNodes: "STRING_VALUE", // required
 *         containerOverrides: {
 *           vcpus: Number("int"),
 *           memory: Number("int"),
 *           command: [
 *             "STRING_VALUE",
 *           ],
 *           instanceType: "STRING_VALUE",
 *           environment: [
 *             {
 *               name: "STRING_VALUE",
 *               value: "STRING_VALUE",
 *             },
 *           ],
 *           resourceRequirements: [
 *             {
 *               value: "STRING_VALUE", // required
 *               type: "GPU" || "VCPU" || "MEMORY", // required
 *             },
 *           ],
 *         },
 *         ecsPropertiesOverride: { // EcsPropertiesOverride
 *           taskProperties: [ // ListTaskPropertiesOverride
 *             { // TaskPropertiesOverride
 *               containers: [ // ListTaskContainerOverrides
 *                 { // TaskContainerOverrides
 *                   command: "<StringList>",
 *                   environment: "<EnvironmentVariables>",
 *                   name: "STRING_VALUE",
 *                   resourceRequirements: "<ResourceRequirements>",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *         instanceTypes: "<StringList>",
 *         eksPropertiesOverride: { // EksPropertiesOverride
 *           podProperties: { // EksPodPropertiesOverride
 *             containers: [ // EksContainerOverrideList
 *               { // EksContainerOverride
 *                 name: "STRING_VALUE",
 *                 image: "STRING_VALUE",
 *                 command: "<StringList>",
 *                 args: "<StringList>",
 *                 env: [ // EksContainerEnvironmentVariables
 *                   { // EksContainerEnvironmentVariable
 *                     name: "STRING_VALUE", // required
 *                     value: "STRING_VALUE",
 *                   },
 *                 ],
 *                 resources: { // EksContainerResourceRequirements
 *                   limits: { // EksLimits
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                   requests: { // EksRequests
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                 },
 *               },
 *             ],
 *             initContainers: [
 *               {
 *                 name: "STRING_VALUE",
 *                 image: "STRING_VALUE",
 *                 command: "<StringList>",
 *                 args: "<StringList>",
 *                 env: [
 *                   {
 *                     name: "STRING_VALUE", // required
 *                     value: "STRING_VALUE",
 *                   },
 *                 ],
 *                 resources: {
 *                   limits: {
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                   requests: {
 *                     "<keys>": "STRING_VALUE",
 *                   },
 *                 },
 *               },
 *             ],
 *             metadata: { // EksMetadata
 *               labels: { // EksLabelsMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               annotations: { // EksAnnotationsMap
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               namespace: "STRING_VALUE",
 *             },
 *           },
 *         },
 *         consumableResourcePropertiesOverride: { // ConsumableResourceProperties
 *           consumableResourceList: [ // ConsumableResourceList
 *             { // ConsumableResourceRequirement
 *               consumableResource: "STRING_VALUE",
 *               quantity: Number("long"),
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   retryStrategy: { // RetryStrategy
 *     attempts: Number("int"),
 *     evaluateOnExit: [ // EvaluateOnExitList
 *       { // EvaluateOnExit
 *         onStatusReason: "STRING_VALUE",
 *         onReason: "STRING_VALUE",
 *         onExitCode: "STRING_VALUE",
 *         action: "RETRY" || "EXIT", // required
 *       },
 *     ],
 *   },
 *   propagateTags: true || false,
 *   timeout: { // JobTimeout
 *     attemptDurationSeconds: Number("int"),
 *   },
 *   tags: { // TagrisTagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   eksPropertiesOverride: {
 *     podProperties: {
 *       containers: [
 *         {
 *           name: "STRING_VALUE",
 *           image: "STRING_VALUE",
 *           command: "<StringList>",
 *           args: "<StringList>",
 *           env: [
 *             {
 *               name: "STRING_VALUE", // required
 *               value: "STRING_VALUE",
 *             },
 *           ],
 *           resources: {
 *             limits: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             requests: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *         },
 *       ],
 *       initContainers: [
 *         {
 *           name: "STRING_VALUE",
 *           image: "STRING_VALUE",
 *           command: "<StringList>",
 *           args: "<StringList>",
 *           env: [
 *             {
 *               name: "STRING_VALUE", // required
 *               value: "STRING_VALUE",
 *             },
 *           ],
 *           resources: {
 *             limits: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *             requests: {
 *               "<keys>": "STRING_VALUE",
 *             },
 *           },
 *         },
 *       ],
 *       metadata: {
 *         labels: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         annotations: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         namespace: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   ecsPropertiesOverride: {
 *     taskProperties: [
 *       {
 *         containers: [
 *           {
 *             command: "<StringList>",
 *             environment: "<EnvironmentVariables>",
 *             name: "STRING_VALUE",
 *             resourceRequirements: "<ResourceRequirements>",
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   consumableResourcePropertiesOverride: {
 *     consumableResourceList: [
 *       {
 *         consumableResource: "STRING_VALUE",
 *         quantity: Number("long"),
 *       },
 *     ],
 *   },
 * };
 * const command = new SubmitJobCommand(input);
 * const response = await client.send(command);
 * // { // SubmitJobResponse
 * //   jobArn: "STRING_VALUE",
 * //   jobName: "STRING_VALUE", // required
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SubmitJobCommandInput - {@link SubmitJobCommandInput}
 * @returns {@link SubmitJobCommandOutput}
 * @see {@link SubmitJobCommandInput} for command's `input` shape.
 * @see {@link SubmitJobCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 *
 * @example To submit a job to a queue
 * ```javascript
 * // This example submits a simple container job called example to the HighPriority job queue.
 * const input = {
 *   jobDefinition: "sleep60",
 *   jobName: "example",
 *   jobQueue: "HighPriority"
 * };
 * const command = new SubmitJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobId: "876da822-4198-45f2-a252-6cea32512ea8",
 *   jobName: "example"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SubmitJobCommand extends $Command
  .classBuilder<
    SubmitJobCommandInput,
    SubmitJobCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBatchV20160810", "SubmitJob", {})
  .n("BatchClient", "SubmitJobCommand")
  .sc(SubmitJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubmitJobRequest;
      output: SubmitJobResponse;
    };
    sdk: {
      input: SubmitJobCommandInput;
      output: SubmitJobCommandOutput;
    };
  };
}
