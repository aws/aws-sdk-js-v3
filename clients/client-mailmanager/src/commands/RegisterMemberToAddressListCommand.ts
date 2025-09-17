// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import {
  RegisterMemberToAddressListRequest,
  RegisterMemberToAddressListRequestFilterSensitiveLog,
  RegisterMemberToAddressListResponse,
} from "../models/models_0";
import { de_RegisterMemberToAddressListCommand, se_RegisterMemberToAddressListCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterMemberToAddressListCommand}.
 */
export interface RegisterMemberToAddressListCommandInput extends RegisterMemberToAddressListRequest {}
/**
 * @public
 *
 * The output of {@link RegisterMemberToAddressListCommand}.
 */
export interface RegisterMemberToAddressListCommandOutput
  extends RegisterMemberToAddressListResponse,
    __MetadataBearer {}

/**
 * <p>Adds a member to an address list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, RegisterMemberToAddressListCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, RegisterMemberToAddressListCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // RegisterMemberToAddressListRequest
 *   AddressListId: "STRING_VALUE", // required
 *   Address: "STRING_VALUE", // required
 * };
 * const command = new RegisterMemberToAddressListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterMemberToAddressListCommandInput - {@link RegisterMemberToAddressListCommandInput}
 * @returns {@link RegisterMemberToAddressListCommandOutput}
 * @see {@link RegisterMemberToAddressListCommandInput} for command's `input` shape.
 * @see {@link RegisterMemberToAddressListCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when an operation exceeds a predefined service quota or limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class RegisterMemberToAddressListCommand extends $Command
  .classBuilder<
    RegisterMemberToAddressListCommandInput,
    RegisterMemberToAddressListCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "RegisterMemberToAddressList", {})
  .n("MailManagerClient", "RegisterMemberToAddressListCommand")
  .f(RegisterMemberToAddressListRequestFilterSensitiveLog, void 0)
  .ser(se_RegisterMemberToAddressListCommand)
  .de(de_RegisterMemberToAddressListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterMemberToAddressListRequest;
      output: {};
    };
    sdk: {
      input: RegisterMemberToAddressListCommandInput;
      output: RegisterMemberToAddressListCommandOutput;
    };
  };
}
