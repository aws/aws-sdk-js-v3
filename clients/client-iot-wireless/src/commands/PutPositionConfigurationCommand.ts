// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutPositionConfigurationRequest, PutPositionConfigurationResponse } from "../models/models_0";
import { PutPositionConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutPositionConfigurationCommand}.
 */
export interface PutPositionConfigurationCommandInput extends PutPositionConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutPositionConfigurationCommand}.
 */
export interface PutPositionConfigurationCommandOutput extends PutPositionConfigurationResponse, __MetadataBearer {}

/**
 * Put position configuration for a given resource.
 *
 * > **Important:** This action is no longer supported. Calls to update the position configuration should use the [UpdateResourcePosition](https://docs.aws.amazon.com/iot-wireless/latest/apireference/API_UpdateResourcePosition.html) API operation instead.
 *
 * @deprecated This operation is no longer supported.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, PutPositionConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, PutPositionConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // PutPositionConfigurationRequest
 *   ResourceIdentifier: "STRING_VALUE", // required
 *   ResourceType: "WirelessDevice" || "WirelessGateway", // required
 *   Solvers: { // PositionSolverConfigurations
 *     SemtechGnss: { // SemtechGnssConfiguration
 *       Status: "Enabled" || "Disabled", // required
 *       Fec: "ROSE" || "NONE", // required
 *     },
 *   },
 *   Destination: "STRING_VALUE",
 * };
 * const command = new PutPositionConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPositionConfigurationCommandInput - {@link PutPositionConfigurationCommandInput}
 * @returns {@link PutPositionConfigurationCommandOutput}
 * @see {@link PutPositionConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutPositionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have permission to perform this action.
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
export class PutPositionConfigurationCommand extends command<PutPositionConfigurationCommandInput, PutPositionConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutPositionConfiguration",
  PutPositionConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPositionConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutPositionConfigurationCommandInput;
      output: PutPositionConfigurationCommandOutput;
    };
  };
}
