// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTimelineEventsInput, ListTimelineEventsOutput } from "../models/models_0";
import { ListTimelineEvents } from "../schemas/schemas_1_List";
import { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTimelineEventsCommand}.
 */
export interface ListTimelineEventsCommandInput extends ListTimelineEventsInput {}
/**
 * @public
 *
 * The output of {@link ListTimelineEventsCommand}.
 */
export interface ListTimelineEventsCommandOutput extends ListTimelineEventsOutput, __MetadataBearer {}

/**
 * <p>Lists timeline events for the specified incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, ListTimelineEventsCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, ListTimelineEventsCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // ListTimelineEventsInput
 *   incidentRecordArn: "STRING_VALUE", // required
 *   filters: [ // FilterList
 *     { // Filter
 *       key: "STRING_VALUE", // required
 *       condition: { // Condition Union: only one key present
 *         before: new Date("TIMESTAMP"),
 *         after: new Date("TIMESTAMP"),
 *         equals: { // AttributeValueList Union: only one key present
 *           stringValues: [ // StringList
 *             "STRING_VALUE",
 *           ],
 *           integerValues: [ // IntegerList
 *             Number("int"),
 *           ],
 *         },
 *       },
 *     },
 *   ],
 *   sortBy: "STRING_VALUE",
 *   sortOrder: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTimelineEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListTimelineEventsOutput
 * //   eventSummaries: [ // EventSummaryList // required
 * //     { // EventSummary
 * //       incidentRecordArn: "STRING_VALUE", // required
 * //       eventId: "STRING_VALUE", // required
 * //       eventTime: new Date("TIMESTAMP"), // required
 * //       eventUpdatedTime: new Date("TIMESTAMP"), // required
 * //       eventType: "STRING_VALUE", // required
 * //       eventReferences: [ // EventReferenceList
 * //         { // EventReference Union: only one key present
 * //           resource: "STRING_VALUE",
 * //           relatedItemId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTimelineEventsCommandInput - {@link ListTimelineEventsCommandInput}
 * @returns {@link ListTimelineEventsCommandOutput}
 * @see {@link ListTimelineEventsCommandInput} for command's `input` shape.
 * @see {@link ListTimelineEventsCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 *
 * @public
 */
export class ListTimelineEventsCommand extends $Command
  .classBuilder<
    ListTimelineEventsCommandInput,
    ListTimelineEventsCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMIncidents", "ListTimelineEvents", {})
  .n("SSMIncidentsClient", "ListTimelineEventsCommand")
  .sc(ListTimelineEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTimelineEventsInput;
      output: ListTimelineEventsOutput;
    };
    sdk: {
      input: ListTimelineEventsCommandInput;
      output: ListTimelineEventsCommandOutput;
    };
  };
}
