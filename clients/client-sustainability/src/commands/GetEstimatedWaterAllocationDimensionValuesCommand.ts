// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetEstimatedWaterAllocationDimensionValuesRequest,
  GetEstimatedWaterAllocationDimensionValuesResponse,
} from "../models/models_0";
import { GetEstimatedWaterAllocationDimensionValues$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEstimatedWaterAllocationDimensionValuesCommand}.
 */
export interface GetEstimatedWaterAllocationDimensionValuesCommandInput extends GetEstimatedWaterAllocationDimensionValuesRequest {}
/**
 * @public
 *
 * The output of {@link GetEstimatedWaterAllocationDimensionValuesCommand}.
 */
export interface GetEstimatedWaterAllocationDimensionValuesCommandOutput extends GetEstimatedWaterAllocationDimensionValuesResponse, __MetadataBearer {}

/**
 * <p>Returns the possible dimension values available for a customer's account. We recommend using pagination to ensure that the operation returns quickly and successfully. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SustainabilityClient, GetEstimatedWaterAllocationDimensionValuesCommand } from "@aws-sdk/client-sustainability"; // ES Modules import
 * // const { SustainabilityClient, GetEstimatedWaterAllocationDimensionValuesCommand } = require("@aws-sdk/client-sustainability"); // CommonJS import
 * // import type { SustainabilityClientConfig } from "@aws-sdk/client-sustainability";
 * const config = {}; // type is SustainabilityClientConfig
 * const client = new SustainabilityClient(config);
 * const input = { // GetEstimatedWaterAllocationDimensionValuesRequest
 *   TimePeriod: { // TimePeriod
 *     Start: new Date("TIMESTAMP"), // required
 *     End: new Date("TIMESTAMP"), // required
 *   },
 *   Dimensions: [ // DimensionList // required
 *     "USAGE_ACCOUNT_ID" || "REGION" || "SERVICE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetEstimatedWaterAllocationDimensionValuesCommand(input);
 * const response = await client.send(command);
 * // { // GetEstimatedWaterAllocationDimensionValuesResponse
 * //   Results: [ // DimensionEntryList // required
 * //     { // DimensionEntry
 * //       Dimension: "USAGE_ACCOUNT_ID" || "REGION" || "SERVICE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEstimatedWaterAllocationDimensionValuesCommandInput - {@link GetEstimatedWaterAllocationDimensionValuesCommandInput}
 * @returns {@link GetEstimatedWaterAllocationDimensionValuesCommandOutput}
 * @see {@link GetEstimatedWaterAllocationDimensionValuesCommandInput} for command's `input` shape.
 * @see {@link GetEstimatedWaterAllocationDimensionValuesCommandOutput} for command's `response` shape.
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
 * @example GetEstimatedWaterAllocationDimensionValuesSuccess
 * ```javascript
 * //
 * const input = {
 *   Dimensions: [
 *     "REGION",
 *     "SERVICE",
 *     "USAGE_ACCOUNT_ID"
 *   ],
 *   TimePeriod: {
 *     End: "2026-01-01T00:00:00.00Z",
 *     Start: "2025-01-01T00:00:00.00Z"
 *   }
 * };
 * const command = new GetEstimatedWaterAllocationDimensionValuesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Results: [
 *     {
 *       Dimension: "SERVICE",
 *       Value: "AmazonEC2"
 *     },
 *     {
 *       Dimension: "SERVICE",
 *       Value: "AmazonS3"
 *     },
 *     {
 *       Dimension: "SERVICE",
 *       Value: "AmazonCloudFront"
 *     },
 *     {
 *       Dimension: "REGION",
 *       Value: "global"
 *     },
 *     {
 *       Dimension: "REGION",
 *       Value: "us-east-1"
 *     },
 *     {
 *       Dimension: "REGION",
 *       Value: "us-west-2"
 *     },
 *     {
 *       Dimension: "USAGE_ACCOUNT_ID",
 *       Value: "111222333444"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetEstimatedWaterAllocationDimensionValuesCommand extends command<GetEstimatedWaterAllocationDimensionValuesCommandInput, GetEstimatedWaterAllocationDimensionValuesCommandOutput>(
  _ep0,
  _mw0,
  "GetEstimatedWaterAllocationDimensionValues",
  GetEstimatedWaterAllocationDimensionValues$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEstimatedWaterAllocationDimensionValuesRequest;
      output: GetEstimatedWaterAllocationDimensionValuesResponse;
    };
    sdk: {
      input: GetEstimatedWaterAllocationDimensionValuesCommandInput;
      output: GetEstimatedWaterAllocationDimensionValuesCommandOutput;
    };
  };
}
