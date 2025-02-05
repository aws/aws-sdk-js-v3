// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVerifiedEmailAddressesResponse } from "../models/models_0";
import { de_ListVerifiedEmailAddressesCommand, se_ListVerifiedEmailAddressesCommand } from "../protocols/Aws_query";
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 * @example ListVerifiedEmailAddresses
 * ```javascript
 * // The following example lists all email addresses that have been submitted for verification with Amazon SES:
 * const input = {};
 * const command = new ListVerifiedEmailAddressesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VerifiedEmailAddresses": [
 *     "user1@example.com",
 *     "user2@example.com"
 *   ]
 * }
 * *\/
 * // example id: listverifiedemailaddresses-1469051402570
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "ListVerifiedEmailAddresses", {})
  .n("SESClient", "ListVerifiedEmailAddressesCommand")
  .f(void 0, void 0)
  .ser(se_ListVerifiedEmailAddressesCommand)
  .de(de_ListVerifiedEmailAddressesCommand)
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
