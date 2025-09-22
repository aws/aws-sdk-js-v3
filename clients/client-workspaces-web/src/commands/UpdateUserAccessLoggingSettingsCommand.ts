// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUserAccessLoggingSettingsRequest, UpdateUserAccessLoggingSettingsResponse } from "../models/models_0";
import { UpdateUserAccessLoggingSettings } from "../schemas/schemas_1_Logging";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserAccessLoggingSettingsCommand}.
 */
export interface UpdateUserAccessLoggingSettingsCommandInput extends UpdateUserAccessLoggingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserAccessLoggingSettingsCommand}.
 */
export interface UpdateUserAccessLoggingSettingsCommandOutput
  extends UpdateUserAccessLoggingSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Updates the user access logging settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateUserAccessLoggingSettingsRequest
 *   userAccessLoggingSettingsArn: "STRING_VALUE", // required
 *   kinesisStreamArn: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserAccessLoggingSettingsResponse
 * //   userAccessLoggingSettings: { // UserAccessLoggingSettings
 * //     userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     kinesisStreamArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateUserAccessLoggingSettingsCommandInput - {@link UpdateUserAccessLoggingSettingsCommandInput}
 * @returns {@link UpdateUserAccessLoggingSettingsCommandOutput}
 * @see {@link UpdateUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
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
export class UpdateUserAccessLoggingSettingsCommand extends $Command
  .classBuilder<
    UpdateUserAccessLoggingSettingsCommandInput,
    UpdateUserAccessLoggingSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "UpdateUserAccessLoggingSettings", {})
  .n("WorkSpacesWebClient", "UpdateUserAccessLoggingSettingsCommand")
  .sc(UpdateUserAccessLoggingSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserAccessLoggingSettingsRequest;
      output: UpdateUserAccessLoggingSettingsResponse;
    };
    sdk: {
      input: UpdateUserAccessLoggingSettingsCommandInput;
      output: UpdateUserAccessLoggingSettingsCommandOutput;
    };
  };
}
