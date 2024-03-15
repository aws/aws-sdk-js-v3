// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDeviceRequest, UpdateDeviceResponse } from "../models/models_0";
import { de_UpdateDeviceCommand, se_UpdateDeviceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeviceCommand}.
 */
export interface UpdateDeviceCommandInput extends UpdateDeviceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeviceCommand}.
 */
export interface UpdateDeviceCommandOutput extends UpdateDeviceResponse, __MetadataBearer {}

/**
 * <p>Updates the device name by device ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateDeviceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateDeviceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // UpdateDeviceRequest
 *   DeviceArn: "STRING_VALUE",
 *   DeviceName: "STRING_VALUE",
 * };
 * const command = new UpdateDeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDeviceCommandInput - {@link UpdateDeviceCommandInput}
 * @returns {@link UpdateDeviceCommandOutput}
 * @see {@link UpdateDeviceCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link DeviceNotRegisteredException} (client fault)
 *  <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class UpdateDeviceCommand extends $Command
  .classBuilder<
    UpdateDeviceCommandInput,
    UpdateDeviceCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "UpdateDevice", {})
  .n("AlexaForBusinessClient", "UpdateDeviceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDeviceCommand)
  .de(de_UpdateDeviceCommand)
  .build() {}
