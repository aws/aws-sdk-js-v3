// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableUserRequest, EnableUserRequestFilterSensitiveLog, EnableUserResult } from "../models/models_0";
import { de_EnableUserCommand, se_EnableUserCommand } from "../protocols/Aws_json1_1";

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
 * <p>Enables a user in the user pool. After being enabled, users can sign in to AppStream 2.0 and open applications from the stacks to which they are assigned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, EnableUserCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, EnableUserCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "EnableUser", {})
  .n("AppStreamClient", "EnableUserCommand")
  .f(EnableUserRequestFilterSensitiveLog, void 0)
  .ser(se_EnableUserCommand)
  .de(de_EnableUserCommand)
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
