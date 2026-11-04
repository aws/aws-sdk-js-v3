// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSegmentSubscriptionRequest, GetSegmentSubscriptionResponse } from "../models/models_0";
import { GetSegmentSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSegmentSubscriptionCommand}.
 */
export interface GetSegmentSubscriptionCommandInput extends GetSegmentSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link GetSegmentSubscriptionCommand}.
 */
export interface GetSegmentSubscriptionCommandOutput extends GetSegmentSubscriptionResponse, __MetadataBearer {}

/**
 * Returns the current subscription configuration, execution schedule, and status for segment membership events.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetSegmentSubscriptionCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetSegmentSubscriptionCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetSegmentSubscriptionRequest
 *   DomainName: "STRING_VALUE", // required
 *   SegmentDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new GetSegmentSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // GetSegmentSubscriptionResponse
 * //   Status: "STARTING" || "RUNNING" || "STOPPED" || "FAILED",
 * //   Message: "STRING_VALUE",
 * //   ScheduleConfiguration: { // ScheduleConfiguration
 * //     Interval: Number("int"), // required
 * //     Unit: "HOURLY",
 * //   },
 * //   ScheduledExecutions: { // ScheduledExecutions
 * //     NextExecutedAt: new Date("TIMESTAMP"),
 * //     LastExecutedAt: new Date("TIMESTAMP"),
 * //   },
 * //   StartedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetSegmentSubscriptionCommandInput - {@link GetSegmentSubscriptionCommandInput}
 * @returns {@link GetSegmentSubscriptionCommandOutput}
 * @see {@link GetSegmentSubscriptionCommandInput} for command's `input` shape.
 * @see {@link GetSegmentSubscriptionCommandOutput} for command's `response` shape.
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
export class GetSegmentSubscriptionCommand extends command<GetSegmentSubscriptionCommandInput, GetSegmentSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "GetSegmentSubscription",
  GetSegmentSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSegmentSubscriptionRequest;
      output: GetSegmentSubscriptionResponse;
    };
    sdk: {
      input: GetSegmentSubscriptionCommandInput;
      output: GetSegmentSubscriptionCommandOutput;
    };
  };
}
