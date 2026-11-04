// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableLDAPSRequest, EnableLDAPSResult } from "../models/models_0";
import { EnableLDAPS$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableLDAPSCommand}.
 */
export interface EnableLDAPSCommandInput extends EnableLDAPSRequest {}
/**
 * @public
 *
 * The output of {@link EnableLDAPSCommand}.
 */
export interface EnableLDAPSCommandOutput extends EnableLDAPSResult, __MetadataBearer {}

/**
 * Activates the switch for the specific directory to always use LDAP secure calls.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableLDAPSCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableLDAPSCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // EnableLDAPSRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Type: "Client", // required
 * };
 * const command = new EnableLDAPSCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableLDAPSCommandInput - {@link EnableLDAPSCommandInput}
 * @returns {@link EnableLDAPSCommandOutput}
 * @see {@link EnableLDAPSCommandInput} for command's `input` shape.
 * @see {@link EnableLDAPSCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The specified directory is unavailable.
 *
 * @throws {@link InvalidLDAPSStatusException} (client fault)
 *
 * The LDAP activities could not be performed because they are limited by the LDAPS status.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
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
export class EnableLDAPSCommand extends command<EnableLDAPSCommandInput, EnableLDAPSCommandOutput>(
  _ep0,
  _mw0,
  "EnableLDAPS",
  EnableLDAPS$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableLDAPSRequest;
      output: {};
    };
    sdk: {
      input: EnableLDAPSCommandInput;
      output: EnableLDAPSCommandOutput;
    };
  };
}
