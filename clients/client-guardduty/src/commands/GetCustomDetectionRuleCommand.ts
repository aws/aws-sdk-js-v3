// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCustomDetectionRuleRequest } from "../models/models_0";
import type { GetCustomDetectionRuleResponse } from "../models/models_1";
import { GetCustomDetectionRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCustomDetectionRuleCommand}.
 */
export interface GetCustomDetectionRuleCommandInput extends GetCustomDetectionRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetCustomDetectionRuleCommand}.
 */
export interface GetCustomDetectionRuleCommandOutput extends GetCustomDetectionRuleResponse, __MetadataBearer {}

/**
 * Returns details for a custom detection rule in GuardDuty, including its detection logic.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetCustomDetectionRuleCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetCustomDetectionRuleCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetCustomDetectionRuleRequest
 *   RuleId: "STRING_VALUE", // required
 * };
 * const command = new GetCustomDetectionRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetCustomDetectionRuleResponse
 * //   Rule: { // RuleDetail
 * //     RuleId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE", // required
 * //     Severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW", // required
 * //     DataSource: "CloudTrailManagementEvent" || "RuntimeMonitoring", // required
 * //     Tactic: "STRING_VALUE", // required
 * //     Technique: "STRING_VALUE", // required
 * //     Service: "STRING_VALUE", // required
 * //     Definition: { // RuleDefinition
 * //       Expression: "STRING_VALUE", // required
 * //     },
 * //     Language: "SQL",
 * //     Schema: "CloudTrail",
 * //     RuntimeMonitoringDetails: { // DetectionRuleRuntimeMonitoringDetails
 * //       Platforms: { // DetectionRuleRuntimePlatforms
 * //         Eks: { // DetectionRuleEksRequirements
 * //           MinAgentVersion: "STRING_VALUE",
 * //         },
 * //         Ec2: { // DetectionRuleEc2Requirements
 * //           MinAgentVersion: "STRING_VALUE",
 * //         },
 * //         EcsFargate: { // DetectionRuleEcsFargateRequirements
 * //           MinAgentVersion: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCustomDetectionRuleCommandInput - {@link GetCustomDetectionRuleCommandInput}
 * @returns {@link GetCustomDetectionRuleCommandOutput}
 * @see {@link GetCustomDetectionRuleCommandInput} for command's `input` shape.
 * @see {@link GetCustomDetectionRuleCommandOutput} for command's `response` shape.
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
export class GetCustomDetectionRuleCommand extends command<GetCustomDetectionRuleCommandInput, GetCustomDetectionRuleCommandOutput>(
  _ep0,
  _mw0,
  "GetCustomDetectionRule",
  GetCustomDetectionRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCustomDetectionRuleRequest;
      output: GetCustomDetectionRuleResponse;
    };
    sdk: {
      input: GetCustomDetectionRuleCommandInput;
      output: GetCustomDetectionRuleCommandOutput;
    };
  };
}
