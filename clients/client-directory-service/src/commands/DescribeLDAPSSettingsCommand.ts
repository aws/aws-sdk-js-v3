// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeLDAPSSettingsRequest, DescribeLDAPSSettingsResult } from "../models/models_0";
import { DescribeLDAPSSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Describes the status of LDAP security for the specified directory.</p>
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
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
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
 *
 * @public
 */
export class DescribeLDAPSSettingsCommand extends $Command
  .classBuilder<
    DescribeLDAPSSettingsCommandInput,
    DescribeLDAPSSettingsCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DescribeLDAPSSettings", {})
  .n("DirectoryServiceClient", "DescribeLDAPSSettingsCommand")
  .sc(DescribeLDAPSSettings$)
  .build() {
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
