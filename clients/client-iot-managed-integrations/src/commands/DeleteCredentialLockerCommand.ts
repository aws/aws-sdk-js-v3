// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import { DeleteCredentialLockerRequest } from "../models/models_0";
import { de_DeleteCredentialLockerCommand, se_DeleteCredentialLockerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCredentialLockerCommand}.
 */
export interface DeleteCredentialLockerCommandInput extends DeleteCredentialLockerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCredentialLockerCommand}.
 */
export interface DeleteCredentialLockerCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a credential locker. </p>
 *          <note>
 *             <p>This operation can't be undone and any existing device won't be able to use
 *             IoT managed integrations.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, DeleteCredentialLockerCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, DeleteCredentialLockerCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // DeleteCredentialLockerRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteCredentialLockerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCredentialLockerCommandInput - {@link DeleteCredentialLockerCommandInput}
 * @returns {@link DeleteCredentialLockerCommandOutput}
 * @see {@link DeleteCredentialLockerCommandInput} for command's `input` shape.
 * @see {@link DeleteCredentialLockerCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *          is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
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
export class DeleteCredentialLockerCommand extends $Command
  .classBuilder<
    DeleteCredentialLockerCommandInput,
    DeleteCredentialLockerCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "DeleteCredentialLocker", {})
  .n("IoTManagedIntegrationsClient", "DeleteCredentialLockerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCredentialLockerCommand)
  .de(de_DeleteCredentialLockerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCredentialLockerRequest;
      output: {};
    };
    sdk: {
      input: DeleteCredentialLockerCommandInput;
      output: DeleteCredentialLockerCommandOutput;
    };
  };
}
