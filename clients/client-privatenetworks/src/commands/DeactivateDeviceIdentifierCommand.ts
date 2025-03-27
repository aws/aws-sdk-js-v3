// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeactivateDeviceIdentifierRequest,
  DeactivateDeviceIdentifierResponse,
  DeactivateDeviceIdentifierResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_DeactivateDeviceIdentifierCommand, se_DeactivateDeviceIdentifierCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivateDeviceIdentifierCommand}.
 */
export interface DeactivateDeviceIdentifierCommandInput extends DeactivateDeviceIdentifierRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateDeviceIdentifierCommand}.
 */
export interface DeactivateDeviceIdentifierCommandOutput extends DeactivateDeviceIdentifierResponse, __MetadataBearer {}

/**
 * <p>Deactivates the specified device identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, DeactivateDeviceIdentifierCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, DeactivateDeviceIdentifierCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // DeactivateDeviceIdentifierRequest
 *   deviceIdentifierArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeactivateDeviceIdentifierCommand(input);
 * const response = await client.send(command);
 * // { // DeactivateDeviceIdentifierResponse
 * //   deviceIdentifier: { // DeviceIdentifier
 * //     deviceIdentifierArn: "STRING_VALUE",
 * //     trafficGroupArn: "STRING_VALUE",
 * //     networkArn: "STRING_VALUE",
 * //     imsi: "STRING_VALUE",
 * //     iccid: "STRING_VALUE",
 * //     vendor: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     orderArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeactivateDeviceIdentifierCommandInput - {@link DeactivateDeviceIdentifierCommandInput}
 * @returns {@link DeactivateDeviceIdentifierCommandOutput}
 * @see {@link DeactivateDeviceIdentifierCommandInput} for command's `input` shape.
 * @see {@link DeactivateDeviceIdentifierCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation.</p>
 *
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 *
 * @public
 */
export class DeactivateDeviceIdentifierCommand extends $Command
  .classBuilder<
    DeactivateDeviceIdentifierCommandInput,
    DeactivateDeviceIdentifierCommandOutput,
    PrivateNetworksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PrivateNetworksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("E5GNetworkControllerLambda", "DeactivateDeviceIdentifier", {})
  .n("PrivateNetworksClient", "DeactivateDeviceIdentifierCommand")
  .f(void 0, DeactivateDeviceIdentifierResponseFilterSensitiveLog)
  .ser(se_DeactivateDeviceIdentifierCommand)
  .de(de_DeactivateDeviceIdentifierCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateDeviceIdentifierRequest;
      output: DeactivateDeviceIdentifierResponse;
    };
    sdk: {
      input: DeactivateDeviceIdentifierCommandInput;
      output: DeactivateDeviceIdentifierCommandOutput;
    };
  };
}
