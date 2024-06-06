// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelQueryInput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_CancelQueryCommand, se_CancelQueryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelQueryCommand}.
 */
export interface CancelQueryCommandInput extends CancelQueryInput {}
/**
 * @public
 *
 * The output of {@link CancelQueryCommand}.
 */
export interface CancelQueryCommandOutput extends __MetadataBearer {}

/**
 * <p>Cancels a specified query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, CancelQueryCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, CancelQueryCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // CancelQueryInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new CancelQueryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelQueryCommandInput - {@link CancelQueryCommandInput}
 * @returns {@link CancelQueryCommandOutput}
 * @see {@link CancelQueryCommandInput} for command's `input` shape.
 * @see {@link CancelQueryCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated.</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 * @public
 */
export class CancelQueryCommand extends $Command
  .classBuilder<
    CancelQueryCommandInput,
    CancelQueryCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `DataPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneGraph", "CancelQuery", {})
  .n("NeptuneGraphClient", "CancelQueryCommand")
  .f(void 0, void 0)
  .ser(se_CancelQueryCommand)
  .de(de_CancelQueryCommand)
  .build() {}
