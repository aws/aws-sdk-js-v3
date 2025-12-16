// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartAutomationExecutionRequest, StartAutomationExecutionResult } from "../models/models_1";
import { StartAutomationExecution$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAutomationExecutionCommand}.
 */
export interface StartAutomationExecutionCommandInput extends StartAutomationExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartAutomationExecutionCommand}.
 */
export interface StartAutomationExecutionCommandOutput extends StartAutomationExecutionResult, __MetadataBearer {}

/**
 * <p>Initiates execution of an Automation runbook.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartAutomationExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartAutomationExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // StartAutomationExecutionRequest
 *   DocumentName: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   Parameters: { // AutomationParameterMap
 *     "<keys>": [ // AutomationParameterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ClientToken: "STRING_VALUE",
 *   Mode: "Auto" || "Interactive",
 *   TargetParameterName: "STRING_VALUE",
 *   Targets: [ // Targets
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   TargetMaps: [ // TargetMaps
 *     { // TargetMap
 *       "<keys>": [ // TargetMapValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxConcurrency: "STRING_VALUE",
 *   MaxErrors: "STRING_VALUE",
 *   TargetLocations: [ // TargetLocations
 *     { // TargetLocation
 *       Accounts: [ // Accounts
 *         "STRING_VALUE",
 *       ],
 *       Regions: [ // Regions
 *         "STRING_VALUE",
 *       ],
 *       TargetLocationMaxConcurrency: "STRING_VALUE",
 *       TargetLocationMaxErrors: "STRING_VALUE",
 *       ExecutionRoleName: "STRING_VALUE",
 *       TargetLocationAlarmConfiguration: { // AlarmConfiguration
 *         IgnorePollAlarmFailure: true || false,
 *         Alarms: [ // AlarmList // required
 *           { // Alarm
 *             Name: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       IncludeChildOrganizationUnits: true || false,
 *       ExcludeAccounts: [ // ExcludeAccounts
 *         "STRING_VALUE",
 *       ],
 *       Targets: [
 *         {
 *           Key: "STRING_VALUE",
 *           Values: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       TargetsMaxConcurrency: "STRING_VALUE",
 *       TargetsMaxErrors: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AlarmConfiguration: {
 *     IgnorePollAlarmFailure: true || false,
 *     Alarms: [ // required
 *       {
 *         Name: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   TargetLocationsURL: "STRING_VALUE",
 * };
 * const command = new StartAutomationExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartAutomationExecutionResult
 * //   AutomationExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAutomationExecutionCommandInput - {@link StartAutomationExecutionCommandInput}
 * @returns {@link StartAutomationExecutionCommandOutput}
 * @see {@link StartAutomationExecutionCommandInput} for command's `input` shape.
 * @see {@link StartAutomationExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
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
 * @throws {@link InvalidTarget} (client fault)
 *  <p>The target isn't valid or doesn't exist. It might not be configured for Systems Manager or you might
 *    not have permission to perform the operation.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class StartAutomationExecutionCommand extends $Command
  .classBuilder<
    StartAutomationExecutionCommandInput,
    StartAutomationExecutionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "StartAutomationExecution", {})
  .n("SSMClient", "StartAutomationExecutionCommand")
  .sc(StartAutomationExecution$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAutomationExecutionRequest;
      output: StartAutomationExecutionResult;
    };
    sdk: {
      input: StartAutomationExecutionCommandInput;
      output: StartAutomationExecutionCommandOutput;
    };
  };
}
