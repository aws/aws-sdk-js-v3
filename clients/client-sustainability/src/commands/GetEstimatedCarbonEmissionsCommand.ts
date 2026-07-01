// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEstimatedCarbonEmissionsRequest, GetEstimatedCarbonEmissionsResponse } from "../models/models_0";
import { GetEstimatedCarbonEmissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEstimatedCarbonEmissionsCommand}.
 */
export interface GetEstimatedCarbonEmissionsCommandInput extends GetEstimatedCarbonEmissionsRequest {}
/**
 * @public
 *
 * The output of {@link GetEstimatedCarbonEmissionsCommand}.
 */
export interface GetEstimatedCarbonEmissionsCommandOutput extends GetEstimatedCarbonEmissionsResponse, __MetadataBearer {}

/**
 * <p>Returns estimated carbon emission values based on customer grouping and filtering parameters. We recommend using pagination to ensure that the operation returns quickly and successfully. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SustainabilityClient, GetEstimatedCarbonEmissionsCommand } from "@aws-sdk/client-sustainability"; // ES Modules import
 * // const { SustainabilityClient, GetEstimatedCarbonEmissionsCommand } = require("@aws-sdk/client-sustainability"); // CommonJS import
 * // import type { SustainabilityClientConfig } from "@aws-sdk/client-sustainability";
 * const config = {}; // type is SustainabilityClientConfig
 * const client = new SustainabilityClient(config);
 * const input = { // GetEstimatedCarbonEmissionsRequest
 *   TimePeriod: { // TimePeriod
 *     Start: new Date("TIMESTAMP"), // required
 *     End: new Date("TIMESTAMP"), // required
 *   },
 *   GroupBy: [ // DimensionList
 *     "USAGE_ACCOUNT_ID" || "REGION" || "SERVICE",
 *   ],
 *   FilterBy: { // FilterExpression
 *     Dimensions: { // DimensionListMap
 *       "<keys>": [ // DimensionValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   EmissionsTypes: [ // EmissionsTypeList
 *     "TOTAL_LBM_CARBON_EMISSIONS" || "TOTAL_MBM_CARBON_EMISSIONS" || "TOTAL_SCOPE_1_CARBON_EMISSIONS" || "TOTAL_SCOPE_2_LBM_CARBON_EMISSIONS" || "TOTAL_SCOPE_2_MBM_CARBON_EMISSIONS" || "TOTAL_SCOPE_3_LBM_CARBON_EMISSIONS" || "TOTAL_SCOPE_3_MBM_CARBON_EMISSIONS",
 *   ],
 *   Granularity: "YEARLY_CALENDAR" || "YEARLY_FISCAL" || "QUARTERLY_CALENDAR" || "QUARTERLY_FISCAL" || "MONTHLY",
 *   GranularityConfiguration: { // GranularityConfiguration
 *     FiscalYearStartMonth: Number("int"),
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetEstimatedCarbonEmissionsCommand(input);
 * const response = await client.send(command);
 * // { // GetEstimatedCarbonEmissionsResponse
 * //   Results: [ // EstimatedCarbonEmissionsList // required
 * //     { // EstimatedCarbonEmissions
 * //       TimePeriod: { // TimePeriod
 * //         Start: new Date("TIMESTAMP"), // required
 * //         End: new Date("TIMESTAMP"), // required
 * //       },
 * //       DimensionsValues: { // DimensionsMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ModelVersion: "STRING_VALUE", // required
 * //       EmissionsValues: { // EmissionsMap // required
 * //         "<keys>": { // Emissions
 * //           Value: Number("double"), // required
 * //           Unit: "MTCO2e", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEstimatedCarbonEmissionsCommandInput - {@link GetEstimatedCarbonEmissionsCommandInput}
 * @returns {@link GetEstimatedCarbonEmissionsCommandOutput}
 * @see {@link GetEstimatedCarbonEmissionsCommandInput} for command's `input` shape.
 * @see {@link GetEstimatedCarbonEmissionsCommandOutput} for command's `response` shape.
 * @see {@link SustainabilityClientResolvedConfig | config} for SustainabilityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SustainabilityServiceException}
 * <p>Base exception class for all service exceptions from Sustainability service.</p>
 *
 *
 * @example GetEstimatedCarbonEmissionsSuccess
 * ```javascript
 * //
 * const input = {
 *   EmissionsTypes: [
 *     "TOTAL_LBM_CARBON_EMISSIONS",
 *     "TOTAL_MBM_CARBON_EMISSIONS",
 *     "TOTAL_SCOPE_1_CARBON_EMISSIONS",
 *     "TOTAL_SCOPE_2_LBM_CARBON_EMISSIONS",
 *     "TOTAL_SCOPE_2_MBM_CARBON_EMISSIONS",
 *     "TOTAL_SCOPE_3_LBM_CARBON_EMISSIONS",
 *     "TOTAL_SCOPE_3_MBM_CARBON_EMISSIONS"
 *   ],
 *   Granularity: "MONTHLY",
 *   GroupBy: [
 *     "SERVICE"
 *   ],
 *   TimePeriod: {
 *     End: "2025-12-31T23:59:59.999Z",
 *     Start: "2025-01-01T00:00:00.000Z"
 *   }
 * };
 * const command = new GetEstimatedCarbonEmissionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Results: [
 *     {
 *       DimensionsValues: {
 *         SERVICE: "AmazonEC2"
 *       },
 *       EmissionsValues: {
 *         TOTAL_LBM_CARBON_EMISSIONS: {
 *           Unit: "MTCO2e",
 *           Value: 1
 *         },
 *         TOTAL_MBM_CARBON_EMISSIONS: {
 *           Unit: "MTCO2e",
 *           Value: 1
 *         },
 *         TOTAL_SCOPE_1_CARBON_EMISSIONS: {
 *           Unit: "MTCO2e",
 *           Value: 1
 *         },
 *         TOTAL_SCOPE_2_LBM_CARBON_EMISSIONS: {
 *           Unit: "MTCO2e",
 *           Value: 1
 *         },
 *         TOTAL_SCOPE_2_MBM_CARBON_EMISSIONS: {
 *           Unit: "MTCO2e",
 *           Value: 1
 *         },
 *         TOTAL_SCOPE_3_LBM_CARBON_EMISSIONS: {
 *           Unit: "MTCO2e",
 *           Value: 1
 *         },
 *         TOTAL_SCOPE_3_MBM_CARBON_EMISSIONS: {
 *           Unit: "MTCO2e",
 *           Value: 1
 *         }
 *       },
 *       ModelVersion: "v3.0.0",
 *       TimePeriod: {
 *         End: "2025-02-01T00:00:00Z",
 *         Start: "2025-01-01T00:00:00Z"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetEstimatedCarbonEmissionsCommand extends command<GetEstimatedCarbonEmissionsCommandInput, GetEstimatedCarbonEmissionsCommandOutput>(
  _ep0,
  _mw0,
  "GetEstimatedCarbonEmissions",
  GetEstimatedCarbonEmissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEstimatedCarbonEmissionsRequest;
      output: GetEstimatedCarbonEmissionsResponse;
    };
    sdk: {
      input: GetEstimatedCarbonEmissionsCommandInput;
      output: GetEstimatedCarbonEmissionsCommandOutput;
    };
  };
}
