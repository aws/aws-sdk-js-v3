// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteComputeNodeGroupRequest, DeleteComputeNodeGroupResponse } from "../models/models_0";
import { DeleteComputeNodeGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteComputeNodeGroupCommand}.
 */
export interface DeleteComputeNodeGroupCommandInput extends DeleteComputeNodeGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteComputeNodeGroupCommand}.
 */
export interface DeleteComputeNodeGroupCommandOutput extends DeleteComputeNodeGroupResponse, __MetadataBearer {}

/**
 * Deletes a compute node group. You must delete all queues associated with the compute node group first.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PCSClient, DeleteComputeNodeGroupCommand } from "@aws-sdk/client-pcs"; // ES Modules import
 * // const { PCSClient, DeleteComputeNodeGroupCommand } = require("@aws-sdk/client-pcs"); // CommonJS import
 * // import type { PCSClientConfig } from "@aws-sdk/client-pcs";
 * const config = {}; // type is PCSClientConfig
 * const client = new PCSClient(config);
 * const input = { // DeleteComputeNodeGroupRequest
 *   clusterIdentifier: "STRING_VALUE", // required
 *   computeNodeGroupIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteComputeNodeGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteComputeNodeGroupCommandInput - {@link DeleteComputeNodeGroupCommandInput}
 * @returns {@link DeleteComputeNodeGroupCommandOutput}
 * @see {@link DeleteComputeNodeGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteComputeNodeGroupCommandOutput} for command's `response` shape.
 * @see {@link PCSClientResolvedConfig | config} for PCSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the action.
 *
 * Examples
 *
 * - The launch template instance profile doesn't pass `iam:PassRole` verification.
 * - There is a mismatch between the account ID and cluster ID.
 * - The cluster ID doesn't exist.
 * - The EC2 instance isn't present.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than 1 operation on the same resource at the same time.
 *
 * Examples
 *
 * - A cluster with the same name already exists.
 * - A cluster isn't in `ACTIVE` status.
 * - A cluster to delete is in an unstable state. For example, because it still has `ACTIVE` node groups or queues.
 * - A queue already exists in a cluster.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * PCS can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found. The cluster, node group, or queue you're attempting to get, update, list, or delete doesn't exist.
 *
 * Examples
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a request rate quota. Check the resource's request rate quota and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid.
 *
 * Examples
 *
 * - Your request contains malformed JSON or unsupported characters.
 * - The scheduler version isn't supported.
 * - There are networking related errors, such as network validation failure.
 * - AMI type is `CUSTOM` and the launch template doesn't define the AMI ID, or the AMI type is AL2 and the launch template defines the AMI.
 *
 * @throws {@link PCSServiceException}
 *
 * Base exception class for all service exceptions from PCS service.
 *
 * @public
 */
export class DeleteComputeNodeGroupCommand extends command<DeleteComputeNodeGroupCommandInput, DeleteComputeNodeGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteComputeNodeGroup",
  DeleteComputeNodeGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteComputeNodeGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteComputeNodeGroupCommandInput;
      output: DeleteComputeNodeGroupCommandOutput;
    };
  };
}
