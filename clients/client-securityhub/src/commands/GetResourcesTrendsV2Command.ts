// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetResourcesTrendsV2Response } from "../models/models_2";
import type { GetResourcesTrendsV2Request } from "../models/models_3";
import { GetResourcesTrendsV2$ } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourcesTrendsV2Command}.
 */
export interface GetResourcesTrendsV2CommandInput extends GetResourcesTrendsV2Request {}
/**
 * @public
 *
 * The output of {@link GetResourcesTrendsV2Command}.
 */
export interface GetResourcesTrendsV2CommandOutput extends GetResourcesTrendsV2Response, __MetadataBearer {}

/**
 * <p>Returns resource trend data based on the specified criteria. This operation helps you analyze patterns and changes in resource compliance over time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetResourcesTrendsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetResourcesTrendsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetResourcesTrendsV2Request
 *   Filters: { // ResourcesTrendsFilters
 *     CompositeFilters: [ // ResourcesTrendsCompositeFilterList
 *       { // ResourcesTrendsCompositeFilter
 *         StringFilters: [ // ResourcesTrendsStringFilterList
 *           { // ResourcesTrendsStringFilter
 *             FieldName: "account_id" || "region" || "resource_type" || "resource_category",
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
 *                 FieldName: "account_id" || "region" || "resource_type" || "resource_category",
 *                 Filter: {
 *                   Value: "STRING_VALUE",
 *                   Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *                 },
 *               },
 *             ],
 *             NestedCompositeFilters: "<ResourcesTrendsCompositeFilterList>",
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
 * const command = new GetResourcesTrendsV2Command(input);
 * const response = await client.send(command);
 * // { // GetResourcesTrendsV2Response
 * //   Granularity: "Daily" || "Weekly" || "Monthly", // required
 * //   TrendsMetrics: [ // ResourcesTrendsMetrics // required
 * //     { // ResourcesTrendsMetricsResult
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       TrendsValues: { // ResourcesTrendsValues
 * //         ResourcesCount: { // ResourcesCount
 * //           AllResources: Number("long"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourcesTrendsV2CommandInput - {@link GetResourcesTrendsV2CommandInput}
 * @returns {@link GetResourcesTrendsV2CommandOutput}
 * @see {@link GetResourcesTrendsV2CommandInput} for command's `input` shape.
 * @see {@link GetResourcesTrendsV2CommandOutput} for command's `response` shape.
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
export class GetResourcesTrendsV2Command extends $Command
  .classBuilder<
    GetResourcesTrendsV2CommandInput,
    GetResourcesTrendsV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "GetResourcesTrendsV2", {})
  .n("SecurityHubClient", "GetResourcesTrendsV2Command")
  .sc(GetResourcesTrendsV2$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcesTrendsV2Request;
      output: GetResourcesTrendsV2Response;
    };
    sdk: {
      input: GetResourcesTrendsV2CommandInput;
      output: GetResourcesTrendsV2CommandOutput;
    };
  };
}
