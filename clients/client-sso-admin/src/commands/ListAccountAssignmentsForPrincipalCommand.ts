// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAccountAssignmentsForPrincipalRequest,
  ListAccountAssignmentsForPrincipalResponse,
} from "../models/models_0";
import { ListAccountAssignmentsForPrincipal$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccountAssignmentsForPrincipalCommand}.
 */
export interface ListAccountAssignmentsForPrincipalCommandInput extends ListAccountAssignmentsForPrincipalRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountAssignmentsForPrincipalCommand}.
 */
export interface ListAccountAssignmentsForPrincipalCommandOutput extends ListAccountAssignmentsForPrincipalResponse, __MetadataBearer {}

/**
 * Retrieves a list of the IAM Identity Center associated Amazon Web Services accounts that the principal has access to. This action must be called from the management account containing your organization instance of IAM Identity Center. This action is not valid for account instances of IAM Identity Center.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountAssignmentsForPrincipalCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListAccountAssignmentsForPrincipalCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListAccountAssignmentsForPrincipalRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PrincipalId: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP", // required
 *   Filter: { // ListAccountAssignmentsFilter
 *     AccountId: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAccountAssignmentsForPrincipalCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountAssignmentsForPrincipalResponse
 * //   AccountAssignments: [ // AccountAssignmentListForPrincipal
 * //     { // AccountAssignmentForPrincipal
 * //       AccountId: "STRING_VALUE",
 * //       PermissionSetArn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       PrincipalType: "USER" || "GROUP",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountAssignmentsForPrincipalCommandInput - {@link ListAccountAssignmentsForPrincipalCommandInput}
 * @returns {@link ListAccountAssignmentsForPrincipalCommandOutput}
 * @see {@link ListAccountAssignmentsForPrincipalCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssignmentsForPrincipalCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class ListAccountAssignmentsForPrincipalCommand extends command<ListAccountAssignmentsForPrincipalCommandInput, ListAccountAssignmentsForPrincipalCommandOutput>(
  _ep0,
  _mw0,
  "ListAccountAssignmentsForPrincipal",
  ListAccountAssignmentsForPrincipal$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountAssignmentsForPrincipalRequest;
      output: ListAccountAssignmentsForPrincipalResponse;
    };
    sdk: {
      input: ListAccountAssignmentsForPrincipalCommandInput;
      output: ListAccountAssignmentsForPrincipalCommandOutput;
    };
  };
}
