// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableClientAuthenticationRequest, EnableClientAuthenticationResult } from "../models/models_0";
import { EnableClientAuthentication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableClientAuthenticationCommand}.
 */
export interface EnableClientAuthenticationCommandInput extends EnableClientAuthenticationRequest {}
/**
 * @public
 *
 * The output of {@link EnableClientAuthenticationCommand}.
 */
export interface EnableClientAuthenticationCommandOutput extends EnableClientAuthenticationResult, __MetadataBearer {}

/**
 * Enables alternative client authentication methods for the specified directory.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableClientAuthenticationCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableClientAuthenticationCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // EnableClientAuthenticationRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Type: "SmartCard" || "SmartCardOrPassword", // required
 * };
 * const command = new EnableClientAuthenticationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableClientAuthenticationCommandInput - {@link EnableClientAuthenticationCommandInput}
 * @returns {@link EnableClientAuthenticationCommandOutput}
 * @see {@link EnableClientAuthenticationCommandInput} for command's `input` shape.
 * @see {@link EnableClientAuthenticationCommandOutput} for command's `response` shape.
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
 * @throws {@link NoAvailableCertificateException} (client fault)
 *
 * Client authentication setup could not be completed because at least one valid certificate must be registered in the system.
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
export class EnableClientAuthenticationCommand extends command<EnableClientAuthenticationCommandInput, EnableClientAuthenticationCommandOutput>(
  _ep0,
  _mw0,
  "EnableClientAuthentication",
  EnableClientAuthentication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableClientAuthenticationRequest;
      output: {};
    };
    sdk: {
      input: EnableClientAuthenticationCommandInput;
      output: EnableClientAuthenticationCommandOutput;
    };
  };
}
