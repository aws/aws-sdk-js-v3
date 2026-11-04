// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAccountsForProvisionedPermissionSetRequest,
  ListAccountsForProvisionedPermissionSetResponse,
} from "../models/models_0";
import { ListAccountsForProvisionedPermissionSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccountsForProvisionedPermissionSetCommand}.
 */
export interface ListAccountsForProvisionedPermissionSetCommandInput extends ListAccountsForProvisionedPermissionSetRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountsForProvisionedPermissionSetCommand}.
 */
export interface ListAccountsForProvisionedPermissionSetCommandOutput extends ListAccountsForProvisionedPermissionSetResponse, __MetadataBearer {}

/**
 * Lists all the Amazon Web Services accounts where the specified permission set is provisioned.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListAccountsForProvisionedPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListAccountsForProvisionedPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListAccountsForProvisionedPermissionSetRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   ProvisioningStatus: "LATEST_PERMISSION_SET_PROVISIONED" || "LATEST_PERMISSION_SET_NOT_PROVISIONED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAccountsForProvisionedPermissionSetCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountsForProvisionedPermissionSetResponse
 * //   AccountIds: [ // AccountList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountsForProvisionedPermissionSetCommandInput - {@link ListAccountsForProvisionedPermissionSetCommandInput}
 * @returns {@link ListAccountsForProvisionedPermissionSetCommandOutput}
 * @see {@link ListAccountsForProvisionedPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ListAccountsForProvisionedPermissionSetCommandOutput} for command's `response` shape.
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
export class ListAccountsForProvisionedPermissionSetCommand extends command<ListAccountsForProvisionedPermissionSetCommandInput, ListAccountsForProvisionedPermissionSetCommandOutput>(
  _ep0,
  _mw0,
  "ListAccountsForProvisionedPermissionSet",
  ListAccountsForProvisionedPermissionSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountsForProvisionedPermissionSetRequest;
      output: ListAccountsForProvisionedPermissionSetResponse;
    };
    sdk: {
      input: ListAccountsForProvisionedPermissionSetCommandInput;
      output: ListAccountsForProvisionedPermissionSetCommandOutput;
    };
  };
}
