// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMetricConfigurationRequest, GetMetricConfigurationResponse } from "../models/models_0";
import { GetMetricConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMetricConfigurationCommand}.
 */
export interface GetMetricConfigurationCommandInput extends GetMetricConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetMetricConfigurationCommand}.
 */
export interface GetMetricConfigurationCommandOutput extends GetMetricConfigurationResponse, __MetadataBearer {}

/**
 * Get the metric configuration status for this AWS account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetMetricConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetMetricConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = {};
 * const command = new GetMetricConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetMetricConfigurationResponse
 * //   SummaryMetric: { // SummaryMetricConfiguration
 * //     Status: "Enabled" || "Disabled",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMetricConfigurationCommandInput - {@link GetMetricConfigurationCommandInput}
 * @returns {@link GetMetricConfigurationCommandOutput}
 * @see {@link GetMetricConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetMetricConfigurationCommandOutput} for command's `response` shape.
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
export class GetMetricConfigurationCommand extends command<GetMetricConfigurationCommandInput, GetMetricConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetMetricConfiguration",
  GetMetricConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetMetricConfigurationResponse;
    };
    sdk: {
      input: GetMetricConfigurationCommandInput;
      output: GetMetricConfigurationCommandOutput;
    };
  };
}
