// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateDeviceWithNetworkProfileRequest,
  AssociateDeviceWithNetworkProfileResponse,
} from "../models/models_0";
import {
  de_AssociateDeviceWithNetworkProfileCommand,
  se_AssociateDeviceWithNetworkProfileCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateDeviceWithNetworkProfileCommand}.
 */
export interface AssociateDeviceWithNetworkProfileCommandInput extends AssociateDeviceWithNetworkProfileRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDeviceWithNetworkProfileCommand}.
 */
export interface AssociateDeviceWithNetworkProfileCommandOutput
  extends AssociateDeviceWithNetworkProfileResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Associates a device with the specified network profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateDeviceWithNetworkProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateDeviceWithNetworkProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // AssociateDeviceWithNetworkProfileRequest
 *   DeviceArn: "STRING_VALUE", // required
 *   NetworkProfileArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateDeviceWithNetworkProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDeviceWithNetworkProfileCommandInput - {@link AssociateDeviceWithNetworkProfileCommandInput}
 * @returns {@link AssociateDeviceWithNetworkProfileCommandOutput}
 * @see {@link AssociateDeviceWithNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link AssociateDeviceWithNetworkProfileCommandOutput} for command's `response` shape.
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
 */
export class AssociateDeviceWithNetworkProfileCommand extends $Command
  .classBuilder<
    AssociateDeviceWithNetworkProfileCommandInput,
    AssociateDeviceWithNetworkProfileCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AlexaForBusinessClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "AssociateDeviceWithNetworkProfile", {})
  .n("AlexaForBusinessClient", "AssociateDeviceWithNetworkProfileCommand")
  .f(void 0, void 0)
  .ser(se_AssociateDeviceWithNetworkProfileCommand)
  .de(de_AssociateDeviceWithNetworkProfileCommand)
  .build() {}
