// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIpAccessSettingsRequest, DeleteIpAccessSettingsResponse } from "../models/models_0";
import { de_DeleteIpAccessSettingsCommand, se_DeleteIpAccessSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIpAccessSettingsCommand}.
 */
export interface DeleteIpAccessSettingsCommandInput extends DeleteIpAccessSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpAccessSettingsCommand}.
 */
export interface DeleteIpAccessSettingsCommandOutput extends DeleteIpAccessSettingsResponse, __MetadataBearer {}

/**
 * <p>Deletes IP access settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteIpAccessSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteIpAccessSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteIpAccessSettingsRequest
 *   ipAccessSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteIpAccessSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIpAccessSettingsCommandInput - {@link DeleteIpAccessSettingsCommandInput}
 * @returns {@link DeleteIpAccessSettingsCommandOutput}
 * @see {@link DeleteIpAccessSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteIpAccessSettingsCommandOutput} for command's `response` shape.
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
export class DeleteIpAccessSettingsCommand extends $Command
  .classBuilder<
    DeleteIpAccessSettingsCommandInput,
    DeleteIpAccessSettingsCommandOutput,
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
  .s("AWSErmineControlPlaneService", "DeleteIpAccessSettings", {})
  .n("WorkSpacesWebClient", "DeleteIpAccessSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIpAccessSettingsCommand)
  .de(de_DeleteIpAccessSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIpAccessSettingsRequest;
      output: {};
    };
    sdk: {
      input: DeleteIpAccessSettingsCommandInput;
      output: DeleteIpAccessSettingsCommandOutput;
    };
  };
}
