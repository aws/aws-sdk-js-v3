// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetDataQualityModelResultRequest, GetDataQualityModelResultResponse } from "../models/models_1";
import { GetDataQualityModelResult$ } from "../schemas/schemas_0";

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
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetDataQualityModelResult", {})
  .n("GlueClient", "GetDataQualityModelResultCommand")
  .sc(GetDataQualityModelResult$)
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
