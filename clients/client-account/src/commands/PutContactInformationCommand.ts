// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutContactInformationRequest, PutContactInformationRequestFilterSensitiveLog } from "../models/models_0";
import { de_PutContactInformationCommand, se_PutContactInformationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutContactInformationCommand}.
 */
export interface PutContactInformationCommandInput extends PutContactInformationRequest {}
/**
 * @public
 *
 * The output of {@link PutContactInformationCommand}.
 */
export interface PutContactInformationCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the primary contact information of an Amazon Web Services account.</p>
 *          <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update
 *                 the primary and alternate contact information</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, PutContactInformationCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, PutContactInformationCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * const client = new AccountClient(config);
 * const input = { // PutContactInformationRequest
 *   ContactInformation: { // ContactInformation
 *     FullName: "STRING_VALUE", // required
 *     AddressLine1: "STRING_VALUE", // required
 *     AddressLine2: "STRING_VALUE",
 *     AddressLine3: "STRING_VALUE",
 *     City: "STRING_VALUE", // required
 *     StateOrRegion: "STRING_VALUE",
 *     DistrictOrCounty: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE", // required
 *     CountryCode: "STRING_VALUE", // required
 *     PhoneNumber: "STRING_VALUE", // required
 *     CompanyName: "STRING_VALUE",
 *     WebsiteUrl: "STRING_VALUE",
 *   },
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new PutContactInformationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutContactInformationCommandInput - {@link PutContactInformationCommandInput}
 * @returns {@link PutContactInformationCommandOutput}
 * @see {@link PutContactInformationCommandInput} for command's `input` shape.
 * @see {@link PutContactInformationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class PutContactInformationCommand extends $Command
  .classBuilder<
    PutContactInformationCommandInput,
    PutContactInformationCommandOutput,
    AccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccountClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Account", "PutContactInformation", {})
  .n("AccountClient", "PutContactInformationCommand")
  .f(PutContactInformationRequestFilterSensitiveLog, void 0)
  .ser(se_PutContactInformationCommand)
  .de(de_PutContactInformationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutContactInformationRequest;
      output: {};
    };
    sdk: {
      input: PutContactInformationCommandInput;
      output: PutContactInformationCommandOutput;
    };
  };
}
