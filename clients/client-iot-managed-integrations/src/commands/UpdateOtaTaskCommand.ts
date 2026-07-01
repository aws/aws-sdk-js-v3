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
 * <p>Update an over-the-air (OTA) task.</p>
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
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
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
