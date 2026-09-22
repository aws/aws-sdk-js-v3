// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAlertInput, GetAlertOutput } from "../models/models_0";
import { GetAlert$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAlertCommand}.
 */
export interface GetAlertCommandInput extends GetAlertInput {}
/**
 * @public
 *
 * The output of {@link GetAlertCommand}.
 */
export interface GetAlertCommandOutput extends GetAlertOutput, __MetadataBearer {}

/**
 * Retrieves a single alert by its identifier.
 *
 * Use ListAlerts to enumerate alerts in the space.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, GetAlertCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, GetAlertCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // GetAlertInput
 *   spaceId: "STRING_VALUE", // required
 *   alertId: "STRING_VALUE", // required
 * };
 * const command = new GetAlertCommand(input);
 * const response = await client.send(command);
 * // { // GetAlertOutput
 * //   alert: { // Alert
 * //     name: "STRING_VALUE", // required
 * //     alertId: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     accountId: "STRING_VALUE", // required
 * //     spaceId: "STRING_VALUE",
 * //     profileId: "STRING_VALUE",
 * //     rule: { // Rule Union: only one key present
 * //       telemetryRule: { // TelemetryRule
 * //         query: { // AlertRuleQuery
 * //           language: "SQL" || "PROMQL", // required
 * //           expression: "STRING_VALUE", // required
 * //         },
 * //         condition: { // AlertCondition
 * //           thresholdMode: "COUNT_OF_RESULTS" || "FIELD_VALUE",
 * //           thresholdField: "STRING_VALUE",
 * //           comparator: "GT" || "LT" || "GTE" || "LTE",
 * //           warningThreshold: Number("double"),
 * //           criticalThreshold: Number("double"),
 * //         },
 * //         evaluation: { // AlertEvaluation
 * //           intervalSeconds: Number("int"), // required
 * //           pendingDurationSeconds: Number("int"),
 * //           recoveryDurationSeconds: Number("int"),
 * //         },
 * //         noData: { // NoData
 * //           treatAs: "OK" || "WARNING" || "CRITICAL" || "NODATA", // required
 * //         },
 * //       },
 * //     },
 * //     notificationStatus: "ENABLED" || "DISABLED",
 * //     state: { // AlertStateInfo
 * //       value: "OK" || "WARNING" || "CRITICAL" || "NODATA", // required
 * //       transitionedAt: new Date("TIMESTAMP"),
 * //       contributorSummary: { // ContributorSummary
 * //         warningCount: Number("int"),
 * //         criticalCount: Number("int"),
 * //       },
 * //       data: { // AlertStateData
 * //         thresholdBreached: Number("double"),
 * //       },
 * //     },
 * //     notificationRules: [ // NotificationRuleList
 * //       { // NotificationRule
 * //         trigger: { // NotificationTrigger
 * //           stateValues: [ // AlertStateList
 * //             "OK" || "WARNING" || "CRITICAL" || "NODATA",
 * //           ],
 * //         },
 * //         target: { // NotificationTarget
 * //           type: "sns" || "slack" || "pagerduty", // required
 * //           arn: "STRING_VALUE", // required
 * //           metadata: { // NotificationTargetMetadata
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     alertArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAlertCommandInput - {@link GetAlertCommandInput}
 * @returns {@link GetAlertCommandOutput}
 * @see {@link GetAlertCommandInput} for command's `input` shape.
 * @see {@link GetAlertCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
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
 * @example Retrieve an alert
 * ```javascript
 * // The following example retrieves an alert by its identifier, including the live evaluation state that CreateAlert does not report. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   alertId: "c3d4e5f67a8b4c9d8e0f1a2b3c4d5e6f",
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new GetAlertCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   alert: {
 *     accountId: "123456789012",
 *     alertArn: "arn:aws:cloudwatch:us-east-1:123456789012:alert/c3d4e5f67a8b4c9d8e0f1a2b3c4d5e6f",
 *     alertId: "c3d4e5f67a8b4c9d8e0f1a2b3c4d5e6f",
 *     createdAt: "2026-09-16T14:22:31Z",
 *     description: "Alerts when a service logs more errors than its accepted rate.",
 *     name: "service-error-count-elevated",
 *     notificationRules: [
 *       {
 *         target: {
 *           arn: "arn:aws:cloudwatch:us-east-1:123456789012:integration/a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *           metadata: {
 *             channel: "oncall-alerts"
 *           },
 *           type: "slack"
 *         },
 *         trigger: {
 *           stateValues: [
 *             "CRITICAL"
 *           ]
 *         }
 *       }
 *     ],
 *     notificationStatus: "ENABLED",
 *     profileId: "analyst-readonly",
 *     rule: {
 *       telemetryRule: {
 *         condition: {
 *           comparator: "GT",
 *           criticalThreshold: 200.0,
 *           thresholdField: "error_count",
 *           thresholdMode: "FIELD_VALUE",
 *           warningThreshold: 50.0
 *         },
 *         evaluation: {
 *           intervalSeconds: 300,
 *           pendingDurationSeconds: 600,
 *           recoveryDurationSeconds: 300
 *         },
 *         noData: {
 *           treatAs: "NODATA"
 *         },
 *         query: {
 *           expression: `SELECT resource['attributes']['service.name'] AS service, COUNT(*) AS error_count FROM "logs.default" WHERE severityText = 'ERROR' GROUP BY service`,
 *           language: "SQL"
 *         }
 *       }
 *     },
 *     spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     state: {
 *       contributorSummary: {
 *         criticalCount: 1,
 *         warningCount: 3
 *       },
 *       transitionedAt: "2026-09-17T09:11:52Z",
 *       value: "CRITICAL"
 *     },
 *     updatedAt: "2026-09-17T09:11:52Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAlertCommand extends command<GetAlertCommandInput, GetAlertCommandOutput>(
  _ep0,
  _mw0,
  "GetAlert",
  GetAlert$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAlertInput;
      output: GetAlertOutput;
    };
    sdk: {
      input: GetAlertCommandInput;
      output: GetAlertCommandOutput;
    };
  };
}
