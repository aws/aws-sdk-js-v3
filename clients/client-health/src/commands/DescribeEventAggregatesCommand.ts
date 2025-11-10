// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventAggregatesRequest, DescribeEventAggregatesResponse } from "../models/models_0";
import { DescribeEventAggregates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventAggregatesCommand}.
 */
export interface DescribeEventAggregatesCommandInput extends DescribeEventAggregatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventAggregatesCommand}.
 */
export interface DescribeEventAggregatesCommandOutput extends DescribeEventAggregatesResponse, __MetadataBearer {}

/**
 * <p>Returns the number of events of each event type (issue, scheduled change, and account
 *          notification). If no filter is specified, the counts of all events in each category are
 *          returned.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventAggregatesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventAggregatesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = { // DescribeEventAggregatesRequest
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
 *   aggregateField: "eventTypeCategory", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeEventAggregatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventAggregatesResponse
 * //   eventAggregates: [ // EventAggregateList
 * //     { // EventAggregate
 * //       aggregateValue: "STRING_VALUE",
 * //       count: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEventAggregatesCommandInput - {@link DescribeEventAggregatesCommandInput}
 * @returns {@link DescribeEventAggregatesCommandOutput}
 * @see {@link DescribeEventAggregatesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventAggregatesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DescribeEventAggregatesCommand extends $Command
  .classBuilder<
    DescribeEventAggregatesCommandInput,
    DescribeEventAggregatesCommandOutput,
    HealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHealth_20160804", "DescribeEventAggregates", {})
  .n("HealthClient", "DescribeEventAggregatesCommand")
  .sc(DescribeEventAggregates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventAggregatesRequest;
      output: DescribeEventAggregatesResponse;
    };
    sdk: {
      input: DescribeEventAggregatesCommandInput;
      output: DescribeEventAggregatesCommandOutput;
    };
  };
}
