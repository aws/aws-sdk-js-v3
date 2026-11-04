// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListManagedPoliciesInPermissionSetRequest,
  ListManagedPoliciesInPermissionSetResponse,
} from "../models/models_0";
import { ListManagedPoliciesInPermissionSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListManagedPoliciesInPermissionSetCommand}.
 */
export interface ListManagedPoliciesInPermissionSetCommandInput extends ListManagedPoliciesInPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedPoliciesInPermissionSetCommand}.
 */
export interface ListManagedPoliciesInPermissionSetCommandOutput extends ListManagedPoliciesInPermissionSetResponse, __MetadataBearer {}

/**
 * Lists the Amazon Web Services managed policy that is attached to a specified permission set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListManagedPoliciesInPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListManagedPoliciesInPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListManagedPoliciesInPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedPoliciesInPermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedPoliciesInPermissionSetResponse
 * //   AttachedManagedPolicies: [ // AttachedManagedPolicyList
 * //     { // AttachedManagedPolicy
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedPoliciesInPermissionSetCommandInput - {@link ListManagedPoliciesInPermissionSetCommandInput}
 * @returns {@link ListManagedPoliciesInPermissionSetCommandOutput}
 * @see {@link ListManagedPoliciesInPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ListManagedPoliciesInPermissionSetCommandOutput} for command's `response` shape.
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
export class ListManagedPoliciesInPermissionSetCommand extends command<ListManagedPoliciesInPermissionSetCommandInput, ListManagedPoliciesInPermissionSetCommandOutput>(
  _ep0,
  _mw0,
  "ListManagedPoliciesInPermissionSet",
  ListManagedPoliciesInPermissionSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedPoliciesInPermissionSetRequest;
      output: ListManagedPoliciesInPermissionSetResponse;
    };
    sdk: {
      input: ListManagedPoliciesInPermissionSetCommandInput;
      output: ListManagedPoliciesInPermissionSetCommandOutput;
    };
  };
}
