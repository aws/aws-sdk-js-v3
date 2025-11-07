// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateApplicationFleetRequest, AssociateApplicationFleetResult } from "../models/models_0";
import { AssociateApplicationFleet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateApplicationFleetCommand}.
 */
export interface AssociateApplicationFleetCommandInput extends AssociateApplicationFleetRequest {}
/**
 * @public
 *
 * The output of {@link AssociateApplicationFleetCommand}.
 */
export interface AssociateApplicationFleetCommandOutput extends AssociateApplicationFleetResult, __MetadataBearer {}

/**
 * <p>Associates the specified application with the specified fleet. This is only supported for Elastic fleets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, AssociateApplicationFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, AssociateApplicationFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // AssociateApplicationFleetRequest
 *   FleetName: "STRING_VALUE", // required
 *   ApplicationArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateApplicationFleetCommand(input);
 * const response = await client.send(command);
 * // { // AssociateApplicationFleetResult
 * //   ApplicationFleetAssociation: { // ApplicationFleetAssociation
 * //     FleetName: "STRING_VALUE", // required
 * //     ApplicationArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateApplicationFleetCommandInput - {@link AssociateApplicationFleetCommandInput}
 * @returns {@link AssociateApplicationFleetCommandOutput}
 * @see {@link AssociateApplicationFleetCommandInput} for command's `input` shape.
 * @see {@link AssociateApplicationFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
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
export class AssociateApplicationFleetCommand extends $Command
  .classBuilder<
    AssociateApplicationFleetCommandInput,
    AssociateApplicationFleetCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "AssociateApplicationFleet", {})
  .n("AppStreamClient", "AssociateApplicationFleetCommand")
  .sc(AssociateApplicationFleet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateApplicationFleetRequest;
      output: AssociateApplicationFleetResult;
    };
    sdk: {
      input: AssociateApplicationFleetCommandInput;
      output: AssociateApplicationFleetCommandOutput;
    };
  };
}
