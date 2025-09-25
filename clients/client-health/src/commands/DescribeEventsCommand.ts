// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventsRequest, DescribeEventsResponse } from "../models/models_0";
import { DescribeEvents } from "../schemas/schemas_1_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventsCommand}.
 */
export interface DescribeEventsCommandInput extends DescribeEventsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventsCommand}.
 */
export interface DescribeEventsCommandOutput extends DescribeEventsResponse, __MetadataBearer {}

/**
 * <p> Returns information about events that meet the specified filter criteria. Events are
 *          returned in a summary form and do not include the detailed description, any additional
 *          metadata that depends on the event type, or any affected resources. To retrieve that
 *          information, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operations.</p>
 *          <p>If no filter criteria are specified, all events are returned. Results are sorted by
 *             <code>lastModifiedTime</code>, starting with the most recent event.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>When you call the <code>DescribeEvents</code> operation and specify an entity
 *                   for the <code>entityValues</code> parameter, Health might return public
 *                   events that aren't specific to that resource. For example, if you call
 *                      <code>DescribeEvents</code> and specify an ID for an Amazon Elastic Compute Cloud (Amazon EC2)
 *                   instance, Health might return events that aren't specific to that resource or
 *                   service. To get events that are specific to a service, use the
 *                      <code>services</code> parameter in the <code>filter</code> object. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
 *                </li>
 *                <li>
 *                   <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventsCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventsCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = { // DescribeEventsRequest
 *   filter: { // EventFilter
 *     eventArns: [ // eventArnList
 *       "STRING_VALUE",
 *     ],
 *     eventTypeCodes: [ // eventTypeList2
 *       "STRING_VALUE",
 *     ],
 *     services: [ // serviceList
 *       "STRING_VALUE",
 *     ],
 *     regions: [ // regionList
 *       "STRING_VALUE",
 *     ],
 *     availabilityZones: [ // availabilityZones
 *       "STRING_VALUE",
 *     ],
 *     startTimes: [ // dateTimeRangeList
 *       { // DateTimeRange
 *         from: new Date("TIMESTAMP"),
 *         to: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     endTimes: [
 *       {
 *         from: new Date("TIMESTAMP"),
 *         to: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     lastUpdatedTimes: [
 *       {
 *         from: new Date("TIMESTAMP"),
 *         to: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     entityArns: [ // entityArnList
 *       "STRING_VALUE",
 *     ],
 *     entityValues: [ // entityValueList
 *       "STRING_VALUE",
 *     ],
 *     eventTypeCategories: [ // eventTypeCategoryList2
 *       "issue" || "accountNotification" || "scheduledChange" || "investigation",
 *     ],
 *     tags: [ // tagFilter
 *       { // tagSet
 *         "<keys>": "STRING_VALUE",
 *       },
 *     ],
 *     eventStatusCodes: [ // eventStatusCodeList
 *       "open" || "closed" || "upcoming",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   locale: "STRING_VALUE",
 * };
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventsResponse
 * //   events: [ // EventList
 * //     { // Event
 * //       arn: "STRING_VALUE",
 * //       service: "STRING_VALUE",
 * //       eventTypeCode: "STRING_VALUE",
 * //       eventTypeCategory: "issue" || "accountNotification" || "scheduledChange" || "investigation",
 * //       region: "STRING_VALUE",
 * //       availabilityZone: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       statusCode: "open" || "closed" || "upcoming",
 * //       eventScopeCode: "PUBLIC" || "ACCOUNT_SPECIFIC" || "NONE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEventsCommandInput - {@link DescribeEventsCommandInput}
 * @returns {@link DescribeEventsCommandOutput}
 * @see {@link DescribeEventsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventsCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 *
 * @throws {@link UnsupportedLocale} (client fault)
 *  <p>The specified locale is not supported.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DescribeEventsCommand extends $Command
  .classBuilder<
    DescribeEventsCommandInput,
    DescribeEventsCommandOutput,
    HealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHealth_20160804", "DescribeEvents", {})
  .n("HealthClient", "DescribeEventsCommand")
  .sc(DescribeEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventsRequest;
      output: DescribeEventsResponse;
    };
    sdk: {
      input: DescribeEventsCommandInput;
      output: DescribeEventsCommandOutput;
    };
  };
}
