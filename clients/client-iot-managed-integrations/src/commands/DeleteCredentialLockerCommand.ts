// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCredentialLockerRequest } from "../models/models_0";
import { DeleteCredentialLocker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Delete a credential locker.
 *
 * > **Note:** This operation can't be undone and any existing device won't be able to use IoT managed integrations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, DeleteCredentialLockerCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, DeleteCredentialLockerCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
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
export class DeleteCredentialLockerCommand extends command<DeleteCredentialLockerCommandInput, DeleteCredentialLockerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCredentialLocker",
  DeleteCredentialLocker$
) {
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
