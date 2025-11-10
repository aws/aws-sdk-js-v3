// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateImagePermissionsRequest, UpdateImagePermissionsResult } from "../models/models_0";
import { UpdateImagePermissions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateImagePermissionsCommand}.
 */
export interface UpdateImagePermissionsCommandInput extends UpdateImagePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateImagePermissionsCommand}.
 */
export interface UpdateImagePermissionsCommandOutput extends UpdateImagePermissionsResult, __MetadataBearer {}

/**
 * <p>Adds or updates permissions for the specified private image. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateImagePermissionsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateImagePermissionsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // UpdateImagePermissionsRequest
 *   Name: "STRING_VALUE", // required
 *   SharedAccountId: "STRING_VALUE", // required
 *   ImagePermissions: { // ImagePermissions
 *     allowFleet: true || false,
 *     allowImageBuilder: true || false,
 *   },
 * };
 * const command = new UpdateImagePermissionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateImagePermissionsCommandInput - {@link UpdateImagePermissionsCommandInput}
 * @returns {@link UpdateImagePermissionsCommandOutput}
 * @see {@link UpdateImagePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateImagePermissionsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link ResourceNotAvailableException} (client fault)
 *  <p>The specified resource exists and is not in use, but isn't available.</p>
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
export class UpdateImagePermissionsCommand extends $Command
  .classBuilder<
    UpdateImagePermissionsCommandInput,
    UpdateImagePermissionsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "UpdateImagePermissions", {})
  .n("AppStreamClient", "UpdateImagePermissionsCommand")
  .sc(UpdateImagePermissions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateImagePermissionsRequest;
      output: {};
    };
    sdk: {
      input: UpdateImagePermissionsCommandInput;
      output: UpdateImagePermissionsCommandOutput;
    };
  };
}
