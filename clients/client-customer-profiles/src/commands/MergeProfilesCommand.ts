// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MergeProfilesRequest, MergeProfilesResponse } from "../models/models_1";
import { MergeProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Runs an AWS Lambda job that does the following:
 *
 * 1. All the profileKeys in the `ProfileToBeMerged` will be moved to the main profile.
 * 2. All the objects in the `ProfileToBeMerged` will be moved to the main profile.
 * 3. All the `ProfileToBeMerged` will be deleted at the end.
 * 4. All the profileKeys in the `ProfileIdsToBeMerged` will be moved to the main profile.
 * 5. Standard fields are merged as follows:
 *
 *    1. Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.
 *    2. When there are conflicting fields:
 *
 *       1. If no `SourceProfileIds` entry is specified, the main Profile value is always taken.
 *       2. If a `SourceProfileIds` entry is specified, the specified profileId is always taken, even if it is a NULL value.
 *
 * You can use MergeProfiles together with [GetMatches](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html), which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, MergeProfilesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, MergeProfilesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
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
 *     ProfileType: "STRING_VALUE",
 *     EngagementPreferences: "STRING_VALUE",
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
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class MergeProfilesCommand extends command<MergeProfilesCommandInput, MergeProfilesCommandOutput>(
  _ep0,
  _mw0,
  "MergeProfiles",
  MergeProfiles$
) {
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
