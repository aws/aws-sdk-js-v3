// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { LookupEventsRequest, LookupEventsResponse } from "../models/models_0";
import { LookupEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link LookupEventsCommand}.
 */
export interface LookupEventsCommandInput extends LookupEventsRequest {}
/**
 * @public
 *
 * The output of {@link LookupEventsCommand}.
 */
export interface LookupEventsCommandOutput extends LookupEventsResponse, __MetadataBearer {}

/**
 * Looks up [management events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events) or [CloudTrail Insights events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events) that are captured by CloudTrail. You can look up events that occurred in a Region within the last 90 days.
 *
 * > **Note:** `LookupEvents` returns recent Insights events for trails that enable Insights. To view Insights events for an event data store, you can run queries on your Insights event data store, and you can also view the Lake dashboard for Insights.
 *
 * Lookup supports the following attributes for management events:
 *
 * - Amazon Web Services access key
 * - Event ID
 * - Event name
 * - Event source
 * - Read only
 * - Resource name
 * - Resource type
 * - User name
 *
 * Lookup supports the following attributes for Insights events:
 *
 * - Event ID
 * - Event name
 * - Event source
 *
 * All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.
 *
 * > **Important:** The rate of lookup requests is limited to two per second, per account, per Region. If this limit is exceeded, a throttling error occurs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, LookupEventsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, LookupEventsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // LookupEventsRequest
 *   LookupAttributes: [ // LookupAttributesList
 *     { // LookupAttribute
 *       AttributeKey: "EventId" || "EventName" || "ReadOnly" || "Username" || "ResourceType" || "ResourceName" || "EventSource" || "AccessKeyId", // required
 *       AttributeValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   EventCategory: "insight",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new LookupEventsCommand(input);
 * const response = await client.send(command);
 * // { // LookupEventsResponse
 * //   Events: [ // EventsList
 * //     { // Event
 * //       EventId: "STRING_VALUE",
 * //       EventName: "STRING_VALUE",
 * //       ReadOnly: "STRING_VALUE",
 * //       AccessKeyId: "STRING_VALUE",
 * //       EventTime: new Date("TIMESTAMP"),
 * //       EventSource: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //       Resources: [ // ResourceList
 * //         { // Resource
 * //           ResourceType: "STRING_VALUE",
 * //           ResourceName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CloudTrailEvent: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param LookupEventsCommandInput - {@link LookupEventsCommandInput}
 * @returns {@link LookupEventsCommandOutput}
 * @see {@link LookupEventsCommandInput} for command's `input` shape.
 * @see {@link LookupEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link InvalidEventCategoryException} (client fault)
 *
 * Occurs if an event category that is not valid is specified as a value of `EventCategory`.
 *
 * @throws {@link InvalidLookupAttributesException} (client fault)
 *
 * Occurs when a lookup attribute is specified that is not valid.
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *
 * This exception is thrown if the limit specified is not valid.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * A token that is not valid, or a token that was previously used in a request with different parameters. This exception is thrown if the token is not valid.
 *
 * @throws {@link InvalidTimeRangeException} (client fault)
 *
 * Occurs if the timestamp values are not valid. Either the start time occurs after the end time, or the time range is outside the range of possible values.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class LookupEventsCommand extends command<LookupEventsCommandInput, LookupEventsCommandOutput>(
  _ep0,
  _mw0,
  "LookupEvents",
  LookupEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: LookupEventsRequest;
      output: LookupEventsResponse;
    };
    sdk: {
      input: LookupEventsCommandInput;
      output: LookupEventsCommandOutput;
    };
  };
}
