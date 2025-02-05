// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateUserSettingsRequest, DisassociateUserSettingsResponse } from "../models/models_0";
import { de_DisassociateUserSettingsCommand, se_DisassociateUserSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateUserSettingsCommand}.
 */
export interface DisassociateUserSettingsCommandInput extends DisassociateUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateUserSettingsCommand}.
 */
export interface DisassociateUserSettingsCommandOutput extends DisassociateUserSettingsResponse, __MetadataBearer {}

/**
 * <p>Disassociates user settings from a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DisassociateUserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DisassociateUserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DisassociateUserSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateUserSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateUserSettingsCommandInput - {@link DisassociateUserSettingsCommandInput}
 * @returns {@link DisassociateUserSettingsCommandOutput}
 * @see {@link DisassociateUserSettingsCommandInput} for command's `input` shape.
 * @see {@link DisassociateUserSettingsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DisassociateUserSettingsCommand extends $Command
  .classBuilder<
    DisassociateUserSettingsCommandInput,
    DisassociateUserSettingsCommandOutput,
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
  .s("AWSErmineControlPlaneService", "DisassociateUserSettings", {})
  .n("WorkSpacesWebClient", "DisassociateUserSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateUserSettingsCommand)
  .de(de_DisassociateUserSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateUserSettingsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateUserSettingsCommandInput;
      output: DisassociateUserSettingsCommandOutput;
    };
  };
}
