// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  CreateWirelessGatewayTaskDefinitionRequest,
  CreateWirelessGatewayTaskDefinitionResponse,
} from "../models/models_0";
import {
  de_CreateWirelessGatewayTaskDefinitionCommand,
  se_CreateWirelessGatewayTaskDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWirelessGatewayTaskDefinitionCommand}.
 */
export interface CreateWirelessGatewayTaskDefinitionCommandInput extends CreateWirelessGatewayTaskDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateWirelessGatewayTaskDefinitionCommand}.
 */
export interface CreateWirelessGatewayTaskDefinitionCommandOutput
  extends CreateWirelessGatewayTaskDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Creates a gateway task definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateWirelessGatewayTaskDefinitionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateWirelessGatewayTaskDefinitionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // CreateWirelessGatewayTaskDefinitionRequest
 *   AutoCreateTasks: true || false, // required
 *   Name: "STRING_VALUE",
 *   Update: { // UpdateWirelessGatewayTaskCreate
 *     UpdateDataSource: "STRING_VALUE",
 *     UpdateDataRole: "STRING_VALUE",
 *     LoRaWAN: { // LoRaWANUpdateGatewayTaskCreate
 *       UpdateSignature: "STRING_VALUE",
 *       SigKeyCrc: Number("long"),
 *       CurrentVersion: { // LoRaWANGatewayVersion
 *         PackageVersion: "STRING_VALUE",
 *         Model: "STRING_VALUE",
 *         Station: "STRING_VALUE",
 *       },
 *       UpdateVersion: {
 *         PackageVersion: "STRING_VALUE",
 *         Model: "STRING_VALUE",
 *         Station: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateWirelessGatewayTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateWirelessGatewayTaskDefinitionResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWirelessGatewayTaskDefinitionCommandInput - {@link CreateWirelessGatewayTaskDefinitionCommandInput}
 * @returns {@link CreateWirelessGatewayTaskDefinitionCommandOutput}
 * @see {@link CreateWirelessGatewayTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateWirelessGatewayTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
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
export class CreateWirelessGatewayTaskDefinitionCommand extends $Command
  .classBuilder<
    CreateWirelessGatewayTaskDefinitionCommandInput,
    CreateWirelessGatewayTaskDefinitionCommandOutput,
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
  .s("iotwireless", "CreateWirelessGatewayTaskDefinition", {})
  .n("IoTWirelessClient", "CreateWirelessGatewayTaskDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_CreateWirelessGatewayTaskDefinitionCommand)
  .de(de_CreateWirelessGatewayTaskDefinitionCommand)
  .build() {}
