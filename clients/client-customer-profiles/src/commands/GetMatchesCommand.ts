// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMatchesRequest, GetMatchesResponse } from "../models/models_0";
import { de_GetMatchesCommand, se_GetMatchesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or
 *             <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to
 *          enable identity resolution: set <code>Matching</code> to true.</p>
 *          <p>GetMatches returns potentially matching profiles, based on the results of the latest run
 *          of a machine learning process. </p>
 *          <important>
 *             <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly
 * batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every
 * Saturday at 12AM UTC to detect duplicate profiles in your domains. </p>
 *             <p>After the Identity Resolution Job completes, use the
 * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
 * API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from
 * S3.</p>
 *          </important>
 *          <p>Amazon Connect uses the following profile attributes to identify matches:</p>
 *          <ul>
 *             <li>
 *                <p>PhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>HomePhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>BusinessPhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>MobilePhoneNumber</p>
 *             </li>
 *             <li>
 *                <p>EmailAddress</p>
 *             </li>
 *             <li>
 *                <p>PersonalEmailAddress</p>
 *             </li>
 *             <li>
 *                <p>BusinessEmailAddress</p>
 *             </li>
 *             <li>
 *                <p>FullName</p>
 *             </li>
 *          </ul>
 *          <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing
 *          email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and
 *             <b>johndoe@anycompany.com</b>, or different phone number
 *          formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetMatchesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetMatchesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
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
export class GetMatchesCommand extends $Command
  .classBuilder<
    GetMatchesCommandInput,
    GetMatchesCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "GetMatches", {})
  .n("CustomerProfilesClient", "GetMatchesCommand")
  .f(void 0, void 0)
  .ser(se_GetMatchesCommand)
  .de(de_GetMatchesCommand)
  .build() {}
