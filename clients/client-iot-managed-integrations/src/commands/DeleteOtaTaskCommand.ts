// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import type { DeleteOtaTaskRequest } from "../models/models_0";
import { DeleteOtaTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOtaTaskCommand}.
 */
export interface DeleteOtaTaskCommandInput extends DeleteOtaTaskRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOtaTaskCommand}.
 */
export interface DeleteOtaTaskCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete the over-the-air (OTA) task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, DeleteOtaTaskCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, DeleteOtaTaskCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // DeleteOtaTaskRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteOtaTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOtaTaskCommandInput - {@link DeleteOtaTaskCommandInput}
 * @returns {@link DeleteOtaTaskCommandOutput}
 * @see {@link DeleteOtaTaskCommandInput} for command's `input` shape.
 * @see {@link DeleteOtaTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds a service limit or quota. Adjust your request parameters and try again.</p>
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
export class DeleteOtaTaskCommand extends $Command
  .classBuilder<
    DeleteOtaTaskCommandInput,
    DeleteOtaTaskCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "DeleteOtaTask", {})
  .n("IoTManagedIntegrationsClient", "DeleteOtaTaskCommand")
  .sc(DeleteOtaTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOtaTaskRequest;
      output: {};
    };
    sdk: {
      input: DeleteOtaTaskCommandInput;
      output: DeleteOtaTaskCommandOutput;
    };
  };
}
