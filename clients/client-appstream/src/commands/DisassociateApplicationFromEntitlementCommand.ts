// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateApplicationFromEntitlementRequest,
  DisassociateApplicationFromEntitlementResult,
} from "../models/models_0";
import { DisassociateApplicationFromEntitlement } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateApplicationFromEntitlementCommand}.
 */
export interface DisassociateApplicationFromEntitlementCommandInput
  extends DisassociateApplicationFromEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateApplicationFromEntitlementCommand}.
 */
export interface DisassociateApplicationFromEntitlementCommandOutput
  extends DisassociateApplicationFromEntitlementResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified application from the specified entitlement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DisassociateApplicationFromEntitlementCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DisassociateApplicationFromEntitlementCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DisassociateApplicationFromEntitlementRequest
 *   StackName: "STRING_VALUE", // required
 *   EntitlementName: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DisassociateApplicationFromEntitlementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateApplicationFromEntitlementCommandInput - {@link DisassociateApplicationFromEntitlementCommandInput}
 * @returns {@link DisassociateApplicationFromEntitlementCommandOutput}
 * @see {@link DisassociateApplicationFromEntitlementCommandInput} for command's `input` shape.
 * @see {@link DisassociateApplicationFromEntitlementCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link EntitlementNotFoundException} (client fault)
 *  <p>The entitlement can't be found.</p>
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
export class DisassociateApplicationFromEntitlementCommand extends $Command
  .classBuilder<
    DisassociateApplicationFromEntitlementCommandInput,
    DisassociateApplicationFromEntitlementCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DisassociateApplicationFromEntitlement", {})
  .n("AppStreamClient", "DisassociateApplicationFromEntitlementCommand")
  .sc(DisassociateApplicationFromEntitlement)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateApplicationFromEntitlementRequest;
      output: {};
    };
    sdk: {
      input: DisassociateApplicationFromEntitlementCommandInput;
      output: DisassociateApplicationFromEntitlementCommandOutput;
    };
  };
}
