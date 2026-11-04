// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCardinalityRequest, GetCardinalityResponse } from "../models/models_1";
import { GetCardinality$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCardinalityCommand}.
 */
export interface GetCardinalityCommandInput extends GetCardinalityRequest {}
/**
 * @public
 *
 * The output of {@link GetCardinalityCommand}.
 */
export interface GetCardinalityCommandOutput extends GetCardinalityResponse, __MetadataBearer {}

/**
 * Returns the approximate count of unique values that match the query.
 *
 * Requires permission to access the [GetCardinality](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetCardinalityCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetCardinalityCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // GetCardinalityRequest
 *   indexName: "STRING_VALUE",
 *   queryString: "STRING_VALUE", // required
 *   aggregationField: "STRING_VALUE",
 *   queryVersion: "STRING_VALUE",
 * };
 * const command = new GetCardinalityCommand(input);
 * const response = await client.send(command);
 * // { // GetCardinalityResponse
 * //   cardinality: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetCardinalityCommandInput - {@link GetCardinalityCommandInput}
 * @returns {@link GetCardinalityCommandOutput}
 * @see {@link GetCardinalityCommandInput} for command's `input` shape.
 * @see {@link GetCardinalityCommandOutput} for command's `response` shape.
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
export class GetCardinalityCommand extends command<GetCardinalityCommandInput, GetCardinalityCommandOutput>(
  _ep0,
  _mw0,
  "GetCardinality",
  GetCardinality$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCardinalityRequest;
      output: GetCardinalityResponse;
    };
    sdk: {
      input: GetCardinalityCommandInput;
      output: GetCardinalityCommandOutput;
    };
  };
}
