// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEntitlementRequest, DeleteEntitlementResult } from "../models/models_0";
import { de_DeleteEntitlementCommand, se_DeleteEntitlementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEntitlementCommand}.
 */
export interface DeleteEntitlementCommandInput extends DeleteEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEntitlementCommand}.
 */
export interface DeleteEntitlementCommandOutput extends DeleteEntitlementResult, __MetadataBearer {}

/**
 * <p>Deletes the specified entitlement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteEntitlementCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteEntitlementCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DeleteEntitlementRequest
 *   Name: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEntitlementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEntitlementCommandInput - {@link DeleteEntitlementCommandInput}
 * @returns {@link DeleteEntitlementCommandOutput}
 * @see {@link DeleteEntitlementCommandInput} for command's `input` shape.
 * @see {@link DeleteEntitlementCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
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
 * @public
 */
export class DeleteEntitlementCommand extends $Command
  .classBuilder<
    DeleteEntitlementCommandInput,
    DeleteEntitlementCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "DeleteEntitlement", {})
  .n("AppStreamClient", "DeleteEntitlementCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEntitlementCommand)
  .de(de_DeleteEntitlementCommand)
  .build() {}
