// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { MergeProfilesRequest, MergeProfilesResponse } from "../models/models_0";
import { de_MergeProfilesCommand, se_MergeProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MergeProfilesCommand}.
 */
export interface MergeProfilesCommandInput extends MergeProfilesRequest {}
/**
 * @public
 *
 * The output of {@link MergeProfilesCommand}.
 */
export interface MergeProfilesCommandOutput extends MergeProfilesResponse, __MetadataBearer {}

/**
 * <p>Runs an AWS Lambda job that does the following:</p>
 *          <ol>
 *             <li>
 *                <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the
 *                main profile.</p>
 *             </li>
 *             <li>
 *                <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main
 *                profile.</p>
 *             </li>
 *             <li>
 *                <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p>
 *             </li>
 *             <li>
 *                <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the
 *                main profile.</p>
 *             </li>
 *             <li>
 *                <p>Standard fields are merged as follows:</p>
 *                <ol>
 *                   <li>
 *                      <p>Fields are always "union"-ed if there are no conflicts in standard fields or
 *                      attributeKeys.</p>
 *                   </li>
 *                   <li>
 *                      <p>When there are conflicting fields:</p>
 *                      <ol>
 *                         <li>
 *                            <p>If no <code>SourceProfileIds</code> entry is specified, the main
 *                            Profile value is always taken. </p>
 *                         </li>
 *                         <li>
 *                            <p>If a <code>SourceProfileIds</code> entry is specified, the specified
 *                            profileId is always taken, even if it is a NULL value.</p>
 *                         </li>
 *                      </ol>
 *                   </li>
 *                </ol>
 *             </li>
 *          </ol>
 *          <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which
 *          returns potentially matching profiles, or use it with the results of another matching
 *          system. After profiles have been merged, they cannot be separated (unmerged).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, MergeProfilesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, MergeProfilesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CustomerProfilesClient(config);
 * const input = { // MergeProfilesRequest
 *   DomainName: "STRING_VALUE", // required
 *   MainProfileId: "STRING_VALUE", // required
 *   ProfileIdsToBeMerged: [ // ProfileIdToBeMergedList // required
 *     "STRING_VALUE",
 *   ],
 *   FieldSourceProfileIds: { // FieldSourceProfileIds
 *     AccountNumber: "STRING_VALUE",
 *     AdditionalInformation: "STRING_VALUE",
 *     PartyType: "STRING_VALUE",
 *     BusinessName: "STRING_VALUE",
 *     FirstName: "STRING_VALUE",
 *     MiddleName: "STRING_VALUE",
 *     LastName: "STRING_VALUE",
 *     BirthDate: "STRING_VALUE",
 *     Gender: "STRING_VALUE",
 *     PhoneNumber: "STRING_VALUE",
 *     MobilePhoneNumber: "STRING_VALUE",
 *     HomePhoneNumber: "STRING_VALUE",
 *     BusinessPhoneNumber: "STRING_VALUE",
 *     EmailAddress: "STRING_VALUE",
 *     PersonalEmailAddress: "STRING_VALUE",
 *     BusinessEmailAddress: "STRING_VALUE",
 *     Address: "STRING_VALUE",
 *     ShippingAddress: "STRING_VALUE",
 *     MailingAddress: "STRING_VALUE",
 *     BillingAddress: "STRING_VALUE",
 *     Attributes: { // AttributeSourceIdMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new MergeProfilesCommand(input);
 * const response = await client.send(command);
 * // { // MergeProfilesResponse
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MergeProfilesCommandInput - {@link MergeProfilesCommandInput}
 * @returns {@link MergeProfilesCommandOutput}
 * @see {@link MergeProfilesCommandInput} for command's `input` shape.
 * @see {@link MergeProfilesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
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
export class MergeProfilesCommand extends $Command
  .classBuilder<
    MergeProfilesCommandInput,
    MergeProfilesCommandOutput,
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
  .s("CustomerProfiles_20200815", "MergeProfiles", {})
  .n("CustomerProfilesClient", "MergeProfilesCommand")
  .f(void 0, void 0)
  .ser(se_MergeProfilesCommand)
  .de(de_MergeProfilesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MergeProfilesRequest;
      output: MergeProfilesResponse;
    };
    sdk: {
      input: MergeProfilesCommandInput;
      output: MergeProfilesCommandOutput;
    };
  };
}
