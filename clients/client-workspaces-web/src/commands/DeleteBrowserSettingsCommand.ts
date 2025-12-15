// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBrowserSettingsRequest, DeleteBrowserSettingsResponse } from "../models/models_0";
import { DeleteBrowserSettings$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBrowserSettingsCommand}.
 */
export interface DeleteBrowserSettingsCommandInput extends DeleteBrowserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBrowserSettingsCommand}.
 */
export interface DeleteBrowserSettingsCommandOutput extends DeleteBrowserSettingsResponse, __MetadataBearer {}

/**
 * <p>Deletes browser settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteBrowserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteBrowserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteBrowserSettingsRequest
 *   browserSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteBrowserSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBrowserSettingsCommandInput - {@link DeleteBrowserSettingsCommandInput}
 * @returns {@link DeleteBrowserSettingsCommandOutput}
 * @see {@link DeleteBrowserSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteBrowserSettingsCommandOutput} for command's `response` shape.
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
export class DeleteBrowserSettingsCommand extends $Command
  .classBuilder<
    DeleteBrowserSettingsCommandInput,
    DeleteBrowserSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "DeleteBrowserSettings", {})
  .n("WorkSpacesWebClient", "DeleteBrowserSettingsCommand")
  .sc(DeleteBrowserSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBrowserSettingsRequest;
      output: {};
    };
    sdk: {
      input: DeleteBrowserSettingsCommandInput;
      output: DeleteBrowserSettingsCommandOutput;
    };
  };
}
