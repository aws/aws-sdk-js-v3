// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateOtaTaskRequest } from "../models/models_0";
import { UpdateOtaTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateOtaTaskCommand}.
 */
export interface UpdateOtaTaskCommandInput extends UpdateOtaTaskRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOtaTaskCommand}.
 */
export interface UpdateOtaTaskCommandOutput extends __MetadataBearer {}

/**
 * Update an over-the-air (OTA) task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, UpdateOtaTaskCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, UpdateOtaTaskCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // UpdateOtaTaskRequest
 *   Identifier: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   TaskConfigurationId: "STRING_VALUE",
 * };
 * const command = new UpdateOtaTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateOtaTaskCommandInput - {@link UpdateOtaTaskCommandInput}
 * @returns {@link UpdateOtaTaskCommandOutput}
 * @see {@link UpdateOtaTaskCommandInput} for command's `input` shape.
 * @see {@link UpdateOtaTaskCommandOutput} for command's `response` shape.
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
export class UpdateOtaTaskCommand extends command<UpdateOtaTaskCommandInput, UpdateOtaTaskCommandOutput>(
  _ep0,
  _mw0,
  "UpdateOtaTask",
  UpdateOtaTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOtaTaskRequest;
      output: {};
    };
    sdk: {
      input: UpdateOtaTaskCommandInput;
      output: UpdateOtaTaskCommandOutput;
    };
  };
}
