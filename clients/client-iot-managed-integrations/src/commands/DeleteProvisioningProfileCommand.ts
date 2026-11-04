// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProvisioningProfileRequest } from "../models/models_0";
import { DeleteProvisioningProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProvisioningProfileCommand}.
 */
export interface DeleteProvisioningProfileCommandInput extends DeleteProvisioningProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProvisioningProfileCommand}.
 */
export interface DeleteProvisioningProfileCommandOutput extends __MetadataBearer {}

/**
 * Delete a provisioning profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, DeleteProvisioningProfileCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, DeleteProvisioningProfileCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // DeleteProvisioningProfileRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteProvisioningProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProvisioningProfileCommandInput - {@link DeleteProvisioningProfileCommandInput}
 * @returns {@link DeleteProvisioningProfileCommandOutput}
 * @see {@link DeleteProvisioningProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
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
export class DeleteProvisioningProfileCommand extends command<DeleteProvisioningProfileCommandInput, DeleteProvisioningProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProvisioningProfile",
  DeleteProvisioningProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProvisioningProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteProvisioningProfileCommandInput;
      output: DeleteProvisioningProfileCommandOutput;
    };
  };
}
