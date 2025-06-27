// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessGatewayCertificateRequest, GetWirelessGatewayCertificateResponse } from "../models/models_0";
import {
  de_GetWirelessGatewayCertificateCommand,
  se_GetWirelessGatewayCertificateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWirelessGatewayCertificateCommand}.
 */
export interface GetWirelessGatewayCertificateCommandInput extends GetWirelessGatewayCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetWirelessGatewayCertificateCommand}.
 */
export interface GetWirelessGatewayCertificateCommandOutput
  extends GetWirelessGatewayCertificateResponse,
    __MetadataBearer {}

/**
 * <p>Gets the ID of the certificate that is currently associated with a wireless
 *             gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayCertificateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayCertificateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetWirelessGatewayCertificateRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetWirelessGatewayCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetWirelessGatewayCertificateResponse
 * //   IotCertificateId: "STRING_VALUE",
 * //   LoRaWANNetworkServerCertificateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWirelessGatewayCertificateCommandInput - {@link GetWirelessGatewayCertificateCommandInput}
 * @returns {@link GetWirelessGatewayCertificateCommandOutput}
 * @see {@link GetWirelessGatewayCertificateCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class GetWirelessGatewayCertificateCommand extends $Command
  .classBuilder<
    GetWirelessGatewayCertificateCommandInput,
    GetWirelessGatewayCertificateCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "GetWirelessGatewayCertificate", {})
  .n("IoTWirelessClient", "GetWirelessGatewayCertificateCommand")
  .f(void 0, void 0)
  .ser(se_GetWirelessGatewayCertificateCommand)
  .de(de_GetWirelessGatewayCertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWirelessGatewayCertificateRequest;
      output: GetWirelessGatewayCertificateResponse;
    };
    sdk: {
      input: GetWirelessGatewayCertificateCommandInput;
      output: GetWirelessGatewayCertificateCommandOutput;
    };
  };
}
