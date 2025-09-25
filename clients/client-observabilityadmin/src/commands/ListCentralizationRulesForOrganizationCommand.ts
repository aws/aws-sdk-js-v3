// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCentralizationRulesForOrganizationInput,
  ListCentralizationRulesForOrganizationOutput,
} from "../models/models_0";
import {
  ObservabilityAdminClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ObservabilityAdminClient";
import { ListCentralizationRulesForOrganization } from "../schemas/schemas_6_Rule";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCentralizationRulesForOrganizationCommand}.
 */
export interface ListCentralizationRulesForOrganizationCommandInput
  extends ListCentralizationRulesForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link ListCentralizationRulesForOrganizationCommand}.
 */
export interface ListCentralizationRulesForOrganizationCommandOutput
  extends ListCentralizationRulesForOrganizationOutput,
    __MetadataBearer {}

/**
 * <p>Lists all centralization rules in your organization. This operation can only be called by the organization's management account or a delegated administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ObservabilityAdminClient, ListCentralizationRulesForOrganizationCommand } from "@aws-sdk/client-observabilityadmin"; // ES Modules import
 * // const { ObservabilityAdminClient, ListCentralizationRulesForOrganizationCommand } = require("@aws-sdk/client-observabilityadmin"); // CommonJS import
 * // import type { ObservabilityAdminClientConfig } from "@aws-sdk/client-observabilityadmin";
 * const config = {}; // type is ObservabilityAdminClientConfig
 * const client = new ObservabilityAdminClient(config);
 * const input = { // ListCentralizationRulesForOrganizationInput
 *   RuleNamePrefix: "STRING_VALUE",
 *   AllRegions: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCentralizationRulesForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // ListCentralizationRulesForOrganizationOutput
 * //   CentralizationRuleSummaries: [ // CentralizationRuleSummaries
 * //     { // CentralizationRuleSummary
 * //       RuleName: "STRING_VALUE",
 * //       RuleArn: "STRING_VALUE",
 * //       CreatorAccountId: "STRING_VALUE",
 * //       CreatedTimeStamp: Number("long"),
 * //       CreatedRegion: "STRING_VALUE",
 * //       LastUpdateTimeStamp: Number("long"),
 * //       RuleHealth: "Healthy" || "Unhealthy" || "Provisioning",
 * //       FailureReason: "TRUSTED_ACCESS_NOT_ENABLED" || "DESTINATION_ACCOUNT_NOT_IN_ORGANIZATION" || "INTERNAL_SERVER_ERROR",
 * //       DestinationAccountId: "STRING_VALUE",
 * //       DestinationRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCentralizationRulesForOrganizationCommandInput - {@link ListCentralizationRulesForOrganizationCommandInput}
 * @returns {@link ListCentralizationRulesForOrganizationCommandOutput}
 * @see {@link ListCentralizationRulesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListCentralizationRulesForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link ObservabilityAdminClientResolvedConfig | config} for ObservabilityAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *       Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for Amazon Web Services resources</a> in the IAM user guide.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *       Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *     </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>
 *       The request throughput limit was exceeded.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *      Indicates input validation failed. Check your request parameters and retry the request.
 *     </p>
 *
 * @throws {@link ObservabilityAdminServiceException}
 * <p>Base exception class for all service exceptions from ObservabilityAdmin service.</p>
 *
 *
 * @public
 */
export class ListCentralizationRulesForOrganizationCommand extends $Command
  .classBuilder<
    ListCentralizationRulesForOrganizationCommandInput,
    ListCentralizationRulesForOrganizationCommandOutput,
    ObservabilityAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ObservabilityAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ObservabilityAdmin", "ListCentralizationRulesForOrganization", {})
  .n("ObservabilityAdminClient", "ListCentralizationRulesForOrganizationCommand")
  .sc(ListCentralizationRulesForOrganization)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCentralizationRulesForOrganizationInput;
      output: ListCentralizationRulesForOrganizationOutput;
    };
    sdk: {
      input: ListCentralizationRulesForOrganizationCommandInput;
      output: ListCentralizationRulesForOrganizationCommandOutput;
    };
  };
}
