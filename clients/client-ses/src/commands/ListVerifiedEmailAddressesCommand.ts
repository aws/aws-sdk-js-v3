// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVerifiedEmailAddressesResponse } from "../models/models_0";
import { ListVerifiedEmailAddresses } from "../schemas/schemas_32_Email";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVerifiedEmailAddressesCommand}.
 */
export interface ListVerifiedEmailAddressesCommandInput {}
/**
 * @public
 *
 * The output of {@link ListVerifiedEmailAddressesCommand}.
 */
export interface ListVerifiedEmailAddressesCommandOutput extends ListVerifiedEmailAddressesResponse, __MetadataBearer {}

/**
 * <p>Deprecated. Use the <code>ListIdentities</code> operation to list the email addresses
 *             and domains associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListVerifiedEmailAddressesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListVerifiedEmailAddressesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = {};
 * const command = new ListVerifiedEmailAddressesCommand(input);
 * const response = await client.send(command);
 * // { // ListVerifiedEmailAddressesResponse
 * //   VerifiedEmailAddresses: [ // AddressList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVerifiedEmailAddressesCommandInput - {@link ListVerifiedEmailAddressesCommandInput}
 * @returns {@link ListVerifiedEmailAddressesCommandOutput}
 * @see {@link ListVerifiedEmailAddressesCommandInput} for command's `input` shape.
 * @see {@link ListVerifiedEmailAddressesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @example ListVerifiedEmailAddresses
 * ```javascript
 * // The following example lists all email addresses that have been submitted for verification with Amazon SES:
 * const input = { /* empty *\/ };
 * const command = new ListVerifiedEmailAddressesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   VerifiedEmailAddresses: [
 *     "user1@example.com",
 *     "user2@example.com"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListVerifiedEmailAddressesCommand extends $Command
  .classBuilder<
    ListVerifiedEmailAddressesCommandInput,
    ListVerifiedEmailAddressesCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService", "ListVerifiedEmailAddresses", {})
  .n("SESClient", "ListVerifiedEmailAddressesCommand")
  .sc(ListVerifiedEmailAddresses)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListVerifiedEmailAddressesResponse;
    };
    sdk: {
      input: ListVerifiedEmailAddressesCommandInput;
      output: ListVerifiedEmailAddressesCommandOutput;
    };
  };
}
