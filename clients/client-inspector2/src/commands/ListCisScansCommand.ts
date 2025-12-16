// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import type { ListCisScansRequest, ListCisScansResponse } from "../models/models_0";
import { ListCisScans$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCisScansCommand}.
 */
export interface ListCisScansCommandInput extends ListCisScansRequest {}
/**
 * @public
 *
 * The output of {@link ListCisScansCommand}.
 */
export interface ListCisScansCommandOutput extends ListCisScansResponse, __MetadataBearer {}

/**
 * <p>Returns a CIS scan list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListCisScansCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListCisScansCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // ListCisScansRequest
 *   filterCriteria: { // ListCisScansFilterCriteria
 *     scanNameFilters: [ // CisScanNameFilterList
 *       { // CisStringFilter
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
 *     targetResourceIdFilters: [ // ResourceIdFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     scanStatusFilters: [ // CisScanStatusFilterList
 *       { // CisScanStatusFilter
 *         comparison: "EQUALS", // required
 *         value: "FAILED" || "COMPLETED" || "CANCELLED" || "IN_PROGRESS", // required
 *       },
 *     ],
 *     scanAtFilters: [ // CisScanDateFilterList
 *       { // CisDateFilter
 *         earliestScanStartTime: new Date("TIMESTAMP"),
 *         latestScanStartTime: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     scanConfigurationArnFilters: [ // CisScanConfigurationArnFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     scanArnFilters: [ // CisScanArnFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     scheduledByFilters: [ // CisScheduledByFilterList
 *       {
 *         comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     failedChecksFilters: [ // CisNumberFilterList
 *       { // CisNumberFilter
 *         upperInclusive: Number("int"),
 *         lowerInclusive: Number("int"),
 *       },
 *     ],
 *     targetAccountIdFilters: [ // AccountIdFilterList
 *       "<CisStringFilter>",
 *     ],
 *   },
 *   detailLevel: "ORGANIZATION" || "MEMBER",
 *   sortBy: "STATUS" || "SCHEDULED_BY" || "SCAN_START_DATE" || "FAILED_CHECKS",
 *   sortOrder: "ASC" || "DESC",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCisScansCommand(input);
 * const response = await client.send(command);
 * // { // ListCisScansResponse
 * //   scans: [ // CisScanList
 * //     { // CisScan
 * //       scanArn: "STRING_VALUE", // required
 * //       scanConfigurationArn: "STRING_VALUE", // required
 * //       status: "FAILED" || "COMPLETED" || "CANCELLED" || "IN_PROGRESS",
 * //       scanName: "STRING_VALUE",
 * //       scanDate: new Date("TIMESTAMP"),
 * //       failedChecks: Number("int"),
 * //       totalChecks: Number("int"),
 * //       targets: { // CisTargets
 * //         accountIds: [ // CisAccountIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         targetResourceTags: { // TargetResourceTags
 * //           "<keys>": [ // TagValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       scheduledBy: "STRING_VALUE",
 * //       securityLevel: "LEVEL_1" || "LEVEL_2",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCisScansCommandInput - {@link ListCisScansCommandInput}
 * @returns {@link ListCisScansCommandOutput}
 * @see {@link ListCisScansCommandInput} for command's `input` shape.
 * @see {@link ListCisScansCommandOutput} for command's `response` shape.
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
 * @example Sample ListCisScans Call
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListCisScansCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   scans: [
 *     {
 *       failedChecks: 2,
 *       scanArn: "arn:aws:inspector2:us-east-1:123412341234:owner/123412341234/cis-scan/624b746d-e080-44ae-8c1d-48e653365a38",
 *       scanConfigurationArn: "arn:aws:inspector2:us-east-1:123412341234:owner/123412341234/cis-configuration/624b746d-e080-44ae-8c1d-48e653365a38",
 *       scanDate: "2023-04-12T23:20:50.52Z",
 *       scanName: "sample",
 *       scheduledBy: "Delegated Admin",
 *       securityLevel: "LEVEL_1",
 *       status: "COMPLETED",
 *       targets: {
 *         accountIds: [
 *           "123412341234"
 *         ],
 *         targetResourceTags: {
 *           key: [
 *             "value"
 *           ]
 *         }
 *       },
 *       totalChecks: 150
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListCisScansCommand extends $Command
  .classBuilder<
    ListCisScansCommandInput,
    ListCisScansCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "ListCisScans", {})
  .n("Inspector2Client", "ListCisScansCommand")
  .sc(ListCisScans$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCisScansRequest;
      output: ListCisScansResponse;
    };
    sdk: {
      input: ListCisScansCommandInput;
      output: ListCisScansCommandOutput;
    };
  };
}
