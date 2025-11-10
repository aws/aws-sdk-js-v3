// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchGetProfileRequest, BatchGetProfileResponse } from "../models/models_0";
import { BatchGetProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetProfileCommand}.
 */
export interface BatchGetProfileCommandInput extends BatchGetProfileRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetProfileCommand}.
 */
export interface BatchGetProfileCommandOutput extends BatchGetProfileResponse, __MetadataBearer {}

/**
 * <p>Get a batch of profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, BatchGetProfileCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, BatchGetProfileCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // BatchGetProfileRequest
 *   DomainName: "STRING_VALUE", // required
 *   ProfileIds: [ // BatchGetProfileIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetProfileCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetProfileResponse
 * //   Errors: [ // BatchGetProfileErrorList
 * //     { // BatchGetProfileError
 * //       Code: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE", // required
 * //       ProfileId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Profiles: [ // ProfileList
 * //     { // Profile
 * //       ProfileId: "STRING_VALUE",
 * //       AccountNumber: "STRING_VALUE",
 * //       AdditionalInformation: "STRING_VALUE",
 * //       PartyType: "INDIVIDUAL" || "BUSINESS" || "OTHER",
 * //       BusinessName: "STRING_VALUE",
 * //       FirstName: "STRING_VALUE",
 * //       MiddleName: "STRING_VALUE",
 * //       LastName: "STRING_VALUE",
 * //       BirthDate: "STRING_VALUE",
 * //       Gender: "MALE" || "FEMALE" || "UNSPECIFIED",
 * //       PhoneNumber: "STRING_VALUE",
 * //       MobilePhoneNumber: "STRING_VALUE",
 * //       HomePhoneNumber: "STRING_VALUE",
 * //       BusinessPhoneNumber: "STRING_VALUE",
 * //       EmailAddress: "STRING_VALUE",
 * //       PersonalEmailAddress: "STRING_VALUE",
 * //       BusinessEmailAddress: "STRING_VALUE",
 * //       Address: { // Address
 * //         Address1: "STRING_VALUE",
 * //         Address2: "STRING_VALUE",
 * //         Address3: "STRING_VALUE",
 * //         Address4: "STRING_VALUE",
 * //         City: "STRING_VALUE",
 * //         County: "STRING_VALUE",
 * //         State: "STRING_VALUE",
 * //         Province: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //       },
 * //       ShippingAddress: {
 * //         Address1: "STRING_VALUE",
 * //         Address2: "STRING_VALUE",
 * //         Address3: "STRING_VALUE",
 * //         Address4: "STRING_VALUE",
 * //         City: "STRING_VALUE",
 * //         County: "STRING_VALUE",
 * //         State: "STRING_VALUE",
 * //         Province: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //       },
 * //       MailingAddress: {
 * //         Address1: "STRING_VALUE",
 * //         Address2: "STRING_VALUE",
 * //         Address3: "STRING_VALUE",
 * //         Address4: "STRING_VALUE",
 * //         City: "STRING_VALUE",
 * //         County: "STRING_VALUE",
 * //         State: "STRING_VALUE",
 * //         Province: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //       },
 * //       BillingAddress: {
 * //         Address1: "STRING_VALUE",
 * //         Address2: "STRING_VALUE",
 * //         Address3: "STRING_VALUE",
 * //         Address4: "STRING_VALUE",
 * //         City: "STRING_VALUE",
 * //         County: "STRING_VALUE",
 * //         State: "STRING_VALUE",
 * //         Province: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //         PostalCode: "STRING_VALUE",
 * //       },
 * //       Attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       FoundByItems: [ // foundByList
 * //         { // FoundByKeyValue
 * //           KeyName: "STRING_VALUE",
 * //           Values: [ // requestValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       PartyTypeString: "STRING_VALUE",
 * //       GenderString: "STRING_VALUE",
 * //       ProfileType: "ACCOUNT_PROFILE" || "PROFILE",
 * //       EngagementPreferences: { // EngagementPreferences
 * //         Phone: [ // PhonePreferenceList
 * //           { // ContactPreference
 * //             KeyName: "STRING_VALUE",
 * //             KeyValue: "STRING_VALUE",
 * //             ProfileId: "STRING_VALUE",
 * //             ContactType: "PhoneNumber" || "MobilePhoneNumber" || "HomePhoneNumber" || "BusinessPhoneNumber" || "EmailAddress" || "PersonalEmailAddress" || "BusinessEmailAddress",
 * //           },
 * //         ],
 * //         Email: [ // EmailPreferenceList
 * //           {
 * //             KeyName: "STRING_VALUE",
 * //             KeyValue: "STRING_VALUE",
 * //             ProfileId: "STRING_VALUE",
 * //             ContactType: "PhoneNumber" || "MobilePhoneNumber" || "HomePhoneNumber" || "BusinessPhoneNumber" || "EmailAddress" || "PersonalEmailAddress" || "BusinessEmailAddress",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetProfileCommandInput - {@link BatchGetProfileCommandInput}
 * @returns {@link BatchGetProfileCommandOutput}
 * @see {@link BatchGetProfileCommandInput} for command's `input` shape.
 * @see {@link BatchGetProfileCommandOutput} for command's `response` shape.
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
export class BatchGetProfileCommand extends $Command
  .classBuilder<
    BatchGetProfileCommandInput,
    BatchGetProfileCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "BatchGetProfile", {})
  .n("CustomerProfilesClient", "BatchGetProfileCommand")
  .sc(BatchGetProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetProfileRequest;
      output: BatchGetProfileResponse;
    };
    sdk: {
      input: BatchGetProfileCommandInput;
      output: BatchGetProfileCommandOutput;
    };
  };
}
