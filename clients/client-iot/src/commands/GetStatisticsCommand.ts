// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStatisticsRequest, GetStatisticsResponse } from "../models/models_1";
import { GetStatistics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStatisticsCommand}.
 */
export interface GetStatisticsCommandInput extends GetStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetStatisticsCommand}.
 */
export interface GetStatisticsCommandOutput extends GetStatisticsResponse, __MetadataBearer {}

/**
 * Returns the count, average, sum, minimum, maximum, sum of squares, variance, and standard deviation for the specified aggregated field. If the aggregation field is of type `String`, only the count statistic is returned.
 *
 * Requires permission to access the [GetStatistics](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetStatisticsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetStatisticsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // GetStatisticsRequest
 *   indexName: "STRING_VALUE",
 *   queryString: "STRING_VALUE", // required
 *   aggregationField: "STRING_VALUE",
 *   queryVersion: "STRING_VALUE",
 * };
 * const command = new GetStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetStatisticsResponse
 * //   statistics: { // Statistics
 * //     count: Number("int"),
 * //     average: Number("double"),
 * //     sum: Number("double"),
 * //     minimum: Number("double"),
 * //     maximum: Number("double"),
 * //     sumOfSquares: Number("double"),
 * //     variance: Number("double"),
 * //     stdDeviation: Number("double"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStatisticsCommandInput - {@link GetStatisticsCommandInput}
 * @returns {@link GetStatisticsCommandOutput}
 * @see {@link GetStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetStatisticsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link IndexNotReadyException} (client fault)
 *
 * The index is not ready.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidAggregationException} (client fault)
 *
 * The aggregation is invalid.
 *
 * @throws {@link InvalidQueryException} (client fault)
 *
 * The query is invalid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class GetStatisticsCommand extends command<GetStatisticsCommandInput, GetStatisticsCommandOutput>(
  _ep0,
  _mw0,
  "GetStatistics",
  GetStatistics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStatisticsRequest;
      output: GetStatisticsResponse;
    };
    sdk: {
      input: GetStatisticsCommandInput;
      output: GetStatisticsCommandOutput;
    };
  };
}
