// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { DeleteAddressListRequest, DeleteAddressListResponse } from "../models/models_0";
import { de_DeleteAddressListCommand, se_DeleteAddressListCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAddressListCommand}.
 */
export interface DeleteAddressListCommandInput extends DeleteAddressListRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAddressListCommand}.
 */
export interface DeleteAddressListCommandOutput extends DeleteAddressListResponse, __MetadataBearer {}

/**
 * <p>Deletes an address list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, DeleteAddressListCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, DeleteAddressListCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // DeleteAddressListRequest
 *   AddressListId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAddressListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAddressListCommandInput - {@link DeleteAddressListCommandInput}
 * @returns {@link DeleteAddressListCommandOutput}
 * @see {@link DeleteAddressListCommandInput} for command's `input` shape.
 * @see {@link DeleteAddressListCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class DeleteAddressListCommand extends $Command
  .classBuilder<
    DeleteAddressListCommandInput,
    DeleteAddressListCommandOutput,
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
  .s("MailManagerSvc", "DeleteAddressList", {})
  .n("MailManagerClient", "DeleteAddressListCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAddressListCommand)
  .de(de_DeleteAddressListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAddressListRequest;
      output: {};
    };
    sdk: {
      input: DeleteAddressListCommandInput;
      output: DeleteAddressListCommandOutput;
    };
  };
}
