// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifySamlPropertiesRequest, ModifySamlPropertiesResult } from "../models/models_0";
import { de_ModifySamlPropertiesCommand, se_ModifySamlPropertiesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Modifies multiple properties related to SAML 2.0 authentication, including the enablement status,
 *          user access URL, and relay state parameter name that are used for configuring federation with an
 *          SAML 2.0 identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifySamlPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifySamlPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
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
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class ModifySamlPropertiesCommand extends $Command
  .classBuilder<
    ModifySamlPropertiesCommandInput,
    ModifySamlPropertiesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "ModifySamlProperties", {})
  .n("WorkSpacesClient", "ModifySamlPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_ModifySamlPropertiesCommand)
  .de(de_ModifySamlPropertiesCommand)
  .build() {
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
