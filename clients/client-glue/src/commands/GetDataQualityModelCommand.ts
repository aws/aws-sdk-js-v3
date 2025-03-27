// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDataQualityModelRequest, GetDataQualityModelResponse } from "../models/models_2";
import { de_GetDataQualityModelCommand, se_GetDataQualityModelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataQualityModelCommand}.
 */
export interface GetDataQualityModelCommandInput extends GetDataQualityModelRequest {}
/**
 * @public
 *
 * The output of {@link GetDataQualityModelCommand}.
 */
export interface GetDataQualityModelCommandOutput extends GetDataQualityModelResponse, __MetadataBearer {}

/**
 * <p>Retrieve the training status of the model along with more information (CompletedOn, StartedOn, FailureReason).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataQualityModelCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataQualityModelCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetDataQualityModelRequest
 *   StatisticId: "STRING_VALUE",
 *   ProfileId: "STRING_VALUE", // required
 * };
 * const command = new GetDataQualityModelCommand(input);
 * const response = await client.send(command);
 * // { // GetDataQualityModelResponse
 * //   Status: "RUNNING" || "SUCCEEDED" || "FAILED",
 * //   StartedOn: new Date("TIMESTAMP"),
 * //   CompletedOn: new Date("TIMESTAMP"),
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataQualityModelCommandInput - {@link GetDataQualityModelCommandInput}
 * @returns {@link GetDataQualityModelCommandOutput}
 * @see {@link GetDataQualityModelCommandInput} for command's `input` shape.
 * @see {@link GetDataQualityModelCommandOutput} for command's `response` shape.
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
export class GetDataQualityModelCommand extends $Command
  .classBuilder<
    GetDataQualityModelCommandInput,
    GetDataQualityModelCommandOutput,
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
  .s("AWSGlue", "GetDataQualityModel", {})
  .n("GlueClient", "GetDataQualityModelCommand")
  .f(void 0, void 0)
  .ser(se_GetDataQualityModelCommand)
  .de(de_GetDataQualityModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataQualityModelRequest;
      output: GetDataQualityModelResponse;
    };
    sdk: {
      input: GetDataQualityModelCommandInput;
      output: GetDataQualityModelCommandOutput;
    };
  };
}
