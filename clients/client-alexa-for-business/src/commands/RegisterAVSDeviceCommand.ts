// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterAVSDeviceRequest, RegisterAVSDeviceResponse } from "../models/models_0";
import { de_RegisterAVSDeviceCommand, se_RegisterAVSDeviceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RegisterAVSDeviceCommand}.
 */
export interface RegisterAVSDeviceCommandInput extends RegisterAVSDeviceRequest {}
/**
 * @public
 *
 * The output of {@link RegisterAVSDeviceCommand}.
 */
export interface RegisterAVSDeviceCommandOutput extends RegisterAVSDeviceResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated Alexa For Business is no longer supported
 *
 * <p>Registers an Alexa-enabled device built by an Original Equipment Manufacturer (OEM)
 *          using Alexa Voice Service (AVS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, RegisterAVSDeviceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, RegisterAVSDeviceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // RegisterAVSDeviceRequest
 *   ClientId: "STRING_VALUE", // required
 *   UserCode: "STRING_VALUE", // required
 *   ProductId: "STRING_VALUE", // required
 *   DeviceSerialNumber: "STRING_VALUE",
 *   AmazonId: "STRING_VALUE", // required
 *   RoomArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new RegisterAVSDeviceCommand(input);
 * const response = await client.send(command);
 * // { // RegisterAVSDeviceResponse
 * //   DeviceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterAVSDeviceCommandInput - {@link RegisterAVSDeviceCommandInput}
 * @returns {@link RegisterAVSDeviceCommandOutput}
 * @see {@link RegisterAVSDeviceCommandInput} for command's `input` shape.
 * @see {@link RegisterAVSDeviceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link InvalidDeviceException} (client fault)
 *  <p>The device is in an invalid state.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class RegisterAVSDeviceCommand extends $Command
  .classBuilder<
    RegisterAVSDeviceCommandInput,
    RegisterAVSDeviceCommandOutput,
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
  .s("AlexaForBusiness", "RegisterAVSDevice", {})
  .n("AlexaForBusinessClient", "RegisterAVSDeviceCommand")
  .f(void 0, void 0)
  .ser(se_RegisterAVSDeviceCommand)
  .de(de_RegisterAVSDeviceCommand)
  .build() {}
