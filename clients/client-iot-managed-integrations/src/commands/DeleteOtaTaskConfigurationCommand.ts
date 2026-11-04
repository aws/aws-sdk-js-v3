// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOtaTaskConfigurationRequest } from "../models/models_0";
import { DeleteOtaTaskConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOtaTaskConfigurationCommand}.
 */
export interface DeleteOtaTaskConfigurationCommandInput extends DeleteOtaTaskConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOtaTaskConfigurationCommand}.
 */
export interface DeleteOtaTaskConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Delete the over-the-air (OTA) task configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, DeleteOtaTaskConfigurationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, DeleteOtaTaskConfigurationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // DeleteOtaTaskConfigurationRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteOtaTaskConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOtaTaskConfigurationCommandInput - {@link DeleteOtaTaskConfigurationCommandInput}
 * @returns {@link DeleteOtaTaskConfigurationCommandOutput}
 * @see {@link DeleteOtaTaskConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteOtaTaskConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteOtaTaskConfigurationCommand extends command<DeleteOtaTaskConfigurationCommandInput, DeleteOtaTaskConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOtaTaskConfiguration",
  DeleteOtaTaskConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOtaTaskConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteOtaTaskConfigurationCommandInput;
      output: DeleteOtaTaskConfigurationCommandOutput;
    };
  };
}
