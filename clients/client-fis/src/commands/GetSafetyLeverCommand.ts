// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { GetSafetyLeverRequest, GetSafetyLeverResponse } from "../models/models_0";
import { de_GetSafetyLeverCommand, se_GetSafetyLeverCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSafetyLeverCommand}.
 */
export interface GetSafetyLeverCommandInput extends GetSafetyLeverRequest {}
/**
 * @public
 *
 * The output of {@link GetSafetyLeverCommand}.
 */
export interface GetSafetyLeverCommandOutput extends GetSafetyLeverResponse, __MetadataBearer {}

/**
 * <p>
 *          Gets information about the specified safety lever.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetSafetyLeverCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetSafetyLeverCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const input = { // GetSafetyLeverRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetSafetyLeverCommand(input);
 * const response = await client.send(command);
 * // { // GetSafetyLeverResponse
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
 * @param GetSafetyLeverCommandInput - {@link GetSafetyLeverCommandInput}
 * @returns {@link GetSafetyLeverCommandOutput}
 * @see {@link GetSafetyLeverCommandInput} for command's `input` shape.
 * @see {@link GetSafetyLeverCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 *
 * @public
 */
export class GetSafetyLeverCommand extends $Command
  .classBuilder<
    GetSafetyLeverCommandInput,
    GetSafetyLeverCommandOutput,
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
  .s("FaultInjectionSimulator", "GetSafetyLever", {})
  .n("FisClient", "GetSafetyLeverCommand")
  .f(void 0, void 0)
  .ser(se_GetSafetyLeverCommand)
  .de(de_GetSafetyLeverCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSafetyLeverRequest;
      output: GetSafetyLeverResponse;
    };
    sdk: {
      input: GetSafetyLeverCommandInput;
      output: GetSafetyLeverCommandOutput;
    };
  };
}
