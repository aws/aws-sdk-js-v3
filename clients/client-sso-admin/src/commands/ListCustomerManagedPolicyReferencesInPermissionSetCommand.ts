// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  ListCustomerManagedPolicyReferencesInPermissionSetResponse,
} from "../models/models_0";
import { ListCustomerManagedPolicyReferencesInPermissionSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCustomerManagedPolicyReferencesInPermissionSetCommand}.
 */
export interface ListCustomerManagedPolicyReferencesInPermissionSetCommandInput extends ListCustomerManagedPolicyReferencesInPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomerManagedPolicyReferencesInPermissionSetCommand}.
 */
export interface ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput extends ListCustomerManagedPolicyReferencesInPermissionSetResponse, __MetadataBearer {}

/**
 * Lists all customer managed policies attached to a specified PermissionSet.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListCustomerManagedPolicyReferencesInPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListCustomerManagedPolicyReferencesInPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListCustomerManagedPolicyReferencesInPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomerManagedPolicyReferencesInPermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomerManagedPolicyReferencesInPermissionSetResponse
 * //   CustomerManagedPolicyReferences: [ // CustomerManagedPolicyReferenceList
 * //     { // CustomerManagedPolicyReference
 * //       Name: "STRING_VALUE", // required
 * //       Path: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomerManagedPolicyReferencesInPermissionSetCommandInput - {@link ListCustomerManagedPolicyReferencesInPermissionSetCommandInput}
 * @returns {@link ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput}
 * @see {@link ListCustomerManagedPolicyReferencesInPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput} for command's `response` shape.
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
export class ListCustomerManagedPolicyReferencesInPermissionSetCommand extends command<ListCustomerManagedPolicyReferencesInPermissionSetCommandInput, ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomerManagedPolicyReferencesInPermissionSet",
  ListCustomerManagedPolicyReferencesInPermissionSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomerManagedPolicyReferencesInPermissionSetRequest;
      output: ListCustomerManagedPolicyReferencesInPermissionSetResponse;
    };
    sdk: {
      input: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput;
      output: ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput;
    };
  };
}
