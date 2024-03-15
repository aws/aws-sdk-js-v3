// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDeviceUsageDataRequest, DeleteDeviceUsageDataResponse } from "../models/models_0";
import { de_DeleteDeviceUsageDataCommand, se_DeleteDeviceUsageDataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeviceUsageDataCommand}.
 */
export interface DeleteDeviceUsageDataCommandInput extends DeleteDeviceUsageDataRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeviceUsageDataCommand}.
 */
export interface DeleteDeviceUsageDataCommandOutput extends DeleteDeviceUsageDataResponse, __MetadataBearer {}

/**
 * <p>When this action is called for a specified shared device, it allows authorized users to
 *          delete the device's entire previous history of voice input data and associated response
 *          data. This action can be called once every 24 hours for a specific shared device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteDeviceUsageDataCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteDeviceUsageDataCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DeleteDeviceUsageDataRequest
 *   DeviceArn: "STRING_VALUE", // required
 *   DeviceUsageType: "VOICE", // required
 * };
 * const command = new DeleteDeviceUsageDataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeviceUsageDataCommandInput - {@link DeleteDeviceUsageDataCommandInput}
 * @returns {@link DeleteDeviceUsageDataCommandOutput}
 * @see {@link DeleteDeviceUsageDataCommandInput} for command's `input` shape.
 * @see {@link DeleteDeviceUsageDataCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link DeviceNotRegisteredException} (client fault)
 *  <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
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
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class DeleteDeviceUsageDataCommand extends $Command
  .classBuilder<
    DeleteDeviceUsageDataCommandInput,
    DeleteDeviceUsageDataCommandOutput,
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
  .s("AlexaForBusiness", "DeleteDeviceUsageData", {})
  .n("AlexaForBusinessClient", "DeleteDeviceUsageDataCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDeviceUsageDataCommand)
  .de(de_DeleteDeviceUsageDataCommand)
  .build() {}
