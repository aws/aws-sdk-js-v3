// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListIpAccessSettingsRequest,
  ListIpAccessSettingsResponse,
  ListIpAccessSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListIpAccessSettingsCommand, se_ListIpAccessSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIpAccessSettingsCommand}.
 */
export interface ListIpAccessSettingsCommandInput extends ListIpAccessSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListIpAccessSettingsCommand}.
 */
export interface ListIpAccessSettingsCommandOutput extends ListIpAccessSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of IP access settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListIpAccessSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListIpAccessSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListIpAccessSettingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIpAccessSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListIpAccessSettingsResponse
 * //   ipAccessSettings: [ // IpAccessSettingsList
 * //     { // IpAccessSettingsSummary
 * //       ipAccessSettingsArn: "STRING_VALUE", // required
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
 * @param ListIpAccessSettingsCommandInput - {@link ListIpAccessSettingsCommandInput}
 * @returns {@link ListIpAccessSettingsCommandOutput}
 * @see {@link ListIpAccessSettingsCommandInput} for command's `input` shape.
 * @see {@link ListIpAccessSettingsCommandOutput} for command's `response` shape.
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
export class ListIpAccessSettingsCommand extends $Command
  .classBuilder<
    ListIpAccessSettingsCommandInput,
    ListIpAccessSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "ListIpAccessSettings", {})
  .n("WorkSpacesWebClient", "ListIpAccessSettingsCommand")
  .f(void 0, ListIpAccessSettingsResponseFilterSensitiveLog)
  .ser(se_ListIpAccessSettingsCommand)
  .de(de_ListIpAccessSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIpAccessSettingsRequest;
      output: ListIpAccessSettingsResponse;
    };
    sdk: {
      input: ListIpAccessSettingsCommandInput;
      output: ListIpAccessSettingsCommandOutput;
    };
  };
}
