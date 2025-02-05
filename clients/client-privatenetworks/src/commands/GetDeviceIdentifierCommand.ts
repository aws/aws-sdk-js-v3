// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetDeviceIdentifierRequest,
  GetDeviceIdentifierResponse,
  GetDeviceIdentifierResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_GetDeviceIdentifierCommand, se_GetDeviceIdentifierCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceIdentifierCommand}.
 */
export interface GetDeviceIdentifierCommandInput extends GetDeviceIdentifierRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceIdentifierCommand}.
 */
export interface GetDeviceIdentifierCommandOutput extends GetDeviceIdentifierResponse, __MetadataBearer {}

/**
 * <p>Gets the specified device identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, GetDeviceIdentifierCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, GetDeviceIdentifierCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PrivateNetworksClient(config);
 * const input = { // GetDeviceIdentifierRequest
 *   deviceIdentifierArn: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceIdentifierCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceIdentifierResponse
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
 * @param GetDeviceIdentifierCommandInput - {@link GetDeviceIdentifierCommandInput}
 * @returns {@link GetDeviceIdentifierCommandOutput}
 * @see {@link GetDeviceIdentifierCommandInput} for command's `input` shape.
 * @see {@link GetDeviceIdentifierCommandOutput} for command's `response` shape.
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
export class GetDeviceIdentifierCommand extends $Command
  .classBuilder<
    GetDeviceIdentifierCommandInput,
    GetDeviceIdentifierCommandOutput,
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
  .s("E5GNetworkControllerLambda", "GetDeviceIdentifier", {})
  .n("PrivateNetworksClient", "GetDeviceIdentifierCommand")
  .f(void 0, GetDeviceIdentifierResponseFilterSensitiveLog)
  .ser(se_GetDeviceIdentifierCommand)
  .de(de_GetDeviceIdentifierCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeviceIdentifierRequest;
      output: GetDeviceIdentifierResponse;
    };
    sdk: {
      input: GetDeviceIdentifierCommandInput;
      output: GetDeviceIdentifierCommandOutput;
    };
  };
}
