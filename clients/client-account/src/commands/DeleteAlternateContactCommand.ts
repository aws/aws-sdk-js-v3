// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAlternateContactRequest } from "../models/models_0";
import { DeleteAlternateContact } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAlternateContactCommand}.
 */
export interface DeleteAlternateContactCommandInput extends DeleteAlternateContactRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAlternateContactCommand}.
 */
export interface DeleteAlternateContactCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified alternate contact from an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact-alternate.html">Update the alternate contacts for your Amazon Web Services account</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enable trusted access for Amazon Web Services Account Management</a>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, DeleteAlternateContactCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, DeleteAlternateContactCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // DeleteAlternateContactRequest
 *   AlternateContactType: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DeleteAlternateContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAlternateContactCommandInput - {@link DeleteAlternateContactCommandInput}
 * @returns {@link DeleteAlternateContactCommandOutput}
 * @see {@link DeleteAlternateContactCommandInput} for command's `input` shape.
 * @see {@link DeleteAlternateContactCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation failed because the calling identity doesn't have the minimum required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation failed because it specified a resource that can't be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The operation failed because it was called too frequently and exceeded a throttle limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed because one of the input parameters was invalid.</p>
 *
 * @throws {@link AccountServiceException}
 * <p>Base exception class for all service exceptions from Account service.</p>
 *
 *
 * @public
 */
export class DeleteAlternateContactCommand extends $Command
  .classBuilder<
    DeleteAlternateContactCommandInput,
    DeleteAlternateContactCommandOutput,
    AccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Account", "DeleteAlternateContact", {})
  .n("AccountClient", "DeleteAlternateContactCommand")
  .sc(DeleteAlternateContact)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAlternateContactRequest;
      output: {};
    };
    sdk: {
      input: DeleteAlternateContactCommandInput;
      output: DeleteAlternateContactCommandOutput;
    };
  };
}
