// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeOrganizationConfigRuleStatusesRequest,
  DescribeOrganizationConfigRuleStatusesResponse,
} from "../models/models_0";
import { DescribeOrganizationConfigRuleStatuses } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationConfigRuleStatusesCommand}.
 */
export interface DescribeOrganizationConfigRuleStatusesCommandInput
  extends DescribeOrganizationConfigRuleStatusesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationConfigRuleStatusesCommand}.
 */
export interface DescribeOrganizationConfigRuleStatusesCommandOutput
  extends DescribeOrganizationConfigRuleStatusesResponse,
    __MetadataBearer {}

/**
 * <p>Provides organization Config rule deployment status for an organization.</p>
 *          <note>
 *             <p>The status is not considered successful until organization Config rule is successfully deployed in all the member
 * 			accounts with an exception of excluded accounts.</p>
 *             <p>When you specify the limit and the next token, you receive a paginated response.
 * 			Limit and next token are not applicable if you specify organization Config rule names.
 * 			It is only applicable, when you request all the organization Config rules.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConfigRuleStatusesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConfigRuleStatusesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeOrganizationConfigRuleStatusesRequest
 *   OrganizationConfigRuleNames: [ // OrganizationConfigRuleNames
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeOrganizationConfigRuleStatusesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationConfigRuleStatusesResponse
 * //   OrganizationConfigRuleStatuses: [ // OrganizationConfigRuleStatuses
 * //     { // OrganizationConfigRuleStatus
 * //       OrganizationConfigRuleName: "STRING_VALUE", // required
 * //       OrganizationRuleStatus: "CREATE_SUCCESSFUL" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "DELETE_SUCCESSFUL" || "DELETE_FAILED" || "DELETE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED", // required
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationConfigRuleStatusesCommandInput - {@link DescribeOrganizationConfigRuleStatusesCommandInput}
 * @returns {@link DescribeOrganizationConfigRuleStatusesCommandOutput}
 * @see {@link DescribeOrganizationConfigRuleStatusesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigRuleStatusesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link NoSuchOrganizationConfigRuleException} (client fault)
 *  <p>The Config rule in the request is not valid. Verify that the rule is an organization Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link OrganizationAccessDeniedException} (client fault)
 *  <p>For <code>PutConfigurationAggregator</code> API, you can see this exception for the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>No permission to call <code>EnableAWSServiceAccess</code> API</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>You are not a registered delegated administrator for Config with permissions to call <code>ListDelegatedAdministrators</code> API.
 * 			Ensure that the management account registers delagated administrator for Config service principal name before the delegated administrator creates an aggregator.</p>
 *             </li>
 *          </ul>
 *          <p>For all <code>OrganizationConfigRule</code> and <code>OrganizationConformancePack</code> APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DescribeOrganizationConfigRuleStatusesCommand extends $Command
  .classBuilder<
    DescribeOrganizationConfigRuleStatusesCommandInput,
    DescribeOrganizationConfigRuleStatusesCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DescribeOrganizationConfigRuleStatuses", {})
  .n("ConfigServiceClient", "DescribeOrganizationConfigRuleStatusesCommand")
  .sc(DescribeOrganizationConfigRuleStatuses)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrganizationConfigRuleStatusesRequest;
      output: DescribeOrganizationConfigRuleStatusesResponse;
    };
    sdk: {
      input: DescribeOrganizationConfigRuleStatusesCommandInput;
      output: DescribeOrganizationConfigRuleStatusesCommandOutput;
    };
  };
}
