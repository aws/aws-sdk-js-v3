// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateWirelessGatewayTaskDefinitionRequest,
  CreateWirelessGatewayTaskDefinitionResponse,
} from "../models/models_0";
import { CreateWirelessGatewayTaskDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateWirelessGatewayTaskDefinitionCommandOutput extends CreateWirelessGatewayTaskDefinitionResponse, __MetadataBearer {}

/**
 * Creates a gateway task definition.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateWirelessGatewayTaskDefinitionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateWirelessGatewayTaskDefinitionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource does not exist.
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
export class CreateWirelessGatewayTaskDefinitionCommand extends command<CreateWirelessGatewayTaskDefinitionCommandInput, CreateWirelessGatewayTaskDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "CreateWirelessGatewayTaskDefinition",
  CreateWirelessGatewayTaskDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWirelessGatewayTaskDefinitionRequest;
      output: CreateWirelessGatewayTaskDefinitionResponse;
    };
    sdk: {
      input: CreateWirelessGatewayTaskDefinitionCommandInput;
      output: CreateWirelessGatewayTaskDefinitionCommandOutput;
    };
  };
}
