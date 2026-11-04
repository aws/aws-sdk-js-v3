// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEventLogConfigurationRequest } from "../models/models_0";
import { UpdateEventLogConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEventLogConfigurationCommand}.
 */
export interface UpdateEventLogConfigurationCommandInput extends UpdateEventLogConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventLogConfigurationCommand}.
 */
export interface UpdateEventLogConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Update an event log configuration by log configuration ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, UpdateEventLogConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, UpdateEventLogConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // UpdateEventLogConfigurationRequest
 *   Id: "STRING_VALUE", // required
 *   EventLogLevel: "DEBUG" || "ERROR" || "INFO" || "WARN", // required
 * };
 * const command = new UpdateEventLogConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEventLogConfigurationCommandInput - {@link UpdateEventLogConfigurationCommandInput}
 * @returns {@link UpdateEventLogConfigurationCommandOutput}
 * @see {@link UpdateEventLogConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateEventLogConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateEventLogConfigurationCommand extends command<UpdateEventLogConfigurationCommandInput, UpdateEventLogConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEventLogConfiguration",
  UpdateEventLogConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventLogConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateEventLogConfigurationCommandInput;
      output: UpdateEventLogConfigurationCommandOutput;
    };
  };
}
