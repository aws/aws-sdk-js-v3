// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProfileRequest, CreateProfileResponse } from "../models/models_0";
import { CreateProfile } from "../schemas/schemas_4_Segment";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProfileCommand}.
 */
export interface CreateProfileCommandInput extends CreateProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateProfileCommand}.
 */
export interface CreateProfileCommandOutput extends CreateProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a standard profile.</p>
 *          <p>A standard profile represents the following attributes for a customer profile in a
 *          domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateProfileCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateProfileCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateProfileRequest
 *   DomainName: "STRING_VALUE", // required
 *   AccountNumber: "STRING_VALUE",
 *   AdditionalInformation: "STRING_VALUE",
 *   PartyType: "INDIVIDUAL" || "BUSINESS" || "OTHER",
 *   BusinessName: "STRING_VALUE",
 *   FirstName: "STRING_VALUE",
 *   MiddleName: "STRING_VALUE",
 *   LastName: "STRING_VALUE",
 *   BirthDate: "STRING_VALUE",
 *   Gender: "MALE" || "FEMALE" || "UNSPECIFIED",
 *   PhoneNumber: "STRING_VALUE",
 *   MobilePhoneNumber: "STRING_VALUE",
 *   HomePhoneNumber: "STRING_VALUE",
 *   BusinessPhoneNumber: "STRING_VALUE",
 *   EmailAddress: "STRING_VALUE",
 *   PersonalEmailAddress: "STRING_VALUE",
 *   BusinessEmailAddress: "STRING_VALUE",
 *   Address: { // Address
 *     Address1: "STRING_VALUE",
 *     Address2: "STRING_VALUE",
 *     Address3: "STRING_VALUE",
 *     Address4: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     County: "STRING_VALUE",
 *     State: "STRING_VALUE",
 *     Province: "STRING_VALUE",
 *     Country: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE",
 *   },
 *   ShippingAddress: {
 *     Address1: "STRING_VALUE",
 *     Address2: "STRING_VALUE",
 *     Address3: "STRING_VALUE",
 *     Address4: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     County: "STRING_VALUE",
 *     State: "STRING_VALUE",
 *     Province: "STRING_VALUE",
 *     Country: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE",
 *   },
 *   MailingAddress: {
 *     Address1: "STRING_VALUE",
 *     Address2: "STRING_VALUE",
 *     Address3: "STRING_VALUE",
 *     Address4: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     County: "STRING_VALUE",
 *     State: "STRING_VALUE",
 *     Province: "STRING_VALUE",
 *     Country: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE",
 *   },
 *   BillingAddress: {
 *     Address1: "STRING_VALUE",
 *     Address2: "STRING_VALUE",
 *     Address3: "STRING_VALUE",
 *     Address4: "STRING_VALUE",
 *     City: "STRING_VALUE",
 *     County: "STRING_VALUE",
 *     State: "STRING_VALUE",
 *     Province: "STRING_VALUE",
 *     Country: "STRING_VALUE",
 *     PostalCode: "STRING_VALUE",
 *   },
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PartyTypeString: "STRING_VALUE",
 *   GenderString: "STRING_VALUE",
 *   ProfileType: "ACCOUNT_PROFILE" || "PROFILE",
 *   EngagementPreferences: { // EngagementPreferences
 *     Phone: [ // PhonePreferenceList
 *       { // ContactPreference
 *         KeyName: "STRING_VALUE",
 *         KeyValue: "STRING_VALUE",
 *         ProfileId: "STRING_VALUE",
 *         ContactType: "PhoneNumber" || "MobilePhoneNumber" || "HomePhoneNumber" || "BusinessPhoneNumber" || "EmailAddress" || "PersonalEmailAddress" || "BusinessEmailAddress",
 *       },
 *     ],
 *     Email: [ // EmailPreferenceList
 *       {
 *         KeyName: "STRING_VALUE",
 *         KeyValue: "STRING_VALUE",
 *         ProfileId: "STRING_VALUE",
 *         ContactType: "PhoneNumber" || "MobilePhoneNumber" || "HomePhoneNumber" || "BusinessPhoneNumber" || "EmailAddress" || "PersonalEmailAddress" || "BusinessEmailAddress",
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateProfileResponse
 * //   ProfileId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateProfileCommandInput - {@link CreateProfileCommandInput}
 * @returns {@link CreateProfileCommandOutput}
 * @see {@link CreateProfileCommandInput} for command's `input` shape.
 * @see {@link CreateProfileCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class CreateProfileCommand extends $Command
  .classBuilder<
    CreateProfileCommandInput,
    CreateProfileCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "CreateProfile", {})
  .n("CustomerProfilesClient", "CreateProfileCommand")
  .sc(CreateProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProfileRequest;
      output: CreateProfileResponse;
    };
    sdk: {
      input: CreateProfileCommandInput;
      output: CreateProfileCommandOutput;
    };
  };
}
