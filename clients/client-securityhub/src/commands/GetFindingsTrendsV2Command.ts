// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFindingsTrendsV2Response } from "../models/models_2";
import type { GetFindingsTrendsV2Request } from "../models/models_3";
import { GetFindingsTrendsV2 } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingsTrendsV2Command}.
 */
export interface GetFindingsTrendsV2CommandInput extends GetFindingsTrendsV2Request {}
/**
 * @public
 *
 * The output of {@link GetFindingsTrendsV2Command}.
 */
export interface GetFindingsTrendsV2CommandOutput extends GetFindingsTrendsV2Response, __MetadataBearer {}

/**
 * <p>Returns findings trend data based on the specified criteria. This operation helps you analyze patterns and changes in findings over time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetFindingsTrendsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetFindingsTrendsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetFindingsTrendsV2Request
 *   Filters: { // FindingsTrendsFilters
 *     CompositeFilters: [ // FindingsTrendsCompositeFilterList
 *       { // FindingsTrendsCompositeFilter
 *         StringFilters: [ // FindingsTrendsStringFilterList
 *           { // FindingsTrendsStringFilter
 *             FieldName: "account_id" || "region" || "finding_types" || "finding_status" || "finding_cve_ids" || "finding_compliance_status" || "finding_control_id" || "finding_class_name" || "finding_provider" || "finding_activity_name",
 *             Filter: { // StringFilter
 *               Value: "STRING_VALUE",
 *               Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *             },
 *           },
 *         ],
 *         NestedCompositeFilters: [
 *           {
 *             StringFilters: [
 *               {
 *                 FieldName: "account_id" || "region" || "finding_types" || "finding_status" || "finding_cve_ids" || "finding_compliance_status" || "finding_control_id" || "finding_class_name" || "finding_provider" || "finding_activity_name",
 *                 Filter: {
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                 },
 *               },
 *             ],
 *             NestedCompositeFilters: "<FindingsTrendsCompositeFilterList>",
 *             Operator: "AND" || "OR",
 *           },
 *         ],
 *         Operator: "AND" || "OR",
 *       },
 *     ],
 *     CompositeOperator: "AND" || "OR",
 *   },
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetFindingsTrendsV2Command(input);
 * const response = await client.send(command);
 * // { // GetFindingsTrendsV2Response
 * //   Granularity: "Daily" || "Weekly" || "Monthly", // required
 * //   TrendsMetrics: [ // TrendsMetrics // required
 * //     { // TrendsMetricsResult
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       TrendsValues: { // TrendsValues
 * //         SeverityTrends: { // SeverityTrendsCount
 * //           Unknown: Number("long"), // required
 * //           Informational: Number("long"), // required
 * //           Low: Number("long"), // required
 * //           Medium: Number("long"), // required
 * //           High: Number("long"), // required
 * //           Critical: Number("long"), // required
 * //           Fatal: Number("long"), // required
 * //           Other: Number("long"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFindingsTrendsV2CommandInput - {@link GetFindingsTrendsV2CommandInput}
 * @returns {@link GetFindingsTrendsV2CommandOutput}
 * @see {@link GetFindingsTrendsV2CommandInput} for command's `input` shape.
 * @see {@link GetFindingsTrendsV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class GetFindingsTrendsV2Command extends $Command
  .classBuilder<
    GetFindingsTrendsV2CommandInput,
    GetFindingsTrendsV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "GetFindingsTrendsV2", {})
  .n("SecurityHubClient", "GetFindingsTrendsV2Command")
  .sc(GetFindingsTrendsV2)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingsTrendsV2Request;
      output: GetFindingsTrendsV2Response;
    };
    sdk: {
      input: GetFindingsTrendsV2CommandInput;
      output: GetFindingsTrendsV2CommandOutput;
    };
  };
}
