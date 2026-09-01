// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListCustomDetectionRuleAssociationsRequest,
  ListCustomDetectionRuleAssociationsResponse,
} from "../models/models_1";
import { ListCustomDetectionRuleAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCustomDetectionRuleAssociationsCommand}.
 */
export interface ListCustomDetectionRuleAssociationsCommandInput extends ListCustomDetectionRuleAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomDetectionRuleAssociationsCommand}.
 */
export interface ListCustomDetectionRuleAssociationsCommandOutput extends ListCustomDetectionRuleAssociationsResponse, __MetadataBearer {}

/**
 * <p>Returns all custom detection rule associations for your account. You can filter by rule ID and mode.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListCustomDetectionRuleAssociationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListCustomDetectionRuleAssociationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListCustomDetectionRuleAssociationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RuleId: "STRING_VALUE",
 *   Mode: "LIVE" || "DRY_RUN",
 * };
 * const command = new ListCustomDetectionRuleAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomDetectionRuleAssociationsResponse
 * //   RuleAssociations: [ // AssociationSummaryList // required
 * //     { // AssociationSummary
 * //       AssociationId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       RuleId: "STRING_VALUE", // required
 * //       Mode: "LIVE" || "DRY_RUN", // required
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
 * @param ListCustomDetectionRuleAssociationsCommandInput - {@link ListCustomDetectionRuleAssociationsCommandInput}
 * @returns {@link ListCustomDetectionRuleAssociationsCommandOutput}
 * @see {@link ListCustomDetectionRuleAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListCustomDetectionRuleAssociationsCommandOutput} for command's `response` shape.
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
export class ListCustomDetectionRuleAssociationsCommand extends command<ListCustomDetectionRuleAssociationsCommandInput, ListCustomDetectionRuleAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomDetectionRuleAssociations",
  ListCustomDetectionRuleAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomDetectionRuleAssociationsRequest;
      output: ListCustomDetectionRuleAssociationsResponse;
    };
    sdk: {
      input: ListCustomDetectionRuleAssociationsCommandInput;
      output: ListCustomDetectionRuleAssociationsCommandOutput;
    };
  };
}
