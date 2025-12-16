// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { GetCardinalityRequest, GetCardinalityResponse } from "../models/models_1";
import { GetCardinality$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the approximate count of unique values that match the query.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetCardinality</a> action.</p>
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
 *  <p>The index is not ready.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidAggregationException} (client fault)
 *  <p>The aggregation is invalid.</p>
 *
 * @throws {@link InvalidQueryException} (client fault)
 *  <p>The query is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class GetCardinalityCommand extends $Command
  .classBuilder<
    GetCardinalityCommandInput,
    GetCardinalityCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "GetCardinality", {})
  .n("IoTClient", "GetCardinalityCommand")
  .sc(GetCardinality$)
  .build() {
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
