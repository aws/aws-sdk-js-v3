// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DrainSessionInstanceRequest, DrainSessionInstanceResult } from "../models/models_0";
import { DrainSessionInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DrainSessionInstanceCommand}.
 */
export interface DrainSessionInstanceCommandInput extends DrainSessionInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DrainSessionInstanceCommand}.
 */
export interface DrainSessionInstanceCommandOutput extends DrainSessionInstanceResult, __MetadataBearer {}

/**
 * <p>Drains the instance hosting the specified streaming session. The instance stops accepting new sessions while existing sessions continue uninterrupted. Once all sessions end, the instance is reclaimed and replaced. This only applies to multi-session fleets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DrainSessionInstanceCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DrainSessionInstanceCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DrainSessionInstanceRequest
 *   SessionId: "STRING_VALUE", // required
 * };
 * const command = new DrainSessionInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DrainSessionInstanceCommandInput - {@link DrainSessionInstanceCommandInput}
 * @returns {@link DrainSessionInstanceCommandOutput}
 * @see {@link DrainSessionInstanceCommandInput} for command's `input` shape.
 * @see {@link DrainSessionInstanceCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
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
export class DrainSessionInstanceCommand extends $Command
  .classBuilder<
    DrainSessionInstanceCommandInput,
    DrainSessionInstanceCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DrainSessionInstance", {})
  .n("AppStreamClient", "DrainSessionInstanceCommand")
  .sc(DrainSessionInstance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DrainSessionInstanceRequest;
      output: {};
    };
    sdk: {
      input: DrainSessionInstanceCommandInput;
      output: DrainSessionInstanceCommandOutput;
    };
  };
}
