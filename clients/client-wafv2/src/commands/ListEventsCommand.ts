// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEventsRequest, ListEventsResponse } from "../models/models_0";
import { ListEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEventsCommand}.
 */
export interface ListEventsCommandInput extends ListEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventsCommand}.
 */
export interface ListEventsCommandOutput extends ListEventsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of event summaries for your account. Use this operation to monitor and investigate potential threats to the resources that your web ACLs protect. Results are paginated. Use the <code>NextMarker</code> value from the response to retrieve the next batch of results. Currently, this operation supports API Security Amazon Web Services Managed Rules.</p>
 *          <p>You can filter the results by time window, event category, resource, and API pattern, and sort them by start time, end time, or confidence.</p>
 *          <p>To retrieve the events for a single web ACL, use <a>ListEventsByWebACL</a>. To retrieve the full details of a single event, use <a>GetEvent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, ListEventsCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, ListEventsCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * // import type { WAFV2ClientConfig } from "@aws-sdk/client-wafv2";
 * const config = {}; // type is WAFV2ClientConfig
 * const client = new WAFV2Client(config);
 * const input = { // ListEventsRequest
 *   Scope: "CLOUDFRONT" || "REGIONAL", // required
 *   TimeWindow: { // TimeWindow
 *     StartTime: new Date("TIMESTAMP"), // required
 *     EndTime: new Date("TIMESTAMP"), // required
 *   },
 *   Filters: [ // EventFilterList
 *     { // EventFilter
 *       Name: "EVENT_CATEGORY" || "RESOURCE_ARN", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ApiPatternFilters: [ // ApiPatternFilterList
 *     { // ApiPatternFilter
 *       Method: "STRING_VALUE",
 *       PathPattern: "STRING_VALUE",
 *       Port: Number("int"),
 *       Domains: [ // ApiPatternDomainList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Limit: Number("int"),
 *   NextMarker: "STRING_VALUE",
 *   SortOrder: "ASC" || "DESC",
 *   SortBy: "START_TIME" || "END_TIME" || "CONFIDENCE",
 *   Include: [ // EventIncludeFieldList
 *     "TIMELINE",
 *   ],
 * };
 * const command = new ListEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventsResponse
 * //   Events: [ // EventDetailSummaryList // required
 * //     { // EventDetailSummary
 * //       EventId: "STRING_VALUE", // required
 * //       EventStatus: "EVENT_STARTED" || "EVENT_IN_PROGRESS" || "EVENT_COMPLETED" || "EVENT_ENDED",
 * //       EventCategory: "API_SECURITY",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       ResourceArn: "STRING_VALUE",
 * //       WebAclArn: "STRING_VALUE",
 * //       ApiSecurityEventDetail: { // ApiSecurityEventDetail
 * //         Label: "STRING_VALUE",
 * //         Category: "STRING_VALUE",
 * //         Confidence: "LOW" || "MEDIUM" || "HIGH",
 * //         ApiPatterns: [ // ApiPatternList
 * //           { // ApiPattern
 * //             Method: "STRING_VALUE",
 * //             PathPattern: "STRING_VALUE",
 * //             Port: Number("int"),
 * //             Domains: [ // DomainList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         EventActors: [ // EventActorReferenceList
 * //           { // EventActorReference
 * //             EventActorId: "STRING_VALUE",
 * //             EventActorValue: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Timeline: [ // EventTimelineEntryList
 * //           { // EventTimelineEntry
 * //             ChangeTime: new Date("TIMESTAMP"),
 * //             Label: "STRING_VALUE",
 * //             Confidence: "LOW" || "MEDIUM" || "HIGH",
 * //             ApiPatterns: [
 * //               {
 * //                 Method: "STRING_VALUE",
 * //                 PathPattern: "STRING_VALUE",
 * //                 Port: Number("int"),
 * //                 Domains: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventsCommandInput - {@link ListEventsCommandInput}
 * @returns {@link ListEventsCommandOutput}
 * @see {@link ListEventsCommandInput} for command's `input` shape.
 * @see {@link ListEventsCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for WAFV2Client's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>Your request is valid, but WAF couldn’t perform the operation because of a system
 *          problem. Retry your request. </p>
 *
 * @throws {@link WAFInvalidOperationException} (client fault)
 *  <p>The operation isn't valid. </p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because WAF didn't recognize a parameter in the request. For
 *          example: </p>
 *          <ul>
 *             <li>
 *                <p>You specified a parameter name or value that isn't valid.</p>
 *             </li>
 *             <li>
 *                <p>Your nested statement isn't valid. You might have tried to nest a statement that
 *                can’t be nested. </p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>DefaultAction</code> that
 *                isn't among the types available at <a>DefaultAction</a>.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                with which a web ACL can't be associated.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link WAFV2ServiceException}
 * <p>Base exception class for all service exceptions from WAFV2 service.</p>
 *
 *
 * @public
 */
export class ListEventsCommand extends command<ListEventsCommandInput, ListEventsCommandOutput>(
  _ep0,
  _mw0,
  "ListEvents",
  ListEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventsRequest;
      output: ListEventsResponse;
    };
    sdk: {
      input: ListEventsCommandInput;
      output: ListEventsCommandOutput;
    };
  };
}
