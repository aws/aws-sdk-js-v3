// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccountClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccountClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetContactInformationRequest, GetContactInformationResponse } from "../models/models_0";
import { GetContactInformation } from "../schemas/schemas_3_Email";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContactInformationCommand}.
 */
export interface GetContactInformationCommandInput extends GetContactInformationRequest {}
/**
 * @public
 *
 * The output of {@link GetContactInformationCommand}.
 */
export interface GetContactInformationCommandOutput extends GetContactInformationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, GetContactInformationCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, GetContactInformationCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // GetContactInformationRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new GetContactInformationCommand(input);
 * const response = await client.send(command);
 * // { // GetContactInformationResponse
 * //   ContactInformation: { // ContactInformation
 * //     FullName: "STRING_VALUE", // required
 * //     AddressLine1: "STRING_VALUE", // required
 * //     AddressLine2: "STRING_VALUE",
 * //     AddressLine3: "STRING_VALUE",
 * //     City: "STRING_VALUE", // required
 * //     StateOrRegion: "STRING_VALUE",
 * //     DistrictOrCounty: "STRING_VALUE",
 * //     PostalCode: "STRING_VALUE", // required
 * //     CountryCode: "STRING_VALUE", // required
 * //     PhoneNumber: "STRING_VALUE", // required
 * //     CompanyName: "STRING_VALUE",
 * //     WebsiteUrl: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetContactInformationCommandInput - {@link GetContactInformationCommandInput}
 * @returns {@link GetContactInformationCommandOutput}
 * @see {@link GetContactInformationCommandInput} for command's `input` shape.
 * @see {@link GetContactInformationCommandOutput} for command's `response` shape.
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
export class GetContactInformationCommand extends $Command
  .classBuilder<
    GetContactInformationCommandInput,
    GetContactInformationCommandOutput,
    AccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Account", "GetContactInformation", {})
  .n("AccountClient", "GetContactInformationCommand")
  .sc(GetContactInformation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContactInformationRequest;
      output: GetContactInformationResponse;
    };
    sdk: {
      input: GetContactInformationCommandInput;
      output: GetContactInformationCommandOutput;
    };
  };
}
