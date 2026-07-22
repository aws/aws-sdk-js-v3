// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEstimatedWaterAllocationRequest, GetEstimatedWaterAllocationResponse } from "../models/models_0";
import { GetEstimatedWaterAllocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEstimatedWaterAllocationCommand}.
 */
export interface GetEstimatedWaterAllocationCommandInput extends GetEstimatedWaterAllocationRequest {}
/**
 * @public
 *
 * The output of {@link GetEstimatedWaterAllocationCommand}.
 */
export interface GetEstimatedWaterAllocationCommandOutput extends GetEstimatedWaterAllocationResponse, __MetadataBearer {}

/**
 * <p>Returns estimated water allocation values based on customer grouping and filtering parameters. We recommend using pagination to ensure that the operation returns quickly and successfully. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SustainabilityClient, GetEstimatedWaterAllocationCommand } from "@aws-sdk/client-sustainability"; // ES Modules import
 * // const { SustainabilityClient, GetEstimatedWaterAllocationCommand } = require("@aws-sdk/client-sustainability"); // CommonJS import
 * // import type { SustainabilityClientConfig } from "@aws-sdk/client-sustainability";
 * const config = {}; // type is SustainabilityClientConfig
 * const client = new SustainabilityClient(config);
 * const input = { // GetEstimatedWaterAllocationRequest
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
 *   AllocationTypes: [ // WaterAllocationTypeList
 *     "TOTAL_WATER_WITHDRAWALS",
 *   ],
 *   Granularity: "YEARLY_CALENDAR" || "YEARLY_FISCAL" || "QUARTERLY_CALENDAR" || "QUARTERLY_FISCAL" || "MONTHLY",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetEstimatedWaterAllocationCommand(input);
 * const response = await client.send(command);
 * // { // GetEstimatedWaterAllocationResponse
 * //   Results: [ // EstimatedWaterAllocationList // required
 * //     { // EstimatedWaterAllocation
 * //       TimePeriod: { // TimePeriod
 * //         Start: new Date("TIMESTAMP"), // required
 * //         End: new Date("TIMESTAMP"), // required
 * //       },
 * //       DimensionsValues: { // DimensionsMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ModelVersion: "STRING_VALUE", // required
 * //       AllocationValues: { // WaterAllocationMap // required
 * //         "<keys>": { // WaterAllocation
 * //           Value: Number("double"), // required
 * //           Unit: "m3", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEstimatedWaterAllocationCommandInput - {@link GetEstimatedWaterAllocationCommandInput}
 * @returns {@link GetEstimatedWaterAllocationCommandOutput}
 * @see {@link GetEstimatedWaterAllocationCommandInput} for command's `input` shape.
 * @see {@link GetEstimatedWaterAllocationCommandOutput} for command's `response` shape.
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
 * @example GetEstimatedWaterAllocationSuccess
 * ```javascript
 * //
 * const input = {
 *   AllocationTypes: [
 *     "TOTAL_WATER_WITHDRAWALS"
 *   ],
 *   Granularity: "YEARLY_CALENDAR",
 *   GroupBy: [
 *     "SERVICE"
 *   ],
 *   TimePeriod: {
 *     End: "2026-01-01T00:00:00.00Z",
 *     Start: "2025-01-01T00:00:00.00Z"
 *   }
 * };
 * const command = new GetEstimatedWaterAllocationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Results: [
 *     {
 *       AllocationValues: {
 *         TOTAL_WATER_WITHDRAWALS: {
 *           Unit: "m3",
 *           Value: 1
 *         }
 *       },
 *       DimensionsValues: {
 *         SERVICE: "AmazonEC2"
 *       },
 *       ModelVersion: "v1.0.0",
 *       TimePeriod: {
 *         End: "2026-01-01T00:00:00Z",
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
export class GetEstimatedWaterAllocationCommand extends command<GetEstimatedWaterAllocationCommandInput, GetEstimatedWaterAllocationCommandOutput>(
  _ep0,
  _mw0,
  "GetEstimatedWaterAllocation",
  GetEstimatedWaterAllocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEstimatedWaterAllocationRequest;
      output: GetEstimatedWaterAllocationResponse;
    };
    sdk: {
      input: GetEstimatedWaterAllocationCommandInput;
      output: GetEstimatedWaterAllocationCommandOutput;
    };
  };
}
