// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import type { ListPoliciesRequest, ListPoliciesResponse } from "../models/models_0";
import { ListPolicies } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandInput extends ListPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandOutput extends ListPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns an array of <code>PolicySummary</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListPoliciesCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListPoliciesCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // ListPoliciesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListPoliciesResponse
 * //   PolicyList: [ // PolicySummaryList
 * //     { // PolicySummary
 * //       PolicyArn: "STRING_VALUE",
 * //       PolicyId: "STRING_VALUE",
 * //       PolicyName: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       SecurityServiceType: "WAF" || "WAFV2" || "SHIELD_ADVANCED" || "SECURITY_GROUPS_COMMON" || "SECURITY_GROUPS_CONTENT_AUDIT" || "SECURITY_GROUPS_USAGE_AUDIT" || "NETWORK_FIREWALL" || "DNS_FIREWALL" || "THIRD_PARTY_FIREWALL" || "IMPORT_NETWORK_FIREWALL" || "NETWORK_ACL_COMMON",
 * //       RemediationEnabled: true || false,
 * //       DeleteUnusedFMManagedResources: true || false,
 * //       PolicyStatus: "ACTIVE" || "OUT_OF_ADMIN_SCOPE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPoliciesCommandInput - {@link ListPoliciesCommandInput}
 * @returns {@link ListPoliciesCommandOutput}
 * @see {@link ListPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesCommandOutput} for command's `response` shape.
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
export class ListPoliciesCommand extends $Command
  .classBuilder<
    ListPoliciesCommandInput,
    ListPoliciesCommandOutput,
    FMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSFMS_20180101", "ListPolicies", {})
  .n("FMSClient", "ListPoliciesCommand")
  .sc(ListPolicies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPoliciesRequest;
      output: ListPoliciesResponse;
    };
    sdk: {
      input: ListPoliciesCommandInput;
      output: ListPoliciesCommandOutput;
    };
  };
}
