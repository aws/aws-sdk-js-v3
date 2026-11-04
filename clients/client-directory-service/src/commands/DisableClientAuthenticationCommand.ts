// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableClientAuthenticationRequest, DisableClientAuthenticationResult } from "../models/models_0";
import { DisableClientAuthentication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableClientAuthenticationCommand}.
 */
export interface DisableClientAuthenticationCommandInput extends DisableClientAuthenticationRequest {}
/**
 * @public
 *
 * The output of {@link DisableClientAuthenticationCommand}.
 */
export interface DisableClientAuthenticationCommandOutput extends DisableClientAuthenticationResult, __MetadataBearer {}

/**
 * Disables alternative client authentication methods for the specified directory.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DisableClientAuthenticationCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DisableClientAuthenticationCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DisableClientAuthenticationRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Type: "SmartCard" || "SmartCardOrPassword", // required
 * };
 * const command = new DisableClientAuthenticationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableClientAuthenticationCommandInput - {@link DisableClientAuthenticationCommandInput}
 * @returns {@link DisableClientAuthenticationCommandOutput}
 * @see {@link DisableClientAuthenticationCommandInput} for command's `input` shape.
 * @see {@link DisableClientAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
 *
 * @throws {@link InvalidClientAuthStatusException} (client fault)
 *
 * Client authentication is already enabled.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class DisableClientAuthenticationCommand extends command<DisableClientAuthenticationCommandInput, DisableClientAuthenticationCommandOutput>(
  _ep0,
  _mw0,
  "DisableClientAuthentication",
  DisableClientAuthentication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableClientAuthenticationRequest;
      output: {};
    };
    sdk: {
      input: DisableClientAuthenticationCommandInput;
      output: DisableClientAuthenticationCommandOutput;
    };
  };
}
