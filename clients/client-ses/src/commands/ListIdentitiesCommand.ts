// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListIdentitiesRequest, ListIdentitiesResponse } from "../models/models_0";
import { de_ListIdentitiesCommand, se_ListIdentitiesCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIdentitiesCommand}.
 */
export interface ListIdentitiesCommandInput extends ListIdentitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentitiesCommand}.
 */
export interface ListIdentitiesCommandOutput extends ListIdentitiesResponse, __MetadataBearer {}

/**
 * <p>Returns a list containing all of the identities (email addresses and domains) for your
 *             Amazon Web Services account in the current Amazon Web Services Region, regardless of verification status.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 *          <note>
 *             <p>It's recommended that for successive pagination calls of this API, you continue to
 *                 the use the same parameter/value pairs as used in the original call, e.g., if you
 *                 used <code>IdentityType=Domain</code> in the the original call and received a
 *                     <code>NextToken</code> in the response, you should continue providing the
 *                     <code>IdentityType=Domain</code> parameter for further <code>NextToken</code>
 *                 calls; however, if you didn't provide the <code>IdentityType</code> parameter in the
 *                 original call, then continue to not provide it for successive pagination calls.
 *                 Using this protocol will ensure consistent results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListIdentitiesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListIdentitiesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // ListIdentitiesRequest
 *   IdentityType: "EmailAddress" || "Domain",
 *   NextToken: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentitiesResponse
 * //   Identities: [ // IdentityList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentitiesCommandInput - {@link ListIdentitiesCommandInput}
 * @returns {@link ListIdentitiesCommandOutput}
 * @see {@link ListIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 * @example ListIdentities
 * ```javascript
 * // The following example lists the email address identities that have been submitted for verification with Amazon SES:
 * const input = {
 *   "IdentityType": "EmailAddress",
 *   "MaxItems": 123,
 *   "NextToken": ""
 * };
 * const command = new ListIdentitiesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Identities": [
 *     "user@example.com"
 *   ],
 *   "NextToken": ""
 * }
 * *\/
 * // example id: listidentities-1469048638493
 * ```
 *
 */
export class ListIdentitiesCommand extends $Command
  .classBuilder<
    ListIdentitiesCommandInput,
    ListIdentitiesCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "ListIdentities", {})
  .n("SESClient", "ListIdentitiesCommand")
  .f(void 0, void 0)
  .ser(se_ListIdentitiesCommand)
  .de(de_ListIdentitiesCommand)
  .build() {}
