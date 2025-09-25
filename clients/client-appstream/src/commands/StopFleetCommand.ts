// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopFleetRequest, StopFleetResult } from "../models/models_0";
import { StopFleet } from "../schemas/schemas_40_StopFleet";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopFleetCommand}.
 */
export interface StopFleetCommandInput extends StopFleetRequest {}
/**
 * @public
 *
 * The output of {@link StopFleetCommand}.
 */
export interface StopFleetCommandOutput extends StopFleetResult, __MetadataBearer {}

/**
 * <p>Stops the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StopFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StopFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // StopFleetRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StopFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopFleetCommandInput - {@link StopFleetCommandInput}
 * @returns {@link StopFleetCommandOutput}
 * @see {@link StopFleetCommandInput} for command's `input` shape.
 * @see {@link StopFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class StopFleetCommand extends $Command
  .classBuilder<
    StopFleetCommandInput,
    StopFleetCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "StopFleet", {})
  .n("AppStreamClient", "StopFleetCommand")
  .sc(StopFleet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopFleetRequest;
      output: {};
    };
    sdk: {
      input: StopFleetCommandInput;
      output: StopFleetCommandOutput;
    };
  };
}
