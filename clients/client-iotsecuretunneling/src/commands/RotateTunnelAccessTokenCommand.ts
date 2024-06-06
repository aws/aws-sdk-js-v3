// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTSecureTunnelingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTSecureTunnelingClient";
import {
  RotateTunnelAccessTokenRequest,
  RotateTunnelAccessTokenResponse,
  RotateTunnelAccessTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_RotateTunnelAccessTokenCommand, se_RotateTunnelAccessTokenCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RotateTunnelAccessTokenCommand}.
 */
export interface RotateTunnelAccessTokenCommandInput extends RotateTunnelAccessTokenRequest {}
/**
 * @public
 *
 * The output of {@link RotateTunnelAccessTokenCommand}.
 */
export interface RotateTunnelAccessTokenCommandOutput extends RotateTunnelAccessTokenResponse, __MetadataBearer {}

/**
 * <p>Revokes the current client access token (CAT) and returns new CAT for clients to
 * 			use when reconnecting to secure tunneling to access the same tunnel.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RotateTunnelAccessToken</a> action.</p>
 *          <note>
 *             <p>Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel
 * 				duration is 12 hours and the tunnel has already been open for 4 hours. When you
 * 				rotate the access tokens, the new tokens that are generated can only be used for the
 * 				remaining 8 hours.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, RotateTunnelAccessTokenCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, RotateTunnelAccessTokenCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const input = { // RotateTunnelAccessTokenRequest
 *   tunnelId: "STRING_VALUE", // required
 *   clientMode: "SOURCE" || "DESTINATION" || "ALL", // required
 *   destinationConfig: { // DestinationConfig
 *     thingName: "STRING_VALUE",
 *     services: [ // ServiceList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new RotateTunnelAccessTokenCommand(input);
 * const response = await client.send(command);
 * // { // RotateTunnelAccessTokenResponse
 * //   tunnelArn: "STRING_VALUE",
 * //   sourceAccessToken: "STRING_VALUE",
 * //   destinationAccessToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RotateTunnelAccessTokenCommandInput - {@link RotateTunnelAccessTokenCommandInput}
 * @returns {@link RotateTunnelAccessTokenCommandOutput}
 * @see {@link RotateTunnelAccessTokenCommandInput} for command's `input` shape.
 * @see {@link RotateTunnelAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for IoTSecureTunnelingClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when an operation is attempted on a resource that does not exist.</p>
 *
 * @throws {@link IoTSecureTunnelingServiceException}
 * <p>Base exception class for all service exceptions from IoTSecureTunneling service.</p>
 *
 * @public
 */
export class RotateTunnelAccessTokenCommand extends $Command
  .classBuilder<
    RotateTunnelAccessTokenCommandInput,
    RotateTunnelAccessTokenCommandOutput,
    IoTSecureTunnelingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTSecureTunnelingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTSecuredTunneling", "RotateTunnelAccessToken", {})
  .n("IoTSecureTunnelingClient", "RotateTunnelAccessTokenCommand")
  .f(void 0, RotateTunnelAccessTokenResponseFilterSensitiveLog)
  .ser(se_RotateTunnelAccessTokenCommand)
  .de(de_RotateTunnelAccessTokenCommand)
  .build() {}
