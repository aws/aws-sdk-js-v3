// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAlternateContactRequest,
  GetAlternateContactResponse,
  GetAlternateContactResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetAlternateContactCommand, se_GetAlternateContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAlternateContactCommand}.
 */
export interface GetAlternateContactCommandInput extends GetAlternateContactRequest {}
/**
 * @public
 *
 * The output of {@link GetAlternateContactCommand}.
 */
export interface GetAlternateContactCommandOutput extends GetAlternateContactResponse, __MetadataBearer {}

/**
 * <p>Retrieves the specified alternate contact attached to an Amazon Web Services account.</p>
 *          <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or
 *                 updating the alternate contacts</a>.</p>
 *          <note>
 *             <p>Before you can update the alternate contact information for an
 *      Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management
 *      and Organizations.  For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for
 *      Amazon Web Services Account Management</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, GetAlternateContactCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, GetAlternateContactCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * const client = new AccountClient(config);
 * const input = { // GetAlternateContactRequest
 *   AlternateContactType: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetAlternateContactCommand(input);
 * const response = await client.send(command);
 * // { // GetAlternateContactResponse
 * //   AlternateContact: { // AlternateContact
 * //     Name: "STRING_VALUE",
 * //     Title: "STRING_VALUE",
 * //     EmailAddress: "STRING_VALUE",
 * //     PhoneNumber: "STRING_VALUE",
 * //     AlternateContactType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAlternateContactCommandInput - {@link GetAlternateContactCommandInput}
 * @returns {@link GetAlternateContactCommandOutput}
 * @see {@link GetAlternateContactCommandInput} for command's `input` shape.
 * @see {@link GetAlternateContactCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation failed because the calling identity doesn't have the minimum required
 *             permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation failed because of an error internal to Amazon Web Services. Try your operation again
 *             later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation failed because it specified a resource that can't be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The operation failed because it was called too frequently and exceeded a throttle
 *             limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed because one of the input parameters was invalid.</p>
 *
 * @throws {@link AccountServiceException}
 * <p>Base exception class for all service exceptions from Account service.</p>
 *
 * @public
 */
export class GetAlternateContactCommand extends $Command
  .classBuilder<
    GetAlternateContactCommandInput,
    GetAlternateContactCommandOutput,
    AccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AccountClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Account", "GetAlternateContact", {})
  .n("AccountClient", "GetAlternateContactCommand")
  .f(void 0, GetAlternateContactResponseFilterSensitiveLog)
  .ser(se_GetAlternateContactCommand)
  .de(de_GetAlternateContactCommand)
  .build() {}
