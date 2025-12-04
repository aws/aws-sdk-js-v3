// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { EnableUserRequest, EnableUserResult } from "../models/models_0";
import { EnableUser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableUserCommand}.
 */
export interface EnableUserCommandInput extends EnableUserRequest {}
/**
 * @public
 *
 * The output of {@link EnableUserCommand}.
 */
export interface EnableUserCommandOutput extends EnableUserResult, __MetadataBearer {}

/**
 * <p>Enables a user in the user pool. After being enabled, users can sign in to WorkSpaces Applications and open applications from the stacks to which they are assigned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, EnableUserCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, EnableUserCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // EnableUserRequest
 *   UserName: "STRING_VALUE", // required
 *   AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD", // required
 * };
 * const command = new EnableUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableUserCommandInput - {@link EnableUserCommandInput}
 * @returns {@link EnableUserCommandOutput}
 * @see {@link EnableUserCommandInput} for command's `input` shape.
 * @see {@link EnableUserCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
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
export class EnableUserCommand extends $Command
  .classBuilder<
    EnableUserCommandInput,
    EnableUserCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "EnableUser", {})
  .n("AppStreamClient", "EnableUserCommand")
  .sc(EnableUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableUserRequest;
      output: {};
    };
    sdk: {
      input: EnableUserCommandInput;
      output: EnableUserCommandOutput;
    };
  };
}
