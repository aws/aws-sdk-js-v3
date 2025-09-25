// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelQueryInput } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { CancelQuery } from "../schemas/schemas_2_Query";

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
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNeptuneGraph", "CancelQuery", {})
  .n("NeptuneGraphClient", "CancelQueryCommand")
  .sc(CancelQuery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelQueryInput;
      output: {};
    };
    sdk: {
      input: CancelQueryCommandInput;
      output: CancelQueryCommandOutput;
    };
  };
}
