// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartChangeRequestExecutionRequest, StartChangeRequestExecutionResult } from "../models/models_1";
import { StartChangeRequestExecution } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

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
 * <important>
 *             <p>Amazon Web Services Systems Manager Change Manager will no longer be open to new
 *   customers starting November 7, 2025. If you would like to use Change Manager, sign up prior to that date. Existing customers can
 *   continue to use the service as normal. For more information, see
 * <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/change-manager-availability-change.html">Amazon Web Services Systems Manager Change Manager availability change</a>.</p>
 *          </important>
 *          <p>Creates a change request for Change Manager. The Automation runbooks specified in the
 *    change request run only after all required approvals for the change request have been
 *    received.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StartChangeRequestExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StartChangeRequestExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
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
 *           IncludeChildOrganizationUnits: true || false,
 *           ExcludeAccounts: [ // ExcludeAccounts
 *             "STRING_VALUE",
 *           ],
 *           Targets: [
 *             {
 *               Key: "STRING_VALUE",
 *               Values: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *           TargetsMaxConcurrency: "STRING_VALUE",
 *           TargetsMaxErrors: "STRING_VALUE",
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
 * @throws {@link NoLongerSupportedException} (client fault)
 *  <p>The requested operation is no longer supported by Systems Manager.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "StartChangeRequestExecution", {})
  .n("SSMClient", "StartChangeRequestExecutionCommand")
  .sc(StartChangeRequestExecution)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartChangeRequestExecutionRequest;
      output: StartChangeRequestExecutionResult;
    };
    sdk: {
      input: StartChangeRequestExecutionCommandInput;
      output: StartChangeRequestExecutionCommandOutput;
    };
  };
}
