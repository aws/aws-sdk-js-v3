// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ActivateDeviceIdentifierRequest,
  ActivateDeviceIdentifierResponse,
  ActivateDeviceIdentifierResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_ActivateDeviceIdentifierCommand, se_ActivateDeviceIdentifierCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ActivateDeviceIdentifierCommand}.
 */
export interface ActivateDeviceIdentifierCommandInput extends ActivateDeviceIdentifierRequest {}
/**
 * @public
 *
 * The output of {@link ActivateDeviceIdentifierCommand}.
 */
export interface ActivateDeviceIdentifierCommandOutput extends ActivateDeviceIdentifierResponse, __MetadataBearer {}

/**
 * <p>Activates the specified device identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ActivateDeviceIdentifierCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ActivateDeviceIdentifierCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PrivateNetworksClient(config);
 * const input = { // ActivateDeviceIdentifierRequest
 *   deviceIdentifierArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new ActivateDeviceIdentifierCommand(input);
 * const response = await client.send(command);
 * // { // ActivateDeviceIdentifierResponse
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
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ActivateDeviceIdentifierCommandInput - {@link ActivateDeviceIdentifierCommandInput}
 * @returns {@link ActivateDeviceIdentifierCommandOutput}
 * @see {@link ActivateDeviceIdentifierCommandInput} for command's `input` shape.
 * @see {@link ActivateDeviceIdentifierCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ActivateDeviceIdentifierCommand extends $Command
  .classBuilder<
    ActivateDeviceIdentifierCommandInput,
    ActivateDeviceIdentifierCommandOutput,
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
  .s("E5GNetworkControllerLambda", "ActivateDeviceIdentifier", {})
  .n("PrivateNetworksClient", "ActivateDeviceIdentifierCommand")
  .f(void 0, ActivateDeviceIdentifierResponseFilterSensitiveLog)
  .ser(se_ActivateDeviceIdentifierCommand)
  .de(de_ActivateDeviceIdentifierCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivateDeviceIdentifierRequest;
      output: ActivateDeviceIdentifierResponse;
    };
    sdk: {
      input: ActivateDeviceIdentifierCommandInput;
      output: ActivateDeviceIdentifierCommandOutput;
    };
  };
}
