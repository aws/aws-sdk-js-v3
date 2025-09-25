// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataProtectionSettingsRequest, DeleteDataProtectionSettingsResponse } from "../models/models_0";
import { DeleteDataProtectionSettings } from "../schemas/schemas_22_DeleteDataProtectionSettings";
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
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "DeleteDataProtectionSettings", {})
  .n("WorkSpacesWebClient", "DeleteDataProtectionSettingsCommand")
  .sc(DeleteDataProtectionSettings)
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
