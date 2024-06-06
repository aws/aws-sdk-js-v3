// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelSimulationJobBatchRequest, CancelSimulationJobBatchResponse } from "../models/models_0";
import { de_CancelSimulationJobBatchCommand, se_CancelSimulationJobBatchCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelSimulationJobBatchCommand}.
 */
export interface CancelSimulationJobBatchCommandInput extends CancelSimulationJobBatchRequest {}
/**
 * @public
 *
 * The output of {@link CancelSimulationJobBatchCommand}.
 */
export interface CancelSimulationJobBatchCommandOutput extends CancelSimulationJobBatchResponse, __MetadataBearer {}

/**
 * <p>Cancels a simulation job batch. When you cancel a simulation job batch, you are also
 *          cancelling all of the active simulation jobs created as part of the batch. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelSimulationJobBatchCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelSimulationJobBatchCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // CancelSimulationJobBatchRequest
 *   batch: "STRING_VALUE", // required
 * };
 * const command = new CancelSimulationJobBatchCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelSimulationJobBatchCommandInput - {@link CancelSimulationJobBatchCommandInput}
 * @returns {@link CancelSimulationJobBatchCommandOutput}
 * @see {@link CancelSimulationJobBatchCommandInput} for command's `input` shape.
 * @see {@link CancelSimulationJobBatchCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 * @public
 */
export class CancelSimulationJobBatchCommand extends $Command
  .classBuilder<
    CancelSimulationJobBatchCommandInput,
    CancelSimulationJobBatchCommandOutput,
    RoboMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RoboMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("robomaker", "CancelSimulationJobBatch", {})
  .n("RoboMakerClient", "CancelSimulationJobBatchCommand")
  .f(void 0, void 0)
  .ser(se_CancelSimulationJobBatchCommand)
  .de(de_CancelSimulationJobBatchCommand)
  .build() {}
