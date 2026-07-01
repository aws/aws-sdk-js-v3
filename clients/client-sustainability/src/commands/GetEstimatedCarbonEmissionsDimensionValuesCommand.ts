// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetEstimatedCarbonEmissionsDimensionValuesRequest,
  GetEstimatedCarbonEmissionsDimensionValuesResponse,
} from "../models/models_0";
import { GetEstimatedCarbonEmissionsDimensionValues$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEstimatedCarbonEmissionsDimensionValuesCommand}.
 */
export interface GetEstimatedCarbonEmissionsDimensionValuesCommandInput extends GetEstimatedCarbonEmissionsDimensionValuesRequest {}
/**
 * @public
 *
 * The output of {@link GetEstimatedCarbonEmissionsDimensionValuesCommand}.
 */
export interface GetEstimatedCarbonEmissionsDimensionValuesCommandOutput extends GetEstimatedCarbonEmissionsDimensionValuesResponse, __MetadataBearer {}

/**
 * <p>Returns the possible dimension values available for a customer's account. We recommend using pagination to ensure that the operation returns quickly and successfully. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SustainabilityClient, GetEstimatedCarbonEmissionsDimensionValuesCommand } from "@aws-sdk/client-sustainability"; // ES Modules import
 * // const { SustainabilityClient, GetEstimatedCarbonEmissionsDimensionValuesCommand } = require("@aws-sdk/client-sustainability"); // CommonJS import
 * // import type { SustainabilityClientConfig } from "@aws-sdk/client-sustainability";
 * const config = {}; // type is SustainabilityClientConfig
 * const client = new SustainabilityClient(config);
 * const input = { // GetEstimatedCarbonEmissionsDimensionValuesRequest
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
 * const command = new GetEstimatedCarbonEmissionsDimensionValuesCommand(input);
 * const response = await client.send(command);
 * // { // GetEstimatedCarbonEmissionsDimensionValuesResponse
 * //   Results: [ // DimensionEntryList
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
 * @param GetEstimatedCarbonEmissionsDimensionValuesCommandInput - {@link GetEstimatedCarbonEmissionsDimensionValuesCommandInput}
 * @returns {@link GetEstimatedCarbonEmissionsDimensionValuesCommandOutput}
 * @see {@link GetEstimatedCarbonEmissionsDimensionValuesCommandInput} for command's `input` shape.
 * @see {@link GetEstimatedCarbonEmissionsDimensionValuesCommandOutput} for command's `response` shape.
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
 * @example GetEstimatedCarbonEmissionsDimensionValuesSuccess
 * ```javascript
 * //
 * const input = {
 *   Dimensions: [
 *     "REGION",
 *     "SERVICE",
 *     "USAGE_ACCOUNT_ID"
 *   ],
 *   TimePeriod: {
 *     End: "2025-12-31T23:59:59.999Z",
 *     Start: "2025-01-01T00:00:00.000Z"
 *   }
 * };
 * const command = new GetEstimatedCarbonEmissionsDimensionValuesCommand(input);
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
export class GetEstimatedCarbonEmissionsDimensionValuesCommand extends command<GetEstimatedCarbonEmissionsDimensionValuesCommandInput, GetEstimatedCarbonEmissionsDimensionValuesCommandOutput>(
  _ep0,
  _mw0,
  "GetEstimatedCarbonEmissionsDimensionValues",
  GetEstimatedCarbonEmissionsDimensionValues$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEstimatedCarbonEmissionsDimensionValuesRequest;
      output: GetEstimatedCarbonEmissionsDimensionValuesResponse;
    };
    sdk: {
      input: GetEstimatedCarbonEmissionsDimensionValuesCommandInput;
      output: GetEstimatedCarbonEmissionsDimensionValuesCommandOutput;
    };
  };
}
