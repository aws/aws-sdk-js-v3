// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDataProtectionSettingsRequest, ListDataProtectionSettingsResponse } from "../models/models_0";
import { ListDataProtectionSettings } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataProtectionSettingsCommand}.
 */
export interface ListDataProtectionSettingsCommandInput extends ListDataProtectionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataProtectionSettingsCommand}.
 */
export interface ListDataProtectionSettingsCommandOutput extends ListDataProtectionSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of data protection settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListDataProtectionSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListDataProtectionSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListDataProtectionSettingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataProtectionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataProtectionSettingsResponse
 * //   dataProtectionSettings: [ // DataProtectionSettingsList
 * //     { // DataProtectionSettingsSummary
 * //       dataProtectionSettingsArn: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataProtectionSettingsCommandInput - {@link ListDataProtectionSettingsCommandInput}
 * @returns {@link ListDataProtectionSettingsCommandOutput}
 * @see {@link ListDataProtectionSettingsCommandInput} for command's `input` shape.
 * @see {@link ListDataProtectionSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @public
 */
export class ListDataProtectionSettingsCommand extends $Command
  .classBuilder<
    ListDataProtectionSettingsCommandInput,
    ListDataProtectionSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "ListDataProtectionSettings", {})
  .n("WorkSpacesWebClient", "ListDataProtectionSettingsCommand")
  .sc(ListDataProtectionSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataProtectionSettingsRequest;
      output: ListDataProtectionSettingsResponse;
    };
    sdk: {
      input: ListDataProtectionSettingsCommandInput;
      output: ListDataProtectionSettingsCommandOutput;
    };
  };
}
