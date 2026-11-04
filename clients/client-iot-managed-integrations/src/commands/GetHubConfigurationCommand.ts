// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetHubConfigurationRequest, GetHubConfigurationResponse } from "../models/models_0";
import { GetHubConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetHubConfigurationCommand}.
 */
export interface GetHubConfigurationCommandInput extends GetHubConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetHubConfigurationCommand}.
 */
export interface GetHubConfigurationCommandOutput extends GetHubConfigurationResponse, __MetadataBearer {}

/**
 * Get a hub configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetHubConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetHubConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = {};
 * const command = new GetHubConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetHubConfigurationResponse
 * //   HubTokenTimerExpirySettingInSeconds: Number("long"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetHubConfigurationCommandInput - {@link GetHubConfigurationCommandInput}
 * @returns {@link GetHubConfigurationCommandOutput}
 * @see {@link GetHubConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetHubConfigurationCommandOutput} for command's `response` shape.
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
export class GetHubConfigurationCommand extends command<GetHubConfigurationCommandInput, GetHubConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetHubConfiguration",
  GetHubConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetHubConfigurationResponse;
    };
    sdk: {
      input: GetHubConfigurationCommandInput;
      output: GetHubConfigurationCommandOutput;
    };
  };
}
