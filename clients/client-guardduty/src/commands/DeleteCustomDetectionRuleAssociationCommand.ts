// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteCustomDetectionRuleAssociationRequest,
  DeleteCustomDetectionRuleAssociationResponse,
} from "../models/models_0";
import { DeleteCustomDetectionRuleAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCustomDetectionRuleAssociationCommand}.
 */
export interface DeleteCustomDetectionRuleAssociationCommandInput extends DeleteCustomDetectionRuleAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomDetectionRuleAssociationCommand}.
 */
export interface DeleteCustomDetectionRuleAssociationCommandOutput extends DeleteCustomDetectionRuleAssociationResponse, __MetadataBearer {}

/**
 * <p>Disables a custom detection rule by deleting its association. This operation is idempotent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteCustomDetectionRuleAssociationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteCustomDetectionRuleAssociationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DeleteCustomDetectionRuleAssociationRequest
 *   RuleId: "STRING_VALUE", // required
 *   AssociationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomDetectionRuleAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomDetectionRuleAssociationCommandInput - {@link DeleteCustomDetectionRuleAssociationCommandInput}
 * @returns {@link DeleteCustomDetectionRuleAssociationCommandOutput}
 * @see {@link DeleteCustomDetectionRuleAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomDetectionRuleAssociationCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class DeleteCustomDetectionRuleAssociationCommand extends command<DeleteCustomDetectionRuleAssociationCommandInput, DeleteCustomDetectionRuleAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCustomDetectionRuleAssociation",
  DeleteCustomDetectionRuleAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomDetectionRuleAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteCustomDetectionRuleAssociationCommandInput;
      output: DeleteCustomDetectionRuleAssociationCommandOutput;
    };
  };
}
