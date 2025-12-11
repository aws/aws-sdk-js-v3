// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type {
  DisassociateWirelessGatewayFromCertificateRequest,
  DisassociateWirelessGatewayFromCertificateResponse,
} from "../models/models_0";
import { DisassociateWirelessGatewayFromCertificate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateWirelessGatewayFromCertificateCommand}.
 */
export interface DisassociateWirelessGatewayFromCertificateCommandInput
  extends DisassociateWirelessGatewayFromCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateWirelessGatewayFromCertificateCommand}.
 */
export interface DisassociateWirelessGatewayFromCertificateCommandOutput
  extends DisassociateWirelessGatewayFromCertificateResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a wireless gateway from its currently associated certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateWirelessGatewayFromCertificateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateWirelessGatewayFromCertificateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // DisassociateWirelessGatewayFromCertificateRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DisassociateWirelessGatewayFromCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateWirelessGatewayFromCertificateCommandInput - {@link DisassociateWirelessGatewayFromCertificateCommandInput}
 * @returns {@link DisassociateWirelessGatewayFromCertificateCommandOutput}
 * @see {@link DisassociateWirelessGatewayFromCertificateCommandInput} for command's `input` shape.
 * @see {@link DisassociateWirelessGatewayFromCertificateCommandOutput} for command's `response` shape.
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
export class DisassociateWirelessGatewayFromCertificateCommand extends $Command
  .classBuilder<
    DisassociateWirelessGatewayFromCertificateCommandInput,
    DisassociateWirelessGatewayFromCertificateCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "DisassociateWirelessGatewayFromCertificate", {})
  .n("IoTWirelessClient", "DisassociateWirelessGatewayFromCertificateCommand")
  .sc(DisassociateWirelessGatewayFromCertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateWirelessGatewayFromCertificateRequest;
      output: {};
    };
    sdk: {
      input: DisassociateWirelessGatewayFromCertificateCommandInput;
      output: DisassociateWirelessGatewayFromCertificateCommandOutput;
    };
  };
}
