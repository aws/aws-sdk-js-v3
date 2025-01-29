// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import {
  DeregisterMemberFromAddressListRequest,
  DeregisterMemberFromAddressListRequestFilterSensitiveLog,
  DeregisterMemberFromAddressListResponse,
} from "../models/models_0";
import {
  de_DeregisterMemberFromAddressListCommand,
  se_DeregisterMemberFromAddressListCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeregisterMemberFromAddressListCommandOutput
  extends DeregisterMemberFromAddressListResponse,
    __MetadataBearer {}

/**
 * <p>Removes a member from an address list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, DeregisterMemberFromAddressListCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, DeregisterMemberFromAddressListCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
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
 * @public
 */
export class DeregisterMemberFromAddressListCommand extends $Command
  .classBuilder<
    DeregisterMemberFromAddressListCommandInput,
    DeregisterMemberFromAddressListCommandOutput,
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
  .s("MailManagerSvc", "DeregisterMemberFromAddressList", {})
  .n("MailManagerClient", "DeregisterMemberFromAddressListCommand")
  .f(DeregisterMemberFromAddressListRequestFilterSensitiveLog, void 0)
  .ser(se_DeregisterMemberFromAddressListCommand)
  .de(de_DeregisterMemberFromAddressListCommand)
  .build() {
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
