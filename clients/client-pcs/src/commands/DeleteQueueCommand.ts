// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteQueueRequest, DeleteQueueResponse } from "../models/models_0";
import { PCSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PCSClient";
import { de_DeleteQueueCommand, se_DeleteQueueCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteQueueCommand}.
 */
export interface DeleteQueueCommandInput extends DeleteQueueRequest {}
/**
 * @public
 *
 * The output of {@link DeleteQueueCommand}.
 */
export interface DeleteQueueCommandOutput extends DeleteQueueResponse, __MetadataBearer {}

/**
 * <p>Deletes a job queue. If the compute node group associated with this queue isn't
 *          associated with any other queues, Amazon Web Services PCS terminates all the compute nodes for this
 *          queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PCSClient, DeleteQueueCommand } from "@aws-sdk/client-pcs"; // ES Modules import
 * // const { PCSClient, DeleteQueueCommand } = require("@aws-sdk/client-pcs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PCSClient(config);
 * const input = { // DeleteQueueRequest
 *   clusterIdentifier: "STRING_VALUE", // required
 *   queueIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteQueueCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQueueCommandInput - {@link DeleteQueueCommandInput}
 * @returns {@link DeleteQueueCommandOutput}
 * @see {@link DeleteQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteQueueCommandOutput} for command's `response` shape.
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
export class DeleteQueueCommand extends $Command
  .classBuilder<
    DeleteQueueCommandInput,
    DeleteQueueCommandOutput,
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
  .s("AWSParallelComputingService", "DeleteQueue", {})
  .n("PCSClient", "DeleteQueueCommand")
  .f(void 0, void 0)
  .ser(se_DeleteQueueCommand)
  .de(de_DeleteQueueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQueueRequest;
      output: {};
    };
    sdk: {
      input: DeleteQueueCommandInput;
      output: DeleteQueueCommandOutput;
    };
  };
}
