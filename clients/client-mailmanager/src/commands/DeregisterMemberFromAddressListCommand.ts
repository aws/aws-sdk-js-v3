// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeregisterMemberFromAddressListRequest,
  DeregisterMemberFromAddressListResponse,
} from "../models/models_0";
import { DeregisterMemberFromAddressList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterMemberFromAddressListCommand}.
 */
export interface DeregisterMemberFromAddressListCommandInput extends DeregisterMemberFromAddressListRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterMemberFromAddressListCommand}.
 */
export interface DeregisterMemberFromAddressListCommandOutput extends DeregisterMemberFromAddressListResponse, __MetadataBearer {}

/**
 * <p>Removes a member from an address list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, DeregisterMemberFromAddressListCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, DeregisterMemberFromAddressListCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // DeregisterMemberFromAddressListRequest
 *   AddressListId: "STRING_VALUE", // required
 *   Address: "STRING_VALUE", // required
 * };
 * const command = new DeregisterMemberFromAddressListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterMemberFromAddressListCommandInput - {@link DeregisterMemberFromAddressListCommandInput}
 * @returns {@link DeregisterMemberFromAddressListCommandOutput}
 * @see {@link DeregisterMemberFromAddressListCommandInput} for command's `input` shape.
 * @see {@link DeregisterMemberFromAddressListCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
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
export class DeregisterMemberFromAddressListCommand extends command<DeregisterMemberFromAddressListCommandInput, DeregisterMemberFromAddressListCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterMemberFromAddressList",
  DeregisterMemberFromAddressList$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterMemberFromAddressListRequest;
      output: {};
    };
    sdk: {
      input: DeregisterMemberFromAddressListCommandInput;
      output: DeregisterMemberFromAddressListCommandOutput;
    };
  };
}
