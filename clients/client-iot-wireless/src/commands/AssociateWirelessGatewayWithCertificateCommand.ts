// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type {
  AssociateWirelessGatewayWithCertificateRequest,
  AssociateWirelessGatewayWithCertificateResponse,
} from "../models/models_0";
import { AssociateWirelessGatewayWithCertificate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateWirelessGatewayWithCertificateCommand}.
 */
export interface AssociateWirelessGatewayWithCertificateCommandInput
  extends AssociateWirelessGatewayWithCertificateRequest {}
/**
 * @public
 *
 * The output of {@link AssociateWirelessGatewayWithCertificateCommand}.
 */
export interface AssociateWirelessGatewayWithCertificateCommandOutput
  extends AssociateWirelessGatewayWithCertificateResponse,
    __MetadataBearer {}

/**
 * <p>Associates a wireless gateway with a certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateWirelessGatewayWithCertificateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateWirelessGatewayWithCertificateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // AssociateWirelessGatewayWithCertificateRequest
 *   Id: "STRING_VALUE", // required
 *   IotCertificateId: "STRING_VALUE", // required
 * };
 * const command = new AssociateWirelessGatewayWithCertificateCommand(input);
 * const response = await client.send(command);
 * // { // AssociateWirelessGatewayWithCertificateResponse
 * //   IotCertificateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateWirelessGatewayWithCertificateCommandInput - {@link AssociateWirelessGatewayWithCertificateCommandInput}
 * @returns {@link AssociateWirelessGatewayWithCertificateCommandOutput}
 * @see {@link AssociateWirelessGatewayWithCertificateCommandInput} for command's `input` shape.
 * @see {@link AssociateWirelessGatewayWithCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
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
export class AssociateWirelessGatewayWithCertificateCommand extends $Command
  .classBuilder<
    AssociateWirelessGatewayWithCertificateCommandInput,
    AssociateWirelessGatewayWithCertificateCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "AssociateWirelessGatewayWithCertificate", {})
  .n("IoTWirelessClient", "AssociateWirelessGatewayWithCertificateCommand")
  .sc(AssociateWirelessGatewayWithCertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateWirelessGatewayWithCertificateRequest;
      output: AssociateWirelessGatewayWithCertificateResponse;
    };
    sdk: {
      input: AssociateWirelessGatewayWithCertificateCommandInput;
      output: AssociateWirelessGatewayWithCertificateCommandOutput;
    };
  };
}
