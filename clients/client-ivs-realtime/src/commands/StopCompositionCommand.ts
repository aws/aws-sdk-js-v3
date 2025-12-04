// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import type { StopCompositionRequest, StopCompositionResponse } from "../models/models_0";
import { StopComposition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopCompositionCommand}.
 */
export interface StopCompositionCommandInput extends StopCompositionRequest {}
/**
 * @public
 *
 * The output of {@link StopCompositionCommand}.
 */
export interface StopCompositionCommandOutput extends StopCompositionResponse, __MetadataBearer {}

/**
 * <p>Stops and deletes a Composition resource. Any broadcast from the Composition resource
 *          is stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, StopCompositionCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, StopCompositionCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // StopCompositionRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new StopCompositionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopCompositionCommandInput - {@link StopCompositionCommandInput}
 * @returns {@link StopCompositionCommandOutput}
 * @see {@link StopCompositionCommandInput} for command's `input` shape.
 * @see {@link StopCompositionCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class StopCompositionCommand extends $Command
  .classBuilder<
    StopCompositionCommandInput,
    StopCompositionCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "StopComposition", {})
  .n("IVSRealTimeClient", "StopCompositionCommand")
  .sc(StopComposition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopCompositionRequest;
      output: {};
    };
    sdk: {
      input: StopCompositionCommandInput;
      output: StopCompositionCommandOutput;
    };
  };
}
