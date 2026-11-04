// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMatchesRequest, GetMatchesResponse } from "../models/models_0";
import { GetMatches$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMatchesCommand}.
 */
export interface GetMatchesCommandInput extends GetMatchesRequest {}
/**
 * @public
 *
 * The output of {@link GetMatchesCommand}.
 */
export interface GetMatchesCommandOutput extends GetMatchesResponse, __MetadataBearer {}

/**
 * Before calling this API, use [CreateDomain](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html) or [UpdateDomain](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html) to enable identity resolution: set `Matching` to true.
 *
 * GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process.
 *
 * > **Important:**
 * >
 * > The process of matching duplicate profiles. If `Matching` = `true`, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains.
 * >
 * > After the Identity Resolution Job completes, use the [GetMatches](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html) API to return and review the results. Or, if you have configured `ExportingConfig` in the `MatchingRequest`, you can download the results from S3.
 *
 * Amazon Connect uses the following profile attributes to identify matches:
 *
 * - PhoneNumber
 * - HomePhoneNumber
 * - BusinessPhoneNumber
 * - MobilePhoneNumber
 * - EmailAddress
 * - PersonalEmailAddress
 * - BusinessEmailAddress
 * - FullName
 *
 * For example, two or more profiles—with spelling mistakes such as **John Doe** and **Jhn Doe**, or different casing email addresses such as **JOHN_DOE@ANYCOMPANY.COM** and **johndoe@anycompany.com**, or different phone number formats such as **555-010-0000** and **+1-555-010-0000**—can be detected as belonging to the same customer **John Doe** and merged into a unified profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetMatchesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetMatchesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetMatchesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new GetMatchesCommand(input);
 * const response = await client.send(command);
 * // { // GetMatchesResponse
 * //   NextToken: "STRING_VALUE",
 * //   MatchGenerationDate: new Date("TIMESTAMP"),
 * //   PotentialMatches: Number("int"),
 * //   Matches: [ // MatchesList
 * //     { // MatchItem
 * //       MatchId: "STRING_VALUE",
 * //       ProfileIds: [ // ProfileIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       ConfidenceScore: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMatchesCommandInput - {@link GetMatchesCommandInput}
 * @returns {@link GetMatchesCommandOutput}
 * @see {@link GetMatchesCommandInput} for command's `input` shape.
 * @see {@link GetMatchesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class GetMatchesCommand extends command<GetMatchesCommandInput, GetMatchesCommandOutput>(
  _ep0,
  _mw0,
  "GetMatches",
  GetMatches$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMatchesRequest;
      output: GetMatchesResponse;
    };
    sdk: {
      input: GetMatchesCommandInput;
      output: GetMatchesCommandOutput;
    };
  };
}
