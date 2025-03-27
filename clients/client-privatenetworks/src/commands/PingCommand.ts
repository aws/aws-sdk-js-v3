// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PingResponse } from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_PingCommand, se_PingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PingCommand}.
 */
export interface PingCommandInput {}
/**
 * @public
 *
 * The output of {@link PingCommand}.
 */
export interface PingCommandOutput extends PingResponse, __MetadataBearer {}

/**
 * <p>Checks the health of the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, PingCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, PingCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = {};
 * const command = new PingCommand(input);
 * const response = await client.send(command);
 * // { // PingResponse
 * //   status: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PingCommandInput - {@link PingCommandInput}
 * @returns {@link PingCommandOutput}
 * @see {@link PingCommandInput} for command's `input` shape.
 * @see {@link PingCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 *
 * @public
 */
export class PingCommand extends $Command
  .classBuilder<
    PingCommandInput,
    PingCommandOutput,
    PrivateNetworksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PrivateNetworksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("E5GNetworkControllerLambda", "Ping", {})
  .n("PrivateNetworksClient", "PingCommand")
  .f(void 0, void 0)
  .ser(se_PingCommand)
  .de(de_PingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: PingResponse;
    };
    sdk: {
      input: PingCommandInput;
      output: PingCommandOutput;
    };
  };
}
