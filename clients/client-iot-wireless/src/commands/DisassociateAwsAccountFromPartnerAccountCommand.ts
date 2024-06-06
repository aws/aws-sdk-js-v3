// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  DisassociateAwsAccountFromPartnerAccountRequest,
  DisassociateAwsAccountFromPartnerAccountResponse,
} from "../models/models_0";
import {
  de_DisassociateAwsAccountFromPartnerAccountCommand,
  se_DisassociateAwsAccountFromPartnerAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateAwsAccountFromPartnerAccountCommand}.
 */
export interface DisassociateAwsAccountFromPartnerAccountCommandInput
  extends DisassociateAwsAccountFromPartnerAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAwsAccountFromPartnerAccountCommand}.
 */
export interface DisassociateAwsAccountFromPartnerAccountCommandOutput
  extends DisassociateAwsAccountFromPartnerAccountResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates your AWS account from a partner account. If
 *                 <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>,
 *             disassociates your AWS account from all partner accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DisassociateAwsAccountFromPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DisassociateAwsAccountFromPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // DisassociateAwsAccountFromPartnerAccountRequest
 *   PartnerAccountId: "STRING_VALUE", // required
 *   PartnerType: "Sidewalk", // required
 * };
 * const command = new DisassociateAwsAccountFromPartnerAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAwsAccountFromPartnerAccountCommandInput - {@link DisassociateAwsAccountFromPartnerAccountCommandInput}
 * @returns {@link DisassociateAwsAccountFromPartnerAccountCommandOutput}
 * @see {@link DisassociateAwsAccountFromPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateAwsAccountFromPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
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
 * @public
 */
export class DisassociateAwsAccountFromPartnerAccountCommand extends $Command
  .classBuilder<
    DisassociateAwsAccountFromPartnerAccountCommandInput,
    DisassociateAwsAccountFromPartnerAccountCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "DisassociateAwsAccountFromPartnerAccount", {})
  .n("IoTWirelessClient", "DisassociateAwsAccountFromPartnerAccountCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateAwsAccountFromPartnerAccountCommand)
  .de(de_DisassociateAwsAccountFromPartnerAccountCommand)
  .build() {}
