// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListAccountsForProvisionedPermissionSetRequest,
  ListAccountsForProvisionedPermissionSetResponse,
} from "../models/models_0";
import { ListAccountsForProvisionedPermissionSet$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all the Amazon Web Services accounts where the specified permission set is provisioned.</p>
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
export class ListAccountsForProvisionedPermissionSetCommand extends $Command
  .classBuilder<
    ListAccountsForProvisionedPermissionSetCommandInput,
    ListAccountsForProvisionedPermissionSetCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "ListAccountsForProvisionedPermissionSet", {})
  .n("SSOAdminClient", "ListAccountsForProvisionedPermissionSetCommand")
  .sc(ListAccountsForProvisionedPermissionSet$)
  .build() {
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
