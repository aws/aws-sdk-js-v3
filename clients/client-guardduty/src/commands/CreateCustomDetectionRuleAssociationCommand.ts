// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateCustomDetectionRuleAssociationRequest,
  CreateCustomDetectionRuleAssociationResponse,
} from "../models/models_0";
import { CreateCustomDetectionRuleAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCustomDetectionRuleAssociationCommand}.
 */
export interface CreateCustomDetectionRuleAssociationCommandInput extends CreateCustomDetectionRuleAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomDetectionRuleAssociationCommand}.
 */
export interface CreateCustomDetectionRuleAssociationCommandOutput extends CreateCustomDetectionRuleAssociationResponse, __MetadataBearer {}

/**
 * <p>Enables a custom detection rule for your account by creating an association. You specify the rule and the mode in which it operates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateCustomDetectionRuleAssociationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateCustomDetectionRuleAssociationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // CreateCustomDetectionRuleAssociationRequest
 *   RuleId: "STRING_VALUE", // required
 *   Mode: "LIVE" || "DRY_RUN", // required
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCustomDetectionRuleAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomDetectionRuleAssociationResponse
 * //   RuleAssociation: { // AssociationDetail
 * //     AssociationId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     RuleId: "STRING_VALUE", // required
 * //     AccountId: "STRING_VALUE", // required
 * //     Mode: "LIVE" || "DRY_RUN", // required
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //     ExpiresAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCustomDetectionRuleAssociationCommandInput - {@link CreateCustomDetectionRuleAssociationCommandInput}
 * @returns {@link CreateCustomDetectionRuleAssociationCommandOutput}
 * @see {@link CreateCustomDetectionRuleAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateCustomDetectionRuleAssociationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An access denied exception object.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A request conflict exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class CreateCustomDetectionRuleAssociationCommand extends command<CreateCustomDetectionRuleAssociationCommandInput, CreateCustomDetectionRuleAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateCustomDetectionRuleAssociation",
  CreateCustomDetectionRuleAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomDetectionRuleAssociationRequest;
      output: CreateCustomDetectionRuleAssociationResponse;
    };
    sdk: {
      input: CreateCustomDetectionRuleAssociationCommandInput;
      output: CreateCustomDetectionRuleAssociationCommandOutput;
    };
  };
}
