// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableLDAPSRequest, EnableLDAPSResult } from "../models/models_0";
import { de_EnableLDAPSCommand, se_EnableLDAPSCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Activates the switch for the specific directory to always use LDAP secure calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableLDAPSCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableLDAPSCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
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
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable or could not be found.</p>
 *
 * @throws {@link InvalidLDAPSStatusException} (client fault)
 *  <p>The LDAP activities could not be performed because they are limited by the LDAPS
 *       status.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link NoAvailableCertificateException} (client fault)
 *  <p>Client authentication setup could not be completed because at least one valid certificate must be
 *       registered in the system.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 * @public
 */
export class EnableLDAPSCommand extends $Command
  .classBuilder<
    EnableLDAPSCommandInput,
    EnableLDAPSCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "EnableLDAPS", {})
  .n("DirectoryServiceClient", "EnableLDAPSCommand")
  .f(void 0, void 0)
  .ser(se_EnableLDAPSCommand)
  .de(de_EnableLDAPSCommand)
  .build() {}
