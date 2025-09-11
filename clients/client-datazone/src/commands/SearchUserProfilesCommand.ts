// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  SearchUserProfilesInput,
  SearchUserProfilesInputFilterSensitiveLog,
  SearchUserProfilesOutput,
  SearchUserProfilesOutputFilterSensitiveLog,
} from "../models/models_2";
import { de_SearchUserProfilesCommand, se_SearchUserProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchUserProfilesCommand}.
 */
export interface SearchUserProfilesCommandInput extends SearchUserProfilesInput {}
/**
 * @public
 *
 * The output of {@link SearchUserProfilesCommand}.
 */
export interface SearchUserProfilesCommandOutput extends SearchUserProfilesOutput, __MetadataBearer {}

/**
 * <p>Searches user profiles in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, SearchUserProfilesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, SearchUserProfilesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // SearchUserProfilesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   userType: "SSO_USER" || "DATAZONE_USER" || "DATAZONE_SSO_USER" || "DATAZONE_IAM_USER", // required
 *   searchText: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchUserProfilesCommand(input);
 * const response = await client.send(command);
 * // { // SearchUserProfilesOutput
 * //   items: [ // UserProfileSummaries
 * //     { // UserProfileSummary
 * //       domainId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       type: "IAM" || "SSO",
 * //       status: "ASSIGNED" || "NOT_ASSIGNED" || "ACTIVATED" || "DEACTIVATED",
 * //       details: { // UserProfileDetails Union: only one key present
 * //         iam: { // IamUserProfileDetails
 * //           arn: "STRING_VALUE",
 * //           principalId: "STRING_VALUE",
 * //         },
 * //         sso: { // SsoUserProfileDetails
 * //           username: "STRING_VALUE",
 * //           firstName: "STRING_VALUE",
 * //           lastName: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchUserProfilesCommandInput - {@link SearchUserProfilesCommandInput}
 * @returns {@link SearchUserProfilesCommandOutput}
 * @see {@link SearchUserProfilesCommandInput} for command's `input` shape.
 * @see {@link SearchUserProfilesCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class SearchUserProfilesCommand extends $Command
  .classBuilder<
    SearchUserProfilesCommandInput,
    SearchUserProfilesCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "SearchUserProfiles", {})
  .n("DataZoneClient", "SearchUserProfilesCommand")
  .f(SearchUserProfilesInputFilterSensitiveLog, SearchUserProfilesOutputFilterSensitiveLog)
  .ser(se_SearchUserProfilesCommand)
  .de(de_SearchUserProfilesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchUserProfilesInput;
      output: SearchUserProfilesOutput;
    };
    sdk: {
      input: SearchUserProfilesCommandInput;
      output: SearchUserProfilesCommandOutput;
    };
  };
}
