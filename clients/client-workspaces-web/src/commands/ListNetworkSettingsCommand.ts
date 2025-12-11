// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListNetworkSettingsRequest, ListNetworkSettingsResponse } from "../models/models_0";
import { ListNetworkSettings } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkSettingsCommand}.
 */
export interface ListNetworkSettingsCommandInput extends ListNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkSettingsCommand}.
 */
export interface ListNetworkSettingsCommandOutput extends ListNetworkSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of network settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListNetworkSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListNetworkSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListNetworkSettingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkSettingsResponse
 * //   networkSettings: [ // NetworkSettingsList
 * //     { // NetworkSettingsSummary
 * //       networkSettingsArn: "STRING_VALUE", // required
 * //       vpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkSettingsCommandInput - {@link ListNetworkSettingsCommandInput}
 * @returns {@link ListNetworkSettingsCommandOutput}
 * @see {@link ListNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkSettingsCommandOutput} for command's `response` shape.
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
export class ListNetworkSettingsCommand extends $Command
  .classBuilder<
    ListNetworkSettingsCommandInput,
    ListNetworkSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "ListNetworkSettings", {})
  .n("WorkSpacesWebClient", "ListNetworkSettingsCommand")
  .sc(ListNetworkSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkSettingsRequest;
      output: ListNetworkSettingsResponse;
    };
    sdk: {
      input: ListNetworkSettingsCommandInput;
      output: ListNetworkSettingsCommandOutput;
    };
  };
}
