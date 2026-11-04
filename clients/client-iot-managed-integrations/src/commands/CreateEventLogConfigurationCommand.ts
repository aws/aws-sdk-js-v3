// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEventLogConfigurationRequest, CreateEventLogConfigurationResponse } from "../models/models_0";
import { CreateEventLogConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEventLogConfigurationCommand}.
 */
export interface CreateEventLogConfigurationCommandInput extends CreateEventLogConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventLogConfigurationCommand}.
 */
export interface CreateEventLogConfigurationCommandOutput extends CreateEventLogConfigurationResponse, __MetadataBearer {}

/**
 * Set the event log configuration for the account, resource type, or specific resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateEventLogConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateEventLogConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateEventLogConfigurationRequest
 *   ResourceType: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE",
 *   EventLogLevel: "DEBUG" || "ERROR" || "INFO" || "WARN", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateEventLogConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventLogConfigurationResponse
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEventLogConfigurationCommandInput - {@link CreateEventLogConfigurationCommandInput}
 * @returns {@link CreateEventLogConfigurationCommandOutput}
 * @see {@link CreateEventLogConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateEventLogConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict with the request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded for this request.
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
export class CreateEventLogConfigurationCommand extends command<CreateEventLogConfigurationCommandInput, CreateEventLogConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateEventLogConfiguration",
  CreateEventLogConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventLogConfigurationRequest;
      output: CreateEventLogConfigurationResponse;
    };
    sdk: {
      input: CreateEventLogConfigurationCommandInput;
      output: CreateEventLogConfigurationCommandOutput;
    };
  };
}
