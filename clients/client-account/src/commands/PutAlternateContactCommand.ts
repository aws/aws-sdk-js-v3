// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PutAlternateContactRequest } from "../models/models_0";
import { PutAlternateContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAlternateContactCommand}.
 */
export interface PutAlternateContactCommandInput extends PutAlternateContactRequest {}
/**
 * @public
 *
 * The output of {@link PutAlternateContactCommand}.
 */
export interface PutAlternateContactCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact-alternate.html">Update the alternate contacts for your Amazon Web Services account</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enable trusted access for Amazon Web Services Account Management</a>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, PutAlternateContactCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, PutAlternateContactCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // PutAlternateContactRequest
 *   Name: "STRING_VALUE", // required
 *   Title: "STRING_VALUE", // required
 *   EmailAddress: "STRING_VALUE", // required
 *   PhoneNumber: "STRING_VALUE", // required
 *   AlternateContactType: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new PutAlternateContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAlternateContactCommandInput - {@link PutAlternateContactCommandInput}
 * @returns {@link PutAlternateContactCommandOutput}
 * @see {@link PutAlternateContactCommandInput} for command's `input` shape.
 * @see {@link PutAlternateContactCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation failed because the calling identity doesn't have the minimum required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again later.</p>
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
export class PutAlternateContactCommand extends $Command
  .classBuilder<
    PutAlternateContactCommandInput,
    PutAlternateContactCommandOutput,
    AccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Account", "PutAlternateContact", {})
  .n("AccountClient", "PutAlternateContactCommand")
  .sc(PutAlternateContact$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAlternateContactRequest;
      output: {};
    };
    sdk: {
      input: PutAlternateContactCommandInput;
      output: PutAlternateContactCommandOutput;
    };
  };
}
