// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPercentilesRequest, GetPercentilesResponse } from "../models/models_1";
import { GetPercentiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPercentilesCommand}.
 */
export interface GetPercentilesCommandInput extends GetPercentilesRequest {}
/**
 * @public
 *
 * The output of {@link GetPercentilesCommand}.
 */
export interface GetPercentilesCommandOutput extends GetPercentilesResponse, __MetadataBearer {}

/**
 * Groups the aggregated values that match the query into percentile groupings. The default percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own when you call `GetPercentiles`. This function returns a value for each percentile group specified (or the default percentile groupings). The percentile group "1" contains the aggregated field value that occurs in approximately one percent of the values that match the query. The percentile group "5" contains the aggregated field value that occurs in approximately five percent of the values that match the query, and so on. The result is an approximation, the more values that match the query, the more accurate the percentile values.
 *
 * Requires permission to access the [GetPercentiles](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetPercentilesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetPercentilesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // GetPercentilesRequest
 *   indexName: "STRING_VALUE",
 *   queryString: "STRING_VALUE", // required
 *   aggregationField: "STRING_VALUE",
 *   queryVersion: "STRING_VALUE",
 *   percents: [ // PercentList
 *     Number("double"),
 *   ],
 * };
 * const command = new GetPercentilesCommand(input);
 * const response = await client.send(command);
 * // { // GetPercentilesResponse
 * //   percentiles: [ // Percentiles
 * //     { // PercentPair
 * //       percent: Number("double"),
 * //       value: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPercentilesCommandInput - {@link GetPercentilesCommandInput}
 * @returns {@link GetPercentilesCommandOutput}
 * @see {@link GetPercentilesCommandInput} for command's `input` shape.
 * @see {@link GetPercentilesCommandOutput} for command's `response` shape.
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
export class GetPercentilesCommand extends command<GetPercentilesCommandInput, GetPercentilesCommandOutput>(
  _ep0,
  _mw0,
  "GetPercentiles",
  GetPercentiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPercentilesRequest;
      output: GetPercentilesResponse;
    };
    sdk: {
      input: GetPercentilesCommandInput;
      output: GetPercentilesCommandOutput;
    };
  };
}
