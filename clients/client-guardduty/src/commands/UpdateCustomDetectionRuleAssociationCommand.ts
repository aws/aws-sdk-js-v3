// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateCustomDetectionRuleAssociationRequest,
  UpdateCustomDetectionRuleAssociationResponse,
} from "../models/models_1";
import { UpdateCustomDetectionRuleAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCustomDetectionRuleAssociationCommand}.
 */
export interface UpdateCustomDetectionRuleAssociationCommandInput extends UpdateCustomDetectionRuleAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomDetectionRuleAssociationCommand}.
 */
export interface UpdateCustomDetectionRuleAssociationCommandOutput extends UpdateCustomDetectionRuleAssociationResponse, __MetadataBearer {}

/**
 * Updates the mode of an existing custom detection rule association.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateCustomDetectionRuleAssociationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateCustomDetectionRuleAssociationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // UpdateCustomDetectionRuleAssociationRequest
 *   RuleId: "STRING_VALUE", // required
 *   AssociationId: "STRING_VALUE", // required
 *   Mode: "LIVE" || "DRY_RUN", // required
 * };
 * const command = new UpdateCustomDetectionRuleAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCustomDetectionRuleAssociationCommandInput - {@link UpdateCustomDetectionRuleAssociationCommandInput}
 * @returns {@link UpdateCustomDetectionRuleAssociationCommandOutput}
 * @see {@link UpdateCustomDetectionRuleAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomDetectionRuleAssociationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An access denied exception object.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * A bad request exception object.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A request conflict exception object.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal server error exception object.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link GuardDutyServiceException}
 *
 * Base exception class for all service exceptions from GuardDuty service.
 *
 * @public
 */
export class UpdateCustomDetectionRuleAssociationCommand extends command<UpdateCustomDetectionRuleAssociationCommandInput, UpdateCustomDetectionRuleAssociationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCustomDetectionRuleAssociation",
  UpdateCustomDetectionRuleAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCustomDetectionRuleAssociationRequest;
      output: {};
    };
    sdk: {
      input: UpdateCustomDetectionRuleAssociationCommandInput;
      output: UpdateCustomDetectionRuleAssociationCommandOutput;
    };
  };
}
