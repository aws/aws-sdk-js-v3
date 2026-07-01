// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccountAssignmentsRequest, ListAccountAssignmentsResponse } from "../models/models_0";
import { ListAccountAssignments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccountAssignmentsCommand}.
 */
export interface ListAccountAssignmentsCommandInput extends ListAccountAssignmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountAssignmentsCommand}.
 */
export interface ListAccountAssignmentsCommandOutput extends ListAccountAssignmentsResponse, __MetadataBearer {}

/**
 * <p>Lists the assignee of the specified Amazon Web Services account with the specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountAssignmentsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListAccountAssignmentsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListAccountAssignmentsRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAccountAssignmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountAssignmentsResponse
 * //   AccountAssignments: [ // AccountAssignmentList
 * //     { // AccountAssignment
 * //       AccountId: "STRING_VALUE",
 * //       PermissionSetArn: "STRING_VALUE",
 * //       PrincipalType: "USER" || "GROUP",
 * //       PrincipalId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountAssignmentsCommandInput - {@link ListAccountAssignmentsCommandInput}
 * @returns {@link ListAccountAssignmentsCommandOutput}
 * @see {@link ListAccountAssignmentsCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssignmentsCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class ListAccountAssignmentsCommand extends command<ListAccountAssignmentsCommandInput, ListAccountAssignmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListAccountAssignments",
  ListAccountAssignments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountAssignmentsRequest;
      output: ListAccountAssignmentsResponse;
    };
    sdk: {
      input: ListAccountAssignmentsCommandInput;
      output: ListAccountAssignmentsCommandOutput;
    };
  };
}
