// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ModifyCertificateBasedAuthPropertiesRequest,
  ModifyCertificateBasedAuthPropertiesResult,
} from "../models/models_0";
import {
  de_ModifyCertificateBasedAuthPropertiesCommand,
  se_ModifyCertificateBasedAuthPropertiesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyCertificateBasedAuthPropertiesCommand}.
 */
export interface ModifyCertificateBasedAuthPropertiesCommandInput extends ModifyCertificateBasedAuthPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyCertificateBasedAuthPropertiesCommand}.
 */
export interface ModifyCertificateBasedAuthPropertiesCommandOutput
  extends ModifyCertificateBasedAuthPropertiesResult,
    __MetadataBearer {}

/**
 * <p>Modifies the properties of the certificate-based authentication you want
 *          to use with your WorkSpaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyCertificateBasedAuthPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyCertificateBasedAuthPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifyCertificateBasedAuthPropertiesRequest
 *   ResourceId: "STRING_VALUE", // required
 *   CertificateBasedAuthProperties: { // CertificateBasedAuthProperties
 *     Status: "DISABLED" || "ENABLED",
 *     CertificateAuthorityArn: "STRING_VALUE",
 *   },
 *   PropertiesToDelete: [ // DeletableCertificateBasedAuthPropertiesList
 *     "CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN",
 *   ],
 * };
 * const command = new ModifyCertificateBasedAuthPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyCertificateBasedAuthPropertiesCommandInput - {@link ModifyCertificateBasedAuthPropertiesCommandInput}
 * @returns {@link ModifyCertificateBasedAuthPropertiesCommandOutput}
 * @see {@link ModifyCertificateBasedAuthPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyCertificateBasedAuthPropertiesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ModifyCertificateBasedAuthPropertiesCommand extends $Command
  .classBuilder<
    ModifyCertificateBasedAuthPropertiesCommandInput,
    ModifyCertificateBasedAuthPropertiesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "ModifyCertificateBasedAuthProperties", {})
  .n("WorkSpacesClient", "ModifyCertificateBasedAuthPropertiesCommand")
  .f(void 0, void 0)
  .ser(se_ModifyCertificateBasedAuthPropertiesCommand)
  .de(de_ModifyCertificateBasedAuthPropertiesCommand)
  .build() {}
