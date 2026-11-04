// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListIAMPolicyAssignmentsForUserRequest,
  ListIAMPolicyAssignmentsForUserResponse,
} from "../models/models_4";
import { ListIAMPolicyAssignmentsForUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIAMPolicyAssignmentsForUserCommand}.
 */
export interface ListIAMPolicyAssignmentsForUserCommandInput extends ListIAMPolicyAssignmentsForUserRequest {}
/**
 * @public
 *
 * The output of {@link ListIAMPolicyAssignmentsForUserCommand}.
 */
export interface ListIAMPolicyAssignmentsForUserCommandOutput extends ListIAMPolicyAssignmentsForUserResponse, __MetadataBearer {}

/**
 * Lists all of the IAM policy assignments, including the Amazon Resource Names (ARNs), for the IAM policies assigned to the specified user and group, or groups that the user belongs to.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIAMPolicyAssignmentsForUserCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIAMPolicyAssignmentsForUserCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListIAMPolicyAssignmentsForUserRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new ListIAMPolicyAssignmentsForUserCommand(input);
 * const response = await client.send(command);
 * // { // ListIAMPolicyAssignmentsForUserResponse
 * //   ActiveAssignments: [ // ActiveIAMPolicyAssignmentList
 * //     { // ActiveIAMPolicyAssignment
 * //       AssignmentName: "STRING_VALUE",
 * //       PolicyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   RequestId: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListIAMPolicyAssignmentsForUserCommandInput - {@link ListIAMPolicyAssignmentsForUserCommandInput}
 * @returns {@link ListIAMPolicyAssignmentsForUserCommandOutput}
 * @see {@link ListIAMPolicyAssignmentsForUserCommandInput} for command's `input` shape.
 * @see {@link ListIAMPolicyAssignmentsForUserCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConcurrentUpdatingException} (server fault)
 *
 * A resource is already in a state that indicates an operation is happening that must complete before a new update can be applied.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource specified already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class ListIAMPolicyAssignmentsForUserCommand extends command<ListIAMPolicyAssignmentsForUserCommandInput, ListIAMPolicyAssignmentsForUserCommandOutput>(
  _ep0,
  _mw0,
  "ListIAMPolicyAssignmentsForUser",
  ListIAMPolicyAssignmentsForUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIAMPolicyAssignmentsForUserRequest;
      output: ListIAMPolicyAssignmentsForUserResponse;
    };
    sdk: {
      input: ListIAMPolicyAssignmentsForUserCommandInput;
      output: ListIAMPolicyAssignmentsForUserCommandOutput;
    };
  };
}
