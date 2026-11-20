// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteOrganizationDiscoveryConfigurationRequest } from "../models/models_0";
import { DeleteOrganizationDiscoveryConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteOrganizationDiscoveryConfigurationCommand}.
 */
export interface DeleteOrganizationDiscoveryConfigurationCommandInput extends DeleteOrganizationDiscoveryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOrganizationDiscoveryConfigurationCommand}.
 */
export interface DeleteOrganizationDiscoveryConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes the organization-wide discovery configuration and stops any running discovery across
 * the organization. Only the organization management account may call this operation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, DeleteOrganizationDiscoveryConfigurationCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, DeleteOrganizationDiscoveryConfigurationCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = {};
 * const command = new DeleteOrganizationDiscoveryConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOrganizationDiscoveryConfigurationCommandInput - {@link DeleteOrganizationDiscoveryConfigurationCommandInput}
 * @returns {@link DeleteOrganizationDiscoveryConfigurationCommandOutput}
 * @see {@link DeleteOrganizationDiscoveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationDiscoveryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The service encountered an internal error. Try the request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist, or you do not have access to it.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class DeleteOrganizationDiscoveryConfigurationCommand extends command<DeleteOrganizationDiscoveryConfigurationCommandInput, DeleteOrganizationDiscoveryConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteOrganizationDiscoveryConfiguration",
  DeleteOrganizationDiscoveryConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeleteOrganizationDiscoveryConfigurationCommandInput;
      output: DeleteOrganizationDiscoveryConfigurationCommandOutput;
    };
  };
}
