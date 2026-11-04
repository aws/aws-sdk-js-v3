// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIAMPolicyAssignmentsRequest, ListIAMPolicyAssignmentsResponse } from "../models/models_4";
import { ListIAMPolicyAssignments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIAMPolicyAssignmentsCommand}.
 */
export interface ListIAMPolicyAssignmentsCommandInput extends ListIAMPolicyAssignmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListIAMPolicyAssignmentsCommand}.
 */
export interface ListIAMPolicyAssignmentsCommandOutput extends ListIAMPolicyAssignmentsResponse, __MetadataBearer {}

/**
 * Lists the IAM policy assignments in the current Amazon Quick Sight account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIAMPolicyAssignmentsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIAMPolicyAssignmentsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListIAMPolicyAssignmentsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssignmentStatus: "ENABLED" || "DRAFT" || "DISABLED",
 *   Namespace: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListIAMPolicyAssignmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListIAMPolicyAssignmentsResponse
 * //   IAMPolicyAssignments: [ // IAMPolicyAssignmentSummaryList
 * //     { // IAMPolicyAssignmentSummary
 * //       AssignmentName: "STRING_VALUE",
 * //       AssignmentStatus: "ENABLED" || "DRAFT" || "DISABLED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListIAMPolicyAssignmentsCommandInput - {@link ListIAMPolicyAssignmentsCommandInput}
 * @returns {@link ListIAMPolicyAssignmentsCommandOutput}
 * @see {@link ListIAMPolicyAssignmentsCommandInput} for command's `input` shape.
 * @see {@link ListIAMPolicyAssignmentsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` value isn't valid.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
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
export class ListIAMPolicyAssignmentsCommand extends command<ListIAMPolicyAssignmentsCommandInput, ListIAMPolicyAssignmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListIAMPolicyAssignments",
  ListIAMPolicyAssignments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIAMPolicyAssignmentsRequest;
      output: ListIAMPolicyAssignmentsResponse;
    };
    sdk: {
      input: ListIAMPolicyAssignmentsCommandInput;
      output: ListIAMPolicyAssignmentsCommandOutput;
    };
  };
}
