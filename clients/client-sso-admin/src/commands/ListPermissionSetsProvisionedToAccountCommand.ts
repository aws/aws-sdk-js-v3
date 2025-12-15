// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListPermissionSetsProvisionedToAccountRequest,
  ListPermissionSetsProvisionedToAccountResponse,
} from "../models/models_0";
import { ListPermissionSetsProvisionedToAccount$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPermissionSetsProvisionedToAccountCommand}.
 */
export interface ListPermissionSetsProvisionedToAccountCommandInput
  extends ListPermissionSetsProvisionedToAccountRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionSetsProvisionedToAccountCommand}.
 */
export interface ListPermissionSetsProvisionedToAccountCommandOutput
  extends ListPermissionSetsProvisionedToAccountResponse,
    __MetadataBearer {}

/**
 * <p>Lists all the permission sets that are provisioned to a specified Amazon Web Services account.</p>
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
export class ListPermissionSetsProvisionedToAccountCommand extends $Command
  .classBuilder<
    ListPermissionSetsProvisionedToAccountCommandInput,
    ListPermissionSetsProvisionedToAccountCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "ListPermissionSetsProvisionedToAccount", {})
  .n("SSOAdminClient", "ListPermissionSetsProvisionedToAccountCommand")
  .sc(ListPermissionSetsProvisionedToAccount$)
  .build() {
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
