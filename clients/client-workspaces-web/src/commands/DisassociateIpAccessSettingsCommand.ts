// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateIpAccessSettingsRequest, DisassociateIpAccessSettingsResponse } from "../models/models_0";
import {
  de_DisassociateIpAccessSettingsCommand,
  se_DisassociateIpAccessSettingsCommand,
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
 * The input for {@link DisassociateIpAccessSettingsCommand}.
 */
export interface DisassociateIpAccessSettingsCommandInput extends DisassociateIpAccessSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateIpAccessSettingsCommand}.
 */
export interface DisassociateIpAccessSettingsCommandOutput
  extends DisassociateIpAccessSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates IP access settings from a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DisassociateIpAccessSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DisassociateIpAccessSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DisassociateIpAccessSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateIpAccessSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateIpAccessSettingsCommandInput - {@link DisassociateIpAccessSettingsCommandInput}
 * @returns {@link DisassociateIpAccessSettingsCommandOutput}
 * @see {@link DisassociateIpAccessSettingsCommandInput} for command's `input` shape.
 * @see {@link DisassociateIpAccessSettingsCommandOutput} for command's `response` shape.
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
export class DisassociateIpAccessSettingsCommand extends $Command
  .classBuilder<
    DisassociateIpAccessSettingsCommandInput,
    DisassociateIpAccessSettingsCommandOutput,
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
  .s("AWSErmineControlPlaneService", "DisassociateIpAccessSettings", {})
  .n("WorkSpacesWebClient", "DisassociateIpAccessSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateIpAccessSettingsCommand)
  .de(de_DisassociateIpAccessSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateIpAccessSettingsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateIpAccessSettingsCommandInput;
      output: DisassociateIpAccessSettingsCommandOutput;
    };
  };
}
