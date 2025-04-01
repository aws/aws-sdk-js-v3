// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUserAccessLoggingSettingsRequest, DeleteUserAccessLoggingSettingsResponse } from "../models/models_0";
import {
  de_DeleteUserAccessLoggingSettingsCommand,
  se_DeleteUserAccessLoggingSettingsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUserAccessLoggingSettingsCommand}.
 */
export interface DeleteUserAccessLoggingSettingsCommandInput extends DeleteUserAccessLoggingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserAccessLoggingSettingsCommand}.
 */
export interface DeleteUserAccessLoggingSettingsCommandOutput
  extends DeleteUserAccessLoggingSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Deletes user access logging settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteUserAccessLoggingSettingsRequest
 *   userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserAccessLoggingSettingsCommandInput - {@link DeleteUserAccessLoggingSettingsCommandInput}
 * @returns {@link DeleteUserAccessLoggingSettingsCommandOutput}
 * @see {@link DeleteUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
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
export class DeleteUserAccessLoggingSettingsCommand extends $Command
  .classBuilder<
    DeleteUserAccessLoggingSettingsCommandInput,
    DeleteUserAccessLoggingSettingsCommandOutput,
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
  .s("AWSErmineControlPlaneService", "DeleteUserAccessLoggingSettings", {})
  .n("WorkSpacesWebClient", "DeleteUserAccessLoggingSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteUserAccessLoggingSettingsCommand)
  .de(de_DeleteUserAccessLoggingSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserAccessLoggingSettingsRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserAccessLoggingSettingsCommandInput;
      output: DeleteUserAccessLoggingSettingsCommandOutput;
    };
  };
}
