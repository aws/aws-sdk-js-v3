// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateProfileRequest,
  UpdateProfileRequestFilterSensitiveLog,
  UpdateProfileResponse,
} from "../models/models_0";
import { de_UpdateProfileCommand, se_UpdateProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandInput extends UpdateProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandOutput extends UpdateProfileResponse, __MetadataBearer {}

/**
 * <p>Updates the properties of a profile. The ProfileId is required for updating a customer
 *          profile.</p>
 *          <p>When calling the UpdateProfile API, specifying an empty string value means that any
 *          existing value will be removed. Not specifying a string value means that any value already
 *          there will be kept.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, UpdateProfileCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, UpdateProfileCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CustomerProfilesClient(config);
 * const input = { // UpdateProfileRequest
 *   DomainName: "STRING_VALUE", // required
 *   ProfileId: "STRING_VALUE", // required
 *   AdditionalInformation: "STRING_VALUE",
 *   AccountNumber: "STRING_VALUE",
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
 *   Address: { // UpdateAddress
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
 *   Attributes: { // UpdateAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PartyTypeString: "STRING_VALUE",
 *   GenderString: "STRING_VALUE",
 * };
 * const command = new UpdateProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProfileResponse
 * //   ProfileId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateProfileCommandInput - {@link UpdateProfileCommandInput}
 * @returns {@link UpdateProfileCommandOutput}
 * @see {@link UpdateProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateProfileCommand extends $Command
  .classBuilder<
    UpdateProfileCommandInput,
    UpdateProfileCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "UpdateProfile", {})
  .n("CustomerProfilesClient", "UpdateProfileCommand")
  .f(UpdateProfileRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateProfileCommand)
  .de(de_UpdateProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProfileRequest;
      output: UpdateProfileResponse;
    };
    sdk: {
      input: UpdateProfileCommandInput;
      output: UpdateProfileCommandOutput;
    };
  };
}
