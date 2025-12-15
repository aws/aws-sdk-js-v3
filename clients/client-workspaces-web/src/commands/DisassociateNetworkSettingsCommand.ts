// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateNetworkSettingsRequest, DisassociateNetworkSettingsResponse } from "../models/models_0";
import { DisassociateNetworkSettings$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateNetworkSettingsCommand}.
 */
export interface DisassociateNetworkSettingsCommandInput extends DisassociateNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateNetworkSettingsCommand}.
 */
export interface DisassociateNetworkSettingsCommandOutput
  extends DisassociateNetworkSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates network settings from a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DisassociateNetworkSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DisassociateNetworkSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DisassociateNetworkSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateNetworkSettingsCommandInput - {@link DisassociateNetworkSettingsCommandInput}
 * @returns {@link DisassociateNetworkSettingsCommandOutput}
 * @see {@link DisassociateNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link DisassociateNetworkSettingsCommandOutput} for command's `response` shape.
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
export class DisassociateNetworkSettingsCommand extends $Command
  .classBuilder<
    DisassociateNetworkSettingsCommandInput,
    DisassociateNetworkSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "DisassociateNetworkSettings", {})
  .n("WorkSpacesWebClient", "DisassociateNetworkSettingsCommand")
  .sc(DisassociateNetworkSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateNetworkSettingsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateNetworkSettingsCommandInput;
      output: DisassociateNetworkSettingsCommandOutput;
    };
  };
}
