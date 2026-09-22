// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAlertInput, CreateAlertOutput } from "../models/models_0";
import { CreateAlert$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAlertCommand}.
 */
export interface CreateAlertCommandInput extends CreateAlertInput {}
/**
 * @public
 *
 * The output of {@link CreateAlertCommand}.
 */
export interface CreateAlertCommandOutput extends CreateAlertOutput, __MetadataBearer {}

/**
 * Creates a new alert within a space.
 *
 * Use GetAlert and ListAlerts to retrieve alerts, UpdateAlert to modify one,
 * and DeleteAlert to remove it.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, CreateAlertCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, CreateAlertCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // CreateAlertInput
 *   spaceId: "STRING_VALUE", // required
 *   profileId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
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
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAlertCommand(input);
 * const response = await client.send(command);
 * // { // CreateAlertOutput
 * //   alertArn: "STRING_VALUE",
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
 * @param CreateAlertCommandInput - {@link CreateAlertCommandInput}
 * @returns {@link CreateAlertCommandOutput}
 * @see {@link CreateAlertCommandInput} for command's `input` shape.
 * @see {@link CreateAlertCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  A service quota was exceeded.
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
 * @example Create an alert on a field value
 * ```javascript
 * // The following example creates an alert whose threshold is compared against a named field of each result row, so every service the query groups by is tracked as its own contributor. FIELD_VALUE requires thresholdField. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   clientToken: "3f2a9c1e-7b04-4d8a-9e15-6c2b8d0f4a73",
 *   description: "Alerts when a service logs more errors than its accepted rate.",
 *   name: "service-error-count-elevated",
 *   notificationRules: [
 *     {
 *       target: {
 *         arn: "arn:aws:cloudwatch:us-east-1:123456789012:integration/a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *         metadata: {
 *           channel: "oncall-alerts"
 *         },
 *         type: "slack"
 *       },
 *       trigger: {
 *         stateValues: [
 *           "CRITICAL"
 *         ]
 *       }
 *     }
 *   ],
 *   notificationsEnabled: true,
 *   profileId: "analyst-readonly",
 *   rule: {
 *     telemetryRule: {
 *       condition: {
 *         comparator: "GT",
 *         criticalThreshold: 200.0,
 *         thresholdField: "error_count",
 *         thresholdMode: "FIELD_VALUE",
 *         warningThreshold: 50.0
 *       },
 *       evaluation: {
 *         intervalSeconds: 300,
 *         pendingDurationSeconds: 600,
 *         recoveryDurationSeconds: 300
 *       },
 *       noData: {
 *         treatAs: "NODATA"
 *       },
 *       query: {
 *         expression: `SELECT resource['attributes']['service.name'] AS service, COUNT(*) AS error_count FROM "logs.default" WHERE severityText = 'ERROR' GROUP BY service`,
 *         language: "SQL"
 *       }
 *     }
 *   },
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *   tags: {
 *     Team: "observability"
 *   }
 * };
 * const command = new CreateAlertCommand(input);
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
 *     updatedAt: "2026-09-16T14:22:31Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Create an alert on the number of matching rows
 * ```javascript
 * // The following example creates an alert whose threshold is compared against how many rows the query returns, rather than a value within them. COUNT_OF_RESULTS takes no thresholdField. Notifications are created disabled, so the alert evaluates and records state without sending anything, and an empty result set is treated as OK rather than as missing data. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   description: "Counts checkout responses that returned a server error.",
 *   name: "service-checkout-5xx-responses",
 *   notificationsEnabled: false,
 *   profileId: "analyst-readonly",
 *   rule: {
 *     telemetryRule: {
 *       condition: {
 *         comparator: "GT",
 *         criticalThreshold: 50.0,
 *         thresholdMode: "COUNT_OF_RESULTS",
 *         warningThreshold: 10.0
 *       },
 *       evaluation: {
 *         intervalSeconds: 60,
 *         pendingDurationSeconds: 120
 *       },
 *       noData: {
 *         treatAs: "OK"
 *       },
 *       query: {
 *         expression: `SELECT * FROM "logs.default" WHERE resource['attributes']['service.name'] = 'checkout' AND attributes['http.response.status_code'] >= 500`,
 *         language: "SQL"
 *       }
 *     }
 *   },
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new CreateAlertCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   alert: {
 *     accountId: "123456789012",
 *     alertArn: "arn:aws:cloudwatch:us-east-1:123456789012:alert/d4e5f6a78b9c4d0e9f1a2b3c4d5e6f70",
 *     alertId: "d4e5f6a78b9c4d0e9f1a2b3c4d5e6f70",
 *     createdAt: "2026-09-16T14:22:31Z",
 *     description: "Counts checkout responses that returned a server error.",
 *     name: "service-checkout-5xx-responses",
 *     notificationStatus: "DISABLED",
 *     profileId: "analyst-readonly",
 *     rule: {
 *       telemetryRule: {
 *         condition: {
 *           comparator: "GT",
 *           criticalThreshold: 50.0,
 *           thresholdMode: "COUNT_OF_RESULTS",
 *           warningThreshold: 10.0
 *         },
 *         evaluation: {
 *           intervalSeconds: 60,
 *           pendingDurationSeconds: 120
 *         },
 *         noData: {
 *           treatAs: "OK"
 *         },
 *         query: {
 *           expression: `SELECT * FROM "logs.default" WHERE resource['attributes']['service.name'] = 'checkout' AND attributes['http.response.status_code'] >= 500`,
 *           language: "SQL"
 *         }
 *       }
 *     },
 *     spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     updatedAt: "2026-09-16T14:22:31Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Create an alert from a PromQL query
 * ```javascript
 * // The following example creates an alert from a PromQL expression instead of SQL. A PromQL rule compares against the series value, which is carried as the `value` field, so the condition is FIELD_VALUE with thresholdField set to `value`. Notifications go to an Amazon SNS topic, whose ARN is the topic itself rather than an integration. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   description: "Alerts on the checkout server error rate over a five-minute window.",
 *   name: "checkout-error-rate-promql",
 *   notificationRules: [
 *     {
 *       target: {
 *         arn: "arn:aws:sns:us-east-1:123456789012:checkout-oncall",
 *         type: "sns"
 *       },
 *       trigger: {
 *         stateValues: [
 *           "WARNING",
 *           "CRITICAL"
 *         ]
 *       }
 *     }
 *   ],
 *   profileId: "analyst-readonly",
 *   rule: {
 *     telemetryRule: {
 *       condition: {
 *         comparator: "GT",
 *         criticalThreshold: 0.1,
 *         thresholdField: "value",
 *         thresholdMode: "FIELD_VALUE",
 *         warningThreshold: 0.05
 *       },
 *       evaluation: {
 *         intervalSeconds: 300,
 *         pendingDurationSeconds: 300
 *       },
 *       noData: {
 *         treatAs: "NODATA"
 *       },
 *       query: {
 *         expression: `sum by (service_name) (rate(http_server_errors_total{service_name="checkout"}[5m]))`,
 *         language: "PROMQL"
 *       }
 *     }
 *   },
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new CreateAlertCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   alert: {
 *     accountId: "123456789012",
 *     alertArn: "arn:aws:cloudwatch:us-east-1:123456789012:alert/e5f6a78b9c0d4e1f8a2b3c4d5e6f7081",
 *     alertId: "e5f6a78b9c0d4e1f8a2b3c4d5e6f7081",
 *     createdAt: "2026-09-16T14:22:31Z",
 *     description: "Alerts on the checkout server error rate over a five-minute window.",
 *     name: "checkout-error-rate-promql",
 *     notificationRules: [
 *       {
 *         target: {
 *           arn: "arn:aws:sns:us-east-1:123456789012:checkout-oncall",
 *           type: "sns"
 *         },
 *         trigger: {
 *           stateValues: [
 *             "WARNING",
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
 *           criticalThreshold: 0.1,
 *           thresholdField: "value",
 *           thresholdMode: "FIELD_VALUE",
 *           warningThreshold: 0.05
 *         },
 *         evaluation: {
 *           intervalSeconds: 300,
 *           pendingDurationSeconds: 300
 *         },
 *         noData: {
 *           treatAs: "NODATA"
 *         },
 *         query: {
 *           expression: `sum by (service_name) (rate(http_server_errors_total{service_name="checkout"}[5m]))`,
 *           language: "PROMQL"
 *         }
 *       }
 *     },
 *     spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *     updatedAt: "2026-09-16T14:22:31Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateAlertCommand extends command<CreateAlertCommandInput, CreateAlertCommandOutput>(
  _ep0,
  _mw0,
  "CreateAlert",
  CreateAlert$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAlertInput;
      output: CreateAlertOutput;
    };
    sdk: {
      input: CreateAlertCommandInput;
      output: CreateAlertCommandOutput;
    };
  };
}
