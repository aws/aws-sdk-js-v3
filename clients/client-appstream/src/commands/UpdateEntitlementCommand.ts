// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateEntitlementRequest, UpdateEntitlementResult } from "../models/models_0";
import { de_UpdateEntitlementCommand, se_UpdateEntitlementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEntitlementCommand}.
 */
export interface UpdateEntitlementCommandInput extends UpdateEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEntitlementCommand}.
 */
export interface UpdateEntitlementCommandOutput extends UpdateEntitlementResult, __MetadataBearer {}

/**
 * <p>Updates the specified entitlement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateEntitlementCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateEntitlementCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // UpdateEntitlementRequest
 *   Name: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AppVisibility: "ALL" || "ASSOCIATED",
 *   Attributes: [ // EntitlementAttributeList
 *     { // EntitlementAttribute
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateEntitlementCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEntitlementResult
 * //   Entitlement: { // Entitlement
 * //     Name: "STRING_VALUE", // required
 * //     StackName: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     AppVisibility: "ALL" || "ASSOCIATED", // required
 * //     Attributes: [ // EntitlementAttributeList // required
 * //       { // EntitlementAttribute
 * //         Name: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEntitlementCommandInput - {@link UpdateEntitlementCommandInput}
 * @returns {@link UpdateEntitlementCommandOutput}
 * @see {@link UpdateEntitlementCommandInput} for command's `input` shape.
 * @see {@link UpdateEntitlementCommandOutput} for command's `response` shape.
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
export class UpdateEntitlementCommand extends $Command
  .classBuilder<
    UpdateEntitlementCommandInput,
    UpdateEntitlementCommandOutput,
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
  .s("PhotonAdminProxyService", "UpdateEntitlement", {})
  .n("AppStreamClient", "UpdateEntitlementCommand")
  .f(void 0, void 0)
  .ser(se_UpdateEntitlementCommand)
  .de(de_UpdateEntitlementCommand)
  .build() {}
