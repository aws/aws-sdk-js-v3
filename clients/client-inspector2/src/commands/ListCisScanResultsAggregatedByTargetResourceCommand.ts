// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  ListCisScanResultsAggregatedByTargetResourceRequest,
  ListCisScanResultsAggregatedByTargetResourceResponse,
} from "../models/models_1";
import {
  de_ListCisScanResultsAggregatedByTargetResourceCommand,
  se_ListCisScanResultsAggregatedByTargetResourceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCisScanResultsAggregatedByTargetResourceCommand}.
 */
export interface ListCisScanResultsAggregatedByTargetResourceCommandInput
  extends ListCisScanResultsAggregatedByTargetResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListCisScanResultsAggregatedByTargetResourceCommand}.
 */
export interface ListCisScanResultsAggregatedByTargetResourceCommandOutput
  extends ListCisScanResultsAggregatedByTargetResourceResponse,
    __MetadataBearer {}

/**
 * <p>Lists scan results aggregated by a target resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListCisScanResultsAggregatedByTargetResourceCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListCisScanResultsAggregatedByTargetResourceCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // ListCisScanResultsAggregatedByTargetResourceRequest
 *   scanArn: "STRING_VALUE", // required
 *   filterCriteria: { // CisScanResultsAggregatedByTargetResourceFilterCriteria
 *     accountIdFilters: [ // AccountIdFilterList
 *       { // CisStringFilter
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     statusFilters: [ // CisResultStatusFilterList
 *       { // CisResultStatusFilter
 *         comparison: "EQUALS", // required
 *         value: "PASSED" || "FAILED" || "SKIPPED", // required
 *       },
 *     ],
 *     checkIdFilters: [ // CheckIdFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     targetResourceIdFilters: [ // ResourceIdFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     targetResourceTagFilters: [ // ResourceTagFilterList
 *       { // TagFilter
 *         comparison: "EQUALS", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     platformFilters: [ // PlatformFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     targetStatusFilters: [ // TargetStatusFilterList
 *       { // CisTargetStatusFilter
 *         comparison: "EQUALS", // required
 *         value: "TIMED_OUT" || "CANCELLED" || "COMPLETED", // required
 *       },
 *     ],
 *     targetStatusReasonFilters: [ // TargetStatusReasonFilterList
 *       { // CisTargetStatusReasonFilter
 *         comparison: "EQUALS", // required
 *         value: "SCAN_IN_PROGRESS" || "UNSUPPORTED_OS" || "SSM_UNMANAGED", // required
 *       },
 *     ],
 *     failedChecksFilters: [ // CisNumberFilterList
 *       { // CisNumberFilter
 *         upperInclusive: Number("int"),
 *         lowerInclusive: Number("int"),
 *       },
 *     ],
 *   },
 *   sortBy: "RESOURCE_ID" || "FAILED_COUNTS" || "ACCOUNT_ID" || "PLATFORM" || "TARGET_STATUS" || "TARGET_STATUS_REASON",
 *   sortOrder: "ASC" || "DESC",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCisScanResultsAggregatedByTargetResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListCisScanResultsAggregatedByTargetResourceResponse
 * //   targetResourceAggregations: [ // CisTargetResourceAggregationList
 * //     { // CisTargetResourceAggregation
 * //       scanArn: "STRING_VALUE", // required
 * //       targetResourceId: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       targetResourceTags: { // TargetResourceTags
 * //         "<keys>": [ // TagValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       statusCounts: { // StatusCounts
 * //         failed: Number("int"),
 * //         skipped: Number("int"),
 * //         passed: Number("int"),
 * //       },
 * //       platform: "STRING_VALUE",
 * //       targetStatus: "TIMED_OUT" || "CANCELLED" || "COMPLETED",
 * //       targetStatusReason: "SCAN_IN_PROGRESS" || "UNSUPPORTED_OS" || "SSM_UNMANAGED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCisScanResultsAggregatedByTargetResourceCommandInput - {@link ListCisScanResultsAggregatedByTargetResourceCommandInput}
 * @returns {@link ListCisScanResultsAggregatedByTargetResourceCommandOutput}
 * @see {@link ListCisScanResultsAggregatedByTargetResourceCommandInput} for command's `input` shape.
 * @see {@link ListCisScanResultsAggregatedByTargetResourceCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class ListCisScanResultsAggregatedByTargetResourceCommand extends $Command
  .classBuilder<
    ListCisScanResultsAggregatedByTargetResourceCommandInput,
    ListCisScanResultsAggregatedByTargetResourceCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "ListCisScanResultsAggregatedByTargetResource", {})
  .n("Inspector2Client", "ListCisScanResultsAggregatedByTargetResourceCommand")
  .f(void 0, void 0)
  .ser(se_ListCisScanResultsAggregatedByTargetResourceCommand)
  .de(de_ListCisScanResultsAggregatedByTargetResourceCommand)
  .build() {}
