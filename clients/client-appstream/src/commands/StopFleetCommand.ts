// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopFleetRequest, StopFleetResult } from "../models/models_0";
import { StopFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class StopFleetCommand extends command<StopFleetCommandInput, StopFleetCommandOutput>(
  _ep0,
  _mw0,
  "StopFleet",
  StopFleet$
) {
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
