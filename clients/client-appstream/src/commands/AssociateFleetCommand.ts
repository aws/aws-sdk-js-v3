// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateFleetRequest, AssociateFleetResult } from "../models/models_0";
import { AssociateFleet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateFleetCommand}.
 */
export interface AssociateFleetCommandInput extends AssociateFleetRequest {}
/**
 * @public
 *
 * The output of {@link AssociateFleetCommand}.
 */
export interface AssociateFleetCommandOutput extends AssociateFleetResult, __MetadataBearer {}

/**
 * <p>Associates the specified fleet with the specified stack.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, AssociateFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, AssociateFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // AssociateFleetRequest
 *   FleetName: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE", // required
 * };
 * const command = new AssociateFleetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateFleetCommandInput - {@link AssociateFleetCommandInput}
 * @returns {@link AssociateFleetCommandOutput}
 * @see {@link AssociateFleetCommandInput} for command's `input` shape.
 * @see {@link AssociateFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *  <p>The image can't be updated because it's not compatible for updates.</p>
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class AssociateFleetCommand extends $Command
  .classBuilder<
    AssociateFleetCommandInput,
    AssociateFleetCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "AssociateFleet", {})
  .n("AppStreamClient", "AssociateFleetCommand")
  .sc(AssociateFleet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateFleetRequest;
      output: {};
    };
    sdk: {
      input: AssociateFleetCommandInput;
      output: AssociateFleetCommandOutput;
    };
  };
}
