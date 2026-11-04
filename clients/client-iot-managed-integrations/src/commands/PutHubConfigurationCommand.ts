// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutHubConfigurationRequest, PutHubConfigurationResponse } from "../models/models_0";
import { PutHubConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutHubConfigurationCommand}.
 */
export interface PutHubConfigurationCommandInput extends PutHubConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutHubConfigurationCommand}.
 */
export interface PutHubConfigurationCommandOutput extends PutHubConfigurationResponse, __MetadataBearer {}

/**
 * Update a hub configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, PutHubConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, PutHubConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // PutHubConfigurationRequest
 *   HubTokenTimerExpirySettingInSeconds: Number("long"), // required
 * };
 * const command = new PutHubConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutHubConfigurationResponse
 * //   HubTokenTimerExpirySettingInSeconds: Number("long"),
 * // };
 *
 * ```
 *
 * @param PutHubConfigurationCommandInput - {@link PutHubConfigurationCommandInput}
 * @returns {@link PutHubConfigurationCommandOutput}
 * @see {@link PutHubConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutHubConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class PutHubConfigurationCommand extends command<PutHubConfigurationCommandInput, PutHubConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutHubConfiguration",
  PutHubConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutHubConfigurationRequest;
      output: PutHubConfigurationResponse;
    };
    sdk: {
      input: PutHubConfigurationCommandInput;
      output: PutHubConfigurationCommandOutput;
    };
  };
}
