// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchUsersRequest, SearchUsersResponse } from "../models/models_0";
import { de_SearchUsersCommand, se_SearchUsersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchUsersCommand}.
 */
export interface SearchUsersCommandInput extends SearchUsersRequest {}
/**
 * @public
 *
 * The output of {@link SearchUsersCommand}.
 */
export interface SearchUsersCommandOutput extends SearchUsersResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Searches users and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, SearchUsersCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, SearchUsersCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // SearchUsersRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SortCriteria: [ // SortList
 *     { // Sort
 *       Key: "STRING_VALUE", // required
 *       Value: "ASC" || "DESC", // required
 *     },
 *   ],
 * };
 * const command = new SearchUsersCommand(input);
 * const response = await client.send(command);
 * // { // SearchUsersResponse
 * //   Users: [ // UserDataList
 * //     { // UserData
 * //       UserArn: "STRING_VALUE",
 * //       FirstName: "STRING_VALUE",
 * //       LastName: "STRING_VALUE",
 * //       Email: "STRING_VALUE",
 * //       EnrollmentStatus: "INITIALIZED" || "PENDING" || "REGISTERED" || "DISASSOCIATING" || "DEREGISTERING",
 * //       EnrollmentId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   TotalCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchUsersCommandInput - {@link SearchUsersCommandInput}
 * @returns {@link SearchUsersCommandOutput}
 * @see {@link SearchUsersCommandInput} for command's `input` shape.
 * @see {@link SearchUsersCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class SearchUsersCommand extends $Command
  .classBuilder<
    SearchUsersCommandInput,
    SearchUsersCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AlexaForBusinessClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "SearchUsers", {})
  .n("AlexaForBusinessClient", "SearchUsersCommand")
  .f(void 0, void 0)
  .ser(se_SearchUsersCommand)
  .de(de_SearchUsersCommand)
  .build() {}
