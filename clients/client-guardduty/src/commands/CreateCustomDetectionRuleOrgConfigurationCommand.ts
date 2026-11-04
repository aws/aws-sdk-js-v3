// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateCustomDetectionRuleOrgConfigurationRequest,
  CreateCustomDetectionRuleOrgConfigurationResponse,
} from "../models/models_0";
import { CreateCustomDetectionRuleOrgConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCustomDetectionRuleOrgConfigurationCommand}.
 */
export interface CreateCustomDetectionRuleOrgConfigurationCommandInput extends CreateCustomDetectionRuleOrgConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomDetectionRuleOrgConfigurationCommand}.
 */
export interface CreateCustomDetectionRuleOrgConfigurationCommandOutput extends CreateCustomDetectionRuleOrgConfigurationResponse, __MetadataBearer {}

/**
 * Creates an organization-level configuration that enables a custom detection rule across your organization. This operation is available only to the delegated administrator account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateCustomDetectionRuleOrgConfigurationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateCustomDetectionRuleOrgConfigurationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // CreateCustomDetectionRuleOrgConfigurationRequest
 *   RuleId: "STRING_VALUE", // required
 *   Mode: "LIVE" || "DRY_RUN", // required
 *   IncludeAccountIds: [ // DetectionRuleAccountIds
 *     "STRING_VALUE",
 *   ],
 *   ExcludeAccountIds: [
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateCustomDetectionRuleOrgConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateCustomDetectionRuleOrgConfigurationCommandInput - {@link CreateCustomDetectionRuleOrgConfigurationCommandInput}
 * @returns {@link CreateCustomDetectionRuleOrgConfigurationCommandOutput}
 * @see {@link CreateCustomDetectionRuleOrgConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateCustomDetectionRuleOrgConfigurationCommandOutput} for command's `response` shape.
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
export class CreateCustomDetectionRuleOrgConfigurationCommand extends command<CreateCustomDetectionRuleOrgConfigurationCommandInput, CreateCustomDetectionRuleOrgConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateCustomDetectionRuleOrgConfiguration",
  CreateCustomDetectionRuleOrgConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomDetectionRuleOrgConfigurationRequest;
      output: {};
    };
    sdk: {
      input: CreateCustomDetectionRuleOrgConfigurationCommandInput;
      output: CreateCustomDetectionRuleOrgConfigurationCommandOutput;
    };
  };
}
