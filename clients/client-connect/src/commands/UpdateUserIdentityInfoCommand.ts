// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUserIdentityInfoRequest } from "../models/models_3";
import { UpdateUserIdentityInfo } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserIdentityInfoCommand}.
 */
export interface UpdateUserIdentityInfoCommandInput extends UpdateUserIdentityInfoRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserIdentityInfoCommand}.
 */
export interface UpdateUserIdentityInfoCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the identity information for the specified user.</p>
 *          <important>
 *             <p>We strongly recommend limiting who has the ability to invoke <code>UpdateUserIdentityInfo</code>. Someone with
 *     that ability can change the login credentials of other users by changing their email address. This poses a security
 *     risk to your organization. They can change the email address of a user to the attacker's email address, and then
 *     reset the password through email. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html">Best Practices for Security Profiles</a>
 *     in the <i>Amazon Connect Administrator Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserIdentityInfoCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserIdentityInfoCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserIdentityInfoRequest
 *   IdentityInfo: { // UserIdentityInfo
 *     FirstName: "STRING_VALUE",
 *     LastName: "STRING_VALUE",
 *     Email: "STRING_VALUE",
 *     SecondaryEmail: "STRING_VALUE",
 *     Mobile: "STRING_VALUE",
 *   },
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserIdentityInfoCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserIdentityInfoCommandInput - {@link UpdateUserIdentityInfoCommandInput}
 * @returns {@link UpdateUserIdentityInfoCommandOutput}
 * @see {@link UpdateUserIdentityInfoCommandInput} for command's `input` shape.
 * @see {@link UpdateUserIdentityInfoCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateUserIdentityInfoCommand extends $Command
  .classBuilder<
    UpdateUserIdentityInfoCommandInput,
    UpdateUserIdentityInfoCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateUserIdentityInfo", {})
  .n("ConnectClient", "UpdateUserIdentityInfoCommand")
  .sc(UpdateUserIdentityInfo)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserIdentityInfoRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserIdentityInfoCommandInput;
      output: UpdateUserIdentityInfoCommandOutput;
    };
  };
}
