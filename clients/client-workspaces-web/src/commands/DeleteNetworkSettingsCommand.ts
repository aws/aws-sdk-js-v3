// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkSettingsRequest, DeleteNetworkSettingsResponse } from "../models/models_0";
import { DeleteNetworkSettings } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkSettingsCommand}.
 */
export interface DeleteNetworkSettingsCommandInput extends DeleteNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkSettingsCommand}.
 */
export interface DeleteNetworkSettingsCommandOutput extends DeleteNetworkSettingsResponse, __MetadataBearer {}

/**
 * <p>Deletes network settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteNetworkSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteNetworkSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteNetworkSettingsRequest
 *   networkSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNetworkSettingsCommandInput - {@link DeleteNetworkSettingsCommandInput}
 * @returns {@link DeleteNetworkSettingsCommandOutput}
 * @see {@link DeleteNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkSettingsCommandOutput} for command's `response` shape.
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
export class DeleteNetworkSettingsCommand extends $Command
  .classBuilder<
    DeleteNetworkSettingsCommandInput,
    DeleteNetworkSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "DeleteNetworkSettings", {})
  .n("WorkSpacesWebClient", "DeleteNetworkSettingsCommand")
  .sc(DeleteNetworkSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkSettingsRequest;
      output: {};
    };
    sdk: {
      input: DeleteNetworkSettingsCommandInput;
      output: DeleteNetworkSettingsCommandOutput;
    };
  };
}
