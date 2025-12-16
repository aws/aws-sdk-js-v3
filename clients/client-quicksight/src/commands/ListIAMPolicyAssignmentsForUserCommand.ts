// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListIAMPolicyAssignmentsForUserRequest,
  ListIAMPolicyAssignmentsForUserResponse,
} from "../models/models_4";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListIAMPolicyAssignmentsForUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListIAMPolicyAssignmentsForUserCommandOutput
  extends ListIAMPolicyAssignmentsForUserResponse,
    __MetadataBearer {}

/**
 * <p>Lists all of
 * 			the IAM policy assignments, including the Amazon
 * 			Resource Names
 * 			(ARNs),
 * 			for the IAM policies assigned to the specified user and
 * 			group,
 * 			or groups that the user belongs to.</p>
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
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConcurrentUpdatingException} (server fault)
 *  <p>A resource is already in a state that indicates an operation is happening that must complete
 * 			before a new update can be applied.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListIAMPolicyAssignmentsForUserCommand extends $Command
  .classBuilder<
    ListIAMPolicyAssignmentsForUserCommandInput,
    ListIAMPolicyAssignmentsForUserCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListIAMPolicyAssignmentsForUser", {})
  .n("QuickSightClient", "ListIAMPolicyAssignmentsForUserCommand")
  .sc(ListIAMPolicyAssignmentsForUser$)
  .build() {
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
