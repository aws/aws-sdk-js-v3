// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableLDAPSRequest, DisableLDAPSResult } from "../models/models_0";
import { DisableLDAPS$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableLDAPSCommand}.
 */
export interface DisableLDAPSCommandInput extends DisableLDAPSRequest {}
/**
 * @public
 *
 * The output of {@link DisableLDAPSCommand}.
 */
export interface DisableLDAPSCommandOutput extends DisableLDAPSResult, __MetadataBearer {}

/**
 * Deactivates LDAP secure calls for the specified directory.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DisableLDAPSCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DisableLDAPSCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DisableLDAPSRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Type: "Client", // required
 * };
 * const command = new DisableLDAPSCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableLDAPSCommandInput - {@link DisableLDAPSCommandInput}
 * @returns {@link DisableLDAPSCommandOutput}
 * @see {@link DisableLDAPSCommandInput} for command's `input` shape.
 * @see {@link DisableLDAPSCommandOutput} for command's `response` shape.
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
export class DisableLDAPSCommand extends command<DisableLDAPSCommandInput, DisableLDAPSCommandOutput>(
  _ep0,
  _mw0,
  "DisableLDAPS",
  DisableLDAPS$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableLDAPSRequest;
      output: {};
    };
    sdk: {
      input: DisableLDAPSCommandInput;
      output: DisableLDAPSCommandOutput;
    };
  };
}
