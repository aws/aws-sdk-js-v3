// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccountAssociationRequest } from "../models/models_0";
import { DeleteAccountAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccountAssociationCommand}.
 */
export interface DeleteAccountAssociationCommandInput extends DeleteAccountAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountAssociationCommand}.
 */
export interface DeleteAccountAssociationCommandOutput extends __MetadataBearer {}

/**
 * Remove a third-party account association for an end user.
 *
 * > **Note:** You must first call the `DeregisterAccountAssociation` to remove the connection between the managed thing and the third-party account before calling the `DeleteAccountAssociation` API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, DeleteAccountAssociationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, DeleteAccountAssociationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // DeleteAccountAssociationRequest
 *   AccountAssociationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccountAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountAssociationCommandInput - {@link DeleteAccountAssociationCommandInput}
 * @returns {@link DeleteAccountAssociationCommandOutput}
 * @see {@link DeleteAccountAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAssociationCommandOutput} for command's `response` shape.
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
export class DeleteAccountAssociationCommand extends command<DeleteAccountAssociationCommandInput, DeleteAccountAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccountAssociation",
  DeleteAccountAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccountAssociationCommandInput;
      output: DeleteAccountAssociationCommandOutput;
    };
  };
}
