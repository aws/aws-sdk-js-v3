// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutSegmentSubscriptionRequest, PutSegmentSubscriptionResponse } from "../models/models_1";
import { PutSegmentSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutSegmentSubscriptionCommand}.
 */
export interface PutSegmentSubscriptionCommandInput extends PutSegmentSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link PutSegmentSubscriptionCommand}.
 */
export interface PutSegmentSubscriptionCommandOutput extends PutSegmentSubscriptionResponse, __MetadataBearer {}

/**
 * Creates or updates a segment subscription for membership events. When a subscription is created, an initial snapshot is taken and the system begins monitoring for membership changes.
 *
 * You can optionally set a schedule configuration interval to control how often membership snapshots are run. The interval can be from 1 to 24 hours. If not set, the interval defaults to 24 hours. Scheduled snapshots run on a best-effort basis. If a scheduled snapshot takes longer than the configured interval, the next scheduled run does not start until the in-progress snapshot completes, so a run might be delayed or skipped and is not guaranteed to occur at exactly the requested time.
 *
 * For Classic segments, membership events are generated from these scheduled snapshots and also in near real-time as profile attribute changes occur. For SQL segments, membership events are generated only from the scheduled snapshots.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, PutSegmentSubscriptionCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, PutSegmentSubscriptionCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // PutSegmentSubscriptionRequest
 *   DomainName: "STRING_VALUE", // required
 *   SegmentDefinitionName: "STRING_VALUE", // required
 *   ScheduleConfiguration: { // ScheduleConfiguration
 *     Interval: Number("int"), // required
 *     Unit: "HOURLY",
 *   },
 * };
 * const command = new PutSegmentSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // PutSegmentSubscriptionResponse
 * //   Status: "STARTING" || "RUNNING" || "STOPPED" || "FAILED",
 * //   ScheduleConfiguration: { // ScheduleConfiguration
 * //     Interval: Number("int"), // required
 * //     Unit: "HOURLY",
 * //   },
 * //   StartedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param PutSegmentSubscriptionCommandInput - {@link PutSegmentSubscriptionCommandInput}
 * @returns {@link PutSegmentSubscriptionCommandOutput}
 * @see {@link PutSegmentSubscriptionCommandInput} for command's `input` shape.
 * @see {@link PutSegmentSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class PutSegmentSubscriptionCommand extends command<PutSegmentSubscriptionCommandInput, PutSegmentSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "PutSegmentSubscription",
  PutSegmentSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSegmentSubscriptionRequest;
      output: PutSegmentSubscriptionResponse;
    };
    sdk: {
      input: PutSegmentSubscriptionCommandInput;
      output: PutSegmentSubscriptionCommandOutput;
    };
  };
}
