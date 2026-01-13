// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  AssociateApplicationToEntitlementRequest,
  AssociateApplicationToEntitlementResult,
} from "../models/models_0";
import { AssociateApplicationToEntitlement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateApplicationToEntitlementCommand}.
 */
export interface AssociateApplicationToEntitlementCommandInput extends AssociateApplicationToEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link AssociateApplicationToEntitlementCommand}.
 */
export interface AssociateApplicationToEntitlementCommandOutput extends AssociateApplicationToEntitlementResult, __MetadataBearer {}

/**
 * <p>Associates an application to entitle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, AssociateApplicationToEntitlementCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, AssociateApplicationToEntitlementCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // AssociateApplicationToEntitlementRequest
 *   StackName: "STRING_VALUE", // required
 *   EntitlementName: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new AssociateApplicationToEntitlementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateApplicationToEntitlementCommandInput - {@link AssociateApplicationToEntitlementCommandInput}
 * @returns {@link AssociateApplicationToEntitlementCommandOutput}
 * @see {@link AssociateApplicationToEntitlementCommandInput} for command's `input` shape.
 * @see {@link AssociateApplicationToEntitlementCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link EntitlementNotFoundException} (client fault)
 *  <p>The entitlement can't be found.</p>
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
export class AssociateApplicationToEntitlementCommand extends $Command
  .classBuilder<
    AssociateApplicationToEntitlementCommandInput,
    AssociateApplicationToEntitlementCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "AssociateApplicationToEntitlement", {})
  .n("AppStreamClient", "AssociateApplicationToEntitlementCommand")
  .sc(AssociateApplicationToEntitlement$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateApplicationToEntitlementRequest;
      output: {};
    };
    sdk: {
      input: AssociateApplicationToEntitlementCommandInput;
      output: AssociateApplicationToEntitlementCommandOutput;
    };
  };
}
