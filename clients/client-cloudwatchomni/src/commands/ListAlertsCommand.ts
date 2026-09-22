// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAlertsInput, ListAlertsOutput } from "../models/models_0";
import { ListAlerts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAlertsCommand}.
 */
export interface ListAlertsCommandInput extends ListAlertsInput {}
/**
 * @public
 *
 * The output of {@link ListAlertsCommand}.
 */
export interface ListAlertsCommandOutput extends ListAlertsOutput, __MetadataBearer {}

/**
 * Lists alerts within a space, optionally filtered by exact name(s),
 * a single name prefix, or exact alertId(s), with pagination.
 *
 * Use GetAlert to retrieve a single alert's full detail.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, ListAlertsCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, ListAlertsCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // ListAlertsInput
 *   spaceId: "STRING_VALUE", // required
 *   filterCriteria: { // AlertFilterCriteria
 *     names: [ // AlertNameFilterList
 *       "STRING_VALUE",
 *     ],
 *     namePrefix: "STRING_VALUE",
 *     ids: [ // AlertIdFilterList
 *       "STRING_VALUE",
 *     ],
 *     stateValue: [ // AlertStateList
 *       "OK" || "WARNING" || "CRITICAL" || "NODATA",
 *     ],
 *     notificationsEnabled: true || false,
 *   },
 *   sortBy: "NAME" || "STATE",
 *   sortOrder: "ASC" || "DESC",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAlertsCommand(input);
 * const response = await client.send(command);
 * // { // ListAlertsOutput
 * //   items: [ // AlertSummaryList // required
 * //     { // AlertSummary
 * //       name: "STRING_VALUE", // required
 * //       alertId: "STRING_VALUE",
 * //       spaceId: "STRING_VALUE",
 * //       profileId: "STRING_VALUE",
 * //       notificationStatus: "ENABLED" || "DISABLED",
 * //       state: { // AlertStateInfo
 * //         value: "OK" || "WARNING" || "CRITICAL" || "NODATA", // required
 * //         transitionedAt: new Date("TIMESTAMP"),
 * //         contributorSummary: { // ContributorSummary
 * //           warningCount: Number("int"),
 * //           criticalCount: Number("int"),
 * //         },
 * //         data: { // AlertStateData
 * //           thresholdBreached: Number("double"),
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       alertArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAlertsCommandInput - {@link ListAlertsCommandInput}
 * @returns {@link ListAlertsCommandOutput}
 * @see {@link ListAlertsCommandInput} for command's `input` shape.
 * @see {@link ListAlertsCommandOutput} for command's `response` shape.
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
 * @example List alerts in a space
 * ```javascript
 * // The following example lists the first page of alerts in a space, sorted by state, and returns a nextToken to retrieve the next page. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   filterCriteria: {
 *     namePrefix: "service-",
 *     stateValue: [
 *       "WARNING",
 *       "CRITICAL"
 *     ]
 *   },
 *   maxResults: 50,
 *   sortBy: "STATE",
 *   sortOrder: "DESC",
 *   spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d"
 * };
 * const command = new ListAlertsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       alertArn: "arn:aws:cloudwatch:us-east-1:123456789012:alert/c3d4e5f67a8b4c9d8e0f1a2b3c4d5e6f",
 *       alertId: "c3d4e5f67a8b4c9d8e0f1a2b3c4d5e6f",
 *       createdAt: "2026-09-16T14:22:31Z",
 *       name: "service-error-count-elevated",
 *       notificationStatus: "ENABLED",
 *       profileId: "analyst-readonly",
 *       spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *       state: {
 *         contributorSummary: {
 *           criticalCount: 1,
 *           warningCount: 3
 *         },
 *         transitionedAt: "2026-09-17T09:11:52Z",
 *         value: "CRITICAL"
 *       },
 *       updatedAt: "2026-09-17T09:11:52Z"
 *     },
 *     {
 *       alertArn: "arn:aws:cloudwatch:us-east-1:123456789012:alert/d4e5f6a78b9c4d0e9f1a2b3c4d5e6f70",
 *       alertId: "d4e5f6a78b9c4d0e9f1a2b3c4d5e6f70",
 *       createdAt: "2026-09-16T14:22:31Z",
 *       name: "service-checkout-5xx-responses",
 *       notificationStatus: "DISABLED",
 *       profileId: "analyst-readonly",
 *       spaceId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *       state: {
 *         data: {
 *           thresholdBreached: 14.0
 *         },
 *         transitionedAt: "2026-09-17T09:11:52Z",
 *         value: "WARNING"
 *       },
 *       updatedAt: "2026-09-16T14:22:31Z"
 *     }
 *   ],
 *   nextToken: "eyJvZmZzZXQiOjIwfQ=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAlertsCommand extends command<ListAlertsCommandInput, ListAlertsCommandOutput>(
  _ep0,
  _mw0,
  "ListAlerts",
  ListAlerts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAlertsInput;
      output: ListAlertsOutput;
    };
    sdk: {
      input: ListAlertsCommandInput;
      output: ListAlertsCommandOutput;
    };
  };
}
