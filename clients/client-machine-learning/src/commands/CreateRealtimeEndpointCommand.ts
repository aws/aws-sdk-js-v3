// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateRealtimeEndpointInput, CreateRealtimeEndpointOutput } from "../models/models_0";
import { de_CreateRealtimeEndpointCommand, se_CreateRealtimeEndpointCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRealtimeEndpointCommand}.
 */
export interface CreateRealtimeEndpointCommandInput extends CreateRealtimeEndpointInput {}
/**
 * @public
 *
 * The output of {@link CreateRealtimeEndpointCommand}.
 */
export interface CreateRealtimeEndpointCommandOutput extends CreateRealtimeEndpointOutput, __MetadataBearer {}

/**
 * <p>Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, CreateRealtimeEndpointCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, CreateRealtimeEndpointCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * // import type { MachineLearningClientConfig } from "@aws-sdk/client-machine-learning";
 * const config = {}; // type is MachineLearningClientConfig
 * const client = new MachineLearningClient(config);
 * const input = { // CreateRealtimeEndpointInput
 *   MLModelId: "STRING_VALUE", // required
 * };
 * const command = new CreateRealtimeEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateRealtimeEndpointOutput
 * //   MLModelId: "STRING_VALUE",
 * //   RealtimeEndpointInfo: { // RealtimeEndpointInfo
 * //     PeakRequestsPerSecond: Number("int"),
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     EndpointUrl: "STRING_VALUE",
 * //     EndpointStatus: "NONE" || "READY" || "UPDATING" || "FAILED",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRealtimeEndpointCommandInput - {@link CreateRealtimeEndpointCommandInput}
 * @returns {@link CreateRealtimeEndpointCommandOutput}
 * @see {@link CreateRealtimeEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateRealtimeEndpointCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred when trying to process a request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource cannot be located.</p>
 *
 * @throws {@link MachineLearningServiceException}
 * <p>Base exception class for all service exceptions from MachineLearning service.</p>
 *
 *
 * @public
 */
export class CreateRealtimeEndpointCommand extends $Command
  .classBuilder<
    CreateRealtimeEndpointCommandInput,
    CreateRealtimeEndpointCommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonML_20141212", "CreateRealtimeEndpoint", {})
  .n("MachineLearningClient", "CreateRealtimeEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateRealtimeEndpointCommand)
  .de(de_CreateRealtimeEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRealtimeEndpointInput;
      output: CreateRealtimeEndpointOutput;
    };
    sdk: {
      input: CreateRealtimeEndpointCommandInput;
      output: CreateRealtimeEndpointCommandOutput;
    };
  };
}
