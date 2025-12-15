// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVerifiedEmailAddressRequest } from "../models/models_0";
import { DeleteVerifiedEmailAddress$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVerifiedEmailAddressCommand}.
 */
export interface DeleteVerifiedEmailAddressCommandInput extends DeleteVerifiedEmailAddressRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVerifiedEmailAddressCommand}.
 */
export interface DeleteVerifiedEmailAddressCommandOutput extends __MetadataBearer {}

/**
 * <p>Deprecated. Use the <code>DeleteIdentity</code> operation to delete email addresses
 *             and domains.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteVerifiedEmailAddressCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteVerifiedEmailAddressCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // DeleteVerifiedEmailAddressRequest
 *   EmailAddress: "STRING_VALUE", // required
 * };
 * const command = new DeleteVerifiedEmailAddressCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVerifiedEmailAddressCommandInput - {@link DeleteVerifiedEmailAddressCommandInput}
 * @returns {@link DeleteVerifiedEmailAddressCommandOutput}
 * @see {@link DeleteVerifiedEmailAddressCommandInput} for command's `input` shape.
 * @see {@link DeleteVerifiedEmailAddressCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @example DeleteVerifiedEmailAddress
 * ```javascript
 * // The following example deletes an email address from the list of identities that have been submitted for verification with Amazon SES:
 * const input = {
 *   EmailAddress: "user@example.com"
 * };
 * const command = new DeleteVerifiedEmailAddressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteVerifiedEmailAddressCommand extends $Command
  .classBuilder<
    DeleteVerifiedEmailAddressCommandInput,
    DeleteVerifiedEmailAddressCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService", "DeleteVerifiedEmailAddress", {})
  .n("SESClient", "DeleteVerifiedEmailAddressCommand")
  .sc(DeleteVerifiedEmailAddress$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVerifiedEmailAddressRequest;
      output: {};
    };
    sdk: {
      input: DeleteVerifiedEmailAddressCommandInput;
      output: DeleteVerifiedEmailAddressCommandOutput;
    };
  };
}
