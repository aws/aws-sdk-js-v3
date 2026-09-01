// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListCustomDetectionRuleOrgConfigurationsRequest,
  ListCustomDetectionRuleOrgConfigurationsResponse,
} from "../models/models_1";
import { ListCustomDetectionRuleOrgConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCustomDetectionRuleOrgConfigurationsCommand}.
 */
export interface ListCustomDetectionRuleOrgConfigurationsCommandInput extends ListCustomDetectionRuleOrgConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomDetectionRuleOrgConfigurationsCommand}.
 */
export interface ListCustomDetectionRuleOrgConfigurationsCommandOutput extends ListCustomDetectionRuleOrgConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Returns all organization-level configurations for custom detection rules. You can filter the results by status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListCustomDetectionRuleOrgConfigurationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListCustomDetectionRuleOrgConfigurationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListCustomDetectionRuleOrgConfigurationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Status: "ACTIVE" || "PROCESSING" || "FAILED",
 * };
 * const command = new ListCustomDetectionRuleOrgConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomDetectionRuleOrgConfigurationsResponse
 * //   Configurations: [ // DetectionRuleOrgConfigurationSummaryList // required
 * //     { // DetectionRuleOrgConfigurationSummary
 * //       RuleId: "STRING_VALUE", // required
 * //       Mode: "LIVE" || "DRY_RUN", // required
 * //       Status: "ACTIVE" || "PROCESSING" || "FAILED", // required
 * //       StatusReason: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //       ExpiresAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomDetectionRuleOrgConfigurationsCommandInput - {@link ListCustomDetectionRuleOrgConfigurationsCommandInput}
 * @returns {@link ListCustomDetectionRuleOrgConfigurationsCommandOutput}
 * @see {@link ListCustomDetectionRuleOrgConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListCustomDetectionRuleOrgConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An access denied exception object.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class ListCustomDetectionRuleOrgConfigurationsCommand extends command<ListCustomDetectionRuleOrgConfigurationsCommandInput, ListCustomDetectionRuleOrgConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomDetectionRuleOrgConfigurations",
  ListCustomDetectionRuleOrgConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomDetectionRuleOrgConfigurationsRequest;
      output: ListCustomDetectionRuleOrgConfigurationsResponse;
    };
    sdk: {
      input: ListCustomDetectionRuleOrgConfigurationsCommandInput;
      output: ListCustomDetectionRuleOrgConfigurationsCommandOutput;
    };
  };
}
