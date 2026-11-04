// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSegmentSubscriptionEventsRequest, ListSegmentSubscriptionEventsResponse } from "../models/models_1";
import { ListSegmentSubscriptionEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSegmentSubscriptionEventsCommand}.
 */
export interface ListSegmentSubscriptionEventsCommandInput extends ListSegmentSubscriptionEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListSegmentSubscriptionEventsCommand}.
 */
export interface ListSegmentSubscriptionEventsCommandOutput extends ListSegmentSubscriptionEventsResponse, __MetadataBearer {}

/**
 * Returns the most recent membership events for a segment. Each event represents a profile that entered or exited the segment.
 *
 * This operation is paginated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListSegmentSubscriptionEventsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListSegmentSubscriptionEventsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListSegmentSubscriptionEventsRequest
 *   DomainName: "STRING_VALUE", // required
 *   SegmentDefinitionName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSegmentSubscriptionEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListSegmentSubscriptionEventsResponse
 * //   Events: [ // SubscriptionEventsList
 * //     { // SubscriptionEventItem
 * //       ProfileId: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       EventType: "LIVE" || "SCHEDULE",
 * //       Event: "JOINED" || "LEFT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSegmentSubscriptionEventsCommandInput - {@link ListSegmentSubscriptionEventsCommandInput}
 * @returns {@link ListSegmentSubscriptionEventsCommandOutput}
 * @see {@link ListSegmentSubscriptionEventsCommandInput} for command's `input` shape.
 * @see {@link ListSegmentSubscriptionEventsCommandOutput} for command's `response` shape.
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
export class ListSegmentSubscriptionEventsCommand extends command<ListSegmentSubscriptionEventsCommandInput, ListSegmentSubscriptionEventsCommandOutput>(
  _ep0,
  _mw0,
  "ListSegmentSubscriptionEvents",
  ListSegmentSubscriptionEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSegmentSubscriptionEventsRequest;
      output: ListSegmentSubscriptionEventsResponse;
    };
    sdk: {
      input: ListSegmentSubscriptionEventsCommandInput;
      output: ListSegmentSubscriptionEventsCommandOutput;
    };
  };
}
