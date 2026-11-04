// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListPermissionSetsProvisionedToAccountRequest,
  ListPermissionSetsProvisionedToAccountResponse,
} from "../models/models_0";
import { ListPermissionSetsProvisionedToAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPermissionSetsProvisionedToAccountCommand}.
 */
export interface ListPermissionSetsProvisionedToAccountCommandInput extends ListPermissionSetsProvisionedToAccountRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionSetsProvisionedToAccountCommand}.
 */
export interface ListPermissionSetsProvisionedToAccountCommandOutput extends ListPermissionSetsProvisionedToAccountResponse, __MetadataBearer {}

/**
 * Lists all the permission sets that are provisioned to a specified Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListPermissionSetsProvisionedToAccountCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListPermissionSetsProvisionedToAccountCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListPermissionSetsProvisionedToAccountRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE", // required
 *   ProvisioningStatus: "LATEST_PERMISSION_SET_PROVISIONED" || "LATEST_PERMISSION_SET_NOT_PROVISIONED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPermissionSetsProvisionedToAccountCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionSetsProvisionedToAccountResponse
 * //   NextToken: "STRING_VALUE",
 * //   PermissionSets: [ // PermissionSetList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPermissionSetsProvisionedToAccountCommandInput - {@link ListPermissionSetsProvisionedToAccountCommandInput}
 * @returns {@link ListPermissionSetsProvisionedToAccountCommandOutput}
 * @see {@link ListPermissionSetsProvisionedToAccountCommandInput} for command's `input` shape.
 * @see {@link ListPermissionSetsProvisionedToAccountCommandOutput} for command's `response` shape.
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
export class ListPermissionSetsProvisionedToAccountCommand extends command<ListPermissionSetsProvisionedToAccountCommandInput, ListPermissionSetsProvisionedToAccountCommandOutput>(
  _ep0,
  _mw0,
  "ListPermissionSetsProvisionedToAccount",
  ListPermissionSetsProvisionedToAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPermissionSetsProvisionedToAccountRequest;
      output: ListPermissionSetsProvisionedToAccountResponse;
    };
    sdk: {
      input: ListPermissionSetsProvisionedToAccountCommandInput;
      output: ListPermissionSetsProvisionedToAccountCommandOutput;
    };
  };
}
