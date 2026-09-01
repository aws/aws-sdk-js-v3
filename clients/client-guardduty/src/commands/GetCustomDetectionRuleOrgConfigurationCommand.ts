// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetCustomDetectionRuleOrgConfigurationRequest,
  GetCustomDetectionRuleOrgConfigurationResponse,
} from "../models/models_0";
import { GetCustomDetectionRuleOrgConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCustomDetectionRuleOrgConfigurationCommand}.
 */
export interface GetCustomDetectionRuleOrgConfigurationCommandInput extends GetCustomDetectionRuleOrgConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomDetectionRuleOrgConfigurationCommand}.
 */
export interface GetCustomDetectionRuleOrgConfigurationCommandOutput extends GetCustomDetectionRuleOrgConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns the organization-level configuration for a custom detection rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetCustomDetectionRuleOrgConfigurationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetCustomDetectionRuleOrgConfigurationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetCustomDetectionRuleOrgConfigurationRequest
 *   RuleId: "STRING_VALUE", // required
 *   Mode: "LIVE" || "DRY_RUN", // required
 * };
 * const command = new GetCustomDetectionRuleOrgConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomDetectionRuleOrgConfigurationResponse
 * //   Configuration: { // DetectionRuleOrgConfiguration
 * //     RuleId: "STRING_VALUE", // required
 * //     Mode: "LIVE" || "DRY_RUN", // required
 * //     Status: "ACTIVE" || "PROCESSING" || "FAILED", // required
 * //     StatusReason: "STRING_VALUE",
 * //     IncludeAccountIds: [ // DetectionRuleAccountIds // required
 * //       "STRING_VALUE",
 * //     ],
 * //     ExcludeAccountIds: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //     ExpiresAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCustomDetectionRuleOrgConfigurationCommandInput - {@link GetCustomDetectionRuleOrgConfigurationCommandInput}
 * @returns {@link GetCustomDetectionRuleOrgConfigurationCommandOutput}
 * @see {@link GetCustomDetectionRuleOrgConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetCustomDetectionRuleOrgConfigurationCommandOutput} for command's `response` shape.
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
export class GetCustomDetectionRuleOrgConfigurationCommand extends command<GetCustomDetectionRuleOrgConfigurationCommandInput, GetCustomDetectionRuleOrgConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetCustomDetectionRuleOrgConfiguration",
  GetCustomDetectionRuleOrgConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomDetectionRuleOrgConfigurationRequest;
      output: GetCustomDetectionRuleOrgConfigurationResponse;
    };
    sdk: {
      input: GetCustomDetectionRuleOrgConfigurationCommandInput;
      output: GetCustomDetectionRuleOrgConfigurationCommandOutput;
    };
  };
}
