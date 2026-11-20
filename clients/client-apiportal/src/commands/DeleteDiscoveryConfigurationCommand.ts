// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDiscoveryConfigurationRequest } from "../models/models_0";
import { DeleteDiscoveryConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDiscoveryConfigurationCommand}.
 */
export interface DeleteDiscoveryConfigurationCommandInput extends DeleteDiscoveryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDiscoveryConfigurationCommand}.
 */
export interface DeleteDiscoveryConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes the discovery configuration and stops any running discovery.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, DeleteDiscoveryConfigurationCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, DeleteDiscoveryConfigurationCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = {};
 * const command = new DeleteDiscoveryConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDiscoveryConfigurationCommandInput - {@link DeleteDiscoveryConfigurationCommandInput}
 * @returns {@link DeleteDiscoveryConfigurationCommandOutput}
 * @see {@link DeleteDiscoveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteDiscoveryConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteDiscoveryConfigurationCommand extends command<DeleteDiscoveryConfigurationCommandInput, DeleteDiscoveryConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDiscoveryConfiguration",
  DeleteDiscoveryConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeleteDiscoveryConfigurationCommandInput;
      output: DeleteDiscoveryConfigurationCommandOutput;
    };
  };
}
