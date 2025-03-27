// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { CreateServiceProfileRequest, CreateServiceProfileResponse } from "../models/models_0";
import { de_CreateServiceProfileCommand, se_CreateServiceProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceProfileCommand}.
 */
export interface CreateServiceProfileCommandInput extends CreateServiceProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateServiceProfileCommand}.
 */
export interface CreateServiceProfileCommandOutput extends CreateServiceProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a new service profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateServiceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateServiceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // CreateServiceProfileRequest
 *   Name: "STRING_VALUE",
 *   LoRaWAN: { // LoRaWANServiceProfile
 *     AddGwMetadata: true || false,
 *     DrMin: Number("int"),
 *     DrMax: Number("int"),
 *     PrAllowed: true || false,
 *     RaAllowed: true || false,
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateServiceProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceProfileResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateServiceProfileCommandInput - {@link CreateServiceProfileCommandInput}
 * @returns {@link CreateServiceProfileCommandOutput}
 * @see {@link CreateServiceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateServiceProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class CreateServiceProfileCommand extends $Command
  .classBuilder<
    CreateServiceProfileCommandInput,
    CreateServiceProfileCommandOutput,
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
  .s("iotwireless", "CreateServiceProfile", {})
  .n("IoTWirelessClient", "CreateServiceProfileCommand")
  .f(void 0, void 0)
  .ser(se_CreateServiceProfileCommand)
  .de(de_CreateServiceProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceProfileRequest;
      output: CreateServiceProfileResponse;
    };
    sdk: {
      input: CreateServiceProfileCommandInput;
      output: CreateServiceProfileCommandOutput;
    };
  };
}
