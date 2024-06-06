// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateUserAccessLoggingSettingsRequest,
  DisassociateUserAccessLoggingSettingsResponse,
} from "../models/models_0";
import {
  de_DisassociateUserAccessLoggingSettingsCommand,
  se_DisassociateUserAccessLoggingSettingsCommand,
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
 * The input for {@link DisassociateUserAccessLoggingSettingsCommand}.
 */
export interface DisassociateUserAccessLoggingSettingsCommandInput
  extends DisassociateUserAccessLoggingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateUserAccessLoggingSettingsCommand}.
 */
export interface DisassociateUserAccessLoggingSettingsCommandOutput
  extends DisassociateUserAccessLoggingSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates user access logging settings from a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DisassociateUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DisassociateUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DisassociateUserAccessLoggingSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateUserAccessLoggingSettingsCommandInput - {@link DisassociateUserAccessLoggingSettingsCommandInput}
 * @returns {@link DisassociateUserAccessLoggingSettingsCommandOutput}
 * @see {@link DisassociateUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link DisassociateUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DisassociateUserAccessLoggingSettingsCommand extends $Command
  .classBuilder<
    DisassociateUserAccessLoggingSettingsCommandInput,
    DisassociateUserAccessLoggingSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "DisassociateUserAccessLoggingSettings", {})
  .n("WorkSpacesWebClient", "DisassociateUserAccessLoggingSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateUserAccessLoggingSettingsCommand)
  .de(de_DisassociateUserAccessLoggingSettingsCommand)
  .build() {}
