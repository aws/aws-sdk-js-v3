// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListQueuesRequest, ListQueuesResponse } from "../models/models_0";
import { PCSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PCSClient";
import { de_ListQueuesCommand, se_ListQueuesCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQueuesCommand}.
 */
export interface ListQueuesCommandInput extends ListQueuesRequest {}
/**
 * @public
 *
 * The output of {@link ListQueuesCommand}.
 */
export interface ListQueuesCommandOutput extends ListQueuesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all queues associated with a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PCSClient, ListQueuesCommand } from "@aws-sdk/client-pcs"; // ES Modules import
 * // const { PCSClient, ListQueuesCommand } = require("@aws-sdk/client-pcs"); // CommonJS import
 * const client = new PCSClient(config);
 * const input = { // ListQueuesRequest
 *   clusterIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListQueuesCommand(input);
 * const response = await client.send(command);
 * // { // ListQueuesResponse
 * //   queues: [ // QueueList // required
 * //     { // QueueSummary
 * //       name: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       clusterId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"), // required
 * //       status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED" || "UPDATE_FAILED", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueuesCommandInput - {@link ListQueuesCommandInput}
 * @returns {@link ListQueuesCommandOutput}
 * @see {@link ListQueuesCommandInput} for command's `input` shape.
 * @see {@link ListQueuesCommandOutput} for command's `response` shape.
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
export class ListQueuesCommand extends $Command
  .classBuilder<
    ListQueuesCommandInput,
    ListQueuesCommandOutput,
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
  .s("AWSParallelComputingService", "ListQueues", {})
  .n("PCSClient", "ListQueuesCommand")
  .f(void 0, void 0)
  .ser(se_ListQueuesCommand)
  .de(de_ListQueuesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueuesRequest;
      output: ListQueuesResponse;
    };
    sdk: {
      input: ListQueuesCommandInput;
      output: ListQueuesCommandOutput;
    };
  };
}
