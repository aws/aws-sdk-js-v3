// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDataQualityModelResultRequest, GetDataQualityModelResultResponse } from "../models/models_2";
import { de_GetDataQualityModelResultCommand, se_GetDataQualityModelResultCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataQualityModelResultCommand}.
 */
export interface GetDataQualityModelResultCommandInput extends GetDataQualityModelResultRequest {}
/**
 * @public
 *
 * The output of {@link GetDataQualityModelResultCommand}.
 */
export interface GetDataQualityModelResultCommandOutput extends GetDataQualityModelResultResponse, __MetadataBearer {}

/**
 * <p>Retrieve a statistic's predictions for a given Profile ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataQualityModelResultCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataQualityModelResultCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetDataQualityModelResultRequest
 *   StatisticId: "STRING_VALUE", // required
 *   ProfileId: "STRING_VALUE", // required
 * };
 * const command = new GetDataQualityModelResultCommand(input);
 * const response = await client.send(command);
 * // { // GetDataQualityModelResultResponse
 * //   CompletedOn: new Date("TIMESTAMP"),
 * //   Model: [ // StatisticModelResults
 * //     { // StatisticModelResult
 * //       LowerBound: Number("double"),
 * //       UpperBound: Number("double"),
 * //       PredictedValue: Number("double"),
 * //       ActualValue: Number("double"),
 * //       Date: new Date("TIMESTAMP"),
 * //       InclusionAnnotation: "INCLUDE" || "EXCLUDE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDataQualityModelResultCommandInput - {@link GetDataQualityModelResultCommandInput}
 * @returns {@link GetDataQualityModelResultCommandOutput}
 * @see {@link GetDataQualityModelResultCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityModelResultCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetDataQualityModelResultCommand extends $Command
  .classBuilder<
    GetDataQualityModelResultCommandInput,
    GetDataQualityModelResultCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetDataQualityModelResult", {})
  .n("GlueClient", "GetDataQualityModelResultCommand")
  .f(void 0, void 0)
  .ser(se_GetDataQualityModelResultCommand)
  .de(de_GetDataQualityModelResultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataQualityModelResultRequest;
      output: GetDataQualityModelResultResponse;
    };
    sdk: {
      input: GetDataQualityModelResultCommandInput;
      output: GetDataQualityModelResultCommandOutput;
    };
  };
}
