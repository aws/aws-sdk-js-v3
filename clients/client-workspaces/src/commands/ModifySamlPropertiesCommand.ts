// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifySamlPropertiesRequest, ModifySamlPropertiesResult } from "../models/models_0";
import { ModifySamlProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifySamlPropertiesCommand}.
 */
export interface ModifySamlPropertiesCommandInput extends ModifySamlPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ModifySamlPropertiesCommand}.
 */
export interface ModifySamlPropertiesCommandOutput extends ModifySamlPropertiesResult, __MetadataBearer {}

/**
 * Modifies multiple properties related to SAML 2.0 authentication, including the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifySamlPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifySamlPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifySamlPropertiesRequest
 *   ResourceId: "STRING_VALUE", // required
 *   SamlProperties: { // SamlProperties
 *     Status: "DISABLED" || "ENABLED" || "ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK",
 *     UserAccessUrl: "STRING_VALUE",
 *     RelayStateParameterName: "STRING_VALUE",
 *   },
 *   PropertiesToDelete: [ // DeletableSamlPropertiesList
 *     "SAML_PROPERTIES_USER_ACCESS_URL" || "SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME",
 *   ],
 * };
 * const command = new ModifySamlPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifySamlPropertiesCommandInput - {@link ModifySamlPropertiesCommandInput}
 * @returns {@link ModifySamlPropertiesCommandOutput}
 * @see {@link ModifySamlPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifySamlPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user is not authorized to access a resource.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * This operation is not supported.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link WorkSpacesServiceException}
 *
 * Base exception class for all service exceptions from WorkSpaces service.
 *
 * @public
 */
export class ModifySamlPropertiesCommand extends command<ModifySamlPropertiesCommandInput, ModifySamlPropertiesCommandOutput>(
  _ep0,
  _mw0,
  "ModifySamlProperties",
  ModifySamlProperties$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifySamlPropertiesRequest;
      output: {};
    };
    sdk: {
      input: ModifySamlPropertiesCommandInput;
      output: ModifySamlPropertiesCommandOutput;
    };
  };
}
