// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteCustomDetectionRuleOrgConfigurationRequest,
  DeleteCustomDetectionRuleOrgConfigurationResponse,
} from "../models/models_0";
import { DeleteCustomDetectionRuleOrgConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCustomDetectionRuleOrgConfigurationCommand}.
 */
export interface DeleteCustomDetectionRuleOrgConfigurationCommandInput extends DeleteCustomDetectionRuleOrgConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomDetectionRuleOrgConfigurationCommand}.
 */
export interface DeleteCustomDetectionRuleOrgConfigurationCommandOutput extends DeleteCustomDetectionRuleOrgConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes the organization-level configuration for a custom detection rule. This operation is available only to the delegated administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteCustomDetectionRuleOrgConfigurationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteCustomDetectionRuleOrgConfigurationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DeleteCustomDetectionRuleOrgConfigurationRequest
 *   RuleId: "STRING_VALUE", // required
 *   Mode: "LIVE" || "DRY_RUN", // required
 * };
 * const command = new DeleteCustomDetectionRuleOrgConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomDetectionRuleOrgConfigurationCommandInput - {@link DeleteCustomDetectionRuleOrgConfigurationCommandInput}
 * @returns {@link DeleteCustomDetectionRuleOrgConfigurationCommandOutput}
 * @see {@link DeleteCustomDetectionRuleOrgConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomDetectionRuleOrgConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteCustomDetectionRuleOrgConfigurationCommand extends command<DeleteCustomDetectionRuleOrgConfigurationCommandInput, DeleteCustomDetectionRuleOrgConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCustomDetectionRuleOrgConfiguration",
  DeleteCustomDetectionRuleOrgConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomDetectionRuleOrgConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteCustomDetectionRuleOrgConfigurationCommandInput;
      output: DeleteCustomDetectionRuleOrgConfigurationCommandOutput;
    };
  };
}
