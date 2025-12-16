// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListInsightsDataRequest, ListInsightsDataResponse } from "../models/models_0";
import { ListInsightsData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInsightsDataCommand}.
 */
export interface ListInsightsDataCommandInput extends ListInsightsDataRequest {}
/**
 * @public
 *
 * The output of {@link ListInsightsDataCommand}.
 */
export interface ListInsightsDataCommandOutput extends ListInsightsDataResponse, __MetadataBearer {}

/**
 * <p>Returns Insights events generated on a trail that logs data events. You can list Insights events that occurred in a Region within the last 90 days.</p>
 *          <p>ListInsightsData supports the following Dimensions for Insights events:</p>
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
 *          <p>All dimensions are optional. The default number of results returned is 50, with a
 *          maximum of 50 possible. The response includes a token that you can use to get the next page
 *          of results.</p>
 *          <p>The rate of ListInsightsData requests is limited to two per second, per account, per Region. If
 *             this limit is exceeded, a throttling error occurs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListInsightsDataCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListInsightsDataCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // ListInsightsDataRequest
 *   InsightSource: "STRING_VALUE", // required
 *   DataType: "InsightsEvents", // required
 *   Dimensions: { // ListInsightsDataDimensions
 *     "<keys>": "STRING_VALUE",
 *   },
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInsightsDataCommand(input);
 * const response = await client.send(command);
 * // { // ListInsightsDataResponse
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
 * @param ListInsightsDataCommandInput - {@link ListInsightsDataCommandInput}
 * @returns {@link ListInsightsDataCommandOutput}
 * @see {@link ListInsightsDataCommandInput} for command's `input` shape.
 * @see {@link ListInsightsDataCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
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
export class ListInsightsDataCommand extends $Command
  .classBuilder<
    ListInsightsDataCommandInput,
    ListInsightsDataCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "ListInsightsData", {})
  .n("CloudTrailClient", "ListInsightsDataCommand")
  .sc(ListInsightsData$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInsightsDataRequest;
      output: ListInsightsDataResponse;
    };
    sdk: {
      input: ListInsightsDataCommandInput;
      output: ListInsightsDataCommandOutput;
    };
  };
}
