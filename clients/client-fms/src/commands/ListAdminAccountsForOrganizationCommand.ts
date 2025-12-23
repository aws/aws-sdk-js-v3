// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import type {
  ListAdminAccountsForOrganizationRequest,
  ListAdminAccountsForOrganizationResponse,
} from "../models/models_0";
import { ListAdminAccountsForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAdminAccountsForOrganizationCommand}.
 */
export interface ListAdminAccountsForOrganizationCommandInput extends ListAdminAccountsForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link ListAdminAccountsForOrganizationCommand}.
 */
export interface ListAdminAccountsForOrganizationCommandOutput extends ListAdminAccountsForOrganizationResponse, __MetadataBearer {}

/**
 * <p>Returns a <code>AdminAccounts</code> object that lists the Firewall Manager administrators within the organization that are onboarded to Firewall Manager by <a>AssociateAdminAccount</a>.</p>
 *          <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListAdminAccountsForOrganizationCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListAdminAccountsForOrganizationCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // ListAdminAccountsForOrganizationRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAdminAccountsForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // ListAdminAccountsForOrganizationResponse
 * //   AdminAccounts: [ // AdminAccountSummaryList
 * //     { // AdminAccountSummary
 * //       AdminAccount: "STRING_VALUE",
 * //       DefaultAdmin: true || false,
 * //       Status: "ONBOARDING" || "ONBOARDING_COMPLETE" || "OFFBOARDING" || "OFFBOARDING_COMPLETE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAdminAccountsForOrganizationCommandInput - {@link ListAdminAccountsForOrganizationCommandInput}
 * @returns {@link ListAdminAccountsForOrganizationCommandOutput}
 * @see {@link ListAdminAccountsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListAdminAccountsForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an Amazon Web Services account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 *
 * @public
 */
export class ListAdminAccountsForOrganizationCommand extends $Command
  .classBuilder<
    ListAdminAccountsForOrganizationCommandInput,
    ListAdminAccountsForOrganizationCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "ListAdminAccountsForOrganization", {})
  .n("FMSClient", "ListAdminAccountsForOrganizationCommand")
  .sc(ListAdminAccountsForOrganization$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAdminAccountsForOrganizationRequest;
      output: ListAdminAccountsForOrganizationResponse;
    };
    sdk: {
      input: ListAdminAccountsForOrganizationCommandInput;
      output: ListAdminAccountsForOrganizationCommandOutput;
    };
  };
}
