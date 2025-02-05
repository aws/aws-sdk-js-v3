// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataProtectionSettingsRequest, DeleteDataProtectionSettingsResponse } from "../models/models_0";
import {
  de_DeleteDataProtectionSettingsCommand,
  se_DeleteDataProtectionSettingsCommand,
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
 * The input for {@link DeleteDataProtectionSettingsCommand}.
 */
export interface DeleteDataProtectionSettingsCommandInput extends DeleteDataProtectionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataProtectionSettingsCommand}.
 */
export interface DeleteDataProtectionSettingsCommandOutput
  extends DeleteDataProtectionSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Deletes data protection settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteDataProtectionSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteDataProtectionSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteDataProtectionSettingsRequest
 *   dataProtectionSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataProtectionSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataProtectionSettingsCommandInput - {@link DeleteDataProtectionSettingsCommandInput}
 * @returns {@link DeleteDataProtectionSettingsCommandOutput}
 * @see {@link DeleteDataProtectionSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteDataProtectionSettingsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteDataProtectionSettingsCommand extends $Command
  .classBuilder<
    DeleteDataProtectionSettingsCommandInput,
    DeleteDataProtectionSettingsCommandOutput,
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
  .s("AWSErmineControlPlaneService", "DeleteDataProtectionSettings", {})
  .n("WorkSpacesWebClient", "DeleteDataProtectionSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDataProtectionSettingsCommand)
  .de(de_DeleteDataProtectionSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataProtectionSettingsRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataProtectionSettingsCommandInput;
      output: DeleteDataProtectionSettingsCommandOutput;
    };
  };
}
