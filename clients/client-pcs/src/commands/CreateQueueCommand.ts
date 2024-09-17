// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateQueueRequest, CreateQueueResponse } from "../models/models_0";
import { PCSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PCSClient";
import { de_CreateQueueCommand, se_CreateQueueCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandInput extends CreateQueueRequest {}
/**
 * @public
 *
 * The output of {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandOutput extends CreateQueueResponse, __MetadataBearer {}

/**
 * <p>Creates a job queue. You must associate 1 or more compute node groups with the queue.
 *          You can associate 1 compute node group with multiple queues.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PCSClient, CreateQueueCommand } from "@aws-sdk/client-pcs"; // ES Modules import
 * // const { PCSClient, CreateQueueCommand } = require("@aws-sdk/client-pcs"); // CommonJS import
 * const client = new PCSClient(config);
 * const input = { // CreateQueueRequest
 *   clusterIdentifier: "STRING_VALUE", // required
 *   queueName: "STRING_VALUE", // required
 *   computeNodeGroupConfigurations: [ // ComputeNodeGroupConfigurationList
 *     { // ComputeNodeGroupConfiguration
 *       computeNodeGroupId: "STRING_VALUE",
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQueueCommand(input);
 * const response = await client.send(command);
 * // { // CreateQueueResponse
 * //   queue: { // Queue
 * //     name: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     clusterId: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     modifiedAt: new Date("TIMESTAMP"), // required
 * //     status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED" || "UPDATE_FAILED", // required
 * //     computeNodeGroupConfigurations: [ // ComputeNodeGroupConfigurationList // required
 * //       { // ComputeNodeGroupConfiguration
 * //         computeNodeGroupId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     errorInfo: [ // ErrorInfoList
 * //       { // ErrorInfo
 * //         code: "STRING_VALUE",
 * //         message: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateQueueCommandInput - {@link CreateQueueCommandInput}
 * @returns {@link CreateQueueCommandOutput}
 * @see {@link CreateQueueCommandInput} for command's `input` shape.
 * @see {@link CreateQueueCommandOutput} for command's `response` shape.
 * @see {@link PCSClientResolvedConfig | config} for PCSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *          <p>
 *             <u>Examples</u>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The launch template instance profile doesn't pass <code>iam:PassRole</code>
 *                verification.</p>
 *             </li>
 *             <li>
 *                <p>There is a mismatch between the account ID and cluster ID.</p>
 *             </li>
 *             <li>
 *                <p>The cluster ID doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>The EC2 instance isn't present.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *          than 1 operation on the same resource at the same time.</p>
 *          <p>
 *             <u>Examples</u>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>A cluster with the same name already exists.</p>
 *             </li>
 *             <li>
 *                <p>A cluster isn't in <code>ACTIVE</code> status.</p>
 *             </li>
 *             <li>
 *                <p>A cluster to delete is in an unstable state. For example, because it still has
 *                   <code>ACTIVE</code> node groups or queues.</p>
 *             </li>
 *             <li>
 *                <p>A queue already exists in a cluster.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Web Services PCS can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found. The cluster, node group, or queue you're
 *          attempting to get, update, list, or delete doesn't exist.</p>
 *          <p>
 *             <u>Examples</u>
 *          </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *          maximum number of service resources or operations for your Amazon Web Services account. To learn how to
 *          increase your service quota, see <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/request-quota-increase.html">Requesting a quota
 *             increase</a> in the <i>Service Quotas User Guide</i>
 *          </p>
 *          <p>
 *             <u>Examples</u>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>The max number of clusters or queues has been reached for the account.</p>
 *             </li>
 *             <li>
 *                <p>The max number of compute node groups has been reached for the associated
 *                cluster.</p>
 *             </li>
 *             <li>
 *                <p>The total of <code>maxInstances</code> across all compute node groups has been
 *                reached for associated cluster.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. Check the resource's request rate quota and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid.</p>
 *          <p>
 *             <u>Examples</u>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Your request contains malformed JSON or unsupported characters.</p>
 *             </li>
 *             <li>
 *                <p>The scheduler version isn't supported.</p>
 *             </li>
 *             <li>
 *                <p>There are networking related errors, such as network validation failure.</p>
 *             </li>
 *             <li>
 *                <p>AMI type is <code>CUSTOM</code> and the launch template doesn't define the AMI ID,
 *             or the AMI type is AL2 and the launch template defines the AMI.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link PCSServiceException}
 * <p>Base exception class for all service exceptions from PCS service.</p>
 *
 * @public
 */
export class CreateQueueCommand extends $Command
  .classBuilder<
    CreateQueueCommandInput,
    CreateQueueCommandOutput,
    PCSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PCSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSParallelComputingService", "CreateQueue", {})
  .n("PCSClient", "CreateQueueCommand")
  .f(void 0, void 0)
  .ser(se_CreateQueueCommand)
  .de(de_CreateQueueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQueueRequest;
      output: CreateQueueResponse;
    };
    sdk: {
      input: CreateQueueCommandInput;
      output: CreateQueueCommandOutput;
    };
  };
}
