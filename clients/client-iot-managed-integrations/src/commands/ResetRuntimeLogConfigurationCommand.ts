// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResetRuntimeLogConfigurationRequest } from "../models/models_0";
import { ResetRuntimeLogConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResetRuntimeLogConfigurationCommand}.
 */
export interface ResetRuntimeLogConfigurationCommandInput extends ResetRuntimeLogConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ResetRuntimeLogConfigurationCommand}.
 */
export interface ResetRuntimeLogConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Reset a runtime log configuration for a specific managed thing.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, ResetRuntimeLogConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, ResetRuntimeLogConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // ResetRuntimeLogConfigurationRequest
 *   ManagedThingId: "STRING_VALUE", // required
 * };
 * const command = new ResetRuntimeLogConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetRuntimeLogConfigurationCommandInput - {@link ResetRuntimeLogConfigurationCommandInput}
 * @returns {@link ResetRuntimeLogConfigurationCommandOutput}
 * @see {@link ResetRuntimeLogConfigurationCommandInput} for command's `input` shape.
 * @see {@link ResetRuntimeLogConfigurationCommandOutput} for command's `response` shape.
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
export class ResetRuntimeLogConfigurationCommand extends command<ResetRuntimeLogConfigurationCommandInput, ResetRuntimeLogConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "ResetRuntimeLogConfiguration",
  ResetRuntimeLogConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetRuntimeLogConfigurationRequest;
      output: {};
    };
    sdk: {
      input: ResetRuntimeLogConfigurationCommandInput;
      output: ResetRuntimeLogConfigurationCommandOutput;
    };
  };
}
