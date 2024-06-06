// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DeleteRealtimeEndpointInput, DeleteRealtimeEndpointOutput } from "../models/models_0";
import { de_DeleteRealtimeEndpointCommand, se_DeleteRealtimeEndpointCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRealtimeEndpointCommand}.
 */
export interface DeleteRealtimeEndpointCommandInput extends DeleteRealtimeEndpointInput {}
/**
 * @public
 *
 * The output of {@link DeleteRealtimeEndpointCommand}.
 */
export interface DeleteRealtimeEndpointCommandOutput extends DeleteRealtimeEndpointOutput, __MetadataBearer {}

/**
 * <p>Deletes a real time endpoint of an <code>MLModel</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, DeleteRealtimeEndpointCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, DeleteRealtimeEndpointCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const input = { // DeleteRealtimeEndpointInput
 *   MLModelId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRealtimeEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRealtimeEndpointOutput
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
 * @param DeleteRealtimeEndpointCommandInput - {@link DeleteRealtimeEndpointCommandInput}
 * @returns {@link DeleteRealtimeEndpointCommandOutput}
 * @see {@link DeleteRealtimeEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteRealtimeEndpointCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteRealtimeEndpointCommand extends $Command
  .classBuilder<
    DeleteRealtimeEndpointCommandInput,
    DeleteRealtimeEndpointCommandOutput,
    MachineLearningClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MachineLearningClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonML_20141212", "DeleteRealtimeEndpoint", {})
  .n("MachineLearningClient", "DeleteRealtimeEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRealtimeEndpointCommand)
  .de(de_DeleteRealtimeEndpointCommand)
  .build() {}
