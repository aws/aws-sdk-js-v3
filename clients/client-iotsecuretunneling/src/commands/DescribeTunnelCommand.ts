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
import { DescribeTunnelRequest, DescribeTunnelResponse } from "../models/models_0";
import { de_DescribeTunnelCommand, se_DescribeTunnelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTunnelCommand}.
 */
export interface DescribeTunnelCommandInput extends DescribeTunnelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTunnelCommand}.
 */
export interface DescribeTunnelCommandOutput extends DescribeTunnelResponse, __MetadataBearer {}

/**
 * <p>Gets information about a tunnel identified by the unique tunnel id.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeTunnel</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, DescribeTunnelCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, DescribeTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTSecureTunnelingClient(config);
 * const input = { // DescribeTunnelRequest
 *   tunnelId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTunnelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTunnelResponse
 * //   tunnel: { // Tunnel
 * //     tunnelId: "STRING_VALUE",
 * //     tunnelArn: "STRING_VALUE",
 * //     status: "OPEN" || "CLOSED",
 * //     sourceConnectionState: { // ConnectionState
 * //       status: "CONNECTED" || "DISCONNECTED",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     destinationConnectionState: {
 * //       status: "CONNECTED" || "DISCONNECTED",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     description: "STRING_VALUE",
 * //     destinationConfig: { // DestinationConfig
 * //       thingName: "STRING_VALUE",
 * //       services: [ // ServiceList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     timeoutConfig: { // TimeoutConfig
 * //       maxLifetimeTimeoutMinutes: Number("int"),
 * //     },
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTunnelCommandInput - {@link DescribeTunnelCommandInput}
 * @returns {@link DescribeTunnelCommandOutput}
 * @see {@link DescribeTunnelCommandInput} for command's `input` shape.
 * @see {@link DescribeTunnelCommandOutput} for command's `response` shape.
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
export class DescribeTunnelCommand extends $Command
  .classBuilder<
    DescribeTunnelCommandInput,
    DescribeTunnelCommandOutput,
    IoTSecureTunnelingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSecureTunnelingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTSecuredTunneling", "DescribeTunnel", {})
  .n("IoTSecureTunnelingClient", "DescribeTunnelCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTunnelCommand)
  .de(de_DescribeTunnelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTunnelRequest;
      output: DescribeTunnelResponse;
    };
    sdk: {
      input: DescribeTunnelCommandInput;
      output: DescribeTunnelCommandOutput;
    };
  };
}
