// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  ListCisScanResultsAggregatedByChecksRequest,
  ListCisScanResultsAggregatedByChecksResponse,
} from "../models/models_1";
import { ListCisScanResultsAggregatedByChecks } from "../schemas/schemas_12_Cis";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCisScanResultsAggregatedByChecksCommand}.
 */
export interface ListCisScanResultsAggregatedByChecksCommandInput extends ListCisScanResultsAggregatedByChecksRequest {}
/**
 * @public
 *
 * The output of {@link ListCisScanResultsAggregatedByChecksCommand}.
 */
export interface ListCisScanResultsAggregatedByChecksCommandOutput
  extends ListCisScanResultsAggregatedByChecksResponse,
    __MetadataBearer {}

/**
 * <p>Lists scan results aggregated by checks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListCisScanResultsAggregatedByChecksCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListCisScanResultsAggregatedByChecksCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // ListCisScanResultsAggregatedByChecksRequest
 *   scanArn: "STRING_VALUE", // required
 *   filterCriteria: { // CisScanResultsAggregatedByChecksFilterCriteria
 *     accountIdFilters: [ // OneAccountIdFilterList
 *       { // CisStringFilter
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     checkIdFilters: [ // CheckIdFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     titleFilters: [ // TitleFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     platformFilters: [ // PlatformFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     failedResourcesFilters: [ // CisNumberFilterList
 *       { // CisNumberFilter
 *         upperInclusive: Number("int"),
 *         lowerInclusive: Number("int"),
 *       },
 *     ],
 *     securityLevelFilters: [ // CisSecurityLevelFilterList
 *       { // CisSecurityLevelFilter
 *         comparison: "EQUALS", // required
 *         value: "LEVEL_1" || "LEVEL_2", // required
 *       },
 *     ],
 *   },
 *   sortBy: "CHECK_ID" || "TITLE" || "PLATFORM" || "FAILED_COUNTS" || "SECURITY_LEVEL",
 *   sortOrder: "ASC" || "DESC",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCisScanResultsAggregatedByChecksCommand(input);
 * const response = await client.send(command);
 * // { // ListCisScanResultsAggregatedByChecksResponse
 * //   checkAggregations: [ // CisCheckAggregationList
 * //     { // CisCheckAggregation
 * //       scanArn: "STRING_VALUE", // required
 * //       checkId: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       checkDescription: "STRING_VALUE",
 * //       level: "LEVEL_1" || "LEVEL_2",
 * //       accountId: "STRING_VALUE",
 * //       statusCounts: { // StatusCounts
 * //         failed: Number("int"),
 * //         skipped: Number("int"),
 * //         passed: Number("int"),
 * //       },
 * //       platform: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCisScanResultsAggregatedByChecksCommandInput - {@link ListCisScanResultsAggregatedByChecksCommandInput}
 * @returns {@link ListCisScanResultsAggregatedByChecksCommandOutput}
 * @see {@link ListCisScanResultsAggregatedByChecksCommandInput} for command's `input` shape.
 * @see {@link ListCisScanResultsAggregatedByChecksCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
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
 *
 * @example Sample ListCisScanResultsAggregatedByChecks Call
 * ```javascript
 * //
 * const input = {
 *   scanArn: "arn:aws:inspector2:us-east-1:123412341234:owner/123412341234/cis-scan/624b746d-e080-44ae-8c1d-48e653365a38"
 * };
 * const command = new ListCisScanResultsAggregatedByChecksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   checkAggregations: [
 *     {
 *       accountId: "123412341234",
 *       checkDescription: "description",
 *       checkId: "1.1.1.1",
 *       level: "LEVEL_1",
 *       platform: "AMAZON_LINUX_2",
 *       scanArn: "arn:aws:inspector2:us-east-1:123412341234:owner/123412341234/cis-scan/624b746d-e080-44ae-8c1d-48e653365a38",
 *       statusCounts: {
 *         failed: 0,
 *         passed: 2,
 *         skipped: 1
 *       },
 *       title: "title1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListCisScanResultsAggregatedByChecksCommand extends $Command
  .classBuilder<
    ListCisScanResultsAggregatedByChecksCommandInput,
    ListCisScanResultsAggregatedByChecksCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "ListCisScanResultsAggregatedByChecks", {})
  .n("Inspector2Client", "ListCisScanResultsAggregatedByChecksCommand")
  .sc(ListCisScanResultsAggregatedByChecks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCisScanResultsAggregatedByChecksRequest;
      output: ListCisScanResultsAggregatedByChecksResponse;
    };
    sdk: {
      input: ListCisScanResultsAggregatedByChecksCommandInput;
      output: ListCisScanResultsAggregatedByChecksCommandOutput;
    };
  };
}
