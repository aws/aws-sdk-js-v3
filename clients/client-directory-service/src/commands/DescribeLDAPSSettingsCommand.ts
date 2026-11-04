// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeLDAPSSettingsRequest, DescribeLDAPSSettingsResult } from "../models/models_0";
import { DescribeLDAPSSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeLDAPSSettingsCommand}.
 */
export interface DescribeLDAPSSettingsCommandInput extends DescribeLDAPSSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLDAPSSettingsCommand}.
 */
export interface DescribeLDAPSSettingsCommandOutput extends DescribeLDAPSSettingsResult, __MetadataBearer {}

/**
 * Describes the status of LDAP security for the specified directory.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeLDAPSSettingsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeLDAPSSettingsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeLDAPSSettingsRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Type: "Client",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeLDAPSSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLDAPSSettingsResult
 * //   LDAPSSettingsInfo: [ // LDAPSSettingsInfo
 * //     { // LDAPSSettingInfo
 * //       LDAPSStatus: "Enabling" || "Enabled" || "EnableFailed" || "Disabled",
 * //       LDAPSStatusReason: "STRING_VALUE",
 * //       LastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLDAPSSettingsCommandInput - {@link DescribeLDAPSSettingsCommandInput}
 * @returns {@link DescribeLDAPSSettingsCommandOutput}
 * @see {@link DescribeLDAPSSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeLDAPSSettingsCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` value is not valid.
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
export class DescribeLDAPSSettingsCommand extends command<DescribeLDAPSSettingsCommandInput, DescribeLDAPSSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeLDAPSSettings",
  DescribeLDAPSSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLDAPSSettingsRequest;
      output: DescribeLDAPSSettingsResult;
    };
    sdk: {
      input: DescribeLDAPSSettingsCommandInput;
      output: DescribeLDAPSSettingsCommandOutput;
    };
  };
}
