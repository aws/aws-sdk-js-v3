// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateBrowserSettingsRequest, DisassociateBrowserSettingsResponse } from "../models/models_0";
import {
  de_DisassociateBrowserSettingsCommand,
  se_DisassociateBrowserSettingsCommand,
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
 * The input for {@link DisassociateBrowserSettingsCommand}.
 */
export interface DisassociateBrowserSettingsCommandInput extends DisassociateBrowserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateBrowserSettingsCommand}.
 */
export interface DisassociateBrowserSettingsCommandOutput
  extends DisassociateBrowserSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates browser settings from a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DisassociateBrowserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DisassociateBrowserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DisassociateBrowserSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateBrowserSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateBrowserSettingsCommandInput - {@link DisassociateBrowserSettingsCommandInput}
 * @returns {@link DisassociateBrowserSettingsCommandOutput}
 * @see {@link DisassociateBrowserSettingsCommandInput} for command's `input` shape.
 * @see {@link DisassociateBrowserSettingsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DisassociateBrowserSettingsCommand extends $Command
  .classBuilder<
    DisassociateBrowserSettingsCommandInput,
    DisassociateBrowserSettingsCommandOutput,
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
  .s("AWSErmineControlPlaneService", "DisassociateBrowserSettings", {})
  .n("WorkSpacesWebClient", "DisassociateBrowserSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateBrowserSettingsCommand)
  .de(de_DisassociateBrowserSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateBrowserSettingsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateBrowserSettingsCommandInput;
      output: DisassociateBrowserSettingsCommandOutput;
    };
  };
}
