// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListConfigurationPolicyAssociationsRequest,
  ListConfigurationPolicyAssociationsResponse,
} from "../models/models_3";
import { ListConfigurationPolicyAssociations } from "../schemas/schemas_41_Policy";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationPolicyAssociationsCommand}.
 */
export interface ListConfigurationPolicyAssociationsCommandInput extends ListConfigurationPolicyAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationPolicyAssociationsCommand}.
 */
export interface ListConfigurationPolicyAssociationsCommandOutput
  extends ListConfigurationPolicyAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Provides information about the associations for your configuration policies and self-managed behavior. Only the
 *             Security Hub delegated administrator can invoke this operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListConfigurationPolicyAssociationsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListConfigurationPolicyAssociationsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListConfigurationPolicyAssociationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: { // AssociationFilters
 *     ConfigurationPolicyId: "STRING_VALUE",
 *     AssociationType: "INHERITED" || "APPLIED",
 *     AssociationStatus: "PENDING" || "SUCCESS" || "FAILED",
 *   },
 * };
 * const command = new ListConfigurationPolicyAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationPolicyAssociationsResponse
 * //   ConfigurationPolicyAssociationSummaries: [ // ConfigurationPolicyAssociationSummaryList
 * //     { // ConfigurationPolicyAssociationSummary
 * //       ConfigurationPolicyId: "STRING_VALUE",
 * //       TargetId: "STRING_VALUE",
 * //       TargetType: "ACCOUNT" || "ORGANIZATIONAL_UNIT" || "ROOT",
 * //       AssociationType: "INHERITED" || "APPLIED",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       AssociationStatus: "PENDING" || "SUCCESS" || "FAILED",
 * //       AssociationStatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationPolicyAssociationsCommandInput - {@link ListConfigurationPolicyAssociationsCommandInput}
 * @returns {@link ListConfigurationPolicyAssociationsCommandOutput}
 * @see {@link ListConfigurationPolicyAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationPolicyAssociationsCommandOutput} for command's `response` shape.
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
 * @example To list configuration associations
 * ```javascript
 * // This operation lists all of the associations between targets and configuration policies or self-managed behavior. Targets can include accounts, organizational units, or the root.
 * const input = {
 *   Filters: {
 *     AssociationType: "APPLIED"
 *   },
 *   MaxResults: 1,
 *   NextToken: "U1FsdGVkX19nBV2zoh+Gou9NgnulLJHWpn9xnG4hqSOhvw3o2JqjI86QDxdf"
 * };
 * const command = new ListConfigurationPolicyAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConfigurationPolicyAssociationSummaries: [
 *     {
 *       AssociationStatus: "PENDING",
 *       AssociationType: "APPLIED",
 *       ConfigurationPolicyId: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       TargetId: "123456789012",
 *       TargetType: "ACCOUNT",
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
export class ListConfigurationPolicyAssociationsCommand extends $Command
  .classBuilder<
    ListConfigurationPolicyAssociationsCommandInput,
    ListConfigurationPolicyAssociationsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "ListConfigurationPolicyAssociations", {})
  .n("SecurityHubClient", "ListConfigurationPolicyAssociationsCommand")
  .sc(ListConfigurationPolicyAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationPolicyAssociationsRequest;
      output: ListConfigurationPolicyAssociationsResponse;
    };
    sdk: {
      input: ListConfigurationPolicyAssociationsCommandInput;
      output: ListConfigurationPolicyAssociationsCommandOutput;
    };
  };
}
