// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateNetworkSettingsRequest, AssociateNetworkSettingsResponse } from "../models/models_0";
import { de_AssociateNetworkSettingsCommand, se_AssociateNetworkSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateNetworkSettingsCommand}.
 */
export interface AssociateNetworkSettingsCommandInput extends AssociateNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateNetworkSettingsCommand}.
 */
export interface AssociateNetworkSettingsCommandOutput extends AssociateNetworkSettingsResponse, __MetadataBearer {}

/**
 * <p>Associates a network settings resource with a web portal.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateNetworkSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateNetworkSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // AssociateNetworkSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 *   networkSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // { // AssociateNetworkSettingsResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   networkSettingsArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateNetworkSettingsCommandInput - {@link AssociateNetworkSettingsCommandInput}
 * @returns {@link AssociateNetworkSettingsCommandOutput}
 * @see {@link AssociateNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link AssociateNetworkSettingsCommandOutput} for command's `response` shape.
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
export class AssociateNetworkSettingsCommand extends $Command
  .classBuilder<
    AssociateNetworkSettingsCommandInput,
    AssociateNetworkSettingsCommandOutput,
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
  .s("AWSErmineControlPlaneService", "AssociateNetworkSettings", {})
  .n("WorkSpacesWebClient", "AssociateNetworkSettingsCommand")
  .f(void 0, void 0)
  .ser(se_AssociateNetworkSettingsCommand)
  .de(de_AssociateNetworkSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateNetworkSettingsRequest;
      output: AssociateNetworkSettingsResponse;
    };
    sdk: {
      input: AssociateNetworkSettingsCommandInput;
      output: AssociateNetworkSettingsCommandOutput;
    };
  };
}
