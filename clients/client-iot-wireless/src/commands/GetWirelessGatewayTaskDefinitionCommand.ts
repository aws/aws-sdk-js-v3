// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { GetWirelessGatewayTaskDefinitionRequest, GetWirelessGatewayTaskDefinitionResponse } from "../models/models_0";
import {
  de_GetWirelessGatewayTaskDefinitionCommand,
  se_GetWirelessGatewayTaskDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWirelessGatewayTaskDefinitionCommand}.
 */
export interface GetWirelessGatewayTaskDefinitionCommandInput extends GetWirelessGatewayTaskDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetWirelessGatewayTaskDefinitionCommand}.
 */
export interface GetWirelessGatewayTaskDefinitionCommandOutput
  extends GetWirelessGatewayTaskDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about a wireless gateway task definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayTaskDefinitionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayTaskDefinitionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTWirelessClient(config);
 * const input = { // GetWirelessGatewayTaskDefinitionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetWirelessGatewayTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetWirelessGatewayTaskDefinitionResponse
 * //   AutoCreateTasks: true || false,
 * //   Name: "STRING_VALUE",
 * //   Update: { // UpdateWirelessGatewayTaskCreate
 * //     UpdateDataSource: "STRING_VALUE",
 * //     UpdateDataRole: "STRING_VALUE",
 * //     LoRaWAN: { // LoRaWANUpdateGatewayTaskCreate
 * //       UpdateSignature: "STRING_VALUE",
 * //       SigKeyCrc: Number("long"),
 * //       CurrentVersion: { // LoRaWANGatewayVersion
 * //         PackageVersion: "STRING_VALUE",
 * //         Model: "STRING_VALUE",
 * //         Station: "STRING_VALUE",
 * //       },
 * //       UpdateVersion: {
 * //         PackageVersion: "STRING_VALUE",
 * //         Model: "STRING_VALUE",
 * //         Station: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWirelessGatewayTaskDefinitionCommandInput - {@link GetWirelessGatewayTaskDefinitionCommandInput}
 * @returns {@link GetWirelessGatewayTaskDefinitionCommandOutput}
 * @see {@link GetWirelessGatewayTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
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
export class GetWirelessGatewayTaskDefinitionCommand extends $Command
  .classBuilder<
    GetWirelessGatewayTaskDefinitionCommandInput,
    GetWirelessGatewayTaskDefinitionCommandOutput,
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
  .s("iotwireless", "GetWirelessGatewayTaskDefinition", {})
  .n("IoTWirelessClient", "GetWirelessGatewayTaskDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_GetWirelessGatewayTaskDefinitionCommand)
  .de(de_GetWirelessGatewayTaskDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWirelessGatewayTaskDefinitionRequest;
      output: GetWirelessGatewayTaskDefinitionResponse;
    };
    sdk: {
      input: GetWirelessGatewayTaskDefinitionCommandInput;
      output: GetWirelessGatewayTaskDefinitionCommandOutput;
    };
  };
}
