// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateBrowserSettingsRequest, AssociateBrowserSettingsResponse } from "../models/models_0";
import { AssociateBrowserSettings } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateBrowserSettingsCommand}.
 */
export interface AssociateBrowserSettingsCommandInput extends AssociateBrowserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateBrowserSettingsCommand}.
 */
export interface AssociateBrowserSettingsCommandOutput extends AssociateBrowserSettingsResponse, __MetadataBearer {}

/**
 * <p>Associates a browser settings resource with a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateBrowserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateBrowserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // AssociateBrowserSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 *   browserSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateBrowserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateBrowserSettingsResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   browserSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateBrowserSettingsCommandInput - {@link AssociateBrowserSettingsCommandInput}
 * @returns {@link AssociateBrowserSettingsCommandOutput}
 * @see {@link AssociateBrowserSettingsCommandInput} for command's `input` shape.
 * @see {@link AssociateBrowserSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
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
export class AssociateBrowserSettingsCommand extends $Command
  .classBuilder<
    AssociateBrowserSettingsCommandInput,
    AssociateBrowserSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "AssociateBrowserSettings", {})
  .n("WorkSpacesWebClient", "AssociateBrowserSettingsCommand")
  .sc(AssociateBrowserSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateBrowserSettingsRequest;
      output: AssociateBrowserSettingsResponse;
    };
    sdk: {
      input: AssociateBrowserSettingsCommandInput;
      output: AssociateBrowserSettingsCommandOutput;
    };
  };
}
