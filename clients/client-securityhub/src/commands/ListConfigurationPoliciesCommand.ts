// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListConfigurationPoliciesRequest, ListConfigurationPoliciesResponse } from "../models/models_3";
import { de_ListConfigurationPoliciesCommand, se_ListConfigurationPoliciesCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationPoliciesCommand}.
 */
export interface ListConfigurationPoliciesCommandInput extends ListConfigurationPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationPoliciesCommand}.
 */
export interface ListConfigurationPoliciesCommandOutput extends ListConfigurationPoliciesResponse, __MetadataBearer {}

/**
 * <p>
 *             Lists the configuration policies that the Security Hub delegated administrator has created for your
 *             organization. Only the delegated administrator can invoke this operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListConfigurationPoliciesCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListConfigurationPoliciesCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListConfigurationPoliciesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListConfigurationPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationPoliciesResponse
 * //   ConfigurationPolicySummaries: [ // ConfigurationPolicySummaryList
 * //     { // ConfigurationPolicySummary
 * //       Arn: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       ServiceEnabled: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationPoliciesCommandInput - {@link ListConfigurationPoliciesCommandInput}
 * @returns {@link ListConfigurationPoliciesCommandOutput}
 * @see {@link ListConfigurationPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationPoliciesCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To view a list of configuration policies
 * ```javascript
 * // This operation provides a list of your configuration policies, including metadata for each policy.
 * const input = {
 *   MaxResults: 1,
 *   NextToken: "U1FsdGVkX19nBV2zoh+Gou9NgnulLJHWpn9xnG4hqSOhvw3o2JqjI86QDxdf"
 * };
 * const command = new ListConfigurationPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConfigurationPolicySummaries: [
 *     {
 *       Arn: "arn:aws:securityhub:us-east-1:123456789012:configuration-policy/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       Description: "Configuration policy for testing FSBP and CIS",
 *       Id: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       Name: "TestConfigurationPolicy",
 *       ServiceEnabled: true,
 *       UpdatedAt: "2023-01-11T06:17:17.154Z"
 *     }
 *   ],
 *   NextToken: "U1FsdGVkX19nBV2zoh+Gou9NgnulLJHWpn9xnG4hqSOfvw3o2JqjI86QDxef"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListConfigurationPoliciesCommand extends $Command
  .classBuilder<
    ListConfigurationPoliciesCommandInput,
    ListConfigurationPoliciesCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "ListConfigurationPolicies", {})
  .n("SecurityHubClient", "ListConfigurationPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListConfigurationPoliciesCommand)
  .de(de_ListConfigurationPoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationPoliciesRequest;
      output: ListConfigurationPoliciesResponse;
    };
    sdk: {
      input: ListConfigurationPoliciesCommandInput;
      output: ListConfigurationPoliciesCommandOutput;
    };
  };
}
