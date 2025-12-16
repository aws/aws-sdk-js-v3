// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTSecureTunnelingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTSecureTunnelingClient";
import type { CloseTunnelRequest, CloseTunnelResponse } from "../models/models_0";
import { CloseTunnel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CloseTunnelCommand}.
 */
export interface CloseTunnelCommandInput extends CloseTunnelRequest {}
/**
 * @public
 *
 * The output of {@link CloseTunnelCommand}.
 */
export interface CloseTunnelCommandOutput extends CloseTunnelResponse, __MetadataBearer {}

/**
 * <p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code>
 * 			request is received, we close the WebSocket connections between the client and proxy
 * 			server so no data can be transmitted.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CloseTunnel</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, CloseTunnelCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, CloseTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * // import type { IoTSecureTunnelingClientConfig } from "@aws-sdk/client-iotsecuretunneling";
 * const config = {}; // type is IoTSecureTunnelingClientConfig
 * const client = new IoTSecureTunnelingClient(config);
 * const input = { // CloseTunnelRequest
 *   tunnelId: "STRING_VALUE", // required
 *   delete: true || false,
 * };
 * const command = new CloseTunnelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CloseTunnelCommandInput - {@link CloseTunnelCommandInput}
 * @returns {@link CloseTunnelCommandOutput}
 * @see {@link CloseTunnelCommandInput} for command's `input` shape.
 * @see {@link CloseTunnelCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for IoTSecureTunnelingClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when an operation is attempted on a resource that does not exist.</p>
 *
 * @throws {@link IoTSecureTunnelingServiceException}
 * <p>Base exception class for all service exceptions from IoTSecureTunneling service.</p>
 *
 *
 * @public
 */
export class CloseTunnelCommand extends $Command
  .classBuilder<
    CloseTunnelCommandInput,
    CloseTunnelCommandOutput,
    IoTSecureTunnelingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSecureTunnelingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTSecuredTunneling", "CloseTunnel", {})
  .n("IoTSecureTunnelingClient", "CloseTunnelCommand")
  .sc(CloseTunnel$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CloseTunnelRequest;
      output: {};
    };
    sdk: {
      input: CloseTunnelCommandInput;
      output: CloseTunnelCommandOutput;
    };
  };
}
