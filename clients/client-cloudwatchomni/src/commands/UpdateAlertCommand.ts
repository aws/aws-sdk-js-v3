// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAlertInput, UpdateAlertOutput } from "../models/models_0";
import { UpdateAlert$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAlertCommand}.
 */
export interface UpdateAlertCommandInput extends UpdateAlertInput {}
/**
 * @public
 *
 * The output of {@link UpdateAlertCommand}.
 */
export interface UpdateAlertCommandOutput extends UpdateAlertOutput, __MetadataBearer {}

/**
 * Updates an existing alert.
 *
 * Only non-null fields overwrite existing values.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, UpdateAlertCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, UpdateAlertCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // UpdateAlertInput
 *   spaceId: "STRING_VALUE", // required
 *   alertId: "STRING_VALUE", // required
 *   profileId: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   rule: { // Rule Union: only one key present
 *     telemetryRule: { // TelemetryRule
 *       query: { // AlertRuleQuery
 *         language: "SQL" || "PROMQL", // required
 *         expression: "STRING_VALUE", // required
 *       },
 *       condition: { // AlertCondition
 *         thresholdMode: "COUNT_OF_RESULTS" || "FIELD_VALUE",
 *         thresholdField: "STRING_VALUE",
 *         comparator: "GT" || "LT" || "GTE" || "LTE",
 *         warningThreshold: Number("double"),
 *         criticalThreshold: Number("double"),
 *       },
 *       evaluation: { // AlertEvaluation
 *         intervalSeconds: Number("int"), // required
 *         pendingDurationSeconds: Number("int"),
 *         recoveryDurationSeconds: Number("int"),
 *       },
 *       noData: { // NoData
 *         treatAs: "OK" || "WARNING" || "CRITICAL" || "NODATA", // required
 *       },
 *     },
 *   },
 *   notificationsEnabled: true || false,
 *   notificationRules: [ // NotificationRuleList
 *     { // NotificationRule
 *       trigger: { // NotificationTrigger
 *         stateValues: [ // AlertStateList
 *           "OK" || "WARNING" || "CRITICAL" || "NODATA",
 *         ],
 *       },
 *       target: { // NotificationTarget
 *         type: "sns" || "slack" || "pagerduty", // required
 *         arn: "STRING_VALUE", // required
 *         metadata: { // NotificationTargetMetadata
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateAlertCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAlertCommandInput - {@link UpdateAlertCommandInput}
 * @returns {@link UpdateAlertCommandOutput}
 * @see {@link UpdateAlertCommandInput} for command's `input` shape.
 * @see {@link UpdateAlertCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The operation could not be completed because of a conflict with the current
 * state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Raise an alert's thresholds
 * ```javascript
 * // The following example replaces only the condition of an alert's rule; the query, the evaluation cadence and the notification rules are left unchanged. A supplied condition is replaced whole rather than merged, so every threshold to keep is sent again. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   alertId: "c3d4e5f67a8b4c9d8e0f1a2b3c4d5e6f",
 *   rule: {
 *     telemetryRule: {
 *       condition: {
 *         comparator: "GT",
 *         criticalThreshold: 400.0,
 *         thresholdField: "error_count",
 *         thresholdMode: "FIELD_VALUE",
 *         warningThreshold: 100.0
 *       }
 *     }
 *   },
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new UpdateAlertCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateAlertCommand extends command<UpdateAlertCommandInput, UpdateAlertCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAlert",
  UpdateAlert$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAlertInput;
      output: {};
    };
    sdk: {
      input: UpdateAlertCommandInput;
      output: UpdateAlertCommandOutput;
    };
  };
}
