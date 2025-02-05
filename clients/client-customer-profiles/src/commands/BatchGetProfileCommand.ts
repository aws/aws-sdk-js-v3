// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchGetProfileRequest,
  BatchGetProfileResponse,
  BatchGetProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchGetProfileCommand, se_BatchGetProfileCommand } from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "BatchGetProfile", {})
  .n("CustomerProfilesClient", "BatchGetProfileCommand")
  .f(void 0, BatchGetProfileResponseFilterSensitiveLog)
  .ser(se_BatchGetProfileCommand)
  .de(de_BatchGetProfileCommand)
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
