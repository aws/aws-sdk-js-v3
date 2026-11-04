// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListComputeNodeGroupsRequest, ListComputeNodeGroupsResponse } from "../models/models_0";
import { ListComputeNodeGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListComputeNodeGroupsCommand}.
 */
export interface ListComputeNodeGroupsCommandInput extends ListComputeNodeGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListComputeNodeGroupsCommand}.
 */
export interface ListComputeNodeGroupsCommandOutput extends ListComputeNodeGroupsResponse, __MetadataBearer {}

/**
 * Returns a list of all compute node groups associated with a cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PCSClient, ListComputeNodeGroupsCommand } from "@aws-sdk/client-pcs"; // ES Modules import
 * // const { PCSClient, ListComputeNodeGroupsCommand } = require("@aws-sdk/client-pcs"); // CommonJS import
 * // import type { PCSClientConfig } from "@aws-sdk/client-pcs";
 * const config = {}; // type is PCSClientConfig
 * const client = new PCSClient(config);
 * const input = { // ListComputeNodeGroupsRequest
 *   clusterIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListComputeNodeGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListComputeNodeGroupsResponse
 * //   computeNodeGroups: [ // ComputeNodeGroupList // required
 * //     { // ComputeNodeGroupSummary
 * //       name: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       clusterId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"), // required
 * //       status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED" || "UPDATE_FAILED" || "DELETED" || "SUSPENDING" || "SUSPENDED" || "RESUMING", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComputeNodeGroupsCommandInput - {@link ListComputeNodeGroupsCommandInput}
 * @returns {@link ListComputeNodeGroupsCommandOutput}
 * @see {@link ListComputeNodeGroupsCommandInput} for command's `input` shape.
 * @see {@link ListComputeNodeGroupsCommandOutput} for command's `response` shape.
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
export class ListComputeNodeGroupsCommand extends command<ListComputeNodeGroupsCommandInput, ListComputeNodeGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListComputeNodeGroups",
  ListComputeNodeGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComputeNodeGroupsRequest;
      output: ListComputeNodeGroupsResponse;
    };
    sdk: {
      input: ListComputeNodeGroupsCommandInput;
      output: ListComputeNodeGroupsCommandOutput;
    };
  };
}
