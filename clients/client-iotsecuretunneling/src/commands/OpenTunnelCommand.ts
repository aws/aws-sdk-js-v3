// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { OpenTunnelRequest, OpenTunnelResponse } from "../models/models_0";
import { OpenTunnel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link OpenTunnelCommand}.
 */
export interface OpenTunnelCommandInput extends OpenTunnelRequest {}
/**
 * @public
 *
 * The output of {@link OpenTunnelCommand}.
 */
export interface OpenTunnelCommandOutput extends OpenTunnelResponse, __MetadataBearer {}

/**
 * <p>Creates a new tunnel, and returns two client access tokens for clients to use to
 * 			connect to the IoT Secure Tunneling proxy server.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">OpenTunnel</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, OpenTunnelCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, OpenTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * // import type { IoTSecureTunnelingClientConfig } from "@aws-sdk/client-iotsecuretunneling";
 * const config = {}; // type is IoTSecureTunnelingClientConfig
 * const client = new IoTSecureTunnelingClient(config);
 * const input = { // OpenTunnelRequest
 *   description: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   destinationConfig: { // DestinationConfig
 *     thingName: "STRING_VALUE",
 *     services: [ // ServiceList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   timeoutConfig: { // TimeoutConfig
 *     maxLifetimeTimeoutMinutes: Number("int"),
 *   },
 * };
 * const command = new OpenTunnelCommand(input);
 * const response = await client.send(command);
 * // { // OpenTunnelResponse
 * //   tunnelId: "STRING_VALUE",
 * //   tunnelArn: "STRING_VALUE",
 * //   sourceAccessToken: "STRING_VALUE",
 * //   destinationAccessToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param OpenTunnelCommandInput - {@link OpenTunnelCommandInput}
 * @returns {@link OpenTunnelCommandOutput}
 * @see {@link OpenTunnelCommandInput} for command's `input` shape.
 * @see {@link OpenTunnelCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for IoTSecureTunnelingClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Thrown when a tunnel limit is exceeded.</p>
 *
 * @throws {@link IoTSecureTunnelingServiceException}
 * <p>Base exception class for all service exceptions from IoTSecureTunneling service.</p>
 *
 *
 * @public
 */
export class OpenTunnelCommand extends command<OpenTunnelCommandInput, OpenTunnelCommandOutput>(
  _ep0,
  _mw0,
  "OpenTunnel",
  OpenTunnel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: OpenTunnelRequest;
      output: OpenTunnelResponse;
    };
    sdk: {
      input: OpenTunnelCommandInput;
      output: OpenTunnelCommandOutput;
    };
  };
}
