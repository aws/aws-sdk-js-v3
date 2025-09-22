// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListUserAccessLoggingSettingsRequest, ListUserAccessLoggingSettingsResponse } from "../models/models_0";
import { ListUserAccessLoggingSettings } from "../schemas/schemas_1_Logging";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUserAccessLoggingSettingsCommand}.
 */
export interface ListUserAccessLoggingSettingsCommandInput extends ListUserAccessLoggingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserAccessLoggingSettingsCommand}.
 */
export interface ListUserAccessLoggingSettingsCommandOutput
  extends ListUserAccessLoggingSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of user access logging settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListUserAccessLoggingSettingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserAccessLoggingSettingsResponse
 * //   userAccessLoggingSettings: [ // UserAccessLoggingSettingsList
 * //     { // UserAccessLoggingSettingsSummary
 * //       userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * //       kinesisStreamArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserAccessLoggingSettingsCommandInput - {@link ListUserAccessLoggingSettingsCommandInput}
 * @returns {@link ListUserAccessLoggingSettingsCommandOutput}
 * @see {@link ListUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link ListUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
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
export class ListUserAccessLoggingSettingsCommand extends $Command
  .classBuilder<
    ListUserAccessLoggingSettingsCommandInput,
    ListUserAccessLoggingSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "ListUserAccessLoggingSettings", {})
  .n("WorkSpacesWebClient", "ListUserAccessLoggingSettingsCommand")
  .sc(ListUserAccessLoggingSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserAccessLoggingSettingsRequest;
      output: ListUserAccessLoggingSettingsResponse;
    };
    sdk: {
      input: ListUserAccessLoggingSettingsCommandInput;
      output: ListUserAccessLoggingSettingsCommandOutput;
    };
  };
}
