// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  UpdatePartnerAccountRequest,
  UpdatePartnerAccountRequestFilterSensitiveLog,
  UpdatePartnerAccountResponse,
} from "../models/models_1";
import { de_UpdatePartnerAccountCommand, se_UpdatePartnerAccountCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePartnerAccountCommand}.
 */
export interface UpdatePartnerAccountCommandInput extends UpdatePartnerAccountRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePartnerAccountCommand}.
 */
export interface UpdatePartnerAccountCommandOutput extends UpdatePartnerAccountResponse, __MetadataBearer {}

/**
 * <p>Updates properties of a partner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, UpdatePartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, UpdatePartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTWirelessClient(config);
 * const input = { // UpdatePartnerAccountRequest
 *   Sidewalk: { // SidewalkUpdateAccount
 *     AppServerPrivateKey: "STRING_VALUE",
 *   },
 *   PartnerAccountId: "STRING_VALUE", // required
 *   PartnerType: "Sidewalk", // required
 * };
 * const command = new UpdatePartnerAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePartnerAccountCommandInput - {@link UpdatePartnerAccountCommandInput}
 * @returns {@link UpdatePartnerAccountCommandOutput}
 * @see {@link UpdatePartnerAccountCommandInput} for command's `input` shape.
 * @see {@link UpdatePartnerAccountCommandOutput} for command's `response` shape.
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
export class UpdatePartnerAccountCommand extends $Command
  .classBuilder<
    UpdatePartnerAccountCommandInput,
    UpdatePartnerAccountCommandOutput,
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
  .s("iotwireless", "UpdatePartnerAccount", {})
  .n("IoTWirelessClient", "UpdatePartnerAccountCommand")
  .f(UpdatePartnerAccountRequestFilterSensitiveLog, void 0)
  .ser(se_UpdatePartnerAccountCommand)
  .de(de_UpdatePartnerAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePartnerAccountRequest;
      output: {};
    };
    sdk: {
      input: UpdatePartnerAccountCommandInput;
      output: UpdatePartnerAccountCommandOutput;
    };
  };
}
