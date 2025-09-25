// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { LookupEventsRequest, LookupEventsResponse } from "../models/models_0";
import { LookupEvents } from "../schemas/schemas_9_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Looks up <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events">management events</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events">CloudTrail Insights events</a> that are captured by CloudTrail.
 *          You can look up events that occurred in a Region within the last 90 days.</p>
 *          <note>
 *             <p>
 *                <code>LookupEvents</code> returns recent Insights events for trails that enable Insights. To view Insights events for an event data store, you can run queries on your
 *             Insights event data store, and you can also view the Lake dashboard for Insights.</p>
 *          </note>
 *          <p>Lookup supports the following attributes for management events:</p>
 *          <ul>
 *             <li>
 *                <p>Amazon Web Services access key</p>
 *             </li>
 *             <li>
 *                <p>Event ID</p>
 *             </li>
 *             <li>
 *                <p>Event name</p>
 *             </li>
 *             <li>
 *                <p>Event source</p>
 *             </li>
 *             <li>
 *                <p>Read only</p>
 *             </li>
 *             <li>
 *                <p>Resource name</p>
 *             </li>
 *             <li>
 *                <p>Resource type</p>
 *             </li>
 *             <li>
 *                <p>User name</p>
 *             </li>
 *          </ul>
 *          <p>Lookup supports the following attributes for Insights events:</p>
 *          <ul>
 *             <li>
 *                <p>Event ID</p>
 *             </li>
 *             <li>
 *                <p>Event name</p>
 *             </li>
 *             <li>
 *                <p>Event source</p>
 *             </li>
 *          </ul>
 *          <p>All attributes are optional. The default number of results returned is 50, with a
 *          maximum of 50 possible. The response includes a token that you can use to get the next page
 *          of results.</p>
 *          <important>
 *             <p>The rate of lookup requests is limited to two per second, per account, per Region. If
 *             this limit is exceeded, a throttling error occurs.</p>
 *          </important>
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
 *  <p>Occurs if an event category that is not valid is specified as a value of
 *             <code>EventCategory</code>.</p>
 *
 * @throws {@link InvalidLookupAttributesException} (client fault)
 *  <p>Occurs when a lookup attribute is specified that is not valid.</p>
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>This exception is thrown if the limit specified is not valid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>A token that is not valid, or a token that was previously used in a request with
 *          different parameters. This exception is thrown if the token is not valid.</p>
 *
 * @throws {@link InvalidTimeRangeException} (client fault)
 *  <p>Occurs if the timestamp values are not valid. Either the start time occurs after the end
 *          time, or the time range is outside the range of possible values.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class LookupEventsCommand extends $Command
  .classBuilder<
    LookupEventsCommandInput,
    LookupEventsCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "LookupEvents", {})
  .n("CloudTrailClient", "LookupEventsCommand")
  .sc(LookupEvents)
  .build() {
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
