// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterMemberToAddressListRequest, RegisterMemberToAddressListResponse } from "../models/models_0";
import { RegisterMemberToAddressList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface RegisterMemberToAddressListCommandOutput extends RegisterMemberToAddressListResponse, __MetadataBearer {}

/**
 * Adds a member to an address list.
 *
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
 *
 * Occurs when a user is denied access to a specific resource or action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request configuration has conflicts. For details, see the accompanying error message.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Occurs when a requested resource is not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Occurs when an operation exceeds a predefined service quota or limit.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request validation has failed. For details, see the accompanying error message.
 *
 * @throws {@link MailManagerServiceException}
 *
 * Base exception class for all service exceptions from MailManager service.
 *
 * @public
 */
export class RegisterMemberToAddressListCommand extends command<RegisterMemberToAddressListCommandInput, RegisterMemberToAddressListCommandOutput>(
  _ep0,
  _mw0,
  "RegisterMemberToAddressList",
  RegisterMemberToAddressList$
) {
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
