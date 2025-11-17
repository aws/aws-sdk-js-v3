// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableUserRequest, DisableUserResult } from "../models/models_0";
import { DisableUser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableUserCommand}.
 */
export interface DisableUserCommandInput extends DisableUserRequest {}
/**
 * @public
 *
 * The output of {@link DisableUserCommand}.
 */
export interface DisableUserCommandOutput extends DisableUserResult, __MetadataBearer {}

/**
 * <p>Disables the specified user in the user pool. Users can't sign in to WorkSpaces Applications until they are re-enabled. This action does not delete the user. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DisableUserCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DisableUserCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DisableUserRequest
 *   UserName: "STRING_VALUE", // required
 *   AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD", // required
 * };
 * const command = new DisableUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableUserCommandInput - {@link DisableUserCommandInput}
 * @returns {@link DisableUserCommandOutput}
 * @see {@link DisableUserCommandInput} for command's `input` shape.
 * @see {@link DisableUserCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
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
export class DisableUserCommand extends $Command
  .classBuilder<
    DisableUserCommandInput,
    DisableUserCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DisableUser", {})
  .n("AppStreamClient", "DisableUserCommand")
  .sc(DisableUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableUserRequest;
      output: {};
    };
    sdk: {
      input: DisableUserCommandInput;
      output: DisableUserCommandOutput;
    };
  };
}
