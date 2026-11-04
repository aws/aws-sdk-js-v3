// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateServiceProfileRequest, CreateServiceProfileResponse } from "../models/models_0";
import { CreateServiceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new service profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateServiceProfileCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateServiceProfileCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // CreateServiceProfileRequest
 *   Name: "STRING_VALUE",
 *   LoRaWAN: { // LoRaWANServiceProfile
 *     AddGwMetadata: true || false,
 *     DrMin: Number("int"),
 *     DrMax: Number("int"),
 *     PrAllowed: true || false,
 *     RaAllowed: true || false,
 *     TxPowerIndexMin: Number("int"),
 *     TxPowerIndexMax: Number("int"),
 *     NbTransMin: Number("int"),
 *     NbTransMax: Number("int"),
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
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Adding, updating, or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class CreateServiceProfileCommand extends command<CreateServiceProfileCommandInput, CreateServiceProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateServiceProfile",
  CreateServiceProfile$
) {
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
