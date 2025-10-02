// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { UpdateSafetyLeverStateRequest, UpdateSafetyLeverStateResponse } from "../models/models_0";
import { de_UpdateSafetyLeverStateCommand, se_UpdateSafetyLeverStateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSafetyLeverStateCommand}.
 */
export interface UpdateSafetyLeverStateCommandInput extends UpdateSafetyLeverStateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSafetyLeverStateCommand}.
 */
export interface UpdateSafetyLeverStateCommandOutput extends UpdateSafetyLeverStateResponse, __MetadataBearer {}

/**
 * <p>
 *         Updates the specified safety lever state.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, UpdateSafetyLeverStateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, UpdateSafetyLeverStateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // UpdateSafetyLeverStateRequest
 *   id: "STRING_VALUE", // required
 *   state: { // UpdateSafetyLeverStateInput
 *     status: "disengaged" || "engaged", // required
 *     reason: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateSafetyLeverStateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSafetyLeverStateResponse
 * //   safetyLever: { // SafetyLever
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     state: { // SafetyLeverState
 * //       status: "disengaged" || "engaged" || "engaging",
 * //       reason: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSafetyLeverStateCommandInput - {@link UpdateSafetyLeverStateCommandInput}
 * @returns {@link UpdateSafetyLeverStateCommandOutput}
 * @see {@link UpdateSafetyLeverStateCommandInput} for command's `input` shape.
 * @see {@link UpdateSafetyLeverStateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of a conflict.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 *
 * @public
 */
export class UpdateSafetyLeverStateCommand extends $Command
  .classBuilder<
    UpdateSafetyLeverStateCommandInput,
    UpdateSafetyLeverStateCommandOutput,
    FisClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FisClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FaultInjectionSimulator", "UpdateSafetyLeverState", {})
  .n("FisClient", "UpdateSafetyLeverStateCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSafetyLeverStateCommand)
  .de(de_UpdateSafetyLeverStateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSafetyLeverStateRequest;
      output: UpdateSafetyLeverStateResponse;
    };
    sdk: {
      input: UpdateSafetyLeverStateCommandInput;
      output: UpdateSafetyLeverStateCommandOutput;
    };
  };
}
