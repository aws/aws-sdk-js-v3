// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateCustomDetectionRuleOrgConfigurationRequest,
  UpdateCustomDetectionRuleOrgConfigurationResponse,
} from "../models/models_1";
import { UpdateCustomDetectionRuleOrgConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCustomDetectionRuleOrgConfigurationCommand}.
 */
export interface UpdateCustomDetectionRuleOrgConfigurationCommandInput extends UpdateCustomDetectionRuleOrgConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomDetectionRuleOrgConfigurationCommand}.
 */
export interface UpdateCustomDetectionRuleOrgConfigurationCommandOutput extends UpdateCustomDetectionRuleOrgConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates the organization-level configuration for a custom detection rule, including the mode and include/exclude account lists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateCustomDetectionRuleOrgConfigurationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateCustomDetectionRuleOrgConfigurationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // UpdateCustomDetectionRuleOrgConfigurationRequest
 *   RuleId: "STRING_VALUE", // required
 *   Mode: "LIVE" || "DRY_RUN", // required
 *   IncludeAccountIds: [ // DetectionRuleAccountIds
 *     "STRING_VALUE",
 *   ],
 *   ExcludeAccountIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateCustomDetectionRuleOrgConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCustomDetectionRuleOrgConfigurationCommandInput - {@link UpdateCustomDetectionRuleOrgConfigurationCommandInput}
 * @returns {@link UpdateCustomDetectionRuleOrgConfigurationCommandOutput}
 * @see {@link UpdateCustomDetectionRuleOrgConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomDetectionRuleOrgConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateCustomDetectionRuleOrgConfigurationCommand extends command<UpdateCustomDetectionRuleOrgConfigurationCommandInput, UpdateCustomDetectionRuleOrgConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCustomDetectionRuleOrgConfiguration",
  UpdateCustomDetectionRuleOrgConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCustomDetectionRuleOrgConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateCustomDetectionRuleOrgConfigurationCommandInput;
      output: UpdateCustomDetectionRuleOrgConfigurationCommandOutput;
    };
  };
}
