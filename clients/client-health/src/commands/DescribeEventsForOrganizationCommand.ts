// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import type { DescribeEventsForOrganizationRequest, DescribeEventsForOrganizationResponse } from "../models/models_0";
import { DescribeEventsForOrganization } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventsForOrganizationCommand}.
 */
export interface DescribeEventsForOrganizationCommandInput extends DescribeEventsForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventsForOrganizationCommand}.
 */
export interface DescribeEventsForOrganizationCommandOutput
  extends DescribeEventsForOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about events across your organization in Organizations. You can use
 *             the<code>filters</code> parameter to specify the events that you want to return. Events
 *          are returned in a summary form and don't include the affected accounts, detailed
 *          description, any additional metadata that depends on the event type, or any affected
 *          resources. To retrieve that information, use the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html">DescribeAffectedAccountsForOrganization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>If you don't specify a <code>filter</code>, the
 *             <code>DescribeEventsForOrganizations</code> returns all events across your organization.
 *          Results are sorted by <code>lastModifiedTime</code>, starting with the most recent event. </p>
 *          <p>For more information about the different types of Health events, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a>.</p>
 *          <p>Before you can call this operation, you must first enable Health to work with
 *          Organizations. To do this, call the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> operation from your organization's
 *          management account.</p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventsForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventsForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // import type { HealthClientConfig } from "@aws-sdk/client-health";
 * const config = {}; // type is HealthClientConfig
 * const client = new HealthClient(config);
 * const input = { // DescribeEventsForOrganizationRequest
 *   filter: { // OrganizationEventFilter
 *     actionabilities: [ // EventActionabilityList
 *       "ACTION_REQUIRED" || "ACTION_MAY_BE_REQUIRED" || "INFORMATIONAL",
 *     ],
 *     eventTypeCodes: [ // eventTypeList2
 *       "STRING_VALUE",
 *     ],
 *     awsAccountIds: [ // awsAccountIdsList
 *       "STRING_VALUE",
 *     ],
 *     services: [ // serviceList
 *       "STRING_VALUE",
 *     ],
 *     regions: [ // regionList
 *       "STRING_VALUE",
 *     ],
 *     startTime: { // DateTimeRange
 *       from: new Date("TIMESTAMP"),
 *       to: new Date("TIMESTAMP"),
 *     },
 *     endTime: {
 *       from: new Date("TIMESTAMP"),
 *       to: new Date("TIMESTAMP"),
 *     },
 *     lastUpdatedTime: {
 *       from: new Date("TIMESTAMP"),
 *       to: new Date("TIMESTAMP"),
 *     },
 *     entityArns: [ // entityArnList
 *       "STRING_VALUE",
 *     ],
 *     entityValues: [ // entityValueList
 *       "STRING_VALUE",
 *     ],
 *     eventTypeCategories: [ // eventTypeCategoryList2
 *       "issue" || "accountNotification" || "scheduledChange" || "investigation",
 *     ],
 *     eventStatusCodes: [ // eventStatusCodeList
 *       "open" || "closed" || "upcoming",
 *     ],
 *     personas: [ // EventPersonaList
 *       "OPERATIONS" || "SECURITY" || "BILLING",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   locale: "STRING_VALUE",
 * };
 * const command = new DescribeEventsForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventsForOrganizationResponse
 * //   events: [ // OrganizationEventList
 * //     { // OrganizationEvent
 * //       arn: "STRING_VALUE",
 * //       service: "STRING_VALUE",
 * //       eventTypeCode: "STRING_VALUE",
 * //       eventTypeCategory: "issue" || "accountNotification" || "scheduledChange" || "investigation",
 * //       eventScopeCode: "PUBLIC" || "ACCOUNT_SPECIFIC" || "NONE",
 * //       region: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"),
 * //       statusCode: "open" || "closed" || "upcoming",
 * //       actionability: "ACTION_REQUIRED" || "ACTION_MAY_BE_REQUIRED" || "INFORMATIONAL",
 * //       personas: [ // EventPersonaList
 * //         "OPERATIONS" || "SECURITY" || "BILLING",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEventsForOrganizationCommandInput - {@link DescribeEventsForOrganizationCommandInput}
 * @returns {@link DescribeEventsForOrganizationCommandOutput}
 * @see {@link DescribeEventsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeEventsForOrganizationCommandOutput} for command's `response` shape.
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
export class DescribeEventsForOrganizationCommand extends $Command
  .classBuilder<
    DescribeEventsForOrganizationCommandInput,
    DescribeEventsForOrganizationCommandOutput,
    HealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHealth_20160804", "DescribeEventsForOrganization", {})
  .n("HealthClient", "DescribeEventsForOrganizationCommand")
  .sc(DescribeEventsForOrganization)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventsForOrganizationRequest;
      output: DescribeEventsForOrganizationResponse;
    };
    sdk: {
      input: DescribeEventsForOrganizationCommandInput;
      output: DescribeEventsForOrganizationCommandOutput;
    };
  };
}
