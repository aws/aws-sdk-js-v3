// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartChangeRequestExecutionRequest, StartChangeRequestExecutionResult } from "../models/models_2";
import { de_StartChangeRequestExecutionCommand, se_StartChangeRequestExecutionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartChangeRequestExecutionCommand}.
 */
export interface StartChangeRequestExecutionCommandInput extends StartChangeRequestExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartChangeRequestExecutionCommand}.
 */
export interface StartChangeRequestExecutionCommandOutput extends StartChangeRequestExecutionResult, __MetadataBearer {}

/**
 * <p>Creates a change request for Change Manager. The Automation runbooks specified in the
 *    change request run only after all required approvals for the change request have been
 *    received.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartChangeRequestExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartChangeRequestExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // StartChangeRequestExecutionRequest
 *   ScheduledTime: new Date("TIMESTAMP"),
 *   DocumentName: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   Parameters: { // AutomationParameterMap
 *     "<keys>": [ // AutomationParameterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ChangeRequestName: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   AutoApprove: true || false,
 *   Runbooks: [ // Runbooks // required
 *     { // Runbook
 *       DocumentName: "STRING_VALUE", // required
 *       DocumentVersion: "STRING_VALUE",
 *       Parameters: {
 *         "<keys>": [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       TargetParameterName: "STRING_VALUE",
 *       Targets: [ // Targets
 *         { // Target
 *           Key: "STRING_VALUE",
 *           Values: [ // TargetValues
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       TargetMaps: [ // TargetMaps
 *         { // TargetMap
 *           "<keys>": [ // TargetMapValueList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       MaxConcurrency: "STRING_VALUE",
 *       MaxErrors: "STRING_VALUE",
 *       TargetLocations: [ // TargetLocations
 *         { // TargetLocation
 *           Accounts: [ // Accounts
 *             "STRING_VALUE",
 *           ],
 *           Regions: [ // Regions
 *             "STRING_VALUE",
 *           ],
 *           TargetLocationMaxConcurrency: "STRING_VALUE",
 *           TargetLocationMaxErrors: "STRING_VALUE",
 *           ExecutionRoleName: "STRING_VALUE",
 *           TargetLocationAlarmConfiguration: { // AlarmConfiguration
 *             IgnorePollAlarmFailure: true || false,
 *             Alarms: [ // AlarmList // required
 *               { // Alarm
 *                 Name: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ScheduledEndTime: new Date("TIMESTAMP"),
 *   ChangeDetails: "STRING_VALUE",
 * };
 * const command = new StartChangeRequestExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartChangeRequestExecutionResult
 * //   AutomationExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartChangeRequestExecutionCommandInput - {@link StartChangeRequestExecutionCommandInput}
 * @returns {@link StartChangeRequestExecutionCommandOutput}
 * @see {@link StartChangeRequestExecutionCommandInput} for command's `input` shape.
 * @see {@link StartChangeRequestExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AutomationDefinitionNotApprovedException} (client fault)
 *  <p>Indicates that the Change Manager change template used in the change request was rejected or is
 *    still in a pending state.</p>
 *
 * @throws {@link AutomationDefinitionNotFoundException} (client fault)
 *  <p>An Automation runbook with the specified name couldn't be found.</p>
 *
 * @throws {@link AutomationDefinitionVersionNotFoundException} (client fault)
 *  <p>An Automation runbook with the specified name and version couldn't be found.</p>
 *
 * @throws {@link AutomationExecutionLimitExceededException} (client fault)
 *  <p>The number of simultaneously running Automation executions exceeded the allowable
 *    limit.</p>
 *
 * @throws {@link IdempotentParameterMismatch} (client fault)
 *  <p>Error returned when an idempotent operation is retried and the parameters don't match the
 *    original call to the API with the same idempotency token. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidAutomationExecutionParametersException} (client fault)
 *  <p>The supplied parameters for invoking the specified Automation runbook are incorrect. For
 *    example, they may not match the set of parameters permitted for the specified Automation
 *    document.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class StartChangeRequestExecutionCommand extends $Command
  .classBuilder<
    StartChangeRequestExecutionCommandInput,
    StartChangeRequestExecutionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "StartChangeRequestExecution", {})
  .n("SSMClient", "StartChangeRequestExecutionCommand")
  .f(void 0, void 0)
  .ser(se_StartChangeRequestExecutionCommand)
  .de(de_StartChangeRequestExecutionCommand)
  .build() {}
