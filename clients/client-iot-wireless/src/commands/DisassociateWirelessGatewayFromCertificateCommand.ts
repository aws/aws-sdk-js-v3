// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateWirelessGatewayFromCertificateRequest,
  DisassociateWirelessGatewayFromCertificateResponse,
} from "../models/models_0";
import { DisassociateWirelessGatewayFromCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateWirelessGatewayFromCertificateCommand}.
 */
export interface DisassociateWirelessGatewayFromCertificateCommandInput extends DisassociateWirelessGatewayFromCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateWirelessGatewayFromCertificateCommand}.
 */
export interface DisassociateWirelessGatewayFromCertificateCommandOutput extends DisassociateWirelessGatewayFromCertificateResponse, __MetadataBearer {}

/**
 * Disassociates a wireless gateway from its currently associated certificate.
 *
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
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class DisassociateWirelessGatewayFromCertificateCommand extends command<DisassociateWirelessGatewayFromCertificateCommandInput, DisassociateWirelessGatewayFromCertificateCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateWirelessGatewayFromCertificate",
  DisassociateWirelessGatewayFromCertificate$
) {
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
