// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetBucketsAggregationRequest, GetBucketsAggregationResponse } from "../models/models_1";
import { de_GetBucketsAggregationCommand, se_GetBucketsAggregationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketsAggregationCommand}.
 */
export interface GetBucketsAggregationCommandInput extends GetBucketsAggregationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketsAggregationCommand}.
 */
export interface GetBucketsAggregationCommandOutput extends GetBucketsAggregationResponse, __MetadataBearer {}

/**
 * <p>Aggregates on indexed data with search queries pertaining to particular fields. </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBucketsAggregation</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetBucketsAggregationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetBucketsAggregationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // GetBucketsAggregationRequest
 *   indexName: "STRING_VALUE",
 *   queryString: "STRING_VALUE", // required
 *   aggregationField: "STRING_VALUE", // required
 *   queryVersion: "STRING_VALUE",
 *   bucketsAggregationType: { // BucketsAggregationType
 *     termsAggregation: { // TermsAggregation
 *       maxBuckets: Number("int"),
 *     },
 *   },
 * };
 * const command = new GetBucketsAggregationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketsAggregationResponse
 * //   totalCount: Number("int"),
 * //   buckets: [ // Buckets
 * //     { // Bucket
 * //       keyValue: "STRING_VALUE",
 * //       count: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketsAggregationCommandInput - {@link GetBucketsAggregationCommandInput}
 * @returns {@link GetBucketsAggregationCommandOutput}
 * @see {@link GetBucketsAggregationCommandInput} for command's `input` shape.
 * @see {@link GetBucketsAggregationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetBucketsAggregationCommand extends $Command
  .classBuilder<
    GetBucketsAggregationCommandInput,
    GetBucketsAggregationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "GetBucketsAggregation", {})
  .n("IoTClient", "GetBucketsAggregationCommand")
  .f(void 0, void 0)
  .ser(se_GetBucketsAggregationCommand)
  .de(de_GetBucketsAggregationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketsAggregationRequest;
      output: GetBucketsAggregationResponse;
    };
    sdk: {
      input: GetBucketsAggregationCommandInput;
      output: GetBucketsAggregationCommandOutput;
    };
  };
}
